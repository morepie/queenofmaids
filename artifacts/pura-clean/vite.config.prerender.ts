import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import type { Plugin } from 'vite';

// Stub any module that accesses `window` at import time. Their actual DOM
// manipulation only runs inside useEffect(), which is never called during
// renderToString(), so an empty stub is safe.
function ssrStubBrowserOnlyModules(): Plugin {
  const stubbed = new Set(['leaflet', 'leaflet/dist/leaflet.css']);
  return {
    name: 'ssr-stub-browser-only',
    enforce: 'pre',
    resolveId(id) {
      if (stubbed.has(id) || id.startsWith('leaflet/')) {
        return '\0ssr-browser-stub';
      }
    },
    load(id) {
      if (id === '\0ssr-browser-stub') {
        return 'export default {}';
      }
    },
  };
}

// wouter's memoryLocation calls useSyncExternalStore without getServerSnapshot,
// which React 18 requires during renderToString. Patch the shim so getServerSnapshot
// defaults to getSnapshot (which is the correct value for a static memory location).
function ssrPatchUseSyncExternalStore(): Plugin {
  return {
    name: 'ssr-patch-use-sync-external-store',
    enforce: 'pre',
    resolveId(id) {
      if (id === 'use-sync-external-store/shim/index.js') {
        return '\0ssr-use-sync-external-store';
      }
    },
    load(id) {
      if (id === '\0ssr-use-sync-external-store') {
        return `
import { useSyncExternalStore as _useSES } from 'react';
export const useSyncExternalStore = (subscribe, getSnapshot, getServerSnapshot) =>
  _useSES(subscribe, getSnapshot, getServerSnapshot ?? getSnapshot);
`;
      }
    },
  };
}

// Minimal config for SSR prerender build — no PORT or BASE_PATH required.
export default defineConfig({
  base: '/',
  plugins: [ssrStubBrowserOnlyModules(), ssrPatchUseSyncExternalStore(), react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  ssr: {
    // Bundle these to avoid CJS/ESM issues in the SSR bundle
    noExternal: ['react-helmet-async', 'wouter'],
  },
});
