import{n as h,t as l,r as S,R as $t,j as s,c as jt,u as rt,a as se,g as Ot,d as St,e as Ft,p as _t,f as Tt,s as b,h as Dt}from"./index-56b90ffc.js";import{F as te,a as Et,b as Mt}from"./formik.esm-44a5e38f.js";const Ct="/runners_of_code__frontend/assets/bottle_home_mobile@1x-0d6054eb.png",Pt="/runners_of_code__frontend/assets/bottle_home_mobile@2x-52eb5066.png",At="/runners_of_code__frontend/assets/bottle_home_tablet@1x-c4bedac4.png",Wt="/runners_of_code__frontend/assets/bottle_home_tablet@2x-867eb443.png",Nt="/runners_of_code__frontend/assets/bottle_home_desk-f67b46be.png",zt="/runners_of_code__frontend/assets/bottle_home_deskx2-acd9b153.png",Bt=h.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;
`,Yt=h.div`
  background-position: center;
  background-image: -webkit-image-set(
    url(${Ct}) 1x,
    url(${Pt}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;
  z-index: -1;

  @media screen and (min-width: ${l.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${At}) 1x,
      url(${Wt}) 2x
    );
    height: 386px;
    margin-top: -114px;
    background-position: center top;
  }

  @media screen and (min-width: ${l.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Nt}) 1x,
      url(${zt}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,Rt=h.h3`
  font-size: 18px;
  line-height: 1.33;
  font-family: 'Roboto-Bold', sans-serif;
  margin-bottom: 12px;
  color: ${l.colors.black};
`,Lt=h.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 8px 20px;
  padding-top: 20px;
  width: 164px;

  border-radius: 10px;
  border: 1px solid ${l.colors.lightBlue};
  box-shadow: ${l.boxShadowBtn.Btn};

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    margin: 0;

    color: ${l.colors.blue};
  }
`,It=h.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`,qt=h.button`
  padding: 0;
  background-color: ${l.colors.white};
  color: ${l.colors.blue};
  border: none;
  font-size: 16px;
  &:hover {
    color: ${l.colors.orange};
  }
`,Vt=h.div`
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
`,Ht=h.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`,Xt=h.div`
  position: relative;
  padding: 24px 12px;
  /* width: 450px; */
  height: auto;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: ${l.colors.white};
  backdrop-filter: blur(5px);
  transform: translateY(-50px);
  transition:
    opacity 0.3s,
    transform 0.3s;

  @media screen and (min-width: ${l.breakpoint.tablet}) {
    padding: 32px 24px;
  }
`,Ut=h.button`
  position: absolute;
  top: 24px;
  right: 12px;
  color: ${l.colors.blue};
  display: block;
  border: none;
  background-color: transparent;
  padding: 0px;
  cursor: pointer;
`,je=({onClose:n,children:e})=>{const t=document.getElementById("modal-root"),r=S.useRef(),i=o=>{o.target===r.current&&n(),document.body.style.overflow="",document.body.style.position="",o.stopPropagation()},a=o=>{o.key==="Escape"&&(document.body.style.overflow="",document.body.style.position="",n())};return S.useEffect(()=>{const o=c=>a(c);return document.addEventListener("keydown",o),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",o)}},[]),$t.createPortal(s.jsx(Vt,{onClick:i,ref:r,children:s.jsx(Ht,{children:s.jsxs(Xt,{children:[s.jsx(Ut,{onClick:n,children:"X"}),e]})})}),t)},it=n=>n.waters.dailyNorm,Gt=n=>n.waters.reps,st=n=>n.filter;jt([it,st],(n,e)=>n.filter(t=>t.name.toLowerCase().includes(e.toLowerCase())));const Qt=()=>{const n=rt(),e=se(it),t=se(Gt),r=se(st),i=S.useCallback(u=>n(Ot(u)),[n]),a=S.useCallback(u=>n(St(u)),[n]),o=S.useCallback(u=>n(Ft(u)),[n]),c=S.useCallback(u=>n(_t(u)),[n]);return{dailyNorm:e,reps:t,filter:r,getWaters:i,addDailyNorma:a,deleteReps:o,patchWater:c}};function L(n){this._maxSize=n,this.clear()}L.prototype.clear=function(){this._size=0,this._values=Object.create(null)};L.prototype.get=function(n){return this._values[n]};L.prototype.set=function(n,e){return this._size>=this._maxSize&&this.clear(),n in this._values||this._size++,this._values[n]=e};var Zt=/[^.^\]^[]+|(?=\[\]|\.\.)/g,at=/^\d+$/,Jt=/^\d/,Kt=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,en=/^\s*(['"]?)(.*?)(\1)\s*$/,Oe=512,Pe=new L(Oe),Ae=new L(Oe),We=new L(Oe),Y={Cache:L,split:ye,normalizePath:xe,setter:function(n){var e=xe(n);return Ae.get(n)||Ae.set(n,function(r,i){for(var a=0,o=e.length,c=r;a<o-1;){var u=e[a];if(u==="__proto__"||u==="constructor"||u==="prototype")return r;c=c[e[a++]]}c[e[a]]=i})},getter:function(n,e){var t=xe(n);return We.get(n)||We.set(n,function(i){for(var a=0,o=t.length;a<o;)if(i!=null||!e)i=i[t[a++]];else return;return i})},join:function(n){return n.reduce(function(e,t){return e+(Se(t)||at.test(t)?"["+t+"]":(e?".":"")+t)},"")},forEach:function(n,e,t){tn(Array.isArray(n)?n:ye(n),e,t)}};function xe(n){return Pe.get(n)||Pe.set(n,ye(n).map(function(e){return e.replace(en,"$2")}))}function ye(n){return n.match(Zt)||[""]}function tn(n,e,t){var r=n.length,i,a,o,c;for(a=0;a<r;a++)i=n[a],i&&(sn(i)&&(i='"'+i+'"'),c=Se(i),o=!c&&/^\d+$/.test(i),e.call(t,i,c,o,a,n))}function Se(n){return typeof n=="string"&&n&&["'",'"'].indexOf(n.charAt(0))!==-1}function nn(n){return n.match(Jt)&&!n.match(at)}function rn(n){return Kt.test(n)}function sn(n){return!Se(n)&&(nn(n)||rn(n))}const an=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,ue=n=>n.match(an)||[],de=n=>n[0].toUpperCase()+n.slice(1),Fe=(n,e)=>ue(n).join(e).toLowerCase(),ot=n=>ue(n).reduce((e,t)=>`${e}${e?t[0].toUpperCase()+t.slice(1).toLowerCase():t.toLowerCase()}`,""),on=n=>de(ot(n)),ln=n=>Fe(n,"_"),cn=n=>Fe(n,"-"),un=n=>de(Fe(n," ")),dn=n=>ue(n).map(de).join(" ");var ge={words:ue,upperFirst:de,camelCase:ot,pascalCase:on,snakeCase:ln,kebabCase:cn,sentenceCase:un,titleCase:dn},_e={exports:{}};_e.exports=function(n){return lt(hn(n),n)};_e.exports.array=lt;function lt(n,e){var t=n.length,r=new Array(t),i={},a=t,o=fn(e),c=pn(n);for(e.forEach(function(d){if(!c.has(d[0])||!c.has(d[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});a--;)i[a]||u(n[a],a,new Set);return r;function u(d,f,p){if(p.has(d)){var m;try{m=", node was:"+JSON.stringify(d)}catch{m=""}throw new Error("Cyclic dependency"+m)}if(!c.has(d))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(d));if(!i[f]){i[f]=!0;var x=o.get(d)||new Set;if(x=Array.from(x),f=x.length){p.add(d);do{var $=x[--f];u($,c.get($),p)}while(f);p.delete(d)}r[--t]=d}}}function hn(n){for(var e=new Set,t=0,r=n.length;t<r;t++){var i=n[t];e.add(i[0]),e.add(i[1])}return Array.from(e)}function fn(n){for(var e=new Map,t=0,r=n.length;t<r;t++){var i=n[t];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function pn(n){for(var e=new Map,t=0,r=n.length;t<r;t++)e.set(n[t],t);return e}var mn=_e.exports;const xn=Tt(mn),gn=Object.prototype.toString,bn=Error.prototype.toString,yn=RegExp.prototype.toString,wn=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",kn=/^Symbol\((.*)\)(.*)$/;function vn(n){return n!=+n?"NaN":n===0&&1/n<0?"-0":""+n}function Ne(n,e=!1){if(n==null||n===!0||n===!1)return""+n;const t=typeof n;if(t==="number")return vn(n);if(t==="string")return e?`"${n}"`:n;if(t==="function")return"[Function "+(n.name||"anonymous")+"]";if(t==="symbol")return wn.call(n).replace(kn,"Symbol($1)");const r=gn.call(n).slice(8,-1);return r==="Date"?isNaN(n.getTime())?""+n:n.toISOString(n):r==="Error"||n instanceof Error?"["+bn.call(n)+"]":r==="RegExp"?yn.call(n):null}function A(n,e){let t=Ne(n,e);return t!==null?t:JSON.stringify(n,function(r,i){let a=Ne(this[r],e);return a!==null?a:i},2)}function ct(n){return n==null?[]:[].concat(n)}let ut,dt,ht,$n=/\$\{\s*(\w+)\s*\}/g;ut=Symbol.toStringTag;class ze{constructor(e,t,r,i){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[ut]="Error",this.name="ValidationError",this.value=t,this.path=r,this.type=i,this.errors=[],this.inner=[],ct(e).forEach(a=>{if(O.isError(a)){this.errors.push(...a.errors);const o=a.inner.length?a.inner:[a];this.inner.push(...o)}else this.errors.push(a)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}dt=Symbol.hasInstance;ht=Symbol.toStringTag;class O extends Error{static formatError(e,t){const r=t.label||t.path||"this";return r!==t.path&&(t=Object.assign({},t,{path:r})),typeof e=="string"?e.replace($n,(i,a)=>A(t[a])):typeof e=="function"?e(t):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,t,r,i,a){const o=new ze(e,t,r,i);if(a)return o;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[ht]="Error",this.name=o.name,this.message=o.message,this.type=o.type,this.value=o.value,this.path=o.path,this.errors=o.errors,this.inner=o.inner,Error.captureStackTrace&&Error.captureStackTrace(this,O)}static[dt](e){return ze[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let D={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:n,type:e,value:t,originalValue:r})=>{const i=r!=null&&r!==t?` (cast from the value \`${A(r,!0)}\`).`:".";return e!=="mixed"?`${n} must be a \`${e}\` type, but the final value was: \`${A(t,!0)}\``+i:`${n} must match the configured type. The validated value was: \`${A(t,!0)}\``+i}},j={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},P={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},we={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},jn={isValue:"${path} field must be ${value}"},ke={noUnknown:"${path} field has unspecified keys: ${unknown}"},On={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},Sn={notType:n=>{const{path:e,value:t,spec:r}=n,i=r.types.length;if(Array.isArray(t)){if(t.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${t.length} for value: \`${A(t,!0)}\``;if(t.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${t.length} for value: \`${A(t,!0)}\``}return O.formatError(D.notType,n)}};Object.assign(Object.create(null),{mixed:D,string:j,number:P,date:we,object:ke,array:On,boolean:jn,tuple:Sn});const Te=n=>n&&n.__isYupSchema__;class oe{static fromOptions(e,t){if(!t.then&&!t.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:a}=t,o=typeof r=="function"?r:(...c)=>c.every(u=>u===r);return new oe(e,(c,u)=>{var d;let f=o(...c)?i:a;return(d=f==null?void 0:f(u))!=null?d:u})}constructor(e,t){this.fn=void 0,this.refs=e,this.refs=e,this.fn=t}resolve(e,t){let r=this.refs.map(a=>a.getValue(t==null?void 0:t.value,t==null?void 0:t.parent,t==null?void 0:t.context)),i=this.fn(r,e,t);if(i===void 0||i===e)return e;if(!Te(i))throw new TypeError("conditions must return a schema object");return i.resolve(t)}}const ie={context:"$",value:"."};class I{constructor(e,t={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===ie.context,this.isValue=this.key[0]===ie.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?ie.context:this.isValue?ie.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Y.getter(this.path,!0),this.map=t.map}getValue(e,t,r){let i=this.isContext?r:this.isValue?e:t;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,t){return this.getValue(e,t==null?void 0:t.parent,t==null?void 0:t.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}I.prototype.__isYupRef=!0;const M=n=>n==null;function q(n){function e({value:t,path:r="",options:i,originalValue:a,schema:o},c,u){const{name:d,test:f,params:p,message:m,skipAbsent:x}=n;let{parent:$,context:v,abortEarly:F=o.spec.abortEarly,disableStackTrace:W=o.spec.disableStackTrace}=i;function y(w){return I.isRef(w)?w.getValue(t,$,v):w}function k(w={}){const z=Object.assign({value:t,originalValue:a,label:o.spec.label,path:w.path||r,spec:o.spec,disableStackTrace:w.disableStackTrace||W},p,w.params);for(const Ce of Object.keys(z))z[Ce]=y(z[Ce]);const Me=new O(O.formatError(w.message||m,z),t,z.path,w.type||d,z.disableStackTrace);return Me.params=z,Me}const N=F?c:u;let pe={path:r,parent:$,type:d,from:i.from,createError:k,resolve:y,options:i,originalValue:a,schema:o};const me=w=>{O.isError(w)?N(w):w?u(null):N(k())},De=w=>{O.isError(w)?N(w):c(w)};if(x&&M(t))return me(!0);let re;try{var Ee;if(re=f.call(pe,t,pe),typeof((Ee=re)==null?void 0:Ee.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${pe.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(re).then(me,De)}}catch(w){De(w);return}me(re)}return e.OPTIONS=n,e}function Fn(n,e,t,r=t){let i,a,o;return e?(Y.forEach(e,(c,u,d)=>{let f=u?c.slice(1,c.length-1):c;n=n.resolve({context:r,parent:i,value:t});let p=n.type==="tuple",m=d?parseInt(f,10):0;if(n.innerType||p){if(p&&!d)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(t&&m>=t.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${c}, in the path: ${e}. because there is no value at that index. `);i=t,t=t&&t[m],n=p?n.spec.types[m]:n.innerType}if(!d){if(!n.fields||!n.fields[f])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${n.type}")`);i=t,t=t&&t[f],n=n.fields[f]}a=f,o=u?"["+c+"]":"."+c}),{schema:n,parent:i,parentPath:a}):{parent:i,parentPath:e,schema:n}}class le extends Set{describe(){const e=[];for(const t of this.values())e.push(I.isRef(t)?t.describe():t);return e}resolveAll(e){let t=[];for(const r of this.values())t.push(e(r));return t}clone(){return new le(this.values())}merge(e,t){const r=this.clone();return e.forEach(i=>r.add(i)),t.forEach(i=>r.delete(i)),r}}function J(n,e=new Map){if(Te(n)||!n||typeof n!="object")return n;if(e.has(n))return e.get(n);let t;if(n instanceof Date)t=new Date(n.getTime()),e.set(n,t);else if(n instanceof RegExp)t=new RegExp(n),e.set(n,t);else if(Array.isArray(n)){t=new Array(n.length),e.set(n,t);for(let r=0;r<n.length;r++)t[r]=J(n[r],e)}else if(n instanceof Map){t=new Map,e.set(n,t);for(const[r,i]of n.entries())t.set(r,J(i,e))}else if(n instanceof Set){t=new Set,e.set(n,t);for(const r of n)t.add(J(r,e))}else if(n instanceof Object){t={},e.set(n,t);for(const[r,i]of Object.entries(n))t[r]=J(i,e)}else throw Error(`Unable to clone ${n}`);return t}class _{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new le,this._blacklist=new le,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(D.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(t=>{t.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const t=Object.create(Object.getPrototypeOf(this));return t.type=this.type,t._typeCheck=this._typeCheck,t._whitelist=this._whitelist.clone(),t._blacklist=this._blacklist.clone(),t.internalTests=Object.assign({},this.internalTests),t.exclusiveTests=Object.assign({},this.exclusiveTests),t.deps=[...this.deps],t.conditions=[...this.conditions],t.tests=[...this.tests],t.transforms=[...this.transforms],t.spec=J(Object.assign({},this.spec,e)),t}label(e){let t=this.clone();return t.spec.label=e,t}meta(...e){if(e.length===0)return this.spec.meta;let t=this.clone();return t.spec.meta=Object.assign(t.spec.meta||{},e[0]),t}withMutation(e){let t=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=t,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let t=this,r=e.clone();const i=Object.assign({},t.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},t.internalTests,r.internalTests),r._whitelist=t._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=t._blacklist.merge(e._blacklist,e._whitelist),r.tests=t.tests,r.exclusiveTests=t.exclusiveTests,r.withMutation(a=>{e.tests.forEach(o=>{a.test(o.OPTIONS)})}),r.transforms=[...t.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let t=this;if(t.conditions.length){let r=t.conditions;t=t.clone(),t.conditions=[],t=r.reduce((i,a)=>a.resolve(i,e),t),t=t.resolve(e)}return t}resolveOptions(e){var t,r,i,a;return Object.assign({},e,{from:e.from||[],strict:(t=e.strict)!=null?t:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(a=e.disableStackTrace)!=null?a:this.spec.disableStackTrace})}cast(e,t={}){let r=this.resolve(Object.assign({value:e},t)),i=t.assert==="ignore-optionality",a=r._cast(e,t);if(t.assert!==!1&&!r.isType(a)){if(i&&M(a))return a;let o=A(e),c=A(a);throw new TypeError(`The value of ${t.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(c!==o?`result of cast: ${c}`:""))}return a}_cast(e,t){let r=e===void 0?e:this.transforms.reduce((i,a)=>a.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(t)),r}_validate(e,t={},r,i){let{path:a,originalValue:o=e,strict:c=this.spec.strict}=t,u=e;c||(u=this._cast(u,Object.assign({assert:!1},t)));let d=[];for(let f of Object.values(this.internalTests))f&&d.push(f);this.runTests({path:a,value:u,originalValue:o,options:t,tests:d},r,f=>{if(f.length)return i(f,u);this.runTests({path:a,value:u,originalValue:o,options:t,tests:this.tests},r,i)})}runTests(e,t,r){let i=!1,{tests:a,value:o,originalValue:c,path:u,options:d}=e,f=v=>{i||(i=!0,t(v,o))},p=v=>{i||(i=!0,r(v,o))},m=a.length,x=[];if(!m)return p([]);let $={value:o,originalValue:c,path:u,options:d,schema:this};for(let v=0;v<a.length;v++){const F=a[v];F($,f,function(y){y&&(Array.isArray(y)?x.push(...y):x.push(y)),--m<=0&&p(x)})}}asNestedTest({key:e,index:t,parent:r,parentPath:i,originalParent:a,options:o}){const c=e??t;if(c==null)throw TypeError("Must include `key` or `index` for nested validations");const u=typeof c=="number";let d=r[c];const f=Object.assign({},o,{strict:!0,parent:r,value:d,originalValue:a[c],key:void 0,[u?"index":"key"]:c,path:u||c.includes(".")?`${i||""}[${u?c:`"${c}"`}]`:(i?`${i}.`:"")+e});return(p,m,x)=>this.resolve(f)._validate(d,f,m,x)}validate(e,t){var r;let i=this.resolve(Object.assign({},t,{value:e})),a=(r=t==null?void 0:t.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,c)=>i._validate(e,t,(u,d)=>{O.isError(u)&&(u.value=d),c(u)},(u,d)=>{u.length?c(new O(u,d,void 0,void 0,a)):o(d)}))}validateSync(e,t){var r;let i=this.resolve(Object.assign({},t,{value:e})),a,o=(r=t==null?void 0:t.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},t,{sync:!0}),(c,u)=>{throw O.isError(c)&&(c.value=u),c},(c,u)=>{if(c.length)throw new O(c,e,void 0,void 0,o);a=u}),a}isValid(e,t){return this.validate(e,t).then(()=>!0,r=>{if(O.isError(r))return!1;throw r})}isValidSync(e,t){try{return this.validateSync(e,t),!0}catch(r){if(O.isError(r))return!1;throw r}}_getDefault(e){let t=this.spec.default;return t==null?t:typeof t=="function"?t.call(this,e):J(t)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,t){const r=this.clone({nullable:e});return r.internalTests.nullable=q({message:t,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,t){const r=this.clone({optional:e});return r.internalTests.optionality=q({message:t,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=D.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=D.notNull){return this.nullability(!1,e)}required(e=D.required){return this.clone().withMutation(t=>t.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let t=this.clone();return t.transforms.push(e),t}test(...e){let t;if(e.length===1?typeof e[0]=="function"?t={test:e[0]}:t=e[0]:e.length===2?t={name:e[0],test:e[1]}:t={name:e[0],message:e[1],test:e[2]},t.message===void 0&&(t.message=D.default),typeof t.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=q(t),a=t.exclusive||t.name&&r.exclusiveTests[t.name]===!0;if(t.exclusive&&!t.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return t.name&&(r.exclusiveTests[t.name]=!!t.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===t.name&&(a||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,t){!Array.isArray(e)&&typeof e!="string"&&(t=e,e=".");let r=this.clone(),i=ct(e).map(a=>new I(a));return i.forEach(a=>{a.isSibling&&r.deps.push(a.key)}),r.conditions.push(typeof t=="function"?new oe(i,t):oe.fromOptions(i,t)),r}typeError(e){let t=this.clone();return t.internalTests.typeError=q({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),t}oneOf(e,t=D.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=q({message:t,name:"oneOf",skipAbsent:!0,test(i){let a=this.schema._whitelist,o=a.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(a).join(", "),resolved:o}})}}),r}notOneOf(e,t=D.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=q({message:t,name:"notOneOf",test(i){let a=this.schema._blacklist,o=a.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(a).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let t=this.clone();return t.spec.strip=e,t}describe(e){const t=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:a,nullable:o}=t.spec;return{meta:i,label:r,optional:a,nullable:o,default:t.getDefault(e),type:t.type,oneOf:t._whitelist.describe(),notOneOf:t._blacklist.describe(),tests:t.tests.map(u=>({name:u.OPTIONS.name,params:u.OPTIONS.params})).filter((u,d,f)=>f.findIndex(p=>p.name===u.name)===d)}}}_.prototype.__isYupSchema__=!0;for(const n of["validate","validateSync"])_.prototype[`${n}At`]=function(e,t,r={}){const{parent:i,parentPath:a,schema:o}=Fn(this,e,t,r.context);return o[n](i&&i[a],Object.assign({},r,{parent:i,path:e}))};for(const n of["equals","is"])_.prototype[n]=_.prototype.oneOf;for(const n of["not","nope"])_.prototype[n]=_.prototype.notOneOf;const _n=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function Tn(n){const e=ve(n);if(!e)return Date.parse?Date.parse(n):Number.NaN;if(e.z===void 0&&e.plusMinus===void 0)return new Date(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond).valueOf();let t=0;return e.z!=="Z"&&e.plusMinus!==void 0&&(t=e.hourOffset*60+e.minuteOffset,e.plusMinus==="+"&&(t=0-t)),Date.UTC(e.year,e.month,e.day,e.hour,e.minute+t,e.second,e.millisecond)}function ve(n){var e,t;const r=_n.exec(n);return r?{year:E(r[1]),month:E(r[2],1)-1,day:E(r[3],1),hour:E(r[4]),minute:E(r[5]),second:E(r[6]),millisecond:r[7]?E(r[7].substring(0,3)):0,precision:(e=(t=r[7])==null?void 0:t.length)!=null?e:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:E(r[10]),minuteOffset:E(r[11])}:null}function E(n,e=0){return Number(n)||e}let Dn=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,En=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,Mn=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,Cn="^\\d{4}-\\d{2}-\\d{2}",Pn="\\d{2}:\\d{2}:\\d{2}",An="(([+-]\\d{2}(:?\\d{2})?)|Z)",Wn=new RegExp(`${Cn}T${Pn}(\\.\\d+)?${An}$`),Nn=n=>M(n)||n===n.trim(),zn={}.toString();function ft(){return new pt}class pt extends _{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,t,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===zn?e:i})})}required(e){return super.required(e).withMutation(t=>t.test({message:e||D.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(t=>t.OPTIONS.name!=="required"),e))}length(e,t=j.length){return this.test({message:t,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,t=j.min){return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,t=j.max){return this.test({name:"max",exclusive:!0,message:t,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,t){let r=!1,i,a;return t&&(typeof t=="object"?{excludeEmptyString:r=!1,message:i,name:a}=t:i=t),this.test({name:a||"matches",message:i||j.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=j.email){return this.matches(Dn,{name:"email",message:e,excludeEmptyString:!0})}url(e=j.url){return this.matches(En,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=j.uuid){return this.matches(Mn,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let t="",r,i;return e&&(typeof e=="object"?{message:t="",allowOffset:r=!1,precision:i=void 0}=e:t=e),this.matches(Wn,{name:"datetime",message:t||j.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:t||j.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:a=>{if(!a||r)return!0;const o=ve(a);return o?!!o.z:!1}}).test({name:"datetime_precision",message:t||j.datetime_precision,params:{precision:i},skipAbsent:!0,test:a=>{if(!a||i==null)return!0;const o=ve(a);return o?o.precision===i:!1}})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=j.trim){return this.transform(t=>t!=null?t.trim():t).test({message:e,name:"trim",test:Nn})}lowercase(e=j.lowercase){return this.transform(t=>M(t)?t:t.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:t=>M(t)||t===t.toLowerCase()})}uppercase(e=j.uppercase){return this.transform(t=>M(t)?t:t.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:t=>M(t)||t===t.toUpperCase()})}}ft.prototype=pt.prototype;let Bn=n=>n!=+n;function $e(){return new mt}class mt extends _{constructor(){super({type:"number",check(e){return e instanceof Number&&(e=e.valueOf()),typeof e=="number"&&!Bn(e)}}),this.withMutation(()=>{this.transform((e,t,r)=>{if(!r.spec.coerce)return e;let i=e;if(typeof i=="string"){if(i=i.replace(/\s/g,""),i==="")return NaN;i=+i}return r.isType(i)||i===null?i:parseFloat(i)})})}min(e,t=P.min){return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r>=this.resolve(e)}})}max(e,t=P.max){return this.test({message:t,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(r){return r<=this.resolve(e)}})}lessThan(e,t=P.lessThan){return this.test({message:t,name:"max",exclusive:!0,params:{less:e},skipAbsent:!0,test(r){return r<this.resolve(e)}})}moreThan(e,t=P.moreThan){return this.test({message:t,name:"min",exclusive:!0,params:{more:e},skipAbsent:!0,test(r){return r>this.resolve(e)}})}positive(e=P.positive){return this.moreThan(0,e)}negative(e=P.negative){return this.lessThan(0,e)}integer(e=P.integer){return this.test({name:"integer",message:e,skipAbsent:!0,test:t=>Number.isInteger(t)})}truncate(){return this.transform(e=>M(e)?e:e|0)}round(e){var t;let r=["ceil","floor","round","trunc"];if(e=((t=e)==null?void 0:t.toLowerCase())||"round",e==="trunc")return this.truncate();if(r.indexOf(e.toLowerCase())===-1)throw new TypeError("Only valid options for round() are: "+r.join(", "));return this.transform(i=>M(i)?i:Math[e](i))}}$e.prototype=mt.prototype;let Yn=new Date(""),Rn=n=>Object.prototype.toString.call(n)==="[object Date]";class he extends _{constructor(){super({type:"date",check(e){return Rn(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,t,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=Tn(e),isNaN(e)?he.INVALID_DATE:new Date(e)))})}prepareParam(e,t){let r;if(I.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,t=we.min){let r=this.prepareParam(e,"min");return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,t=we.max){let r=this.prepareParam(e,"max");return this.test({message:t,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}he.INVALID_DATE=Yn;he.prototype;function Ln(n,e=[]){let t=[],r=new Set,i=new Set(e.map(([o,c])=>`${o}-${c}`));function a(o,c){let u=Y.split(o)[0];r.add(u),i.has(`${c}-${u}`)||t.push([c,u])}for(const o of Object.keys(n)){let c=n[o];r.add(o),I.isRef(c)&&c.isSibling?a(c.path,o):Te(c)&&"deps"in c&&c.deps.forEach(u=>a(u,o))}return xn.array(Array.from(r),t).reverse()}function Be(n,e){let t=1/0;return n.some((r,i)=>{var a;if((a=e.path)!=null&&a.includes(r))return t=i,!0}),t}function xt(n){return(e,t)=>Be(n,e)-Be(n,t)}const In=(n,e,t)=>{if(typeof n!="string")return n;let r=n;try{r=JSON.parse(n)}catch{}return t.isType(r)?r:n};function ae(n){if("fields"in n){const e={};for(const[t,r]of Object.entries(n.fields))e[t]=ae(r);return n.setFields(e)}if(n.type==="array"){const e=n.optional();return e.innerType&&(e.innerType=ae(e.innerType)),e}return n.type==="tuple"?n.optional().clone({types:n.spec.types.map(ae)}):"optional"in n?n.optional():n}const qn=(n,e)=>{const t=[...Y.normalizePath(e)];if(t.length===1)return t[0]in n;let r=t.pop(),i=Y.getter(Y.join(t),!0)(n);return!!(i&&r in i)};let Ye=n=>Object.prototype.toString.call(n)==="[object Object]";function Vn(n,e){let t=Object.keys(n.fields);return Object.keys(e).filter(r=>t.indexOf(r)===-1)}const Hn=xt([]);function gt(n){return new bt(n)}class bt extends _{constructor(e){super({type:"object",check(t){return Ye(t)||typeof t=="function"}}),this.fields=Object.create(null),this._sortErrors=Hn,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,t={}){var r;let i=super._cast(e,t);if(i===void 0)return this.getDefault(t);if(!this._typeCheck(i))return i;let a=this.fields,o=(r=t.stripUnknown)!=null?r:this.spec.noUnknown,c=[].concat(this._nodes,Object.keys(i).filter(p=>!this._nodes.includes(p))),u={},d=Object.assign({},t,{parent:u,__validating:t.__validating||!1}),f=!1;for(const p of c){let m=a[p],x=p in i;if(m){let $,v=i[p];d.path=(t.path?`${t.path}.`:"")+p,m=m.resolve({value:v,context:t.context,parent:u});let F=m instanceof _?m.spec:void 0,W=F==null?void 0:F.strict;if(F!=null&&F.strip){f=f||p in i;continue}$=!t.__validating||!W?m.cast(i[p],d):i[p],$!==void 0&&(u[p]=$)}else x&&!o&&(u[p]=i[p]);(x!==p in u||u[p]!==i[p])&&(f=!0)}return f?u:i}_validate(e,t={},r,i){let{from:a=[],originalValue:o=e,recursive:c=this.spec.recursive}=t;t.from=[{schema:this,value:o},...a],t.__validating=!0,t.originalValue=o,super._validate(e,t,r,(u,d)=>{if(!c||!Ye(d)){i(u,d);return}o=o||d;let f=[];for(let p of this._nodes){let m=this.fields[p];!m||I.isRef(m)||f.push(m.asNestedTest({options:t,key:p,parent:d,parentPath:t.path,originalParent:o}))}this.runTests({tests:f,value:d,originalValue:o,options:t},r,p=>{i(p.sort(this._sortErrors).concat(u),d)})})}clone(e){const t=super.clone(e);return t.fields=Object.assign({},this.fields),t._nodes=this._nodes,t._excludedEdges=this._excludedEdges,t._sortErrors=this._sortErrors,t}concat(e){let t=super.concat(e),r=t.fields;for(let[i,a]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?a:o}return t.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let t={};return this._nodes.forEach(r=>{var i;const a=this.fields[r];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),t[r]=a&&"getDefault"in a?a.getDefault(o):void 0}),t}setFields(e,t){let r=this.clone();return r.fields=e,r._nodes=Ln(e,t),r._sortErrors=xt(Object.keys(e)),t&&(r._excludedEdges=t),r}shape(e,t=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return t.length&&(Array.isArray(t[0])||(t=[t]),i=[...r._excludedEdges,...t]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[t,r]of Object.entries(this.fields))e[t]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return ae(this)}pick(e){const t={};for(const r of e)this.fields[r]&&(t[r]=this.fields[r]);return this.setFields(t,this._excludedEdges.filter(([r,i])=>e.includes(r)&&e.includes(i)))}omit(e){const t=[];for(const r of Object.keys(this.fields))e.includes(r)||t.push(r);return this.pick(t)}from(e,t,r){let i=Y.getter(e,!0);return this.transform(a=>{if(!a)return a;let o=a;return qn(a,e)&&(o=Object.assign({},a),r||delete o[e],o[t]=i(a)),o})}json(){return this.transform(In)}noUnknown(e=!0,t=ke.noUnknown){typeof e!="boolean"&&(t=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:t,test(i){if(i==null)return!0;const a=Vn(this.schema,i);return!e||a.length===0||this.createError({params:{unknown:a.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,t=ke.noUnknown){return this.noUnknown(!e,t)}transformKeys(e){return this.transform(t=>{if(!t)return t;const r={};for(const i of Object.keys(t))r[e(i)]=t[i];return r})}camelCase(){return this.transformKeys(ge.camelCase)}snakeCase(){return this.transformKeys(ge.snakeCase)}constantCase(){return this.transformKeys(e=>ge.snakeCase(e).toUpperCase())}describe(e){const t=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[a,o]of Object.entries(t.fields)){var i;let c=e;(i=c)!=null&&i.value&&(c=Object.assign({},c,{parent:c.value,value:c.value[a]})),r.fields[a]=o.describe(c)}return r}}gt.prototype=bt.prototype;const Xn=h.h2`
  font-size: 26px;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 24px;
`,Un=h.div`
  display: flex;
  flex-direction: column;
  font-size: 26px;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 24px;

  @media screen and (min-width: ${l.breakpoint.tablet}) {
    flex-direction: row;
    gap: 24px;
  }
`,Re=h.p`
  font-size: 16px;
`,Le=h.span`
  font-size: 18px;
  color: blue;
`,Gn=h.div`
  border: 1px solid #d7e3ff;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  margin-bottom: 24px;
`,Qn=h.p`
  color: #8f8f8f;
  font-size: 12px;
  line-height: 1.3;
  margin: 0;
`,Zn=h.span`
  color: blue;
`,Jn=h.div`
  margin-bottom: 24px;
`,Kn=h.h3`
  margin-bottom: 16px;
  margin-top: 0;
`,er=h.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
`,Ie=h.div`
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
`,qe=h.label`
  font-size: 16px;
  line-height: 1.25;
  /* margin-bottom: 8px; */
`,Ve=h(te)`
  display: flex;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid #d7e3ff;
  padding: 12px 10px;
  color: blue;
  font-size: 16px;
  width: 100%;
`,tr=h.div``,nr=h.button`
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  /* min-width: 280px; */
  height: 36px;
  gap: 10px;
  padding: 8px 30px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  background-color: #407bff;
  box-shadow: rgba(64, 123, 255, 0.34) 0px 4px 8px;
  color: white;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(64, 123, 255, 0.54) 0px 4px 14px;
  }

  &:active {
    box-shadow: none;
  }

  @media screen and (min-width: ${l.breakpoint.tablet}) {
    display: flex;
    width: 160px;
    height: 44px;
    padding: 10px 30px;
    font-size: 18px;
    margin-left: auto;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    line-height: 1.3;
  }

  @media (min-width: ${l.breakpoint.desktop}) {
    /* width: 384px; */
  }
`,rr=h.div`
  width: 280px;
  @media screen and (min-width: ${l.breakpoint.tablet}) {
    min-width: 704px;
  }

  @media (min-width: ${l.breakpoint.desktop}) {
    min-width: 592px;
  }
`;function ir(){const{addDailyNorma:n}=Qt(),e=t=>{const{gender:r,weight:i,activityHours:a}=t;if(r&&i&&a){if(r==="man")return parseFloat(i)*.04+parseFloat(a)*.6;if(r==="woman")return parseFloat(i)*.03+parseFloat(a)*.4}return null};return s.jsxs(rr,{children:[s.jsx(Xn,{children:"My daily norma"}),s.jsx(Et,{initialValues:{gender:"man",weight:"",activityHours:""},validationSchema:gt().shape({gender:ft().required("Gender is required"),weight:$e().required("Weight is required").positive().integer(),activityHours:$e().required("Activity hours is required").positive().integer()}),onSubmit:(t,{setSubmitting:r})=>{const i=e(t);n({waterIntake:i}),console.log("Form data:",{...t,waterIntake:i}),r(!1)},children:({isSubmitting:t,errors:r,touched:i,values:a,setFieldValue:o})=>s.jsxs(Mt,{children:[s.jsxs(Un,{children:[s.jsxs(Re,{children:["For girl:"," ",s.jsx(Le,{children:"V=(M*0,03) + (T*0,4)"})]}),s.jsxs(Re,{children:["For man:"," ",s.jsx(Le,{children:"V=(M*0,04) + (T*0,6)"})]})]}),s.jsx(Gn,{children:s.jsxs(Qn,{children:[s.jsx(Zn,{children:"* "}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),s.jsxs(Jn,{children:[s.jsx(Kn,{children:"Calculate your rate:"}),s.jsxs(er,{children:[s.jsxs("label",{children:[s.jsx(te,{type:"radio",name:"gender",value:"man",onChange:()=>o("gender","man")}),"For man"]}),s.jsxs("label",{children:[s.jsx(te,{type:"radio",name:"gender",value:"woman",onChange:()=>o("gender","woman")}),"For woman"]})]}),r.gender&&i.gender&&s.jsx("div",{children:r.gender})]}),s.jsx(Ie,{children:s.jsxs(qe,{children:["Your weight in kilograms:",s.jsx(te,{type:"number",name:"weight",placeholder:"0",component:Ve}),r.weight&&i.weight&&s.jsx("div",{children:r.weight})]})}),s.jsx(Ie,{children:s.jsxs(qe,{children:["The time of active participation in sports or other activities with a high physical. load in hours:",s.jsx(te,{type:"number",name:"activityHours",placeholder:"0",component:Ve}),r.activityHours&&i.activityHours&&s.jsx("div",{children:r.activityHours})]})}),s.jsx(tr,{children:s.jsxs("p",{children:["Your recommended water intake per day is:",e(a)?parseFloat(e(a)).toFixed(2):0,"liters"]})}),s.jsx(nr,{type:"submit",disabled:t,children:"Save"})]})})]})}const sr=()=>{const[n,e]=S.useState(!1),t=()=>{e(!n)},i=(2e3/1e3).toFixed(1)+" L";return s.jsxs(Bt,{children:[s.jsxs(Lt,{children:[s.jsx(Rt,{children:"My daily norma"}),s.jsxs(It,{children:[s.jsx("p",{children:i}),s.jsx(qt,{type:"button",onClick:t,children:"Edit"})]})]}),s.jsx(Yt,{}),n&&s.jsx(je,{onClose:t,children:s.jsx(ir,{})})]})},ar=h.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 40px;

  @media screen and (min-width: ${l.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 32px;
  }

  @media screen and (min-width: ${l.breakpoint.desktop}) {
    gap: 23px;
  }
`,or=h.h3`
  font-size: 18px;
  font-weight: 400;
  color: ${l.colors.blue};
  text-align: left;
  line-height: 1;
  width: 100%;
`,lr=h.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,cr=h.div`
  width: 256px;
  margin: 5px 14px;

  @media screen and (min-width: ${l.breakpoint.tablet}) {
    width: 325px;
  }

  @media screen and (min-width: ${l.breakpoint.desktop}) {
    width: 360px;
  }
`,ur=h.div`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${l.colors.paleBlue};
`,dr=h.span`
  /* width: 50%; */
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${l.colors.skyBlue};
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
    background: ${l.colors.white};
    border: solid 1px ${l.colors.blue};

    margin-top: -3px;
  }
`,hr=h.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`,fr=h.span`
  transform: translateX(-50%);
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${l.colors.blue};

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    color: ${l.colors.paleBlue};
  }
`,pr=h.span`
  transform: translateX(50%);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${l.colors.blue};

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${l.colors.paleBlue};
  }
`,mr=h.span`
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
  color: ${l.colors.blue};
  left: ${n=>n.left};

  transition: all 0.5s ease-out;

  &::before {
    content: '|';
    justify-content: center;
    align-items: center;
    color: ${l.colors.paleBlue};
    font-size: 12px;
  }
`,xr=h.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 6px 76px 6px 76px;
  background-color: ${l.colors.blue};
  color: ${l.colors.white};
  border: none;
  /* box-shadow: ${l.boxShadowBtn};  */
  box-shadow: ${l.boxShadowBtn.hoverBtn};
  width: 256px;
  margin-left: 14px;

  svg {
    width: 24px;
    height: 24px;
    fill: ${l.colors.blue};
    stroke: ${l.colors.white};
  }

  &:hover {
    box-shadow: ${l.boxShadowBtn.hoverBtn};
  }

  @media screen and (min-width: ${l.breakpoint.tablet}) {
    max-width: 336px;
    height: 43px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${l.breakpoint.desktop}) {
    width: 178px;
    height: 44px;
    padding: 10px 30px 10px 30px;
  }
`,gr=h.div`
  --r1: 154%;
  --r2: 68.5%;
  width: 60px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid ${l.colors.blue};
  background: radial-gradient(
      var(--r1) var(--r2) at top,
      ${l.colors.paleBlue} 79.5%,
      ${l.colors.skyBlue} 80%
    ),
    radial-gradient(
      var(--r1) var(--r2) at bottom,
      ${l.colors.skyBlue} 79.5%,
      ${l.colors.paleBlue} 80%
    ),
    radial-gradient(
      var(--r1) var(--r2) at top,
      ${l.colors.paleBlue} 79.5%,
      ${l.colors.skyBlue} 80%
    ),
    #ccc;
  background-size: 50.5% 220%;
  background-position:
    -100% 0%,
    0% 0%,
    100% 0%;
  background-repeat: no-repeat;
  animation: l9 2s infinite linear;
  @keyframes l9 {
    33% {
      background-position:
        0% 33%,
        100% 33%,
        200% 33%;
    }
    66% {
      background-position:
        -100% 66%,
        0% 66%,
        100% 66%;
    }
    100% {
      background-position:
        0% 100%,
        100% 100%,
        200% 100%;
    }
  }
`,br=()=>s.jsx(gr,{}),yr=n=>n.root.isLoading,wr=h.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 16px;
    color: ${l.colors.black};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }

  @media screen and (min-width: ${l.breakpoint.tablet}) {
    min-width: 704px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 32px;
  }

  @media screen and (min-width: ${l.breakpoint.desktop}) {
    min-width: 592px;
  }
`,He=h.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${l.colors.black};
  margin-bottom: 12px;
`,kr=h.div`
  margin-bottom: 24px;

  div {
    display: flex;
    align-items: center;
  }
`,vr=h.h2`
 margin-bottom: 24px;
    color: ${l.colors.black};
 font-size: 26px;
line-height: 123%;
    font-weight: 500;
   
`,$r=h.h3`
font-weight: 500;
font-size: 18px;
line-height: 111%;
 margin-bottom: 16px;
   
`,jr=h.p`
  color: ${l.colors.blue};
  align-items: center;
  justify-content: center;
  display: flex;
 font-weight: 700;
font-size: 18px;
line-height: 133%;
  width: 92px;
  height: 36px;
  margin: 0 auto;
`,Or=h.div`
  background: ${l.colors.paleBlue};
  border-radius: 40px;
padding: 6px 10px;
width: 92px;
height: 36px;
  margin-left: 10px;
  margin-right: 10px;
`,Xe=h.button`
  background-color: ${l.colors.white};
  color: ${l.colors.blue};
  border-radius: 30px;
  border: 1px solid ${l.colors.skyBlue};
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 4px;
  box-shadow: ${l.boxShadowBtn.Btn};

  &:hover &:focus {
    box-shadow: ${l.boxShadowBtn.hoverBtn};
  }
`,Ue=h.svg`
  width: 24px;
  height: 24px;
  stroke: ${l.colors.blue};
  fill: ${l.colors.blue};
`,Sr=h.div`
  margin-bottom: 24px;
`,Fr=h.input`
  color: ${l.colors.blue};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 95%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${l.colors.paleBlue};
  background-color: ${l.colors.white};

  &::placeholder {
    color: ${l.colors.skyBlue};
  }

  &:hover {
    color: ${l.colors.blue};
    border: 1px solid ${l.colors.blue};
  }

  &:focus {
    outline: none;
    border: 1px solid ${l.colors.blue};
  }

  &:not(:placeholder-shown) {
    color: ${l.colors.blue};
  }
   @media screen and (min-width: ${l.breakpoint.tablet}) {
    width: 97%;
  }
`,_r=h.input`
  color: ${l.colors.blue};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 95%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${l.colors.paleBlue};
  background-color: ${l.colors.white};

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${l.colors.skyBlue};
  }

  &:hover {
    color: ${l.colors.blue};
    border: 1px solid ${l.colors.blue};
  }

  &:focus {
    outline: none;
    border: 1px solid ${l.colors.blue};
  }

  &:not(:placeholder-shown) {
    color: ${l.colors.blue};
  }
  @media screen and (min-width: ${l.breakpoint.tablet}) {
    width: 97%;
  }

`,Tr=h.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  span {
    color: ${l.colors.blue};
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }

  @media screen and (min-width: ${l.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 24px;
    margin-top: 24px;
  }
`,Dr=h.button`
  box-sizing: border-box;
  display: inline-block;
  width: 280px;
  gap: 10px;
  padding: 8px 30px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  background-color: ${l.colors.blue};
  box-shadow: ${l.boxShadowBtn.Btn};
  color: ${l.colors.white};
  cursor: pointer;

  &:hover {
    box-shadow: ${l.boxShadowBtn.hoverBtn};
  }

  &:active {
    box-shadow: ${l.boxShadowBtn.activeBtn};
  }

  @media screen and (min-width: ${l.breakpoint.tablet}) {
padding: 10px 30px;
width: 160px;
height: 44px;

  }

  @media screen and (min-width: ${l.breakpoint.desktop}) {
padding: 10px 30px;
width: 160px;
height: 44px;
  }
`,Er=({onClose:n})=>{const[t,r]=S.useState(0),[i,a]=S.useState(new Date().toISOString().slice(0,16)),o=rt(),{isLoading:c}=se(yr),u=m=>{let x=m.target.value;x.startsWith("0")&&x.length>1&&(x=parseFloat(x.substring(1))),r(x.toString())},d=()=>{o(Dt({waterVolume:t,date:i})).then(x=>{x.error||(n(),r(0))})},f=()=>{r(m=>Math.max(m-50,0))},p=()=>{const m=t+50,x=5e3;r(m<=x?m:x)};return s.jsx(s.Fragment,{children:s.jsxs(wr,{onClose:n,children:[s.jsxs(kr,{children:[s.jsx(vr,{children:"Add Water"}),s.jsx($r,{children:"Choose a value:"}),s.jsx(He,{children:"Amount of water:"}),s.jsxs("div",{children:[s.jsx(Xe,{onClick:f,children:s.jsx(Ue,{children:s.jsx("use",{href:`${b}#icon-minus`})})}),s.jsx(Or,{children:s.jsxs(jr,{children:[t," ml"]})}),s.jsx(Xe,{onClick:p,children:s.jsx(Ue,{children:s.jsx("use",{href:`${b}#icon-plus`})})})]})]}),s.jsxs(Sr,{children:[s.jsx(He,{children:"Recording time:"}),s.jsx(Fr,{value:i,onChange:m=>a(m.target.value),step:"300"})]}),s.jsxs("div",{children:[s.jsx("h3",{children:"Enter the value of the water used:"}),s.jsx(_r,{type:"number",value:t,onChange:u,onBlur:()=>r(m=>m||0||0),max:5e3})]}),s.jsxs(Tr,{children:[s.jsxs("span",{children:[t,"ml"]}),s.jsxs(Dr,{onClick:d,children:["Save ",c&&s.jsx(br,{})]})]})]})})},Mr=()=>{const[n,e]=S.useState(!1),t=()=>{e(!n)},r=88;return s.jsxs(ar,{children:[s.jsxs(lr,{children:[s.jsx(or,{children:"Today"}),s.jsxs(cr,{children:[s.jsx(ur,{children:s.jsx(dr,{style:{width:`${Math.min(r,100)}%`}})}),s.jsxs(hr,{children:[s.jsx(fr,{children:"0%"}),s.jsxs(mr,{left:`${r}%`,children:[r,"%"]}),s.jsx(pr,{children:"100%"})]})]})]}),s.jsxs(xr,{onClick:t,children:[s.jsx("svg",{children:s.jsx("use",{href:`${b}#icon-outline`})}),"Add water"]}),n&&s.jsx(je,{onClose:t,children:s.jsx(Er,{})})]})},Cr=h.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`,Pr=h.div`
  height: 212px;
  overflow: auto;
  margin-bottom: 12px;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${l.colors.paleBlue};
    width: 2px;
    margin: 0 auto;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    width: 6px;
    height: 100px;
    border-radius: 3px;
    background-color: ${l.colors.skyBlue};
  }
`,V=h.div`
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
    background-color: ${l.colors.paleBlue};
  }
`,Ar=h.h3`
  font-size: 24px;
  font-weight: 500;
  /* font-family: 'Roboto'; */
  color: ${l.colors.black};
  text-align: left;
  line-height: 1.25;
  margin-bottom: 15px;

  @media screen and (min-width: ${l.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 1.23;
  }
`,H=h.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  h4 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    color: ${l.colors.blue};
  }
  p {
    font-size: 12px;
    line-height: 24px;
    font-weight: 400;
    color: ${l.colors.black};
    span {
      text-transform: uppercase;
    }
    svg {
      width: 26px;
      height: 26px;
    }
  }
`,X=h.svg`
  width: 26px;
  height: 26px;
  fill: transparent;
  @media screen and (min-width: ${l.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,U=h.div`
  display: flex;
  gap: 18px;
  margin-right: 10px;
`,G=h.svg`
  width: 16px;
  height: 16px;
  stroke: ${l.colors.skyBlue};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${l.colors.skyBlue};
  }
`,Q=h.svg`
  width: 16px;
  height: 16px;
  stroke: ${l.colors.brightRed};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${l.colors.brightRed};
  }
`,Wr=h.button`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: transparent;
  color: ${l.colors.blue};
  border: none;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  stroke: ${l.colors.blue};

  & svg {
    width: 16px;
    height: 16px;
    fill: ${l.colors.blue};
    stroke: transparent;
    padding-bottom: 2px;
    &:hover {
      fill: ${l.colors.orange};
    }
  }

  @media screen and (min-width: ${l.breakpoint.tablet}) {
    font-size: 18px;
    line-height: 1.33;
  }

  & svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    color: ${l.colors.orange};
    fill: ${l.colors.orange};
  }
`,Nr=()=>{const[n,e]=S.useState(!1),t=()=>{e(!n)};return s.jsxs(s.Fragment,{children:[s.jsxs(Cr,{children:[s.jsx(Ar,{children:"Today"}),s.jsxs(Pr,{children:[s.jsxs(V,{children:[s.jsxs(H,{children:[s.jsx(X,{children:s.jsx("use",{href:`${b}#icon-glass`})}),s.jsx("h4",{children:"250ml"}),s.jsxs("p",{children:["7:00",s.jsx("span",{children:"AM"})]})]}),s.jsxs(U,{children:[s.jsx(G,{children:s.jsx("use",{href:`${b}#icon-note`})}),s.jsx(Q,{children:s.jsx("use",{href:`${b}#icon-trash`})})]})]}),s.jsxs(V,{children:[s.jsxs(H,{children:[s.jsx(X,{children:s.jsx("use",{href:`${b}#icon-glass`})}),s.jsx("h4",{children:"250ml"}),s.jsxs("p",{children:["7:00",s.jsx("span",{children:"AM"})]})]}),s.jsxs(U,{children:[s.jsx(G,{children:s.jsx("use",{href:`${b}#icon-note`})}),s.jsx(Q,{children:s.jsx("use",{href:`${b}#icon-trash`})})]})]}),s.jsxs(V,{children:[s.jsxs(H,{children:[s.jsx(X,{children:s.jsx("use",{href:`${b}#icon-glass`})}),s.jsx("h4",{children:"250ml"}),s.jsxs("p",{children:["7:00",s.jsx("span",{children:"AM"})]})]}),s.jsxs(U,{children:[s.jsx(G,{children:s.jsx("use",{href:`${b}#icon-note`})}),s.jsx(Q,{children:s.jsx("use",{href:`${b}#icon-trash`})})]})]}),s.jsxs(V,{children:[s.jsxs(H,{children:[s.jsx(X,{children:s.jsx("use",{href:`${b}#icon-glass`})}),s.jsx("h4",{children:"250ml"}),s.jsxs("p",{children:["7:00",s.jsx("span",{children:"AM"})]})]}),s.jsxs(U,{children:[s.jsx(G,{children:s.jsx("use",{href:`${b}#icon-note`})}),s.jsx(Q,{children:s.jsx("use",{href:`${b}#icon-trash`})})]})]}),s.jsxs(V,{children:[s.jsxs(H,{children:[s.jsx(X,{children:s.jsx("use",{href:`${b}#icon-glass`})}),s.jsx("h4",{children:"250ml"}),s.jsxs("p",{children:["7:00",s.jsx("span",{children:"AM"})]})]}),s.jsxs(U,{children:[s.jsx(G,{children:s.jsx("use",{href:`${b}#icon-note`})}),s.jsx(Q,{children:s.jsx("use",{href:`${b}#icon-trash`})})]})]}),s.jsxs(V,{children:[s.jsxs(H,{children:[s.jsx(X,{children:s.jsx("use",{href:`${b}#icon-glass`})}),s.jsx("h4",{children:"250ml"}),s.jsxs("p",{children:["7:00",s.jsx("span",{children:"AM"})]})]}),s.jsxs(U,{children:[s.jsx(G,{children:s.jsx("use",{href:`${b}#icon-note`})}),s.jsx(Q,{children:s.jsx("use",{href:`${b}#icon-trash`})})]})]})]}),s.jsxs(Wr,{onClick:t,children:[s.jsx("svg",{children:s.jsx("use",{href:`${b}#icon-increment`})}),"Add water"]})]}),n&&s.jsx(je,{onClose:t,children:s.jsx("h2",{children:"Drink list"})})]})};const zr=h.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    color: ${l.colors.black};
    margin-bottom: 6px;
  }
  @media screen and (min-width: ${l.breakpoint.tablet}) {
    h3 {
      font-size: 26px;
      line-height: 32px;
    }
  }
`,Br=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,Yr=h.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    color: ${l.colors.blue};
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    padding-left: 6px;
    padding-right: 6px;
    width: 126px;
    text-align: center;
  }
`,Ge=h.svg`
  width: 6px;
  height: 10px;
  background: transparent;
  fill: ${l.colors.blue};

  &:hover {
    fill: ${l.colors.orange};
  }
`,Rr=h.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 50px);
  justify-content: space-between;
  gap: 16px;
  height: 446px;

  @media screen and (min-width: ${l.breakpoint.tablet}) {
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 50px);
    gap: 20px;
    height: 268px;
  }
`,Lr=h.button`
  padding: 7px 6px;
  width: 35px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: ${l.colors.black};

  background-color: ${l.colors.white};
  border: 1px solid ${l.colors.blue};

  @media screen and (min-width: ${l.breakpoint.tablet}) {
    font-size: 16px;
    padding: 7px;
  }

  &:hover {
    box-shadow: 0px 4px 8px ${l.colors.skyBlue};
    border: 1px solid ${l.colors.orange};
  }
`,Ir=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.6;
  color: ${l.colors.skyBlue};

  @media screen and (min-width: ${l.breakpoint.tablet}) {
    font-size: 12px;
  }
`;function T(n){const e=Object.prototype.toString.call(n);return n instanceof Date||typeof n=="object"&&e==="[object Date]"?new n.constructor(+n):typeof n=="number"||e==="[object Number]"||typeof n=="string"||e==="[object String]"?new Date(n):new Date(NaN)}function R(n,e){return n instanceof Date?new n.constructor(e):new Date(e)}const yt=6048e5,qr=864e5;let Vr={};function fe(){return Vr}function ne(n,e){var c,u,d,f;const t=fe(),r=(e==null?void 0:e.weekStartsOn)??((u=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:u.weekStartsOn)??t.weekStartsOn??((f=(d=t.locale)==null?void 0:d.options)==null?void 0:f.weekStartsOn)??0,i=T(n),a=i.getDay(),o=(a<r?7:0)+a-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function ce(n){return ne(n,{weekStartsOn:1})}function wt(n){const e=T(n),t=e.getFullYear(),r=R(n,0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const i=ce(r),a=R(n,0);a.setFullYear(t,0,4),a.setHours(0,0,0,0);const o=ce(a);return e.getTime()>=i.getTime()?t+1:e.getTime()>=o.getTime()?t:t-1}function Qe(n){const e=T(n);return e.setHours(0,0,0,0),e}function Ze(n){const e=T(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+n-+t}function Hr(n,e){const t=Qe(n),r=Qe(e),i=+t-Ze(t),a=+r-Ze(r);return Math.round((i-a)/qr)}function Xr(n){const e=wt(n),t=R(n,0);return t.setFullYear(e,0,4),t.setHours(0,0,0,0),ce(t)}function Ur(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function Gr(n){if(!Ur(n)&&typeof n!="number")return!1;const e=T(n);return!isNaN(Number(e))}function Qr(n){const e=T(n),t=R(n,0);return t.setFullYear(e.getFullYear(),0,1),t.setHours(0,0,0,0),t}const Zr={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Jr=(n,e,t)=>{let r;const i=Zr[n];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function be(n){return(e={})=>{const t=e.width?String(e.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const Kr={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ei={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ti={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ni={date:be({formats:Kr,defaultWidth:"full"}),time:be({formats:ei,defaultWidth:"full"}),dateTime:be({formats:ti,defaultWidth:"full"})},ri={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ii=(n,e,t,r)=>ri[n];function K(n){return(e,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let i;if(r==="formatting"&&n.formattingValues){const o=n.defaultFormattingWidth||n.defaultWidth,c=t!=null&&t.width?String(t.width):o;i=n.formattingValues[c]||n.formattingValues[o]}else{const o=n.defaultWidth,c=t!=null&&t.width?String(t.width):n.defaultWidth;i=n.values[c]||n.values[o]}const a=n.argumentCallback?n.argumentCallback(e):e;return i[a]}}const si={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ai={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},oi={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},li={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ci={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ui={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},di=(n,e)=>{const t=Number(n),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},hi={ordinalNumber:di,era:K({values:si,defaultWidth:"wide"}),quarter:K({values:ai,defaultWidth:"wide",argumentCallback:n=>n-1}),month:K({values:oi,defaultWidth:"wide"}),day:K({values:li,defaultWidth:"wide"}),dayPeriod:K({values:ci,defaultWidth:"wide",formattingValues:ui,defaultFormattingWidth:"wide"})};function ee(n){return(e,t={})=>{const r=t.width,i=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],a=e.match(i);if(!a)return null;const o=a[0],c=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],u=Array.isArray(c)?pi(c,p=>p.test(o)):fi(c,p=>p.test(o));let d;d=n.valueCallback?n.valueCallback(u):u,d=t.valueCallback?t.valueCallback(d):d;const f=e.slice(o.length);return{value:d,rest:f}}}function fi(n,e){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&e(n[t]))return t}function pi(n,e){for(let t=0;t<n.length;t++)if(e(n[t]))return t}function mi(n){return(e,t={})=>{const r=e.match(n.matchPattern);if(!r)return null;const i=r[0],a=e.match(n.parsePattern);if(!a)return null;let o=n.valueCallback?n.valueCallback(a[0]):a[0];o=t.valueCallback?t.valueCallback(o):o;const c=e.slice(i.length);return{value:o,rest:c}}}const xi=/^(\d+)(th|st|nd|rd)?/i,gi=/\d+/i,bi={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},yi={any:[/^b/i,/^(a|c)/i]},wi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ki={any:[/1/i,/2/i,/3/i,/4/i]},vi={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},$i={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ji={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Oi={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Si={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Fi={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},_i={ordinalNumber:mi({matchPattern:xi,parsePattern:gi,valueCallback:n=>parseInt(n,10)}),era:ee({matchPatterns:bi,defaultMatchWidth:"wide",parsePatterns:yi,defaultParseWidth:"any"}),quarter:ee({matchPatterns:wi,defaultMatchWidth:"wide",parsePatterns:ki,defaultParseWidth:"any",valueCallback:n=>n+1}),month:ee({matchPatterns:vi,defaultMatchWidth:"wide",parsePatterns:$i,defaultParseWidth:"any"}),day:ee({matchPatterns:ji,defaultMatchWidth:"wide",parsePatterns:Oi,defaultParseWidth:"any"}),dayPeriod:ee({matchPatterns:Si,defaultMatchWidth:"any",parsePatterns:Fi,defaultParseWidth:"any"})},Ti={code:"en-US",formatDistance:Jr,formatLong:ni,formatRelative:ii,localize:hi,match:_i,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Di(n){const e=T(n);return Hr(e,Qr(e))+1}function Ei(n){const e=T(n),t=+ce(e)-+Xr(e);return Math.round(t/yt)+1}function kt(n,e){var f,p,m,x;const t=T(n),r=t.getFullYear(),i=fe(),a=(e==null?void 0:e.firstWeekContainsDate)??((p=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??i.firstWeekContainsDate??((x=(m=i.locale)==null?void 0:m.options)==null?void 0:x.firstWeekContainsDate)??1,o=R(n,0);o.setFullYear(r+1,0,a),o.setHours(0,0,0,0);const c=ne(o,e),u=R(n,0);u.setFullYear(r,0,a),u.setHours(0,0,0,0);const d=ne(u,e);return t.getTime()>=c.getTime()?r+1:t.getTime()>=d.getTime()?r:r-1}function Mi(n,e){var c,u,d,f;const t=fe(),r=(e==null?void 0:e.firstWeekContainsDate)??((u=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:u.firstWeekContainsDate)??t.firstWeekContainsDate??((f=(d=t.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??1,i=kt(n,e),a=R(n,0);return a.setFullYear(i,0,r),a.setHours(0,0,0,0),ne(a,e)}function Ci(n,e){const t=T(n),r=+ne(t,e)-+Mi(t,e);return Math.round(r/yt)+1}function g(n,e){const t=n<0?"-":"",r=Math.abs(n).toString().padStart(e,"0");return t+r}const C={y(n,e){const t=n.getFullYear(),r=t>0?t:1-t;return g(e==="yy"?r%100:r,e.length)},M(n,e){const t=n.getMonth();return e==="M"?String(t+1):g(t+1,2)},d(n,e){return g(n.getDate(),e.length)},a(n,e){const t=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(n,e){return g(n.getHours()%12||12,e.length)},H(n,e){return g(n.getHours(),e.length)},m(n,e){return g(n.getMinutes(),e.length)},s(n,e){return g(n.getSeconds(),e.length)},S(n,e){const t=e.length,r=n.getMilliseconds(),i=Math.trunc(r*Math.pow(10,t-3));return g(i,e.length)}},Z={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Je={G:function(n,e,t){const r=n.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(n,e,t){if(e==="yo"){const r=n.getFullYear(),i=r>0?r:1-r;return t.ordinalNumber(i,{unit:"year"})}return C.y(n,e)},Y:function(n,e,t,r){const i=kt(n,r),a=i>0?i:1-i;if(e==="YY"){const o=a%100;return g(o,2)}return e==="Yo"?t.ordinalNumber(a,{unit:"year"}):g(a,e.length)},R:function(n,e){const t=wt(n);return g(t,e.length)},u:function(n,e){const t=n.getFullYear();return g(t,e.length)},Q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return g(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return g(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,e,t){const r=n.getMonth();switch(e){case"M":case"MM":return C.M(n,e);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(n,e,t){const r=n.getMonth();switch(e){case"L":return String(r+1);case"LL":return g(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(n,e,t,r){const i=Ci(n,r);return e==="wo"?t.ordinalNumber(i,{unit:"week"}):g(i,e.length)},I:function(n,e,t){const r=Ei(n);return e==="Io"?t.ordinalNumber(r,{unit:"week"}):g(r,e.length)},d:function(n,e,t){return e==="do"?t.ordinalNumber(n.getDate(),{unit:"date"}):C.d(n,e)},D:function(n,e,t){const r=Di(n);return e==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):g(r,e.length)},E:function(n,e,t){const r=n.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(n,e,t,r){const i=n.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return g(a,2);case"eo":return t.ordinalNumber(a,{unit:"day"});case"eee":return t.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(i,{width:"short",context:"formatting"});case"eeee":default:return t.day(i,{width:"wide",context:"formatting"})}},c:function(n,e,t,r){const i=n.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return g(a,e.length);case"co":return t.ordinalNumber(a,{unit:"day"});case"ccc":return t.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(i,{width:"narrow",context:"standalone"});case"cccccc":return t.day(i,{width:"short",context:"standalone"});case"cccc":default:return t.day(i,{width:"wide",context:"standalone"})}},i:function(n,e,t){const r=n.getDay(),i=r===0?7:r;switch(e){case"i":return String(i);case"ii":return g(i,e.length);case"io":return t.ordinalNumber(i,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(n,e,t){const i=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(n,e,t){const r=n.getHours();let i;switch(r===12?i=Z.noon:r===0?i=Z.midnight:i=r/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(n,e,t){const r=n.getHours();let i;switch(r>=17?i=Z.evening:r>=12?i=Z.afternoon:r>=4?i=Z.morning:i=Z.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(n,e,t){if(e==="ho"){let r=n.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return C.h(n,e)},H:function(n,e,t){return e==="Ho"?t.ordinalNumber(n.getHours(),{unit:"hour"}):C.H(n,e)},K:function(n,e,t){const r=n.getHours()%12;return e==="Ko"?t.ordinalNumber(r,{unit:"hour"}):g(r,e.length)},k:function(n,e,t){let r=n.getHours();return r===0&&(r=24),e==="ko"?t.ordinalNumber(r,{unit:"hour"}):g(r,e.length)},m:function(n,e,t){return e==="mo"?t.ordinalNumber(n.getMinutes(),{unit:"minute"}):C.m(n,e)},s:function(n,e,t){return e==="so"?t.ordinalNumber(n.getSeconds(),{unit:"second"}):C.s(n,e)},S:function(n,e){return C.S(n,e)},X:function(n,e,t){const r=n.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return et(r);case"XXXX":case"XX":return B(r);case"XXXXX":case"XXX":default:return B(r,":")}},x:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"x":return et(r);case"xxxx":case"xx":return B(r);case"xxxxx":case"xxx":default:return B(r,":")}},O:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Ke(r,":");case"OOOO":default:return"GMT"+B(r,":")}},z:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Ke(r,":");case"zzzz":default:return"GMT"+B(r,":")}},t:function(n,e,t){const r=Math.trunc(n.getTime()/1e3);return g(r,e.length)},T:function(n,e,t){const r=n.getTime();return g(r,e.length)}};function Ke(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),i=Math.trunc(r/60),a=r%60;return a===0?t+String(i):t+String(i)+e+g(a,2)}function et(n,e){return n%60===0?(n>0?"-":"+")+g(Math.abs(n)/60,2):B(n,e)}function B(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),i=g(Math.trunc(r/60),2),a=g(r%60,2);return t+i+e+a}const tt=(n,e)=>{switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},vt=(n,e)=>{switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Pi=(n,e)=>{const t=n.match(/(P+)(p+)?/)||[],r=t[1],i=t[2];if(!i)return tt(n,e);let a;switch(r){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;case"PPPP":default:a=e.dateTime({width:"full"});break}return a.replace("{{date}}",tt(r,e)).replace("{{time}}",vt(i,e))},Ai={p:vt,P:Pi},Wi=/^D+$/,Ni=/^Y+$/,zi=["D","DD","YY","YYYY"];function Bi(n){return Wi.test(n)}function Yi(n){return Ni.test(n)}function Ri(n,e,t){const r=Li(n,e,t);if(console.warn(r),zi.includes(n))throw new RangeError(r)}function Li(n,e,t){const r=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Ii=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,qi=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Vi=/^'([^]*?)'?$/,Hi=/''/g,Xi=/[a-zA-Z]/;function nt(n,e,t){var f,p,m,x,$,v,F,W;const r=fe(),i=(t==null?void 0:t.locale)??r.locale??Ti,a=(t==null?void 0:t.firstWeekContainsDate)??((p=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:p.firstWeekContainsDate)??r.firstWeekContainsDate??((x=(m=r.locale)==null?void 0:m.options)==null?void 0:x.firstWeekContainsDate)??1,o=(t==null?void 0:t.weekStartsOn)??((v=($=t==null?void 0:t.locale)==null?void 0:$.options)==null?void 0:v.weekStartsOn)??r.weekStartsOn??((W=(F=r.locale)==null?void 0:F.options)==null?void 0:W.weekStartsOn)??0,c=T(n);if(!Gr(c))throw new RangeError("Invalid time value");let u=e.match(qi).map(y=>{const k=y[0];if(k==="p"||k==="P"){const N=Ai[k];return N(y,i.formatLong)}return y}).join("").match(Ii).map(y=>{if(y==="''")return{isToken:!1,value:"'"};const k=y[0];if(k==="'")return{isToken:!1,value:Ui(y)};if(Je[k])return{isToken:!0,value:y};if(k.match(Xi))throw new RangeError("Format string contains an unescaped latin alphabet character `"+k+"`");return{isToken:!1,value:y}});i.localize.preprocessor&&(u=i.localize.preprocessor(c,u));const d={firstWeekContainsDate:a,weekStartsOn:o,locale:i};return u.map(y=>{if(!y.isToken)return y.value;const k=y.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&Yi(k)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&Bi(k))&&Ri(k,e,String(n));const N=Je[k[0]];return N(c,k,i.localize,d)}).join("")}function Ui(n){const e=n.match(Vi);return e?e[1].replace(Hi,"'"):n}const Gi=()=>{const[n,e]=S.useState(new Date),[t,r]=S.useState(new Date),i=d=>{e(f=>{const p=new Date(f);return p.setMonth(p.getMonth()+d),p})},a=()=>{const f=new Date(n.getFullYear(),n.getMonth()+1,0).getDate(),p=[];for(let m=1;m<=f;m++)p.push(m);return p},o=()=>new Intl.DateTimeFormat("en",{month:"long"}).format(n),c=()=>n.getFullYear(),u=d=>{const f=new Date(n.getFullYear(),n.getMonth(),d);f<=new Date?(r(f),console.log(nt(f,"dd.MM.yyyy"))):console.log("Выберите день не позже сегодняшней даты")};return s.jsxs("div",{children:[s.jsxs(zr,{children:[s.jsxs(Br,{children:[s.jsx("h3",{children:"Month"}),s.jsxs(Yr,{children:[s.jsx(Ge,{onClick:()=>i(-1),children:s.jsx("use",{href:`${b}#icon-left`})}),s.jsxs("span",{children:[o(),", ",c()]}),s.jsx(Ge,{onClick:()=>i(1),children:s.jsx("use",{href:`${b}#icon-right`})})]})]}),s.jsx(Rr,{children:a().map(d=>s.jsxs("div",{children:[s.jsx(Lr,{onClick:()=>u(d),children:d}),s.jsx(Ir,{children:"0%"})]},d))})]}),t!==null&&s.jsxs("p",{children:["Selected day: ",nt(t,"dd.MM.yyyy")]})]})},Qi=h.div`
  display: flex;
  flex-direction: column;
  padding-top: 22px;
  margin: 0 auto;
  max-width: 704px;
  padding-bottom: 22px;

  @media screen and (min-width: ${l.breakpoint.desktop}) {
    flex-direction: row;
    gap: 32px;
    max-width: 1176px;
  }
`,Zi=h.div`
  display: flex;
  flex-direction: column;
  background-color: ${l.colors.lightBlue};
  padding: 20px 24px;
  border-radius: 10px;
  max-width: 704px;
  box-shadow: ${l.boxShadowBtn.Btn};
  gap: 24px;

  @media screen and (min-width: ${l.breakpoint.desktop}) {
    width: 590px;
  }
`,Ji=h.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${l.breakpoint.desktop}) {
    max-width: 50%;
  }
`,Ki=h.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: ${l.breakpoint.tablet}) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${l.breakpoint.desktop}) {
    padding-left: 132px;
    padding-right: 132px;
  }
`,rs=()=>s.jsx(s.Fragment,{children:s.jsx(Ki,{children:s.jsxs(Qi,{children:[s.jsxs(Ji,{children:[s.jsx(sr,{}),s.jsx(Mr,{})]}),s.jsxs(Zi,{children:[s.jsx(Nr,{}),s.jsx(Gi,{})]})]})})});export{rs as default};
