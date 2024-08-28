import{a as d}from"./chunk-P2BUIY45.js";import{$,Aa as u,Ba as Q,Ca as X,D as c,Da as Y,Ea as ee,I,K as _,M as D,N as H,O as g,R,S as N,T as o,U as i,V as S,Y as C,Z as v,_ as w,aa as r,ba as M,c as L,ca as V,ea as l,g as E,ga as B,h as T,ha as O,i as y,ia as j,j as F,k as x,la as P,q as m,qa as U,r as s,ta as W,ua as G,va as z,w as f,wa as K,x as h,xa as Z,ya as q,za as J}from"./chunk-PPUNEJIW.js";var me=(e,t)=>t.isbn,ce=e=>["/books",e];function se(e,t){if(e&1&&(o(0,"li")(1,"a",3),r(2),o(3,"p",4),r(4),i()()()),e&2){let n=t.$implicit;c(),D("routerLink",B(3,ce,n.isbn)),c(),V(" ",n.title," "),c(2),M(n.subtitle)}}function le(e,t){e&1&&(o(0,"li"),r(1,"No results"),i())}function ue(e,t){e&1&&(o(0,"ul",2),R(1,se,5,5,"li",null,me,!1,le,2,0,"li"),i()),e&2&&(c(),N(t))}var b=class e{service=m(ee);input$=new L;isLoading=I(!1);results$;constructor(){this.results$=this.input$.pipe(E(t=>t.length>=3),T(500),y(),x(()=>this.isLoading.set(!0)),F(t=>this.service.getAllSearch(t)),x(()=>this.isLoading.set(!1)))}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=s({type:e,selectors:[["bm-search"]],standalone:!0,features:[l],decls:4,vars:5,consts:[["searchInput",""],["type","search","autocomplete","off","aria-label","Search",3,"input"],[1,"search-results"],[3,"routerLink"],["role","doc-subtitle"]],template:function(n,a){if(n&1){let p=C();o(0,"input",1,0),v("input",function(){f(p);let pe=$(1);return h(a.input$.next(pe.value))}),i(),_(2,ue,4,1,"ul",2),O(3,"async")}if(n&2){let p;H("loading",a.isLoading()),c(2),g((p=j(3,3,a.results$))?2:-1,p)}},dependencies:[u,U]})};var A=class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=s({type:e,selectors:[["bm-home"]],standalone:!0,features:[l],decls:7,vars:0,consts:[["routerLink","/books",1,"button","red"]],template:function(n,a){n&1&&(o(0,"h1"),r(1,"Home"),i(),o(2,"a",0),r(3,` Show book list
`),i(),o(4,"h2"),r(5,"Search"),i(),S(6,"bm-search"))},dependencies:[u,b]})};var oe=()=>{let e=m(d),t=m(J);return e.isAuthenticated()?!0:(window.alert("Not logged in!"),t.parseUrl("/home"))};var ie=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:A},{path:"books",loadChildren:()=>import("./chunk-BNLNNBIH.js").then(e=>e.BOOKS_ROUTES)},{path:"admin",loadChildren:()=>import("./chunk-6GUPQ4GW.js").then(e=>e.ADMIN_ROUTES),canActivate:[oe]}];var re=(e,t)=>{let n=m(d),a="1234567890";if(n.isAuthenticated()){let p=e.clone({setHeaders:{Authorization:`Bearer ${a}`}});return t(p)}else return t(e)};var ae={providers:[P({eventCoalescing:!0}),X(ie,Y()),W(z(),G([re])),Z()]};function de(e,t){if(e&1){let n=C();o(0,"button",6),v("click",function(){f(n);let p=w();return h(p.auth.logout())}),r(1,"Logout"),i()}}function fe(e,t){if(e&1){let n=C();o(0,"button",7),v("click",function(){f(n);let p=w();return h(p.auth.login())}),r(1,"Login"),i()}}var k=class e{auth=m(d);static \u0275fac=function(n){return new(n||e)};static \u0275cmp=s({type:e,selectors:[["bm-root"]],standalone:!0,features:[l],decls:12,vars:1,consts:[["routerLink","/home","routerLinkActive","active","ariaCurrentWhenActive","page"],["routerLink","/books","routerLinkActive","active","ariaCurrentWhenActive","page"],["routerLink","/admin","routerLinkActive","active","ariaCurrentWhenActive","page"],[1,"actions"],[1,"red"],[1,"green"],[1,"red",3,"click"],[1,"green",3,"click"]],template:function(n,a){n&1&&(o(0,"nav")(1,"a",0),r(2,"Home"),i(),o(3,"a",1),r(4,"Books"),i(),o(5,"a",2),r(6,"Administration"),i(),o(7,"div",3),_(8,de,2,0,"button",4)(9,fe,2,0,"button",5),i()(),o(10,"main"),S(11,"router-outlet"),i()),n&2&&(c(8),g(a.auth.isAuthenticated()?8:9))},dependencies:[q,u,Q]})};K(k,ae).catch(e=>console.error(e));
