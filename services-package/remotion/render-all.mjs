// Renders every service composition to ../videos/<id>.mp4
// Usage: node render-all.mjs [id1 id2 ...]  (no args = render all)
import {execSync} from 'node:child_process';

const ALL = [
  'realtime-dashboards',
  'systems-integration',
  'visitor-analytics',
  'branch-operations-app',
  'inventory-intelligence',
  'product-analytics',
  'targets-performance',
  'automated-reports',
  'ai-business-assistant',
  'ecommerce-sync',
  'mission-control',
  'finance-vat-reports',
];

const ids = process.argv.slice(2).length ? process.argv.slice(2) : ALL;

for (const id of ids) {
  const t0 = Date.now();
  console.log(`\n=== Rendering ${id} ===`);
  execSync(`npx remotion render src/index.ts ${id} "../videos/${id}.mp4" --codec=h264`, {
    stdio: 'inherit',
  });
  console.log(`=== Done ${id} in ${((Date.now() - t0) / 1000).toFixed(0)}s ===`);
}
console.log('\nAll renders complete.');
