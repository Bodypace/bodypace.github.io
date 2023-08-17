import{s as B}from"../chunks/scheduler.1f6706a1.js";import{S as P,i as T,r as _,u as g,v as d,d as w,t as v,w as b,g as H,s as x,h as L,y as W,c as h,k as O,a as u,f as m,m as z,n as M}from"../chunks/index.3ed14cb2.js";import{P as D}from"../chunks/page.860cb60d.js";import{T as j,a as A,B as S}from"../chunks/tile.caf3ed1d.js";function q(o){let t;return{c(){t=z("MacOS app")},l(s){t=M(s,"MacOS app")},m(s,n){u(s,t,n)},d(s){s&&m(t)}}}function E(o){let t;return{c(){t=z("Windows 10 app")},l(s){t=M(s,"Windows 10 app")},m(s,n){u(s,t,n)},d(s){s&&m(t)}}}function F(o){let t;return{c(){t=z("Linux app")},l(s){t=M(s,"Linux app")},m(s,n){u(s,t,n)},d(s){s&&m(t)}}}function G(o){let t,s="Desktop app",n,r,p,a,l,f,c;return r=new S({props:{target:"download-app-desktop-apple",large:!0,$$slots:{default:[q]},$$scope:{ctx:o}}}),a=new S({props:{target:"download-app-desktop-windows",large:!0,$$slots:{default:[E]},$$scope:{ctx:o}}}),f=new S({props:{target:"download-app-desktop-linux",large:!0,$$slots:{default:[F]},$$scope:{ctx:o}}}),{c(){t=H("h2"),t.textContent=s,n=x(),_(r.$$.fragment),p=x(),_(a.$$.fragment),l=x(),_(f.$$.fragment),this.h()},l(e){t=L(e,"H2",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-e8i3tz"&&(t.textContent=s),n=h(e),g(r.$$.fragment,e),p=h(e),g(a.$$.fragment,e),l=h(e),g(f.$$.fragment,e),this.h()},h(){O(t,"class","svelte-1l8z8k6")},m(e,$){u(e,t,$),u(e,n,$),d(r,e,$),u(e,p,$),d(a,e,$),u(e,l,$),d(f,e,$),c=!0},p(e,$){const i={};$&1&&(i.$$scope={dirty:$,ctx:e}),r.$set(i);const C={};$&1&&(C.$$scope={dirty:$,ctx:e}),a.$set(C);const k={};$&1&&(k.$$scope={dirty:$,ctx:e}),f.$set(k)},i(e){c||(w(r.$$.fragment,e),w(a.$$.fragment,e),w(f.$$.fragment,e),c=!0)},o(e){v(r.$$.fragment,e),v(a.$$.fragment,e),v(f.$$.fragment,e),c=!1},d(e){e&&(m(t),m(n),m(p),m(l)),b(r,e),b(a,e),b(f,e)}}}function I(o){let t;return{c(){t=z("iOS app")},l(s){t=M(s,"iOS app")},m(s,n){u(s,t,n)},d(s){s&&m(t)}}}function J(o){let t;return{c(){t=z("Android app")},l(s){t=M(s,"Android app")},m(s,n){u(s,t,n)},d(s){s&&m(t)}}}function K(o){let t,s="Mobile app",n,r,p,a,l,f,c="see source code",e;return r=new S({props:{target:"download-app-mobile-apple",large:!0,$$slots:{default:[I]},$$scope:{ctx:o}}}),a=new S({props:{target:"download-app-mobile-android",large:!0,$$slots:{default:[J]},$$scope:{ctx:o}}}),{c(){t=H("h2"),t.textContent=s,n=x(),_(r.$$.fragment),p=x(),_(a.$$.fragment),l=x(),f=H("a"),f.textContent=c,this.h()},l($){t=L($,"H2",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-19cx8dz"&&(t.textContent=s),n=h($),g(r.$$.fragment,$),p=h($),g(a.$$.fragment,$),l=h($),f=L($,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),W(f)!=="svelte-517j1e"&&(f.textContent=c),this.h()},h(){O(t,"class","svelte-1l8z8k6"),O(f,"href","https://github.com/Bodypace/Mobile"),O(f,"target","_blank"),O(f,"class","svelte-1l8z8k6")},m($,i){u($,t,i),u($,n,i),d(r,$,i),u($,p,i),d(a,$,i),u($,l,i),u($,f,i),e=!0},p($,i){const C={};i&1&&(C.$$scope={dirty:i,ctx:$}),r.$set(C);const k={};i&1&&(k.$$scope={dirty:i,ctx:$}),a.$set(k)},i($){e||(w(r.$$.fragment,$),w(a.$$.fragment,$),e=!0)},o($){v(r.$$.fragment,$),v(a.$$.fragment,$),e=!1},d($){$&&(m(t),m(n),m(p),m(l),m(f)),b(r,$),b(a,$)}}}function N(o){let t;return{c(){t=z("MacOS app")},l(s){t=M(s,"MacOS app")},m(s,n){u(s,t,n)},d(s){s&&m(t)}}}function Q(o){let t;return{c(){t=z("Windows 10 app")},l(s){t=M(s,"Windows 10 app")},m(s,n){u(s,t,n)},d(s){s&&m(t)}}}function R(o){let t;return{c(){t=z("Linux app")},l(s){t=M(s,"Linux app")},m(s,n){u(s,t,n)},d(s){s&&m(t)}}}function U(o){let t,s="Server app",n,r,p,a,l,f,c;return r=new S({props:{target:"download-app-server-apple",large:!0,$$slots:{default:[N]},$$scope:{ctx:o}}}),a=new S({props:{target:"download-app-server-windows",large:!0,$$slots:{default:[Q]},$$scope:{ctx:o}}}),f=new S({props:{target:"download-app-server-linux",large:!0,$$slots:{default:[R]},$$scope:{ctx:o}}}),{c(){t=H("h2"),t.textContent=s,n=x(),_(r.$$.fragment),p=x(),_(a.$$.fragment),l=x(),_(f.$$.fragment),this.h()},l(e){t=L(e,"H2",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-1wxd1nu"&&(t.textContent=s),n=h(e),g(r.$$.fragment,e),p=h(e),g(a.$$.fragment,e),l=h(e),g(f.$$.fragment,e),this.h()},h(){O(t,"class","svelte-1l8z8k6")},m(e,$){u(e,t,$),u(e,n,$),d(r,e,$),u(e,p,$),d(a,e,$),u(e,l,$),d(f,e,$),c=!0},p(e,$){const i={};$&1&&(i.$$scope={dirty:$,ctx:e}),r.$set(i);const C={};$&1&&(C.$$scope={dirty:$,ctx:e}),a.$set(C);const k={};$&1&&(k.$$scope={dirty:$,ctx:e}),f.$set(k)},i(e){c||(w(r.$$.fragment,e),w(a.$$.fragment,e),w(f.$$.fragment,e),c=!0)},o(e){v(r.$$.fragment,e),v(a.$$.fragment,e),v(f.$$.fragment,e),c=!1},d(e){e&&(m(t),m(n),m(p),m(l)),b(r,e),b(a,e),b(f,e)}}}function V(o){let t,s,n,r,p,a;return t=new A({props:{center:!0,wide:!0,$$slots:{default:[G]},$$scope:{ctx:o}}}),n=new A({props:{center:!0,wide:!0,$$slots:{default:[K]},$$scope:{ctx:o}}}),p=new A({props:{center:!0,wide:!0,$$slots:{default:[U]},$$scope:{ctx:o}}}),{c(){_(t.$$.fragment),s=x(),_(n.$$.fragment),r=x(),_(p.$$.fragment)},l(l){g(t.$$.fragment,l),s=h(l),g(n.$$.fragment,l),r=h(l),g(p.$$.fragment,l)},m(l,f){d(t,l,f),u(l,s,f),d(n,l,f),u(l,r,f),d(p,l,f),a=!0},p(l,f){const c={};f&1&&(c.$$scope={dirty:f,ctx:l}),t.$set(c);const e={};f&1&&(e.$$scope={dirty:f,ctx:l}),n.$set(e);const $={};f&1&&($.$$scope={dirty:f,ctx:l}),p.$set($)},i(l){a||(w(t.$$.fragment,l),w(n.$$.fragment,l),w(p.$$.fragment,l),a=!0)},o(l){v(t.$$.fragment,l),v(n.$$.fragment,l),v(p.$$.fragment,l),a=!1},d(l){l&&(m(s),m(r)),b(t,l),b(n,l),b(p,l)}}}function X(o){let t,s="Downloads",n,r,p;return r=new j({props:{$$slots:{default:[V]},$$scope:{ctx:o}}}),{c(){t=H("h1"),t.textContent=s,n=x(),_(r.$$.fragment),this.h()},l(a){t=L(a,"H1",{class:!0,"data-svelte-h":!0}),W(t)!=="svelte-1llaf3p"&&(t.textContent=s),n=h(a),g(r.$$.fragment,a),this.h()},h(){O(t,"class","svelte-1l8z8k6")},m(a,l){u(a,t,l),u(a,n,l),d(r,a,l),p=!0},p(a,l){const f={};l&1&&(f.$$scope={dirty:l,ctx:a}),r.$set(f)},i(a){p||(w(r.$$.fragment,a),p=!0)},o(a){v(r.$$.fragment,a),p=!1},d(a){a&&(m(t),m(n)),b(r,a)}}}function Y(o){let t,s;return t=new D({props:{name:"download",$$slots:{default:[X]},$$scope:{ctx:o}}}),{c(){_(t.$$.fragment)},l(n){g(t.$$.fragment,n)},m(n,r){d(t,n,r),s=!0},p(n,[r]){const p={};r&1&&(p.$$scope={dirty:r,ctx:n}),t.$set(p)},i(n){s||(w(t.$$.fragment,n),s=!0)},o(n){v(t.$$.fragment,n),s=!1},d(n){b(t,n)}}}class st extends P{constructor(t){super(),T(this,t,null,Y,B,{})}}export{st as component};
