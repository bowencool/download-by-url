(function(e){function t(t){for(var o,l,a=t[0],u=t[1],i=t[2],d=0,p=[];d<a.length;d++)l=a[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);s&&s(t);while(p.length)p.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={index:0},c=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var s=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("aef7")},aef7:function(e,t,n){"use strict";n.r(t);var o=n("7a23");const r=Object(o["e"])("legend",null,"示例",-1),c=Object(o["d"])(" ｜ "),l=Object(o["d"])("下载图片"),a=Object(o["d"])(" ｜ "),u=Object(o["d"])("下载json"),i=Object(o["d"])(" ｜ "),s=Object(o["d"])("下载此代码"),d=Object(o["e"])("legend",null,"随便下载什么",-1);function p(e,t,n,p,f,b){const j=Object(o["j"])("Download");return Object(o["g"])(),Object(o["c"])(o["a"],null,[Object(o["e"])("fieldset",null,[r,Object(o["e"])("button",{onClick:t[1]||(t[1]=(...t)=>e.onDownloadHTML&&e.onDownloadHTML(...t))},"下载 HTML"),c,Object(o["e"])(j,{href:"https://dummyimage.com/100x100/894FC4/FFF.png?text=hello"},{default:Object(o["l"])(()=>[l]),_:1}),a,Object(o["e"])(j,{href:"//httpbin.org/get"},{default:Object(o["l"])(()=>[u]),_:1}),i,Object(o["e"])(j,{href:"https://raw.githubusercontent.com/bowencool/download-by-url/main/example/App.vue",download:"App.vue"},{default:Object(o["l"])(()=>[s]),_:1})]),Object(o["e"])("fieldset",null,[d,Object(o["m"])(Object(o["e"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.url=t),placeholder:"自定义URL"},null,512),[[o["k"],e.url]]),Object(o["e"])("button",{onClick:t[3]||(t[3]=(...t)=>e.customDownload&&e.customDownload(...t))},"下载")])],64)}var f=n("cc1d"),b=n.n(f);function j(e,t=!1){return new Promise((n,o)=>{const r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="blob",r.onload=()=>{let o="",c=null;if(t){const t=r.getResponseHeader("content-disposition");if(t&&t.match(/filename\*?=(utf-8'')?("?)([^"]*)\2$/))o=decodeURIComponent(RegExp.$3);else{let t;if(e instanceof URL?t=e:"string"===typeof e&&(e.startsWith("//")&&(e=`${window.location.protocol}${e}`),t=new URL(e)),!t)throw new Error("no url");const n=t.pathname.split("/");for(let e=n.length-1;e>=0;e--){const t=n[e];if(t&&"string"===typeof t){o=t;break}}if(o||(o=""+t.host),c=r.getResponseHeader("Content-Type"),c){const e=b.a.extension(c);o.endsWith("."+e)||(o=`${o}.${e}`)}}}const l=new Blob([r.response],{type:c||"application/octet-stream"});n({blob:l,filename:o})},r.onerror=o,r.send()})}async function w(e,t){if("string"===typeof e&&e.startsWith("blob:"))return h(e);const{blob:n,filename:o}=await j(e,!t);return O(n,t||o)}function O(e,t){const n=window.URL.createObjectURL(e);h(n,t),window.URL.revokeObjectURL(n)}function h(e,t){const n=document.createElement("a");n.href=e,t&&(n.download=t),document.body.appendChild(n),n.click(),n.remove()}var m=w;function g(e,t,n,r,c,l){return Object(o["g"])(),Object(o["c"])("a",{onClick:t[1]||(t[1]=(...t)=>e.onDownload&&e.onDownload(...t))},[Object(o["i"])(e.$slots,"default")])}var y=Object(o["f"])({props:{href:String,download:String},setup(e){return{onDownload(){e.href&&m(e.href,e.download)}}}});y.render=g;var v=y,x=Object(o["f"])({name:"App",components:{Download:v},setup(){const e=Object(o["h"])("https://cdn.mockuai.com/tms/template.xlsx");return{url:e,onDownloadHTML(){m(window.location.href)},customDownload(){m(e.value)}}}});x.render=p;var L=x;Object(o["b"])(L).mount(document.body)}});
//# sourceMappingURL=index.70e9b472.js.map