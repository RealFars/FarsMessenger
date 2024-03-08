importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js");

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

workbox.routing.registerRoute(
    ({request}) => request.destination === "image",
    new workbox.strategies.NetworkFirst()
);
