(self.webpackChunksocio=self.webpackChunksocio||[]).push([[844],{4118:(e,t,a)=>{"use strict";a.d(t,{y:()=>u});var r=a(9861),i=a(8441),s=a(5366),n=a(1116);function o(e,t){1&e&&(s.ynx(0),s.TgZ(1,"div",1),s.Hsn(2),s.qZA(),s.TgZ(3,"div",2),s.Hsn(4,1),s.qZA(),s.BQk())}function d(e,t){1&e&&(s.TgZ(0,"div",4),s.Hsn(1,3),s.qZA()),2&e&&s.Q6J("@expandCollapse",void 0)}function c(e,t){if(1&e&&(s.ynx(0),s.Hsn(1,2),s.YNc(2,d,2,1,"div",3),s.BQk()),2&e){const e=s.oxw();s.xp6(2),s.Q6J("ngIf",e.expanded)}}const f=[[["","fuseCardFront",""]],[["","fuseCardBack",""]],"*",[["","fuseCardExpansion",""]]],l=["[fuseCardFront]","[fuseCardBack]","*","[fuseCardExpansion]"];let u=(()=>{class e{constructor(){this.expanded=!1,this.face="front",this.flippable=!1}get classList(){return{"fuse-card-expanded":this.expanded,"fuse-card-face-back":this.flippable&&"back"===this.face,"fuse-card-face-front":this.flippable&&"front"===this.face,"fuse-card-flippable":this.flippable}}ngOnChanges(e){"expanded"in e&&(this.expanded=(0,r.Ig)(e.expanded.currentValue)),"flippable"in e&&(this.flippable=(0,r.Ig)(e.flippable.currentValue))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["fuse-card"]],hostVars:2,hostBindings:function(e,t){2&e&&s.Tol(t.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["fuseCard"],features:[s.TTD],ngContentSelectors:l,decls:2,vars:2,consts:[[4,"ngIf"],[1,"fuse-card-front"],[1,"fuse-card-back"],["class","fuse-card-expansion",4,"ngIf"],[1,"fuse-card-expansion"]],template:function(e,t){1&e&&(s.F$t(f),s.YNc(0,o,5,0,"ng-container",0),s.YNc(1,c,3,1,"ng-container",0)),2&e&&(s.Q6J("ngIf",t.flippable),s.xp6(1),s.Q6J("ngIf",!t.flippable))},directives:[n.O5],styles:["fuse-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity:1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow:0 1px 3px 0 #0000001a,0 1px 2px 0 #0000000f}fuse-card,fuse-card.fuse-card-flippable{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:#0000;--tw-shadow:0 0 #0000}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-back{visibility:visible;opacity:1;transform:rotateY(1turn)}fuse-card.fuse-card-flippable .fuse-card-back,fuse-card.fuse-card-flippable .fuse-card-front{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;-webkit-backface-visibility:hidden;backface-visibility:hidden;--tw-bg-opacity:1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow:0 1px 3px 0 #0000001a,0 1px 2px 0 #0000000f;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable .fuse-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0deg);overflow:hidden}fuse-card.fuse-card-flippable .fuse-card-back{position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}"],encapsulation:2,data:{animation:i.L}}),e})()},1925:(e,t,a)=>{"use strict";a.d(t,{y:()=>r.y,J:()=>n});var r=a(4118),i=a(1116),s=a(5366);let n=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[i.ez]]}),e})()},5844:(e,t,a)=>{"use strict";a.r(t),a.d(t,{AuthConfirmationRequiredModule:()=>l});var r=a(3464),i=a(4369),s=a(1925),n=a(5425),o=a(8441),d=a(5366);const c=function(){return["/sign-in"]},f=[{path:"",component:(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Xpm({type:e,selectors:[["auth-confirmation-required"]],decls:40,vars:2,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-4"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"]],template:function(e,t){1&e&&(d.TgZ(0,"div",0),d.TgZ(1,"div",1),d.TgZ(2,"div",2),d.TgZ(3,"div",3),d._UZ(4,"img",4),d.qZA(),d.TgZ(5,"div",5),d._uU(6,"Confirmation required"),d.qZA(),d.TgZ(7,"div",6),d._uU(8," A confirmation mail with instructions has been sent to your email address. Follow those instructions to confirm your email address and activate your account. "),d.qZA(),d.TgZ(9,"div",7),d.TgZ(10,"span"),d._uU(11,"Return to"),d.qZA(),d.TgZ(12,"a",8),d._uU(13,"sign in "),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(14,"div",9),d.O4$(),d.TgZ(15,"svg",10),d.TgZ(16,"g",11),d._UZ(17,"circle",12),d._UZ(18,"circle",13),d.qZA(),d.qZA(),d.TgZ(19,"svg",14),d.TgZ(20,"defs"),d.TgZ(21,"pattern",15),d._UZ(22,"rect",16),d.qZA(),d.qZA(),d._UZ(23,"rect",17),d.qZA(),d.kcU(),d.TgZ(24,"div",18),d.TgZ(25,"div",19),d.TgZ(26,"div"),d._uU(27,"Welcome to"),d.qZA(),d.TgZ(28,"div"),d._uU(29,"our community"),d.qZA(),d.qZA(),d.TgZ(30,"div",20),d._uU(31," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),d.qZA(),d.TgZ(32,"div",21),d.TgZ(33,"div",22),d._UZ(34,"img",23),d._UZ(35,"img",24),d._UZ(36,"img",25),d._UZ(37,"img",26),d.qZA(),d.TgZ(38,"div",27),d._uU(39,"More than 17k people joined us, it's your turn"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&e&&(d.xp6(12),d.Q6J("routerLink",d.DdM(1,c)))},directives:[r.yS],encapsulation:2,data:{animation:o.L}}),e})()}];let l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[r.Bz.forChild(f),i.ot,s.J,n.m]]}),e})()}}]);