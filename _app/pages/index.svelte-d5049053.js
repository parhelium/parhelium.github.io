import{Q as V2,S as D0,i as V0,s as W1,e as l,t as m,j as h,c as o,a as s,g,d as r,l as v,b as e,f as r1,H as t,h as Q2,R as x2,T as _2,D as C1,m as Z2,n as T1,o as $2,p as O1,u as j2,k as w2,K as P2,E as K,F as U,U as A,v as b2,V as H2,w as y2,W as G1,x as k2,A as E2}from"../chunks/index-bd0d527c.js";import{l as S2}from"../chunks/stores-8d163115.js";import{n as M2}from"../chunks/info-d3a40cd1.js";import"../chunks/index-fc3678bd.js";function I2(u,{delay:a=0,duration:d=400,easing:n=V2}={}){const c=+getComputedStyle(u).opacity;return{delay:a,duration:d,easing:n,css:i=>`opacity: ${i*c}`}}function D2(u){let a,d,n,c=u[1][u[0]]+"",i,f,x,w,M=u[2][u[0]]+"",R,D,J,V;return{c(){a=l("div"),d=m("Helped "),n=l("p"),i=m(c),x=m(" to "),w=l("p"),R=m(M),D=h(),V=m("."),this.h()},l(p){a=o(p,"DIV",{id:!0,class:!0});var k=s(a);d=g(k,"Helped "),n=o(k,"P",{class:!0});var a1=s(n);i=g(a1,c),a1.forEach(r),x=g(k," to "),w=o(k,"P",{class:!0});var Z=s(w);R=g(Z,M),D=v(Z),Z.forEach(r),V=g(k,"."),k.forEach(r),this.h()},h(){e(n,"class","svelte-1s5d5g0"),e(w,"class"," svelte-1s5d5g0"),e(a,"id","demo"),e(a,"class","svelte-1s5d5g0")},m(p,k){r1(p,a,k),t(a,d),t(a,n),t(n,i),t(a,x),t(a,w),t(w,R),t(w,D),t(a,V)},p(p,k){k&1&&c!==(c=p[1][p[0]]+"")&&Q2(i,c),k&1&&M!==(M=p[2][p[0]]+"")&&Q2(R,M)},i(p){f||x2(()=>{f=_2(n,I2,{}),f.start()}),J||x2(()=>{J=_2(w,I2,{}),J.start()})},o:C1,d(p){p&&r(a)}}}function N2(u){let a,d=u[0],n=D2(u);return{c(){a=l("main"),n.c()},l(c){a=o(c,"MAIN",{});var i=s(a);n.l(i),i.forEach(r)},m(c,i){r1(c,a,i),n.m(a,null)},p(c,[i]){i&1&&W1(d,d=c[0])?(Z2(),T1(n,1,1,C1),$2(),n=D2(c),n.c(),O1(n,1),n.m(a,null)):n.p(c,i)},i(c){O1(n)},o(c){T1(n)},d(c){c&&r(a),n.d(c)}}}const z2=2e3;function F2(u,a,d){const n=["CEO","VP","VP","PM"],c=["materialize his vision in form software","build team of 10 developers in 3 months","architect solution for business problem","to deliver high quality software on time"],i=()=>Math.round(Math.random()*(n.length-1));let f=i();return j2(()=>{const x=setInterval(()=>{d(0,f=i())},z2);return()=>{clearInterval(x)}}),[f,n,c]}class R2 extends D0{constructor(a){super(),V0(this,a,F2,N2,W1,{})}}function q2(u){let a,d,n;return{c(){a=K("svg"),d=K("g"),n=K("path"),this.h()},l(c){a=U(c,"svg",{width:!0,height:!0,viewBox:!0,xmlns:!0});var i=s(a);d=U(i,"g",{id:!0,style:!0,"fill-rule":!0,"font-size":!0,stroke:!0,"stroke-width":!0,fill:!0});var f=s(d);n=U(f,"path",{d:!0,"vector-effect":!0}),s(n).forEach(r),f.forEach(r),i.forEach(r),this.h()},h(){e(n,"d","M 133.75 37 L 130.25 37 L 121.45 2.1 L 124.65 2.1 L 132.1 33.3 L 132.25 33.3 L 140.5 2.1 L 144.15 2.1 L 152.3 33.3 L 152.45 33.3 L 160.15 2.1 L 163.25 2.1 L 154.15 37 L 150.65 37 L 142.3 5.45 L 142.2 5.45 L 133.75 37 Z M 20.8 37 L 8.65 19 L 3 25.25 L 3 37 L 0 37 L 0 2.1 L 3 2.1 L 3 21.75 L 3.1 21.75 L 8.7 15.3 L 20.2 2.1 L 23.85 2.1 L 10.7 16.95 L 24.5 37 L 20.8 37 Z M 294.1 37 L 294.1 0 L 296.95 0 L 296.95 24.45 L 297.1 24.45 L 301.1 20.2 L 309.6 11.4 L 313.1 11.4 L 303.05 21.8 L 314.2 37 L 310.7 37 L 301 23.6 L 296.95 27.7 L 296.95 37 L 294.1 37 Z M 176.6 33.95 L 184.4 11.4 L 187.3 11.4 L 175.45 44.2 Q 174.877 45.729 174.075 46.345 A 2.308 2.308 0 0 1 174 46.4 Q 173.253 46.927 171.658 46.991 A 11.418 11.418 0 0 1 171.2 47 L 168.3 47 L 168.3 44.5 L 172.6 44.5 L 175.05 37.75 L 165.55 11.4 L 168.55 11.4 L 176.4 33.95 L 176.6 33.95 Z M 45.9 37 L 45.9 32.95 L 45.7 32.95 A 8.034 8.034 0 0 1 44.914 34.46 A 9.1 9.1 0 0 1 44.75 34.7 Q 44.15 35.55 43.25 36.175 Q 42.35 36.8 41.125 37.2 A 7.666 7.666 0 0 1 39.839 37.494 Q 39.101 37.6 38.25 37.6 A 10.686 10.686 0 0 1 35.563 37.281 A 7.423 7.423 0 0 1 31.85 35.075 Q 29.55 32.55 29.55 27.85 L 29.55 11.4 L 32.4 11.4 L 32.4 27.3 A 14.579 14.579 0 0 0 32.546 29.439 Q 32.708 30.53 33.051 31.404 A 5.723 5.723 0 0 0 34.1 33.15 A 5.491 5.491 0 0 0 36.956 34.82 Q 37.887 35.05 39 35.05 A 9.382 9.382 0 0 0 41.402 34.747 A 8.772 8.772 0 0 0 41.575 34.7 Q 42.8 34.35 43.775 33.65 Q 44.75 32.95 45.325 31.875 Q 45.9 30.8 45.9 29.35 L 45.9 11.4 L 48.75 11.4 L 48.75 37 L 45.9 37 Z M 107.25 37 L 104.35 37 A 5.058 5.058 0 0 1 103.471 36.929 Q 103 36.846 102.633 36.665 A 2.184 2.184 0 0 1 101.95 36.15 Q 101.2 35.3 101.1 33.85 L 101.1 32.95 L 100.85 32.95 Q 100 35.1 98.05 36.35 Q 96.273 37.489 93.623 37.59 A 13.748 13.748 0 0 1 93.1 37.6 A 13.325 13.325 0 0 1 90.655 37.39 Q 89.28 37.133 88.2 36.562 A 6.692 6.692 0 0 1 86.85 35.625 A 6.432 6.432 0 0 1 84.854 32.093 A 9.675 9.675 0 0 1 84.65 30.05 Q 84.65 26.65 87.075 24.65 A 7.121 7.121 0 0 1 89.166 23.491 Q 91.139 22.765 94.091 22.666 A 28.562 28.562 0 0 1 95.05 22.65 L 100.95 22.65 L 100.95 19.65 A 8.83 8.83 0 0 0 100.614 17.099 Q 99.466 13.3 94.4 13.3 Q 91.85 13.3 90.15 14.375 A 7.519 7.519 0 0 0 87.928 16.563 A 9.401 9.401 0 0 0 87.4 17.45 L 85.6 15.95 A 8.93 8.93 0 0 1 88.791 12.273 A 10.566 10.566 0 0 1 88.825 12.25 A 8.082 8.082 0 0 1 91.32 11.165 Q 92.743 10.8 94.5 10.8 Q 97.71 10.8 99.851 11.945 A 7.248 7.248 0 0 1 101.4 13.05 Q 103.8 15.3 103.8 19.35 L 103.8 34.5 L 107.25 34.5 L 107.25 37 Z M 58.05 37 L 58.05 0 L 60.9 0 L 60.9 15.5 L 61.05 15.5 Q 62 13.35 63.95 12.075 A 7.511 7.511 0 0 1 66.441 11.048 Q 67.444 10.823 68.608 10.802 A 13.366 13.366 0 0 1 68.85 10.8 A 11.247 11.247 0 0 1 72.26 11.292 A 8.901 8.901 0 0 1 76.6 14.3 A 11.621 11.621 0 0 1 78.586 18.143 Q 79.108 19.813 79.295 21.829 A 25.648 25.648 0 0 1 79.4 24.2 A 23.547 23.547 0 0 1 79.113 28.002 Q 78.779 30.036 78.059 31.669 A 10.927 10.927 0 0 1 76.6 34.1 A 9.123 9.123 0 0 1 69.981 37.552 A 12.999 12.999 0 0 1 68.85 37.6 A 11.235 11.235 0 0 1 66.785 37.421 Q 65.188 37.122 64 36.325 Q 62.1 35.05 61.05 32.9 L 60.9 32.9 L 60.9 37 L 58.05 37 Z M 238.25 37 L 238.25 0 L 241.1 0 L 241.1 15.5 L 241.25 15.5 Q 242.2 13.35 244.15 12.075 A 7.511 7.511 0 0 1 246.641 11.048 Q 247.644 10.823 248.808 10.802 A 13.366 13.366 0 0 1 249.05 10.8 A 11.247 11.247 0 0 1 252.46 11.292 A 8.901 8.901 0 0 1 256.8 14.3 A 11.621 11.621 0 0 1 258.786 18.143 Q 259.308 19.813 259.495 21.829 A 25.648 25.648 0 0 1 259.6 24.2 A 23.547 23.547 0 0 1 259.313 28.002 Q 258.979 30.036 258.259 31.669 A 10.927 10.927 0 0 1 256.8 34.1 A 9.123 9.123 0 0 1 250.181 37.552 A 12.999 12.999 0 0 1 249.05 37.6 A 11.235 11.235 0 0 1 246.985 37.421 Q 245.388 37.122 244.2 36.325 Q 242.3 35.05 241.25 32.9 L 241.1 32.9 L 241.1 37 L 238.25 37 Z M 286.85 23.4 L 286.85 24.75 L 267.9 24.75 L 267.9 26 A 12.161 12.161 0 0 0 268.103 28.26 A 10.16 10.16 0 0 0 268.475 29.675 A 8.72 8.72 0 0 0 269.438 31.658 A 7.653 7.653 0 0 0 270.125 32.55 Q 271.2 33.75 272.75 34.425 A 8.061 8.061 0 0 0 274.957 35.02 A 10.182 10.182 0 0 0 276.25 35.1 A 9.335 9.335 0 0 0 279.484 34.572 Q 282.539 33.45 284 29.95 L 286.1 31.35 Q 284.9 34.2 282.325 35.9 A 10.132 10.132 0 0 1 278.405 37.413 A 13.637 13.637 0 0 1 276.1 37.6 A 12.487 12.487 0 0 1 273.31 37.299 A 10.462 10.462 0 0 1 271.475 36.7 Q 269.4 35.8 267.925 34.075 A 10.93 10.93 0 0 1 266.291 31.477 A 13.797 13.797 0 0 1 265.675 29.85 A 16.878 16.878 0 0 1 265.048 26.832 A 22.408 22.408 0 0 1 264.9 24.2 A 21.909 21.909 0 0 1 265.088 21.263 A 16.304 16.304 0 0 1 265.675 18.575 A 12.983 12.983 0 0 1 266.75 16.06 A 10.63 10.63 0 0 1 267.925 14.375 Q 269.4 12.65 271.45 11.725 A 10.471 10.471 0 0 1 274.646 10.874 A 12.982 12.982 0 0 1 276.05 10.8 A 11.239 11.239 0 0 1 278.801 11.126 A 9.644 9.644 0 0 1 280.5 11.725 Q 282.5 12.65 283.9 14.3 A 11.213 11.213 0 0 1 285.56 16.954 A 13.789 13.789 0 0 1 286.075 18.275 A 15.053 15.053 0 0 1 286.758 21.531 A 18.589 18.589 0 0 1 286.85 23.4 Z M 195.9 37 L 193.05 37 L 193.05 11.4 L 195.9 11.4 L 195.9 16 L 196.1 16 A 7.315 7.315 0 0 1 197.537 13.81 A 9.555 9.555 0 0 1 198.65 12.8 A 6.008 6.008 0 0 1 200.58 11.822 Q 201.429 11.558 202.455 11.459 A 13.517 13.517 0 0 1 203.75 11.4 L 205.45 11.4 L 205.45 14.2 L 203.2 14.2 Q 200.453 14.2 198.554 15.232 A 6.955 6.955 0 0 0 197.95 15.6 A 4.756 4.756 0 0 0 196.553 17.028 Q 195.966 17.981 195.907 19.217 A 5.875 5.875 0 0 0 195.9 19.5 L 195.9 37 Z M 217.175 37.323 A 12.445 12.445 0 0 0 219.85 37.6 Q 222.4 37.6 224.45 36.7 Q 226.5 35.8 227.95 34.075 A 10.962 10.962 0 0 0 229.175 32.271 A 13.822 13.822 0 0 0 230.2 29.85 Q 231 27.35 231 24.2 Q 231 21.05 230.2 18.575 Q 229.4 16.1 227.95 14.375 Q 226.5 12.65 224.45 11.725 Q 222.4 10.8 219.85 10.8 A 12.982 12.982 0 0 0 218.446 10.874 A 10.471 10.471 0 0 0 215.25 11.725 Q 213.2 12.65 211.75 14.375 A 11.063 11.063 0 0 0 210.533 16.157 A 13.751 13.751 0 0 0 209.5 18.575 A 15.868 15.868 0 0 0 208.894 21.263 A 21.235 21.235 0 0 0 208.7 24.2 Q 208.7 27.35 209.5 29.85 A 14.48 14.48 0 0 0 210.159 31.547 A 11.335 11.335 0 0 0 211.75 34.075 Q 213.2 35.8 215.25 36.7 A 10.241 10.241 0 0 0 217.175 37.323 Z M 227.95 25.8 L 227.95 22.6 Q 227.95 19.502 226.919 17.411 A 7.181 7.181 0 0 0 225.775 15.725 A 7.164 7.164 0 0 0 221.521 13.48 A 10.283 10.283 0 0 0 219.85 13.35 A 9.64 9.64 0 0 0 217.284 13.674 A 7.023 7.023 0 0 0 213.925 15.7 Q 212.138 17.631 211.819 21.048 A 16.731 16.731 0 0 0 211.75 22.6 L 211.75 25.8 Q 211.75 28.898 212.781 30.989 A 7.181 7.181 0 0 0 213.925 32.675 A 7.164 7.164 0 0 0 218.179 34.92 A 10.283 10.283 0 0 0 219.85 35.05 A 9.64 9.64 0 0 0 222.416 34.726 A 7.023 7.023 0 0 0 225.775 32.7 Q 227.562 30.769 227.881 27.352 A 16.731 16.731 0 0 0 227.95 25.8 Z M 76.35 26 L 76.35 22.4 Q 76.35 18.25 74.2 15.8 Q 72.05 13.35 68.2 13.35 A 9.423 9.423 0 0 0 65.963 13.609 A 8.545 8.545 0 0 0 65.375 13.775 A 8.303 8.303 0 0 0 63.811 14.453 A 7.114 7.114 0 0 0 63.05 14.95 Q 62.05 15.7 61.475 16.75 Q 60.9 17.8 60.9 19.05 L 60.9 29.2 Q 60.9 30.55 61.475 31.625 Q 62.05 32.7 63.05 33.475 A 6.919 6.919 0 0 0 64.89 34.487 A 8.129 8.129 0 0 0 65.375 34.65 A 9.534 9.534 0 0 0 67.733 35.04 A 10.952 10.952 0 0 0 68.2 35.05 A 9.695 9.695 0 0 0 70.744 34.734 A 6.892 6.892 0 0 0 74.2 32.6 Q 76.241 30.274 76.344 26.417 A 15.53 15.53 0 0 0 76.35 26 Z M 256.55 26 L 256.55 22.4 Q 256.55 18.25 254.4 15.8 Q 252.25 13.35 248.4 13.35 A 9.423 9.423 0 0 0 246.163 13.609 A 8.545 8.545 0 0 0 245.575 13.775 A 8.303 8.303 0 0 0 244.011 14.453 A 7.114 7.114 0 0 0 243.25 14.95 Q 242.25 15.7 241.675 16.75 Q 241.1 17.8 241.1 19.05 L 241.1 29.2 Q 241.1 30.55 241.675 31.625 Q 242.25 32.7 243.25 33.475 A 6.919 6.919 0 0 0 245.09 34.487 A 8.129 8.129 0 0 0 245.575 34.65 A 9.534 9.534 0 0 0 247.933 35.04 A 10.952 10.952 0 0 0 248.4 35.05 A 9.695 9.695 0 0 0 250.944 34.734 A 6.892 6.892 0 0 0 254.4 32.6 Q 256.441 30.274 256.544 26.417 A 15.53 15.53 0 0 0 256.55 26 Z M 267.9 22.3 L 267.9 22.55 L 283.75 22.55 L 283.75 22.15 A 12.698 12.698 0 0 0 283.556 19.89 A 10.533 10.533 0 0 0 283.2 18.475 A 8.696 8.696 0 0 0 282.456 16.8 A 7.098 7.098 0 0 0 281.625 15.65 Q 280.6 14.5 279.175 13.85 A 7.298 7.298 0 0 0 276.523 13.213 A 8.603 8.603 0 0 0 276.05 13.2 Q 274.2 13.2 272.7 13.875 Q 271.2 14.55 270.125 15.75 A 8.036 8.036 0 0 0 268.719 17.989 A 9.555 9.555 0 0 0 268.475 18.625 A 10.653 10.653 0 0 0 267.951 21.141 A 12.972 12.972 0 0 0 267.9 22.3 Z M 100.95 29.55 L 100.95 24.8 L 94.95 24.8 A 19.17 19.17 0 0 0 93.003 24.892 Q 91.047 25.092 89.851 25.732 A 4.432 4.432 0 0 0 89.375 26.025 A 4.085 4.085 0 0 0 88.144 27.364 Q 87.696 28.166 87.654 29.187 A 5.191 5.191 0 0 0 87.65 29.4 L 87.65 30.6 A 5.013 5.013 0 0 0 87.839 32.017 A 3.647 3.647 0 0 0 89.25 34 Q 90.644 35.002 92.834 35.131 A 11.316 11.316 0 0 0 93.5 35.15 A 10.641 10.641 0 0 0 95.537 34.961 A 9.278 9.278 0 0 0 96.4 34.75 Q 97.75 34.35 98.775 33.625 A 5.458 5.458 0 0 0 100.059 32.369 A 5.085 5.085 0 0 0 100.375 31.875 A 4.524 4.524 0 0 0 100.93 30.029 A 5.552 5.552 0 0 0 100.95 29.55 Z"),e(n,"vector-effect","non-scaling-stroke"),e(d,"id","svgGroup"),A(d,"stroke","#000"),A(d,"stroke-width","0.25mm"),A(d,"fill","#000"),e(d,"fill-rule","evenodd"),e(d,"font-size","9pt"),e(d,"stroke","#000"),e(d,"stroke-width","0.25mm"),e(d,"fill","#000"),e(a,"width","314.2"),e(a,"height","47"),e(a,"viewBox","0 0 314.2 47"),e(a,"xmlns","http://www.w3.org/2000/svg")},m(c,i){r1(c,a,i),t(a,d),t(d,n)},d(c){c&&r(a)}}}function B2(u){let a,d,n;return{c(){a=K("svg"),d=K("g"),n=K("path"),this.h()},l(c){a=U(c,"svg",{width:!0,height:!0,viewBox:!0,xmlns:!0});var i=s(a);d=U(i,"g",{id:!0,style:!0,"fill-rule":!0,"font-size":!0,stroke:!0,"stroke-width":!0,fill:!0});var f=s(d);n=U(f,"path",{d:!0,"vector-effect":!0}),s(n).forEach(r),f.forEach(r),i.forEach(r),this.h()},h(){e(n,"d","M 133.75 37 L 130.25 37 L 121.45 2.1 L 124.65 2.1 L 132.1 33.3 L 132.25 33.3 L 140.5 2.1 L 144.15 2.1 L 152.3 33.3 L 152.45 33.3 L 160.15 2.1 L 163.25 2.1 L 154.15 37 L 150.65 37 L 142.3 5.45 L 142.2 5.45 L 133.75 37 Z M 20.8 37 L 8.65 19 L 3 25.25 L 3 37 L 0 37 L 0 2.1 L 3 2.1 L 3 21.75 L 3.1 21.75 L 8.7 15.3 L 20.2 2.1 L 23.85 2.1 L 10.7 16.95 L 24.5 37 L 20.8 37 Z M 294.1 37 L 294.1 0 L 296.95 0 L 296.95 24.45 L 297.1 24.45 L 301.1 20.2 L 309.6 11.4 L 313.1 11.4 L 303.05 21.8 L 314.2 37 L 310.7 37 L 301 23.6 L 296.95 27.7 L 296.95 37 L 294.1 37 Z M 176.6 33.95 L 184.4 11.4 L 187.3 11.4 L 175.45 44.2 Q 174.877 45.729 174.075 46.345 A 2.308 2.308 0 0 1 174 46.4 Q 173.253 46.927 171.658 46.991 A 11.418 11.418 0 0 1 171.2 47 L 168.3 47 L 168.3 44.5 L 172.6 44.5 L 175.05 37.75 L 165.55 11.4 L 168.55 11.4 L 176.4 33.95 L 176.6 33.95 Z M 45.9 37 L 45.9 32.95 L 45.7 32.95 A 8.034 8.034 0 0 1 44.914 34.46 A 9.1 9.1 0 0 1 44.75 34.7 Q 44.15 35.55 43.25 36.175 Q 42.35 36.8 41.125 37.2 A 7.666 7.666 0 0 1 39.839 37.494 Q 39.101 37.6 38.25 37.6 A 10.686 10.686 0 0 1 35.563 37.281 A 7.423 7.423 0 0 1 31.85 35.075 Q 29.55 32.55 29.55 27.85 L 29.55 11.4 L 32.4 11.4 L 32.4 27.3 A 14.579 14.579 0 0 0 32.546 29.439 Q 32.708 30.53 33.051 31.404 A 5.723 5.723 0 0 0 34.1 33.15 A 5.491 5.491 0 0 0 36.956 34.82 Q 37.887 35.05 39 35.05 A 9.382 9.382 0 0 0 41.402 34.747 A 8.772 8.772 0 0 0 41.575 34.7 Q 42.8 34.35 43.775 33.65 Q 44.75 32.95 45.325 31.875 Q 45.9 30.8 45.9 29.35 L 45.9 11.4 L 48.75 11.4 L 48.75 37 L 45.9 37 Z M 107.25 37 L 104.35 37 A 5.058 5.058 0 0 1 103.471 36.929 Q 103 36.846 102.633 36.665 A 2.184 2.184 0 0 1 101.95 36.15 Q 101.2 35.3 101.1 33.85 L 101.1 32.95 L 100.85 32.95 Q 100 35.1 98.05 36.35 Q 96.273 37.489 93.623 37.59 A 13.748 13.748 0 0 1 93.1 37.6 A 13.325 13.325 0 0 1 90.655 37.39 Q 89.28 37.133 88.2 36.562 A 6.692 6.692 0 0 1 86.85 35.625 A 6.432 6.432 0 0 1 84.854 32.093 A 9.675 9.675 0 0 1 84.65 30.05 Q 84.65 26.65 87.075 24.65 A 7.121 7.121 0 0 1 89.166 23.491 Q 91.139 22.765 94.091 22.666 A 28.562 28.562 0 0 1 95.05 22.65 L 100.95 22.65 L 100.95 19.65 A 8.83 8.83 0 0 0 100.614 17.099 Q 99.466 13.3 94.4 13.3 Q 91.85 13.3 90.15 14.375 A 7.519 7.519 0 0 0 87.928 16.563 A 9.401 9.401 0 0 0 87.4 17.45 L 85.6 15.95 A 8.93 8.93 0 0 1 88.791 12.273 A 10.566 10.566 0 0 1 88.825 12.25 A 8.082 8.082 0 0 1 91.32 11.165 Q 92.743 10.8 94.5 10.8 Q 97.71 10.8 99.851 11.945 A 7.248 7.248 0 0 1 101.4 13.05 Q 103.8 15.3 103.8 19.35 L 103.8 34.5 L 107.25 34.5 L 107.25 37 Z M 58.05 37 L 58.05 0 L 60.9 0 L 60.9 15.5 L 61.05 15.5 Q 62 13.35 63.95 12.075 A 7.511 7.511 0 0 1 66.441 11.048 Q 67.444 10.823 68.608 10.802 A 13.366 13.366 0 0 1 68.85 10.8 A 11.247 11.247 0 0 1 72.26 11.292 A 8.901 8.901 0 0 1 76.6 14.3 A 11.621 11.621 0 0 1 78.586 18.143 Q 79.108 19.813 79.295 21.829 A 25.648 25.648 0 0 1 79.4 24.2 A 23.547 23.547 0 0 1 79.113 28.002 Q 78.779 30.036 78.059 31.669 A 10.927 10.927 0 0 1 76.6 34.1 A 9.123 9.123 0 0 1 69.981 37.552 A 12.999 12.999 0 0 1 68.85 37.6 A 11.235 11.235 0 0 1 66.785 37.421 Q 65.188 37.122 64 36.325 Q 62.1 35.05 61.05 32.9 L 60.9 32.9 L 60.9 37 L 58.05 37 Z M 238.25 37 L 238.25 0 L 241.1 0 L 241.1 15.5 L 241.25 15.5 Q 242.2 13.35 244.15 12.075 A 7.511 7.511 0 0 1 246.641 11.048 Q 247.644 10.823 248.808 10.802 A 13.366 13.366 0 0 1 249.05 10.8 A 11.247 11.247 0 0 1 252.46 11.292 A 8.901 8.901 0 0 1 256.8 14.3 A 11.621 11.621 0 0 1 258.786 18.143 Q 259.308 19.813 259.495 21.829 A 25.648 25.648 0 0 1 259.6 24.2 A 23.547 23.547 0 0 1 259.313 28.002 Q 258.979 30.036 258.259 31.669 A 10.927 10.927 0 0 1 256.8 34.1 A 9.123 9.123 0 0 1 250.181 37.552 A 12.999 12.999 0 0 1 249.05 37.6 A 11.235 11.235 0 0 1 246.985 37.421 Q 245.388 37.122 244.2 36.325 Q 242.3 35.05 241.25 32.9 L 241.1 32.9 L 241.1 37 L 238.25 37 Z M 286.85 23.4 L 286.85 24.75 L 267.9 24.75 L 267.9 26 A 12.161 12.161 0 0 0 268.103 28.26 A 10.16 10.16 0 0 0 268.475 29.675 A 8.72 8.72 0 0 0 269.438 31.658 A 7.653 7.653 0 0 0 270.125 32.55 Q 271.2 33.75 272.75 34.425 A 8.061 8.061 0 0 0 274.957 35.02 A 10.182 10.182 0 0 0 276.25 35.1 A 9.335 9.335 0 0 0 279.484 34.572 Q 282.539 33.45 284 29.95 L 286.1 31.35 Q 284.9 34.2 282.325 35.9 A 10.132 10.132 0 0 1 278.405 37.413 A 13.637 13.637 0 0 1 276.1 37.6 A 12.487 12.487 0 0 1 273.31 37.299 A 10.462 10.462 0 0 1 271.475 36.7 Q 269.4 35.8 267.925 34.075 A 10.93 10.93 0 0 1 266.291 31.477 A 13.797 13.797 0 0 1 265.675 29.85 A 16.878 16.878 0 0 1 265.048 26.832 A 22.408 22.408 0 0 1 264.9 24.2 A 21.909 21.909 0 0 1 265.088 21.263 A 16.304 16.304 0 0 1 265.675 18.575 A 12.983 12.983 0 0 1 266.75 16.06 A 10.63 10.63 0 0 1 267.925 14.375 Q 269.4 12.65 271.45 11.725 A 10.471 10.471 0 0 1 274.646 10.874 A 12.982 12.982 0 0 1 276.05 10.8 A 11.239 11.239 0 0 1 278.801 11.126 A 9.644 9.644 0 0 1 280.5 11.725 Q 282.5 12.65 283.9 14.3 A 11.213 11.213 0 0 1 285.56 16.954 A 13.789 13.789 0 0 1 286.075 18.275 A 15.053 15.053 0 0 1 286.758 21.531 A 18.589 18.589 0 0 1 286.85 23.4 Z M 195.9 37 L 193.05 37 L 193.05 11.4 L 195.9 11.4 L 195.9 16 L 196.1 16 A 7.315 7.315 0 0 1 197.537 13.81 A 9.555 9.555 0 0 1 198.65 12.8 A 6.008 6.008 0 0 1 200.58 11.822 Q 201.429 11.558 202.455 11.459 A 13.517 13.517 0 0 1 203.75 11.4 L 205.45 11.4 L 205.45 14.2 L 203.2 14.2 Q 200.453 14.2 198.554 15.232 A 6.955 6.955 0 0 0 197.95 15.6 A 4.756 4.756 0 0 0 196.553 17.028 Q 195.966 17.981 195.907 19.217 A 5.875 5.875 0 0 0 195.9 19.5 L 195.9 37 Z M 217.175 37.323 A 12.445 12.445 0 0 0 219.85 37.6 Q 222.4 37.6 224.45 36.7 Q 226.5 35.8 227.95 34.075 A 10.962 10.962 0 0 0 229.175 32.271 A 13.822 13.822 0 0 0 230.2 29.85 Q 231 27.35 231 24.2 Q 231 21.05 230.2 18.575 Q 229.4 16.1 227.95 14.375 Q 226.5 12.65 224.45 11.725 Q 222.4 10.8 219.85 10.8 A 12.982 12.982 0 0 0 218.446 10.874 A 10.471 10.471 0 0 0 215.25 11.725 Q 213.2 12.65 211.75 14.375 A 11.063 11.063 0 0 0 210.533 16.157 A 13.751 13.751 0 0 0 209.5 18.575 A 15.868 15.868 0 0 0 208.894 21.263 A 21.235 21.235 0 0 0 208.7 24.2 Q 208.7 27.35 209.5 29.85 A 14.48 14.48 0 0 0 210.159 31.547 A 11.335 11.335 0 0 0 211.75 34.075 Q 213.2 35.8 215.25 36.7 A 10.241 10.241 0 0 0 217.175 37.323 Z M 227.95 25.8 L 227.95 22.6 Q 227.95 19.502 226.919 17.411 A 7.181 7.181 0 0 0 225.775 15.725 A 7.164 7.164 0 0 0 221.521 13.48 A 10.283 10.283 0 0 0 219.85 13.35 A 9.64 9.64 0 0 0 217.284 13.674 A 7.023 7.023 0 0 0 213.925 15.7 Q 212.138 17.631 211.819 21.048 A 16.731 16.731 0 0 0 211.75 22.6 L 211.75 25.8 Q 211.75 28.898 212.781 30.989 A 7.181 7.181 0 0 0 213.925 32.675 A 7.164 7.164 0 0 0 218.179 34.92 A 10.283 10.283 0 0 0 219.85 35.05 A 9.64 9.64 0 0 0 222.416 34.726 A 7.023 7.023 0 0 0 225.775 32.7 Q 227.562 30.769 227.881 27.352 A 16.731 16.731 0 0 0 227.95 25.8 Z M 76.35 26 L 76.35 22.4 Q 76.35 18.25 74.2 15.8 Q 72.05 13.35 68.2 13.35 A 9.423 9.423 0 0 0 65.963 13.609 A 8.545 8.545 0 0 0 65.375 13.775 A 8.303 8.303 0 0 0 63.811 14.453 A 7.114 7.114 0 0 0 63.05 14.95 Q 62.05 15.7 61.475 16.75 Q 60.9 17.8 60.9 19.05 L 60.9 29.2 Q 60.9 30.55 61.475 31.625 Q 62.05 32.7 63.05 33.475 A 6.919 6.919 0 0 0 64.89 34.487 A 8.129 8.129 0 0 0 65.375 34.65 A 9.534 9.534 0 0 0 67.733 35.04 A 10.952 10.952 0 0 0 68.2 35.05 A 9.695 9.695 0 0 0 70.744 34.734 A 6.892 6.892 0 0 0 74.2 32.6 Q 76.241 30.274 76.344 26.417 A 15.53 15.53 0 0 0 76.35 26 Z M 256.55 26 L 256.55 22.4 Q 256.55 18.25 254.4 15.8 Q 252.25 13.35 248.4 13.35 A 9.423 9.423 0 0 0 246.163 13.609 A 8.545 8.545 0 0 0 245.575 13.775 A 8.303 8.303 0 0 0 244.011 14.453 A 7.114 7.114 0 0 0 243.25 14.95 Q 242.25 15.7 241.675 16.75 Q 241.1 17.8 241.1 19.05 L 241.1 29.2 Q 241.1 30.55 241.675 31.625 Q 242.25 32.7 243.25 33.475 A 6.919 6.919 0 0 0 245.09 34.487 A 8.129 8.129 0 0 0 245.575 34.65 A 9.534 9.534 0 0 0 247.933 35.04 A 10.952 10.952 0 0 0 248.4 35.05 A 9.695 9.695 0 0 0 250.944 34.734 A 6.892 6.892 0 0 0 254.4 32.6 Q 256.441 30.274 256.544 26.417 A 15.53 15.53 0 0 0 256.55 26 Z M 267.9 22.3 L 267.9 22.55 L 283.75 22.55 L 283.75 22.15 A 12.698 12.698 0 0 0 283.556 19.89 A 10.533 10.533 0 0 0 283.2 18.475 A 8.696 8.696 0 0 0 282.456 16.8 A 7.098 7.098 0 0 0 281.625 15.65 Q 280.6 14.5 279.175 13.85 A 7.298 7.298 0 0 0 276.523 13.213 A 8.603 8.603 0 0 0 276.05 13.2 Q 274.2 13.2 272.7 13.875 Q 271.2 14.55 270.125 15.75 A 8.036 8.036 0 0 0 268.719 17.989 A 9.555 9.555 0 0 0 268.475 18.625 A 10.653 10.653 0 0 0 267.951 21.141 A 12.972 12.972 0 0 0 267.9 22.3 Z M 100.95 29.55 L 100.95 24.8 L 94.95 24.8 A 19.17 19.17 0 0 0 93.003 24.892 Q 91.047 25.092 89.851 25.732 A 4.432 4.432 0 0 0 89.375 26.025 A 4.085 4.085 0 0 0 88.144 27.364 Q 87.696 28.166 87.654 29.187 A 5.191 5.191 0 0 0 87.65 29.4 L 87.65 30.6 A 5.013 5.013 0 0 0 87.839 32.017 A 3.647 3.647 0 0 0 89.25 34 Q 90.644 35.002 92.834 35.131 A 11.316 11.316 0 0 0 93.5 35.15 A 10.641 10.641 0 0 0 95.537 34.961 A 9.278 9.278 0 0 0 96.4 34.75 Q 97.75 34.35 98.775 33.625 A 5.458 5.458 0 0 0 100.059 32.369 A 5.085 5.085 0 0 0 100.375 31.875 A 4.524 4.524 0 0 0 100.93 30.029 A 5.552 5.552 0 0 0 100.95 29.55 Z"),e(n,"vector-effect","non-scaling-stroke"),e(d,"id","svgGroup"),A(d,"stroke","#fff"),A(d,"stroke-width","0.25mm"),A(d,"fill","#fff"),e(d,"fill-rule","evenodd"),e(d,"font-size","9pt"),e(d,"stroke","#fff"),e(d,"stroke-width","0.25mm"),e(d,"fill","#fff"),e(a,"width","314.2"),e(a,"height","47"),e(a,"viewBox","0 0 314.2 47"),e(a,"xmlns","http://www.w3.org/2000/svg")},m(c,i){r1(c,a,i),t(a,d),t(d,n)},d(c){c&&r(a)}}}function G2(u){let a;function d(i,f){return i[0]?q2:B2}let n=d(u),c=n(u);return{c(){c.c(),a=w2()},l(i){c.l(i),a=w2()},m(i,f){c.m(i,f),r1(i,a,f)},p(i,[f]){n!==(n=d(i))&&(c.d(1),c=n(i),c&&(c.c(),c.m(a.parentNode,a)))},i:C1,o:C1,d(i){c.d(i),i&&r(a)}}}function C2(u,a,d){let n;return P2(u,S2,c=>d(0,n=c)),[n]}class T2 extends D0{constructor(a){super(),V0(this,a,C2,G2,W1,{})}}function O2(u){let a,d,n,c,i,f,x,w,M,R,D,J,V,p,k,a1,Z,X,K1,s1,Q,b,_,Z0,U1,L,$0,J1,l1,X1,Y1,o1,e0,t0,I,Y,i1,q,n1,c1,r0,a0,d1,A1,s0,l0,e1,f1,B,u1,h1,o0,i0,v1,L1,n0,c0,t1,m1,G,g1,p1,d0,A0,Q1,x1,f0,u0,$,_1,C,w1,b1,h0,v0,y1,k1,L0,m0,j,g0,H,S,p0,Z1,Q0,T,P1,x0,P,E1,M1,j0,_0,I1,N,w0,b0,O,z,y0,k0,F,E0,$1;return document.title=a=M2,M=new T2({}),X=new R2({}),{c(){d=h(),n=l("div"),c=l("main"),i=l("div"),f=l("div"),x=l("div"),w=l("h1"),b2(M.$$.fragment),R=h(),D=l("h2"),J=m("Founder at "),V=l("span"),p=l("img"),a1=h(),Z=l("p"),b2(X.$$.fragment),K1=h(),s1=l("div"),Q=l("span"),b=l("span"),_=l("img"),U1=h(),L=l("img"),J1=h(),l1=l("h4"),X1=m("Featured work"),Y1=h(),o1=l("p"),e0=m("Most important work I have done past few years."),t0=h(),I=l("div"),Y=l("a"),i1=l("div"),q=l("div"),n1=l("div"),c1=l("h4"),r0=m("Sail - cryptocurrency wallet with builtin swap"),a0=h(),d1=l("div"),A1=l("div"),s0=m("2021 - now"),l0=h(),e1=l("a"),f1=l("div"),B=l("div"),u1=l("div"),h1=l("h4"),o0=m("Network.gives - networking platform"),i0=h(),v1=l("div"),L1=l("div"),n0=m("2020 - 2021"),c0=h(),t1=l("a"),m1=l("div"),G=l("div"),g1=l("div"),p1=l("h4"),d0=m("Dropbox-like application for top holywood studios"),A0=h(),Q1=l("div"),x1=l("div"),f0=m("2017 - 2020"),u0=h(),$=l("a"),_1=l("div"),C=l("div"),w1=l("div"),b1=l("h4"),h0=m("Thinkchef - franchise management software"),v0=h(),y1=l("div"),k1=l("div"),L0=m("2015 - 2017"),m0=h(),j=l("a"),g0=m(`See all
        `),H=K("svg"),S=K("path"),p0=h(),Z1=l("span"),Q0=h(),T=l("footer"),P1=l("hr"),x0=h(),P=l("div"),E1=l("div"),M1=l("img"),_0=h(),I1=l("div"),N=l("a"),w0=m("posts"),b0=h(),O=l("div"),z=l("a"),y0=m("twitter"),k0=h(),F=l("a"),E0=m("github"),this.h()},l(y){H2('[data-svelte="svelte-pmictq"]',document.head).forEach(r),d=v(y),n=o(y,"DIV",{class:!0});var P0=s(n);c=o(P0,"MAIN",{id:!0,class:!0});var H0=s(c);i=o(H0,"DIV",{class:!0});var E=s(i);f=o(E,"DIV",{class:!0});var H1=s(f);x=o(H1,"DIV",{class:!0});var D1=s(x);w=o(D1,"H1",{class:!0});var S0=s(w);y2(M.$$.fragment,S0),S0.forEach(r),R=v(D1),D=o(D1,"H2",{class:!0});var M0=s(D);J=g(M0,"Founder at "),V=o(M0,"SPAN",{class:!0});var N0=s(V);p=o(N0,"IMG",{src:!0,alt:!0,class:!0}),N0.forEach(r),M0.forEach(r),a1=v(D1),Z=o(D1,"P",{class:!0});var z0=s(Z);y2(X.$$.fragment,z0),z0.forEach(r),D1.forEach(r),K1=v(H1),s1=o(H1,"DIV",{class:!0});var F0=s(s1);Q=o(F0,"SPAN",{style:!0});var S1=s(Q);b=o(S1,"SPAN",{style:!0});var R0=s(b);_=o(R0,"IMG",{style:!0,alt:!0,"aria-hidden":!0,src:!0}),R0.forEach(r),U1=v(S1),L=o(S1,"IMG",{alt:!0,src:!0,decoding:!0,"data-nimg":!0,class:!0,style:!0}),S1.forEach(r),F0.forEach(r),H1.forEach(r),J1=v(E),l1=o(E,"H4",{class:!0});var q0=s(l1);X1=g(q0,"Featured work"),q0.forEach(r),Y1=v(E),o1=o(E,"P",{class:!0});var B0=s(o1);e0=g(B0,"Most important work I have done past few years."),B0.forEach(r),t0=v(E),I=o(E,"DIV",{class:!0});var W=s(I);Y=o(W,"A",{class:!0,href:!0});var G0=s(Y);i1=o(G0,"DIV",{class:!0});var C0=s(i1);q=o(C0,"DIV",{class:!0});var N1=s(q);n1=o(N1,"DIV",{class:!0});var T0=s(n1);c1=o(T0,"H4",{class:!0});var O0=s(c1);r0=g(O0,"Sail - cryptocurrency wallet with builtin swap"),O0.forEach(r),T0.forEach(r),a0=v(N1),d1=o(N1,"DIV",{class:!0});var W0=s(d1);A1=o(W0,"DIV",{class:!0});var K0=s(A1);s0=g(K0,"2021 - now"),K0.forEach(r),W0.forEach(r),N1.forEach(r),C0.forEach(r),G0.forEach(r),l0=v(W),e1=o(W,"A",{class:!0,href:!0});var U0=s(e1);f1=o(U0,"DIV",{class:!0});var J0=s(f1);B=o(J0,"DIV",{class:!0});var z1=s(B);u1=o(z1,"DIV",{class:!0});var X0=s(u1);h1=o(X0,"H4",{class:!0});var Y0=s(h1);o0=g(Y0,"Network.gives - networking platform"),Y0.forEach(r),X0.forEach(r),i0=v(z1),v1=o(z1,"DIV",{class:!0});var e2=s(v1);L1=o(e2,"DIV",{class:!0});var t2=s(L1);n0=g(t2,"2020 - 2021"),t2.forEach(r),e2.forEach(r),z1.forEach(r),J0.forEach(r),U0.forEach(r),c0=v(W),t1=o(W,"A",{class:!0,href:!0});var r2=s(t1);m1=o(r2,"DIV",{class:!0});var a2=s(m1);G=o(a2,"DIV",{class:!0});var F1=s(G);g1=o(F1,"DIV",{class:!0});var s2=s(g1);p1=o(s2,"H4",{class:!0});var l2=s(p1);d0=g(l2,"Dropbox-like application for top holywood studios"),l2.forEach(r),s2.forEach(r),A0=v(F1),Q1=o(F1,"DIV",{class:!0});var o2=s(Q1);x1=o(o2,"DIV",{class:!0});var i2=s(x1);f0=g(i2,"2017 - 2020"),i2.forEach(r),o2.forEach(r),F1.forEach(r),a2.forEach(r),r2.forEach(r),u0=v(W),$=o(W,"A",{class:!0,href:!0,"aria-label":!0,target:!0,rel:!0});var n2=s($);_1=o(n2,"DIV",{class:!0});var c2=s(_1);C=o(c2,"DIV",{class:!0});var R1=s(C);w1=o(R1,"DIV",{class:!0});var d2=s(w1);b1=o(d2,"H4",{class:!0});var A2=s(b1);h0=g(A2,"Thinkchef - franchise management software"),A2.forEach(r),d2.forEach(r),v0=v(R1),y1=o(R1,"DIV",{class:!0});var f2=s(y1);k1=o(f2,"DIV",{class:!0});var u2=s(k1);L0=g(u2,"2015 - 2017"),u2.forEach(r),f2.forEach(r),R1.forEach(r),c2.forEach(r),n2.forEach(r),W.forEach(r),m0=v(E),j=o(E,"A",{target:!0,rel:!0,href:!0,class:!0});var I0=s(j);g0=g(I0,`See all
        `),H=U(I0,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var h2=s(H);S=U(h2,"path",{stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),s(S).forEach(r),h2.forEach(r),I0.forEach(r),p0=v(E),Z1=o(E,"SPAN",{class:!0}),s(Z1).forEach(r),Q0=v(E),T=o(E,"FOOTER",{class:!0});var q1=s(T);P1=o(q1,"HR",{class:!0}),x0=v(q1),P=o(q1,"DIV",{class:!0});var V1=s(P);E1=o(V1,"DIV",{class:!0});var v2=s(E1);M1=o(v2,"IMG",{src:!0,class:!0}),v2.forEach(r),_0=v(V1),I1=o(V1,"DIV",{class:!0});var L2=s(I1);N=o(L2,"A",{class:!0,target:!0,rel:!0,href:!0});var m2=s(N);w0=g(m2,"posts"),m2.forEach(r),L2.forEach(r),b0=v(V1),O=o(V1,"DIV",{class:!0});var B1=s(O);z=o(B1,"A",{class:!0,target:!0,rel:!0,href:!0});var g2=s(z);y0=g(g2,"twitter"),g2.forEach(r),k0=v(B1),F=o(B1,"A",{class:!0,target:!0,rel:!0,href:!0});var p2=s(F);E0=g(p2,"github"),p2.forEach(r),B1.forEach(r),V1.forEach(r),q1.forEach(r),E.forEach(r),H0.forEach(r),P0.forEach(r),this.h()},h(){e(w,"class","font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white"),G1(p.src,k="/parhelium-logo")||e(p,"src",k),e(p,"alt","https://parhelium.com"),e(p,"class","object-scale-down h-4 inline ml-1"),e(V,"class","font-semibold"),e(D,"class","text-gray-700 dark:text-gray-200 mb-4"),e(Z,"class","text-gray-600 dark:text-gray-400 mb-16 min-w-800 "),e(x,"class","flex flex-col pr-8"),A(_,"display","block"),A(_,"max-width","100%"),A(_,"width","initial"),A(_,"height","initial"),A(_,"background","rgba(0, 0, 0, 0) none repeat scroll 0% 0%"),A(_,"opacity","1"),A(_,"border","0px none"),A(_,"margin","0px"),A(_,"padding","0px"),e(_,"alt",""),e(_,"aria-hidden","true"),G1(_.src,Z0="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27176%27%20height=%27176%27/%3e")||e(_,"src",Z0),A(b,"box-sizing","border-box"),A(b,"display","block"),A(b,"width","initial"),A(b,"height","initial"),A(b,"background","rgba(0, 0, 0, 0) none repeat scroll 0% 0%"),A(b,"opacity","1"),A(b,"border","0px none"),A(b,"margin","0px"),A(b,"padding","0px"),A(b,"max-width","100%"),e(L,"alt","Kuba Wyrobek"),G1(L.src,$0="/kuba-wyrobek.png")||e(L,"src",$0),e(L,"decoding","async"),e(L,"data-nimg","intrinsic"),e(L,"class","rounded-full filter grayscale"),A(L,"position","absolute"),A(L,"inset","0px"),A(L,"box-sizing","border-box"),A(L,"padding","0px"),A(L,"border","medium none"),A(L,"margin","auto"),A(L,"display","block"),A(L,"width","0px"),A(L,"height","0px"),A(L,"min-width","100%"),A(L,"max-width","100%"),A(L,"min-height","100%"),A(L,"max-height","100%"),A(Q,"box-sizing","border-box"),A(Q,"display","inline-block"),A(Q,"overflow","hidden"),A(Q,"width","initial"),A(Q,"height","initial"),A(Q,"background","rgba(0, 0, 0, 0) none repeat scroll 0% 0%"),A(Q,"opacity","1"),A(Q,"border","0px none"),A(Q,"margin","0px"),A(Q,"padding","0px"),A(Q,"position","relative"),A(Q,"max-width","100%"),e(s1,"class","w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto"),e(f,"class","flex flex-col-reverse sm:flex-row items-start"),e(l1,"class","font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white"),e(o1,"class","text-gray-600 dark:text-gray-400 mb-4"),e(c1,"class","text-lg font-medium w-full text-gray-800 dark:text-gray-100"),e(n1,"class","flex items-center"),e(A1,"class","text-gray-300 dark:text-gray-400 text-left mr-0"),e(d1,"class","flex items-center mt-2 sm:mt-0 w-full sm:w-auto justify-between"),e(q,"class","flex flex-col sm:flex-row justify-between items-baseline"),e(i1,"class","w-full border-b border-gray-200 dark:border-gray-700 py-3 transform hover:scale-[1.01] transition-all"),e(Y,"class","w-full"),e(Y,"href","/posts/sail-be-your-own-bank"),e(h1,"class","text-lg font-medium w-full text-gray-800 dark:text-gray-100"),e(u1,"class","flex items-center"),e(L1,"class","text-gray-300 dark:text-gray-400 text-left mr-0"),e(v1,"class","flex items-center mt-2 sm:mt-0 w-full sm:w-auto justify-between"),e(B,"class","flex flex-col sm:flex-row justify-between items-baseline"),e(f1,"class","w-full border-b border-gray-200 dark:border-gray-700 py-3 transform hover:scale-[1.01] transition-all"),e(e1,"class","w-full"),e(e1,"href","/posts/network-gives"),e(p1,"class","text-lg font-medium w-full text-gray-800 dark:text-gray-100"),e(g1,"class","flex items-center"),e(x1,"class","text-gray-300 dark:text-gray-400 text-left mr-0"),e(Q1,"class","flex items-center mt-2 sm:mt-0 w-full sm:w-auto justify-between"),e(G,"class","flex flex-col sm:flex-row justify-between items-baseline"),e(m1,"class","w-full border-b border-gray-200 dark:border-gray-700 py-3 transform hover:scale-[1.01] transition-all"),e(t1,"class","w-full"),e(t1,"href","/posts/dropbox-like-software"),e(b1,"class","text-lg font-medium w-full text-gray-800 dark:text-gray-100"),e(w1,"class","flex items-center"),e(k1,"class","text-gray-300 dark:text-gray-400 text-left mr-0"),e(y1,"class","flex items-center mt-2 sm:mt-0 w-full sm:w-auto justify-between"),e(C,"class","flex flex-col sm:flex-row justify-between items-baseline"),e(_1,"class","w-full py-3 transform hover:scale-[1.01] transition-all"),e($,"class","w-full"),e($,"href","/posts/thinkchef-franchise-menu-management"),e($,"aria-label","Firebase Admin with Next.js + SWR"),e($,"target","_blank"),e($,"rel","noopener noreferrer"),e(I,"class","rounded border px-5 py-2 my-4 w-full dark:border-gray-800 dark:bg-blue-opaque"),e(S,"stroke","currentColor"),e(S,"stroke-linecap","round"),e(S,"stroke-linejoin","round"),e(S,"stroke-width","2"),e(S,"d","M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"),e(H,"xmlns","http://www.w3.org/2000/svg"),e(H,"fill","none"),e(H,"viewBox","0 0 24 24"),e(H,"class","h-6 w-6 ml-1"),e(j,"target","_blank"),e(j,"rel","noopener noreferrer"),e(j,"href","/posts"),e(j,"class","flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"),e(Z1,"class","h-16"),e(P1,"class","w-full border-1 border-gray-200 dark:border-gray-800 mb-8"),G1(M1.src,j0="/parhelium-logo")||e(M1,"src",j0),e(M1,"class","object-scale-down object-left h-4 w-full"),e(E1,"class","flex flex-col space-y-4"),e(N,"class","text-gray-500 hover:text-gray-600 transition"),e(N,"target","_blank"),e(N,"rel","noopener noreferrer"),e(N,"href","/posts"),e(I1,"class","flex flex-col space-y-4 justify-self-end"),e(z,"class","text-gray-500 hover:text-gray-600 transition"),e(z,"target","_blank"),e(z,"rel","noopener noreferrer"),e(z,"href","https://twitter.com/kwyrobek"),e(F,"class","text-gray-500 hover:text-gray-600 transition"),e(F,"target","_blank"),e(F,"rel","noopener noreferrer"),e(F,"href","https://github.com/parhelium"),e(O,"class","flex flex-col space-y-4 justify-self-end"),e(P,"class","w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"),e(T,"class","flex flex-col justify-end max-w-2xl mx-auto w-full mb-8"),e(i,"class","flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16"),e(c,"id","skip"),e(c,"class","flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"),e(n,"class","bg-gray-50 dark:bg-gray-900")},m(y,j1){r1(y,d,j1),r1(y,n,j1),t(n,c),t(c,i),t(i,f),t(f,x),t(x,w),k2(M,w,null),t(x,R),t(x,D),t(D,J),t(D,V),t(V,p),t(x,a1),t(x,Z),k2(X,Z,null),t(f,K1),t(f,s1),t(s1,Q),t(Q,b),t(b,_),t(Q,U1),t(Q,L),t(i,J1),t(i,l1),t(l1,X1),t(i,Y1),t(i,o1),t(o1,e0),t(i,t0),t(i,I),t(I,Y),t(Y,i1),t(i1,q),t(q,n1),t(n1,c1),t(c1,r0),t(q,a0),t(q,d1),t(d1,A1),t(A1,s0),t(I,l0),t(I,e1),t(e1,f1),t(f1,B),t(B,u1),t(u1,h1),t(h1,o0),t(B,i0),t(B,v1),t(v1,L1),t(L1,n0),t(I,c0),t(I,t1),t(t1,m1),t(m1,G),t(G,g1),t(g1,p1),t(p1,d0),t(G,A0),t(G,Q1),t(Q1,x1),t(x1,f0),t(I,u0),t(I,$),t($,_1),t(_1,C),t(C,w1),t(w1,b1),t(b1,h0),t(C,v0),t(C,y1),t(y1,k1),t(k1,L0),t(i,m0),t(i,j),t(j,g0),t(j,H),t(H,S),t(i,p0),t(i,Z1),t(i,Q0),t(i,T),t(T,P1),t(T,x0),t(T,P),t(P,E1),t(E1,M1),t(P,_0),t(P,I1),t(I1,N),t(N,w0),t(P,b0),t(P,O),t(O,z),t(z,y0),t(O,k0),t(O,F),t(F,E0),$1=!0},p(y,[j1]){(!$1||j1&0)&&a!==(a=M2)&&(document.title=a)},i(y){$1||(O1(M.$$.fragment,y),O1(X.$$.fragment,y),$1=!0)},o(y){T1(M.$$.fragment,y),T1(X.$$.fragment,y),$1=!1},d(y){y&&r(d),y&&r(n),E2(M),E2(X)}}}const Y2=async({fetch:u})=>({props:{recentPosts:await u("/posts.json?limit=2").then(a=>a.json())}});function W2(u,a,d){let{recentPosts:n}=a;return u.$$set=c=>{"recentPosts"in c&&d(0,n=c.recentPosts)},[n]}class e5 extends D0{constructor(a){super(),V0(this,a,W2,O2,W1,{recentPosts:0})}}export{e5 as default,Y2 as load};