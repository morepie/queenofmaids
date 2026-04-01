import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { build } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

// All metros and services inlined to avoid @/ alias resolution issues
const metros = [
  { cities: ['phoenix','scottsdale','tempe','mesa','chandler','gilbert','glendale','peoria','surprise','queen-creek','avondale','goodyear','fountain-hills'] },
  { cities: ['salt-lake-city','sandy','west-jordan','provo','orem','draper','murray','cottonwood-heights','holladay','south-jordan','lehi','american-fork'] },
  { cities: ['las-vegas','henderson','north-las-vegas','summerlin','spring-valley','enterprise','paradise','whitney','centennial-hills','aliante'] },
  { cities: ['denver','aurora','lakewood','arvada','westminster','thornton','centennial','highlands-ranch','littleton','parker','castle-rock','broomfield'] },
];

const serviceSlugs = [
  'standard-cleaning','deep-cleaning','one-time-cleaning','recurring-cleaning',
  'move-in-cleaning','move-out-cleaning','vacation-rental-cleaning',
  'monthly-cleaning','biweekly-cleaning','weekly-cleaning','basic-cleaning','custom-cleanings',
];

function getAllRoutes(): string[] {
  const routes: string[] = [
    '/',
    '/services',
    '/memberships',
    '/service-areas',
    '/terms',
    '/privacy',
  ];

  for (const slug of serviceSlugs) {
    routes.push(`/services/${slug}`);
  }

  for (const metro of metros) {
    for (const city of metro.cities) {
      routes.push(`/house-cleaning/${city}`);
    }
  }

  for (const metro of metros) {
    for (const city of metro.cities) {
      for (const service of serviceSlugs) {
        routes.push(`/house-cleaning/${city}/${service}`);
      }
    }
  }

  return routes;
}

type RenderFn = (url: string) => Promise<{ html: string; head: string }>;

async function main() {
  console.log('Building SSR bundle...');

  await build({
    configFile: path.resolve(root, 'vite.config.prerender.ts'),
    build: {
      ssr: path.resolve(root, 'src/entry-server.tsx'),
      outDir: path.resolve(root, 'dist/server'),
      emptyOutDir: true,
      rollupOptions: {
        output: {
          entryFileNames: 'entry-server.js',
        },
      },
    },
    logLevel: 'warn',
  });

  console.log('SSR bundle ready. Prerendering routes...');

  // Dynamic import of the SSR bundle (must be a fresh import after build)
  const serverEntry = path.resolve(root, 'dist/server/entry-server.js');

  // Clear module cache by appending a timestamp query
  const { render } = (await import(`${serverEntry}?t=${Date.now()}`)) as { render: RenderFn };

  const template = fs.readFileSync(path.resolve(root, 'dist/public/index.html'), 'utf-8');
  const routes = getAllRoutes();

  let success = 0;
  let failures = 0;

  const BATCH_SIZE = 25;
  for (let i = 0; i < routes.length; i += BATCH_SIZE) {
    const batch = routes.slice(i, i + BATCH_SIZE);
    await Promise.all(
      batch.map(async (url) => {
        try {
          const { html, head } = await render(url);

          // Inject rendered HTML — support both placeholder and fallback patterns
          let pageHtml = template;

          // 1. Inject body content
          if (pageHtml.includes('<!--ssr-outlet-->')) {
            pageHtml = pageHtml.replace('<!--ssr-outlet-->', html);
          } else {
            // Replace root div regardless of existing content
            pageHtml = pageHtml.replace(
              /<div id="root">[^]*?<\/div>/,
              `<div id="root">${html}</div>`,
            );
          }

          // 2. Inject head tags (title, meta, JSON-LD schemas, canonical, OG)
          if (pageHtml.includes('<!--ssr-head-->')) {
            pageHtml = pageHtml.replace('<!--ssr-head-->', head);
          } else {
            // Strip any existing <title> tags so Helmet's takes over
            pageHtml = pageHtml.replace(/<title>[^<]*<\/title>/g, '');
            pageHtml = pageHtml.replace('</head>', `  ${head}\n  </head>`);
          }

          const outPath =
            url === '/'
              ? path.resolve(root, 'dist/public/index.html')
              : path.resolve(root, `dist/public${url}/index.html`);

          fs.mkdirSync(path.dirname(outPath), { recursive: true });
          fs.writeFileSync(outPath, pageHtml);
          success++;
        } catch (err) {
          console.error(`  ✗ ${url}: ${(err as Error).message}`);
          failures++;
        }
      }),
    );

    const done = Math.min(i + BATCH_SIZE, routes.length);
    if (done % 100 === 0 || done === routes.length) {
      console.log(`  ${done}/${routes.length} routes rendered`);
    }
  }

  console.log(`\nPrerender complete: ${success} ✓, ${failures} ✗`);

  if (failures > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
