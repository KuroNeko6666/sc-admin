"use strict";(self.webpackChunksc_user=self.webpackChunksc_user||[]).push([[302,564],{9302:(O,m,l)=>{l.r(m),l.d(m,{OrderListComponent:()=>u});var t=l(6689),_=l(6814),h=l(9862),g=l(95),v=l(4670),p=l(6565),a=l(9564),f=l(3061);function U(i,o){if(1&i){const n=t.EpF();t.TgZ(0,"td",15)(1,"button",16),t.NdJ("click",function(){t.CHM(n);const d=t.oxw().$implicit,c=t.oxw();return t.KtG(c.changeStatus(d.id,"rejected"))}),t.TgZ(2,"span"),t._uU(3,"TOLAK"),t.qZA()(),t.TgZ(4,"button",17),t.NdJ("click",function(){t.CHM(n);const d=t.oxw().$implicit,c=t.oxw();return t.KtG(c.changeStatus(d.id,"accepted"))}),t.TgZ(5,"span"),t._uU(6,"TERIMA"),t.qZA()()()}}function y(i,o){if(1&i&&(t.TgZ(0,"td",15)(1,"div",18)(2,"span"),t._uU(3),t.qZA()()()),2&i){const n=t.oxw().$implicit;t.xp6(3),t.Oqu("accepted"==n.status?"DITERIMA":"DITOLAK")}}const x=function(i){return{"bg-blue-100":i}};function b(i,o){if(1&i){const n=t.EpF();t.ynx(0),t.TgZ(1,"tr",12)(2,"td",7),t._uU(3),t.qZA(),t.TgZ(4,"td",7),t._uU(5),t.qZA(),t.TgZ(6,"td",7),t._uU(7),t.qZA(),t.TgZ(8,"td",7),t._uU(9),t.qZA(),t.TgZ(10,"td",7)(11,"button",13),t.NdJ("click",function(){const c=t.CHM(n).$implicit,A=t.oxw();return t.KtG(A.detail(c.id))}),t._uU(12,"Detail"),t.qZA()(),t.YNc(13,U,7,0,"td",14),t.YNc(14,y,4,1,"td",14),t.qZA(),t.BQk()}if(2&i){const n=o.$implicit,s=o.index;t.xp6(1),t.Q6J("ngClass",t.VKq(7,x,s%2!=0)),t.xp6(2),t.Oqu(n.id),t.xp6(2),t.Oqu(n.items.length),t.xp6(2),t.Oqu(n.user.username),t.xp6(2),t.Oqu(n.status),t.xp6(4),t.Q6J("ngIf","waiting"==n.status),t.xp6(1),t.Q6J("ngIf","waiting"!=n.status)}}function Z(i,o){1&i&&(t.TgZ(0,"tr")(1,"td",19),t._uU(2," No Device "),t.qZA()())}function T(i,o){1&i&&(t.TgZ(0,"tr")(1,"td",19),t._UZ(2,"i",20),t.qZA()())}function e(i,o){1&i&&(t.TgZ(0,"button",21),t._UZ(1,"i",22),t.qZA())}function r(i,o){1&i&&(t.TgZ(0,"button",21),t._UZ(1,"i",23),t.qZA())}let u=(()=>{class i{constructor(){this.service=(0,t.f3M)(f.p),this.notif=(0,t.f3M)(a.g),this.router=(0,t.f3M)(v.F0),this.form=new g.NI(""),this.status=p.q.initial,this.rawStatus=p.q,this.dataParams={page:1,limit:10,search:""}}ngOnInit(){this.read(),this.form.valueChanges.subscribe(n=>this.search(n))}changePage(n){switch(n){case p.u.increment:this.dataParams.page+=1;break;case p.u.decrement:this.dataParams.page-=1}this.read()}changeStatus(n,s){var d=new FormData;d.set("status",s),this.service.change(n,d).subscribe({next:c=>{this.notif.push({message:"Berhasil update status!",status:"success"}),this.read()},error:c=>{console.log(c),this.notif.push({message:"Gagal update status!",status:"success"})}})}detail(n){this.router.navigateByUrl("/order/detail/"+n)}limitChange(n){this.dataParams.limit=n,this.read()}search(n){this.dataParams.search=n??"",this.read()}read(){this.status=p.q.loading,this.service.read(this.params).subscribe({next:n=>{this.devices=n,this.status=p.q.initial},error:n=>{this.devices=void 0,this.status=p.q.error}})}get params(){return(new h.LE).set("page",this.dataParams.page??1).append("limit",this.dataParams.limit??10).append("search",this.dataParams.search??"")}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-order-list"]],standalone:!0,features:[t.jDz],decls:31,vars:7,consts:[[1,"bg-white","shadow","rounded-lg","p-5"],[1,"flex","flex-col","gap-5","overflow-x-auto"],[1,"flex","flex-row","justify-between","place-items-center"],[1,"font-bold","text-lg"],[1,"flex","flex-row","justify-end","place-items-center","gap-3"],["type","text","placeholder","Search",1,"focus:outline-none","focus:ring-0","focus:border-none","border-none","bg-gray-100","rounded",3,"formControl"],[1,"text-left","bg-blue-500","text-white"],[1,"px-4","py-2"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"flex","flex-row","place-items-center","gap-3"],["class","px-3 py-2 bg-gray-100 text-gray-400 hover:bg-blue-500 hover:text-white rounded",4,"ngIf"],[3,"ngClass"],[1,"px-4","py-2","rounded-lg","bg-blue-500","text-white","hover:bg-blue-600",3,"click"],["class","px-4 py-2 flex flex-row gap-2",4,"ngIf"],[1,"px-4","py-2","flex","flex-row","gap-2"],[1,"px-4","py-2","rounded-lg","bg-red-500","text-white","hover:bg-red-600",3,"click"],[1,"px-4","py-2","rounded-lg","bg-green-500","text-white","hover:bg-green-600",3,"click"],[1,"px-4","py-2","rounded-lg","bg-gray-500","text-white"],["colspan","6",1,"text-center","font-bold","px-4","py-2"],[1,"fa-solid","fa-spinner","animate-spin","text-xl"],[1,"px-3","py-2","bg-gray-100","text-gray-400","hover:bg-blue-500","hover:text-white","rounded"],[1,"fa-solid","fa-chevron-left","text-sm"],[1,"fa-solid","fa-chevron-right","text-sm"]],template:function(n,s){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._uU(4,"Tabel Daftar Perangkat"),t.qZA(),t.TgZ(5,"div",4),t._UZ(6,"input",5),t.qZA()(),t.TgZ(7,"table")(8,"thead",6)(9,"th",7),t._uU(10,"ID"),t.qZA(),t.TgZ(11,"th",7),t._uU(12,"Total Item"),t.qZA(),t.TgZ(13,"th",7),t._uU(14,"User"),t.qZA(),t.TgZ(15,"th",7),t._uU(16,"Status"),t.qZA(),t.TgZ(17,"th",7),t._uU(18,"Detail"),t.qZA(),t.TgZ(19,"th",7),t._uU(20,"Aksi"),t.qZA()(),t.TgZ(21,"tbody"),t.YNc(22,b,15,9,"ng-container",8),t.YNc(23,Z,3,0,"tr",9),t.YNc(24,T,3,0,"tr",9),t.qZA()(),t.TgZ(25,"div",10)(26,"div",10),t.YNc(27,e,2,0,"button",11),t.TgZ(28,"span"),t._uU(29),t.qZA(),t.YNc(30,r,2,0,"button",11),t.qZA()()()()),2&n){let d,c;t.xp6(6),t.Q6J("formControl",s.form),t.xp6(16),t.Q6J("ngForOf",null==s.devices?null:s.devices.data),t.xp6(1),t.Q6J("ngIf",0==(null==s.devices||null==s.devices.data?null:s.devices.data.length)),t.xp6(1),t.Q6J("ngIf",s.status==s.rawStatus.loading),t.xp6(3),t.Q6J("ngIf",(null!==(d=null==s.devices?null:s.devices.page)&&void 0!==d?d:0)>1),t.xp6(2),t.Oqu("page "+(null==s.devices?null:s.devices.page)+" of "+(null==s.devices?null:s.devices.total)),t.xp6(1),t.Q6J("ngIf",(null!==(c=null==s.devices?null:s.devices.page)&&void 0!==c?c:0)<(null!==(c=null==s.devices?null:s.devices.total)&&void 0!==c?c:0))}},dependencies:[_.ez,_.mk,_.sg,_.O5,g.UX,g.Fj,g.JJ,g.oH]}),i})()},9564:(O,m,l)=>{l.d(m,{g:()=>T});var t=l(5619);const h={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let g;const v=new Uint8Array(16);function p(){if(!g&&(g=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!g))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(v)}const a=[];for(let e=0;e<256;++e)a.push((e+256).toString(16).slice(1));const b=function x(e,r,u){if(h.randomUUID&&!r&&!e)return h.randomUUID();const i=(e=e||{}).random||(e.rng||p)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,r){u=u||0;for(let o=0;o<16;++o)r[u+o]=i[o];return r}return function f(e,r=0){return(a[e[r+0]]+a[e[r+1]]+a[e[r+2]]+a[e[r+3]]+"-"+a[e[r+4]]+a[e[r+5]]+"-"+a[e[r+6]]+a[e[r+7]]+"-"+a[e[r+8]]+a[e[r+9]]+"-"+a[e[r+10]]+a[e[r+11]]+a[e[r+12]]+a[e[r+13]]+a[e[r+14]]+a[e[r+15]]).toLowerCase()}(i)};var Z=l(6689);let T=(()=>{class e{constructor(){this.subject=new t.X([]),this.observable=this.subject.asObservable()}push(u){u.id=b();let i=this.subject.getValue();i.push(u),this.subject.next(i),setInterval(()=>this.delete(u.id),3e3)}delete(u){let o=this.subject.getValue().filter(n=>n.id!=u);this.subject.next(o)}}return e.\u0275fac=function(u){return new(u||e)},e.\u0275prov=Z.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);