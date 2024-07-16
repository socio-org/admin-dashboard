import{m as we,n as Se,o as Ie,s as V,t as $}from"./chunk-IDIHL34E.js";import{k as ye}from"./chunk-VQLN5L43.js";import"./chunk-SPAENXNA.js";import"./chunk-PNXLNXIJ.js";import{K as Ce,d as ue,i as ve,l as ge,p as xe,t as be,y as _e}from"./chunk-ZNJP46NK.js";import{Y as A,_ as he,ca as B}from"./chunk-JKH6IC3B.js";import"./chunk-RHQNXFNL.js";import{Ab as oe,Ac as de,Bb as P,Cb as m,Db as f,Eb as C,Ga as a,H as Y,Ha as u,Hc as pe,Ic as R,J as Z,Jb as w,Jc as O,Kb as ae,Kc as T,Lb as S,Qc as fe,Rb as le,T as D,Tb as me,U as h,Vb as G,W as ee,Ya as g,Z as y,_a as c,_b as j,aa as b,ea as _,ib as r,jb as o,jc as L,k as E,kb as p,kc as ce,l as N,lb as I,ma as Q,mb as F,na as U,nb as te,ob as ie,oc as se,rb as W,t as K,tb as q,u as M,x as X,yb as ne,zb as re}from"./chunk-EB4VH77H.js";var x=(()=>{let e=class e{constructor(i){this._httpClient=i,this._family=new N(null),this._families=new N(null)}get families$(){return this._families.asObservable()}get family$(){return this._family.asObservable()}getFamilies(i){return this._httpClient.get("api/apps/family").pipe(ee(n=>{this._families.next(n)}))}getFamilyById(i){return this._families.pipe(Z(1),X(n=>{let l=n.find(d=>d.id===i)||null;return this._family.next(l),l}),D(n=>n?K(n):M("Could not found the family with id of "+i+"!")))}};e.\u0275fac=function(n){return new(n||e)(b(de))},e.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Oe=["matDrawer"],Te=t=>({family:t}),Ae=t=>["./",t];function Be(t,e){t&1&&te(0)}function Ve(t,e){if(t&1&&(I(0),g(1,Be,1,0,"ng-container",21),F()),t&2){let s=e.$implicit;q(3);let i=P(18);a(),c("ngTemplateOutlet",i)("ngTemplateOutletContext",S(2,Te,s))}}function $e(t,e){if(t&1&&(r(0,"div")(1,"div",18)(2,"div",19),m(3),o(),r(4,"div",20),g(5,Ve,2,4,"ng-container",17),o()()()),t&2){let s=e.$implicit;a(3),C(" ",s.key," "),a(2),c("ngForOf",s.value)}}function ze(t,e){if(t&1&&(I(0),g(1,$e,6,2,"div",17),le(2,"groupBy"),F()),t&2){let s=q();a(),c("ngForOf",me(2,1,s.families,"divisionId"))}}function Ne(t,e){if(t&1&&(r(0,"div",22)(1,"div",23)(2,"div",24),m(3),o(),r(4,"div",25),m(5),o()(),r(6,"div",26),p(7,"img",27),o(),r(8,"div",28)(9,"div",23)(10,"div",29)(11,"div",30),m(12),o(),r(13,"div",31),m(14),o()()(),r(15,"div",32)(16,"button",33),p(17,"mat-icon",34),o(),r(18,"button",33),p(19,"mat-icon",34),o(),r(20,"button",35),m(21," Details "),o()()()()),t&2){let s=e.family;a(3),C("#",s.uid,""),a(2),f(s.divisionId),a(7),C(" ",s.name," "),a(2),f(s.address),a(3),c("svgIcon","feather:phone"),a(2),c("svgIcon","feather:navigation"),a(),c("routerLink",S(7,Ae,s.id))}}function Qe(t,e){t&1&&(r(0,"div",36),p(1,"mat-icon",37),r(2,"div",38),m(3,"There are no items!"),o()()),t&2&&(a(),c("svgIcon","iconsmind:file_hide"))}var z=(()=>{let e=class e{constructor(i,n,l,d,v){this._activatedRoute=i,this._changeDetectorRef=n,this._router=l,this._fileManagerService=d,this._fuseMediaWatcherService=v,this._unsubscribeAll=new E,this.searchInputControl=new be}ngOnInit(){this._fileManagerService.families$.pipe(h(this._unsubscribeAll)).subscribe(i=>{this.families=i,this._changeDetectorRef.markForCheck()}),this._fileManagerService.family$.pipe(h(this._unsubscribeAll)).subscribe(i=>{this.selectedFamily=i,this._changeDetectorRef.markForCheck()}),this._fuseMediaWatcherService.onMediaQueryChange$("(min-width: 1440px)").pipe(h(this._unsubscribeAll)).subscribe(i=>{this.drawerMode=i.matches?"side":"over",this._changeDetectorRef.markForCheck()}),this.searchInputControl.valueChanges.pipe(h(this._unsubscribeAll),D(i=>this._fileManagerService.getFamilies(i))).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}onBackdropClicked(){this._router.navigate(["./"],{relativeTo:this._activatedRoute}),this._changeDetectorRef.markForCheck()}trackByFn(i,n){return n.id||i}addFamily(){alert("Add new family")}};e.\u0275fac=function(n){return new(n||e)(u(pe),u(j),u(O),u(x),u(ye))},e.\u0275cmp=_({type:e,selectors:[["app-family-list"]],viewQuery:function(n,l){if(n&1&&ne(Oe,7),n&2){let d;re(d=oe())&&(l.matDrawer=d.first)}},standalone:!0,features:[w],decls:21,vars:12,consts:[["matDrawer",""],["familyTemplate",""],["noItems",""],[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden"],[1,"flex-auto","h-full","bg-card","dark:bg-transparent",3,"backdropClick"],[1,"w-full","sm:w-100","dark:bg-gray-900",3,"disableClose","mode","opened","position"],[1,"flex","flex-col","bg-gray-100","dark:bg-transparent"],[1,"flex","flex-col","flex-auto"],[1,"flex","items-center","mt-4","sm:mt-0","md:mt-4"],[1,"flex-auto"],[1,"fuse-mat-dense","fuse-mat-no-subscript","w-full","min-w-50"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","formControl","placeholder"],["mat-flat-button","",1,"ml-4",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[4,"ngIf","ngIfElse"],[4,"ngFor","ngForOf"],[1,"p-6","md:p-8"],[1,"z-10","sticky","top-0","-mt-px","p-6","py-1","md:px-8","border-t","border-b","font-medium","uppercase","text-secondary","bg-gray-50","dark:bg-gray-900"],[1,"grid","grid-cols-1","sm:grid-cols-1","md:grid-cols-3","lg:grid-cols-3","gap-2","w-full","min-w-0"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"flex","flex-col","flex-auto","m-2","px-4","pt-4","shadow","rounded-2xl","cursor-pointer","bg-card","overflow-hidden"],[1,"flex","justify-between"],[1,"text-hint"],[1,"text-md"],[1,"row"],["alt","Family","src","assets/images/profile/family-mock.webp",1,"object-cover"],[1,"mx-8","mt-4","mb-2"],[1,"flex","flex-col"],[1,"text-2xl","font-semibold","leading-tight","mt-1"],[1,"text-secondary","text-md"],[1,"flex","items-center","mt-4","space-x-4"],["mat-stroked-button","","type","button",1,"flex-auto"],[1,"icon-size-5",3,"svgIcon"],["mat-stroked-button","","type","button",1,"flex-auto","mat-primary",3,"routerLink"],[1,"flex","flex-auto","flex-col","items-center","justify-center","bg-gray-100","dark:bg-transparent"],[1,"icon-size-24",3,"svgIcon"],[1,"mt-4","text-2xl","font-semibold","tracking-tight","text-secondary"]],template:function(n,l){if(n&1){let d=ie();r(0,"div",3)(1,"mat-drawer-container",4),W("backdropClick",function(){return Q(d),U(l.onBackdropClicked())}),r(2,"mat-drawer",5,0),p(4,"router-outlet"),o(),r(5,"mat-drawer-content",6)(6,"div",7)(7,"div",8)(8,"div",9)(9,"mat-form-field",10),p(10,"mat-icon",11)(11,"input",12),o()(),r(12,"button",13),W("click",function(){return Q(d),U(l.addFamily())}),p(13,"mat-icon",14),r(14,"span",15),m(15,"Add"),o()()(),g(16,ze,3,4,"ng-container",16)(17,Ne,22,9,"ng-template",null,1,G)(19,Qe,4,1,"ng-template",null,2,G),o()()()()}if(n&2){let d=P(20);a(2),c("disableClose",!0)("mode",l.drawerMode)("opened",!1)("position","end"),a(8),c("svgIcon","heroicons_solid:search"),a(),c("autocomplete","off")("formControl",l.searchInputControl)("placeholder","Search families"),a(),c("color","primary"),a(),c("svgIcon","heroicons_outline:plus"),a(3),c("ngIf",l.families&&l.families.length&&l.families.length>0)("ngIfElse",d)}},dependencies:[V,A,ve,ue,B,Ce,Se,Ie,we,$,R,T,L,ce,se,ge,xe,_e],styles:[`fuse-card{margin:8px}
`],encapsulation:2,changeDetection:0});let t=e;return t})();var Fe=(()=>{let e=class e{constructor(){}ngOnInit(){}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=_({type:e,selectors:[["app-family"]],standalone:!0,features:[w],decls:1,vars:0,template:function(n,l){n&1&&p(0,"router-outlet")},dependencies:[fe,R],encapsulation:2,changeDetection:0});let t=e;return t})();var We=()=>["../"],qe=t=>["./",t],Pe=t=>["../../","member",t];function Ge(t,e){if(t&1&&(I(0),r(1,"div",17)(2,"a",18)(3,"div",19)(4,"div",20),m(5),o(),r(6,"div",21),m(7),o()(),r(8,"div",19)(9,"button",22),m(10,"View "),o()()()(),F()),t&2){let s=e.$implicit;a(2),c("routerLink",S(5,qe,s.id)),a(3),f(s.name),a(2),f(s.relation),a(2),c("color","primary")("routerLink",S(7,Pe,s.id))}}var ke=(()=>{let e=class e{constructor(i,n,l){this._changeDetectorRef=i,this._fileManagerListComponent=n,this._familyService=l,this._unsubscribeAll=new E}ngOnInit(){this._fileManagerListComponent.matDrawer.open(),this._familyService.family$.pipe(h(this._unsubscribeAll)).subscribe(i=>{this._fileManagerListComponent.matDrawer.open(),this.family=i,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDrawer(){return this._fileManagerListComponent.matDrawer.close()}trackByFn(i,n){return n.id||i}};e.\u0275fac=function(n){return new(n||e)(u(j),u(z),u(x))},e.\u0275cmp=_({type:e,selectors:[["app-details"]],standalone:!0,features:[w],decls:40,vars:10,consts:[[1,"flex","flex-col","flex-auto","p-6","md:p-8"],[1,"flex","items-center","justify-end"],["mat-icon-button","",3,"routerLink"],[3,"svgIcon"],[1,"aspect-w-9","aspect-h-6","mt-8"],[1,"flex","items-center","justify-center","border","rounded-lg","bg-gray-50","dark:bg-card"],["alt","Family","src","assets/images/profile/family-mock.webp",1,"object-cover"],[1,"flex","flex-col","items-start","mt-8"],[1,"text-xl","font-medium"],[1,"text-l","text-hint"],[1,"text-lg","font-medium","mt-8"],[1,"flex","flex-col","mt-4","border-t","border-b","divide-y","font-medium"],[1,"flex","items-center","justify-between"],[1,"w-full"],[4,"ngFor","ngForOf"],[1,"flex","items-center","justify-between","py-3"],[1,"text-secondary"],[1,"row"],[1,"z-20","flex","items-center","justify-between","px-6","py-4","md:px-8","cursor-pointer","border-b",3,"routerLink"],[1,"min-w-0","ml-4"],[1,"font-medium","leading-5","truncate"],[1,"leading-5","truncate","text-secondary","text-hint"],["mat-flat-button","",1,"flex-auto",3,"color","routerLink"]],template:function(n,l){n&1&&(r(0,"div",0)(1,"div",1)(2,"button",2),p(3,"mat-icon",3),o()(),r(4,"div",4)(5,"div",5),p(6,"img",6),o()(),r(7,"div",7)(8,"div",8),m(9),o(),r(10,"div",9),m(11),o()(),r(12,"div",10),m(13,"Members"),o(),r(14,"div",11)(15,"div",12)(16,"div",13),g(17,Ge,11,9,"ng-container",14),o()(),r(18,"div",10),m(19,"About"),o(),r(20,"div",15)(21,"div"),m(22),o()(),r(23,"div",10),m(24,"Details"),o(),r(25,"div",15)(26,"div",16),m(27,"Division"),o(),r(28,"div"),m(29),o()(),r(30,"div",15)(31,"div",16),m(32,"Sub Division"),o(),r(33,"div"),m(34),o()(),r(35,"div",15)(36,"div",16),m(37,"Member Since"),o(),r(38,"div"),m(39),o()()()()),n&2&&(a(2),c("routerLink",ae(9,We)),a(),c("svgIcon","heroicons_outline:x"),a(6),f(l.family.name),a(2),C(" ",l.family.address,""),a(6),c("ngForOf",l.family.members),a(5),f(l.family.about),a(7),f(l.family.divisionId),a(5),f(l.family.subDivisionId||""),a(5),f(l.family.memberSince))},dependencies:[$,T,L,V,A,he,B]});let t=e;return t})();var Ee=(()=>{let e=class e{constructor(i){this._familyService=i}resolve(i,n){return this._familyService.getFamilies()}};e.\u0275fac=function(n){return new(n||e)(b(x))},e.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Me=(()=>{let e=class e{constructor(i,n){this._router=i,this._familyService=n}resolve(i,n){return this._familyService.getFamilyById(i.paramMap.get("id")).pipe(Y(l=>{console.error(l);let d=n.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(d),M(l)}))}};e.\u0275fac=function(n){return new(n||e)(b(O),b(x))},e.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var De=(()=>{let e=class e{canDeactivate(i,n,l,d){let v=d.root;for(;v.firstChild;)v=v.firstChild;return!d.url.includes("/family")||v.paramMap.get("id")?!0:i.closeDrawer().then(()=>!0)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var wt=[{path:"",component:Fe,children:[{path:"",component:z,resolve:{items:Ee},children:[{path:":id",component:ke,resolve:{item:Me},canDeactivate:[De]}]}]}];export{wt as default};
