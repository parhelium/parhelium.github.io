import{Q as j2,S as Y1,i as e0,s as N1,e as c,t as L,j as h,c as d,a as n,g,d as o,l as v,b as e,f as H,H as r,h as w2,R as b2,T as y2,D as Z1,m as P2,n as D1,o as H2,p as V1,u as S2,k as X1,K as V2,E as J,F as X,U as f,B as k2,I as E2,V as j1,v as W1,W as N2,w as K1,x as U1,A as J1}from"../chunks/index-c6b9875b.js";import{l as Z2}from"../chunks/stores-e3ad1572.js";import{n as M2}from"../chunks/info-d3a40cd1.js";import"../chunks/index-a42be050.js";function I2(u,{delay:t=0,duration:i=400,easing:l=j2}={}){const s=+getComputedStyle(u).opacity;return{delay:t,duration:i,easing:l,css:a=>`opacity: ${a*s}`}}function $2(u){let t,i,l,s=u[1][u[0]]+"",a,A,x,b,M=u[2][u[0]]+"",q,$,Y,V;return{c(){t=c("div"),i=L("Helped "),l=c("p"),a=L(s),x=L(" to "),b=c("p"),q=L(M),$=h(),V=L("."),this.h()},l(p){t=d(p,"DIV",{id:!0,class:!0});var y=n(t);i=g(y,"Helped "),l=d(y,"P",{class:!0});var S=n(l);a=g(S,s),S.forEach(o),x=g(y," to "),b=d(y,"P",{class:!0});var D=n(b);q=g(D,M),$=v(D),D.forEach(o),V=g(y,"."),y.forEach(o),this.h()},h(){e(l,"class","svelte-1s5d5g0"),e(b,"class"," svelte-1s5d5g0"),e(t,"id","demo"),e(t,"class","svelte-1s5d5g0")},m(p,y){H(p,t,y),r(t,i),r(t,l),r(l,a),r(t,x),r(t,b),r(b,q),r(b,$),r(t,V)},p(p,y){y&1&&s!==(s=p[1][p[0]]+"")&&w2(a,s),y&1&&M!==(M=p[2][p[0]]+"")&&w2(q,M)},i(p){A||b2(()=>{A=y2(l,I2,{}),A.start()}),Y||b2(()=>{Y=y2(b,I2,{}),Y.start()})},o:Z1,d(p){p&&o(t)}}}function z2(u){let t,i=u[0],l=$2(u);return{c(){t=c("main"),l.c()},l(s){t=d(s,"MAIN",{});var a=n(t);l.l(a),a.forEach(o)},m(s,a){H(s,t,a),l.m(t,null)},p(s,[a]){a&1&&N1(i,i=s[0])?(P2(),D1(l,1,1,Z1),H2(),l=$2(s),l.c(),V1(l,1),l.m(t,null)):l.p(s,a)},i(s){V1(l)},o(s){D1(l)},d(s){s&&o(t),l.d(s)}}}const B2=2e3;function F2(u,t,i){const l=["CEO","VP","VP","PM"],s=["materialize his vision in form software","build team of 10 developers in 3 months","architect solution for business problem","to deliver high quality software on time"],a=()=>Math.round(Math.random()*(l.length-1));let A=a();return S2(()=>{const x=setInterval(()=>{i(0,A=a())},B2);return()=>{clearInterval(x)}}),[A,l,s]}class R2 extends Y1{constructor(t){super(),e0(this,t,F2,z2,N1,{})}}function q2(u){let t,i,l;return{c(){t=J("svg"),i=J("g"),l=J("path"),this.h()},l(s){t=X(s,"svg",{width:!0,height:!0,viewBox:!0,xmlns:!0});var a=n(t);i=X(a,"g",{id:!0,style:!0,"fill-rule":!0,"font-size":!0,stroke:!0,"stroke-width":!0,fill:!0});var A=n(i);l=X(A,"path",{d:!0,"vector-effect":!0}),n(l).forEach(o),A.forEach(o),a.forEach(o),this.h()},h(){e(l,"d","M 133.75 37 L 130.25 37 L 121.45 2.1 L 124.65 2.1 L 132.1 33.3 L 132.25 33.3 L 140.5 2.1 L 144.15 2.1 L 152.3 33.3 L 152.45 33.3 L 160.15 2.1 L 163.25 2.1 L 154.15 37 L 150.65 37 L 142.3 5.45 L 142.2 5.45 L 133.75 37 Z M 20.8 37 L 8.65 19 L 3 25.25 L 3 37 L 0 37 L 0 2.1 L 3 2.1 L 3 21.75 L 3.1 21.75 L 8.7 15.3 L 20.2 2.1 L 23.85 2.1 L 10.7 16.95 L 24.5 37 L 20.8 37 Z M 294.1 37 L 294.1 0 L 296.95 0 L 296.95 24.45 L 297.1 24.45 L 301.1 20.2 L 309.6 11.4 L 313.1 11.4 L 303.05 21.8 L 314.2 37 L 310.7 37 L 301 23.6 L 296.95 27.7 L 296.95 37 L 294.1 37 Z M 176.6 33.95 L 184.4 11.4 L 187.3 11.4 L 175.45 44.2 Q 174.877 45.729 174.075 46.345 A 2.308 2.308 0 0 1 174 46.4 Q 173.253 46.927 171.658 46.991 A 11.418 11.418 0 0 1 171.2 47 L 168.3 47 L 168.3 44.5 L 172.6 44.5 L 175.05 37.75 L 165.55 11.4 L 168.55 11.4 L 176.4 33.95 L 176.6 33.95 Z M 45.9 37 L 45.9 32.95 L 45.7 32.95 A 8.034 8.034 0 0 1 44.914 34.46 A 9.1 9.1 0 0 1 44.75 34.7 Q 44.15 35.55 43.25 36.175 Q 42.35 36.8 41.125 37.2 A 7.666 7.666 0 0 1 39.839 37.494 Q 39.101 37.6 38.25 37.6 A 10.686 10.686 0 0 1 35.563 37.281 A 7.423 7.423 0 0 1 31.85 35.075 Q 29.55 32.55 29.55 27.85 L 29.55 11.4 L 32.4 11.4 L 32.4 27.3 A 14.579 14.579 0 0 0 32.546 29.439 Q 32.708 30.53 33.051 31.404 A 5.723 5.723 0 0 0 34.1 33.15 A 5.491 5.491 0 0 0 36.956 34.82 Q 37.887 35.05 39 35.05 A 9.382 9.382 0 0 0 41.402 34.747 A 8.772 8.772 0 0 0 41.575 34.7 Q 42.8 34.35 43.775 33.65 Q 44.75 32.95 45.325 31.875 Q 45.9 30.8 45.9 29.35 L 45.9 11.4 L 48.75 11.4 L 48.75 37 L 45.9 37 Z M 107.25 37 L 104.35 37 A 5.058 5.058 0 0 1 103.471 36.929 Q 103 36.846 102.633 36.665 A 2.184 2.184 0 0 1 101.95 36.15 Q 101.2 35.3 101.1 33.85 L 101.1 32.95 L 100.85 32.95 Q 100 35.1 98.05 36.35 Q 96.273 37.489 93.623 37.59 A 13.748 13.748 0 0 1 93.1 37.6 A 13.325 13.325 0 0 1 90.655 37.39 Q 89.28 37.133 88.2 36.562 A 6.692 6.692 0 0 1 86.85 35.625 A 6.432 6.432 0 0 1 84.854 32.093 A 9.675 9.675 0 0 1 84.65 30.05 Q 84.65 26.65 87.075 24.65 A 7.121 7.121 0 0 1 89.166 23.491 Q 91.139 22.765 94.091 22.666 A 28.562 28.562 0 0 1 95.05 22.65 L 100.95 22.65 L 100.95 19.65 A 8.83 8.83 0 0 0 100.614 17.099 Q 99.466 13.3 94.4 13.3 Q 91.85 13.3 90.15 14.375 A 7.519 7.519 0 0 0 87.928 16.563 A 9.401 9.401 0 0 0 87.4 17.45 L 85.6 15.95 A 8.93 8.93 0 0 1 88.791 12.273 A 10.566 10.566 0 0 1 88.825 12.25 A 8.082 8.082 0 0 1 91.32 11.165 Q 92.743 10.8 94.5 10.8 Q 97.71 10.8 99.851 11.945 A 7.248 7.248 0 0 1 101.4 13.05 Q 103.8 15.3 103.8 19.35 L 103.8 34.5 L 107.25 34.5 L 107.25 37 Z M 58.05 37 L 58.05 0 L 60.9 0 L 60.9 15.5 L 61.05 15.5 Q 62 13.35 63.95 12.075 A 7.511 7.511 0 0 1 66.441 11.048 Q 67.444 10.823 68.608 10.802 A 13.366 13.366 0 0 1 68.85 10.8 A 11.247 11.247 0 0 1 72.26 11.292 A 8.901 8.901 0 0 1 76.6 14.3 A 11.621 11.621 0 0 1 78.586 18.143 Q 79.108 19.813 79.295 21.829 A 25.648 25.648 0 0 1 79.4 24.2 A 23.547 23.547 0 0 1 79.113 28.002 Q 78.779 30.036 78.059 31.669 A 10.927 10.927 0 0 1 76.6 34.1 A 9.123 9.123 0 0 1 69.981 37.552 A 12.999 12.999 0 0 1 68.85 37.6 A 11.235 11.235 0 0 1 66.785 37.421 Q 65.188 37.122 64 36.325 Q 62.1 35.05 61.05 32.9 L 60.9 32.9 L 60.9 37 L 58.05 37 Z M 238.25 37 L 238.25 0 L 241.1 0 L 241.1 15.5 L 241.25 15.5 Q 242.2 13.35 244.15 12.075 A 7.511 7.511 0 0 1 246.641 11.048 Q 247.644 10.823 248.808 10.802 A 13.366 13.366 0 0 1 249.05 10.8 A 11.247 11.247 0 0 1 252.46 11.292 A 8.901 8.901 0 0 1 256.8 14.3 A 11.621 11.621 0 0 1 258.786 18.143 Q 259.308 19.813 259.495 21.829 A 25.648 25.648 0 0 1 259.6 24.2 A 23.547 23.547 0 0 1 259.313 28.002 Q 258.979 30.036 258.259 31.669 A 10.927 10.927 0 0 1 256.8 34.1 A 9.123 9.123 0 0 1 250.181 37.552 A 12.999 12.999 0 0 1 249.05 37.6 A 11.235 11.235 0 0 1 246.985 37.421 Q 245.388 37.122 244.2 36.325 Q 242.3 35.05 241.25 32.9 L 241.1 32.9 L 241.1 37 L 238.25 37 Z M 286.85 23.4 L 286.85 24.75 L 267.9 24.75 L 267.9 26 A 12.161 12.161 0 0 0 268.103 28.26 A 10.16 10.16 0 0 0 268.475 29.675 A 8.72 8.72 0 0 0 269.438 31.658 A 7.653 7.653 0 0 0 270.125 32.55 Q 271.2 33.75 272.75 34.425 A 8.061 8.061 0 0 0 274.957 35.02 A 10.182 10.182 0 0 0 276.25 35.1 A 9.335 9.335 0 0 0 279.484 34.572 Q 282.539 33.45 284 29.95 L 286.1 31.35 Q 284.9 34.2 282.325 35.9 A 10.132 10.132 0 0 1 278.405 37.413 A 13.637 13.637 0 0 1 276.1 37.6 A 12.487 12.487 0 0 1 273.31 37.299 A 10.462 10.462 0 0 1 271.475 36.7 Q 269.4 35.8 267.925 34.075 A 10.93 10.93 0 0 1 266.291 31.477 A 13.797 13.797 0 0 1 265.675 29.85 A 16.878 16.878 0 0 1 265.048 26.832 A 22.408 22.408 0 0 1 264.9 24.2 A 21.909 21.909 0 0 1 265.088 21.263 A 16.304 16.304 0 0 1 265.675 18.575 A 12.983 12.983 0 0 1 266.75 16.06 A 10.63 10.63 0 0 1 267.925 14.375 Q 269.4 12.65 271.45 11.725 A 10.471 10.471 0 0 1 274.646 10.874 A 12.982 12.982 0 0 1 276.05 10.8 A 11.239 11.239 0 0 1 278.801 11.126 A 9.644 9.644 0 0 1 280.5 11.725 Q 282.5 12.65 283.9 14.3 A 11.213 11.213 0 0 1 285.56 16.954 A 13.789 13.789 0 0 1 286.075 18.275 A 15.053 15.053 0 0 1 286.758 21.531 A 18.589 18.589 0 0 1 286.85 23.4 Z M 195.9 37 L 193.05 37 L 193.05 11.4 L 195.9 11.4 L 195.9 16 L 196.1 16 A 7.315 7.315 0 0 1 197.537 13.81 A 9.555 9.555 0 0 1 198.65 12.8 A 6.008 6.008 0 0 1 200.58 11.822 Q 201.429 11.558 202.455 11.459 A 13.517 13.517 0 0 1 203.75 11.4 L 205.45 11.4 L 205.45 14.2 L 203.2 14.2 Q 200.453 14.2 198.554 15.232 A 6.955 6.955 0 0 0 197.95 15.6 A 4.756 4.756 0 0 0 196.553 17.028 Q 195.966 17.981 195.907 19.217 A 5.875 5.875 0 0 0 195.9 19.5 L 195.9 37 Z M 217.175 37.323 A 12.445 12.445 0 0 0 219.85 37.6 Q 222.4 37.6 224.45 36.7 Q 226.5 35.8 227.95 34.075 A 10.962 10.962 0 0 0 229.175 32.271 A 13.822 13.822 0 0 0 230.2 29.85 Q 231 27.35 231 24.2 Q 231 21.05 230.2 18.575 Q 229.4 16.1 227.95 14.375 Q 226.5 12.65 224.45 11.725 Q 222.4 10.8 219.85 10.8 A 12.982 12.982 0 0 0 218.446 10.874 A 10.471 10.471 0 0 0 215.25 11.725 Q 213.2 12.65 211.75 14.375 A 11.063 11.063 0 0 0 210.533 16.157 A 13.751 13.751 0 0 0 209.5 18.575 A 15.868 15.868 0 0 0 208.894 21.263 A 21.235 21.235 0 0 0 208.7 24.2 Q 208.7 27.35 209.5 29.85 A 14.48 14.48 0 0 0 210.159 31.547 A 11.335 11.335 0 0 0 211.75 34.075 Q 213.2 35.8 215.25 36.7 A 10.241 10.241 0 0 0 217.175 37.323 Z M 227.95 25.8 L 227.95 22.6 Q 227.95 19.502 226.919 17.411 A 7.181 7.181 0 0 0 225.775 15.725 A 7.164 7.164 0 0 0 221.521 13.48 A 10.283 10.283 0 0 0 219.85 13.35 A 9.64 9.64 0 0 0 217.284 13.674 A 7.023 7.023 0 0 0 213.925 15.7 Q 212.138 17.631 211.819 21.048 A 16.731 16.731 0 0 0 211.75 22.6 L 211.75 25.8 Q 211.75 28.898 212.781 30.989 A 7.181 7.181 0 0 0 213.925 32.675 A 7.164 7.164 0 0 0 218.179 34.92 A 10.283 10.283 0 0 0 219.85 35.05 A 9.64 9.64 0 0 0 222.416 34.726 A 7.023 7.023 0 0 0 225.775 32.7 Q 227.562 30.769 227.881 27.352 A 16.731 16.731 0 0 0 227.95 25.8 Z M 76.35 26 L 76.35 22.4 Q 76.35 18.25 74.2 15.8 Q 72.05 13.35 68.2 13.35 A 9.423 9.423 0 0 0 65.963 13.609 A 8.545 8.545 0 0 0 65.375 13.775 A 8.303 8.303 0 0 0 63.811 14.453 A 7.114 7.114 0 0 0 63.05 14.95 Q 62.05 15.7 61.475 16.75 Q 60.9 17.8 60.9 19.05 L 60.9 29.2 Q 60.9 30.55 61.475 31.625 Q 62.05 32.7 63.05 33.475 A 6.919 6.919 0 0 0 64.89 34.487 A 8.129 8.129 0 0 0 65.375 34.65 A 9.534 9.534 0 0 0 67.733 35.04 A 10.952 10.952 0 0 0 68.2 35.05 A 9.695 9.695 0 0 0 70.744 34.734 A 6.892 6.892 0 0 0 74.2 32.6 Q 76.241 30.274 76.344 26.417 A 15.53 15.53 0 0 0 76.35 26 Z M 256.55 26 L 256.55 22.4 Q 256.55 18.25 254.4 15.8 Q 252.25 13.35 248.4 13.35 A 9.423 9.423 0 0 0 246.163 13.609 A 8.545 8.545 0 0 0 245.575 13.775 A 8.303 8.303 0 0 0 244.011 14.453 A 7.114 7.114 0 0 0 243.25 14.95 Q 242.25 15.7 241.675 16.75 Q 241.1 17.8 241.1 19.05 L 241.1 29.2 Q 241.1 30.55 241.675 31.625 Q 242.25 32.7 243.25 33.475 A 6.919 6.919 0 0 0 245.09 34.487 A 8.129 8.129 0 0 0 245.575 34.65 A 9.534 9.534 0 0 0 247.933 35.04 A 10.952 10.952 0 0 0 248.4 35.05 A 9.695 9.695 0 0 0 250.944 34.734 A 6.892 6.892 0 0 0 254.4 32.6 Q 256.441 30.274 256.544 26.417 A 15.53 15.53 0 0 0 256.55 26 Z M 267.9 22.3 L 267.9 22.55 L 283.75 22.55 L 283.75 22.15 A 12.698 12.698 0 0 0 283.556 19.89 A 10.533 10.533 0 0 0 283.2 18.475 A 8.696 8.696 0 0 0 282.456 16.8 A 7.098 7.098 0 0 0 281.625 15.65 Q 280.6 14.5 279.175 13.85 A 7.298 7.298 0 0 0 276.523 13.213 A 8.603 8.603 0 0 0 276.05 13.2 Q 274.2 13.2 272.7 13.875 Q 271.2 14.55 270.125 15.75 A 8.036 8.036 0 0 0 268.719 17.989 A 9.555 9.555 0 0 0 268.475 18.625 A 10.653 10.653 0 0 0 267.951 21.141 A 12.972 12.972 0 0 0 267.9 22.3 Z M 100.95 29.55 L 100.95 24.8 L 94.95 24.8 A 19.17 19.17 0 0 0 93.003 24.892 Q 91.047 25.092 89.851 25.732 A 4.432 4.432 0 0 0 89.375 26.025 A 4.085 4.085 0 0 0 88.144 27.364 Q 87.696 28.166 87.654 29.187 A 5.191 5.191 0 0 0 87.65 29.4 L 87.65 30.6 A 5.013 5.013 0 0 0 87.839 32.017 A 3.647 3.647 0 0 0 89.25 34 Q 90.644 35.002 92.834 35.131 A 11.316 11.316 0 0 0 93.5 35.15 A 10.641 10.641 0 0 0 95.537 34.961 A 9.278 9.278 0 0 0 96.4 34.75 Q 97.75 34.35 98.775 33.625 A 5.458 5.458 0 0 0 100.059 32.369 A 5.085 5.085 0 0 0 100.375 31.875 A 4.524 4.524 0 0 0 100.93 30.029 A 5.552 5.552 0 0 0 100.95 29.55 Z"),e(l,"vector-effect","non-scaling-stroke"),e(i,"id","svgGroup"),f(i,"stroke","#000"),f(i,"stroke-width","0.25mm"),f(i,"fill","#000"),e(i,"fill-rule","evenodd"),e(i,"font-size","9pt"),e(i,"stroke","#000"),e(i,"stroke-width","0.25mm"),e(i,"fill","#000"),e(t,"width","314.2"),e(t,"height","47"),e(t,"viewBox","0 0 314.2 47"),e(t,"xmlns","http://www.w3.org/2000/svg")},m(s,a){H(s,t,a),r(t,i),r(i,l)},d(s){s&&o(t)}}}function G2(u){let t,i,l;return{c(){t=J("svg"),i=J("g"),l=J("path"),this.h()},l(s){t=X(s,"svg",{width:!0,height:!0,viewBox:!0,xmlns:!0});var a=n(t);i=X(a,"g",{id:!0,style:!0,"fill-rule":!0,"font-size":!0,stroke:!0,"stroke-width":!0,fill:!0});var A=n(i);l=X(A,"path",{d:!0,"vector-effect":!0}),n(l).forEach(o),A.forEach(o),a.forEach(o),this.h()},h(){e(l,"d","M 133.75 37 L 130.25 37 L 121.45 2.1 L 124.65 2.1 L 132.1 33.3 L 132.25 33.3 L 140.5 2.1 L 144.15 2.1 L 152.3 33.3 L 152.45 33.3 L 160.15 2.1 L 163.25 2.1 L 154.15 37 L 150.65 37 L 142.3 5.45 L 142.2 5.45 L 133.75 37 Z M 20.8 37 L 8.65 19 L 3 25.25 L 3 37 L 0 37 L 0 2.1 L 3 2.1 L 3 21.75 L 3.1 21.75 L 8.7 15.3 L 20.2 2.1 L 23.85 2.1 L 10.7 16.95 L 24.5 37 L 20.8 37 Z M 294.1 37 L 294.1 0 L 296.95 0 L 296.95 24.45 L 297.1 24.45 L 301.1 20.2 L 309.6 11.4 L 313.1 11.4 L 303.05 21.8 L 314.2 37 L 310.7 37 L 301 23.6 L 296.95 27.7 L 296.95 37 L 294.1 37 Z M 176.6 33.95 L 184.4 11.4 L 187.3 11.4 L 175.45 44.2 Q 174.877 45.729 174.075 46.345 A 2.308 2.308 0 0 1 174 46.4 Q 173.253 46.927 171.658 46.991 A 11.418 11.418 0 0 1 171.2 47 L 168.3 47 L 168.3 44.5 L 172.6 44.5 L 175.05 37.75 L 165.55 11.4 L 168.55 11.4 L 176.4 33.95 L 176.6 33.95 Z M 45.9 37 L 45.9 32.95 L 45.7 32.95 A 8.034 8.034 0 0 1 44.914 34.46 A 9.1 9.1 0 0 1 44.75 34.7 Q 44.15 35.55 43.25 36.175 Q 42.35 36.8 41.125 37.2 A 7.666 7.666 0 0 1 39.839 37.494 Q 39.101 37.6 38.25 37.6 A 10.686 10.686 0 0 1 35.563 37.281 A 7.423 7.423 0 0 1 31.85 35.075 Q 29.55 32.55 29.55 27.85 L 29.55 11.4 L 32.4 11.4 L 32.4 27.3 A 14.579 14.579 0 0 0 32.546 29.439 Q 32.708 30.53 33.051 31.404 A 5.723 5.723 0 0 0 34.1 33.15 A 5.491 5.491 0 0 0 36.956 34.82 Q 37.887 35.05 39 35.05 A 9.382 9.382 0 0 0 41.402 34.747 A 8.772 8.772 0 0 0 41.575 34.7 Q 42.8 34.35 43.775 33.65 Q 44.75 32.95 45.325 31.875 Q 45.9 30.8 45.9 29.35 L 45.9 11.4 L 48.75 11.4 L 48.75 37 L 45.9 37 Z M 107.25 37 L 104.35 37 A 5.058 5.058 0 0 1 103.471 36.929 Q 103 36.846 102.633 36.665 A 2.184 2.184 0 0 1 101.95 36.15 Q 101.2 35.3 101.1 33.85 L 101.1 32.95 L 100.85 32.95 Q 100 35.1 98.05 36.35 Q 96.273 37.489 93.623 37.59 A 13.748 13.748 0 0 1 93.1 37.6 A 13.325 13.325 0 0 1 90.655 37.39 Q 89.28 37.133 88.2 36.562 A 6.692 6.692 0 0 1 86.85 35.625 A 6.432 6.432 0 0 1 84.854 32.093 A 9.675 9.675 0 0 1 84.65 30.05 Q 84.65 26.65 87.075 24.65 A 7.121 7.121 0 0 1 89.166 23.491 Q 91.139 22.765 94.091 22.666 A 28.562 28.562 0 0 1 95.05 22.65 L 100.95 22.65 L 100.95 19.65 A 8.83 8.83 0 0 0 100.614 17.099 Q 99.466 13.3 94.4 13.3 Q 91.85 13.3 90.15 14.375 A 7.519 7.519 0 0 0 87.928 16.563 A 9.401 9.401 0 0 0 87.4 17.45 L 85.6 15.95 A 8.93 8.93 0 0 1 88.791 12.273 A 10.566 10.566 0 0 1 88.825 12.25 A 8.082 8.082 0 0 1 91.32 11.165 Q 92.743 10.8 94.5 10.8 Q 97.71 10.8 99.851 11.945 A 7.248 7.248 0 0 1 101.4 13.05 Q 103.8 15.3 103.8 19.35 L 103.8 34.5 L 107.25 34.5 L 107.25 37 Z M 58.05 37 L 58.05 0 L 60.9 0 L 60.9 15.5 L 61.05 15.5 Q 62 13.35 63.95 12.075 A 7.511 7.511 0 0 1 66.441 11.048 Q 67.444 10.823 68.608 10.802 A 13.366 13.366 0 0 1 68.85 10.8 A 11.247 11.247 0 0 1 72.26 11.292 A 8.901 8.901 0 0 1 76.6 14.3 A 11.621 11.621 0 0 1 78.586 18.143 Q 79.108 19.813 79.295 21.829 A 25.648 25.648 0 0 1 79.4 24.2 A 23.547 23.547 0 0 1 79.113 28.002 Q 78.779 30.036 78.059 31.669 A 10.927 10.927 0 0 1 76.6 34.1 A 9.123 9.123 0 0 1 69.981 37.552 A 12.999 12.999 0 0 1 68.85 37.6 A 11.235 11.235 0 0 1 66.785 37.421 Q 65.188 37.122 64 36.325 Q 62.1 35.05 61.05 32.9 L 60.9 32.9 L 60.9 37 L 58.05 37 Z M 238.25 37 L 238.25 0 L 241.1 0 L 241.1 15.5 L 241.25 15.5 Q 242.2 13.35 244.15 12.075 A 7.511 7.511 0 0 1 246.641 11.048 Q 247.644 10.823 248.808 10.802 A 13.366 13.366 0 0 1 249.05 10.8 A 11.247 11.247 0 0 1 252.46 11.292 A 8.901 8.901 0 0 1 256.8 14.3 A 11.621 11.621 0 0 1 258.786 18.143 Q 259.308 19.813 259.495 21.829 A 25.648 25.648 0 0 1 259.6 24.2 A 23.547 23.547 0 0 1 259.313 28.002 Q 258.979 30.036 258.259 31.669 A 10.927 10.927 0 0 1 256.8 34.1 A 9.123 9.123 0 0 1 250.181 37.552 A 12.999 12.999 0 0 1 249.05 37.6 A 11.235 11.235 0 0 1 246.985 37.421 Q 245.388 37.122 244.2 36.325 Q 242.3 35.05 241.25 32.9 L 241.1 32.9 L 241.1 37 L 238.25 37 Z M 286.85 23.4 L 286.85 24.75 L 267.9 24.75 L 267.9 26 A 12.161 12.161 0 0 0 268.103 28.26 A 10.16 10.16 0 0 0 268.475 29.675 A 8.72 8.72 0 0 0 269.438 31.658 A 7.653 7.653 0 0 0 270.125 32.55 Q 271.2 33.75 272.75 34.425 A 8.061 8.061 0 0 0 274.957 35.02 A 10.182 10.182 0 0 0 276.25 35.1 A 9.335 9.335 0 0 0 279.484 34.572 Q 282.539 33.45 284 29.95 L 286.1 31.35 Q 284.9 34.2 282.325 35.9 A 10.132 10.132 0 0 1 278.405 37.413 A 13.637 13.637 0 0 1 276.1 37.6 A 12.487 12.487 0 0 1 273.31 37.299 A 10.462 10.462 0 0 1 271.475 36.7 Q 269.4 35.8 267.925 34.075 A 10.93 10.93 0 0 1 266.291 31.477 A 13.797 13.797 0 0 1 265.675 29.85 A 16.878 16.878 0 0 1 265.048 26.832 A 22.408 22.408 0 0 1 264.9 24.2 A 21.909 21.909 0 0 1 265.088 21.263 A 16.304 16.304 0 0 1 265.675 18.575 A 12.983 12.983 0 0 1 266.75 16.06 A 10.63 10.63 0 0 1 267.925 14.375 Q 269.4 12.65 271.45 11.725 A 10.471 10.471 0 0 1 274.646 10.874 A 12.982 12.982 0 0 1 276.05 10.8 A 11.239 11.239 0 0 1 278.801 11.126 A 9.644 9.644 0 0 1 280.5 11.725 Q 282.5 12.65 283.9 14.3 A 11.213 11.213 0 0 1 285.56 16.954 A 13.789 13.789 0 0 1 286.075 18.275 A 15.053 15.053 0 0 1 286.758 21.531 A 18.589 18.589 0 0 1 286.85 23.4 Z M 195.9 37 L 193.05 37 L 193.05 11.4 L 195.9 11.4 L 195.9 16 L 196.1 16 A 7.315 7.315 0 0 1 197.537 13.81 A 9.555 9.555 0 0 1 198.65 12.8 A 6.008 6.008 0 0 1 200.58 11.822 Q 201.429 11.558 202.455 11.459 A 13.517 13.517 0 0 1 203.75 11.4 L 205.45 11.4 L 205.45 14.2 L 203.2 14.2 Q 200.453 14.2 198.554 15.232 A 6.955 6.955 0 0 0 197.95 15.6 A 4.756 4.756 0 0 0 196.553 17.028 Q 195.966 17.981 195.907 19.217 A 5.875 5.875 0 0 0 195.9 19.5 L 195.9 37 Z M 217.175 37.323 A 12.445 12.445 0 0 0 219.85 37.6 Q 222.4 37.6 224.45 36.7 Q 226.5 35.8 227.95 34.075 A 10.962 10.962 0 0 0 229.175 32.271 A 13.822 13.822 0 0 0 230.2 29.85 Q 231 27.35 231 24.2 Q 231 21.05 230.2 18.575 Q 229.4 16.1 227.95 14.375 Q 226.5 12.65 224.45 11.725 Q 222.4 10.8 219.85 10.8 A 12.982 12.982 0 0 0 218.446 10.874 A 10.471 10.471 0 0 0 215.25 11.725 Q 213.2 12.65 211.75 14.375 A 11.063 11.063 0 0 0 210.533 16.157 A 13.751 13.751 0 0 0 209.5 18.575 A 15.868 15.868 0 0 0 208.894 21.263 A 21.235 21.235 0 0 0 208.7 24.2 Q 208.7 27.35 209.5 29.85 A 14.48 14.48 0 0 0 210.159 31.547 A 11.335 11.335 0 0 0 211.75 34.075 Q 213.2 35.8 215.25 36.7 A 10.241 10.241 0 0 0 217.175 37.323 Z M 227.95 25.8 L 227.95 22.6 Q 227.95 19.502 226.919 17.411 A 7.181 7.181 0 0 0 225.775 15.725 A 7.164 7.164 0 0 0 221.521 13.48 A 10.283 10.283 0 0 0 219.85 13.35 A 9.64 9.64 0 0 0 217.284 13.674 A 7.023 7.023 0 0 0 213.925 15.7 Q 212.138 17.631 211.819 21.048 A 16.731 16.731 0 0 0 211.75 22.6 L 211.75 25.8 Q 211.75 28.898 212.781 30.989 A 7.181 7.181 0 0 0 213.925 32.675 A 7.164 7.164 0 0 0 218.179 34.92 A 10.283 10.283 0 0 0 219.85 35.05 A 9.64 9.64 0 0 0 222.416 34.726 A 7.023 7.023 0 0 0 225.775 32.7 Q 227.562 30.769 227.881 27.352 A 16.731 16.731 0 0 0 227.95 25.8 Z M 76.35 26 L 76.35 22.4 Q 76.35 18.25 74.2 15.8 Q 72.05 13.35 68.2 13.35 A 9.423 9.423 0 0 0 65.963 13.609 A 8.545 8.545 0 0 0 65.375 13.775 A 8.303 8.303 0 0 0 63.811 14.453 A 7.114 7.114 0 0 0 63.05 14.95 Q 62.05 15.7 61.475 16.75 Q 60.9 17.8 60.9 19.05 L 60.9 29.2 Q 60.9 30.55 61.475 31.625 Q 62.05 32.7 63.05 33.475 A 6.919 6.919 0 0 0 64.89 34.487 A 8.129 8.129 0 0 0 65.375 34.65 A 9.534 9.534 0 0 0 67.733 35.04 A 10.952 10.952 0 0 0 68.2 35.05 A 9.695 9.695 0 0 0 70.744 34.734 A 6.892 6.892 0 0 0 74.2 32.6 Q 76.241 30.274 76.344 26.417 A 15.53 15.53 0 0 0 76.35 26 Z M 256.55 26 L 256.55 22.4 Q 256.55 18.25 254.4 15.8 Q 252.25 13.35 248.4 13.35 A 9.423 9.423 0 0 0 246.163 13.609 A 8.545 8.545 0 0 0 245.575 13.775 A 8.303 8.303 0 0 0 244.011 14.453 A 7.114 7.114 0 0 0 243.25 14.95 Q 242.25 15.7 241.675 16.75 Q 241.1 17.8 241.1 19.05 L 241.1 29.2 Q 241.1 30.55 241.675 31.625 Q 242.25 32.7 243.25 33.475 A 6.919 6.919 0 0 0 245.09 34.487 A 8.129 8.129 0 0 0 245.575 34.65 A 9.534 9.534 0 0 0 247.933 35.04 A 10.952 10.952 0 0 0 248.4 35.05 A 9.695 9.695 0 0 0 250.944 34.734 A 6.892 6.892 0 0 0 254.4 32.6 Q 256.441 30.274 256.544 26.417 A 15.53 15.53 0 0 0 256.55 26 Z M 267.9 22.3 L 267.9 22.55 L 283.75 22.55 L 283.75 22.15 A 12.698 12.698 0 0 0 283.556 19.89 A 10.533 10.533 0 0 0 283.2 18.475 A 8.696 8.696 0 0 0 282.456 16.8 A 7.098 7.098 0 0 0 281.625 15.65 Q 280.6 14.5 279.175 13.85 A 7.298 7.298 0 0 0 276.523 13.213 A 8.603 8.603 0 0 0 276.05 13.2 Q 274.2 13.2 272.7 13.875 Q 271.2 14.55 270.125 15.75 A 8.036 8.036 0 0 0 268.719 17.989 A 9.555 9.555 0 0 0 268.475 18.625 A 10.653 10.653 0 0 0 267.951 21.141 A 12.972 12.972 0 0 0 267.9 22.3 Z M 100.95 29.55 L 100.95 24.8 L 94.95 24.8 A 19.17 19.17 0 0 0 93.003 24.892 Q 91.047 25.092 89.851 25.732 A 4.432 4.432 0 0 0 89.375 26.025 A 4.085 4.085 0 0 0 88.144 27.364 Q 87.696 28.166 87.654 29.187 A 5.191 5.191 0 0 0 87.65 29.4 L 87.65 30.6 A 5.013 5.013 0 0 0 87.839 32.017 A 3.647 3.647 0 0 0 89.25 34 Q 90.644 35.002 92.834 35.131 A 11.316 11.316 0 0 0 93.5 35.15 A 10.641 10.641 0 0 0 95.537 34.961 A 9.278 9.278 0 0 0 96.4 34.75 Q 97.75 34.35 98.775 33.625 A 5.458 5.458 0 0 0 100.059 32.369 A 5.085 5.085 0 0 0 100.375 31.875 A 4.524 4.524 0 0 0 100.93 30.029 A 5.552 5.552 0 0 0 100.95 29.55 Z"),e(l,"vector-effect","non-scaling-stroke"),e(i,"id","svgGroup"),f(i,"stroke","#fff"),f(i,"stroke-width","0.25mm"),f(i,"fill","#fff"),e(i,"fill-rule","evenodd"),e(i,"font-size","9pt"),e(i,"stroke","#fff"),e(i,"stroke-width","0.25mm"),e(i,"fill","#fff"),e(t,"width","314.2"),e(t,"height","47"),e(t,"viewBox","0 0 314.2 47"),e(t,"xmlns","http://www.w3.org/2000/svg")},m(s,a){H(s,t,a),r(t,i),r(i,l)},d(s){s&&o(t)}}}function C2(u){let t;function i(a,A){return a[0]?q2:G2}let l=i(u),s=l(u);return{c(){s.c(),t=X1()},l(a){s.l(a),t=X1()},m(a,A){s.m(a,A),H(a,t,A)},p(a,[A]){l!==(l=i(a))&&(s.d(1),s=l(a),s&&(s.c(),s.m(t.parentNode,t)))},i:Z1,o:Z1,d(a){s.d(a),a&&o(t)}}}function T2(u,t,i){let l;return V2(u,Z2,s=>i(0,l=s)),[l]}class O2 extends Y1{constructor(t){super(),e0(this,t,T2,C2,N1,{})}}function W2(u){let t,i,l,s;return{c(){t=c("img"),this.h()},l(a){t=d(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){j1(t.src,i=u[1].src)||e(t,"src",i),e(t,"alt",l=u[1].alt),e(t,"class",s=u[1].class)},m(a,A){H(a,t,A)},p(a,A){A&2&&!j1(t.src,i=a[1].src)&&e(t,"src",i),A&2&&l!==(l=a[1].alt)&&e(t,"alt",l),A&2&&s!==(s=a[1].class)&&e(t,"class",s)},d(a){a&&o(t)}}}function K2(u){let t,i,l,s;return{c(){t=c("img"),this.h()},l(a){t=d(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){j1(t.src,i=u[1].src_dark)||e(t,"src",i),e(t,"alt",l=u[1].alt),e(t,"class",s=u[1].class)},m(a,A){H(a,t,A)},p(a,A){A&2&&!j1(t.src,i=a[1].src_dark)&&e(t,"src",i),A&2&&l!==(l=a[1].alt)&&e(t,"alt",l),A&2&&s!==(s=a[1].class)&&e(t,"class",s)},d(a){a&&o(t)}}}function U2(u){let t;function i(a,A){return a[0]?W2:K2}let l=i(u),s=l(u);return{c(){s.c(),t=X1()},l(a){s.l(a),t=X1()},m(a,A){s.m(a,A),H(a,t,A)},p(a,[A]){l===(l=i(a))&&s?s.p(a,A):(s.d(1),s=l(a),s&&(s.c(),s.m(t.parentNode,t)))},i:Z1,o:Z1,d(a){s.d(a),a&&o(t)}}}function J2(u,t,i){let l;return V2(u,Z2,s=>i(0,l=s)),u.$$set=s=>{i(1,t=k2(k2({},t),E2(s)))},t=E2(t),[l,t]}class D2 extends Y1{constructor(t){super(),e0(this,t,J2,U2,N1,{})}}function X2(u){let t,i,l,s,a,A,x,b,M,q,$,Y,V,p,y,S,D,t0,s1,Q,k,w,H0,r0,m,S0,a0,l1,s0,l0,o1,o0,i0,I,e1,i1,G,n1,c1,n0,c0,d1,f1,d0,f0,t1,A1,C,u1,h1,A0,u0,v1,m1,h0,v0,r1,L1,T,g1,p1,m0,L0,Q1,_1,g0,p0,Z,x1,O,w1,b1,Q0,_0,y1,k1,x0,w0,j,b0,N,z,y0,P1,k0,W,z1,E0,P,E1,a1,M0,M1,B,I0,$0,K,F,D0,V0,R,Z0,H1;return document.title=t=M2,M=new O2({}),p=new D2({props:{src:"./../parhelium-logo.png",src_dark:"./../parhelium-logo-dark.png",class:"object-scale-down h-4 inline ml-1"}}),D=new R2({}),a1=new D2({props:{src:"./../parhelium-logo.png",src_dark:"./../parhelium-logo-dark.png",class:"object-scale-down object-left h-4 w-full"}}),{c(){i=h(),l=c("div"),s=c("main"),a=c("div"),A=c("div"),x=c("div"),b=c("h1"),W1(M.$$.fragment),q=h(),$=c("h2"),Y=L("Founder at "),V=c("span"),W1(p.$$.fragment),y=h(),S=c("p"),W1(D.$$.fragment),t0=h(),s1=c("div"),Q=c("span"),k=c("span"),w=c("img"),r0=h(),m=c("img"),a0=h(),l1=c("h4"),s0=L("Featured work"),l0=h(),o1=c("p"),o0=L("Most important work I have done past few years."),i0=h(),I=c("div"),e1=c("a"),i1=c("div"),G=c("div"),n1=c("div"),c1=c("h4"),n0=L("Sail - cryptocurrency wallet with builtin swap"),c0=h(),d1=c("div"),f1=c("div"),d0=L("2021 - now"),f0=h(),t1=c("a"),A1=c("div"),C=c("div"),u1=c("div"),h1=c("h4"),A0=L("Network.gives - networking platform"),u0=h(),v1=c("div"),m1=c("div"),h0=L("2020 - 2021"),v0=h(),r1=c("a"),L1=c("div"),T=c("div"),g1=c("div"),p1=c("h4"),m0=L("Dropbox-like application for top holywood studios"),L0=h(),Q1=c("div"),_1=c("div"),g0=L("2017 - 2020"),p0=h(),Z=c("a"),x1=c("div"),O=c("div"),w1=c("div"),b1=c("h4"),Q0=L("Thinkchef - franchise management software"),_0=h(),y1=c("div"),k1=c("div"),x0=L("2015 - 2017"),w0=h(),j=c("a"),b0=L(`See all
        `),N=J("svg"),z=J("path"),y0=h(),P1=c("span"),k0=h(),W=c("footer"),z1=c("hr"),E0=h(),P=c("div"),E1=c("div"),W1(a1.$$.fragment),M0=h(),M1=c("div"),B=c("a"),I0=L("posts"),$0=h(),K=c("div"),F=c("a"),D0=L("twitter"),V0=h(),R=c("a"),Z0=L("github"),this.h()},l(_){N2('[data-svelte="svelte-pmictq"]',document.head).forEach(o),i=v(_),l=d(_,"DIV",{class:!0});var N0=n(l);s=d(N0,"MAIN",{id:!0,class:!0});var z0=n(s);a=d(z0,"DIV",{class:!0});var E=n(a);A=d(E,"DIV",{class:!0});var B1=n(A);x=d(B1,"DIV",{class:!0});var I1=n(x);b=d(I1,"H1",{class:!0});var B0=n(b);K1(M.$$.fragment,B0),B0.forEach(o),q=v(I1),$=d(I1,"H2",{class:!0});var j0=n($);Y=g(j0,"Founder at "),V=d(j0,"SPAN",{class:!0});var F0=n(V);K1(p.$$.fragment,F0),F0.forEach(o),j0.forEach(o),y=v(I1),S=d(I1,"P",{class:!0});var R0=n(S);K1(D.$$.fragment,R0),R0.forEach(o),I1.forEach(o),t0=v(B1),s1=d(B1,"DIV",{class:!0});var q0=n(s1);Q=d(q0,"SPAN",{style:!0});var F1=n(Q);k=d(F1,"SPAN",{style:!0});var G0=n(k);w=d(G0,"IMG",{style:!0,alt:!0,"aria-hidden":!0,src:!0}),G0.forEach(o),r0=v(F1),m=d(F1,"IMG",{alt:!0,src:!0,decoding:!0,"data-nimg":!0,class:!0,style:!0}),F1.forEach(o),q0.forEach(o),B1.forEach(o),a0=v(E),l1=d(E,"H4",{class:!0});var C0=n(l1);s0=g(C0,"Featured work"),C0.forEach(o),l0=v(E),o1=d(E,"P",{class:!0});var T0=n(o1);o0=g(T0,"Most important work I have done past few years."),T0.forEach(o),i0=v(E),I=d(E,"DIV",{class:!0});var U=n(I);e1=d(U,"A",{class:!0,href:!0});var O0=n(e1);i1=d(O0,"DIV",{class:!0});var W0=n(i1);G=d(W0,"DIV",{class:!0});var R1=n(G);n1=d(R1,"DIV",{class:!0});var K0=n(n1);c1=d(K0,"H4",{class:!0});var U0=n(c1);n0=g(U0,"Sail - cryptocurrency wallet with builtin swap"),U0.forEach(o),K0.forEach(o),c0=v(R1),d1=d(R1,"DIV",{class:!0});var J0=n(d1);f1=d(J0,"DIV",{class:!0});var X0=n(f1);d0=g(X0,"2021 - now"),X0.forEach(o),J0.forEach(o),R1.forEach(o),W0.forEach(o),O0.forEach(o),f0=v(U),t1=d(U,"A",{class:!0,href:!0});var Y0=n(t1);A1=d(Y0,"DIV",{class:!0});var e2=n(A1);C=d(e2,"DIV",{class:!0});var q1=n(C);u1=d(q1,"DIV",{class:!0});var t2=n(u1);h1=d(t2,"H4",{class:!0});var r2=n(h1);A0=g(r2,"Network.gives - networking platform"),r2.forEach(o),t2.forEach(o),u0=v(q1),v1=d(q1,"DIV",{class:!0});var a2=n(v1);m1=d(a2,"DIV",{class:!0});var s2=n(m1);h0=g(s2,"2020 - 2021"),s2.forEach(o),a2.forEach(o),q1.forEach(o),e2.forEach(o),Y0.forEach(o),v0=v(U),r1=d(U,"A",{class:!0,href:!0});var l2=n(r1);L1=d(l2,"DIV",{class:!0});var o2=n(L1);T=d(o2,"DIV",{class:!0});var G1=n(T);g1=d(G1,"DIV",{class:!0});var i2=n(g1);p1=d(i2,"H4",{class:!0});var n2=n(p1);m0=g(n2,"Dropbox-like application for top holywood studios"),n2.forEach(o),i2.forEach(o),L0=v(G1),Q1=d(G1,"DIV",{class:!0});var c2=n(Q1);_1=d(c2,"DIV",{class:!0});var d2=n(_1);g0=g(d2,"2017 - 2020"),d2.forEach(o),c2.forEach(o),G1.forEach(o),o2.forEach(o),l2.forEach(o),p0=v(U),Z=d(U,"A",{class:!0,href:!0,"aria-label":!0,target:!0,rel:!0});var f2=n(Z);x1=d(f2,"DIV",{class:!0});var A2=n(x1);O=d(A2,"DIV",{class:!0});var C1=n(O);w1=d(C1,"DIV",{class:!0});var u2=n(w1);b1=d(u2,"H4",{class:!0});var h2=n(b1);Q0=g(h2,"Thinkchef - franchise management software"),h2.forEach(o),u2.forEach(o),_0=v(C1),y1=d(C1,"DIV",{class:!0});var v2=n(y1);k1=d(v2,"DIV",{class:!0});var m2=n(k1);x0=g(m2,"2015 - 2017"),m2.forEach(o),v2.forEach(o),C1.forEach(o),A2.forEach(o),f2.forEach(o),U.forEach(o),w0=v(E),j=d(E,"A",{target:!0,rel:!0,href:!0,class:!0});var P0=n(j);b0=g(P0,`See all
        `),N=X(P0,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var L2=n(N);z=X(L2,"path",{stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),n(z).forEach(o),L2.forEach(o),P0.forEach(o),y0=v(E),P1=d(E,"SPAN",{class:!0}),n(P1).forEach(o),k0=v(E),W=d(E,"FOOTER",{class:!0});var T1=n(W);z1=d(T1,"HR",{class:!0}),E0=v(T1),P=d(T1,"DIV",{class:!0});var $1=n(P);E1=d($1,"DIV",{class:!0});var g2=n(E1);K1(a1.$$.fragment,g2),g2.forEach(o),M0=v($1),M1=d($1,"DIV",{class:!0});var p2=n(M1);B=d(p2,"A",{class:!0,target:!0,rel:!0,href:!0});var Q2=n(B);I0=g(Q2,"posts"),Q2.forEach(o),p2.forEach(o),$0=v($1),K=d($1,"DIV",{class:!0});var O1=n(K);F=d(O1,"A",{class:!0,target:!0,rel:!0,href:!0});var _2=n(F);D0=g(_2,"twitter"),_2.forEach(o),V0=v(O1),R=d(O1,"A",{class:!0,target:!0,rel:!0,href:!0});var x2=n(R);Z0=g(x2,"github"),x2.forEach(o),O1.forEach(o),$1.forEach(o),T1.forEach(o),E.forEach(o),z0.forEach(o),N0.forEach(o),this.h()},h(){e(b,"class","font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white"),e(V,"class","font-semibold"),e($,"class","text-gray-700 dark:text-gray-200 mb-4"),e(S,"class","text-gray-600 dark:text-gray-400 mb-16 min-w-800 "),e(x,"class","flex flex-col pr-8"),f(w,"display","block"),f(w,"max-width","100%"),f(w,"width","initial"),f(w,"height","initial"),f(w,"background","rgba(0, 0, 0, 0) none repeat scroll 0% 0%"),f(w,"opacity","1"),f(w,"border","0px none"),f(w,"margin","0px"),f(w,"padding","0px"),e(w,"alt",""),e(w,"aria-hidden","true"),j1(w.src,H0="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27176%27%20height=%27176%27/%3e")||e(w,"src",H0),f(k,"box-sizing","border-box"),f(k,"display","block"),f(k,"width","initial"),f(k,"height","initial"),f(k,"background","rgba(0, 0, 0, 0) none repeat scroll 0% 0%"),f(k,"opacity","1"),f(k,"border","0px none"),f(k,"margin","0px"),f(k,"padding","0px"),f(k,"max-width","100%"),e(m,"alt","Kuba Wyrobek"),j1(m.src,S0="/kuba-wyrobek.png")||e(m,"src",S0),e(m,"decoding","async"),e(m,"data-nimg","intrinsic"),e(m,"class","rounded-full filter grayscale"),f(m,"position","absolute"),f(m,"inset","0px"),f(m,"box-sizing","border-box"),f(m,"padding","0px"),f(m,"border","medium none"),f(m,"margin","auto"),f(m,"display","block"),f(m,"width","0px"),f(m,"height","0px"),f(m,"min-width","100%"),f(m,"max-width","100%"),f(m,"min-height","100%"),f(m,"max-height","100%"),f(Q,"box-sizing","border-box"),f(Q,"display","inline-block"),f(Q,"overflow","hidden"),f(Q,"width","initial"),f(Q,"height","initial"),f(Q,"background","rgba(0, 0, 0, 0) none repeat scroll 0% 0%"),f(Q,"opacity","1"),f(Q,"border","0px none"),f(Q,"margin","0px"),f(Q,"padding","0px"),f(Q,"position","relative"),f(Q,"max-width","100%"),e(s1,"class","w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto"),e(A,"class","flex flex-col-reverse sm:flex-row items-start"),e(l1,"class","font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white"),e(o1,"class","text-gray-600 dark:text-gray-400 mb-4"),e(c1,"class","text-lg font-medium w-full text-gray-800 dark:text-gray-100"),e(n1,"class","flex items-center"),e(f1,"class","text-gray-300 dark:text-gray-400 text-left mr-0"),e(d1,"class","flex items-center mt-2 sm:mt-0 w-full sm:w-auto justify-between"),e(G,"class","flex flex-col sm:flex-row justify-between items-baseline"),e(i1,"class","w-full border-b border-gray-200 dark:border-gray-700 py-3 transform hover:scale-[1.01] transition-all"),e(e1,"class","w-full"),e(e1,"href","/posts/sail-be-your-own-bank"),e(h1,"class","text-lg font-medium w-full text-gray-800 dark:text-gray-100"),e(u1,"class","flex items-center"),e(m1,"class","text-gray-300 dark:text-gray-400 text-left mr-0"),e(v1,"class","flex items-center mt-2 sm:mt-0 w-full sm:w-auto justify-between"),e(C,"class","flex flex-col sm:flex-row justify-between items-baseline"),e(A1,"class","w-full border-b border-gray-200 dark:border-gray-700 py-3 transform hover:scale-[1.01] transition-all"),e(t1,"class","w-full"),e(t1,"href","/posts/network-gives"),e(p1,"class","text-lg font-medium w-full text-gray-800 dark:text-gray-100"),e(g1,"class","flex items-center"),e(_1,"class","text-gray-300 dark:text-gray-400 text-left mr-0"),e(Q1,"class","flex items-center mt-2 sm:mt-0 w-full sm:w-auto justify-between"),e(T,"class","flex flex-col sm:flex-row justify-between items-baseline"),e(L1,"class","w-full border-b border-gray-200 dark:border-gray-700 py-3 transform hover:scale-[1.01] transition-all"),e(r1,"class","w-full"),e(r1,"href","/posts/dropbox-like-software"),e(b1,"class","text-lg font-medium w-full text-gray-800 dark:text-gray-100"),e(w1,"class","flex items-center"),e(k1,"class","text-gray-300 dark:text-gray-400 text-left mr-0"),e(y1,"class","flex items-center mt-2 sm:mt-0 w-full sm:w-auto justify-between"),e(O,"class","flex flex-col sm:flex-row justify-between items-baseline"),e(x1,"class","w-full py-3 transform hover:scale-[1.01] transition-all"),e(Z,"class","w-full"),e(Z,"href","/posts/thinkchef-franchise-menu-management"),e(Z,"aria-label","Firebase Admin with Next.js + SWR"),e(Z,"target","_blank"),e(Z,"rel","noopener noreferrer"),e(I,"class","rounded border px-5 py-2 my-4 w-full dark:border-gray-800 dark:bg-blue-opaque"),e(z,"stroke","currentColor"),e(z,"stroke-linecap","round"),e(z,"stroke-linejoin","round"),e(z,"stroke-width","2"),e(z,"d","M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"),e(N,"xmlns","http://www.w3.org/2000/svg"),e(N,"fill","none"),e(N,"viewBox","0 0 24 24"),e(N,"class","h-6 w-6 ml-1"),e(j,"target","_blank"),e(j,"rel","noopener noreferrer"),e(j,"href","/posts"),e(j,"class","flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"),e(P1,"class","h-16"),e(z1,"class","w-full border-1 border-gray-200 dark:border-gray-800 mb-8"),e(E1,"class","flex flex-col space-y-4"),e(B,"class","text-gray-500 hover:text-gray-600 transition"),e(B,"target","_blank"),e(B,"rel","noopener noreferrer"),e(B,"href","/posts"),e(M1,"class","flex flex-col space-y-4 justify-self-end"),e(F,"class","text-gray-500 hover:text-gray-600 transition"),e(F,"target","_blank"),e(F,"rel","noopener noreferrer"),e(F,"href","https://twitter.com/kwyrobek"),e(R,"class","text-gray-500 hover:text-gray-600 transition"),e(R,"target","_blank"),e(R,"rel","noopener noreferrer"),e(R,"href","https://github.com/parhelium"),e(K,"class","flex flex-col space-y-4 justify-self-end"),e(P,"class","w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"),e(W,"class","flex flex-col justify-end max-w-2xl mx-auto w-full mb-8"),e(a,"class","flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16"),e(s,"id","skip"),e(s,"class","flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"),e(l,"class","bg-gray-50 dark:bg-gray-900")},m(_,S1){H(_,i,S1),H(_,l,S1),r(l,s),r(s,a),r(a,A),r(A,x),r(x,b),U1(M,b,null),r(x,q),r(x,$),r($,Y),r($,V),U1(p,V,null),r(x,y),r(x,S),U1(D,S,null),r(A,t0),r(A,s1),r(s1,Q),r(Q,k),r(k,w),r(Q,r0),r(Q,m),r(a,a0),r(a,l1),r(l1,s0),r(a,l0),r(a,o1),r(o1,o0),r(a,i0),r(a,I),r(I,e1),r(e1,i1),r(i1,G),r(G,n1),r(n1,c1),r(c1,n0),r(G,c0),r(G,d1),r(d1,f1),r(f1,d0),r(I,f0),r(I,t1),r(t1,A1),r(A1,C),r(C,u1),r(u1,h1),r(h1,A0),r(C,u0),r(C,v1),r(v1,m1),r(m1,h0),r(I,v0),r(I,r1),r(r1,L1),r(L1,T),r(T,g1),r(g1,p1),r(p1,m0),r(T,L0),r(T,Q1),r(Q1,_1),r(_1,g0),r(I,p0),r(I,Z),r(Z,x1),r(x1,O),r(O,w1),r(w1,b1),r(b1,Q0),r(O,_0),r(O,y1),r(y1,k1),r(k1,x0),r(a,w0),r(a,j),r(j,b0),r(j,N),r(N,z),r(a,y0),r(a,P1),r(a,k0),r(a,W),r(W,z1),r(W,E0),r(W,P),r(P,E1),U1(a1,E1,null),r(P,M0),r(P,M1),r(M1,B),r(B,I0),r(P,$0),r(P,K),r(K,F),r(F,D0),r(K,V0),r(K,R),r(R,Z0),H1=!0},p(_,[S1]){(!H1||S1&0)&&t!==(t=M2)&&(document.title=t)},i(_){H1||(V1(M.$$.fragment,_),V1(p.$$.fragment,_),V1(D.$$.fragment,_),V1(a1.$$.fragment,_),H1=!0)},o(_){D1(M.$$.fragment,_),D1(p.$$.fragment,_),D1(D.$$.fragment,_),D1(a1.$$.fragment,_),H1=!1},d(_){_&&o(i),_&&o(l),J1(M),J1(p),J1(D),J1(a1)}}}const s5=async({fetch:u})=>({props:{recentPosts:await u("/posts.json?limit=2").then(t=>t.json())}});function Y2(u,t,i){let{recentPosts:l}=t;return u.$$set=s=>{"recentPosts"in s&&i(0,l=s.recentPosts)},[l]}class l5 extends Y1{constructor(t){super(),e0(this,t,Y2,X2,N1,{recentPosts:0})}}export{l5 as default,s5 as load};
