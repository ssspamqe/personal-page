const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.BIfPtohl.js","../chunks/scheduler.Cewbzyqj.js","../chunks/index.DeFMAK_U.js","../assets/0.IX_d0JDn.css","../nodes/1.Da1fkWKG.js","../chunks/entry.CqW6MuhG.js","../chunks/control.CYgJF_JY.js","../nodes/2.L7P4S7Aj.js","../assets/styles.BWpLtoxl.css","../nodes/3.5FW4Oeh2.js","../nodes/4.DRG1yT6i.js","../nodes/5.DxeH6kQg.js","../nodes/6.qW4Grmny.js","../nodes/7.BNJ5UB-y.js"])))=>i.map(i=>d[i]);
import{s as N,e as B,o as U,f as I,t as j}from"../chunks/scheduler.Cewbzyqj.js";import{S as W,i as z,s as F,o as h,h as G,a as k,n as w,p as A,m as g,d as b,e as H,c as J,b as K,l as O,q as p,t as Q,f as X,k as Y,r as D,u as y,v as R,w as T,x as P,y as L}from"../chunks/index.DeFMAK_U.js";const Z="modulepreload",M=function(a,e){return new URL(a,e).href},V={},d=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const _=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),s=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.all(n.map(o=>{if(o=M(o,i),o in V)return;V[o]=!0;const c=o.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!i)for(let E=_.length-1;E>=0;E--){const v=_[E];if(v.href===o&&(!c||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Z,c||(u.as="script",u.crossOrigin=""),u.href=o,s&&u.setAttribute("nonce",s),document.head.appendChild(u),c)return new Promise((E,v)=>{u.addEventListener("load",E),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>e()).catch(_=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=_,window.dispatchEvent(t),!t.defaultPrevented)throw _})},se={};function $(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=y(r,_(a)),a[12](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,s){e&&P(e,t,s),k(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){D();const o=e;w(o.$$.fragment,1,0,()=>{L(o,1)}),A()}r?(e=y(r,_(t)),t[12](e),R(e.$$.fragment),g(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&b(n),a[12](null),e&&L(e,t)}}}function x(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=y(r,_(a)),a[11](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,s){e&&P(e,t,s),k(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){D();const o=e;w(o.$$.fragment,1,0,()=>{L(o,1)}),A()}r?(e=y(r,_(t)),t[11](e),R(e.$$.fragment),g(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&8215&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&b(n),a[11](null),e&&L(e,t)}}}function ee(a){let e,n,i;var r=a[1][1];function _(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=y(r,_(a)),a[10](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,s){e&&P(e,t,s),k(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){D();const o=e;w(o.$$.fragment,1,0,()=>{L(o,1)}),A()}r?(e=y(r,_(t)),t[10](e),R(e.$$.fragment),g(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(r){const o={};s&16&&(o.data=t[4]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&b(n),a[10](null),e&&L(e,t)}}}function S(a){let e,n=a[6]&&q(a);return{c(){e=H("div"),n&&n.c(),this.h()},l(i){e=J(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=K(e);n&&n.l(r),r.forEach(b),this.h()},h(){O(e,"id","svelte-announcer"),O(e,"aria-live","assertive"),O(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(i,r){k(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=q(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&b(e),n&&n.d()}}}function q(a){let e;return{c(){e=Q(a[7])},l(n){e=X(n,a[7])},m(n,i){k(n,e,i)},p(n,i){i&128&&Y(e,n[7])},d(n){n&&b(e)}}}function te(a){let e,n,i,r,_;const t=[x,$],s=[];function o(l,m){return l[1][1]?0:1}e=o(a),n=s[e]=t[e](a);let c=a[5]&&S(a);return{c(){n.c(),i=F(),c&&c.c(),r=h()},l(l){n.l(l),i=G(l),c&&c.l(l),r=h()},m(l,m){s[e].m(l,m),k(l,i,m),c&&c.m(l,m),k(l,r,m),_=!0},p(l,[m]){let u=e;e=o(l),e===u?s[e].p(l,m):(D(),w(s[u],1,1,()=>{s[u]=null}),A(),n=s[e],n?n.p(l,m):(n=s[e]=t[e](l),n.c()),g(n,1),n.m(i.parentNode,i)),l[5]?c?c.p(l,m):(c=S(l),c.c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null)},i(l){_||(g(n),_=!0)},o(l){w(n),_=!1},d(l){l&&(b(i),b(r)),s[e].d(l),c&&c.d(l)}}}function ne(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:_}=e,{components:t=[]}=e,{form:s}=e,{data_0:o=null}=e,{data_1:c=null}=e;B(i.page.notify);let l=!1,m=!1,u=null;U(()=>{const f=i.page.subscribe(()=>{l&&(n(6,m=!0),j().then(()=>{n(7,u=document.title||"untitled page")}))});return n(5,l=!0),f});function E(f){I[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function v(f){I[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function C(f){I[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,r=f.page),"constructors"in f&&n(1,_=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,s=f.form),"data_0"in f&&n(3,o=f.data_0),"data_1"in f&&n(4,c=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,_,s,o,c,l,m,u,i,r,E,v,C]}class oe extends W{constructor(e){super(),z(this,e,ne,te,N,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>d(()=>import("../nodes/0.BIfPtohl.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),()=>d(()=>import("../nodes/1.Da1fkWKG.js"),__vite__mapDeps([4,1,2,5,6]),import.meta.url),()=>d(()=>import("../nodes/2.L7P4S7Aj.js"),__vite__mapDeps([7,1,2,8]),import.meta.url),()=>d(()=>import("../nodes/3.5FW4Oeh2.js"),__vite__mapDeps([9,1,2,8]),import.meta.url),()=>d(()=>import("../nodes/4.DRG1yT6i.js"),__vite__mapDeps([10,6,1,2,8]),import.meta.url),()=>d(()=>import("../nodes/5.DxeH6kQg.js"),__vite__mapDeps([11,1,2,8]),import.meta.url),()=>d(()=>import("../nodes/6.qW4Grmny.js"),__vite__mapDeps([12,1,2,8]),import.meta.url),()=>d(()=>import("../nodes/7.BNJ5UB-y.js"),__vite__mapDeps([13,1,2,8]),import.meta.url)],le=[],ce={"/":[2],"/about":[3],"/comic":[4],"/contact":[5],"/projects":[6],"/skills":[7]},fe={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{ce as dictionary,fe as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};