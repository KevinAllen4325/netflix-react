"use strict";var precacheConfig=[["/netflix-react/index.html","b33dbbaf3fc1c82fb02facfc09cc47bb"],["/netflix-react/static/css/main.68dab3bd.css","c7abaf4c2d35f08473cf984ac5be5286"],["/netflix-react/static/js/main.f12d7d2c.js","c9f9f9c60c4e7a6707274f606b8a55e2"],["/netflix-react/static/media/D.6c747d72.jpg","6c747d7240e12f7db5431216ac2bea9f"],["/netflix-react/static/media/IAS.a7b15773.jpg","a7b1577393d53dfffe131c9188dec685"],["/netflix-react/static/media/LK.8c307001.jpg","8c307001a696992d08931db2a2efaf01"],["/netflix-react/static/media/PandR.bc9da70c.jpg","bc9da70c514d19e3eebcc203924ad5e2"],["/netflix-react/static/media/TLJ.865c334d.jpg","865c334d8fcb0a35dd10aec672cbf689"],["/netflix-react/static/media/TO.a67255de.jpg","a67255de9384a0851c6d26e7ef8365a6"],["/netflix-react/static/media/TR.62340e93.jpg","62340e93f38d2c6dfbaef605364d8a2a"],["/netflix-react/static/media/d-poster.35e810bd.jpg","35e810bdfc7e5ef65d77b3523f56a488"],["/netflix-react/static/media/ias-poster.5dfa2e7d.jpg","5dfa2e7dee850eb818ece6470cfa0512"],["/netflix-react/static/media/intertellar.fc40873d.jpg","fc40873d35644f398c749b35cb26a0f9"],["/netflix-react/static/media/ints-poster.11f64faf.jpg","11f64faf86872ab7985ba51914f5a29e"],["/netflix-react/static/media/is.157babf9.jpg","157babf92b98f753325d73687db65753"],["/netflix-react/static/media/lk-poster.b23f361e.jpg","b23f361ea5663f95fc5e8c5917292e78"],["/netflix-react/static/media/par-poster.947eaf73.jpg","947eaf736356ac7fbe591e829929eb3c"],["/netflix-react/static/media/stargate.c3c96a8f.jpg","c3c96a8fe69530b1f98ea5044766315b"],["/netflix-react/static/media/stepbrothers.6e9cfe48.jpg","6e9cfe48e9b9c6cd29586894582038fb"],["/netflix-react/static/media/tlj-poster.772fdb44.jpg","772fdb44514aa417c05f38e7f18a3009"],["/netflix-react/static/media/to-poster.bf6d1dda.jpg","bf6d1ddacc20f5fbcad9ddfaed033909"],["/netflix-react/static/media/tr-poster.003db2bd.jpg","003db2bdb01606bf9929b7d461615ed3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/netflix-react/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});