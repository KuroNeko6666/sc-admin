"use strict";(self.webpackChunksc_user=self.webpackChunksc_user||[]).push([[564],{9564:(U,l,o)=>{o.d(l,{g:()=>v});var a=o(5619);const s={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let u;const p=new Uint8Array(16);function y(){if(!u&&(u=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!u))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return u(p)}const n=[];for(let t=0;t<256;++t)n.push((t+256).toString(16).slice(1));const g=function h(t,e,i){if(s.randomUUID&&!e&&!t)return s.randomUUID();const r=(t=t||{}).random||(t.rng||y)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){i=i||0;for(let c=0;c<16;++c)e[i+c]=r[c];return e}return function d(t,e=0){return(n[t[e+0]]+n[t[e+1]]+n[t[e+2]]+n[t[e+3]]+"-"+n[t[e+4]]+n[t[e+5]]+"-"+n[t[e+6]]+n[t[e+7]]+"-"+n[t[e+8]]+n[t[e+9]]+"-"+n[t[e+10]]+n[t[e+11]]+n[t[e+12]]+n[t[e+13]]+n[t[e+14]]+n[t[e+15]]).toLowerCase()}(r)};var m=o(6689);let v=(()=>{class t{constructor(){this.subject=new a.X([]),this.observable=this.subject.asObservable()}push(i){i.id=g();let r=this.subject.getValue();r.push(i),this.subject.next(r),setInterval(()=>this.delete(i.id),3e3)}delete(i){let c=this.subject.getValue().filter(b=>b.id!=i);this.subject.next(c)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=m.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);