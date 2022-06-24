var st=Object.defineProperty,ot=Object.defineProperties;var lt=Object.getOwnPropertyDescriptors;var Re=Object.getOwnPropertySymbols;var at=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable;var Fe=(n,e,t)=>e in n?st(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Oe=(n,e)=>{for(var t in e||(e={}))at.call(e,t)&&Fe(n,t,e[t]);if(Re)for(var t of Re(e))rt.call(e,t)&&Fe(n,t,e[t]);return n},qe=(n,e)=>ot(n,lt(e));import{_ as ie}from"../../chunks/preload-helper-e4860ae8.js";import{X as it,S as Ke,i as We,s as Xe,e as p,t as F,j as H,c as v,a as k,g as O,d as f,l as V,b as i,Y as Ce,f as P,H as d,h as we,J as ct,D as ne,Z as ut,u as ft,_ as mt,n as A,o as be,p as T,v as z,w as se,x as J,A as K,W as dt,K as _t,M as Ze,N as Ge,O as Qe,P as $e,m as Ee}from"../../chunks/index-c6b9875b.js";import{f as Ne,p as ge,B as ht,P as et,A as pt}from"../../chunks/ArrowLeftIcon-c2dfc4bd.js";import{n as vt,w as tt}from"../../chunks/info-ca0dd7d5.js";const gt=()=>{const n=it("__svelte__");return{page:{subscribe:n.page.subscribe},navigating:{subscribe:n.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:n.navigating.subscribe}},session:n.session}},nt={subscribe(n){return gt().page.subscribe(n)}};const{window:wt}=mt;function je(n,e,t){const l=n.slice();return l[6]=e[t],l}function Be(n){let e,t,l=n[6].title+"",s,r,u,h;return{c(){e=p("li"),t=p("a"),s=F(l),u=H(),this.h()},l(a){e=v(a,"LI",{class:!0,style:!0});var o=k(e);t=v(o,"A",{class:!0,href:!0});var _=k(t);s=O(_,l),_.forEach(f),u=V(o),o.forEach(f),this.h()},h(){var a;i(t,"class","!no-underline"),i(t,"href",r=`#${n[6].node.id}`),i(e,"class","heading list-none my-2 !pl-0 text-base text-slate-400 hover:text-slate-900 dark:text-slate-500 hover:dark:text-slate-100 transition-colors svelte-15xs064"),i(e,"style",h=`--depth: ${n[6].depth}`),Ce(e,"active",((a=n[0])==null?void 0:a.node)===n[6].node)},m(a,o){P(a,e,o),d(e,t),d(t,s),d(e,u)},p(a,o){var _;o&2&&l!==(l=a[6].title+"")&&we(s,l),o&2&&r!==(r=`#${a[6].node.id}`)&&i(t,"href",r),o&2&&h!==(h=`--depth: ${a[6].depth}`)&&i(e,"style",h),o&3&&Ce(e,"active",((_=a[0])==null?void 0:_.node)===a[6].node)},d(a){a&&f(e)}}}function bt(n){let e,t,l,s,r,u,h=n[1],a=[];for(let o=0;o<h.length;o+=1)a[o]=Be(je(n,h,o));return{c(){e=p("h6"),t=F("Sections"),l=H(),s=p("ul");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=v(o,"H6",{id:!0,class:!0});var _=k(e);t=O(_,"Sections"),_.forEach(f),l=V(o),s=v(o,"UL",{class:!0});var c=k(s);for(let m=0;m<a.length;m+=1)a[m].l(c);c.forEach(f),this.h()},h(){i(e,"id","__sections"),i(e,"class","uppercase text-slate-400/75 dark:text-slate-600 font-bold text-sm"),i(s,"class","mt-2 !pl-0")},m(o,_){P(o,e,_),d(e,t),P(o,l,_),P(o,s,_);for(let c=0;c<a.length;c+=1)a[c].m(s,null);r||(u=ct(wt,"scroll",n[2]),r=!0)},p(o,[_]){if(_&3){h=o[1];let c;for(c=0;c<h.length;c+=1){const m=je(o,h,c);a[c]?a[c].p(m,_):(a[c]=Be(m),a[c].c(),a[c].m(s,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=h.length}},i:ne,o:ne,d(o){o&&f(e),o&&f(l),o&&f(s),ut(a,o),r=!1,u()}}}function Et(n,e,t){let{allowedHeadings:l=["h1","h2","h3","h4","h5","h6"]}=e,{activeHeading:s=null}=e,r,u=[];function h(){const o=[...document.querySelectorAll(`article :where(${l.join(", ")}):not(#__sections)`)],_=o.map(m=>Number(m.nodeName[1])),c=Math.min(..._);t(1,u=o.map((m,b)=>({title:m.innerText,depth:_[b]-c,node:m}))),s===null&&t(0,s=u[0])}ft(()=>{h(),a()}),typeof window!="undefined"&&nt.subscribe(()=>{h(),a()});function a(){r=window.scrollY;const o=u.findIndex(m=>m.node.offsetTop+m.node.clientHeight>r)-1;t(0,s=u[o]);const _=document.body.scrollHeight;(r+window.innerHeight)/_>.999&&t(0,s=u[u.length-1])}return n.$$set=o=>{"allowedHeadings"in o&&t(3,l=o.allowedHeadings),"activeHeading"in o&&t(0,s=o.activeHeading)},[s,u,a,l]}class kt extends Ke{constructor(e){super(),We(this,e,Et,bt,Xe,{allowedHeadings:3,activeHeading:0})}}function yt(n){switch(n){default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+n)))})}}function It(n){switch(n){case"../../../posts/about/index.md":return ie(()=>import("../../chunks/index-7dd8b264.js"),["chunks/index-7dd8b264.js","chunks/index-c6b9875b.js"]);case"../../../posts/dropbox-like-software/index.md":return ie(()=>import("../../chunks/index-00a52353.js"),["chunks/index-00a52353.js","chunks/index-c6b9875b.js"]);case"../../../posts/network-gives/index.md":return ie(()=>import("../../chunks/index-89f43d84.js"),["chunks/index-89f43d84.js","chunks/index-c6b9875b.js"]);case"../../../posts/sail-be-your-own-bank/index.md":return ie(()=>import("../../chunks/index-0ce88a97.js"),["chunks/index-0ce88a97.js","chunks/index-c6b9875b.js"]);case"../../../posts/thinkchef-franchise-menu-management/index.md":return ie(()=>import("../../chunks/index-2bfd1c4d.js"),["chunks/index-2bfd1c4d.js","chunks/index-c6b9875b.js"]);default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+n)))})}}const Tt=n=>({}),Ue=n=>({slot:"icon-start"}),Mt=n=>({}),Ye=n=>({slot:"icon-end"});function At(n){let e;return{c(){e=F("Back to Posts")},l(t){e=O(t,"Back to Posts")},m(t,l){P(t,e,l)},d(t){t&&f(e)}}}function Dt(n){let e,t;return e=new pt({props:{class:"h-5 w-5"}}),{c(){z(e.$$.fragment)},l(l){se(e.$$.fragment,l)},m(l,s){J(e,l,s),t=!0},p:ne,i(l){t||(T(e.$$.fragment,l),t=!0)},o(l){A(e.$$.fragment,l),t=!1},d(l){K(e,l)}}}function Pt(n){let e;const t=n[11].default,l=Ze(t,n,n[12],Ue),s=l||Dt();return{c(){s&&s.c()},l(r){s&&s.l(r)},m(r,u){s&&s.m(r,u),e=!0},p(r,u){l&&l.p&&(!e||u&4096)&&Ge(l,t,r,r[12],e?$e(t,r[12],u,Tt):Qe(r[12]),Ue)},i(r){e||(T(s,r),e=!0)},o(r){A(s,r),e=!1},d(r){s&&s.d(r)}}}function Ht(n){let e;const t=n[11].default,l=Ze(t,n,n[12],Ye);return{c(){l&&l.c()},l(s){l&&l.l(s)},m(s,r){l&&l.m(s,r),e=!0},p(s,r){l&&l.p&&(!e||r&4096)&&Ge(l,t,s,s[12],e?$e(t,s[12],r,Mt):Qe(s[12]),Ye)},i(s){e||(T(l,s),e=!0)},o(s){A(l,s),e=!1},d(s){l&&l.d(s)}}}function ze(n){let e,t,l,s,r,u,h;const a=[xt,Vt],o=[];function _(m,b){return m[6]?0:1}s=_(n),r=o[s]=a[s](n);let c=n[5]&&Je(n);return{c(){e=p("hr"),t=H(),l=p("div"),r.c(),u=H(),c&&c.c(),this.h()},l(m){e=v(m,"HR",{}),t=V(m),l=v(m,"DIV",{class:!0});var b=k(l);r.l(b),u=V(b),c&&c.l(b),b.forEach(f),this.h()},h(){i(l,"class","grid gap-8 grid-cols-1 sm:grid-cols-2")},m(m,b){P(m,e,b),P(m,t,b),P(m,l,b),o[s].m(l,null),d(l,u),c&&c.m(l,null),h=!0},p(m,b){let D=s;s=_(m),s===D?o[s].p(m,b):(Ee(),A(o[D],1,1,()=>{o[D]=null}),be(),r=o[s],r?r.p(m,b):(r=o[s]=a[s](m),r.c()),T(r,1),r.m(l,u)),m[5]?c?(c.p(m,b),b&32&&T(c,1)):(c=Je(m),c.c(),T(c,1),c.m(l,null)):c&&(Ee(),A(c,1,1,()=>{c=null}),be())},i(m){h||(T(r),T(c),h=!0)},o(m){A(r),A(c),h=!1},d(m){m&&f(e),m&&f(t),m&&f(l),o[s].d(),c&&c.d()}}}function Vt(n){let e;return{c(){e=p("div")},l(t){e=v(t,"DIV",{}),k(e).forEach(f)},m(t,l){P(t,e,l)},p:ne,i:ne,o:ne,d(t){t&&f(e)}}}function xt(n){let e,t,l,s,r,u,h;return u=new et({props:{post:n[6],small:!0}}),{c(){e=p("div"),t=p("h6"),l=F("Previous Post"),s=H(),r=p("div"),z(u.$$.fragment),this.h()},l(a){e=v(a,"DIV",{class:!0});var o=k(e);t=v(o,"H6",{class:!0});var _=k(t);l=O(_,"Previous Post"),_.forEach(f),s=V(o),r=v(o,"DIV",{class:!0});var c=k(r);se(u.$$.fragment,c),c.forEach(f),o.forEach(f),this.h()},h(){i(t,"class","not-prose post-preview-label svelte-1dho23n"),i(r,"class","flex-1 post-preview svelte-1dho23n"),i(e,"class","flex flex-col")},m(a,o){P(a,e,o),d(e,t),d(t,l),d(e,s),d(e,r),J(u,r,null),h=!0},p(a,o){const _={};o&64&&(_.post=a[6]),u.$set(_)},i(a){h||(T(u.$$.fragment,a),h=!0)},o(a){A(u.$$.fragment,a),h=!1},d(a){a&&f(e),K(u)}}}function Je(n){let e,t,l,s,r,u,h;return u=new et({props:{post:n[5],small:!0}}),{c(){e=p("div"),t=p("h6"),l=F("Next Post"),s=H(),r=p("div"),z(u.$$.fragment),this.h()},l(a){e=v(a,"DIV",{class:!0});var o=k(e);t=v(o,"H6",{class:!0});var _=k(t);l=O(_,"Next Post"),_.forEach(f),s=V(o),r=v(o,"DIV",{class:!0});var c=k(r);se(u.$$.fragment,c),c.forEach(f),o.forEach(f),this.h()},h(){i(t,"class","not-prose post-preview-label flex justify-end svelte-1dho23n"),i(r,"class","flex-1 post-preview svelte-1dho23n"),i(e,"class","flex flex-col")},m(a,o){P(a,e,o),d(e,t),d(t,l),d(e,s),d(e,r),J(u,r,null),h=!0},p(a,o){const _={};o&32&&(_.post=a[5]),u.$set(_)},i(a){h||(T(u.$$.fragment,a),h=!0)},o(a){A(u.$$.fragment,a),h=!1},d(a){a&&f(e),K(u)}}}function St(n){let e,t,l,s,r,u,h,a,o,_,c,m,b,D,L,E,W,ce,j,X,x,S,Z,q,ue,fe,ke,C,B,oe=Ne(new Date(ge(n[2])),"MMMM d, yyyy")+"",me,de,ye,le,_e,Ie,R,y,he,U,G,Y,Te,Q,N,Me,M;document.title=e=n[1];var $=n[0];function Ae(g){return{}}$&&(y=new $(Ae())),Y=new kt({props:{allowedHeadings:["h2","h3","h4","h5","h6"]}}),N=new ht({props:{href:"/posts",$$slots:{"icon-end":[Ht],"icon-start":[Pt],default:[At]},$$scope:{ctx:n}}});let I=(n[6]||n[5])&&ze(n);return{c(){t=p("meta"),s=p("meta"),r=p("meta"),u=p("meta"),h=p("meta"),a=p("meta"),_=p("meta"),c=p("meta"),m=p("meta"),b=p("meta"),D=p("meta"),L=p("meta"),W=p("meta"),ce=H(),j=p("div"),X=p("div"),x=p("main"),S=p("article"),Z=p("h1"),q=p("a"),ue=F(n[1]),ke=H(),C=p("div"),B=p("time"),me=F(oe),ye=F(`
    \u2022
    `),le=p("span"),_e=F(n[4]),Ie=H(),R=p("div"),y&&z(y.$$.fragment),he=H(),U=p("div"),G=p("div"),z(Y.$$.fragment),Te=H(),Q=p("div"),z(N.$$.fragment),Me=H(),I&&I.c(),this.h()},l(g){const w=dt('[data-svelte="svelte-xeigh5"]',document.head);t=v(w,"META",{name:!0,content:!0}),s=v(w,"META",{name:!0,content:!0}),r=v(w,"META",{property:!0,content:!0}),u=v(w,"META",{property:!0,content:!0}),h=v(w,"META",{property:!0,content:!0}),a=v(w,"META",{property:!0,content:!0}),_=v(w,"META",{property:!0,content:!0}),c=v(w,"META",{name:!0,content:!0}),m=v(w,"META",{property:!0,content:!0}),b=v(w,"META",{property:!0,content:!0}),D=v(w,"META",{name:!0,content:!0}),L=v(w,"META",{name:!0,content:!0}),W=v(w,"META",{name:!0,content:!0}),w.forEach(f),ce=V(g),j=v(g,"DIV",{class:!0});var ae=k(j);X=v(ae,"DIV",{class:!0});var re=k(X);x=v(re,"MAIN",{class:!0});var ee=k(x);S=v(ee,"ARTICLE",{class:!0});var te=k(S);Z=v(te,"H1",{class:!0});var De=k(Z);q=v(De,"A",{class:!0,href:!0});var Pe=k(q);ue=O(Pe,n[1]),Pe.forEach(f),De.forEach(f),ke=V(te),C=v(te,"DIV",{class:!0});var pe=k(C);B=v(pe,"TIME",{datetime:!0});var He=k(B);me=O(He,oe),He.forEach(f),ye=O(pe,`
    \u2022
    `),le=v(pe,"SPAN",{});var Ve=k(le);_e=O(Ve,n[4]),Ve.forEach(f),pe.forEach(f),Ie=V(te),R=v(te,"DIV",{class:!0});var ve=k(R);y&&se(y.$$.fragment,ve),he=V(ve),U=v(ve,"DIV",{class:!0,"aria-label":!0});var xe=k(U);G=v(xe,"DIV",{class:!0});var Se=k(G);se(Y.$$.fragment,Se),Se.forEach(f),xe.forEach(f),ve.forEach(f),te.forEach(f),Te=V(ee),Q=v(ee,"DIV",{class:!0});var Le=k(Q);se(N.$$.fragment,Le),Le.forEach(f),Me=V(ee),I&&I.l(ee),ee.forEach(f),re.forEach(f),ae.forEach(f),this.h()},h(){i(t,"name","description"),i(t,"content",l=n[3].text),i(s,"name","author"),i(s,"content",vt),i(r,"property","og:url"),i(r,"content",n[9]),i(u,"property","og:type"),i(u,"content","website"),i(h,"property","og:title"),i(h,"content",n[1]),i(a,"property","og:description"),i(a,"content",o=n[3].text),i(_,"property","og:image"),i(_,"content",n[8]),i(c,"name","twitter:card"),i(c,"content","summary_large_image"),i(m,"property","twitter:domain"),i(m,"content",tt),i(b,"property","twitter:url"),i(b,"content",n[9]),i(D,"name","twitter:title"),i(D,"content",n[1]),i(L,"name","twitter:description"),i(L,"content",E=n[3].text),i(W,"name","twitter:image"),i(W,"content",n[8]),i(q,"class","!font-medium"),i(q,"href",fe=n[7].url.pathname),i(Z,"class","!mt-0 !mb-2"),i(B,"datetime",de=new Date(ge(n[2])).toISOString()),i(C,"class","opacity-70"),i(G,"class","fixed z-10 px-4 py-2 ml-8 top-[4.5rem]"),i(U,"class","hidden xl:block absolute not-prose left-[100%]"),i(U,"aria-label","Table of Contents"),i(R,"class","relative"),i(S,"class","relative"),i(Q,"class","pt-12 flex justify-between"),i(x,"class","prose prose-slate prose-sm sm:prose sm:prose-slate sm:prose-lg sm:max-w-none dark:prose-invert flex flex-col w-full max-w-2xl flex-grow py-4 px-4"),i(X,"class","mx-auto flex flex-col flex-grow w-full max-w-2xl"),i(j,"class","flex flex-col min-h-screen")},m(g,w){d(document.head,t),d(document.head,s),d(document.head,r),d(document.head,u),d(document.head,h),d(document.head,a),d(document.head,_),d(document.head,c),d(document.head,m),d(document.head,b),d(document.head,D),d(document.head,L),d(document.head,W),P(g,ce,w),P(g,j,w),d(j,X),d(X,x),d(x,S),d(S,Z),d(Z,q),d(q,ue),d(S,ke),d(S,C),d(C,B),d(B,me),d(C,ye),d(C,le),d(le,_e),d(S,Ie),d(S,R),y&&J(y,R,null),d(R,he),d(R,U),d(U,G),J(Y,G,null),d(x,Te),d(x,Q),J(N,Q,null),d(x,Me),I&&I.m(x,null),M=!0},p(g,[w]){if((!M||w&2)&&e!==(e=g[1])&&(document.title=e),(!M||w&8&&l!==(l=g[3].text))&&i(t,"content",l),(!M||w&2)&&i(h,"content",g[1]),(!M||w&8&&o!==(o=g[3].text))&&i(a,"content",o),(!M||w&2)&&i(D,"content",g[1]),(!M||w&8&&E!==(E=g[3].text))&&i(L,"content",E),(!M||w&2)&&we(ue,g[1]),(!M||w&128&&fe!==(fe=g[7].url.pathname))&&i(q,"href",fe),(!M||w&4)&&oe!==(oe=Ne(new Date(ge(g[2])),"MMMM d, yyyy")+"")&&we(me,oe),(!M||w&4&&de!==(de=new Date(ge(g[2])).toISOString()))&&i(B,"datetime",de),(!M||w&16)&&we(_e,g[4]),$!==($=g[0])){if(y){Ee();const re=y;A(re.$$.fragment,1,0,()=>{K(re,1)}),be()}$?(y=new $(Ae()),z(y.$$.fragment),T(y.$$.fragment,1),J(y,R,he)):y=null}const ae={};w&4096&&(ae.$$scope={dirty:w,ctx:g}),N.$set(ae),g[6]||g[5]?I?(I.p(g,w),w&96&&T(I,1)):(I=ze(g),I.c(),T(I,1),I.m(x,null)):I&&(Ee(),A(I,1,1,()=>{I=null}),be())},i(g){M||(y&&T(y.$$.fragment,g),T(Y.$$.fragment,g),T(N.$$.fragment,g),T(I),M=!0)},o(g){y&&A(y.$$.fragment,g),A(Y.$$.fragment,g),A(N.$$.fragment,g),A(I),M=!1},d(g){f(t),f(s),f(r),f(u),f(h),f(a),f(_),f(c),f(m),f(b),f(D),f(L),f(W),g&&f(ce),g&&f(j),y&&K(y),K(Y),K(N),I&&I.d()}}}async function Nt({params:n,fetch:e}){const{slug:t}=n,s=(await e("/posts.json").then(u=>u.json())).find(u=>t===u.slug);if(!s)return{status:404,error:"Post not found"};const r=s.isIndexFile?await It(`../../../posts/${s.slug}/index.md`):await yt(`../../../posts/${s.slug}.md`);return{props:qe(Oe({},s),{component:r.default})}}function Lt(n,e,t){let l;_t(n,nt,E=>t(7,l=E));let{$$slots:s={},$$scope:r}=e,{component:u}=e,{title:h}=e,{date:a}=e,{preview:o}=e,{readingTime:_}=e,{slug:c}=e,{next:m}=e,{previous:b}=e;const D=`https://og-image.vercel.app/**${encodeURIComponent(h)}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`,L=`${tt}/${c}`;return n.$$set=E=>{"component"in E&&t(0,u=E.component),"title"in E&&t(1,h=E.title),"date"in E&&t(2,a=E.date),"preview"in E&&t(3,o=E.preview),"readingTime"in E&&t(4,_=E.readingTime),"slug"in E&&t(10,c=E.slug),"next"in E&&t(5,m=E.next),"previous"in E&&t(6,b=E.previous),"$$scope"in E&&t(12,r=E.$$scope)},[u,h,a,o,_,m,b,l,D,L,c,s,r]}class jt extends Ke{constructor(e){super(),We(this,e,Lt,St,Xe,{component:0,title:1,date:2,preview:3,readingTime:4,slug:10,next:5,previous:6})}}export{jt as default,Nt as load};
