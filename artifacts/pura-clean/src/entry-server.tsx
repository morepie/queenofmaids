import { renderToString } from 'react-dom/server';
import { Router } from 'wouter';
import { memoryLocation } from 'wouter/memory-location';
import { HelmetProvider, type FilledContext } from 'react-helmet-async';
import App from './App';

export async function render(url: string): Promise<{ html: string; head: string }> {
  const helmetContext = {} as FilledContext;
  const { hook } = memoryLocation({ path: url, static: true });

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <Router hook={hook}>
        <App />
      </Router>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;
  const head = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ]
        .map((s) => s.trim())
        .filter(Boolean)
        .join('\n    ')
    : '<title>House Cleaning &amp; Maid Services | Queen of Maids</title>';

  return { html, head };
}
