"use strict";(self.webpackChunksc_user=self.webpackChunksc_user||[]).push([[827,564],{7827:(A,u,d)=>{d.r(u),d.d(u,{DeviceAddComponent:()=>b});var e=d(6689),p=d(6814),c=d(4974),o=d(95),s=d(6565),g=d(9564),l=d(4670);function m(t,i){1&t&&(e.TgZ(0,"span",24),e._uU(1,"*nama dibutuhkan!"),e.qZA())}function _(t,i){1&t&&(e.TgZ(0,"span",24),e._uU(1,"*model dibutuhkan!"),e.qZA())}function y(t,i){1&t&&(e.TgZ(0,"span",24),e._uU(1,"*alamat dibutuhkan!"),e.qZA())}function f(t,i){1&t&&(e.TgZ(0,"span",24),e._uU(1,"*kota dibutuhkan!"),e.qZA())}function v(t,i){1&t&&(e.TgZ(0,"span",24),e._uU(1,"*provinsi dibutuhkan!"),e.qZA())}function h(t,i){1&t&&e._UZ(0,"i",25)}let b=(()=>{class t{constructor(){this.router=(0,e.f3M)(l.F0),this.service=(0,e.f3M)(c.U8),this.notif=(0,e.f3M)(g.g),this.fb=(0,e.f3M)(o.qu),this.rawStatus=s.q,this.status=s.q.initial,this.form=this.fb.group({id:["",[o.kI.required]],model:["",[o.kI.required]],address:["",[o.kI.required]],city:["",[o.kI.required]],province:["",[o.kI.required]]})}get id(){return this.form.get("id")}get model(){return this.form.get("model")}get address(){return this.form.get("address")}get city(){return this.form.get("city")}get province(){return this.form.get("province")}submit(){if(this.form.invalid)return this.form.markAllAsTouched();this.status=s.q.loading,this.service.add(this.formData).subscribe({next:r=>{this.notif.push({message:"Data berhasil ditambahkan",status:"success"}),this.status=s.q.initial,this.back()},error:r=>{this.notif.push({message:"Data gagal ditambahkan",status:"failure"}),console.log(r),this.status=s.q.error}})}back(){this.router.navigateByUrl("/device/list")}get formData(){let r=new FormData;return r.set("id",this.id?.value??""),r.append("model",this.model?.value??""),r.append("address",this.address?.value??""),r.append("city",this.city?.value??""),r.append("province",this.province?.value??""),r.append("longitude",""),r.append("latitude",""),r}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-device-add"]],standalone:!0,features:[e.jDz],decls:48,vars:13,consts:[[1,"bg-white","rounded-lg","shadow","p-8"],[1,"flex","flex-col","gap-5"],[1,"flex","flex-col"],[1,"text-2xl","font-black"],[1,""],[1,"flex","flex-col","w-full","gap-3",3,"formGroup","submit"],[1,"flex","flex-col","focus-within:scale-[102%]","transition-all","duration-200"],["for","id",1,"mb-1"],[1,"flex","flex-row","place-items-center","border-[1px]","md:border-[2px]","2xl:border-[3px]","transition-all","duration-200","rounded-lg",3,"ngClass"],["type","text","placeholder","Masukan ID","formControlName","id","id","id",1,"w-full"],["class","px-3 mt-1 text-red-500 text-sm",4,"ngIf"],["for","model",1,"mb-1"],["type","text","placeholder","Masukan model","formControlName","model","id","model",1,"w-full"],["for","address",1,"mb-1"],["type","text","placeholder","Masukan Alamat","formControlName","address","id","address",1,"w-full"],["for","city",1,"mb-1"],["type","text","placeholder","Masukan Kota","formControlName","city","id","city",1,"w-full"],["for","province",1,"mb-1"],["type","text","placeholder","Masukan Provinsi","formControlName","province","id","province",1,"w-full"],[1,"flex","flex-row","justify-end","gap-3"],["type","button",1,"px-4","py-2","mt-2","rounded-lg","bg-red-500","hover:bg-red-600","text-white","font-bold","hover:scale-[102%]","transition-all","duration-200",3,"click"],[1,"flex","flex-row","justify-center","place-items-center","gap-2"],["type","submit",1,"px-4","py-2","mt-2","rounded-lg","bg-blue-500","hover:bg-blue-600","text-white","font-bold","hover:scale-[102%]","transition-all","duration-200"],["class","fa-solid fa-spinner animate-spin",4,"ngIf"],[1,"px-3","mt-1","text-red-500","text-sm"],[1,"fa-solid","fa-spinner","animate-spin"]],template:function(r,n){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),e._uU(4,"Tambah Perangkat"),e.qZA(),e.TgZ(5,"span",4),e._uU(6,"Masukan data untuk menambahkan Perangkat!"),e.qZA()(),e.TgZ(7,"form",5),e.NdJ("submit",function(){return n.submit()}),e.TgZ(8,"div",6)(9,"label",7),e._uU(10,"ID Perangkat :"),e.qZA(),e.TgZ(11,"div",8),e._UZ(12,"input",9),e.qZA(),e.YNc(13,m,2,0,"span",10),e.qZA(),e.TgZ(14,"div",6)(15,"label",11),e._uU(16,"Model :"),e.qZA(),e.TgZ(17,"div",8),e._UZ(18,"input",12),e.qZA(),e.YNc(19,_,2,0,"span",10),e.qZA(),e.TgZ(20,"div",6)(21,"label",13),e._uU(22,"Alamat :"),e.qZA(),e.TgZ(23,"div",8),e._UZ(24,"input",14),e.qZA(),e.YNc(25,y,2,0,"span",10),e.qZA(),e.TgZ(26,"div",6)(27,"label",15),e._uU(28,"Kota :"),e.qZA(),e.TgZ(29,"div",8),e._UZ(30,"input",16),e.qZA(),e.YNc(31,f,2,0,"span",10),e.qZA(),e.TgZ(32,"div",6)(33,"label",17),e._uU(34,"Provinsi :"),e.qZA(),e.TgZ(35,"div",8),e._UZ(36,"input",18),e.qZA(),e.YNc(37,v,2,0,"span",10),e.qZA(),e.TgZ(38,"div",19)(39,"button",20),e.NdJ("click",function(){return n.back()}),e.TgZ(40,"div",21)(41,"span"),e._uU(42,"BATAL"),e.qZA()()(),e.TgZ(43,"button",22)(44,"div",21),e.YNc(45,h,1,0,"i",23),e.TgZ(46,"span"),e._uU(47),e.qZA()()()()()()()),2&r&&(e.xp6(7),e.Q6J("formGroup",n.form),e.xp6(4),e.Q6J("ngClass",null!=n.id&&n.id.touched&&null!=n.id&&n.id.invalid?"focus-within:border-red-500 border-red-500":"focus-within:border-blue-500 border-gray-400"),e.xp6(2),e.Q6J("ngIf",(null==n.id?null:n.id.touched)&&(null==n.id?null:n.id.invalid)),e.xp6(4),e.Q6J("ngClass",null!=n.model&&n.model.touched&&null!=n.model&&n.model.invalid?"focus-within:border-red-500 border-red-500":"focus-within:border-blue-500 border-gray-400"),e.xp6(2),e.Q6J("ngIf",(null==n.model?null:n.model.touched)&&(null==n.model?null:n.model.invalid)),e.xp6(4),e.Q6J("ngClass",null!=n.address&&n.address.touched&&null!=n.address&&n.address.invalid?"focus-within:border-red-500 border-red-500":"focus-within:border-blue-500 border-gray-400"),e.xp6(2),e.Q6J("ngIf",(null==n.address?null:n.address.touched)&&(null==n.address?null:n.address.invalid)),e.xp6(4),e.Q6J("ngClass",null!=n.city&&n.city.touched&&null!=n.city&&n.city.invalid?"focus-within:border-red-500 border-red-500":"focus-within:border-blue-500 border-gray-400"),e.xp6(2),e.Q6J("ngIf",(null==n.city?null:n.city.touched)&&(null==n.city?null:n.city.invalid)),e.xp6(4),e.Q6J("ngClass",null!=n.province&&n.province.touched&&null!=n.province&&n.province.invalid?"focus-within:border-red-500 border-red-500":"focus-within:border-blue-500 border-gray-400"),e.xp6(2),e.Q6J("ngIf",(null==n.province?null:n.province.touched)&&(null==n.province?null:n.province.invalid)),e.xp6(8),e.Q6J("ngIf",n.status==n.rawStatus.loading),e.xp6(2),e.Oqu(n.status==n.rawStatus.loading?"Mengunggah..":"TAMBAH"))},dependencies:[p.ez,p.mk,p.O5,o.UX,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u]}),t})()},9564:(A,u,d)=>{d.d(u,{g:()=>b});var e=d(5619);const c={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let o;const s=new Uint8Array(16);function g(){if(!o&&(o=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!o))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(s)}const l=[];for(let t=0;t<256;++t)l.push((t+256).toString(16).slice(1));const v=function f(t,i,r){if(c.randomUUID&&!i&&!t)return c.randomUUID();const n=(t=t||{}).random||(t.rng||g)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,i){r=r||0;for(let a=0;a<16;++a)i[r+a]=n[a];return i}return function m(t,i=0){return(l[t[i+0]]+l[t[i+1]]+l[t[i+2]]+l[t[i+3]]+"-"+l[t[i+4]]+l[t[i+5]]+"-"+l[t[i+6]]+l[t[i+7]]+"-"+l[t[i+8]]+l[t[i+9]]+"-"+l[t[i+10]]+l[t[i+11]]+l[t[i+12]]+l[t[i+13]]+l[t[i+14]]+l[t[i+15]]).toLowerCase()}(n)};var h=d(6689);let b=(()=>{class t{constructor(){this.subject=new e.X([]),this.observable=this.subject.asObservable()}push(r){r.id=v();let n=this.subject.getValue();n.push(r),this.subject.next(n),setInterval(()=>this.delete(r.id),3e3)}delete(r){let a=this.subject.getValue().filter(Z=>Z.id!=r);this.subject.next(a)}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=h.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);