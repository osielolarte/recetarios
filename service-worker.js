// service-worker.js

const CACHE_NAME = 'recetario-cache-v2'; // Increment cache version
const urlsToCache = [
  './', // Cache the root index
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './favicon.png', // Add favicon
  './data/veracruz.json', // Add data file
  './data/unicef.json', // Add data file
  // Add placeholder image URLs if you want them cached, but be mindful of cache size
  // 'https://placehold.co/600x400/e2e8f0/4a5568?text=Imagen+no+disponible',
  // 'https://placehold.co/600x400/e0e7ff/4338ca?text=Platillo+Veracruz',
  // 'https://placehold.co/600x400/a5f3fc/0e7490?text=Platillo+UNICEF',
  // Add font URL if needed
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  'https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2' // Example font file (check Network tab for actual URL)
];

// Install event: Cache core assets
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching core assets:', urlsToCache);
        // Use addAll for atomic caching
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('[Service Worker] Failed to cache core assets:', error);
      })
  );
  self.skipWaiting(); // Force activation
});

// Activate event: Clean up old caches
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim(); // Take control immediately
});

// Fetch event: Implement Stale-While-Revalidate strategy
self.addEventListener('fetch', event => {
  // Skip non-GET requests and requests to external domains if not needed
  if (event.request.method !== 'GET' /*|| !event.request.url.startsWith(self.location.origin)*/) {
    // Allow requests like POST or to external APIs to pass through
    // If you need to cache external resources (like images), adjust the condition
     // console.log('[Service Worker] Skipping non-GET or external request:', event.request.url);
    return;
  }

   // Strategy: Stale-While-Revalidate
   // 1. Try to get the response from the cache.
   // 2. If it's in the cache, return it immediately (stale).
   // 3. Regardless of cache hit/miss, fetch the resource from the network in the background.
   // 4. If the network fetch is successful, update the cache with the fresh version (revalidate).
   // 5. If the resource is not in the cache initially, return the network response directly.

  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(cachedResponse => {
        // Fetch from network in the background to update cache
        const fetchPromise = fetch(event.request).then(networkResponse => {
          // Check if we received a valid response
          if (networkResponse && networkResponse.ok) {
             // Clone the response because it's a stream and can only be consumed once
             const responseToCache = networkResponse.clone();
             cache.put(event.request, responseToCache);
             // console.log('[Service Worker] Updated cache for:', event.request.url);
          } else if (networkResponse) {
             // Log network errors but don't cache them
             console.warn(`[Service Worker] Network request failed for ${event.request.url}: Status ${networkResponse.status}`);
          }
          return networkResponse; // Return the network response for the fetch chain
        }).catch(error => {
            console.error('[Service Worker] Network fetch failed:', error, event.request.url);
            // Optionally, return a custom offline fallback page/response here if cache also fails
            // For now, we rely on the cachedResponse if available
            // return caches.match('./offline.html'); // Example fallback
        });

        // Return cached response immediately if available, otherwise wait for network
        if (cachedResponse) {
            // console.log('[Service Worker] Serving from cache:', event.request.url);
            return cachedResponse;
        } else {
            // console.log('[Service Worker] Serving from network (not in cache):', event.request.url);
            return fetchPromise; // Return the network fetch promise directly
        }
      });
    })
  );
});
