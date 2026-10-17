// WORDSHIFT service worker: precache the game so it starts offline.
const CACHE = 'wordshift-v1.0.0';
const FILES = ["./", "index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "js/act2.js?v1.0.0", "js/act3.js?v1.0.0", "js/audio.js?v1.0.0", "js/data.js?v1.0.0", "js/gfx.js?v1.0.0", "js/main.js?v1.0.0", "js/ui.js?v1.0.0"];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('wordshift-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  if (u.origin === location.origin) { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); return; }
  if (/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)) {
    e.respondWith(caches.open(CACHE).then(c => c.match(e.request).then(r => r || fetch(e.request).then(res => { c.put(e.request, res.clone()); return res; }))));
  }
});
