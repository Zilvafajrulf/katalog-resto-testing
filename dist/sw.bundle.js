if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,a)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const s=e=>n(e,d),f={module:{uri:d},exports:r,require:s};i[d]=Promise.all(c.map((e=>f[e]||s(e)))).then((e=>(a(...e),r)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"39.bundle.js",revision:"c63cdec1edb749941b081f5e783e1fc7"},{url:"608.bundle.js",revision:"c8ee22ce862687222c8aaa121fa1bff3"},{url:"app.webmanifest",revision:"f9653b33cefe86e078e3cd0c1a617ae2"},{url:"app~173336cb.bundle.js",revision:"a4420393569b2ecea3323197d4917ab2"},{url:"app~173336cb.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~28d22ed8.bundle.js",revision:"bcf239dae0f9fe3556f0fdb6687e8ae6"},{url:"app~28d22ed8.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~4e5ec22b.bundle.js",revision:"a69476b89d515a9ea0cbcb469bc41d9a"},{url:"app~53dca180.bundle.js",revision:"dfd8b2e213a9dff3366159d9db13e89a"},{url:"app~53dca180.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"data/DATA.json",revision:"03bbb6cfbdeee0be72df532aeff55c19"},{url:"favicon.png",revision:"eb44f2b39c752cec19797a9cd92ab2c7"},{url:"icons/icon-128px.png",revision:"c5fd678a8cf7b7110e1715344930c411"},{url:"icons/icon-144px.png",revision:"5317da35f5b7a634b74b935e5ef0bcde"},{url:"icons/icon-152px.png",revision:"2f1454be9d5377a99eed58461bc086b4"},{url:"icons/icon-192px.png",revision:"d0de60c8b2508c4e6d799549bfbff1de"},{url:"icons/icon-384px.png",revision:"f820a19b1074e05112674eea2ea28791"},{url:"icons/icon-512px.png",revision:"82953ade0cd934effca34c33380a5dc7"},{url:"icons/icon-72px.png",revision:"8f3d5d04ca82b7c7538daf5860e3dafb"},{url:"icons/icon-96px.png",revision:"533c42f111a75ac96f04222c3f0a7366"},{url:"index.html",revision:"d33d96236cec7c268fc50ff61b414c2f"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"restodb-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium/")),new e.StaleWhileRevalidate({cacheName:"restodb-image-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/detail")),new e.StaleWhileRevalidate({cacheName:"restaurant-detail",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map