const V='piutang-v1',CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-180.png'],
LIBS=['https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js','https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js','https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.4.0/exceljs.min.js','https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js','https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js','https://cdnjs.cloudflare.com/ajax/libs/tesseract.js/5.1.1/tesseract.min.js'];
self.addEventListener('install',e=>{e.waitUntil((async()=>{const c=await caches.open(V);await c.addAll(CORE);
  await Promise.all(LIBS.map(async u=>{try{await c.put(u,await fetch(u,{mode:'no-cors'}))}catch(_){}}));self.skipWaiting()})())});
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k!=V)await caches.delete(k);await clients.claim()})()));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!='GET')return;const own=new URL(r.url).origin==location.origin;
  e.respondWith((async()=>{const c=await caches.open(V),hit=await c.match(r);
    const net=fetch(r).then(res=>{if(res.status==200||res.type=='opaque')c.put(r,res.clone()).catch(()=>{});return res}).catch(()=>null);
    if(own){const res=await net;return res||hit||(r.mode=='navigate'?await c.match('./index.html'):Response.error())}   // aplikasi: versi terbaru bila online, cache bila offline
    return hit||(await net)||Response.error()})())});
