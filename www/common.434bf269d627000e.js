"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{9262:(y,_,r)=>{r.d(_,{c:()=>i});var u=r(8411),c=r(967),l=r(9203);const i=(o,t)=>{let e,n;const g=(a,p,E)=>{if(typeof document>"u")return;const w=document.elementFromPoint(a,p);w&&t(w)?w!==e&&(s(),d(w,E)):s()},d=(a,p)=>{e=a,n||(n=e);const E=e;(0,u.w)(()=>E.classList.add("ion-activated")),p()},s=(a=!1)=>{if(!e)return;const p=e;(0,u.w)(()=>p.classList.remove("ion-activated")),a&&n!==e&&e.click(),e=void 0};return(0,l.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>g(a.currentX,a.currentY,c.a),onMove:a=>g(a.currentX,a.currentY,c.b),onEnd:()=>{s(!0),(0,c.h)(),n=void 0}})}},4874:(y,_,r)=>{r.d(_,{g:()=>c});var u=r(6225);const c=()=>{if(void 0!==u.w)return u.w.Capacitor}},5149:(y,_,r)=>{r.d(_,{g:()=>u});const u=(t,e,n,g,d)=>l(t[1],e[1],n[1],g[1],d).map(s=>c(t[0],e[0],n[0],g[0],s)),c=(t,e,n,g,d)=>d*(3*e*Math.pow(d-1,2)+d*(-3*n*d+3*n+g*d))-t*Math.pow(d-1,3),l=(t,e,n,g,d)=>o((g-=d)-3*(n-=d)+3*(e-=d)-(t-=d),3*n-6*e+3*t,3*e-3*t,t).filter(a=>a>=0&&a<=1),o=(t,e,n,g)=>{if(0===t)return((t,e,n)=>{const g=e*e-4*t*n;return g<0?[]:[(-e+Math.sqrt(g))/(2*t),(-e-Math.sqrt(g))/(2*t)]})(e,n,g);const d=(3*(n/=t)-(e/=t)*e)/3,s=(2*e*e*e-9*e*n+27*(g/=t))/27;if(0===d)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-d),-Math.sqrt(-d)];const a=Math.pow(s/2,2)+Math.pow(d/3,3);if(0===a)return[Math.pow(s/2,.5)-e/3];if(a>0)return[Math.pow(-s/2+Math.sqrt(a),1/3)-Math.pow(s/2+Math.sqrt(a),1/3)-e/3];const p=Math.sqrt(Math.pow(-d/3,3)),E=Math.acos(-s/(2*Math.sqrt(Math.pow(-d/3,3)))),w=2*Math.pow(p,1/3);return[w*Math.cos(E/3)-e/3,w*Math.cos((E+2*Math.PI)/3)-e/3,w*Math.cos((E+4*Math.PI)/3)-e/3]}},5085:(y,_,r)=>{r.d(_,{i:()=>u});const u=c=>c&&""!==c.dir?"rtl"===c.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},2779:(y,_,r)=>{r.r(_),r.d(_,{startFocusVisible:()=>i});const u="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=o=>{let t=[],e=!0;const n=o?o.shadowRoot:document,g=o||document.body,d=M=>{t.forEach(h=>h.classList.remove(u)),M.forEach(h=>h.classList.add(u)),t=M},s=()=>{e=!1,d([])},a=M=>{e=l.includes(M.key),e||d([])},p=M=>{if(e&&void 0!==M.composedPath){const h=M.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));d(h)}},E=()=>{n.activeElement===g&&d([])};return n.addEventListener("keydown",a),n.addEventListener("focusin",p),n.addEventListener("focusout",E),n.addEventListener("touchstart",s,{passive:!0}),n.addEventListener("mousedown",s),{destroy:()=>{n.removeEventListener("keydown",a),n.removeEventListener("focusin",p),n.removeEventListener("focusout",E),n.removeEventListener("touchstart",s),n.removeEventListener("mousedown",s)},setFocus:d}}},5487:(y,_,r)=>{r.d(_,{c:()=>c});var u=r(839);const c=t=>{const e=t;let n;return{hasLegacyControl:()=>{if(void 0===n){const d=void 0!==e.label||l(e),s=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,a=(0,u.h)(e);n=!0===e.legacy||!d&&!s&&null!==a}return n}}},l=t=>null!==t.shadowRoot&&!!(i.includes(t.tagName)&&null!==t.querySelector('[slot="label"]')||o.includes(t.tagName)&&""!==t.textContent),i=["ION-RANGE"],o=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},967:(y,_,r)=>{r.d(_,{I:()=>c,a:()=>e,b:()=>n,c:()=>t,d:()=>d,h:()=>g});var u=r(4874),c=function(s){return s.Heavy="HEAVY",s.Medium="MEDIUM",s.Light="LIGHT",s}(c||{});const i={getEngine(){const s=window.TapticEngine;if(s)return s;const a=(0,u.g)();return null!=a&&a.isPluginAvailable("Haptics")?a.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const a=(0,u.g)();return"web"!==(null==a?void 0:a.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,u.g)(),impact(s){const a=this.getEngine();if(!a)return;const p=this.isCapacitor()?s.style:s.style.toLowerCase();a.impact({style:p})},notification(s){const a=this.getEngine();if(!a)return;const p=this.isCapacitor()?s.type:s.type.toLowerCase();a.notification({type:p})},selection(){const s=this.isCapacitor()?c.Light:"light";this.impact({style:s})},selectionStart(){const s=this.getEngine();s&&(this.isCapacitor()?s.selectionStart():s.gestureSelectionStart())},selectionChanged(){const s=this.getEngine();s&&(this.isCapacitor()?s.selectionChanged():s.gestureSelectionChanged())},selectionEnd(){const s=this.getEngine();s&&(this.isCapacitor()?s.selectionEnd():s.gestureSelectionEnd())}},o=()=>i.available(),t=()=>{o()&&i.selection()},e=()=>{o()&&i.selectionStart()},n=()=>{o()&&i.selectionChanged()},g=()=>{o()&&i.selectionEnd()},d=s=>{o()&&i.impact(s)}},2874:(y,_,r)=>{r.d(_,{I:()=>t,a:()=>d,b:()=>o,c:()=>p,d:()=>w,f:()=>s,g:()=>g,i:()=>n,p:()=>E,r:()=>M,s:()=>a});var u=r(5861),c=r(839),l=r(6710);const o="ion-content",t=".ion-content-scroll-host",e=`${o}, ${t}`,n=h=>"ION-CONTENT"===h.tagName,g=function(){var h=(0,u.Z)(function*(m){return n(m)?(yield new Promise(v=>(0,c.c)(m,v)),m.getScrollElement()):m});return function(v){return h.apply(this,arguments)}}(),d=h=>h.querySelector(t)||h.querySelector(e),s=h=>h.closest(e),a=(h,m)=>n(h)?h.scrollToTop(m):Promise.resolve(h.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),p=(h,m,v,O)=>n(h)?h.scrollByPoint(m,v,O):Promise.resolve(h.scrollBy({top:v,left:m,behavior:O>0?"smooth":"auto"})),E=h=>(0,l.b)(h,o),w=h=>{if(n(h)){const v=h.scrollY;return h.scrollY=!1,v}return h.style.setProperty("overflow","hidden"),!0},M=(h,m)=>{n(h)?h.scrollY=m:h.style.removeProperty("overflow")}},5307:(y,_,r)=>{r.d(_,{a:()=>u,b:()=>p,c:()=>e,d:()=>E,e:()=>D,f:()=>t,g:()=>w,h:()=>l,i:()=>c,j:()=>O,k:()=>C,l:()=>n,m:()=>s,n:()=>M,o:()=>d,p:()=>o,q:()=>i,r:()=>v,s:()=>f,t:()=>a,u:()=>h,v:()=>m,w:()=>g});const u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2894:(y,_,r)=>{r.d(_,{c:()=>i,g:()=>o});var u=r(6225),c=r(839),l=r(6710);const i=(e,n,g)=>{let d,s;void 0!==u.w&&"MutationObserver"in u.w&&(d=new MutationObserver(w=>{for(const M of w)for(const h of M.addedNodes)if(h.nodeType===Node.ELEMENT_NODE&&h.slot===n)return g(),void(0,c.r)(()=>a(h))}),d.observe(e,{childList:!0}));const a=w=>{var M;s&&(s.disconnect(),s=void 0),s=new MutationObserver(h=>{g();for(const m of h)for(const v of m.removedNodes)v.nodeType===Node.ELEMENT_NODE&&v.slot===n&&E()}),s.observe(null!==(M=w.parentElement)&&void 0!==M?M:w,{subtree:!0,childList:!0})},E=()=>{s&&(s.disconnect(),s=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),E()}}},o=(e,n,g)=>{const d=null==e?0:e.toString().length,s=t(d,n);if(void 0===g)return s;try{return g(d,n)}catch(a){return(0,l.a)("Exception in provided `counterFormatter`.",a),s}},t=(e,n)=>`${e} / ${n}`},7484:(y,_,r)=>{r.d(_,{K:()=>i,a:()=>l});var u=r(4874),c=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(c||{}),l=function(o){return o.Body="body",o.Ionic="ionic",o.Native="native",o.None="none",o}(l||{});const i={getEngine(){const o=(0,u.g)();if(null!=o&&o.isPluginAvailable("Keyboard"))return o.Plugins.Keyboard},getResizeMode(){const o=this.getEngine();return null!=o&&o.getResizeMode?o.getResizeMode().catch(t=>{if(t.code!==c.Unimplemented)throw t}):Promise.resolve(void 0)}}},1612:(y,_,r)=>{r.r(_),r.d(_,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>i,copyVisualViewport:()=>C,keyboardDidClose:()=>h,keyboardDidOpen:()=>w,keyboardDidResize:()=>M,resetKeyboardAssist:()=>d,setKeyboardClose:()=>E,setKeyboardOpen:()=>p,startKeyboardAssist:()=>s,trackViewportChanges:()=>O});var u=r(7484);r(4874),r(6225);const i="ionKeyboardDidShow",o="ionKeyboardDidHide";let e={},n={},g=!1;const d=()=>{e={},n={},g=!1},s=f=>{if(u.K.getEngine())a(f);else{if(!f.visualViewport)return;n=C(f.visualViewport),f.visualViewport.onresize=()=>{O(f),w()||M(f)?p(f):h(f)&&E(f)}}},a=f=>{f.addEventListener("keyboardDidShow",D=>p(f,D)),f.addEventListener("keyboardDidHide",()=>E(f))},p=(f,D)=>{m(f,D),g=!0},E=f=>{v(f),g=!1},w=()=>!g&&e.width===n.width&&(e.height-n.height)*n.scale>150,M=f=>g&&!h(f),h=f=>g&&n.height===f.innerHeight,m=(f,D)=>{const L=new CustomEvent(i,{detail:{keyboardHeight:D?D.keyboardHeight:f.innerHeight-n.height}});f.dispatchEvent(L)},v=f=>{const D=new CustomEvent(o);f.dispatchEvent(D)},O=f=>{e=Object.assign({},n),n=C(f.visualViewport)},C=f=>({width:Math.round(f.width),height:Math.round(f.height),offsetTop:f.offsetTop,offsetLeft:f.offsetLeft,pageTop:f.pageTop,pageLeft:f.pageLeft,scale:f.scale})},3459:(y,_,r)=>{r.d(_,{c:()=>t});var u=r(5861),c=r(6225),l=r(7484);const i=e=>{if(void 0===c.d||e===l.a.None||void 0===e)return null;const n=c.d.querySelector("ion-app");return null!=n?n:c.d.body},o=e=>{const n=i(e);return null===n?0:n.clientHeight},t=function(){var e=(0,u.Z)(function*(n){let g,d,s,a;const p=function(){var m=(0,u.Z)(function*(){const v=yield l.K.getResizeMode(),O=void 0===v?void 0:v.mode;g=()=>{void 0===a&&(a=o(O)),s=!0,E(s,O)},d=()=>{s=!1,E(s,O)},null==c.w||c.w.addEventListener("keyboardWillShow",g),null==c.w||c.w.addEventListener("keyboardWillHide",d)});return function(){return m.apply(this,arguments)}}(),E=(m,v)=>{n&&n(m,w(v))},w=m=>{if(0===a||a===o(m))return;const v=i(m);return null!==v?new Promise(O=>{const f=new ResizeObserver(()=>{v.clientHeight===a&&(f.disconnect(),O())});f.observe(v)}):void 0};return yield p(),{init:p,destroy:()=>{null==c.w||c.w.removeEventListener("keyboardWillShow",g),null==c.w||c.w.removeEventListener("keyboardWillHide",d),g=d=void 0},isKeyboardVisible:()=>s}});return function(g){return e.apply(this,arguments)}}()},3830:(y,_,r)=>{r.d(_,{c:()=>c});var u=r(5861);const c=()=>{let l;return{lock:function(){var o=(0,u.Z)(function*(){const t=l;let e;return l=new Promise(n=>e=n),void 0!==t&&(yield t),e});return function(){return o.apply(this,arguments)}}()}}},5857:(y,_,r)=>{r.d(_,{c:()=>l});var u=r(6225),c=r(839);const l=(i,o,t)=>{let e;const n=()=>!(void 0===o()||void 0!==i.label||null===t()),d=()=>{const a=o();if(void 0===a)return;if(!n())return void a.style.removeProperty("width");const p=t().scrollWidth;if(0===p&&null===a.offsetParent&&void 0!==u.w&&"IntersectionObserver"in u.w){if(void 0!==e)return;const E=e=new IntersectionObserver(w=>{1===w[0].intersectionRatio&&(d(),E.disconnect(),e=void 0)},{threshold:.01,root:i});E.observe(a)}else a.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{n()&&(0,c.r)(()=>{d()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},3781:(y,_,r)=>{r.d(_,{S:()=>c});const c={bubbles:{dur:1e3,circles:9,fn:(l,i,o)=>{const t=l*i/o-l+"ms",e=2*Math.PI*i/o;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":t}}}},circles:{dur:1e3,circles:8,fn:(l,i,o)=>{const t=i/o,e=l*t-l+"ms",n=2*Math.PI*t;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,i)=>({r:6,style:{left:32-32*i+"%","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,i,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*i+(i<o/2?180:-180)}deg)`,"animation-delay":l*i/o-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,i,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*i+(i<o/2?180:-180)}deg)`,"animation-delay":l*i/o-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,i,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":l*i/o-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,i,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":l*i/o-l+"ms"}})}}},8663:(y,_,r)=>{r.r(_),r.d(_,{createSwipeBackGesture:()=>o});var u=r(839),c=r(5085),l=r(9203);r(619);const o=(t,e,n,g,d)=>{const s=t.ownerDocument.defaultView;let a=(0,c.i)(t);const E=v=>a?-v.deltaX:v.deltaX;return(0,l.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:v=>(a=(0,c.i)(t),(v=>{const{startX:C}=v;return a?C>=s.innerWidth-50:C<=50})(v)&&e()),onStart:n,onMove:v=>{const C=E(v)/s.innerWidth;g(C)},onEnd:v=>{const O=E(v),C=s.innerWidth,f=O/C,D=(v=>a?-v.velocityX:v.velocityX)(v),L=D>=0&&(D>.2||O>C/2),b=(L?1-f:f)*C;let x=0;if(b>5){const T=b/Math.abs(D);x=Math.min(T,540)}d(L,f<=0?.01:(0,u.l)(0,f,.9999),x)}})}},5564:(y,_,r)=>{r.d(_,{w:()=>u});const u=(i,o,t)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(n=>{t(c(n,o))});return e.observe(i,{childList:!0,subtree:!0}),e},c=(i,o)=>{let t;return i.forEach(e=>{for(let n=0;n<e.addedNodes.length;n++)t=l(e.addedNodes[n],o)||t}),t},l=(i,o)=>{if(1!==i.nodeType)return;const t=i;return(t.tagName===o.toUpperCase()?[t]:Array.from(t.querySelectorAll(o))).find(n=>n.value===t.value)}},4281:(y,_,r)=>{r.d(_,{Z:()=>c});var u=r(6689);let c=(()=>{var l;class i{}return(l=i).\u0275fac=function(t){return new(t||l)},l.\u0275cmp=u.Xpm({type:l,selectors:[["app-explore-container"]],inputs:{name:"name"},decls:7,vars:1,consts:[["id","container"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"]],template:function(t,e){1&t&&(u.TgZ(0,"div",0)(1,"strong"),u._uU(2),u.qZA(),u.TgZ(3,"p"),u._uU(4,"Explore "),u.TgZ(5,"a",1),u._uU(6,"UI Components"),u.qZA()()()),2&t&&(u.xp6(2),u.Oqu(e.name))},styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),i})()},3554:(y,_,r)=>{r.d(_,{e:()=>o});var u=r(6814),c=r(95),l=r(3582),i=r(6689);let o=(()=>{var t;class e{}return(t=e).\u0275fac=function(g){return new(g||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[u.ez,c.u5,l.Pc]}),e})()}}]);