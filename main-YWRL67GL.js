import{a as u}from"./chunk-SZUZ7MNV.js";import{$ as x,A as m,Aa as J,Ba as Q,Ca as X,Da as Y,F as s,K as v,N as M,O as F,P as _,S as N,T as D,U as o,V as i,W as g,Z as h,_ as C,aa as H,ba as r,c as w,ca as R,da as $,g as y,ga as V,h as L,ha as B,i as E,ia as O,j as T,k as A,ka as j,pa as P,q as c,s as d,sa as U,t as f,ta as W,ua as G,va as z,wa as K,xa as Z,ya as q,z as I,za as l}from"./chunk-VPUG3ROP.js";var pe=(e,t)=>t.isbn,ce=e=>["/books",e];function me(e,t){if(e&1&&(o(0,"li")(1,"a",3),r(2),o(3,"p",4),r(4),i()()()),e&2){let n=t.$implicit;m(),M("routerLink",V(3,ce,n.isbn)),m(),$(" ",n.title," "),m(2),R(n.subtitle)}}function se(e,t){e&1&&(o(0,"li"),r(1,"No results"),i())}function le(e,t){e&1&&(o(0,"ul",2),N(1,me,5,5,"li",null,pe,!1,se,2,0,"li"),i()),e&2&&(m(),D(t))}var S=class e{service=c(Y);input$=new w;isLoading=I(!1);results$;constructor(){this.results$=this.input$.pipe(y(t=>t.length>=3),L(500),E(),A(()=>this.isLoading.set(!0)),T(t=>this.service.getAllSearch(t)),A(()=>this.isLoading.set(!1)))}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=s({type:e,selectors:[["bm-search"]],decls:4,vars:5,consts:[["searchInput",""],["type","search","autocomplete","off","aria-label","Search",3,"input"],[1,"search-results"],[3,"routerLink"],["role","doc-subtitle"]],template:function(n,a){if(n&1){let p=h();o(0,"input",1,0),C("input",function(){d(p);let ae=H(1);return f(a.input$.next(ae.value))}),i(),v(2,le,4,1,"ul",2),B(3,"async")}if(n&2){let p;F("loading",a.isLoading()),m(2),_((p=O(3,3,a.results$))?2:-1,p)}},dependencies:[l,P],encapsulation:2})};var b=class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=s({type:e,selectors:[["bm-home"]],decls:7,vars:0,consts:[["routerLink","/books",1,"button","red"]],template:function(n,a){n&1&&(o(0,"h1"),r(1,"Home"),i(),o(2,"a",0),r(3,` Show book list
`),i(),o(4,"h2"),r(5,"Search"),i(),g(6,"bm-search"))},dependencies:[l,S],encapsulation:2})};var ne=()=>{let e=c(u),t=c(q);return e.isAuthenticated()?!0:(window.alert("Not logged in!"),t.parseUrl("/home"))};var oe=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:b},{path:"books",loadChildren:()=>import("./chunk-KA7LAVXV.js").then(e=>e.BOOKS_ROUTES)},{path:"admin",loadChildren:()=>import("./chunk-7CNMAT65.js").then(e=>e.ADMIN_ROUTES),canActivate:[ne]}];var ie=(e,t)=>{let n=c(u),a="1234567890";if(n.isAuthenticated()){let p=e.clone({setHeaders:{Authorization:`Bearer ${a}`}});return t(p)}else return t(e)};var re={providers:[j({eventCoalescing:!0}),Q(oe,X()),U(G(),W([ie])),K()]};function ue(e,t){if(e&1){let n=h();o(0,"button",6),C("click",function(){d(n);let p=x();return f(p.auth.logout())}),r(1,"Logout"),i()}}function de(e,t){if(e&1){let n=h();o(0,"button",7),C("click",function(){d(n);let p=x();return f(p.auth.login())}),r(1,"Login"),i()}}var k=class e{auth=c(u);static \u0275fac=function(n){return new(n||e)};static \u0275cmp=s({type:e,selectors:[["bm-root"]],decls:12,vars:1,consts:[["routerLink","/home","routerLinkActive","active","ariaCurrentWhenActive","page"],["routerLink","/books","routerLinkActive","active","ariaCurrentWhenActive","page"],["routerLink","/admin","routerLinkActive","active","ariaCurrentWhenActive","page"],[1,"actions"],[1,"red"],[1,"green"],[1,"red",3,"click"],[1,"green",3,"click"]],template:function(n,a){n&1&&(o(0,"nav")(1,"a",0),r(2,"Home"),i(),o(3,"a",1),r(4,"Books"),i(),o(5,"a",2),r(6,"Administration"),i(),o(7,"div",3),v(8,ue,2,0,"button",4)(9,de,2,0,"button",5),i()(),o(10,"main"),g(11,"router-outlet"),i()),n&2&&(m(8),_(a.auth.isAuthenticated()?8:9))},dependencies:[Z,l,J],encapsulation:2})};z(k,re).catch(e=>console.error(e));
