const cacheName = "cache-0.4.3-alpha";

const contentToCache = [
	"/icons/favicon.ico",
	"/icons/close.svg",
	"/icons/back.svg",
	"/images/background.svg",
	"/logo/logo.png",
	"/logo/w-192-logo.png",
	"/global.css",
	"/index.html",
	"/manifest.json",
	"/build/bundle.css",
	"/build/bundle.js"
];

self.addEventListener('install', (e) => {
	e.waitUntil(
		caches.open(cacheName).then((cache) => {
			return cache.addAll(contentToCache);
		})
	);
});

self.addEventListener('fetch', (e) => {
	e.respondWith(
		caches.match(e.request).then((r) => {
			return r || fetch(e.request).then((response) => {
				return caches.open(cacheName).then((cache) => {
					cache.put(e.request, response.clone());
					return response;
				});
			});
		})
	);
});

self.addEventListener('activate', (e) => {
	e.waitUntil(
		caches.keys().then((keyList) => {
			return Promise.all(keyList.map((key) => {
				if(key !== cacheName) {
					return caches.delete(key);
				}
			}));
		})
	);
});
