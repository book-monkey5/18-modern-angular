import{A as S,B as ye,C as B,D as g,E as o,Ea as x,Fa as Ke,G as _e,I as T,J as v,K as Re,L as Ce,M as C,N as be,O as je,P as Ue,Q as He,R as X,S as Y,T as a,U as l,V as b,Y as Le,Z as y,_ as $e,a as c,aa as u,b as h,ba as We,c as xe,d as ke,da as N,e as z,ea as D,f as Oe,fa as K,ha as qe,ia as ze,j as Pe,ka as Ze,l as Z,m as I,ma as G,na as A,o as pe,oa as Xe,p as w,pa as Ve,q as m,qa as Ye,r as V,s as me,t as f,v as ge,w as Be,x as Te,y as ve,z as Ge,za as J}from"./chunk-TZZPS5AN.js";var st=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(o(_e),o(ye))},e.\u0275dir=f({type:e});let t=e;return t})(),Gt=(()=>{let e=class e extends st{};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=ve(e)))(s||e)}})(),e.\u0275dir=f({type:e,features:[v]});let t=e;return t})(),ot=new w("");var Rt={provide:ot,useExisting:I(()=>le),multi:!0};function jt(){let t=Ve()?Ve().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Ut=new w(""),le=(()=>{let e=class e extends st{constructor(n,r,s){super(n,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!jt())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(o(_e),o(ye),o(Ut,8))},e.\u0275dir=f({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&y("input",function(F){return s._handleInput(F.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(F){return s._compositionEnd(F.target.value)})},features:[N([Rt]),v]});let t=e;return t})();function M(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function at(t){return t!=null&&typeof t.length=="number"}var ue=new w(""),ce=new w(""),Ht=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,L=class{static min(e){return Lt(e)}static max(e){return $t(e)}static required(e){return Wt(e)}static requiredTrue(e){return qt(e)}static email(e){return zt(e)}static minLength(e){return Zt(e)}static maxLength(e){return Xt(e)}static pattern(e){return Yt(e)}static nullValidator(e){return lt(e)}static compose(e){return pt(e)}static composeAsync(e){return gt(e)}};function Lt(t){return e=>{if(M(e.value)||M(t))return null;let i=parseFloat(e.value);return!isNaN(i)&&i<t?{min:{min:t,actual:e.value}}:null}}function $t(t){return e=>{if(M(e.value)||M(t))return null;let i=parseFloat(e.value);return!isNaN(i)&&i>t?{max:{max:t,actual:e.value}}:null}}function Wt(t){return M(t.value)?{required:!0}:null}function qt(t){return t.value===!0?null:{required:!0}}function zt(t){return M(t.value)||Ht.test(t.value)?null:{email:!0}}function Zt(t){return e=>M(e.value)||!at(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function Xt(t){return e=>at(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function Yt(t){if(!t)return lt;let e,i;return typeof t=="string"?(i="",t.charAt(0)!=="^"&&(i+="^"),i+=t,t.charAt(t.length-1)!=="$"&&(i+="$"),e=new RegExp(i)):(i=t.toString(),e=t),n=>{if(M(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:i,actualValue:r}}}}function lt(t){return null}function ut(t){return t!=null}function ct(t){return Ze(t)?ke(t):t}function dt(t){let e={};return t.forEach(i=>{e=i!=null?c(c({},e),i):e}),Object.keys(e).length===0?null:e}function ht(t,e){return e.map(i=>i(t))}function Kt(t){return!t.validate}function ft(t){return t.map(e=>Kt(e)?e:i=>e.validate(i))}function pt(t){if(!t)return null;let e=t.filter(ut);return e.length==0?null:function(i){return dt(ht(i,e))}}function mt(t){return t!=null?pt(ft(t)):null}function gt(t){if(!t)return null;let e=t.filter(ut);return e.length==0?null:function(i){let n=ht(i,e).map(ct);return Oe(n).pipe(z(dt))}}function vt(t){return t!=null?gt(ft(t)):null}function Je(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function yt(t){return t._rawValidators}function _t(t){return t._rawAsyncValidators}function De(t){return t?Array.isArray(t)?t:[t]:[]}function ee(t,e){return Array.isArray(t)?t.includes(e):t===e}function Qe(t,e){let i=De(e);return De(t).forEach(r=>{ee(i,r)||i.push(r)}),i}function et(t,e){return De(e).filter(i=>!ee(t,i))}var te=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=mt(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=vt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},p=class extends te{get formDirective(){return null}get path(){return null}},$=class extends te{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},ie=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Jt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},qi=h(c({},Jt),{"[class.ng-submitted]":"isSubmitted"}),Ct=(()=>{let e=class e extends ie{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(o($,2))},e.\u0275dir=f({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&be("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[v]});let t=e;return t})(),bt=(()=>{let e=class e extends ie{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(o(p,10))},e.\u0275dir=f({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&be("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[v]});let t=e;return t})();var R="VALID",Q="INVALID",k="PENDING",j="DISABLED",E=class{},ne=class extends E{constructor(e,i){super(),this.value=e,this.source=i}},U=class extends E{constructor(e,i){super(),this.pristine=e,this.source=i}},H=class extends E{constructor(e,i){super(),this.touched=e,this.source=i}},O=class extends E{constructor(e,i){super(),this.status=e,this.source=i}},Ae=class extends E{constructor(e){super(),this.source=e}},Me=class extends E{constructor(e){super(),this.source=e}};function Ee(t){return(de(t)?t.validators:t)||null}function Qt(t){return Array.isArray(t)?mt(t):t||null}function Fe(t,e){return(de(e)?e.asyncValidators:t)||null}function ei(t){return Array.isArray(t)?vt(t):t||null}function de(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Vt(t,e,i){let n=t.controls;if(!(e?Object.keys(n):n).length)throw new Z(1e3,"");if(!n[i])throw new Z(1001,"")}function Dt(t,e,i){t._forEachChild((n,r)=>{if(i[r]===void 0)throw new Z(1002,"")})}var W=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=G(()=>this.statusReactive()),this.statusReactive=T(void 0),this._pristine=G(()=>this.pristineReactive()),this.pristineReactive=T(!0),this._touched=G(()=>this.touchedReactive()),this.touchedReactive=T(!1),this._events=new xe,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return A(this.statusReactive)}set status(e){A(()=>this.statusReactive.set(e))}get valid(){return this.status===R}get invalid(){return this.status===Q}get pending(){return this.status==k}get disabled(){return this.status===j}get enabled(){return this.status!==j}get pristine(){return A(this.pristineReactive)}set pristine(e){A(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return A(this.touchedReactive)}set touched(e){A(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Qe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Qe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(et(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(et(e,this._rawAsyncValidators))}hasValidator(e){return ee(this._rawValidators,e)}hasAsyncValidator(e){return ee(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let i=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(h(c({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new H(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(i=>i.markAllAsTouched(e))}markAsUntouched(e={}){let i=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),i&&e.emitEvent!==!1&&this._events.next(new H(!1,n))}markAsDirty(e={}){let i=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(h(c({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new U(!1,n))}markAsPristine(e={}){let i=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),i&&e.emitEvent!==!1&&this._events.next(new U(!0,n))}markAsPending(e={}){this.status=k;let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new O(this.status,i)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(h(c({},e),{sourceControl:i}))}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=j,this.errors=null,this._forEachChild(r=>{r.disable(h(c({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ne(this.value,n)),this._events.next(new O(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(h(c({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=R,this._forEachChild(n=>{n.enable(h(c({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(h(c({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,i){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},i),this._parent._updateTouched({},i))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===R||this.status===k)&&this._runAsyncValidator(n,e.emitEvent)}let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ne(this.value,i)),this._events.next(new O(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(h(c({},e),{sourceControl:i}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?j:R}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,i){if(this.asyncValidator){this.status=k,this._hasOwnPendingAsyncValidator={emitEvent:i!==!1};let n=ct(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:i,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1,this,i.shouldHaveEmitted)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,i,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new O(this.status,i)),this._parent&&this._parent._updateControlsErrors(e,i,n)}_initObservables(){this.valueChanges=new B,this.statusChanges=new B}_calculateStatus(){return this._allControlsDisabled()?j:this.errors?Q:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(k)?k:this._anyControlsHaveStatus(Q)?Q:R}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,i){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),r&&this._events.next(new U(this.pristine,i))}_updateTouched(e={},i){this.touched=this._anyControlsTouched(),this._events.next(new H(this.touched,i)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){de(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Qt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ei(this._rawAsyncValidators)}},re=class extends W{constructor(e,i,n){super(Ee(i),Fe(n,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,i){return this.controls[e]?this.controls[e]:(this.controls[e]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(e,i,n={}){this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(e,i,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],i&&this.registerControl(e,i),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,i={}){Dt(this,!0,e),Object.keys(e).forEach(n=>{Vt(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e={},i={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i,this),this._updateTouched(i,this),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(e,i,n)=>(e[n]=i.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(i,n)=>n._syncPendingControls()?!0:i);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(i=>{let n=this.controls[i];n&&e(n,i)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[i,n]of Object.entries(this.controls))if(this.contains(i)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(i,n,r)=>((n.enabled||this.disabled)&&(i[r]=n.value),i))}_reduceChildren(e,i){let n=e;return this._forEachChild((r,s)=>{n=i(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var At=new w("CallSetDisabledState",{providedIn:"root",factory:()=>we}),we="always";function Se(t,e){return[...e.path,t]}function tt(t,e,i=we){Ie(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),ii(t,e),ri(t,e),ni(t,e),ti(t,e)}function it(t,e,i=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),oe(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function se(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function ti(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function Ie(t,e){let i=yt(t);e.validator!==null?t.setValidators(Je(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=_t(t);e.asyncValidator!==null?t.setAsyncValidators(Je(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();se(e._rawValidators,r),se(e._rawAsyncValidators,r)}function oe(t,e){let i=!1;if(t!==null){if(e.validator!==null){let r=yt(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(d=>d!==e.validator);s.length!==r.length&&(i=!0,t.setValidators(s))}}if(e.asyncValidator!==null){let r=_t(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(d=>d!==e.asyncValidator);s.length!==r.length&&(i=!0,t.setAsyncValidators(s))}}}let n=()=>{};return se(e._rawValidators,n),se(e._rawAsyncValidators,n),i}function ii(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Mt(t,e)})}function ni(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Mt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Mt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function ri(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function si(t,e){t==null,Ie(t,e)}function oi(t,e){return oe(t,e)}function ai(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function li(t){return Object.getPrototypeOf(t.constructor)===Gt}function ui(t,e){t._syncPendingControls(),e.forEach(i=>{let n=i.control;n.updateOn==="submit"&&n._pendingChange&&(i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function ci(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(s=>{s.constructor===le?i=s:li(s)?n=s:r=s}),r||n||i||null}function di(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function nt(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function rt(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var _=class extends W{constructor(e=null,i,n){super(Ee(i),Fe(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),de(i)&&(i.nonNullable||i.initialValueIsDefault)&&(rt(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){nt(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){nt(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){rt(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var hi=t=>t instanceof _,fi=(()=>{let e=class e extends p{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return Se(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=ve(e)))(s||e)}})(),e.\u0275dir=f({type:e,features:[v]});let t=e;return t})();var Et=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=f({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Ft=new w("");var pi={provide:p,useExisting:I(()=>P)},P=(()=>{let e=class e extends p{get submitted(){return A(this._submittedReactive)}set submitted(n){this._submittedReactive.set(n)}constructor(n,r,s){super(),this.callSetDisabledState=s,this._submitted=G(()=>this._submittedReactive()),this._submittedReactive=T(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new B,this._setValidators(n),this._setAsyncValidators(r)}ngOnChanges(n){this._checkFormPresent(),n.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(oe(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(n){let r=this.form.get(n.path);return tt(r,n,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(n),r}getControl(n){return this.form.get(n.path)}removeControl(n){it(n.control||null,n,!1),di(this.directives,n)}addFormGroup(n){this._setUpFormContainer(n)}removeFormGroup(n){this._cleanUpFormContainer(n)}getFormGroup(n){return this.form.get(n.path)}addFormArray(n){this._setUpFormContainer(n)}removeFormArray(n){this._cleanUpFormContainer(n)}getFormArray(n){return this.form.get(n.path)}updateModel(n,r){this.form.get(n.path).setValue(r)}onSubmit(n){return this._submittedReactive.set(!0),ui(this.form,this.directives),this.ngSubmit.emit(n),this.form._events.next(new Ae(this.control)),n?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(n=void 0){this.form.reset(n),this._submittedReactive.set(!1),this.form._events.next(new Me(this.form))}_updateDomValue(){this.directives.forEach(n=>{let r=n.control,s=this.form.get(n.path);r!==s&&(it(r||null,n),hi(s)&&(tt(s,n,this.callSetDisabledState),n.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(n){let r=this.form.get(n.path);si(r,n),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(n){if(this.form){let r=this.form.get(n.path);r&&oi(r,n)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Ie(this.form,this),this._oldForm&&oe(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(o(ue,10),o(ce,10),o(At,8))},e.\u0275dir=f({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&y("submit",function(F){return s.onSubmit(F)})("reset",function(){return s.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[N([pi]),v,ge]});let t=e;return t})(),mi={provide:p,useExisting:I(()=>wt)},wt=(()=>{let e=class e extends fi{constructor(n,r,s){super(),this.name=null,this._parent=n,this._setValidators(r),this._setAsyncValidators(s)}_checkParentType(){St(this._parent)}};e.\u0275fac=function(r){return new(r||e)(o(p,13),o(ue,10),o(ce,10))},e.\u0275dir=f({type:e,selectors:[["","formGroupName",""]],inputs:{name:[0,"formGroupName","name"]},features:[N([mi]),v]});let t=e;return t})(),gi={provide:p,useExisting:I(()=>he)},he=(()=>{let e=class e extends p{constructor(n,r,s){super(),this.name=null,this._parent=n,this._setValidators(r),this._setAsyncValidators(s)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return Se(this.name==null?this.name:this.name.toString(),this._parent)}_checkParentType(){St(this._parent)}};e.\u0275fac=function(r){return new(r||e)(o(p,13),o(ue,10),o(ce,10))},e.\u0275dir=f({type:e,selectors:[["","formArrayName",""]],inputs:{name:[0,"formArrayName","name"]},features:[N([gi]),v]});let t=e;return t})();function St(t){return!(t instanceof wt)&&!(t instanceof P)&&!(t instanceof he)}var vi={provide:$,useExisting:I(()=>Ne)},Ne=(()=>{let e=class e extends ${set isDisabled(n){}constructor(n,r,s,d,F){super(),this._ngModelWarningConfig=F,this._added=!1,this.name=null,this.update=new B,this._ngModelWarningSent=!1,this._parent=n,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=ci(this,d)}ngOnChanges(n){this._added||this._setUpControl(),ai(n,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}get path(){return Se(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(o(p,13),o(ue,10),o(ce,10),o(ot,10),o(Ft,8))},e.\u0275dir=f({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[N([vi]),v,ge]});let t=e;return t})();var yi=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=me({type:e}),e.\u0275inj=pe({});let t=e;return t})(),q=class extends W{constructor(e,i,n){super(Ee(i),Fe(n,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,i={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}insert(e,i,n={}){this.controls.splice(e,0,i),this._registerControl(i),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(e,i={}){let n=this._adjustIndex(e);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:i.emitEvent})}setControl(e,i,n={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),i&&(this.controls.splice(r,0,i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,i={}){Dt(this,!1,e),e.forEach((n,r)=>{Vt(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(e.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e=[],i={}){this._forEachChild((n,r)=>{n.reset(e[r],{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i,this),this._updateTouched(i,this),this.updateValueAndValidity(i)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(i=>i._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((i,n)=>n._syncPendingControls()?!0:i,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((i,n)=>{e(i,n)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(i=>i.enabled&&e(i))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};var It=t=>t instanceof q;var Nt=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:Ft,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:At,useValue:n.callSetDisabledState??we}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=me({type:e}),e.\u0275inj=pe({imports:[yi]});let t=e;return t})();function Ci(t,e){if(t&1&&(a(0,"p",0),u(1),l()),t&2){let i=e.$implicit;g(),We(i)}}var xt=(()=>{class t{controlName=S.required();messages=S.required();form=m(P);get errors(){let i=this.form.control.get(this.controlName());return!i||!i.errors||!i.touched?[]:Object.keys(i.errors).map(n=>this.messages()[n])}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=V({type:t,selectors:[["bm-form-errors"]],inputs:{controlName:[1,"controlName"],messages:[1,"messages"]},standalone:!0,features:[D],decls:2,vars:0,consts:[[1,"error"]],template:function(n,r){n&1&&X(0,Ci,2,1,"p",0,Ue),n&2&&Y(r.errors)}})}return t})();var kt=function(t){if(!t.value||typeof t.value!="string")return null;let i=t.value.replace(/-/g,"").length;return i===10||i===13?null:{isbnformat:!0}},Ot=function(t){return!It(t)||t.controls.some(e=>!!e.value)?null:{atleastonevalue:!0}};function Pt(){let t=m(x);return e=>t.check(e.value).pipe(z(i=>i?{isbnexists:!0}:null))}var bi=()=>({required:"Title is required"}),Vi=()=>({required:"ISBN is required",isbnformat:"ISBN must have 10 or 13 chars",isbnexists:"ISBN already exists"}),Di=()=>({atleastonevalue:"At least one author required"});function Ai(t,e){if(t&1&&b(0,"input",11),t&2){let i=e.$index;C("formControlName",i),Ce("aria-label","Author "+i)}}var fe=(()=>{class t{book=S();submitBook=Ge();form=new re({title:new _("",{nonNullable:!0,validators:L.required}),subtitle:new _("",{nonNullable:!0}),isbn:new _("",{nonNullable:!0,validators:[L.required,kt],asyncValidators:Pt()}),description:new _("",{nonNullable:!0}),published:new _("",{nonNullable:!0}),authors:this.buildAuthorsArray([""]),thumbnailUrl:new _("",{nonNullable:!0})});constructor(){Xe(()=>{let i=this.book();i?(this.setFormValues(i),this.setEditMode(!0)):this.setEditMode(!1)})}setFormValues(i){this.form.patchValue(i),this.form.setControl("authors",this.buildAuthorsArray(i.authors))}setEditMode(i){let n=this.form.controls.isbn;i?n.disable():n.enable()}buildAuthorsArray(i){return new q(i.map(n=>new _(n,{nonNullable:!0})),Ot)}get authors(){return this.form.controls.authors}addAuthorControl(){this.authors.push(new _("",{nonNullable:!0}))}submitForm(){let i=this.form.getRawValue(),n=i.authors.filter(s=>!!s),r=h(c({},i),{authors:n});this.submitBook.emit(r)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=V({type:t,selectors:[["bm-book-form"]],inputs:{book:[1,"book"]},outputs:{submitBook:"submitBook"},standalone:!0,features:[D],decls:31,vars:8,consts:[[3,"ngSubmit","formGroup"],["for","title"],["id","title","formControlName","title"],["controlName","title",3,"messages"],["for","subtitle"],["id","subtitle","formControlName","subtitle"],["for","isbn"],["id","isbn","formControlName","isbn"],["controlName","isbn",3,"messages"],["type","button",1,"add",3,"click"],["formArrayName","authors"],[3,"formControlName"],["controlName","authors",3,"messages"],["for","description"],["id","description","formControlName","description"],["for","published"],["type","date","useValueAsLocalIso","","id","published","formControlName","published"],["for","thumbnailUrl"],["type","url","id","thumbnailUrl","formControlName","thumbnailUrl"],["type","submit",3,"disabled"]],template:function(n,r){n&1&&(a(0,"form",0),y("ngSubmit",function(){return r.submitForm()}),a(1,"label",1),u(2,"Title"),l(),b(3,"input",2)(4,"bm-form-errors",3),a(5,"label",4),u(6,"Subtitle"),l(),b(7,"input",5),a(8,"label",6),u(9,"ISBN"),l(),b(10,"input",7)(11,"bm-form-errors",8),a(12,"label"),u(13,"Authors"),l(),a(14,"button",9),y("click",function(){return r.addAuthorControl()}),u(15," + Author "),l(),a(16,"fieldset",10),X(17,Ai,1,2,"input",11,He),l(),b(19,"bm-form-errors",12),a(20,"label",13),u(21,"Description"),l(),b(22,"textarea",14),a(23,"label",15),u(24,"Published"),l(),b(25,"input",16),a(26,"label",17),u(27,"Thumbnail URL"),l(),b(28,"input",18),a(29,"button",19),u(30," Save "),l()()),n&2&&(C("formGroup",r.form),g(4),C("messages",K(5,bi)),g(7),C("messages",K(6,Vi)),g(6),Y(r.authors.controls),g(2),C("messages",K(7,Di)),g(10),C("disabled",r.form.invalid))},dependencies:[Nt,Et,le,Ct,bt,P,Ne,he,xt]})}return t})();var Bt=(()=>{class t{service=m(x);router=m(J);create(i){this.service.create(i).subscribe(n=>{this.router.navigate(["/books",n.isbn])})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=V({type:t,selectors:[["bm-book-create"]],standalone:!0,features:[D],decls:3,vars:0,consts:[[3,"submitBook"]],template:function(n,r){n&1&&(a(0,"h1"),u(1,"Create Book"),l(),a(2,"bm-book-form",0),y("submitBook",function(d){return r.create(d)}),l())},dependencies:[fe]})}return t})();function Mi(t,e){if(t&1){let i=Le();a(0,"bm-book-form",1),y("submitBook",function(r){Be(i);let s=$e();return Te(s.update(r))}),l()}t&2&&C("book",e)}var Tt=(()=>{class t{service=m(x);router=m(J);isbn=S.required();book$=Ke(this.isbn).pipe(Pe(i=>this.service.getSingle(i)));update(i){this.service.update(i).subscribe(n=>{this.router.navigate(["/books",n.isbn])})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=V({type:t,selectors:[["bm-book-edit"]],inputs:{isbn:[1,"isbn"]},standalone:!0,features:[D],decls:4,vars:3,consts:[[3,"book"],[3,"submitBook","book"]],template:function(n,r){if(n&1&&(a(0,"h1"),u(1,"Edit Book"),l(),Re(2,Mi,1,1,"bm-book-form",0),qe(3,"async")),n&2){let s;g(2),je((s=ze(3,1,r.book$))?2:-1,s)}},dependencies:[Ye,fe]})}return t})();var Sn=[{path:"",redirectTo:"create",pathMatch:"full"},{path:"create",component:Bt},{path:"edit/:isbn",component:Tt}];export{Sn as ADMIN_ROUTES};
