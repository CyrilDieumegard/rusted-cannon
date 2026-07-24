const CACHE_NAME='rusted-cannon-v3';
const PRECACHE=[
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.svg',
  './social-card.png',
  './assets/audio/stage-1-superhero-cc0.ogg',
  './assets/audio/stage-2-jungle-battle-cc0.ogg',
  './assets/audio/stage-3-oldschool-action-cc0.ogg'
];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(PRECACHE)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  if (event.request.method!=='GET') return;
  if (event.request.mode==='navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response=>{
          const copy=response.clone();
          caches.open(CACHE_NAME).then(cache=>cache.put('./index.html',copy));
          return response;
        })
        .catch(()=>caches.match('./index.html'))
    );
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});
