import{$ as Pe,A as Ie,B as w,C as he,Ca as N,D as x,Da as He,E as g,F as s,H as fe,K as y,L as Se,M as pe,N as b,O as me,P as Ne,Q as Oe,R as ke,S as $,T as W,U as a,V as u,W as V,Z as xe,_ as v,a as m,b as D,ba as d,ca as Be,d as Ae,e as H,ea as S,f as Me,fa as M,ga as q,ia as Te,j as Fe,ja as Ge,l as L,la as je,m as I,ma as Ue,n as ae,na as ge,o as le,oa as Re,p as E,q as h,r as c,s as A,t as ue,u as f,w as de,x as Ee,xa as z,y as we,z as ce}from"./chunk-KA3ORRWD.js";var Ye=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(s(fe),s(he))},e.\u0275dir=f({type:e});let t=e;return t})(),It=(()=>{let e=class e extends Ye{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=ce(e)))(o||e)}})(),e.\u0275dir=f({type:e,features:[y]});let t=e;return t})(),Ke=new E("");var St={provide:Ke,useExisting:I(()=>te),multi:!0};function Nt(){let t=ge()?ge().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Ot=new E(""),te=(()=>{let e=class e extends Ye{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Nt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(s(fe),s(he),s(Ot,8))},e.\u0275dir=f({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&v("input",function(C){return o._handleInput(C.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(C){return o._compositionEnd(C.target.value)})},features:[S([St]),y]});let t=e;return t})();function F(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function Je(t){return t!=null&&typeof t.length=="number"}var ie=new E(""),ne=new E(""),kt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,T=class{static min(e){return xt(e)}static max(e){return Pt(e)}static required(e){return Bt(e)}static requiredTrue(e){return Tt(e)}static email(e){return Gt(e)}static minLength(e){return jt(e)}static maxLength(e){return Ut(e)}static pattern(e){return Rt(e)}static nullValidator(e){return Qe(e)}static compose(e){return ot(e)}static composeAsync(e){return at(e)}};function xt(t){return e=>{if(F(e.value)||F(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function Pt(t){return e=>{if(F(e.value)||F(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function Bt(t){return F(t.value)?{required:!0}:null}function Tt(t){return t.value===!0?null:{required:!0}}function Gt(t){return F(t.value)||kt.test(t.value)?null:{email:!0}}function jt(t){return e=>F(e.value)||!Je(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function Ut(t){return e=>Je(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function Rt(t){if(!t)return Qe;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(F(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function Qe(t){return null}function et(t){return t!=null}function tt(t){return je(t)?Ae(t):t}function it(t){let e={};return t.forEach(n=>{e=n!=null?m(m({},e),n):e}),Object.keys(e).length===0?null:e}function nt(t,e){return e.map(n=>n(t))}function Ht(t){return!t.validate}function rt(t){return t.map(e=>Ht(e)?e:n=>e.validate(n))}function ot(t){if(!t)return null;let e=t.filter(et);return e.length==0?null:function(n){return it(nt(n,e))}}function st(t){return t!=null?ot(rt(t)):null}function at(t){if(!t)return null;let e=t.filter(et);return e.length==0?null:function(n){let i=nt(n,e).map(tt);return Me(i).pipe(H(it))}}function lt(t){return t!=null?at(rt(t)):null}function Le(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function ut(t){return t._rawValidators}function dt(t){return t._rawAsyncValidators}function ye(t){return t?Array.isArray(t)?t:[t]:[]}function X(t,e){return Array.isArray(t)?t.includes(e):t===e}function $e(t,e){let n=ye(e);return ye(t).forEach(r=>{X(n,r)||n.push(r)}),n}function We(t,e){return ye(e).filter(n=>!X(t,n))}var Y=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=st(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=lt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},p=class extends Y{get formDirective(){return null}get path(){return null}},G=class extends Y{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},K=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Lt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Bi=D(m({},Lt),{"[class.ng-submitted]":"isSubmitted"}),ct=(()=>{let e=class e extends K{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(G,2))},e.\u0275dir=f({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&me("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[y]});let t=e;return t})(),ht=(()=>{let e=class e extends K{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(s(p,10))},e.\u0275dir=f({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&me("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[y]});let t=e;return t})();var P="VALID",Z="INVALID",O="PENDING",B="DISABLED";function ve(t){return(re(t)?t.validators:t)||null}function $t(t){return Array.isArray(t)?st(t):t||null}function _e(t,e){return(re(e)?e.asyncValidators:t)||null}function Wt(t){return Array.isArray(t)?lt(t):t||null}function re(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function ft(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new L(1e3,"");if(!i[n])throw new L(1001,"")}function pt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new L(1002,"")})}var j=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===P}get invalid(){return this.status===Z}get pending(){return this.status==O}get disabled(){return this.status===B}get enabled(){return this.status!==B}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators($e(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators($e(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(We(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(We(e,this._rawAsyncValidators))}hasValidator(e){return X(this._rawValidators,e)}hasAsyncValidator(e){return X(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=O,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=B,this.errors=null,this._forEachChild(i=>{i.disable(D(m({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(D(m({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=P,this._forEachChild(i=>{i.enable(D(m({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(D(m({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===P||this.status===O)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?B:P}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=O,this._hasOwnPendingAsyncValidator=!0;let n=tt(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new x,this.statusChanges=new x}_calculateStatus(){return this._allControlsDisabled()?B:this.errors?Z:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(O)?O:this._anyControlsHaveStatus(Z)?Z:P}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){re(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=$t(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Wt(this._rawAsyncValidators)}},J=class extends j{constructor(e,n,i){super(ve(n),_e(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){pt(this,!0,e),Object.keys(e).forEach(i=>{ft(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var mt=new E("CallSetDisabledState",{providedIn:"root",factory:()=>Ce}),Ce="always";function be(t,e){return[...e.path,t]}function qe(t,e,n=Ce){Ve(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),zt(t,e),Xt(t,e),Zt(t,e),qt(t,e)}function ze(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),ee(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Q(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function qt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function Ve(t,e){let n=ut(t);e.validator!==null?t.setValidators(Le(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=dt(t);e.asyncValidator!==null?t.setAsyncValidators(Le(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Q(e._rawValidators,r),Q(e._rawAsyncValidators,r)}function ee(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=ut(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(l=>l!==e.validator);o.length!==r.length&&(n=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=dt(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(l=>l!==e.asyncValidator);o.length!==r.length&&(n=!0,t.setAsyncValidators(o))}}}let i=()=>{};return Q(e._rawValidators,i),Q(e._rawAsyncValidators,i),n}function zt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&gt(t,e)})}function Zt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&gt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function gt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Xt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Yt(t,e){t==null,Ve(t,e)}function Kt(t,e){return ee(t,e)}function Jt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Qt(t){return Object.getPrototypeOf(t.constructor)===It}function ei(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function ti(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===te?n=o:Qt(o)?i=o:r=o}),r||i||n||null}function ii(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ze(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Xe(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var _=class extends j{constructor(e=null,n,i){super(ve(n),_e(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),re(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Xe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ze(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ze(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Xe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ni=t=>t instanceof _,ri=(()=>{let e=class e extends p{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return be(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=ce(e)))(o||e)}})(),e.\u0275dir=f({type:e,features:[y]});let t=e;return t})();var yt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=f({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var vt=new E("");var oi={provide:p,useExisting:I(()=>k)},k=(()=>{let e=class e extends p{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new x,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(ee(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return qe(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){ze(i.control||null,i,!1),ii(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,ei(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,o=this.form.get(i.path);r!==o&&(ze(r||null,i),ni(o)&&(qe(o,i,this.callSetDisabledState),i.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);Yt(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&Kt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Ve(this.form,this),this._oldForm&&ee(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(s(ie,10),s(ne,10),s(mt,8))},e.\u0275dir=f({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&v("submit",function(C){return o.onSubmit(C)})("reset",function(){return o.onReset()})},inputs:{form:[c.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[S([oi]),y,de]});let t=e;return t})(),si={provide:p,useExisting:I(()=>_t)},_t=(()=>{let e=class e extends ri{constructor(i,r,o){super(),this.name=null,this._parent=i,this._setValidators(r),this._setAsyncValidators(o)}_checkParentType(){Ct(this._parent)}};e.\u0275fac=function(r){return new(r||e)(s(p,13),s(ie,10),s(ne,10))},e.\u0275dir=f({type:e,selectors:[["","formGroupName",""]],inputs:{name:[c.None,"formGroupName","name"]},features:[S([si]),y]});let t=e;return t})(),ai={provide:p,useExisting:I(()=>oe)},oe=(()=>{let e=class e extends p{constructor(i,r,o){super(),this.name=null,this._parent=i,this._setValidators(r),this._setAsyncValidators(o)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return be(this.name==null?this.name:this.name.toString(),this._parent)}_checkParentType(){Ct(this._parent)}};e.\u0275fac=function(r){return new(r||e)(s(p,13),s(ie,10),s(ne,10))},e.\u0275dir=f({type:e,selectors:[["","formArrayName",""]],inputs:{name:[c.None,"formArrayName","name"]},features:[S([ai]),y]});let t=e;return t})();function Ct(t){return!(t instanceof _t)&&!(t instanceof k)&&!(t instanceof oe)}var li={provide:G,useExisting:I(()=>De)},De=(()=>{let e=class e extends G{set isDisabled(i){}constructor(i,r,o,l,C){super(),this._ngModelWarningConfig=C,this._added=!1,this.name=null,this.update=new x,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=ti(this,l)}ngOnChanges(i){this._added||this._setUpControl(),Jt(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return be(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(s(p,13),s(ie,10),s(ne,10),s(Ke,10),s(vt,8))},e.\u0275dir=f({type:e,selectors:[["","formControlName",""]],inputs:{name:[c.None,"formControlName","name"],isDisabled:[c.None,"disabled","isDisabled"],model:[c.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[S([li]),y,de]});let t=e;return t})();var ui=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=ue({type:e}),e.\u0275inj=le({});let t=e;return t})(),U=class extends j{constructor(e,n,i){super(ve(n),_e(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,i={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){pt(this,!1,e),e.forEach((i,r)=>{ft(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,i)=>i._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,i)=>{e(n,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};var bt=t=>t instanceof U;var Vt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:vt,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:mt,useValue:i.callSetDisabledState??Ce}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=ue({type:e}),e.\u0275inj=le({imports:[ui]});let t=e;return t})();function ci(t,e){if(t&1&&(a(0,"p",0),d(1),u()),t&2){let n=e.$implicit;g(),Be(n)}}var Dt=(()=>{let e=class e{constructor(){this.controlName=w.required(),this.messages=w.required(),this.form=h(k)}get errors(){let i=this.form.control.get(this.controlName());return!i||!i.errors||!i.touched?[]:Object.keys(i.errors).map(r=>this.messages()[r])}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=A({type:e,selectors:[["bm-form-errors"]],inputs:{controlName:[c.SignalBased,"controlName"],messages:[c.SignalBased,"messages"]},standalone:!0,features:[M],decls:2,vars:0,consts:[[1,"error"]],template:function(r,o){r&1&&$(0,ci,2,1,"p",0,Oe),r&2&&W(o.errors)}});let t=e;return t})();var At=(()=>{let e=class e{constructor(){this.service=h(N)}isbnExists(){return i=>this.service.check(i.value).pipe(H(r=>r?{isbnexists:!0}:null))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ae({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Mt=function(t){if(!t.value||typeof t.value!="string")return null;let n=t.value.replace(/-/g,"").length;return n===10||n===13?null:{isbnformat:!0}},Ft=function(t){return!bt(t)||t.controls.some(e=>!!e.value)?null:{atleastonevalue:!0}};var hi=()=>({required:"Title is required"}),fi=()=>({required:"ISBN is required",isbnformat:"ISBN must have 10 or 13 chars",isbnexists:"ISBN already exists"}),pi=()=>({atleastonevalue:"At least one author required"});function mi(t,e){if(t&1&&V(0,"input",11),t&2){let n=e.$index;b("formControlName",n),pe("aria-label","Author "+n)}}var se=(()=>{let e=class e{constructor(){this.book=w(),this.submitBook=Ie(),this.form=new J({title:new _("",{nonNullable:!0,validators:T.required}),subtitle:new _("",{nonNullable:!0}),isbn:new _("",{nonNullable:!0,validators:[T.required,Mt],asyncValidators:h(At).isbnExists()}),description:new _("",{nonNullable:!0}),published:new _("",{nonNullable:!0}),authors:this.buildAuthorsArray([""]),thumbnailUrl:new _("",{nonNullable:!0})}),Ue(()=>{let i=this.book();i?(this.setFormValues(i),this.setEditMode(!0)):this.setEditMode(!1)})}setFormValues(i){this.form.patchValue(i),this.form.setControl("authors",this.buildAuthorsArray(i.authors))}setEditMode(i){let r=this.form.controls.isbn;i?r.disable():r.enable()}buildAuthorsArray(i){return new U(i.map(r=>new _(r,{nonNullable:!0})),Ft)}get authors(){return this.form.controls.authors}addAuthorControl(){this.authors.push(new _("",{nonNullable:!0}))}submitForm(){let i=this.form.getRawValue(),r=i.authors.filter(l=>!!l),o=D(m({},i),{authors:r});this.submitBook.emit(o)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=A({type:e,selectors:[["bm-book-form"]],inputs:{book:[c.SignalBased,"book"]},outputs:{submitBook:"submitBook"},standalone:!0,features:[M],decls:31,vars:8,consts:[[3,"ngSubmit","formGroup"],["for","title"],["id","title","formControlName","title"],["controlName","title",3,"messages"],["for","subtitle"],["id","subtitle","formControlName","subtitle"],["for","isbn"],["id","isbn","formControlName","isbn"],["controlName","isbn",3,"messages"],["type","button",1,"add",3,"click"],["formArrayName","authors"],[3,"formControlName"],["controlName","authors",3,"messages"],["for","description"],["id","description","formControlName","description"],["for","published"],["type","date","useValueAsLocalIso","","id","published","formControlName","published"],["for","thumbnailUrl"],["type","url","id","thumbnailUrl","formControlName","thumbnailUrl"],["type","submit",3,"disabled"]],template:function(r,o){r&1&&(a(0,"form",0),v("ngSubmit",function(){return o.submitForm()}),a(1,"label",1),d(2,"Title"),u(),V(3,"input",2)(4,"bm-form-errors",3),a(5,"label",4),d(6,"Subtitle"),u(),V(7,"input",5),a(8,"label",6),d(9,"ISBN"),u(),V(10,"input",7)(11,"bm-form-errors",8),a(12,"label"),d(13,"Authors"),u(),a(14,"button",9),v("click",function(){return o.addAuthorControl()}),d(15," + Author "),u(),a(16,"fieldset",10),$(17,mi,1,2,"input",11,ke),u(),V(19,"bm-form-errors",12),a(20,"label",13),d(21,"Description"),u(),V(22,"textarea",14),a(23,"label",15),d(24,"Published"),u(),V(25,"input",16),a(26,"label",17),d(27,"Thumbnail URL"),u(),V(28,"input",18),a(29,"button",19),d(30," Save "),u()()),r&2&&(b("formGroup",o.form),g(4),b("messages",q(5,hi)),g(7),b("messages",q(6,fi)),g(6),W(o.authors.controls),g(2),b("messages",q(7,pi)),g(10),b("disabled",o.form.invalid))},dependencies:[Vt,yt,te,ct,ht,k,De,oe,Dt]});let t=e;return t})();var Et=(()=>{let e=class e{constructor(){this.service=h(N),this.router=h(z)}create(i){this.service.create(i).subscribe(r=>{this.router.navigate(["/books",r.isbn])})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=A({type:e,selectors:[["bm-book-create"]],standalone:!0,features:[M],decls:3,vars:0,consts:[[3,"submitBook"]],template:function(r,o){r&1&&(a(0,"h1"),d(1,"Create Book"),u(),a(2,"bm-book-form",0),v("submitBook",function(C){return o.create(C)}),u())},dependencies:[se]});let t=e;return t})();function gi(t,e){if(t&1){let n=xe();a(0,"bm-book-form",1),v("submitBook",function(r){Ee(n);let o=Pe();return we(o.update(r))}),u()}t&2&&b("book",e)}var wt=(()=>{let e=class e{constructor(){this.service=h(N),this.router=h(z),this.isbn=w.required(),this.book$=He(this.isbn).pipe(Fe(i=>this.service.getSingle(i)))}update(i){this.service.update(i).subscribe(r=>{this.router.navigate(["/books",r.isbn])})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=A({type:e,selectors:[["bm-book-edit"]],inputs:{isbn:[c.SignalBased,"isbn"]},standalone:!0,features:[M],decls:4,vars:3,consts:[[3,"book"],[3,"submitBook","book"]],template:function(r,o){if(r&1&&(a(0,"h1"),d(1,"Edit Book"),u(),Se(2,gi,1,1,"bm-book-form",0),Te(3,"async")),r&2){let l;g(2),Ne(2,(l=Ge(3,1,o.book$))?2:-1,l)}},dependencies:[Re,se]});let t=e;return t})();var Vn=[{path:"",redirectTo:"create",pathMatch:"full"},{path:"create",component:Et},{path:"edit/:isbn",component:wt}];export{Vn as ADMIN_ROUTES};
