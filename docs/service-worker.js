// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache_v4';
const RUNTIME = 'runtime_v3';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
  '/euchre.gg', // Alias for index.html
  '/euchre.gg/cards/TC.svg',
  '/euchre.gg/cards/TD.svg',
  '/euchre.gg/cards/TH.svg',
  '/euchre.gg/cards/TS.svg',
  '/euchre.gg/cards/4C.svg',
  '/euchre.gg/cards/4D.svg',
  '/euchre.gg/cards/4H.svg',
  '/euchre.gg/cards/4S.svg',
  '/euchre.gg/cards/6C.svg',
  '/euchre.gg/cards/6D.svg',
  '/euchre.gg/cards/6H.svg',
  '/euchre.gg/cards/6S.svg',
  '/euchre.gg/cards/9C.svg',
  '/euchre.gg/cards/9D.svg',
  '/euchre.gg/cards/9H.svg',
  '/euchre.gg/cards/9S.svg',
  '/euchre.gg/cards/AC.svg',
  '/euchre.gg/cards/AD.svg',
  '/euchre.gg/cards/AH.svg',
  '/euchre.gg/cards/AS.svg',
  '/euchre.gg/cards/BLUE_BACK.svg',
  '/euchre.gg/cards/C.svg',
  '/euchre.gg/cards/D.svg',
  '/euchre.gg/cards/H.svg',
  '/euchre.gg/cards/JC.svg',
  '/euchre.gg/cards/JD.svg',
  '/euchre.gg/cards/JH.svg',
  '/euchre.gg/cards/JS.svg',
  '/euchre.gg/cards/KC.svg',
  '/euchre.gg/cards/KD.svg',
  '/euchre.gg/cards/KH.svg',
  '/euchre.gg/cards/KS.svg',
  '/euchre.gg/cards/QC.svg',
  '/euchre.gg/cards/QD.svg',
  '/euchre.gg/cards/QH.svg',
  '/euchre.gg/cards/QS.svg',
  '/euchre.gg/cards/RED_BACK.svg',
  '/euchre.gg/cards/S.svg',
  '/euchre.gg/images/dealer.svg',
  '/euchre.gg/images/icon-192.png',
  '/euchre.gg/images/icon-512.png',
  '/euchre.gg/images/table.jpg',
  '/euchre.gg/index.html',
  '/euchre.gg/manifest.json',
  '/euchre.gg/service-worker.js'
];

const RUNTIME_URLS = [
  '/euchre.gg/euchre.js'
];

// The install handler takes care of precaching the resources we always need.
// Always refresh the runtime cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => caches.open(RUNTIME))
      .then(cache => cache.addAll(RUNTIME_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
    );
  }
});
