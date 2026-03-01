const CACHE_NAME = 'anonim-cache-v1';
const assets = [
  'anonim.html',
  'manifest.json',
  'https://cdn-icons-png.flaticon.com/512/2592/2592231.png'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Fetching assets
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
