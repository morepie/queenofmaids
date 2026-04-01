import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Inline data to avoid @/ alias resolution issues in plain tsx
const metros = [
  { stateAbbr: 'AZ', cities: ['phoenix','scottsdale','tempe','mesa','chandler','gilbert','glendale','peoria','surprise','queen-creek','avondale','goodyear','fountain-hills'] },
  { stateAbbr: 'UT', cities: ['salt-lake-city','sandy','west-jordan','provo','orem','draper','murray','cottonwood-heights','holladay','south-jordan','lehi','american-fork'] },
  { stateAbbr: 'NV', cities: ['las-vegas','henderson','north-las-vegas','summerlin','spring-valley','enterprise','paradise','whitney','centennial-hills','aliante'] },
  { stateAbbr: 'CO', cities: ['denver','aurora','lakewood','arvada','westminster','thornton','centennial','highlands-ranch','littleton','parker','castle-rock','broomfield'] },
];

const serviceSlugs = [
  'standard-cleaning','deep-cleaning','one-time-cleaning','recurring-cleaning',
  'move-in-cleaning','move-out-cleaning','vacation-rental-cleaning',
  'monthly-cleaning','biweekly-cleaning','weekly-cleaning','basic-cleaning','custom-cleanings',
];

const SITE_URL = 'https://queenofmaids.com';
const today = new Date().toISOString().split('T')[0];

interface SitemapEntry {
  url: string;
  changefreq: string;
  priority: string;
}

const entries: SitemapEntry[] = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/services', changefreq: 'weekly', priority: '0.9' },
  { url: '/memberships', changefreq: 'monthly', priority: '0.8' },
  { url: '/service-areas', changefreq: 'monthly', priority: '0.8' },
  { url: '/terms', changefreq: 'yearly', priority: '0.3' },
  { url: '/privacy', changefreq: 'yearly', priority: '0.3' },
];

for (const slug of serviceSlugs) {
  entries.push({ url: `/services/${slug}`, changefreq: 'monthly', priority: '0.8' });
}

for (const metro of metros) {
  for (const city of metro.cities) {
    entries.push({ url: `/house-cleaning/${city}`, changefreq: 'monthly', priority: '0.8' });
  }
}

for (const metro of metros) {
  for (const city of metro.cities) {
    for (const service of serviceSlugs) {
      entries.push({ url: `/house-cleaning/${city}/${service}`, changefreq: 'monthly', priority: '0.7' });
    }
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(e => `  <url>
    <loc>${SITE_URL}${e.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const outDir = path.resolve(__dirname, '../dist/public');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const outPath = path.join(outDir, 'sitemap.xml');
fs.writeFileSync(outPath, xml);
console.log(`Sitemap generated: ${entries.length} URLs → ${outPath}`);
