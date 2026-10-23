const CACHE='wordlings-v9';
const ART_CACHE='wordlings-v9-art';
const CORE=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png',
'./assets/eggs/normal.png','./assets/eggs/fuego.png','./assets/eggs/agua.png','./assets/eggs/electrico.png','./assets/eggs/planta.png','./assets/eggs/hielo.png','./assets/eggs/lucha.png','./assets/eggs/veneno.png','./assets/eggs/tierra.png','./assets/eggs/volador.png','./assets/eggs/psiquico.png','./assets/eggs/bicho.png','./assets/eggs/roca.png','./assets/eggs/fantasma.png','./assets/eggs/dragon.png','./assets/eggs/acero.png','./assets/eggs/siniestro.png','./assets/eggs/hada.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('wordlings-v')&&k!==CACHE&&k!==ART_CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);
 const isPokemonImage=url.hostname==='raw.githubusercontent.com'&&url.pathname.includes('/sprites/pokemon/');
 if(url.origin!==self.location.origin&&!isPokemonImage)return;
 event.respondWith((async()=>{
   const store=isPokemonImage?ART_CACHE:CACHE;
   const cache=await caches.open(store);
   const hit=await cache.match(event.request);
   if(hit && (!isPokemonImage || (hit.headers.get('content-type')||'').toLowerCase().startsWith('image/')))return hit;
   if(hit)await cache.delete(event.request);
   try{
     const response=await fetch(event.request);
     if(response.ok && (!isPokemonImage || (response.headers.get('content-type')||'').toLowerCase().startsWith('image/'))){
       await cache.put(event.request,response.clone());
     }
     return response;
   }catch(error){
     if(event.request.mode==='navigate')return (await caches.match('./index.html'))||new Response('Offline',{status:503});
     return new Response('',{status:504,statusText:'Offline resource unavailable'});
   }
 })());
});
