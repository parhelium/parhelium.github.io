import{S as Q,i as W,s as Z,B as z,E as N,F as M,a as v,d as u,b as a,G as U,f as G,H as d,y as ie,C as R,I as q,e as x,c as T,J as fe,n as V,o as me,p as I,K as ve,j as O,t as oe,l as P,g as se,L as he,M as ge,N as pe,m as be,v as le,w as ue,x as de,A as ce}from"../chunks/index-08d88d75.js";var _e=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};(function(l,e){(function(r,t){t()})(_e,function(){function r(o){var n=!0,i=!1,h=null,_={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function p(s){return!!(s&&s!==document&&s.nodeName!=="HTML"&&s.nodeName!=="BODY"&&"classList"in s&&"contains"in s.classList)}function c(s){var F=s.type,A=s.tagName;return!!(A==="INPUT"&&_[F]&&!s.readOnly||A==="TEXTAREA"&&!s.readOnly||s.isContentEditable)}function f(s){s.classList.contains("focus-visible")||(s.classList.add("focus-visible"),s.setAttribute("data-focus-visible-added",""))}function b(s){!s.hasAttribute("data-focus-visible-added")||(s.classList.remove("focus-visible"),s.removeAttribute("data-focus-visible-added"))}function C(s){s.metaKey||s.altKey||s.ctrlKey||(p(o.activeElement)&&f(o.activeElement),n=!0)}function w(s){n=!1}function B(s){!p(s.target)||(n||c(s.target))&&f(s.target)}function S(s){!p(s.target)||(s.target.classList.contains("focus-visible")||s.target.hasAttribute("data-focus-visible-added"))&&(i=!0,window.clearTimeout(h),h=window.setTimeout(function(){i=!1},100),b(s.target))}function D(s){document.visibilityState==="hidden"&&(i&&(n=!0),k())}function k(){document.addEventListener("mousemove",m),document.addEventListener("mousedown",m),document.addEventListener("mouseup",m),document.addEventListener("pointermove",m),document.addEventListener("pointerdown",m),document.addEventListener("pointerup",m),document.addEventListener("touchmove",m),document.addEventListener("touchstart",m),document.addEventListener("touchend",m)}function $(){document.removeEventListener("mousemove",m),document.removeEventListener("mousedown",m),document.removeEventListener("mouseup",m),document.removeEventListener("pointermove",m),document.removeEventListener("pointerdown",m),document.removeEventListener("pointerup",m),document.removeEventListener("touchmove",m),document.removeEventListener("touchstart",m),document.removeEventListener("touchend",m)}function m(s){s.target.nodeName&&s.target.nodeName.toLowerCase()==="html"||(n=!1,$())}document.addEventListener("keydown",C,!0),document.addEventListener("mousedown",w,!0),document.addEventListener("pointerdown",w,!0),document.addEventListener("touchstart",w,!0),document.addEventListener("visibilitychange",D,!0),k(),o.addEventListener("focus",B,!0),o.addEventListener("blur",S,!0),o.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&o.host?o.host.setAttribute("data-js-focus-visible",""):o.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if(typeof window!="undefined"&&typeof document!="undefined"){window.applyFocusVisiblePolyfill=r;var t;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch{t=document.createEvent("CustomEvent"),t.initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}typeof document!="undefined"&&r(document)})})();function ye(l){let e,r,t=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 20 20"},{fill:"currentColor"},l[0]],o={};for(let n=0;n<t.length;n+=1)o=z(o,t[n]);return{c(){e=N("svg"),r=N("path"),this.h()},l(n){e=M(n,"svg",{xmlns:!0,viewBox:!0,fill:!0});var i=v(e);r=M(i,"path",{d:!0}),v(r).forEach(u),i.forEach(u),this.h()},h(){a(r,"d","M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"),U(e,o)},m(n,i){G(n,e,i),d(e,r)},p(n,[i]){U(e,o=ie(t,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 20 20"},{fill:"currentColor"},i&1&&n[0]]))},i:R,o:R,d(n){n&&u(e)}}}function we(l,e,r){return l.$$set=t=>{r(0,e=z(z({},e),q(t)))},e=q(e),[e]}class Ee extends Q{constructor(e){super(),W(this,e,we,ye,Z,{})}}function ke(l){let e,r,t=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 20 20"},{fill:"currentColor"},l[0]],o={};for(let n=0;n<t.length;n+=1)o=z(o,t[n]);return{c(){e=N("svg"),r=N("path"),this.h()},l(n){e=M(n,"svg",{xmlns:!0,viewBox:!0,fill:!0});var i=v(e);r=M(i,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),v(r).forEach(u),i.forEach(u),this.h()},h(){a(r,"fill-rule","evenodd"),a(r,"d","M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"),a(r,"clip-rule","evenodd"),U(e,o)},m(n,i){G(n,e,i),d(e,r)},p(n,[i]){U(e,o=ie(t,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 20 20"},{fill:"currentColor"},i&1&&n[0]]))},i:R,o:R,d(n){n&&u(e)}}}function Le(l,e,r){return l.$$set=t=>{r(0,e=z(z({},e),q(t)))},e=q(e),[e]}class xe extends Q{constructor(e){super(),W(this,e,Le,ke,Z,{})}}function Te(l){let e,r,t,o,n,i,h;const _=[Me,Ne],p=[];function c(f,b){return f[0]?0:1}return r=c(l),t=p[r]=_[r](l),{c(){e=x("button"),t.c(),this.h()},l(f){e=T(f,"BUTTON",{type:!0,role:!0,"aria-label":!0,"aria-checked":!0,class:!0});var b=v(e);t.l(b),b.forEach(u),this.h()},h(){a(e,"type","button"),a(e,"role","switch"),a(e,"aria-label","Toggle Dark Mode"),a(e,"aria-checked",o=!l[0]),a(e,"class","h-4 w-4 sm:h-8 sm:w-8 sm:p-1")},m(f,b){G(f,e,b),p[r].m(e,null),n=!0,i||(h=fe(e,"click",l[3]),i=!0)},p(f,b){let C=r;r=c(f),r!==C&&(be(),V(p[C],1,1,()=>{p[C]=null}),me(),t=p[r],t||(t=p[r]=_[r](f),t.c()),I(t,1),t.m(e,null)),(!n||b&1&&o!==(o=!f[0]))&&a(e,"aria-checked",o)},i(f){n||(I(t),n=!0)},o(f){V(t),n=!1},d(f){f&&u(e),p[r].d(),i=!1,h()}}}function Ne(l){let e,r;return e=new xe({props:{class:"text-slate-400 p-1 bg-gray-200 rounded-lg dark:bg-gray-900 hover:ring-2 ring-gray-300 transition-all"}}),{c(){le(e.$$.fragment)},l(t){ue(e.$$.fragment,t)},m(t,o){de(e,t,o),r=!0},i(t){r||(I(e.$$.fragment,t),r=!0)},o(t){V(e.$$.fragment,t),r=!1},d(t){ce(e,t)}}}function Me(l){let e,r;return e=new Ee({props:{class:"text-slate-400 p-1 bg-gray-200 rounded-lg dark:bg-gray-600 hover:ring-2 ring-gray-300 transition-all"}}),{c(){le(e.$$.fragment)},l(t){ue(e.$$.fragment,t)},m(t,o){de(e,t,o),r=!0},i(t){r||(I(e.$$.fragment,t),r=!0)},o(t){V(e.$$.fragment,t),r=!1},d(t){ce(e,t)}}}function Ce(l){let e,r,t,o,n,i,h,_,p,c,f,b,C,w,B,S,D,k,$,m,s,F,A,E=Te(l);const J=l[2].default,y=ve(J,l,l[1],null);return{c(){e=x("div"),r=x("div"),t=x("nav"),o=x("div"),n=x("button"),i=N("svg"),h=N("path"),_=N("path"),p=O(),c=N("svg"),f=N("path"),b=N("path"),C=O(),w=x("a"),B=x("span"),S=oe("home"),D=O(),k=x("a"),$=x("span"),m=oe("about me"),s=O(),E&&E.c(),F=O(),y&&y.c(),this.h()},l(g){e=T(g,"DIV",{class:!0});var L=v(e);r=T(L,"DIV",{class:!0});var ee=v(r);t=T(ee,"NAV",{class:!0});var K=v(t);o=T(K,"DIV",{class:!0});var j=v(o);n=T(j,"BUTTON",{class:!0,"aria-label":!0,type:!0});var H=v(n);i=M(H,"svg",{class:!0,width:!0,height:!0,viewBox:!0,fill:!0});var X=v(i);h=M(X,"path",{d:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0}),v(h).forEach(u),_=M(X,"path",{d:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0}),v(_).forEach(u),X.forEach(u),p=P(H),c=M(H,"svg",{class:!0,viewBox:!0,width:!0,height:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,fill:!0,shaperendering:!0,"data-hide":!0});var Y=v(c);f=M(Y,"path",{d:!0}),v(f).forEach(u),b=M(Y,"path",{d:!0}),v(b).forEach(u),Y.forEach(u),H.forEach(u),C=P(j),w=T(j,"A",{class:!0,href:!0});var te=v(w);B=T(te,"SPAN",{class:!0});var re=v(B);S=se(re,"home"),re.forEach(u),te.forEach(u),D=P(j),k=T(j,"A",{class:!0,href:!0});var ne=v(k);$=T(ne,"SPAN",{class:!0});var ae=v($);m=se(ae,"about me"),ae.forEach(u),ne.forEach(u),j.forEach(u),s=P(K),E&&E.l(K),K.forEach(u),ee.forEach(u),F=P(L),y&&y.l(L),L.forEach(u),this.h()},h(){a(h,"d","M2.5 7.5H17.5"),a(h,"stroke","currentColor"),a(h,"stroke-width","1.5"),a(h,"stroke-linecap","round"),a(h,"stroke-linejoin","round"),a(_,"d","M2.5 12.5H17.5"),a(_,"stroke","currentColor"),a(_,"stroke-width","1.5"),a(_,"stroke-linecap","round"),a(_,"stroke-linejoin","round"),a(i,"class","h-5 w-5 absolute text-gray-900 dark:text-gray-100"),a(i,"width","20"),a(i,"height","20"),a(i,"viewBox","0 0 20 20"),a(i,"fill","none"),a(f,"d","M18 6L6 18"),a(b,"d","M6 6l12 12"),a(c,"class","h-5 w-5 absolute text-gray-900 dark:text-gray-100"),a(c,"viewBox","0 0 24 24"),a(c,"width","24"),a(c,"height","24"),a(c,"stroke","currentColor"),a(c,"stroke-width","1.5"),a(c,"stroke-linecap","round"),a(c,"stroke-linejoin","round"),a(c,"fill","none"),a(c,"shaperendering","geometricPrecision"),a(c,"data-hide","true"),a(n,"class","mobile-menu_burger__wvd0z visible md:hidden"),a(n,"aria-label","Toggle menu"),a(n,"type","button"),a(B,"class","capsize"),a(w,"class","font-semibold text-gray-800 dark:text-gray-200 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"),a(w,"href","/"),a($,"class","capsize"),a(k,"class","font-semibold text-gray-800 dark:text-gray-200 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"),a(k,"href","/posts/about"),a(o,"class","ml-[-0.60rem]"),a(t,"class","flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 bg-gray-50 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100"),a(r,"class","flex flex-col justify-center px-8"),a(e,"class","bg-gray-50 dark:bg-gray-900")},m(g,L){G(g,e,L),d(e,r),d(r,t),d(t,o),d(o,n),d(n,i),d(i,h),d(i,_),d(n,p),d(n,c),d(c,f),d(c,b),d(o,C),d(o,w),d(w,B),d(B,S),d(o,D),d(o,k),d(k,$),d($,m),d(t,s),E&&E.m(t,null),d(e,F),y&&y.m(e,null),A=!0},p(g,[L]){E.p(g,L),y&&y.p&&(!A||L&2)&&he(y,J,g,g[1],A?pe(J,g[1],L,null):ge(g[1]),null)},i(g){A||(I(E),I(y,g),A=!0)},o(g){V(E),V(y,g),A=!1},d(g){g&&u(e),E&&E.d(),y&&y.d(g)}}}function Ae(l,e,r){let{$$slots:t={},$$scope:o}=e,n=Boolean(JSON.parse(localStorage.getItem("prefersLight")));const i=()=>{r(0,n=!n),localStorage.setItem("prefersLight",n.toString()),n?document.querySelector("html").classList.remove("dark"):document.querySelector("html").classList.add("dark")};return l.$$set=h=>{"$$scope"in h&&r(1,o=h.$$scope)},[n,o,t,i]}class $e extends Q{constructor(e){super(),W(this,e,Ae,Ce,Z,{})}}export{$e as default};