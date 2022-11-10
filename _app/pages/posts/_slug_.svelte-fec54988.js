var ft=Object.defineProperty,mt=Object.defineProperties;var dt=Object.getOwnPropertyDescriptors;var Ue=Object.getOwnPropertySymbols;var _t=Object.prototype.hasOwnProperty,ht=Object.prototype.propertyIsEnumerable;var Be=(s,e,t)=>e in s?ft(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,ze=(s,e)=>{for(var t in e||(e={}))_t.call(e,t)&&Be(s,t,e[t]);if(Ue)for(var t of Ue(e))ht.call(e,t)&&Be(s,t,e[t]);return s},Ye=(s,e)=>mt(s,dt(e));import{_ as re}from"../../chunks/preload-helper-e4860ae8.js";import{U as pt,S as tt,i as nt,s as st,e as h,t as L,j as R,c as p,a as E,g as O,d as u,l as S,b as i,V as Je,f as M,H as m,h as me,J as vt,D as ae,W as gt,u as wt,X as bt,n as P,o as Te,p as T,v as G,w as ie,x as Q,A as Z,T as Et,R as kt,K as yt,M as lt,N as ot,O as rt,P as at,m as Ae}from"../../chunks/index-745e5dc0.js";import{f as Ke,p as Ie,B as It,P as it,A as Tt}from"../../chunks/ArrowLeftIcon-8af3a145.js";import{n as At,w as ct}from"../../chunks/info-ca0dd7d5.js";const Mt=()=>{const s=pt("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session}},ut={subscribe(s){return Mt().page.subscribe(s)}};const{window:Dt}=bt;function We(s,e,t){const l=s.slice();return l[6]=e[t],l}function Xe(s){let e,t,l=s[6].title+"",n,r,f,v;return{c(){e=h("li"),t=h("a"),n=L(l),f=R(),this.h()},l(a){e=p(a,"LI",{class:!0,style:!0});var o=E(e);t=p(o,"A",{class:!0,href:!0});var _=E(t);n=O(_,l),_.forEach(u),f=S(o),o.forEach(u),this.h()},h(){var a;i(t,"class","!no-underline"),i(t,"href",r=`#${s[6].node.id}`),i(e,"class","heading list-none my-2 !pl-0 text-base text-slate-400 hover:text-slate-900 dark:text-slate-500 hover:dark:text-slate-100 transition-colors svelte-15xs064"),i(e,"style",v=`--depth: ${s[6].depth}`),Je(e,"active",((a=s[0])==null?void 0:a.node)===s[6].node)},m(a,o){M(a,e,o),m(e,t),m(t,n),m(e,f)},p(a,o){var _;o&2&&l!==(l=a[6].title+"")&&me(n,l),o&2&&r!==(r=`#${a[6].node.id}`)&&i(t,"href",r),o&2&&v!==(v=`--depth: ${a[6].depth}`)&&i(e,"style",v),o&3&&Je(e,"active",((_=a[0])==null?void 0:_.node)===a[6].node)},d(a){a&&u(e)}}}function Pt(s){let e,t,l,n,r,f,v=s[1],a=[];for(let o=0;o<v.length;o+=1)a[o]=Xe(We(s,v,o));return{c(){e=h("h6"),t=L("Sections"),l=R(),n=h("ul");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=p(o,"H6",{id:!0,class:!0});var _=E(e);t=O(_,"Sections"),_.forEach(u),l=S(o),n=p(o,"UL",{class:!0});var c=E(n);for(let d=0;d<a.length;d+=1)a[d].l(c);c.forEach(u),this.h()},h(){i(e,"id","__sections"),i(e,"class","uppercase text-slate-400/75 dark:text-slate-600 font-bold text-sm"),i(n,"class","mt-2 !pl-0")},m(o,_){M(o,e,_),m(e,t),M(o,l,_),M(o,n,_);for(let c=0;c<a.length;c+=1)a[c].m(n,null);r||(f=vt(Dt,"scroll",s[2]),r=!0)},p(o,[_]){if(_&3){v=o[1];let c;for(c=0;c<v.length;c+=1){const d=We(o,v,c);a[c]?a[c].p(d,_):(a[c]=Xe(d),a[c].c(),a[c].m(n,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=v.length}},i:ae,o:ae,d(o){o&&u(e),o&&u(l),o&&u(n),gt(a,o),r=!1,f()}}}function Ht(s,e,t){let{allowedHeadings:l=["h1","h2","h3","h4","h5","h6"]}=e,{activeHeading:n=null}=e,r,f=[];function v(){const o=[...document.querySelectorAll(`article :where(${l.join(", ")}):not(#__sections)`)],_=o.map(d=>Number(d.nodeName[1])),c=Math.min(..._);t(1,f=o.map((d,k)=>({title:d.innerText,depth:_[k]-c,node:d}))),n===null&&t(0,n=f[0])}wt(()=>{v(),a()}),typeof window!="undefined"&&ut.subscribe(()=>{v(),a()});function a(){r=window.scrollY;const o=f.findIndex(d=>d.node.offsetTop+d.node.clientHeight>r)-1;t(0,n=f[o]);const _=document.body.scrollHeight;(r+window.innerHeight)/_>.999&&t(0,n=f[f.length-1])}return s.$$set=o=>{"allowedHeadings"in o&&t(3,l=o.allowedHeadings),"activeHeading"in o&&t(0,n=o.activeHeading)},[n,f,a,l]}class Vt extends tt{constructor(e){super(),nt(this,e,Ht,Pt,st,{allowedHeadings:3,activeHeading:0})}}function Rt(s){switch(s){default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}function St(s){switch(s){case"../../../posts/about/index.md":return re(()=>import("../../chunks/index-70f7ec8c.js"),["chunks/index-70f7ec8c.js","chunks/index-745e5dc0.js"]);case"../../../posts/dropbox-like-software/index.md":return re(()=>import("../../chunks/index-62466d30.js"),["chunks/index-62466d30.js","chunks/index-745e5dc0.js"]);case"../../../posts/multichain-wallet-be-your-own-bank/index.md":return re(()=>import("../../chunks/index-7716c1fb.js"),["chunks/index-7716c1fb.js","chunks/index-745e5dc0.js"]);case"../../../posts/network-gives/index.md":return re(()=>import("../../chunks/index-d5a12bd8.js"),["chunks/index-d5a12bd8.js","chunks/index-745e5dc0.js"]);case"../../../posts/p2p-privately-share-folder-using-oneliner/index.md":return re(()=>import("../../chunks/index-99ffccd7.js"),["chunks/index-99ffccd7.js","chunks/index-745e5dc0.js"]);case"../../../posts/thinkchef-franchise-menu-management/index.md":return re(()=>import("../../chunks/index-440dfc14.js"),["chunks/index-440dfc14.js","chunks/index-745e5dc0.js"]);default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}const Lt=s=>({}),Ge=s=>({slot:"icon-start"}),Ot=s=>({}),Qe=s=>({slot:"icon-end"});function qt(s){let e;return{c(){e=L("Back to Posts")},l(t){e=O(t,"Back to Posts")},m(t,l){M(t,e,l)},d(t){t&&u(e)}}}function xt(s){let e,t;return e=new Tt({props:{class:"h-5 w-5"}}),{c(){G(e.$$.fragment)},l(l){ie(e.$$.fragment,l)},m(l,n){Q(e,l,n),t=!0},p:ae,i(l){t||(T(e.$$.fragment,l),t=!0)},o(l){P(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function Ft(s){let e;const t=s[14].default,l=lt(t,s,s[15],Ge),n=l||xt();return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,f){n&&n.m(r,f),e=!0},p(r,f){l&&l.p&&(!e||f&32768)&&ot(l,t,r,r[15],e?at(t,r[15],f,Lt):rt(r[15]),Ge)},i(r){e||(T(n,r),e=!0)},o(r){P(n,r),e=!1},d(r){n&&n.d(r)}}}function jt(s){let e;const t=s[14].default,l=lt(t,s,s[15],Qe);return{c(){l&&l.c()},l(n){l&&l.l(n)},m(n,r){l&&l.m(n,r),e=!0},p(n,r){l&&l.p&&(!e||r&32768)&&ot(l,t,n,n[15],e?at(t,n[15],r,Ot):rt(n[15]),Qe)},i(n){e||(T(l,n),e=!0)},o(n){P(l,n),e=!1},d(n){l&&l.d(n)}}}function Ze(s){let e,t,l;return{c(){e=h("hr"),t=R(),l=h("div"),this.h()},l(n){e=p(n,"HR",{}),t=S(n),l=p(n,"DIV",{id:!0}),E(l).forEach(u),this.h()},h(){i(l,"id","commento")},m(n,r){M(n,e,r),M(n,t,r),M(n,l,r)},d(n){n&&u(e),n&&u(t),n&&u(l)}}}function $e(s){let e,t,l,n,r,f,v;const a=[Nt,Ct],o=[];function _(d,k){return d[6]?0:1}n=_(s),r=o[n]=a[n](s);let c=s[5]&&et(s);return{c(){e=h("hr"),t=R(),l=h("div"),r.c(),f=R(),c&&c.c(),this.h()},l(d){e=p(d,"HR",{}),t=S(d),l=p(d,"DIV",{class:!0});var k=E(l);r.l(k),f=S(k),c&&c.l(k),k.forEach(u),this.h()},h(){i(l,"class","grid gap-8 grid-cols-1 sm:grid-cols-2")},m(d,k){M(d,e,k),M(d,t,k),M(d,l,k),o[n].m(l,null),m(l,f),c&&c.m(l,null),v=!0},p(d,k){let H=n;n=_(d),n===H?o[n].p(d,k):(Ae(),P(o[H],1,1,()=>{o[H]=null}),Te(),r=o[n],r?r.p(d,k):(r=o[n]=a[n](d),r.c()),T(r,1),r.m(l,f)),d[5]?c?(c.p(d,k),k&32&&T(c,1)):(c=et(d),c.c(),T(c,1),c.m(l,null)):c&&(Ae(),P(c,1,1,()=>{c=null}),Te())},i(d){v||(T(r),T(c),v=!0)},o(d){P(r),P(c),v=!1},d(d){d&&u(e),d&&u(t),d&&u(l),o[n].d(),c&&c.d()}}}function Ct(s){let e;return{c(){e=h("div")},l(t){e=p(t,"DIV",{}),E(e).forEach(u)},m(t,l){M(t,e,l)},p:ae,i:ae,o:ae,d(t){t&&u(e)}}}function Nt(s){let e,t,l,n,r,f,v;return f=new it({props:{post:s[6],small:!0}}),{c(){e=h("div"),t=h("h6"),l=L("Previous Post"),n=R(),r=h("div"),G(f.$$.fragment),this.h()},l(a){e=p(a,"DIV",{class:!0});var o=E(e);t=p(o,"H6",{class:!0});var _=E(t);l=O(_,"Previous Post"),_.forEach(u),n=S(o),r=p(o,"DIV",{class:!0});var c=E(r);ie(f.$$.fragment,c),c.forEach(u),o.forEach(u),this.h()},h(){i(t,"class","not-prose post-preview-label svelte-1dho23n"),i(r,"class","flex-1 post-preview svelte-1dho23n"),i(e,"class","flex flex-col")},m(a,o){M(a,e,o),m(e,t),m(t,l),m(e,n),m(e,r),Q(f,r,null),v=!0},p(a,o){const _={};o&64&&(_.post=a[6]),f.$set(_)},i(a){v||(T(f.$$.fragment,a),v=!0)},o(a){P(f.$$.fragment,a),v=!1},d(a){a&&u(e),Z(f)}}}function et(s){let e,t,l,n,r,f,v;return f=new it({props:{post:s[5],small:!0}}),{c(){e=h("div"),t=h("h6"),l=L("Next Post"),n=R(),r=h("div"),G(f.$$.fragment),this.h()},l(a){e=p(a,"DIV",{class:!0});var o=E(e);t=p(o,"H6",{class:!0});var _=E(t);l=O(_,"Next Post"),_.forEach(u),n=S(o),r=p(o,"DIV",{class:!0});var c=E(r);ie(f.$$.fragment,c),c.forEach(u),o.forEach(u),this.h()},h(){i(t,"class","not-prose post-preview-label flex justify-end svelte-1dho23n"),i(r,"class","flex-1 post-preview svelte-1dho23n"),i(e,"class","flex flex-col")},m(a,o){M(a,e,o),m(e,t),m(t,l),m(e,n),m(e,r),Q(f,r,null),v=!0},p(a,o){const _={};o&32&&(_.post=a[5]),f.$set(_)},i(a){v||(T(f.$$.fragment,a),v=!0)},o(a){P(f.$$.fragment,a),v=!1},d(a){a&&u(e),Z(f)}}}function Ut(s){let e,t,l,n,r,f,v,a,o,_,c,d,k,H,q,Y,N,x,b,de,J,$,V,F,ee,U,_e,he,Me,j,K,ce=Ke(new Date(Ie(s[2])),"MMMM d, yyyy")+"",pe,ve,De,ue,ge,Pe,we,He,C,y,be,W,te,X,Ve,ne,B,Re,Ee,A;document.title=e=s[1];var se=s[0];function Se(g){return{}}se&&(y=new se(Se())),X=new Vt({props:{allowedHeadings:["h2","h3","h4","h5","h6"]}}),B=new It({props:{href:"/posts",$$slots:{"icon-end":[jt],"icon-start":[Ft],default:[qt]},$$scope:{ctx:s}}});let D=s[8]&&Ze(),I=(s[6]||s[5])&&$e(s);return{c(){t=h("meta"),n=h("meta"),r=h("meta"),f=h("meta"),v=h("meta"),a=h("meta"),_=h("meta"),c=h("meta"),d=h("meta"),k=h("meta"),H=h("meta"),q=h("meta"),N=h("meta"),x=h("script"),de=R(),J=h("div"),$=h("div"),V=h("main"),F=h("article"),ee=h("h1"),U=h("a"),_e=L(s[1]),Me=R(),j=h("div"),K=h("time"),pe=L(ce),De=L(`
    \u2022 
    `),ue=h("span"),ge=L(s[4]),Pe=L(`
    \u2022 `),we=L(s[7]),He=R(),C=h("div"),y&&G(y.$$.fragment),be=R(),W=h("div"),te=h("div"),G(X.$$.fragment),Ve=R(),ne=h("div"),G(B.$$.fragment),Re=R(),D&&D.c(),Ee=R(),I&&I.c(),this.h()},l(g){const w=Et('[data-svelte="svelte-1qebrbk"]',document.head);t=p(w,"META",{name:!0,content:!0}),n=p(w,"META",{name:!0,content:!0}),r=p(w,"META",{property:!0,content:!0}),f=p(w,"META",{property:!0,content:!0}),v=p(w,"META",{property:!0,content:!0}),a=p(w,"META",{property:!0,content:!0}),_=p(w,"META",{property:!0,content:!0}),c=p(w,"META",{name:!0,content:!0}),d=p(w,"META",{property:!0,content:!0}),k=p(w,"META",{property:!0,content:!0}),H=p(w,"META",{name:!0,content:!0}),q=p(w,"META",{name:!0,content:!0}),N=p(w,"META",{name:!0,content:!0}),x=p(w,"SCRIPT",{src:!0});var ke=E(x);ke.forEach(u),w.forEach(u),de=S(g),J=p(g,"DIV",{class:!0});var fe=E(J);$=p(fe,"DIV",{class:!0});var Le=E($);V=p(Le,"MAIN",{class:!0});var z=E(V);F=p(z,"ARTICLE",{class:!0});var le=E(F);ee=p(le,"H1",{class:!0});var Oe=E(ee);U=p(Oe,"A",{class:!0,href:!0});var qe=E(U);_e=O(qe,s[1]),qe.forEach(u),Oe.forEach(u),Me=S(le),j=p(le,"DIV",{class:!0});var oe=E(j);K=p(oe,"TIME",{datetime:!0});var xe=E(K);pe=O(xe,ce),xe.forEach(u),De=O(oe,`
    \u2022 
    `),ue=p(oe,"SPAN",{});var Fe=E(ue);ge=O(Fe,s[4]),Fe.forEach(u),Pe=O(oe,`
    \u2022 `),we=O(oe,s[7]),oe.forEach(u),He=S(le),C=p(le,"DIV",{class:!0});var ye=E(C);y&&ie(y.$$.fragment,ye),be=S(ye),W=p(ye,"DIV",{class:!0,"aria-label":!0});var je=E(W);te=p(je,"DIV",{class:!0});var Ce=E(te);ie(X.$$.fragment,Ce),Ce.forEach(u),je.forEach(u),ye.forEach(u),le.forEach(u),Ve=S(z),ne=p(z,"DIV",{class:!0});var Ne=E(ne);ie(B.$$.fragment,Ne),Ne.forEach(u),Re=S(z),D&&D.l(z),Ee=S(z),I&&I.l(z),z.forEach(u),Le.forEach(u),fe.forEach(u),this.h()},h(){i(t,"name","description"),i(t,"content",l=s[3].text),i(n,"name","author"),i(n,"content",At),i(r,"property","og:url"),i(r,"content",s[11]),i(f,"property","og:type"),i(f,"content","website"),i(v,"property","og:title"),i(v,"content",s[1]),i(a,"property","og:description"),i(a,"content",o=s[3].text),i(_,"property","og:image"),i(_,"content",s[10]),i(c,"name","twitter:card"),i(c,"content","summary_large_image"),i(d,"property","twitter:domain"),i(d,"content",ct),i(k,"property","twitter:url"),i(k,"content",s[11]),i(H,"name","twitter:title"),i(H,"content",s[1]),i(q,"name","twitter:description"),i(q,"content",Y=s[3].text),i(N,"name","twitter:image"),i(N,"content",s[10]),x.defer=!0,kt(x.src,b="https://commento.parhelium.com/js/commento.js")||i(x,"src",b),i(U,"class","!font-medium"),i(U,"href",he=s[9].url.pathname),i(ee,"class","!mt-0 !mb-2"),i(K,"datetime",ve=new Date(Ie(s[2])).toISOString()),i(j,"class","opacity-70"),i(te,"class","fixed z-10 px-4 py-2 ml-8 top-[4.5rem]"),i(W,"class","hidden xl:block absolute not-prose left-[100%]"),i(W,"aria-label","Table of Contents"),i(C,"class","relative"),i(F,"class","relative"),i(ne,"class","pt-12 flex justify-between"),i(V,"class","prose prose-slate prose-sm sm:prose sm:prose-slate sm:prose-lg sm:max-w-none dark:prose-invert flex flex-col w-full max-w-2xl flex-grow py-4 px-4"),i($,"class","mx-auto flex flex-col flex-grow w-full max-w-2xl"),i(J,"class","flex flex-col min-h-screen")},m(g,w){m(document.head,t),m(document.head,n),m(document.head,r),m(document.head,f),m(document.head,v),m(document.head,a),m(document.head,_),m(document.head,c),m(document.head,d),m(document.head,k),m(document.head,H),m(document.head,q),m(document.head,N),m(document.head,x),M(g,de,w),M(g,J,w),m(J,$),m($,V),m(V,F),m(F,ee),m(ee,U),m(U,_e),m(F,Me),m(F,j),m(j,K),m(K,pe),m(j,De),m(j,ue),m(ue,ge),m(j,Pe),m(j,we),m(F,He),m(F,C),y&&Q(y,C,null),m(C,be),m(C,W),m(W,te),Q(X,te,null),m(V,Ve),m(V,ne),Q(B,ne,null),m(V,Re),D&&D.m(V,null),m(V,Ee),I&&I.m(V,null),A=!0},p(g,[w]){if((!A||w&2)&&e!==(e=g[1])&&(document.title=e),(!A||w&8&&l!==(l=g[3].text))&&i(t,"content",l),(!A||w&2)&&i(v,"content",g[1]),(!A||w&8&&o!==(o=g[3].text))&&i(a,"content",o),(!A||w&2)&&i(H,"content",g[1]),(!A||w&8&&Y!==(Y=g[3].text))&&i(q,"content",Y),(!A||w&2)&&me(_e,g[1]),(!A||w&512&&he!==(he=g[9].url.pathname))&&i(U,"href",he),(!A||w&4)&&ce!==(ce=Ke(new Date(Ie(g[2])),"MMMM d, yyyy")+"")&&me(pe,ce),(!A||w&4&&ve!==(ve=new Date(Ie(g[2])).toISOString()))&&i(K,"datetime",ve),(!A||w&16)&&me(ge,g[4]),(!A||w&128)&&me(we,g[7]),se!==(se=g[0])){if(y){Ae();const fe=y;P(fe.$$.fragment,1,0,()=>{Z(fe,1)}),Te()}se?(y=new se(Se()),G(y.$$.fragment),T(y.$$.fragment,1),Q(y,C,be)):y=null}const ke={};w&32768&&(ke.$$scope={dirty:w,ctx:g}),B.$set(ke),g[8]?D||(D=Ze(),D.c(),D.m(V,Ee)):D&&(D.d(1),D=null),g[6]||g[5]?I?(I.p(g,w),w&96&&T(I,1)):(I=$e(g),I.c(),T(I,1),I.m(V,null)):I&&(Ae(),P(I,1,1,()=>{I=null}),Te())},i(g){A||(y&&T(y.$$.fragment,g),T(X.$$.fragment,g),T(B.$$.fragment,g),T(I),A=!0)},o(g){y&&P(y.$$.fragment,g),P(X.$$.fragment,g),P(B.$$.fragment,g),P(I),A=!1},d(g){u(t),u(n),u(r),u(f),u(v),u(a),u(_),u(c),u(d),u(k),u(H),u(q),u(N),u(x),g&&u(de),g&&u(J),y&&Z(y),Z(X),Z(B),D&&D.d(),I&&I.d()}}}async function Xt({params:s,fetch:e}){const{slug:t}=s,n=(await e("/posts.json").then(f=>f.json())).find(f=>t===f.slug);if(!n)return{status:404,error:"Post not found"};const r=n.isIndexFile?await St(`../../../posts/${n.slug}/index.md`):await Rt(`../../../posts/${n.slug}.md`);return{props:Ye(ze({},n),{component:r.default})}}function Bt(s,e,t){let l;yt(s,ut,b=>t(9,l=b));let{$$slots:n={},$$scope:r}=e,{component:f}=e,{title:v}=e,{date:a}=e,{preview:o}=e,{readingTime:_}=e,{slug:c}=e,{next:d}=e,{previous:k}=e,{topics:H}=e,{tags:q}=e,{comments:Y}=e;const N=`https://og-image.vercel.app/**${encodeURIComponent(v)}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`,x=`${ct}/${c}`;return s.$$set=b=>{"component"in b&&t(0,f=b.component),"title"in b&&t(1,v=b.title),"date"in b&&t(2,a=b.date),"preview"in b&&t(3,o=b.preview),"readingTime"in b&&t(4,_=b.readingTime),"slug"in b&&t(12,c=b.slug),"next"in b&&t(5,d=b.next),"previous"in b&&t(6,k=b.previous),"topics"in b&&t(7,H=b.topics),"tags"in b&&t(13,q=b.tags),"comments"in b&&t(8,Y=b.comments),"$$scope"in b&&t(15,r=b.$$scope)},[f,v,a,o,_,d,k,H,Y,l,N,x,c,q,n,r]}class Gt extends tt{constructor(e){super(),nt(this,e,Bt,Ut,st,{component:0,title:1,date:2,preview:3,readingTime:4,slug:12,next:5,previous:6,topics:7,tags:13,comments:8})}}export{Gt as default,Xt as load};
