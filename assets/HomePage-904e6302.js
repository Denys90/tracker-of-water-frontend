import{n as m,t as c,r as F,R as mt,j as a,c as pt,u as xt,a as pe,g as gt,d as bt,e as yt,p as wt,f as kt,s as g}from"./index-d44e56c8.js";import{a as vt,b as jt,F as re}from"./formik.esm-a6026105.js";const $t="/runners_of_code__frontend/assets/bottle_home_mobile@1x-0d6054eb.png",Ot="/runners_of_code__frontend/assets/bottle_home_mobile@2x-52eb5066.png",_t="/runners_of_code__frontend/assets/bottle_home_tablet@1x-c4bedac4.png",Ft="/runners_of_code__frontend/assets/bottle_home_tablet@2x-867eb443.png",St="/runners_of_code__frontend/assets/bottle_home_desk-f67b46be.png",Dt="/runners_of_code__frontend/assets/bottle_home_deskx2-acd9b153.png",Tt=m.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;
`,Et=m.div`
  background-position: center;
  background-image: -webkit-image-set(
    url(${$t}) 1x,
    url(${Ot}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;
  z-index: -1;

  @media screen and (min-width: ${c.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${_t}) 1x,
      url(${Ft}) 2x
    );
    height: 386px;
    margin-top: -114px;
    background-position: center top;
  }

  @media screen and (min-width: ${c.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${St}) 1x,
      url(${Dt}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,Mt=m.h3`
  font-size: 18px;
  line-height: 1.33;
  font-family: 'Roboto-Bold', sans-serif;
  margin-bottom: 12px;
  color: ${c.colors.black};
`,Pt=m.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 8px 20px;
  padding-top: 20px;
  width: 164px;

  border-radius: 10px;
  border: 1px solid ${c.colors.lightBlue};
  box-shadow: ${c.boxShadowBtn.Btn};

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    margin: 0;

    color: ${c.colors.blue};
  }
`,Ct=m.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`,At=m.button`
  padding: 0;
  background-color: ${c.colors.white};
  color: ${c.colors.blue};
  border: none;
  font-size: 16px;
  &:hover {
    color: ${c.colors.orange};
  }
`,Nt=m.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity 0.3s;
`,Wt=m.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`,Yt=m.div`
  position: relative;
  padding: 20px;
  width: 450px;
  height: auto;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: ${c.colors.white};
  backdrop-filter: blur(5px);
  transform: translateY(-50px);
  transition:
    opacity 0.3s,
    transform 0.3s;
`;m.button`
  position: absolute;
  top: 12px;
  right: 12px;
  color: ${c.colors.blue};
  display: block;
  border: none;
  background-color: transparent;
  padding: 0px;
  cursor: pointer;
`;const $e=({onClose:n,children:e})=>{const t=document.getElementById("modal-root"),r=F.useRef(),s=o=>{o.target===r.current&&n(),document.body.style.overflow="",document.body.style.position="",o.stopPropagation()},i=o=>{o.key==="Escape"&&(document.body.style.overflow="",document.body.style.position="",n())};return F.useEffect(()=>{const o=u=>i(u);return document.addEventListener("keydown",o),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",o)}},[]),mt.createPortal(a.jsx(Nt,{onClick:s,ref:r,children:a.jsx(Wt,{children:a.jsxs(Yt,{children:[a.jsx("button",{onClick:n,children:"X"}),e]})})}),t)},Ge=n=>n.waters.dailyNorm,zt=n=>n.waters.reps,Qe=n=>n.filter;pt([Ge,Qe],(n,e)=>n.filter(t=>t.name.toLowerCase().includes(e.toLowerCase())));const Rt=()=>{const n=xt(),e=pe(Ge),t=pe(zt),r=pe(Qe),s=F.useCallback(l=>n(gt(l)),[n]),i=F.useCallback(l=>n(bt(l)),[n]),o=F.useCallback(l=>n(yt(l)),[n]),u=F.useCallback(l=>n(wt(l)),[n]);return{dailyNorm:e,reps:t,filter:r,getWaters:s,addDailyNorma:i,deleteReps:o,patchWater:u}};function B(n){this._maxSize=n,this.clear()}B.prototype.clear=function(){this._size=0,this._values=Object.create(null)};B.prototype.get=function(n){return this._values[n]};B.prototype.set=function(n,e){return this._size>=this._maxSize&&this.clear(),n in this._values||this._size++,this._values[n]=e};var qt=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Ze=/^\d+$/,Bt=/^\d/,It=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,Lt=/^\s*(['"]?)(.*?)(\1)\s*$/,Oe=512,Ce=new B(Oe),Ae=new B(Oe),Ne=new B(Oe),R={Cache:B,split:ye,normalizePath:xe,setter:function(n){var e=xe(n);return Ae.get(n)||Ae.set(n,function(r,s){for(var i=0,o=e.length,u=r;i<o-1;){var l=e[i];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;u=u[e[i++]]}u[e[i]]=s})},getter:function(n,e){var t=xe(n);return Ne.get(n)||Ne.set(n,function(s){for(var i=0,o=t.length;i<o;)if(s!=null||!e)s=s[t[i++]];else return;return s})},join:function(n){return n.reduce(function(e,t){return e+(_e(t)||Ze.test(t)?"["+t+"]":(e?".":"")+t)},"")},forEach:function(n,e,t){Ht(Array.isArray(n)?n:ye(n),e,t)}};function xe(n){return Ce.get(n)||Ce.set(n,ye(n).map(function(e){return e.replace(Lt,"$2")}))}function ye(n){return n.match(qt)||[""]}function Ht(n,e,t){var r=n.length,s,i,o,u;for(i=0;i<r;i++)s=n[i],s&&(Ut(s)&&(s='"'+s+'"'),u=_e(s),o=!u&&/^\d+$/.test(s),e.call(t,s,u,o,i,n))}function _e(n){return typeof n=="string"&&n&&["'",'"'].indexOf(n.charAt(0))!==-1}function Vt(n){return n.match(Bt)&&!n.match(Ze)}function Xt(n){return It.test(n)}function Ut(n){return!_e(n)&&(Vt(n)||Xt(n))}const Gt=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,le=n=>n.match(Gt)||[],ce=n=>n[0].toUpperCase()+n.slice(1),Fe=(n,e)=>le(n).join(e).toLowerCase(),Je=n=>le(n).reduce((e,t)=>`${e}${e?t[0].toUpperCase()+t.slice(1).toLowerCase():t.toLowerCase()}`,""),Qt=n=>ce(Je(n)),Zt=n=>Fe(n,"_"),Jt=n=>Fe(n,"-"),Kt=n=>ce(Fe(n," ")),en=n=>le(n).map(ce).join(" ");var ge={words:le,upperFirst:ce,camelCase:Je,pascalCase:Qt,snakeCase:Zt,kebabCase:Jt,sentenceCase:Kt,titleCase:en},Se={exports:{}};Se.exports=function(n){return Ke(tn(n),n)};Se.exports.array=Ke;function Ke(n,e){var t=n.length,r=new Array(t),s={},i=t,o=nn(e),u=rn(n);for(e.forEach(function(d){if(!u.has(d[0])||!u.has(d[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)s[i]||l(n[i],i,new Set);return r;function l(d,h,f){if(f.has(d)){var p;try{p=", node was:"+JSON.stringify(d)}catch{p=""}throw new Error("Cyclic dependency"+p)}if(!u.has(d))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(d));if(!s[h]){s[h]=!0;var b=o.get(d)||new Set;if(b=Array.from(b),h=b.length){f.add(d);do{var j=b[--h];l(j,u.get(j),f)}while(h);f.delete(d)}r[--t]=d}}}function tn(n){for(var e=new Set,t=0,r=n.length;t<r;t++){var s=n[t];e.add(s[0]),e.add(s[1])}return Array.from(e)}function nn(n){for(var e=new Map,t=0,r=n.length;t<r;t++){var s=n[t];e.has(s[0])||e.set(s[0],new Set),e.has(s[1])||e.set(s[1],new Set),e.get(s[0]).add(s[1])}return e}function rn(n){for(var e=new Map,t=0,r=n.length;t<r;t++)e.set(n[t],t);return e}var sn=Se.exports;const an=kt(sn),on=Object.prototype.toString,un=Error.prototype.toString,ln=RegExp.prototype.toString,cn=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",dn=/^Symbol\((.*)\)(.*)$/;function hn(n){return n!=+n?"NaN":n===0&&1/n<0?"-0":""+n}function We(n,e=!1){if(n==null||n===!0||n===!1)return""+n;const t=typeof n;if(t==="number")return hn(n);if(t==="string")return e?`"${n}"`:n;if(t==="function")return"[Function "+(n.name||"anonymous")+"]";if(t==="symbol")return cn.call(n).replace(dn,"Symbol($1)");const r=on.call(n).slice(8,-1);return r==="Date"?isNaN(n.getTime())?""+n:n.toISOString(n):r==="Error"||n instanceof Error?"["+un.call(n)+"]":r==="RegExp"?ln.call(n):null}function A(n,e){let t=We(n,e);return t!==null?t:JSON.stringify(n,function(r,s){let i=We(this[r],e);return i!==null?i:s},2)}function et(n){return n==null?[]:[].concat(n)}let tt,nt,rt,fn=/\$\{\s*(\w+)\s*\}/g;tt=Symbol.toStringTag;class Ye{constructor(e,t,r,s){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[tt]="Error",this.name="ValidationError",this.value=t,this.path=r,this.type=s,this.errors=[],this.inner=[],et(e).forEach(i=>{if(O.isError(i)){this.errors.push(...i.errors);const o=i.inner.length?i.inner:[i];this.inner.push(...o)}else this.errors.push(i)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}nt=Symbol.hasInstance;rt=Symbol.toStringTag;class O extends Error{static formatError(e,t){const r=t.label||t.path||"this";return r!==t.path&&(t=Object.assign({},t,{path:r})),typeof e=="string"?e.replace(fn,(s,i)=>A(t[i])):typeof e=="function"?e(t):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,t,r,s,i){const o=new Ye(e,t,r,s);if(i)return o;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[rt]="Error",this.name=o.name,this.message=o.message,this.type=o.type,this.value=o.value,this.path=o.path,this.errors=o.errors,this.inner=o.inner,Error.captureStackTrace&&Error.captureStackTrace(this,O)}static[nt](e){return Ye[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let T={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:n,type:e,value:t,originalValue:r})=>{const s=r!=null&&r!==t?` (cast from the value \`${A(r,!0)}\`).`:".";return e!=="mixed"?`${n} must be a \`${e}\` type, but the final value was: \`${A(t,!0)}\``+s:`${n} must match the configured type. The validated value was: \`${A(t,!0)}\``+s}},$={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},C={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},we={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},mn={isValue:"${path} field must be ${value}"},ke={noUnknown:"${path} field has unspecified keys: ${unknown}"},pn={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},xn={notType:n=>{const{path:e,value:t,spec:r}=n,s=r.types.length;if(Array.isArray(t)){if(t.length<s)return`${e} tuple value has too few items, expected a length of ${s} but got ${t.length} for value: \`${A(t,!0)}\``;if(t.length>s)return`${e} tuple value has too many items, expected a length of ${s} but got ${t.length} for value: \`${A(t,!0)}\``}return O.formatError(T.notType,n)}};Object.assign(Object.create(null),{mixed:T,string:$,number:C,date:we,object:ke,array:pn,boolean:mn,tuple:xn});const De=n=>n&&n.__isYupSchema__;class ae{static fromOptions(e,t){if(!t.then&&!t.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:s,otherwise:i}=t,o=typeof r=="function"?r:(...u)=>u.every(l=>l===r);return new ae(e,(u,l)=>{var d;let h=o(...u)?s:i;return(d=h==null?void 0:h(l))!=null?d:l})}constructor(e,t){this.fn=void 0,this.refs=e,this.refs=e,this.fn=t}resolve(e,t){let r=this.refs.map(i=>i.getValue(t==null?void 0:t.value,t==null?void 0:t.parent,t==null?void 0:t.context)),s=this.fn(r,e,t);if(s===void 0||s===e)return e;if(!De(s))throw new TypeError("conditions must return a schema object");return s.resolve(t)}}const se={context:"$",value:"."};class I{constructor(e,t={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===se.context,this.isValue=this.key[0]===se.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?se.context:this.isValue?se.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&R.getter(this.path,!0),this.map=t.map}getValue(e,t,r){let s=this.isContext?r:this.isValue?e:t;return this.getter&&(s=this.getter(s||{})),this.map&&(s=this.map(s)),s}cast(e,t){return this.getValue(e,t==null?void 0:t.parent,t==null?void 0:t.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}I.prototype.__isYupRef=!0;const M=n=>n==null;function L(n){function e({value:t,path:r="",options:s,originalValue:i,schema:o},u,l){const{name:d,test:h,params:f,message:p,skipAbsent:b}=n;let{parent:j,context:v,abortEarly:_=o.spec.abortEarly,disableStackTrace:N=o.spec.disableStackTrace}=s;function y(w){return I.isRef(w)?w.getValue(t,j,v):w}function k(w={}){const Y=Object.assign({value:t,originalValue:i,label:o.spec.label,path:w.path||r,spec:o.spec,disableStackTrace:w.disableStackTrace||N},f,w.params);for(const Pe of Object.keys(Y))Y[Pe]=y(Y[Pe]);const Me=new O(O.formatError(w.message||p,Y),t,Y.path,w.type||d,Y.disableStackTrace);return Me.params=Y,Me}const W=_?u:l;let fe={path:r,parent:j,type:d,from:s.from,createError:k,resolve:y,options:s,originalValue:i,schema:o};const me=w=>{O.isError(w)?W(w):w?l(null):W(k())},Te=w=>{O.isError(w)?W(w):u(w)};if(b&&M(t))return me(!0);let ne;try{var Ee;if(ne=h.call(fe,t,fe),typeof((Ee=ne)==null?void 0:Ee.then)=="function"){if(s.sync)throw new Error(`Validation test of type: "${fe.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(ne).then(me,Te)}}catch(w){Te(w);return}me(ne)}return e.OPTIONS=n,e}function gn(n,e,t,r=t){let s,i,o;return e?(R.forEach(e,(u,l,d)=>{let h=l?u.slice(1,u.length-1):u;n=n.resolve({context:r,parent:s,value:t});let f=n.type==="tuple",p=d?parseInt(h,10):0;if(n.innerType||f){if(f&&!d)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(t&&p>=t.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${u}, in the path: ${e}. because there is no value at that index. `);s=t,t=t&&t[p],n=f?n.spec.types[p]:n.innerType}if(!d){if(!n.fields||!n.fields[h])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${n.type}")`);s=t,t=t&&t[h],n=n.fields[h]}i=h,o=l?"["+u+"]":"."+u}),{schema:n,parent:s,parentPath:i}):{parent:s,parentPath:e,schema:n}}class oe extends Set{describe(){const e=[];for(const t of this.values())e.push(I.isRef(t)?t.describe():t);return e}resolveAll(e){let t=[];for(const r of this.values())t.push(e(r));return t}clone(){return new oe(this.values())}merge(e,t){const r=this.clone();return e.forEach(s=>r.add(s)),t.forEach(s=>r.delete(s)),r}}function J(n,e=new Map){if(De(n)||!n||typeof n!="object")return n;if(e.has(n))return e.get(n);let t;if(n instanceof Date)t=new Date(n.getTime()),e.set(n,t);else if(n instanceof RegExp)t=new RegExp(n),e.set(n,t);else if(Array.isArray(n)){t=new Array(n.length),e.set(n,t);for(let r=0;r<n.length;r++)t[r]=J(n[r],e)}else if(n instanceof Map){t=new Map,e.set(n,t);for(const[r,s]of n.entries())t.set(r,J(s,e))}else if(n instanceof Set){t=new Set,e.set(n,t);for(const r of n)t.add(J(r,e))}else if(n instanceof Object){t={},e.set(n,t);for(const[r,s]of Object.entries(n))t[r]=J(s,e)}else throw Error(`Unable to clone ${n}`);return t}class S{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new oe,this._blacklist=new oe,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(T.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(t=>{t.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const t=Object.create(Object.getPrototypeOf(this));return t.type=this.type,t._typeCheck=this._typeCheck,t._whitelist=this._whitelist.clone(),t._blacklist=this._blacklist.clone(),t.internalTests=Object.assign({},this.internalTests),t.exclusiveTests=Object.assign({},this.exclusiveTests),t.deps=[...this.deps],t.conditions=[...this.conditions],t.tests=[...this.tests],t.transforms=[...this.transforms],t.spec=J(Object.assign({},this.spec,e)),t}label(e){let t=this.clone();return t.spec.label=e,t}meta(...e){if(e.length===0)return this.spec.meta;let t=this.clone();return t.spec.meta=Object.assign(t.spec.meta||{},e[0]),t}withMutation(e){let t=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=t,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let t=this,r=e.clone();const s=Object.assign({},t.spec,r.spec);return r.spec=s,r.internalTests=Object.assign({},t.internalTests,r.internalTests),r._whitelist=t._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=t._blacklist.merge(e._blacklist,e._whitelist),r.tests=t.tests,r.exclusiveTests=t.exclusiveTests,r.withMutation(i=>{e.tests.forEach(o=>{i.test(o.OPTIONS)})}),r.transforms=[...t.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let t=this;if(t.conditions.length){let r=t.conditions;t=t.clone(),t.conditions=[],t=r.reduce((s,i)=>i.resolve(s,e),t),t=t.resolve(e)}return t}resolveOptions(e){var t,r,s,i;return Object.assign({},e,{from:e.from||[],strict:(t=e.strict)!=null?t:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(s=e.recursive)!=null?s:this.spec.recursive,disableStackTrace:(i=e.disableStackTrace)!=null?i:this.spec.disableStackTrace})}cast(e,t={}){let r=this.resolve(Object.assign({value:e},t)),s=t.assert==="ignore-optionality",i=r._cast(e,t);if(t.assert!==!1&&!r.isType(i)){if(s&&M(i))return i;let o=A(e),u=A(i);throw new TypeError(`The value of ${t.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(u!==o?`result of cast: ${u}`:""))}return i}_cast(e,t){let r=e===void 0?e:this.transforms.reduce((s,i)=>i.call(this,s,e,this),e);return r===void 0&&(r=this.getDefault(t)),r}_validate(e,t={},r,s){let{path:i,originalValue:o=e,strict:u=this.spec.strict}=t,l=e;u||(l=this._cast(l,Object.assign({assert:!1},t)));let d=[];for(let h of Object.values(this.internalTests))h&&d.push(h);this.runTests({path:i,value:l,originalValue:o,options:t,tests:d},r,h=>{if(h.length)return s(h,l);this.runTests({path:i,value:l,originalValue:o,options:t,tests:this.tests},r,s)})}runTests(e,t,r){let s=!1,{tests:i,value:o,originalValue:u,path:l,options:d}=e,h=v=>{s||(s=!0,t(v,o))},f=v=>{s||(s=!0,r(v,o))},p=i.length,b=[];if(!p)return f([]);let j={value:o,originalValue:u,path:l,options:d,schema:this};for(let v=0;v<i.length;v++){const _=i[v];_(j,h,function(y){y&&(Array.isArray(y)?b.push(...y):b.push(y)),--p<=0&&f(b)})}}asNestedTest({key:e,index:t,parent:r,parentPath:s,originalParent:i,options:o}){const u=e??t;if(u==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof u=="number";let d=r[u];const h=Object.assign({},o,{strict:!0,parent:r,value:d,originalValue:i[u],key:void 0,[l?"index":"key"]:u,path:l||u.includes(".")?`${s||""}[${l?u:`"${u}"`}]`:(s?`${s}.`:"")+e});return(f,p,b)=>this.resolve(h)._validate(d,h,p,b)}validate(e,t){var r;let s=this.resolve(Object.assign({},t,{value:e})),i=(r=t==null?void 0:t.disableStackTrace)!=null?r:s.spec.disableStackTrace;return new Promise((o,u)=>s._validate(e,t,(l,d)=>{O.isError(l)&&(l.value=d),u(l)},(l,d)=>{l.length?u(new O(l,d,void 0,void 0,i)):o(d)}))}validateSync(e,t){var r;let s=this.resolve(Object.assign({},t,{value:e})),i,o=(r=t==null?void 0:t.disableStackTrace)!=null?r:s.spec.disableStackTrace;return s._validate(e,Object.assign({},t,{sync:!0}),(u,l)=>{throw O.isError(u)&&(u.value=l),u},(u,l)=>{if(u.length)throw new O(u,e,void 0,void 0,o);i=l}),i}isValid(e,t){return this.validate(e,t).then(()=>!0,r=>{if(O.isError(r))return!1;throw r})}isValidSync(e,t){try{return this.validateSync(e,t),!0}catch(r){if(O.isError(r))return!1;throw r}}_getDefault(e){let t=this.spec.default;return t==null?t:typeof t=="function"?t.call(this,e):J(t)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,t){const r=this.clone({nullable:e});return r.internalTests.nullable=L({message:t,name:"nullable",test(s){return s===null?this.schema.spec.nullable:!0}}),r}optionality(e,t){const r=this.clone({optional:e});return r.internalTests.optionality=L({message:t,name:"optionality",test(s){return s===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=T.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=T.notNull){return this.nullability(!1,e)}required(e=T.required){return this.clone().withMutation(t=>t.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let t=this.clone();return t.transforms.push(e),t}test(...e){let t;if(e.length===1?typeof e[0]=="function"?t={test:e[0]}:t=e[0]:e.length===2?t={name:e[0],test:e[1]}:t={name:e[0],message:e[1],test:e[2]},t.message===void 0&&(t.message=T.default),typeof t.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),s=L(t),i=t.exclusive||t.name&&r.exclusiveTests[t.name]===!0;if(t.exclusive&&!t.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return t.name&&(r.exclusiveTests[t.name]=!!t.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===t.name&&(i||o.OPTIONS.test===s.OPTIONS.test))),r.tests.push(s),r}when(e,t){!Array.isArray(e)&&typeof e!="string"&&(t=e,e=".");let r=this.clone(),s=et(e).map(i=>new I(i));return s.forEach(i=>{i.isSibling&&r.deps.push(i.key)}),r.conditions.push(typeof t=="function"?new ae(s,t):ae.fromOptions(s,t)),r}typeError(e){let t=this.clone();return t.internalTests.typeError=L({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),t}oneOf(e,t=T.oneOf){let r=this.clone();return e.forEach(s=>{r._whitelist.add(s),r._blacklist.delete(s)}),r.internalTests.whiteList=L({message:t,name:"oneOf",skipAbsent:!0,test(s){let i=this.schema._whitelist,o=i.resolveAll(this.resolve);return o.includes(s)?!0:this.createError({params:{values:Array.from(i).join(", "),resolved:o}})}}),r}notOneOf(e,t=T.notOneOf){let r=this.clone();return e.forEach(s=>{r._blacklist.add(s),r._whitelist.delete(s)}),r.internalTests.blacklist=L({message:t,name:"notOneOf",test(s){let i=this.schema._blacklist,o=i.resolveAll(this.resolve);return o.includes(s)?this.createError({params:{values:Array.from(i).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let t=this.clone();return t.spec.strip=e,t}describe(e){const t=(e?this.resolve(e):this).clone(),{label:r,meta:s,optional:i,nullable:o}=t.spec;return{meta:s,label:r,optional:i,nullable:o,default:t.getDefault(e),type:t.type,oneOf:t._whitelist.describe(),notOneOf:t._blacklist.describe(),tests:t.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,d,h)=>h.findIndex(f=>f.name===l.name)===d)}}}S.prototype.__isYupSchema__=!0;for(const n of["validate","validateSync"])S.prototype[`${n}At`]=function(e,t,r={}){const{parent:s,parentPath:i,schema:o}=gn(this,e,t,r.context);return o[n](s&&s[i],Object.assign({},r,{parent:s,path:e}))};for(const n of["equals","is"])S.prototype[n]=S.prototype.oneOf;for(const n of["not","nope"])S.prototype[n]=S.prototype.notOneOf;const bn=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function yn(n){const e=ve(n);if(!e)return Date.parse?Date.parse(n):Number.NaN;if(e.z===void 0&&e.plusMinus===void 0)return new Date(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond).valueOf();let t=0;return e.z!=="Z"&&e.plusMinus!==void 0&&(t=e.hourOffset*60+e.minuteOffset,e.plusMinus==="+"&&(t=0-t)),Date.UTC(e.year,e.month,e.day,e.hour,e.minute+t,e.second,e.millisecond)}function ve(n){var e,t;const r=bn.exec(n);return r?{year:E(r[1]),month:E(r[2],1)-1,day:E(r[3],1),hour:E(r[4]),minute:E(r[5]),second:E(r[6]),millisecond:r[7]?E(r[7].substring(0,3)):0,precision:(e=(t=r[7])==null?void 0:t.length)!=null?e:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:E(r[10]),minuteOffset:E(r[11])}:null}function E(n,e=0){return Number(n)||e}let wn=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,kn=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,vn=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,jn="^\\d{4}-\\d{2}-\\d{2}",$n="\\d{2}:\\d{2}:\\d{2}",On="(([+-]\\d{2}(:?\\d{2})?)|Z)",_n=new RegExp(`${jn}T${$n}(\\.\\d+)?${On}$`),Fn=n=>M(n)||n===n.trim(),Sn={}.toString();function st(){return new it}class it extends S{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,t,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const s=e!=null&&e.toString?e.toString():e;return s===Sn?e:s})})}required(e){return super.required(e).withMutation(t=>t.test({message:e||T.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(t=>t.OPTIONS.name!=="required"),e))}length(e,t=$.length){return this.test({message:t,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,t=$.min){return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,t=$.max){return this.test({name:"max",exclusive:!0,message:t,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,t){let r=!1,s,i;return t&&(typeof t=="object"?{excludeEmptyString:r=!1,message:s,name:i}=t:s=t),this.test({name:i||"matches",message:s||$.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=$.email){return this.matches(wn,{name:"email",message:e,excludeEmptyString:!0})}url(e=$.url){return this.matches(kn,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=$.uuid){return this.matches(vn,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let t="",r,s;return e&&(typeof e=="object"?{message:t="",allowOffset:r=!1,precision:s=void 0}=e:t=e),this.matches(_n,{name:"datetime",message:t||$.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:t||$.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:i=>{if(!i||r)return!0;const o=ve(i);return o?!!o.z:!1}}).test({name:"datetime_precision",message:t||$.datetime_precision,params:{precision:s},skipAbsent:!0,test:i=>{if(!i||s==null)return!0;const o=ve(i);return o?o.precision===s:!1}})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=$.trim){return this.transform(t=>t!=null?t.trim():t).test({message:e,name:"trim",test:Fn})}lowercase(e=$.lowercase){return this.transform(t=>M(t)?t:t.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:t=>M(t)||t===t.toLowerCase()})}uppercase(e=$.uppercase){return this.transform(t=>M(t)?t:t.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:t=>M(t)||t===t.toUpperCase()})}}st.prototype=it.prototype;let Dn=n=>n!=+n;function je(){return new at}class at extends S{constructor(){super({type:"number",check(e){return e instanceof Number&&(e=e.valueOf()),typeof e=="number"&&!Dn(e)}}),this.withMutation(()=>{this.transform((e,t,r)=>{if(!r.spec.coerce)return e;let s=e;if(typeof s=="string"){if(s=s.replace(/\s/g,""),s==="")return NaN;s=+s}return r.isType(s)||s===null?s:parseFloat(s)})})}min(e,t=C.min){return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r>=this.resolve(e)}})}max(e,t=C.max){return this.test({message:t,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(r){return r<=this.resolve(e)}})}lessThan(e,t=C.lessThan){return this.test({message:t,name:"max",exclusive:!0,params:{less:e},skipAbsent:!0,test(r){return r<this.resolve(e)}})}moreThan(e,t=C.moreThan){return this.test({message:t,name:"min",exclusive:!0,params:{more:e},skipAbsent:!0,test(r){return r>this.resolve(e)}})}positive(e=C.positive){return this.moreThan(0,e)}negative(e=C.negative){return this.lessThan(0,e)}integer(e=C.integer){return this.test({name:"integer",message:e,skipAbsent:!0,test:t=>Number.isInteger(t)})}truncate(){return this.transform(e=>M(e)?e:e|0)}round(e){var t;let r=["ceil","floor","round","trunc"];if(e=((t=e)==null?void 0:t.toLowerCase())||"round",e==="trunc")return this.truncate();if(r.indexOf(e.toLowerCase())===-1)throw new TypeError("Only valid options for round() are: "+r.join(", "));return this.transform(s=>M(s)?s:Math[e](s))}}je.prototype=at.prototype;let Tn=new Date(""),En=n=>Object.prototype.toString.call(n)==="[object Date]";class de extends S{constructor(){super({type:"date",check(e){return En(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,t,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=yn(e),isNaN(e)?de.INVALID_DATE:new Date(e)))})}prepareParam(e,t){let r;if(I.isRef(e))r=e;else{let s=this.cast(e);if(!this._typeCheck(s))throw new TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);r=s}return r}min(e,t=we.min){let r=this.prepareParam(e,"min");return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(s){return s>=this.resolve(r)}})}max(e,t=we.max){let r=this.prepareParam(e,"max");return this.test({message:t,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(s){return s<=this.resolve(r)}})}}de.INVALID_DATE=Tn;de.prototype;function Mn(n,e=[]){let t=[],r=new Set,s=new Set(e.map(([o,u])=>`${o}-${u}`));function i(o,u){let l=R.split(o)[0];r.add(l),s.has(`${u}-${l}`)||t.push([u,l])}for(const o of Object.keys(n)){let u=n[o];r.add(o),I.isRef(u)&&u.isSibling?i(u.path,o):De(u)&&"deps"in u&&u.deps.forEach(l=>i(l,o))}return an.array(Array.from(r),t).reverse()}function ze(n,e){let t=1/0;return n.some((r,s)=>{var i;if((i=e.path)!=null&&i.includes(r))return t=s,!0}),t}function ot(n){return(e,t)=>ze(n,e)-ze(n,t)}const Pn=(n,e,t)=>{if(typeof n!="string")return n;let r=n;try{r=JSON.parse(n)}catch{}return t.isType(r)?r:n};function ie(n){if("fields"in n){const e={};for(const[t,r]of Object.entries(n.fields))e[t]=ie(r);return n.setFields(e)}if(n.type==="array"){const e=n.optional();return e.innerType&&(e.innerType=ie(e.innerType)),e}return n.type==="tuple"?n.optional().clone({types:n.spec.types.map(ie)}):"optional"in n?n.optional():n}const Cn=(n,e)=>{const t=[...R.normalizePath(e)];if(t.length===1)return t[0]in n;let r=t.pop(),s=R.getter(R.join(t),!0)(n);return!!(s&&r in s)};let Re=n=>Object.prototype.toString.call(n)==="[object Object]";function An(n,e){let t=Object.keys(n.fields);return Object.keys(e).filter(r=>t.indexOf(r)===-1)}const Nn=ot([]);function ut(n){return new lt(n)}class lt extends S{constructor(e){super({type:"object",check(t){return Re(t)||typeof t=="function"}}),this.fields=Object.create(null),this._sortErrors=Nn,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,t={}){var r;let s=super._cast(e,t);if(s===void 0)return this.getDefault(t);if(!this._typeCheck(s))return s;let i=this.fields,o=(r=t.stripUnknown)!=null?r:this.spec.noUnknown,u=[].concat(this._nodes,Object.keys(s).filter(f=>!this._nodes.includes(f))),l={},d=Object.assign({},t,{parent:l,__validating:t.__validating||!1}),h=!1;for(const f of u){let p=i[f],b=f in s;if(p){let j,v=s[f];d.path=(t.path?`${t.path}.`:"")+f,p=p.resolve({value:v,context:t.context,parent:l});let _=p instanceof S?p.spec:void 0,N=_==null?void 0:_.strict;if(_!=null&&_.strip){h=h||f in s;continue}j=!t.__validating||!N?p.cast(s[f],d):s[f],j!==void 0&&(l[f]=j)}else b&&!o&&(l[f]=s[f]);(b!==f in l||l[f]!==s[f])&&(h=!0)}return h?l:s}_validate(e,t={},r,s){let{from:i=[],originalValue:o=e,recursive:u=this.spec.recursive}=t;t.from=[{schema:this,value:o},...i],t.__validating=!0,t.originalValue=o,super._validate(e,t,r,(l,d)=>{if(!u||!Re(d)){s(l,d);return}o=o||d;let h=[];for(let f of this._nodes){let p=this.fields[f];!p||I.isRef(p)||h.push(p.asNestedTest({options:t,key:f,parent:d,parentPath:t.path,originalParent:o}))}this.runTests({tests:h,value:d,originalValue:o,options:t},r,f=>{s(f.sort(this._sortErrors).concat(l),d)})})}clone(e){const t=super.clone(e);return t.fields=Object.assign({},this.fields),t._nodes=this._nodes,t._excludedEdges=this._excludedEdges,t._sortErrors=this._sortErrors,t}concat(e){let t=super.concat(e),r=t.fields;for(let[s,i]of Object.entries(this.fields)){const o=r[s];r[s]=o===void 0?i:o}return t.withMutation(s=>s.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let t={};return this._nodes.forEach(r=>{var s;const i=this.fields[r];let o=e;(s=o)!=null&&s.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),t[r]=i&&"getDefault"in i?i.getDefault(o):void 0}),t}setFields(e,t){let r=this.clone();return r.fields=e,r._nodes=Mn(e,t),r._sortErrors=ot(Object.keys(e)),t&&(r._excludedEdges=t),r}shape(e,t=[]){return this.clone().withMutation(r=>{let s=r._excludedEdges;return t.length&&(Array.isArray(t[0])||(t=[t]),s=[...r._excludedEdges,...t]),r.setFields(Object.assign(r.fields,e),s)})}partial(){const e={};for(const[t,r]of Object.entries(this.fields))e[t]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return ie(this)}pick(e){const t={};for(const r of e)this.fields[r]&&(t[r]=this.fields[r]);return this.setFields(t,this._excludedEdges.filter(([r,s])=>e.includes(r)&&e.includes(s)))}omit(e){const t=[];for(const r of Object.keys(this.fields))e.includes(r)||t.push(r);return this.pick(t)}from(e,t,r){let s=R.getter(e,!0);return this.transform(i=>{if(!i)return i;let o=i;return Cn(i,e)&&(o=Object.assign({},i),r||delete o[e],o[t]=s(i)),o})}json(){return this.transform(Pn)}noUnknown(e=!0,t=ke.noUnknown){typeof e!="boolean"&&(t=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:t,test(s){if(s==null)return!0;const i=An(this.schema,s);return!e||i.length===0||this.createError({params:{unknown:i.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,t=ke.noUnknown){return this.noUnknown(!e,t)}transformKeys(e){return this.transform(t=>{if(!t)return t;const r={};for(const s of Object.keys(t))r[e(s)]=t[s];return r})}camelCase(){return this.transformKeys(ge.camelCase)}snakeCase(){return this.transformKeys(ge.snakeCase)}constantCase(){return this.transformKeys(e=>ge.snakeCase(e).toUpperCase())}describe(e){const t=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[i,o]of Object.entries(t.fields)){var s;let u=e;(s=u)!=null&&s.value&&(u=Object.assign({},u,{parent:u.value,value:u.value[i]})),r.fields[i]=o.describe(u)}return r}}ut.prototype=lt.prototype;function Wn(){const{addDailyNorma:n}=Rt(),e=t=>{const{gender:r,weight:s,activityHours:i}=t;if(r&&s&&i){if(r==="man")return parseFloat(s)*.04+parseFloat(i)*.6;if(r==="woman")return parseFloat(s)*.03+parseFloat(i)*.4}return null};return a.jsxs("div",{children:[a.jsx("h2",{children:"My daily norma"}),a.jsx(vt,{initialValues:{gender:"man",weight:"",activityHours:""},validationSchema:ut().shape({gender:st().required("Gender is required"),weight:je().required("Weight is required").positive().integer(),activityHours:je().required("Activity hours is required").positive().integer()}),onSubmit:(t,{setSubmitting:r})=>{const s=e(t);n({waterIntake:s}),console.log("Form data:",{...t,waterIntake:s}),r(!1)},children:({isSubmitting:t,errors:r,touched:s,values:i,setFieldValue:o})=>a.jsxs(jt,{children:[a.jsxs("div",{children:[a.jsx("p",{children:"For girl: V=(M*0,03) + (T*0,4)"}),a.jsx("p",{children:"For man: V=(M*0,04) + (T*0,6)"})]}),a.jsx("span",{children:"* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"}),a.jsxs("div",{children:[a.jsx("p",{children:"Calculate your rate:"}),a.jsxs("label",{children:[a.jsx(re,{type:"radio",name:"gender",value:"man",onChange:()=>o("gender","man")}),"From man"]}),a.jsxs("label",{children:[a.jsx(re,{type:"radio",name:"gender",value:"woman",onChange:()=>o("gender","woman")}),"From woman"]}),r.gender&&s.gender&&a.jsx("div",{children:r.gender})]}),a.jsx("div",{children:a.jsxs("label",{children:["Your weight in kilograms:",a.jsx(re,{type:"number",name:"weight"}),r.weight&&s.weight&&a.jsx("div",{children:r.weight})]})}),a.jsx("div",{children:a.jsxs("label",{children:["The time of active participation in sports or other activities with a high physical. load in hours:",a.jsx(re,{type:"number",name:"activityHours"}),r.activityHours&&s.activityHours&&a.jsx("div",{children:r.activityHours})]})}),a.jsxs("p",{children:["Your recommended water intake per day is:",e(i)?parseFloat(e(i)).toFixed(2):0,"liters"]}),a.jsx("button",{type:"submit",disabled:t,children:"Submit"})]})})]})}const Yn=()=>{const[n,e]=F.useState(!1),t=()=>{e(!n)},s=(2e3/1e3).toFixed(1)+" L";return a.jsxs(Tt,{children:[a.jsxs(Pt,{children:[a.jsx(Mt,{children:"My daily norma"}),a.jsxs(Ct,{children:[a.jsx("p",{children:s}),a.jsx(At,{type:"button",onClick:t,children:"Edit"})]})]}),a.jsx(Et,{}),n&&a.jsx($e,{onClose:t,children:a.jsx(Wn,{})})]})},zn=m.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 40px;

  @media screen and (min-width: ${c.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 32px;
  }

  @media screen and (min-width: ${c.breakpoint.desktop}) {
    gap: 23px;
  }
`,Rn=m.h3`
  font-size: 18px;
  font-weight: 400;
  color: ${c.colors.blue};
  text-align: left;
  line-height: 1;
  width: 100%;
`,qn=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Bn=m.div`
  width: 256px;
  margin: 5px 14px;

  @media screen and (min-width: ${c.breakpoint.tablet}) {
    width: 325px;
  }

  @media screen and (min-width: ${c.breakpoint.desktop}) {
    width: 360px;
  }
`,In=m.div`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${c.colors.paleBlue};
`,Ln=m.span`
  /* width: 50%; */
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${c.colors.skyBlue};
  transition: width 0.5s ease-out;
  position: relative;

  ::before {
    position: absolute;
    display: block;
    top: 0;
    right: -7px;
    content: '';
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: ${c.colors.white};
    border: solid 1px ${c.colors.blue};

    margin-top: -3px;
  }
`,Hn=m.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`,Vn=m.span`
  transform: translateX(-50%);
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${c.colors.blue};

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    color: ${c.colors.paleBlue};
  }
`,Xn=m.span`
  transform: translateX(50%);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${c.colors.blue};

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${c.colors.paleBlue};
  }
`,Un=m.span`
  position: absolute;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  margin-bottom: 4px;
  margin-left: -2px;
  color: ${c.colors.blue};
  left: ${n=>n.left};

  transition: all 0.5s ease-out;

  &::before {
    content: '|';
    justify-content: center;
    align-items: center;
    color: ${c.colors.paleBlue};
    font-size: 12px;
  }
`,Gn=m.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 6px 76px 6px 76px;
  background-color: ${c.colors.blue};
  color: ${c.colors.white};
  border: none;
  /* box-shadow: ${c.boxShadowBtn};  */
  box-shadow: ${c.boxShadowBtn.hoverBtn};
  width: 256px;
  margin-left: 14px;

  svg {
    width: 24px;
    height: 24px;
    fill: ${c.colors.blue};
    stroke: ${c.colors.white};
  }

  &:hover {
    box-shadow: ${c.boxShadowBtn.hoverBtn};
  }

  @media screen and (min-width: ${c.breakpoint.tablet}) {
    max-width: 336px;
    height: 43px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${c.breakpoint.desktop}) {
    width: 178px;
    height: 44px;
    padding: 10px 30px 10px 30px;
  }
`,Qn=()=>{const[n,e]=F.useState(!1),t=()=>{e(!n)},r=88;return a.jsxs(zn,{children:[a.jsxs(qn,{children:[a.jsx(Rn,{children:"Today"}),a.jsxs(Bn,{children:[a.jsx(In,{children:a.jsx(Ln,{style:{width:`${Math.min(r,100)}%`}})}),a.jsxs(Hn,{children:[a.jsx(Vn,{children:"0%"}),a.jsxs(Un,{left:`${r}%`,children:[r,"%"]}),a.jsx(Xn,{children:"100%"})]})]})]}),a.jsxs(Gn,{onClick:t,children:[a.jsx("svg",{children:a.jsx("use",{href:`${g}#icon-outline`})}),"Add water"]}),n&&a.jsx($e,{onClose:t,children:a.jsx("h2",{children:"ProgressBar"})})]})},Zn=m.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`,Jn=m.div`
  height: 212px;
  overflow: auto;
  margin-bottom: 12px;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${c.colors.paleBlue};
    width: 2px;
    margin: 0 auto;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    width: 6px;
    height: 100px;
    border-radius: 3px;
    background-color: ${c.colors.skyBlue};
  }
`,H=m.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-top: 12px;
  ::after {
    content: '';
    height: 1px;
    width: 98%;
    position: absolute;
    bottom: 5px;
    left: 0;
    display: block;
    background-color: ${c.colors.paleBlue};
  }
`,Kn=m.h3`
  font-size: 24px;
  font-weight: 500;
  /* font-family: 'Roboto'; */
  color: ${c.colors.black};
  text-align: left;
  line-height: 1.25;
  margin-bottom: 15px;

  @media screen and (min-width: ${c.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 1.23;
  }
`,V=m.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  h4 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    color: ${c.colors.blue};
  }
  p {
    font-size: 12px;
    line-height: 24px;
    font-weight: 400;
    color: ${c.colors.black};
    span {
      text-transform: uppercase;
    }
    svg {
      width: 26px;
      height: 26px;
    }
  }
`,X=m.svg`
  width: 26px;
  height: 26px;
  fill: transparent;
  @media screen and (min-width: ${c.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,U=m.div`
  display: flex;
  gap: 18px;
  margin-right: 10px;
`,G=m.svg`
  width: 16px;
  height: 16px;
  stroke: ${c.colors.skyBlue};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${c.colors.skyBlue};
  }
`,Q=m.svg`
  width: 16px;
  height: 16px;
  stroke: ${c.colors.brightRed};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${c.colors.brightRed};
  }
`,er=m.button`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: transparent;
  color: ${c.colors.blue};
  border: none;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  stroke: ${c.colors.blue};

  & svg {
    width: 16px;
    height: 16px;
    fill: ${c.colors.blue};
    stroke: transparent;
    padding-bottom: 2px;
    &:hover {
      fill: ${c.colors.orange};
    }
  }

  @media screen and (min-width: ${c.breakpoint.tablet}) {
    font-size: 18px;
    line-height: 1.33;
  }

  & svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    color: ${c.colors.orange};
    fill: ${c.colors.orange};
  }
`,tr=()=>{const[n,e]=F.useState(!1),t=()=>{e(!n)};return a.jsxs(a.Fragment,{children:[a.jsxs(Zn,{children:[a.jsx(Kn,{children:"Today"}),a.jsxs(Jn,{children:[a.jsxs(H,{children:[a.jsxs(V,{children:[a.jsx(X,{children:a.jsx("use",{href:`${g}#icon-glass`})}),a.jsx("h4",{children:"250ml"}),a.jsxs("p",{children:["7:00",a.jsx("span",{children:"AM"})]})]}),a.jsxs(U,{children:[a.jsx(G,{children:a.jsx("use",{href:`${g}#icon-note`})}),a.jsx(Q,{children:a.jsx("use",{href:`${g}#icon-trash`})})]})]}),a.jsxs(H,{children:[a.jsxs(V,{children:[a.jsx(X,{children:a.jsx("use",{href:`${g}#icon-glass`})}),a.jsx("h4",{children:"250ml"}),a.jsxs("p",{children:["7:00",a.jsx("span",{children:"AM"})]})]}),a.jsxs(U,{children:[a.jsx(G,{children:a.jsx("use",{href:`${g}#icon-note`})}),a.jsx(Q,{children:a.jsx("use",{href:`${g}#icon-trash`})})]})]}),a.jsxs(H,{children:[a.jsxs(V,{children:[a.jsx(X,{children:a.jsx("use",{href:`${g}#icon-glass`})}),a.jsx("h4",{children:"250ml"}),a.jsxs("p",{children:["7:00",a.jsx("span",{children:"AM"})]})]}),a.jsxs(U,{children:[a.jsx(G,{children:a.jsx("use",{href:`${g}#icon-note`})}),a.jsx(Q,{children:a.jsx("use",{href:`${g}#icon-trash`})})]})]}),a.jsxs(H,{children:[a.jsxs(V,{children:[a.jsx(X,{children:a.jsx("use",{href:`${g}#icon-glass`})}),a.jsx("h4",{children:"250ml"}),a.jsxs("p",{children:["7:00",a.jsx("span",{children:"AM"})]})]}),a.jsxs(U,{children:[a.jsx(G,{children:a.jsx("use",{href:`${g}#icon-note`})}),a.jsx(Q,{children:a.jsx("use",{href:`${g}#icon-trash`})})]})]}),a.jsxs(H,{children:[a.jsxs(V,{children:[a.jsx(X,{children:a.jsx("use",{href:`${g}#icon-glass`})}),a.jsx("h4",{children:"250ml"}),a.jsxs("p",{children:["7:00",a.jsx("span",{children:"AM"})]})]}),a.jsxs(U,{children:[a.jsx(G,{children:a.jsx("use",{href:`${g}#icon-note`})}),a.jsx(Q,{children:a.jsx("use",{href:`${g}#icon-trash`})})]})]}),a.jsxs(H,{children:[a.jsxs(V,{children:[a.jsx(X,{children:a.jsx("use",{href:`${g}#icon-glass`})}),a.jsx("h4",{children:"250ml"}),a.jsxs("p",{children:["7:00",a.jsx("span",{children:"AM"})]})]}),a.jsxs(U,{children:[a.jsx(G,{children:a.jsx("use",{href:`${g}#icon-note`})}),a.jsx(Q,{children:a.jsx("use",{href:`${g}#icon-trash`})})]})]})]}),a.jsxs(er,{onClick:t,children:[a.jsx("svg",{children:a.jsx("use",{href:`${g}#icon-increment`})}),"Add water"]})]}),n&&a.jsx($e,{onClose:t,children:a.jsx("h2",{children:"Drink list"})})]})};const nr=m.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    color: ${c.colors.black};
    margin-bottom: 6px;
  }
  @media screen and (min-width: ${c.breakpoint.tablet}) {
    h3 {
      font-size: 26px;
      line-height: 32px;
    }
  }
`,rr=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,sr=m.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    color: ${c.colors.blue};
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    padding-left: 6px;
    padding-right: 6px;
    width: 126px;
    text-align: center;
  }
`,qe=m.svg`
  width: 6px;
  height: 10px;
  background: transparent;
  fill: ${c.colors.blue};

  &:hover {
    fill: ${c.colors.orange};
  }
`,ir=m.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 50px);
  justify-content: space-between;
  gap: 16px;
  height: 446px;

  @media screen and (min-width: ${c.breakpoint.tablet}) {
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 50px);
    gap: 20px;
    height: 268px;
  }
`,ar=m.button`
  padding: 7px 6px;
  width: 35px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: ${c.colors.black};

  background-color: ${c.colors.white};
  border: 1px solid ${c.colors.blue};

  @media screen and (min-width: ${c.breakpoint.tablet}) {
    font-size: 16px;
    padding: 7px;
  }

  &:hover {
    box-shadow: 0px 4px 8px ${c.colors.skyBlue};
    border: 1px solid ${c.colors.orange};
  }
`,or=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.6;
  color: ${c.colors.skyBlue};

  @media screen and (min-width: ${c.breakpoint.tablet}) {
    font-size: 12px;
  }
`;function D(n){const e=Object.prototype.toString.call(n);return n instanceof Date||typeof n=="object"&&e==="[object Date]"?new n.constructor(+n):typeof n=="number"||e==="[object Number]"||typeof n=="string"||e==="[object String]"?new Date(n):new Date(NaN)}function q(n,e){return n instanceof Date?new n.constructor(e):new Date(e)}const ct=6048e5,ur=864e5;let lr={};function he(){return lr}function te(n,e){var u,l,d,h;const t=he(),r=(e==null?void 0:e.weekStartsOn)??((l=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:l.weekStartsOn)??t.weekStartsOn??((h=(d=t.locale)==null?void 0:d.options)==null?void 0:h.weekStartsOn)??0,s=D(n),i=s.getDay(),o=(i<r?7:0)+i-r;return s.setDate(s.getDate()-o),s.setHours(0,0,0,0),s}function ue(n){return te(n,{weekStartsOn:1})}function dt(n){const e=D(n),t=e.getFullYear(),r=q(n,0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const s=ue(r),i=q(n,0);i.setFullYear(t,0,4),i.setHours(0,0,0,0);const o=ue(i);return e.getTime()>=s.getTime()?t+1:e.getTime()>=o.getTime()?t:t-1}function Be(n){const e=D(n);return e.setHours(0,0,0,0),e}function Ie(n){const e=D(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+n-+t}function cr(n,e){const t=Be(n),r=Be(e),s=+t-Ie(t),i=+r-Ie(r);return Math.round((s-i)/ur)}function dr(n){const e=dt(n),t=q(n,0);return t.setFullYear(e,0,4),t.setHours(0,0,0,0),ue(t)}function hr(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function fr(n){if(!hr(n)&&typeof n!="number")return!1;const e=D(n);return!isNaN(Number(e))}function mr(n){const e=D(n),t=q(n,0);return t.setFullYear(e.getFullYear(),0,1),t.setHours(0,0,0,0),t}const pr={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},xr=(n,e,t)=>{let r;const s=pr[n];return typeof s=="string"?r=s:e===1?r=s.one:r=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function be(n){return(e={})=>{const t=e.width?String(e.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const gr={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},br={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},yr={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},wr={date:be({formats:gr,defaultWidth:"full"}),time:be({formats:br,defaultWidth:"full"}),dateTime:be({formats:yr,defaultWidth:"full"})},kr={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},vr=(n,e,t,r)=>kr[n];function K(n){return(e,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let s;if(r==="formatting"&&n.formattingValues){const o=n.defaultFormattingWidth||n.defaultWidth,u=t!=null&&t.width?String(t.width):o;s=n.formattingValues[u]||n.formattingValues[o]}else{const o=n.defaultWidth,u=t!=null&&t.width?String(t.width):n.defaultWidth;s=n.values[u]||n.values[o]}const i=n.argumentCallback?n.argumentCallback(e):e;return s[i]}}const jr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},$r={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Or={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},_r={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Fr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Sr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Dr=(n,e)=>{const t=Number(n),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Tr={ordinalNumber:Dr,era:K({values:jr,defaultWidth:"wide"}),quarter:K({values:$r,defaultWidth:"wide",argumentCallback:n=>n-1}),month:K({values:Or,defaultWidth:"wide"}),day:K({values:_r,defaultWidth:"wide"}),dayPeriod:K({values:Fr,defaultWidth:"wide",formattingValues:Sr,defaultFormattingWidth:"wide"})};function ee(n){return(e,t={})=>{const r=t.width,s=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],i=e.match(s);if(!i)return null;const o=i[0],u=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],l=Array.isArray(u)?Mr(u,f=>f.test(o)):Er(u,f=>f.test(o));let d;d=n.valueCallback?n.valueCallback(l):l,d=t.valueCallback?t.valueCallback(d):d;const h=e.slice(o.length);return{value:d,rest:h}}}function Er(n,e){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&e(n[t]))return t}function Mr(n,e){for(let t=0;t<n.length;t++)if(e(n[t]))return t}function Pr(n){return(e,t={})=>{const r=e.match(n.matchPattern);if(!r)return null;const s=r[0],i=e.match(n.parsePattern);if(!i)return null;let o=n.valueCallback?n.valueCallback(i[0]):i[0];o=t.valueCallback?t.valueCallback(o):o;const u=e.slice(s.length);return{value:o,rest:u}}}const Cr=/^(\d+)(th|st|nd|rd)?/i,Ar=/\d+/i,Nr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Wr={any:[/^b/i,/^(a|c)/i]},Yr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},zr={any:[/1/i,/2/i,/3/i,/4/i]},Rr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},qr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Br={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ir={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Lr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Hr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Vr={ordinalNumber:Pr({matchPattern:Cr,parsePattern:Ar,valueCallback:n=>parseInt(n,10)}),era:ee({matchPatterns:Nr,defaultMatchWidth:"wide",parsePatterns:Wr,defaultParseWidth:"any"}),quarter:ee({matchPatterns:Yr,defaultMatchWidth:"wide",parsePatterns:zr,defaultParseWidth:"any",valueCallback:n=>n+1}),month:ee({matchPatterns:Rr,defaultMatchWidth:"wide",parsePatterns:qr,defaultParseWidth:"any"}),day:ee({matchPatterns:Br,defaultMatchWidth:"wide",parsePatterns:Ir,defaultParseWidth:"any"}),dayPeriod:ee({matchPatterns:Lr,defaultMatchWidth:"any",parsePatterns:Hr,defaultParseWidth:"any"})},Xr={code:"en-US",formatDistance:xr,formatLong:wr,formatRelative:vr,localize:Tr,match:Vr,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ur(n){const e=D(n);return cr(e,mr(e))+1}function Gr(n){const e=D(n),t=+ue(e)-+dr(e);return Math.round(t/ct)+1}function ht(n,e){var h,f,p,b;const t=D(n),r=t.getFullYear(),s=he(),i=(e==null?void 0:e.firstWeekContainsDate)??((f=(h=e==null?void 0:e.locale)==null?void 0:h.options)==null?void 0:f.firstWeekContainsDate)??s.firstWeekContainsDate??((b=(p=s.locale)==null?void 0:p.options)==null?void 0:b.firstWeekContainsDate)??1,o=q(n,0);o.setFullYear(r+1,0,i),o.setHours(0,0,0,0);const u=te(o,e),l=q(n,0);l.setFullYear(r,0,i),l.setHours(0,0,0,0);const d=te(l,e);return t.getTime()>=u.getTime()?r+1:t.getTime()>=d.getTime()?r:r-1}function Qr(n,e){var u,l,d,h;const t=he(),r=(e==null?void 0:e.firstWeekContainsDate)??((l=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:l.firstWeekContainsDate)??t.firstWeekContainsDate??((h=(d=t.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??1,s=ht(n,e),i=q(n,0);return i.setFullYear(s,0,r),i.setHours(0,0,0,0),te(i,e)}function Zr(n,e){const t=D(n),r=+te(t,e)-+Qr(t,e);return Math.round(r/ct)+1}function x(n,e){const t=n<0?"-":"",r=Math.abs(n).toString().padStart(e,"0");return t+r}const P={y(n,e){const t=n.getFullYear(),r=t>0?t:1-t;return x(e==="yy"?r%100:r,e.length)},M(n,e){const t=n.getMonth();return e==="M"?String(t+1):x(t+1,2)},d(n,e){return x(n.getDate(),e.length)},a(n,e){const t=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(n,e){return x(n.getHours()%12||12,e.length)},H(n,e){return x(n.getHours(),e.length)},m(n,e){return x(n.getMinutes(),e.length)},s(n,e){return x(n.getSeconds(),e.length)},S(n,e){const t=e.length,r=n.getMilliseconds(),s=Math.trunc(r*Math.pow(10,t-3));return x(s,e.length)}},Z={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Le={G:function(n,e,t){const r=n.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(n,e,t){if(e==="yo"){const r=n.getFullYear(),s=r>0?r:1-r;return t.ordinalNumber(s,{unit:"year"})}return P.y(n,e)},Y:function(n,e,t,r){const s=ht(n,r),i=s>0?s:1-s;if(e==="YY"){const o=i%100;return x(o,2)}return e==="Yo"?t.ordinalNumber(i,{unit:"year"}):x(i,e.length)},R:function(n,e){const t=dt(n);return x(t,e.length)},u:function(n,e){const t=n.getFullYear();return x(t,e.length)},Q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return x(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return x(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,e,t){const r=n.getMonth();switch(e){case"M":case"MM":return P.M(n,e);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(n,e,t){const r=n.getMonth();switch(e){case"L":return String(r+1);case"LL":return x(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(n,e,t,r){const s=Zr(n,r);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):x(s,e.length)},I:function(n,e,t){const r=Gr(n);return e==="Io"?t.ordinalNumber(r,{unit:"week"}):x(r,e.length)},d:function(n,e,t){return e==="do"?t.ordinalNumber(n.getDate(),{unit:"date"}):P.d(n,e)},D:function(n,e,t){const r=Ur(n);return e==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):x(r,e.length)},E:function(n,e,t){const r=n.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(n,e,t,r){const s=n.getDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return x(i,2);case"eo":return t.ordinalNumber(i,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(n,e,t,r){const s=n.getDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return x(i,e.length);case"co":return t.ordinalNumber(i,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(n,e,t){const r=n.getDay(),s=r===0?7:r;switch(e){case"i":return String(s);case"ii":return x(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(n,e,t){const s=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(n,e,t){const r=n.getHours();let s;switch(r===12?s=Z.noon:r===0?s=Z.midnight:s=r/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(n,e,t){const r=n.getHours();let s;switch(r>=17?s=Z.evening:r>=12?s=Z.afternoon:r>=4?s=Z.morning:s=Z.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(n,e,t){if(e==="ho"){let r=n.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return P.h(n,e)},H:function(n,e,t){return e==="Ho"?t.ordinalNumber(n.getHours(),{unit:"hour"}):P.H(n,e)},K:function(n,e,t){const r=n.getHours()%12;return e==="Ko"?t.ordinalNumber(r,{unit:"hour"}):x(r,e.length)},k:function(n,e,t){let r=n.getHours();return r===0&&(r=24),e==="ko"?t.ordinalNumber(r,{unit:"hour"}):x(r,e.length)},m:function(n,e,t){return e==="mo"?t.ordinalNumber(n.getMinutes(),{unit:"minute"}):P.m(n,e)},s:function(n,e,t){return e==="so"?t.ordinalNumber(n.getSeconds(),{unit:"second"}):P.s(n,e)},S:function(n,e){return P.S(n,e)},X:function(n,e,t){const r=n.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return Ve(r);case"XXXX":case"XX":return z(r);case"XXXXX":case"XXX":default:return z(r,":")}},x:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"x":return Ve(r);case"xxxx":case"xx":return z(r);case"xxxxx":case"xxx":default:return z(r,":")}},O:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+He(r,":");case"OOOO":default:return"GMT"+z(r,":")}},z:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+He(r,":");case"zzzz":default:return"GMT"+z(r,":")}},t:function(n,e,t){const r=Math.trunc(n.getTime()/1e3);return x(r,e.length)},T:function(n,e,t){const r=n.getTime();return x(r,e.length)}};function He(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),s=Math.trunc(r/60),i=r%60;return i===0?t+String(s):t+String(s)+e+x(i,2)}function Ve(n,e){return n%60===0?(n>0?"-":"+")+x(Math.abs(n)/60,2):z(n,e)}function z(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),s=x(Math.trunc(r/60),2),i=x(r%60,2);return t+s+e+i}const Xe=(n,e)=>{switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},ft=(n,e)=>{switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Jr=(n,e)=>{const t=n.match(/(P+)(p+)?/)||[],r=t[1],s=t[2];if(!s)return Xe(n,e);let i;switch(r){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",Xe(r,e)).replace("{{time}}",ft(s,e))},Kr={p:ft,P:Jr},es=/^D+$/,ts=/^Y+$/,ns=["D","DD","YY","YYYY"];function rs(n){return es.test(n)}function ss(n){return ts.test(n)}function is(n,e,t){const r=as(n,e,t);if(console.warn(r),ns.includes(n))throw new RangeError(r)}function as(n,e,t){const r=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const os=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,us=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ls=/^'([^]*?)'?$/,cs=/''/g,ds=/[a-zA-Z]/;function Ue(n,e,t){var h,f,p,b,j,v,_,N;const r=he(),s=(t==null?void 0:t.locale)??r.locale??Xr,i=(t==null?void 0:t.firstWeekContainsDate)??((f=(h=t==null?void 0:t.locale)==null?void 0:h.options)==null?void 0:f.firstWeekContainsDate)??r.firstWeekContainsDate??((b=(p=r.locale)==null?void 0:p.options)==null?void 0:b.firstWeekContainsDate)??1,o=(t==null?void 0:t.weekStartsOn)??((v=(j=t==null?void 0:t.locale)==null?void 0:j.options)==null?void 0:v.weekStartsOn)??r.weekStartsOn??((N=(_=r.locale)==null?void 0:_.options)==null?void 0:N.weekStartsOn)??0,u=D(n);if(!fr(u))throw new RangeError("Invalid time value");let l=e.match(us).map(y=>{const k=y[0];if(k==="p"||k==="P"){const W=Kr[k];return W(y,s.formatLong)}return y}).join("").match(os).map(y=>{if(y==="''")return{isToken:!1,value:"'"};const k=y[0];if(k==="'")return{isToken:!1,value:hs(y)};if(Le[k])return{isToken:!0,value:y};if(k.match(ds))throw new RangeError("Format string contains an unescaped latin alphabet character `"+k+"`");return{isToken:!1,value:y}});s.localize.preprocessor&&(l=s.localize.preprocessor(u,l));const d={firstWeekContainsDate:i,weekStartsOn:o,locale:s};return l.map(y=>{if(!y.isToken)return y.value;const k=y.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&ss(k)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&rs(k))&&is(k,e,String(n));const W=Le[k[0]];return W(u,k,s.localize,d)}).join("")}function hs(n){const e=n.match(ls);return e?e[1].replace(cs,"'"):n}const fs=()=>{const[n,e]=F.useState(new Date),[t,r]=F.useState(new Date),s=d=>{e(h=>{const f=new Date(h);return f.setMonth(f.getMonth()+d),f})},i=()=>{const h=new Date(n.getFullYear(),n.getMonth()+1,0).getDate(),f=[];for(let p=1;p<=h;p++)f.push(p);return f},o=()=>new Intl.DateTimeFormat("en",{month:"long"}).format(n),u=()=>n.getFullYear(),l=d=>{const h=new Date(n.getFullYear(),n.getMonth(),d);h<=new Date?(r(h),console.log(Ue(h,"dd.MM.yyyy"))):console.log("Выберите день не позже сегодняшней даты")};return a.jsxs("div",{children:[a.jsxs(nr,{children:[a.jsxs(rr,{children:[a.jsx("h3",{children:"Month"}),a.jsxs(sr,{children:[a.jsx(qe,{onClick:()=>s(-1),children:a.jsx("use",{href:`${g}#icon-left`})}),a.jsxs("span",{children:[o(),", ",u()]}),a.jsx(qe,{onClick:()=>s(1),children:a.jsx("use",{href:`${g}#icon-right`})})]})]}),a.jsx(ir,{children:i().map(d=>a.jsxs("div",{children:[a.jsx(ar,{onClick:()=>l(d),children:d}),a.jsx(or,{children:"0%"})]},d))})]}),t!==null&&a.jsxs("p",{children:["Selected day: ",Ue(t,"dd.MM.yyyy")]})]})},ms=m.div`
  display: flex;
  flex-direction: column;
  padding-top: 22px;
  margin: 0 auto;
  max-width: 704px;
  padding-bottom: 22px;

  @media screen and (min-width: ${c.breakpoint.desktop}) {
    flex-direction: row;
    gap: 32px;
    max-width: 1176px;
  }
`,ps=m.div`
  display: flex;
  flex-direction: column;
  background-color: ${c.colors.lightBlue};
  padding: 20px 24px;
  border-radius: 10px;
  max-width: 704px;
  box-shadow: ${c.boxShadowBtn.Btn};
  gap: 24px;

  @media screen and (min-width: ${c.breakpoint.desktop}) {
    width: 590px;
  }
`,xs=m.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${c.breakpoint.desktop}) {
    max-width: 50%;
  }
`,gs=m.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: ${c.breakpoint.tablet}) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${c.breakpoint.desktop}) {
    padding-left: 132px;
    padding-right: 132px;
  }
`,ks=()=>a.jsx(a.Fragment,{children:a.jsx(gs,{children:a.jsxs(ms,{children:[a.jsxs(xs,{children:[a.jsx(Yn,{}),a.jsx(Qn,{})]}),a.jsxs(ps,{children:[a.jsx(tr,{}),a.jsx(fs,{})]})]})})});export{ks as default};
