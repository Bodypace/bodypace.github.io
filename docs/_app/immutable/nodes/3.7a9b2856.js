import{s as oe,f as P,n as ce}from"../chunks/scheduler.63274e7e.js";import{S as me,i as ue,r as pe,u as fe,v as ve,d as de,t as xe,w as ge,g as i,s as c,h as n,y as p,c as m,k as r,a as s,f as l}from"../chunks/index.68aec61d.js";import{P as he}from"../chunks/page.19cdb7d4.js";function _e(R){let a,w="Development",o,u,L="Bodypace is open-source, feel free to contribute or copy it",T,f,V=`Source code is on <a href="https://github.com/Bodypace">GitHub</a>. Everything is under
        <a href="https://choosealicense.com/licenses/apache-2.0/" target="_blank">Apache License 2.0</a>.`,B,v,N=`I (<a href="https://robert-dorna.github.io" target="_blank">Robert Dorna</a>) do this project for learning purposes (fullstack development), but wish
        for something like this to exist. Therefore, anyone can support me by contributing to Bodypace or coping its features. I don&#39;t guarantee this project to
        be developed long term as I would like to join a company that needs software engineers in healthtech, and that could create a conflict of interests
        forcing me to stop developing Bodypace.`,j,d,Q=`Here are links useful for contributors:
        <a href="https://www.figma.com/file/8MHd4BSbKtJgd2iLiF6zd1/Main-Design?node-id=0%3A1">User interface design</a>,
        <a href="https://github.com/orgs/Bodypace/projects/1">Project Board</a> <a href="https://postman.com/bodypace ">Online account server API</a>.`,A,x,W="More stuff will be added later, e.g. mobile app development builds (created with Expo EAS).",G,g,X="Below paragraphs are unfinished, a lot of staff is missing.",S,h,Y="Vague set of integrations & functions that need to be developed",q,_,Z=`<li class="svelte-1m9x24f"><b class="svelte-1m9x24f">devices/IoT</b>: smartphones, smart homes, smart watches, smart clothes, smart fridges, kitchen robots, air quality sensors, weighing scales,
            kitchen scales, computers, light sensors, blood pressure guagues, cameras,...</li> <li class="svelte-1m9x24f"><b class="svelte-1m9x24f">diet</b>: water and food intake, calories, macros, microelements, superfoods, diet plans, products, recepies, shops, delivery,...</li> <li class="svelte-1m9x24f"><b class="svelte-1m9x24f">exercises</b>: personal plans, stretching, yoga, cardio, sports, runninng, walks, weights lifting, pulse, breathing, posture,...</li> <li class="svelte-1m9x24f"><b class="svelte-1m9x24f">medications</b>: drugs, supplements, prescriptions, accessories, guides,...</li> <li class="svelte-1m9x24f"><b class="svelte-1m9x24f">tests</b>: blood work, x-rays, tomographies, doctor assesments, dna sequencing, self reported mood, energy levels etc.,...</li> <li class="svelte-1m9x24f"><b class="svelte-1m9x24f">doctor</b>: scheduling visits, managing treatments, sharing data with doctors, accessing their treatmans plans,...</li> <li class="svelte-1m9x24f"><b class="svelte-1m9x24f">AI doctor</b>:</li> <li class="svelte-1m9x24f">and more...</li>`,D,b,ee="Architecture",E,H,te,U,C,se="Currnet database structure",z,M,le,F,y,ae="Planned database evolution",J,$,ie,K,k,ne,O,I,re;return{c(){a=i("h1"),a.textContent=w,o=c(),u=i("h2"),u.textContent=L,T=c(),f=i("p"),f.innerHTML=V,B=c(),v=i("p"),v.innerHTML=N,j=c(),d=i("p"),d.innerHTML=Q,A=c(),x=i("p"),x.textContent=W,G=c(),g=i("p"),g.textContent=X,S=c(),h=i("h2"),h.textContent=Y,q=c(),_=i("ul"),_.innerHTML=Z,D=c(),b=i("h2"),b.textContent=ee,E=c(),H=i("img"),U=c(),C=i("h3"),C.textContent=se,z=c(),M=i("img"),F=c(),y=i("h3"),y.textContent=ae,J=c(),$=i("img"),K=c(),k=i("img"),O=c(),I=i("img"),this.h()},l(e){a=n(e,"H1",{class:!0,"data-svelte-h":!0}),p(a)!=="svelte-13jou19"&&(a.textContent=w),o=m(e),u=n(e,"H2",{class:!0,"data-svelte-h":!0}),p(u)!=="svelte-1xb60vg"&&(u.textContent=L),T=m(e),f=n(e,"P",{class:!0,"data-svelte-h":!0}),p(f)!=="svelte-dc15n3"&&(f.innerHTML=V),B=m(e),v=n(e,"P",{class:!0,"data-svelte-h":!0}),p(v)!=="svelte-1n5ld7s"&&(v.innerHTML=N),j=m(e),d=n(e,"P",{class:!0,"data-svelte-h":!0}),p(d)!=="svelte-tkpda2"&&(d.innerHTML=Q),A=m(e),x=n(e,"P",{class:!0,"data-svelte-h":!0}),p(x)!=="svelte-99me68"&&(x.textContent=W),G=m(e),g=n(e,"P",{class:!0,"data-svelte-h":!0}),p(g)!=="svelte-rpovhr"&&(g.textContent=X),S=m(e),h=n(e,"H2",{class:!0,"data-svelte-h":!0}),p(h)!=="svelte-sx9rrg"&&(h.textContent=Y),q=m(e),_=n(e,"UL",{class:!0,"data-svelte-h":!0}),p(_)!=="svelte-1t9bxn2"&&(_.innerHTML=Z),D=m(e),b=n(e,"H2",{class:!0,"data-svelte-h":!0}),p(b)!=="svelte-1s9yvrp"&&(b.textContent=ee),E=m(e),H=n(e,"IMG",{src:!0}),U=m(e),C=n(e,"H3",{class:!0,"data-svelte-h":!0}),p(C)!=="svelte-1e0m3g1"&&(C.textContent=se),z=m(e),M=n(e,"IMG",{src:!0}),F=m(e),y=n(e,"H3",{class:!0,"data-svelte-h":!0}),p(y)!=="svelte-1dhrca"&&(y.textContent=ae),J=m(e),$=n(e,"IMG",{src:!0}),K=m(e),k=n(e,"IMG",{src:!0}),O=m(e),I=n(e,"IMG",{src:!0}),this.h()},h(){r(a,"class","svelte-1m9x24f"),r(u,"class","svelte-1m9x24f"),r(f,"class","svelte-1m9x24f"),r(v,"class","note svelte-1m9x24f"),r(d,"class","svelte-1m9x24f"),r(x,"class","note svelte-1m9x24f"),r(g,"class","note warning svelte-1m9x24f"),r(h,"class","svelte-1m9x24f"),r(_,"class","svelte-1m9x24f"),r(b,"class","svelte-1m9x24f"),P(H.src,te="diagrams/architecture.png")||r(H,"src",te),r(C,"class","svelte-1m9x24f"),P(M.src,le="diagrams/database.alpha.png")||r(M,"src",le),r(y,"class","svelte-1m9x24f"),P($.src,ie="diagrams/database.v0.png")||r($,"src",ie),P(k.src,ne="diagrams/database.v1.png")||r(k,"src",ne),P(I.src,re="diagrams/database.target.png")||r(I,"src",re)},m(e,t){s(e,a,t),s(e,o,t),s(e,u,t),s(e,T,t),s(e,f,t),s(e,B,t),s(e,v,t),s(e,j,t),s(e,d,t),s(e,A,t),s(e,x,t),s(e,G,t),s(e,g,t),s(e,S,t),s(e,h,t),s(e,q,t),s(e,_,t),s(e,D,t),s(e,b,t),s(e,E,t),s(e,H,t),s(e,U,t),s(e,C,t),s(e,z,t),s(e,M,t),s(e,F,t),s(e,y,t),s(e,J,t),s(e,$,t),s(e,K,t),s(e,k,t),s(e,O,t),s(e,I,t)},p:ce,d(e){e&&(l(a),l(o),l(u),l(T),l(f),l(B),l(v),l(j),l(d),l(A),l(x),l(G),l(g),l(S),l(h),l(q),l(_),l(D),l(b),l(E),l(H),l(U),l(C),l(z),l(M),l(F),l(y),l(J),l($),l(K),l(k),l(O),l(I))}}}function be(R){let a,w;return a=new he({props:{name:"development",$$slots:{default:[_e]},$$scope:{ctx:R}}}),{c(){pe(a.$$.fragment)},l(o){fe(a.$$.fragment,o)},m(o,u){ve(a,o,u),w=!0},p(o,[u]){const L={};u&1&&(L.$$scope={dirty:u,ctx:o}),a.$set(L)},i(o){w||(de(a.$$.fragment,o),w=!0)},o(o){xe(a.$$.fragment,o),w=!1},d(o){ge(a,o)}}}class He extends me{constructor(a){super(),ue(this,a,null,be,oe,{})}}export{He as component};
