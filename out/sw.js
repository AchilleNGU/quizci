if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>n(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-946f13af"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/649-ed341a2c065c36b6.js",revision:"ed341a2c065c36b6"},{url:"/_next/static/chunks/framework-fe99aa755573eedd.js",revision:"fe99aa755573eedd"},{url:"/_next/static/chunks/main-d166faf08028a960.js",revision:"d166faf08028a960"},{url:"/_next/static/chunks/pages/404-d9d56f6f4df2cd08.js",revision:"d9d56f6f4df2cd08"},{url:"/_next/static/chunks/pages/_app-a74f2c2338e06c81.js",revision:"a74f2c2338e06c81"},{url:"/_next/static/chunks/pages/_error-fb68742d3cf986b6.js",revision:"fb68742d3cf986b6"},{url:"/_next/static/chunks/pages/about-14f02176ed95a021.js",revision:"14f02176ed95a021"},{url:"/_next/static/chunks/pages/index-661e61fe372564b9.js",revision:"661e61fe372564b9"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-fd9fb29a92855ab4.js",revision:"fd9fb29a92855ab4"},{url:"/_next/static/css/94d50925c395762c.css",revision:"94d50925c395762c"},{url:"/_next/static/iPJ1eGdGy4rYDuLtSQPcN/_buildManifest.js",revision:"c8737a17e7b150853c84209295166e9a"},{url:"/_next/static/iPJ1eGdGy4rYDuLtSQPcN/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/spinner.43ecbaf2.svg",revision:"079bdf6237728c9d04371eef9c5fc6df"},{url:"/assets/logo.jpg",revision:"30b1e77c57f5c9c4bf0921459c8acf1f"},{url:"/assets/slides/1.jpg",revision:"40b9d052378f640f5afd1b8d52398e37"},{url:"/assets/slides/2.jpg",revision:"5bd693cbb002e9cec71de17829d4a642"},{url:"/assets/slides/3.jpg",revision:"7c644817cb0684b9e64d54fe4bd6634e"},{url:"/assets/spinner.svg",revision:"079bdf6237728c9d04371eef9c5fc6df"},{url:"/daz-ico.jpg",revision:"ce27b081b250508336fe71e2aebeead5"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fonts/Poppins-Regular.ttf",revision:"093ee89be9ede30383f39a899c485a82"},{url:"/fonts/RegaveDemibold-nRZrJ.ttf",revision:"33490e376d5e405a2b46b5932bc5f0d3"},{url:"/fonts/Versus-Regular.otf",revision:"e406a51eb2b5dff0052394b671a8e488"},{url:"/icon-512x512.png",revision:"83f326e2109f5f099d921da8206957ef"},{url:"/icon.png",revision:"373fde445f89b85abaf464d5ca260ee3"},{url:"/manifest.json",revision:"a38bd8a70688716216b1097131214cb4"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));