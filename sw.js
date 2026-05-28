const CACHE_NAME = 'astrohopper-v1';
const ASSETS = [
  '2026_05_27_DK_AstrohopperRaAndDec.html',
  // Update with your actual filenames
  'main.js',
  'manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
