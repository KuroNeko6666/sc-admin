"use strict";(self.webpackChunksc_user=self.webpackChunksc_user||[]).push([[128,564],{8128:(A,d,o)=>{o.r(d),o.d(d,{UserAddComponent:()=>t});var e=o(6689),m=o(6814),l=o(95),u=o(6565),c=o(9564),g=o(4670),i=o(3934);function p(a,r){1&a&&(e.TgZ(0,"span",26),e._uU(1,"*nama dibutuhkan!"),e.qZA())}function U(a,r){1&a&&(e.TgZ(0,"span",26),e._uU(1,"*username dibutuhkan!"),e.qZA())}function w(a,r){1&a&&(e.TgZ(0,"span",26),e._uU(1,"*email dibutuhkan!"),e.qZA())}function h(a,r){1&a&&e._UZ(0,"i",27)}function _(a,r){1&a&&e._UZ(0,"i",28)}function b(a,r){1&a&&(e.TgZ(0,"span",26),e._uU(1,"*kata sandi dibutuhkan!"),e.qZA())}function v(a,r){1&a&&e._UZ(0,"i",29)}let t=(()=>{class a{constructor(){this.service=(0,e.f3M)(i.W),this.notif=(0,e.f3M)(c.g),this.router=(0,e.f3M)(g.F0),this.fb=(0,e.f3M)(l.qu),this.rawStatus=u.q,this.status=u.q.initial,this.isPassword=!0,this.form=this.fb.group({name:["",[l.kI.required]],username:["",[l.kI.required]],email:["",[l.kI.required,l.kI.required]],password:["",[l.kI.required,l.kI.minLength(8)]]})}get name(){return this.form.get("name")}get username(){return this.form.get("username")}get email(){return this.form.get("email")}get password(){return this.form.get("password")}submit(){if(this.form.invalid)return this.form.markAllAsTouched();this.status=u.q.loading,this.service.add(this.formData).subscribe({next:s=>{this.notif.push({message:"Data berhasil ditambahkan",status:"success"}),this.status=u.q.initial,this.router.navigateByUrl("/user/list")},error:s=>{this.notif.push({message:"Data gagal ditambahkan",status:"failure"}),console.log(s),this.status=u.q.error}})}back(){this.router.navigateByUrl("/user/list")}get formData(){let s=new FormData;return s.set("name",this.name?.value??""),s.append("username",this.username?.value??""),s.append("email",this.email?.value??""),s.append("password",this.password?.value??""),s}}return a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-user-add"]],standalone:!0,features:[e.jDz],decls:45,vars:14,consts:[[1,"bg-white","rounded-lg","shadow","p-8"],[1,"flex","flex-col","gap-5"],[1,"flex","flex-col"],[1,"text-2xl","font-black"],[1,""],[1,"flex","flex-col","w-full","gap-3",3,"formGroup","submit"],[1,"flex","flex-col","focus-within:scale-[102%]","transition-all","duration-200"],["for","name",1,"mb-1"],[1,"flex","flex-row","place-items-center","border-[1px]","md:border-[2px]","2xl:border-[3px]","transition-all","duration-200","rounded-lg",3,"ngClass"],["type","text","placeholder","Masukan name","formControlName","name","id","name",1,"w-full"],["class","px-3 mt-1 text-red-500 text-sm",4,"ngIf"],["for","username",1,"mb-1"],["type","text","placeholder","Masukan username","formControlName","username","id","username",1,"w-full"],["for","email",1,"mb-1"],["type","text","placeholder","Masukan Email","formControlName","email","id","email",1,"w-full"],["for","password",1,"mb-1"],[1,"flex","flex-row","place-items-center","justify-center","border-[1px]","md:border-[2px]","2xl:border-[3px]","transition-all","duration-200","rounded-lg",3,"ngClass"],["placeholder","Masukan Kata Sandi","formControlName","password","id","password",1,"flex-1",3,"type"],["type","button",1,"w-fit","hover:text-blue-500","px-3","py-2",3,"click"],["class","fa-solid fa-eye",4,"ngIf"],["class","fa-solid fa-eye-slash",4,"ngIf"],[1,"flex","flex-row","justify-end","gap-3"],["type","button",1,"px-4","py-2","mt-2","rounded-lg","bg-red-500","hover:bg-red-600","text-white","font-bold","hover:scale-[102%]","transition-all","duration-200",3,"click"],[1,"flex","flex-row","justify-center","place-items-center","gap-2"],["type","submit",1,"px-4","py-2","mt-2","rounded-lg","bg-blue-500","hover:bg-blue-600","text-white","font-bold","hover:scale-[102%]","transition-all","duration-200"],["class","fa-solid fa-spinner animate-spin",4,"ngIf"],[1,"px-3","mt-1","text-red-500","text-sm"],[1,"fa-solid","fa-eye"],[1,"fa-solid","fa-eye-slash"],[1,"fa-solid","fa-spinner","animate-spin"]],template:function(s,n){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),e._uU(4,"Tambah Pengguna"),e.qZA(),e.TgZ(5,"span",4),e._uU(6,"Masukan data untuk menambahkan Pengguna!"),e.qZA()(),e.TgZ(7,"form",5),e.NdJ("submit",function(){return n.submit()}),e.TgZ(8,"div",6)(9,"label",7),e._uU(10,"Nama :"),e.qZA(),e.TgZ(11,"div",8),e._UZ(12,"input",9),e.qZA(),e.YNc(13,p,2,0,"span",10),e.qZA(),e.TgZ(14,"div",6)(15,"label",11),e._uU(16,"username :"),e.qZA(),e.TgZ(17,"div",8),e._UZ(18,"input",12),e.qZA(),e.YNc(19,U,2,0,"span",10),e.qZA(),e.TgZ(20,"div",6)(21,"label",13),e._uU(22,"Email :"),e.qZA(),e.TgZ(23,"div",8),e._UZ(24,"input",14),e.qZA(),e.YNc(25,w,2,0,"span",10),e.qZA(),e.TgZ(26,"div",6)(27,"label",15),e._uU(28,"Kata Sandi :"),e.qZA(),e.TgZ(29,"div",16),e._UZ(30,"input",17),e.TgZ(31,"button",18),e.NdJ("click",function(){return n.isPassword=!n.isPassword}),e.YNc(32,h,1,0,"i",19),e.YNc(33,_,1,0,"i",20),e.qZA()(),e.YNc(34,b,2,0,"span",10),e.qZA(),e.TgZ(35,"div",21)(36,"button",22),e.NdJ("click",function(){return n.back()}),e.TgZ(37,"div",23)(38,"span"),e._uU(39,"BATAL"),e.qZA()()(),e.TgZ(40,"button",24)(41,"div",23),e.YNc(42,v,1,0,"i",25),e.TgZ(43,"span"),e._uU(44),e.qZA()()()()()()()),2&s&&(e.xp6(7),e.Q6J("formGroup",n.form),e.xp6(4),e.Q6J("ngClass",null!=n.name&&n.name.touched&&null!=n.name&&n.name.invalid?"focus-within:border-red-500 border-red-500":"focus-within:border-blue-500 border-gray-400"),e.xp6(2),e.Q6J("ngIf",(null==n.name?null:n.name.touched)&&(null==n.name?null:n.name.invalid)),e.xp6(4),e.Q6J("ngClass",null!=n.username&&n.username.touched&&null!=n.username&&n.username.invalid?"focus-within:border-red-500 border-red-500":"focus-within:border-blue-500 border-gray-400"),e.xp6(2),e.Q6J("ngIf",(null==n.username?null:n.username.touched)&&(null==n.username?null:n.username.invalid)),e.xp6(4),e.Q6J("ngClass",null!=n.email&&n.email.touched&&null!=n.email&&n.email.invalid?"focus-within:border-red-500 border-red-500":"focus-within:border-blue-500 border-gray-400"),e.xp6(2),e.Q6J("ngIf",(null==n.email?null:n.email.touched)&&(null==n.email?null:n.email.invalid)),e.xp6(4),e.Q6J("ngClass",null!=n.password&&n.password.touched&&null!=n.password&&n.password.invalid?"focus-within:border-red-500 border-red-500":"focus-within:border-blue-500 border-gray-400"),e.xp6(1),e.Q6J("type",n.isPassword?"password":"text"),e.xp6(2),e.Q6J("ngIf",n.isPassword),e.xp6(1),e.Q6J("ngIf",!n.isPassword),e.xp6(1),e.Q6J("ngIf",(null==n.password?null:n.password.touched)&&(null==n.password?null:n.password.invalid)),e.xp6(8),e.Q6J("ngIf",n.status==n.rawStatus.loading),e.xp6(2),e.Oqu(n.status==n.rawStatus.loading?"Mengunggah..":"TAMBAH"))},dependencies:[m.ez,m.mk,m.O5,l.UX,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u]}),a})()},9564:(A,d,o)=>{o.d(d,{g:()=>v});var e=o(5619);const l={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let u;const c=new Uint8Array(16);function g(){if(!u&&(u=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!u))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return u(c)}const i=[];for(let t=0;t<256;++t)i.push((t+256).toString(16).slice(1));const _=function h(t,a,r){if(l.randomUUID&&!a&&!t)return l.randomUUID();const s=(t=t||{}).random||(t.rng||g)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,a){r=r||0;for(let n=0;n<16;++n)a[r+n]=s[n];return a}return function p(t,a=0){return(i[t[a+0]]+i[t[a+1]]+i[t[a+2]]+i[t[a+3]]+"-"+i[t[a+4]]+i[t[a+5]]+"-"+i[t[a+6]]+i[t[a+7]]+"-"+i[t[a+8]]+i[t[a+9]]+"-"+i[t[a+10]]+i[t[a+11]]+i[t[a+12]]+i[t[a+13]]+i[t[a+14]]+i[t[a+15]]).toLowerCase()}(s)};var b=o(6689);let v=(()=>{class t{constructor(){this.subject=new e.X([]),this.observable=this.subject.asObservable()}push(r){r.id=_();let s=this.subject.getValue();s.push(r),this.subject.next(s),setInterval(()=>this.delete(r.id),3e3)}delete(r){let n=this.subject.getValue().filter(f=>f.id!=r);this.subject.next(n)}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=b.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);