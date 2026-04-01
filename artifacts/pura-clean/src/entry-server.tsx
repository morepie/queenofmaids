import { renderToString } from 'react-dom/server';
import { Router } from 'wouter';
import { memoryLocation } from 'wouter/memory-location';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

// In React 18, react-helmet-async renders head tags inline at the start of the
// HTML output rather than via context. This splits them out so they can be
// injected into <head> where they belong.
function splitHeadFromBody(html: string): { head: string; body: string } {
  // Tags that belong in <head> — they appear at the very start of the rendered output
  const headTagPattern =
    /^(?:<(?:link|meta|base)[^>]*\/?>\s*|<title[\s\S]*?<\/title>\s*|<style[\s\S]*?<\/style>\s*|<noscript[\s\S]*?<\/noscript>\s*|<script[\s\S]*?<\/script>\s*)*/;

  const match = html.match(headTagPattern);
  const head = match ? match[0].trim() : '';
  const body = html.slice(match ? match[0].length : 0);
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

  const { head, body } = splitHeadFromBody(rawHtml);

  return {
    html: body,
    head: head || '<title>House Cleaning &amp; Maid Services | Queen of Maids</title>',
  };
}
