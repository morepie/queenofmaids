import { renderToString } from 'react-dom/server';
import { Router } from 'wouter';
import { memoryLocation } from 'wouter/memory-location';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

// In React 18, react-helmet-async v3 renders head tags inline in the HTML output
// rather than aggregating them via context. This function:
// 1. Extracts leading head tags (link, title, meta) from the start of the HTML
// 2. Also extracts JSON-LD script tags from anywhere in the HTML
// Both are moved into <head> where they belong.
function extractHeadTags(rawHtml: string): { head: string; body: string } {
  // --- Step 1: Extract leading head tags (Helmet renders link/title/meta at the top) ---
  const leadingPattern =
    /^(?:<(?:link|meta|base)[^>]*\/?>\s*|<title[\s\S]*?<\/title>\s*|<style[\s\S]*?<\/style>\s*|<noscript[\s\S]*?<\/noscript>\s*|<script(?!\s+type="application\/ld\+json")[\s\S]*?<\/script>\s*)*/;
  const leadingMatch = rawHtml.match(leadingPattern);
  const leadingHead = leadingMatch ? leadingMatch[0].trim() : '';
  let body = rawHtml.slice(leadingMatch ? leadingMatch[0].length : 0);

  // --- Step 2: Extract JSON-LD script tags from anywhere in the remaining body ---
  const schemaScripts: string[] = [];
  const schemaPattern = /<script\s+type="application\/ld\+json"[\s\S]*?<\/script>/g;
  body = body.replace(schemaPattern, (match) => {
    schemaScripts.push(match);
    return '';
  });

  const head = [leadingHead, ...schemaScripts].filter(Boolean).join('\n    ');

  return { head, body };
}

export async function render(url: string): Promise<{ html: string; head: string }> {
  const helmetContext = {};
  const { hook } = memoryLocation({ path: url, static: true });

  const rawHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <Router hook={hook}>
        <App />
      </Router>
    </HelmetProvider>
  );

  const { head, body } = extractHeadTags(rawHtml);

  return {
    html: body,
    head: head || '<title>House Cleaning &amp; Maid Services | Queen of Maids</title>',
  };
}
