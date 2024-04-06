import{n as s,t as a,e as me,f as R,g as T,r as w,h as ae,i as pe,k as xe,p as fe,F as A,j as o,c as ge,d as be,M as X,s as M,l as we,o as ye}from"./index-0972ce9a.js";const ke="/runners_of_code__frontend/assets/bottle_home_mobile@1x-0d6054eb.png",ve="/runners_of_code__frontend/assets/bottle_home_mobile@2x-52eb5066.png",je="/runners_of_code__frontend/assets/bottle_home_tablet@1x-c4bedac4.png",$e="/runners_of_code__frontend/assets/bottle_home_tablet@2x-867eb443.png",Me="/runners_of_code__frontend/assets/bottle_home_desk-f67b46be.png",De="/runners_of_code__frontend/assets/bottle_home_deskx2-acd9b153.png",Pe=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;
`,We=s.div`
  background-position: left bottom;
  background-image: -webkit-image-set(
    url(${ke}) 1x,
    url(${ve}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;
  z-index: -1;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${je}) 1x,
      url(${$e}) 2x
    );
    height: 386px;
    margin-top: -114px;
    background-position: center top;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Me}) 1x,
      url(${De}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,Se=s.h3`
  font-size: 18px;
  line-height: 1.33;
  font-family: 'Roboto-Bold', sans-serif;
  margin-bottom: 12px;
  color: ${a.colors.black};
`,Oe=s.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 8px 20px;
  padding-top: 20px;
  width: 164px;

  border-radius: 10px;
  border: 1px solid ${a.colors.lightBlue};
  box-shadow: ${a.boxShadowBtn.Btn};

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    margin: 0;

    color: ${a.colors.blue};
  }
`,Te=s.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`,Be=s.button`
  padding: 0;
  background-color: ${a.colors.white};
  color: ${a.colors.paleBlue};
  border: none;
  font-size: 16px;
  &:hover {
    color: ${a.colors.orange};
  }
`,ie=e=>e.waters.dailyNorm,se=e=>e.waters.reps,ce=e=>e.filter,Ce=e=>e.waters;me([ie,ce],(e,n)=>e.filter(t=>t.name.toLowerCase().includes(n.toLowerCase())));const Fe=()=>{const e=R(),n=T(ie),t=T(se),r=T(ce),i=w.useCallback(u=>e(ae(u)),[e]),c=w.useCallback(u=>e(pe(u)),[e]),d=w.useCallback(u=>e(xe(u)),[e]),h=w.useCallback(u=>e(fe(u)),[e]);return{dailyNorm:n,reps:t,filter:r,getWaters:i,addDailyNorma:c,deleteReps:d,patchWater:h}},_e=s.h2`
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 24px;
`,Ye=s.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  line-height: 1.2;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    flex-direction: row;
    gap: 24px;
  }
`,I=s.p`
  font-size: 16px;
`,Q=s.span`
  font-size: 18px;
  color: ${a.colors.blue};
`,ze=s.div`
  border: 1px solid ${a.colors.paleBlue};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  margin-bottom: 24px;
  width: auto;
`,Ee=s.p`
  color: ${a.colors.secondText};
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`,Ne=s.span`
  color: ${a.colors.blue};
`,Le=s.div`
  margin-bottom: 24px;
`,He=s.h3`
  margin-bottom: 16px;
  margin-top: 0;
`,Ae=s.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
`,G=s.div`
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
`,E=s.label``,qe=s.div`
  font-size: 18px;
  padding-bottom: 26px;
  span {
    padding-left: 5px;
    color: ${a.colors.blue};
    font-weight: bold;
  }
`,N=s.label`
  display: block;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 8px;
  color: ${a.colors.black};
`,L=s(A)`
  display: flex;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid ${a.colors.paleBlue};
  padding: 12px 10px;
  color: ${a.colors.blue};
  font-size: 16px;
  width: 100%;
  &::placeholder {
    color: ${a.colors.paleBlue};
  }
  &:hover,
  &:focus {
    outline: none;
    border-color: ${a.colors.blue};
  }
`,Re=s.button`
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  margin-top: 24px;
  height: 36px;

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

  @media screen and (min-width: ${a.breakpoint.tablet}) {
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

  @media (min-width: ${a.breakpoint.desktop}) {
    /* width: 384px; */
  }
`,Xe=s.div`
  width: 280px;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    min-width: 704px;
  }

  @media (min-width: ${a.breakpoint.desktop}) {
    min-width: 592px;
  }
`,Ie={gender:"man",weight:"",activityHours:""};function Qe(){const{addDailyNorma:e}=Fe(),n=t=>{const{gender:r,weight:i,activityHours:c}=t;if(r&&i&&c){if(r==="man")return parseFloat(i)*.04+parseFloat(c)*.6;if(r==="woman")return parseFloat(i)*.03+parseFloat(c)*.4}return null};return o.jsxs(Xe,{children:[o.jsx(_e,{children:"My daily norma"}),o.jsx(ge,{initialValues:Ie,onSubmit:(t,{setSubmitting:r})=>{const i=n(t);e({waterIntake:i}),console.log("Form data:",{...t,waterIntake:i}),r(!1)},children:({isSubmitting:t,errors:r,touched:i,values:c,setFieldValue:d})=>o.jsxs(be,{children:[o.jsxs(Ye,{children:[o.jsxs(I,{children:["For girl:"," ",o.jsx(Q,{children:"V=(M*0,03) + (T*0,4)"})]}),o.jsxs(I,{children:["For man:"," ",o.jsx(Q,{children:"V=(M*0,04) + (T*0,6)"})]})]}),o.jsx(ze,{children:o.jsxs(Ee,{children:[o.jsx(Ne,{children:"* "}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),o.jsxs(Le,{children:[o.jsx(He,{children:"Calculate your rate:"}),o.jsxs(Ae,{children:[o.jsxs("label",{children:[o.jsx(A,{type:"radio",name:"gender",value:"man",onChange:()=>d("gender","man")}),"For man"]}),o.jsxs("label",{children:[o.jsx(A,{type:"radio",name:"gender",value:"woman",onChange:()=>d("gender","woman")}),"For woman"]})]}),r.gender&&i.gender&&o.jsx("div",{children:r.gender})]}),o.jsx(G,{children:o.jsxs(E,{children:[o.jsx(N,{children:"Your weight in kilograms:"}),o.jsx(L,{type:"number",name:"weight",placeholder:"0"}),r.weight&&i.weight&&o.jsx("div",{children:r.weight})]})}),o.jsxs(G,{children:[o.jsxs(N,{children:[" ","The time of active participation in sports or other activities with a high physical. load in hours:"]}),o.jsxs(E,{children:[o.jsx(L,{type:"number",name:"activityHours",placeholder:"0"}),r.activityHours&&i.activityHours&&o.jsx("div",{children:r.activityHours})]})]}),o.jsxs(qe,{children:["Your recommended water intake per day is:",o.jsxs("span",{children:[n(c)?parseFloat(n(c)).toFixed(2):0,"L"]})]}),o.jsx(N,{children:"Write down how much water you will drink:"}),o.jsx(E,{children:o.jsx(L,{type:"number",name:"Iwilldrunk",placeholder:"0"})}),o.jsx(Re,{type:"submit",disabled:t,children:"Save"})]})})]})}const Ge=()=>{const[e,n]=w.useState(!1),t=()=>{n(!e)},i=(2e3/1e3).toFixed(1)+" L";return o.jsxs(Pe,{children:[o.jsxs(Oe,{children:[o.jsx(Se,{children:"My daily norma"}),o.jsxs(Te,{children:[o.jsx("p",{children:i}),o.jsx(Be,{type:"button",onClick:t,children:"Edit"})]})]}),o.jsx(We,{}),e&&o.jsx(X,{onClose:t,children:o.jsx(Qe,{})})]})},Ve=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 40px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 32px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    gap: 23px;
  }
`,Je=s.h3`
  font-size: 18px;
  font-weight: 400;
  color: ${a.colors.blue};
  text-align: left;
  line-height: 1;
  width: 100%;
`,Ue=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Ke=s.div`
  width: 256px;
  margin: 5px 14px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 325px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    width: 360px;
  }
`,Ze=s.div`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${a.colors.paleBlue};
`,et=s.span`
  /* width: 50%; */
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${a.colors.skyBlue};
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
    background: ${a.colors.white};
    border: solid 1px ${a.colors.blue};

    margin-top: -3px;
  }
`,tt=s.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`,nt=s.span`
  transform: translateX(-50%);
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${a.colors.blue};

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    color: ${a.colors.paleBlue};
  }
`,rt=s.span`
  transform: translateX(50%);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${a.colors.blue};

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${a.colors.paleBlue};
  }
`,ot=s.span`
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
  color: ${a.colors.blue};
  left: ${e=>e.left};

  transition: all 0.5s ease-out;

  &::before {
    content: '|';
    justify-content: center;
    align-items: center;
    color: ${a.colors.paleBlue};
    font-size: 12px;
  }
`,at=s.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 6px 76px 6px 76px;
  background-color: ${a.colors.blue};
  color: ${a.colors.white};
  border: none;
  /* box-shadow: ${a.boxShadowBtn};  */
  box-shadow: ${a.boxShadowBtn.hoverBtn};
  width: 256px;
  margin-left: 14px;

  svg {
    width: 24px;
    height: 24px;
    fill: ${a.colors.blue};
    stroke: ${a.colors.white};
  }

  &:hover {
    box-shadow: ${a.boxShadowBtn.hoverBtn};
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    max-width: 336px;
    height: 43px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    width: 178px;
    height: 44px;
    padding: 10px 30px 10px 30px;
  }
`,it=s.div`
  --r1: 154%;
  --r2: 68.5%;
  width: 60px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid ${a.colors.blue};
  background: radial-gradient(
      var(--r1) var(--r2) at top,
      ${a.colors.paleBlue} 79.5%,
      ${a.colors.skyBlue} 80%
    ),
    radial-gradient(
      var(--r1) var(--r2) at bottom,
      ${a.colors.skyBlue} 79.5%,
      ${a.colors.paleBlue} 80%
    ),
    radial-gradient(
      var(--r1) var(--r2) at top,
      ${a.colors.paleBlue} 79.5%,
      ${a.colors.skyBlue} 80%
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
`,st=()=>o.jsx(it,{});function v(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}function W(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}const de=6048e5,ct=864e5;let dt={};function z(){return dt}function _(e,n){var h,u,x,b;const t=z(),r=(n==null?void 0:n.weekStartsOn)??((u=(h=n==null?void 0:n.locale)==null?void 0:h.options)==null?void 0:u.weekStartsOn)??t.weekStartsOn??((b=(x=t.locale)==null?void 0:x.options)==null?void 0:b.weekStartsOn)??0,i=v(e),c=i.getDay(),d=(c<r?7:0)+c-r;return i.setDate(i.getDate()-d),i.setHours(0,0,0,0),i}function Y(e){return _(e,{weekStartsOn:1})}function le(e){const n=v(e),t=n.getFullYear(),r=W(e,0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const i=Y(r),c=W(e,0);c.setFullYear(t,0,4),c.setHours(0,0,0,0);const d=Y(c);return n.getTime()>=i.getTime()?t+1:n.getTime()>=d.getTime()?t:t-1}function V(e){const n=v(e);return n.setHours(0,0,0,0),n}function J(e){const n=v(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function lt(e,n){const t=V(e),r=V(n),i=+t-J(t),c=+r-J(r);return Math.round((i-c)/ct)}function ut(e){const n=le(e),t=W(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),Y(t)}function ht(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function mt(e){if(!ht(e)&&typeof e!="number")return!1;const n=v(e);return!isNaN(Number(n))}function pt(e){const n=v(e),t=W(e,0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}const xt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ft=(e,n,t)=>{let r;const i=xt[e];return typeof i=="string"?r=i:n===1?r=i.one:r=i.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function H(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const gt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},bt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},wt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},yt={date:H({formats:gt,defaultWidth:"full"}),time:H({formats:bt,defaultWidth:"full"}),dateTime:H({formats:wt,defaultWidth:"full"})},kt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},vt=(e,n,t,r)=>kt[e];function C(e){return(n,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let i;if(r==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,h=t!=null&&t.width?String(t.width):d;i=e.formattingValues[h]||e.formattingValues[d]}else{const d=e.defaultWidth,h=t!=null&&t.width?String(t.width):e.defaultWidth;i=e.values[h]||e.values[d]}const c=e.argumentCallback?e.argumentCallback(n):n;return i[c]}}const jt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},$t={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Mt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Dt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Pt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Wt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},St=(e,n)=>{const t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Ot={ordinalNumber:St,era:C({values:jt,defaultWidth:"wide"}),quarter:C({values:$t,defaultWidth:"wide",argumentCallback:e=>e-1}),month:C({values:Mt,defaultWidth:"wide"}),day:C({values:Dt,defaultWidth:"wide"}),dayPeriod:C({values:Pt,defaultWidth:"wide",formattingValues:Wt,defaultFormattingWidth:"wide"})};function F(e){return(n,t={})=>{const r=t.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],c=n.match(i);if(!c)return null;const d=c[0],h=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(h)?Bt(h,k=>k.test(d)):Tt(h,k=>k.test(d));let x;x=e.valueCallback?e.valueCallback(u):u,x=t.valueCallback?t.valueCallback(x):x;const b=n.slice(d.length);return{value:x,rest:b}}}function Tt(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function Bt(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function Ct(e){return(n,t={})=>{const r=n.match(e.matchPattern);if(!r)return null;const i=r[0],c=n.match(e.parsePattern);if(!c)return null;let d=e.valueCallback?e.valueCallback(c[0]):c[0];d=t.valueCallback?t.valueCallback(d):d;const h=n.slice(i.length);return{value:d,rest:h}}}const Ft=/^(\d+)(th|st|nd|rd)?/i,_t=/\d+/i,Yt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},zt={any:[/^b/i,/^(a|c)/i]},Et={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Nt={any:[/1/i,/2/i,/3/i,/4/i]},Lt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ht={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},At={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},qt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Rt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Xt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},It={ordinalNumber:Ct({matchPattern:Ft,parsePattern:_t,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:Yt,defaultMatchWidth:"wide",parsePatterns:zt,defaultParseWidth:"any"}),quarter:F({matchPatterns:Et,defaultMatchWidth:"wide",parsePatterns:Nt,defaultParseWidth:"any",valueCallback:e=>e+1}),month:F({matchPatterns:Lt,defaultMatchWidth:"wide",parsePatterns:Ht,defaultParseWidth:"any"}),day:F({matchPatterns:At,defaultMatchWidth:"wide",parsePatterns:qt,defaultParseWidth:"any"}),dayPeriod:F({matchPatterns:Rt,defaultMatchWidth:"any",parsePatterns:Xt,defaultParseWidth:"any"})},Qt={code:"en-US",formatDistance:ft,formatLong:yt,formatRelative:vt,localize:Ot,match:It,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Gt(e){const n=v(e);return lt(n,pt(n))+1}function Vt(e){const n=v(e),t=+Y(n)-+ut(n);return Math.round(t/de)+1}function ue(e,n){var b,k,j,$;const t=v(e),r=t.getFullYear(),i=z(),c=(n==null?void 0:n.firstWeekContainsDate)??((k=(b=n==null?void 0:n.locale)==null?void 0:b.options)==null?void 0:k.firstWeekContainsDate)??i.firstWeekContainsDate??(($=(j=i.locale)==null?void 0:j.options)==null?void 0:$.firstWeekContainsDate)??1,d=W(e,0);d.setFullYear(r+1,0,c),d.setHours(0,0,0,0);const h=_(d,n),u=W(e,0);u.setFullYear(r,0,c),u.setHours(0,0,0,0);const x=_(u,n);return t.getTime()>=h.getTime()?r+1:t.getTime()>=x.getTime()?r:r-1}function Jt(e,n){var h,u,x,b;const t=z(),r=(n==null?void 0:n.firstWeekContainsDate)??((u=(h=n==null?void 0:n.locale)==null?void 0:h.options)==null?void 0:u.firstWeekContainsDate)??t.firstWeekContainsDate??((b=(x=t.locale)==null?void 0:x.options)==null?void 0:b.firstWeekContainsDate)??1,i=ue(e,n),c=W(e,0);return c.setFullYear(i,0,r),c.setHours(0,0,0,0),_(c,n)}function Ut(e,n){const t=v(e),r=+_(t,n)-+Jt(t,n);return Math.round(r/de)+1}function m(e,n){const t=e<0?"-":"",r=Math.abs(e).toString().padStart(n,"0");return t+r}const D={y(e,n){const t=e.getFullYear(),r=t>0?t:1-t;return m(n==="yy"?r%100:r,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):m(t+1,2)},d(e,n){return m(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return m(e.getHours()%12||12,n.length)},H(e,n){return m(e.getHours(),n.length)},m(e,n){return m(e.getMinutes(),n.length)},s(e,n){return m(e.getSeconds(),n.length)},S(e,n){const t=n.length,r=e.getMilliseconds(),i=Math.trunc(r*Math.pow(10,t-3));return m(i,n.length)}},O={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},U={G:function(e,n,t){const r=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const r=e.getFullYear(),i=r>0?r:1-r;return t.ordinalNumber(i,{unit:"year"})}return D.y(e,n)},Y:function(e,n,t,r){const i=ue(e,r),c=i>0?i:1-i;if(n==="YY"){const d=c%100;return m(d,2)}return n==="Yo"?t.ordinalNumber(c,{unit:"year"}):m(c,n.length)},R:function(e,n){const t=le(e);return m(t,n.length)},u:function(e,n){const t=e.getFullYear();return m(t,n.length)},Q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return m(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return m(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,n,t){const r=e.getMonth();switch(n){case"M":case"MM":return D.M(e,n);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(e,n,t){const r=e.getMonth();switch(n){case"L":return String(r+1);case"LL":return m(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,t,r){const i=Ut(e,r);return n==="wo"?t.ordinalNumber(i,{unit:"week"}):m(i,n.length)},I:function(e,n,t){const r=Vt(e);return n==="Io"?t.ordinalNumber(r,{unit:"week"}):m(r,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):D.d(e,n)},D:function(e,n,t){const r=Gt(e);return n==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):m(r,n.length)},E:function(e,n,t){const r=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(e,n,t,r){const i=e.getDay(),c=(i-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(c);case"ee":return m(c,2);case"eo":return t.ordinalNumber(c,{unit:"day"});case"eee":return t.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(i,{width:"short",context:"formatting"});case"eeee":default:return t.day(i,{width:"wide",context:"formatting"})}},c:function(e,n,t,r){const i=e.getDay(),c=(i-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(c);case"cc":return m(c,n.length);case"co":return t.ordinalNumber(c,{unit:"day"});case"ccc":return t.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(i,{width:"narrow",context:"standalone"});case"cccccc":return t.day(i,{width:"short",context:"standalone"});case"cccc":default:return t.day(i,{width:"wide",context:"standalone"})}},i:function(e,n,t){const r=e.getDay(),i=r===0?7:r;switch(n){case"i":return String(i);case"ii":return m(i,n.length);case"io":return t.ordinalNumber(i,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(e,n,t){const i=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,n,t){const r=e.getHours();let i;switch(r===12?i=O.noon:r===0?i=O.midnight:i=r/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,n,t){const r=e.getHours();let i;switch(r>=17?i=O.evening:r>=12?i=O.afternoon:r>=4?i=O.morning:i=O.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let r=e.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return D.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):D.H(e,n)},K:function(e,n,t){const r=e.getHours()%12;return n==="Ko"?t.ordinalNumber(r,{unit:"hour"}):m(r,n.length)},k:function(e,n,t){let r=e.getHours();return r===0&&(r=24),n==="ko"?t.ordinalNumber(r,{unit:"hour"}):m(r,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):D.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):D.s(e,n)},S:function(e,n){return D.S(e,n)},X:function(e,n,t){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(n){case"X":return Z(r);case"XXXX":case"XX":return P(r);case"XXXXX":case"XXX":default:return P(r,":")}},x:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"x":return Z(r);case"xxxx":case"xx":return P(r);case"xxxxx":case"xxx":default:return P(r,":")}},O:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+K(r,":");case"OOOO":default:return"GMT"+P(r,":")}},z:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+K(r,":");case"zzzz":default:return"GMT"+P(r,":")}},t:function(e,n,t){const r=Math.trunc(e.getTime()/1e3);return m(r,n.length)},T:function(e,n,t){const r=e.getTime();return m(r,n.length)}};function K(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),i=Math.trunc(r/60),c=r%60;return c===0?t+String(i):t+String(i)+n+m(c,2)}function Z(e,n){return e%60===0?(e>0?"-":"+")+m(Math.abs(e)/60,2):P(e,n)}function P(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),i=m(Math.trunc(r/60),2),c=m(r%60,2);return t+i+n+c}const ee=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},he=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},Kt=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],r=t[1],i=t[2];if(!i)return ee(e,n);let c;switch(r){case"P":c=n.dateTime({width:"short"});break;case"PP":c=n.dateTime({width:"medium"});break;case"PPP":c=n.dateTime({width:"long"});break;case"PPPP":default:c=n.dateTime({width:"full"});break}return c.replace("{{date}}",ee(r,n)).replace("{{time}}",he(i,n))},Zt={p:he,P:Kt},en=/^D+$/,tn=/^Y+$/,nn=["D","DD","YY","YYYY"];function rn(e){return en.test(e)}function on(e){return tn.test(e)}function an(e,n,t){const r=sn(e,n,t);if(console.warn(r),nn.includes(e))throw new RangeError(r)}function sn(e,n,t){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const cn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,dn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ln=/^'([^]*?)'?$/,un=/''/g,hn=/[a-zA-Z]/;function q(e,n,t){var b,k,j,$,S,f,l,y;const r=z(),i=(t==null?void 0:t.locale)??r.locale??Qt,c=(t==null?void 0:t.firstWeekContainsDate)??((k=(b=t==null?void 0:t.locale)==null?void 0:b.options)==null?void 0:k.firstWeekContainsDate)??r.firstWeekContainsDate??(($=(j=r.locale)==null?void 0:j.options)==null?void 0:$.firstWeekContainsDate)??1,d=(t==null?void 0:t.weekStartsOn)??((f=(S=t==null?void 0:t.locale)==null?void 0:S.options)==null?void 0:f.weekStartsOn)??r.weekStartsOn??((y=(l=r.locale)==null?void 0:l.options)==null?void 0:y.weekStartsOn)??0,h=v(e);if(!mt(h))throw new RangeError("Invalid time value");let u=n.match(dn).map(p=>{const g=p[0];if(g==="p"||g==="P"){const B=Zt[g];return B(p,i.formatLong)}return p}).join("").match(cn).map(p=>{if(p==="''")return{isToken:!1,value:"'"};const g=p[0];if(g==="'")return{isToken:!1,value:mn(p)};if(U[g])return{isToken:!0,value:p};if(g.match(hn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+g+"`");return{isToken:!1,value:p}});i.localize.preprocessor&&(u=i.localize.preprocessor(h,u));const x={firstWeekContainsDate:c,weekStartsOn:d,locale:i};return u.map(p=>{if(!p.isToken)return p.value;const g=p.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&on(g)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&rn(g))&&an(g,n,String(e));const B=U[g[0]];return B(h,g,i.localize,x)}).join("")}function mn(e){const n=e.match(ln);return n?n[1].replace(un,"'"):e}const pn=e=>e.root.isLoading,xn=s.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 16px;
    color: ${a.colors.black};
    font-size: 18px;
    font-weight: 700;
    line-height: 1.1;
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    min-width: 704px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 32px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    min-width: 592px;
  }
`,te=s.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${a.colors.black};
  margin-bottom: 12px;
`,fn=s.div`
  margin-bottom: 24px;

  div {
    display: flex;
    align-items: center;
  }
`,gn=s.h2`
 margin-bottom: 24px;
    color: ${a.colors.black};
 font-size: 26px;
line-height: 123%;
    font-weight: 500;
   
`,bn=s.h3`
font-weight: 700;
font-size: 18px;
line-height: 111%;
 margin-bottom: 16px;
   
`,wn=s.p`
  color: ${a.colors.blue};
  align-items: center;
  justify-content: center;
  display: flex;
 font-weight: 700;
font-size: 18px;
line-height: 133%;
  width: 92px;
  height: 36px;
  margin: 0 auto;
`,yn=s.div`
  background: ${a.colors.paleBlue};
  border-radius: 40px;
padding: 6px 10px;
width: 92px;
height: 36px;
  margin-left: 10px;
  margin-right: 10px;
`,ne=s.button`
  background-color: ${a.colors.white};
  color: ${a.colors.blue};
  border-radius: 30px;
  border: 1px solid ${a.colors.skyBlue};
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 4px;


  &:hover {
    box-shadow: ${a.boxShadowBtn.hoverBtn};
  }
`,re=s.svg`
  width: 24px;
  height: 24px;
  stroke: ${a.colors.blue};
  fill: ${a.colors.blue};
`,kn=s.div`
  margin-bottom: 24px;
`,vn=s.input`
  color: ${a.colors.blue};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 95%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${a.colors.paleBlue};
  background-color: ${a.colors.white};

  &::placeholder {
    color: ${a.colors.skyBlue};
  }

  &:hover {
    color: ${a.colors.blue};
    border: 1px solid ${a.colors.blue};
  }

  &:focus {
    outline: none;
    border: 1px solid ${a.colors.blue};
  }

  &:not(:placeholder-shown) {
    color: ${a.colors.blue};
  }
   @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 97%;
  }
`,jn=s.input`
  color: ${a.colors.blue};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 95%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${a.colors.paleBlue};
  background-color: ${a.colors.white};

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${a.colors.skyBlue};
  }

  &:hover {
    color: ${a.colors.blue};
    border: 1px solid ${a.colors.blue};
  }

  &:focus {
    outline: none;
    border: 1px solid ${a.colors.blue};
  }

  &:not(:placeholder-shown) {
    color: ${a.colors.blue};
  }
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 97%;
  }

`,$n=s.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  span {
    color: ${a.colors.blue};
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 24px;
    margin-top: 24px;
  }
`,Mn=s.button`
  box-sizing: border-box;
  display: inline-block;
  width: 280px;
  gap: 10px;
  padding: 8px 30px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  background-color: ${a.colors.blue};
  box-shadow: ${a.boxShadowBtn.Btn};
  color: ${a.colors.white};
  cursor: pointer;

  &:hover {
    box-shadow: ${a.boxShadowBtn.hoverBtn};
  }

  &:active {
    box-shadow: ${a.boxShadowBtn.activeBtn};
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
padding: 10px 30px;
width: 160px;
height: 44px;

  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
padding: 10px 30px;
width: 160px;
height: 44px;
  }
`,Dn=s.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`,Pn=({onClose:e,initialTime:n})=>{const[r,i]=w.useState(0),[c,d]=w.useState("");w.useEffect(()=>{let f;if(n){const l=new Date(n),y=Math.round(l.getMinutes()/5)*5;l.setMinutes(y),f=q(l,"HH:mm")}else{const l=new Date,y=Math.round(l.getMinutes()/5)*5;l.setMinutes(y),f=q(l,"HH:mm")}d(f)},[n]);const h=R(),{isLoading:u}=T(pn),[x,b]=w.useState(""),k=f=>{let l=f.target.value;if(l>5e3){b("The value cannot exceed 5000ml");return}else b("");l.startsWith("0")&&l.length>1&&(l=parseFloat(l.substring(1))),i(l.toString())},j=()=>{h(we({waterVolume:r,date:c})).then(l=>{l.error||(e(),i(0))})},$=()=>{i(f=>Math.max(f-50,0))},S=()=>{const f=r+50,l=5e3;i(f<=l?f:l)};return o.jsx(o.Fragment,{children:o.jsxs(xn,{onClose:e,children:[o.jsxs(fn,{children:[o.jsx(gn,{children:"Add Water"}),o.jsx(bn,{children:"Choose a value:"}),o.jsx(te,{children:"Amount of water:"}),o.jsxs("div",{children:[o.jsx(ne,{onClick:$,children:o.jsx(re,{children:o.jsx("use",{href:`${M}#icon-minus`})})}),o.jsx(yn,{children:o.jsxs(wn,{children:[r," ml"]})}),o.jsx(ne,{onClick:S,children:o.jsx(re,{children:o.jsx("use",{href:`${M}#icon-plus`})})})]})]}),o.jsxs(kn,{children:[o.jsx(te,{children:"Recording time:"}),o.jsx(vn,{type:"time",value:c,onChange:f=>d(f.target.value),step:300})]}),o.jsxs("div",{children:[o.jsx("h3",{children:"Enter the value of the water used:"}),o.jsx(jn,{type:"number",value:r,onChange:k,onBlur:()=>i(f=>f||0||0),max:5e3}),x&&o.jsx(Dn,{children:x})]}),o.jsxs($n,{children:[o.jsxs("span",{children:[r,"ml"]}),o.jsxs(Mn,{onClick:j,children:["Save ",u&&o.jsx(st,{})]})]})]})})},Wn=()=>{const[e,n]=w.useState(!1),t=T(Ce),r=()=>{n(!e)},i=t.percent;return o.jsxs(Ve,{children:[o.jsxs(Ue,{children:[o.jsx(Je,{children:"Today"}),o.jsxs(Ke,{children:[o.jsx(Ze,{children:o.jsx(et,{style:{width:`${Math.min(i,100)}%`}})}),o.jsxs(tt,{children:[o.jsx(nt,{children:"0%"}),i<100&&i>0&&o.jsxs(ot,{left:`${i}%`,children:[i,"%"]}),o.jsx(rt,{children:"100%"})]})]})]}),o.jsxs(at,{onClick:r,children:[o.jsx("svg",{children:o.jsx("use",{href:`${M}#icon-outline`})}),"Add water"]}),e&&o.jsx(X,{onClose:r,children:o.jsx(Pn,{})})]})},Sn=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`,On=s.div`
  height: 212px;
  overflow: auto;
  margin-bottom: 12px;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${a.colors.paleBlue};
    width: 2px;
    margin: 0 auto;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    width: 6px;
    height: 100px;
    border-radius: 3px;
    background-color: ${a.colors.skyBlue};
  }
`,Tn=s.div`
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
    background-color: ${a.colors.paleBlue};
  }
`,Bn=s.h3`
  font-size: 24px;
  font-weight: 500;
  /* font-family: 'Roboto'; */
  color: ${a.colors.black};
  text-align: left;
  line-height: 1.25;
  margin-bottom: 15px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 1.23;
  }
`,Cn=s.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  h4 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    color: ${a.colors.blue};
  }
  p {
    font-size: 12px;
    line-height: 24px;
    font-weight: 400;
    color: ${a.colors.black};
    span {
      text-transform: uppercase;
    }
    svg {
      width: 26px;
      height: 26px;
    }
  }
`,Fn=s.svg`
  width: 26px;
  height: 26px;
  fill: transparent;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,_n=s.div`
  display: flex;
  gap: 18px;
  margin-right: 10px;
`,Yn=s.svg`
  width: 16px;
  height: 16px;
  stroke: ${a.colors.skyBlue};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.skyBlue};
  }
`,zn=s.svg`
  width: 16px;
  height: 16px;
  stroke: ${a.colors.brightRed};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.brightRed};
  }
`,En=s.button`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: transparent;
  color: ${a.colors.blue};
  border: none;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  stroke: ${a.colors.blue};
  max-width: 125px;

  & svg {
    width: 16px;
    height: 16px;
    fill: ${a.colors.blue};
    stroke: transparent;
    padding-bottom: 2px;
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    font-size: 18px;
    line-height: 1.33;

    & svg {
      width: 24px;
      height: 24px;
    }

    &:hover {
      color: ${a.colors.orange};
      & svg {
        fill: ${a.colors.orange};
      }
    }
  }
`,Nn=()=>{const e=Date.now(),t=new Date(e).toLocaleDateString(),[r,i]=w.useState(!1),c=R(),d=T(se);w.useEffect(()=>{c(ae({date:t}))},[c,t]);const h=()=>{i(!r)};return o.jsxs(o.Fragment,{children:[o.jsxs(Sn,{children:[o.jsx(Bn,{children:"Today"}),o.jsx(On,{children:d.map(u=>o.jsxs(Tn,{children:[o.jsxs(Cn,{children:[o.jsx(Fn,{children:o.jsx("use",{href:`${M}#icon-glass`})}),o.jsxs("h4",{children:[u.amount," ml"]}),o.jsxs("p",{children:[u.time,o.jsx("span",{children:" AM"})]})]}),o.jsxs(_n,{children:[o.jsx(Yn,{children:o.jsx("use",{href:`${M}#icon-note`})}),o.jsx(zn,{children:o.jsx("use",{href:`${M}#icon-trash`})})]})]},u._id))}),o.jsxs(En,{onClick:h,children:[o.jsx("svg",{children:o.jsx("use",{href:`${M}#icon-increment`})}),"Add water"]})]}),r&&o.jsxs(X,{onClose:h,children:[o.jsx(ye,{})," "]})]})};const Ln=s.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    color: ${a.colors.black};
    margin-bottom: 6px;
  }
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    h3 {
      font-size: 26px;
      line-height: 32px;
    }
  }
`,Hn=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,An=s.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    color: ${a.colors.blue};
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    padding-left: 6px;
    padding-right: 6px;
    width: 126px;
    text-align: center;
  }
`,oe=s.svg`
  width: 6px;
  height: 10px;
  background: transparent;
  fill: ${a.colors.blue};

  &:hover {
    fill: ${a.colors.orange};
  }
`,qn=s.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 50px);
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  height: 446px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 50px);
    gap: 20px;
    height: 268px;
  }
`,Rn=s.button`
  padding: 7px 6px;
  width: 35px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: ${a.colors.black};

  background-color: ${a.colors.white};
  border: 1px solid ${a.colors.white};

  &.today {
    border: 1px solid ${a.colors.blue};
    color: ${a.colors.blue};
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    font-size: 16px;
    padding: 7px;
  }

  &:hover {
    box-shadow: 0px 4px 8px ${a.colors.skyBlue};
    border: 1px solid ${a.colors.orange};
  }
`,Xn=s.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  text-align: center;
  padding-left: 10px;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.6;
  color: ${a.colors.skyBlue};

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    font-size: 12px;
  }
`,In=s.div`
  top: ${e=>e.top}px;
  left: ${e=>e.left}px;

  transform: translateY(-105%);
  margin-left: -280px;
  position: absolute;
  z-index: 30;
  background-color: ${a.colors.white};
  border-radius: 10px;
  max-width: 280px;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);
  border-radius: 10px;
  padding: 24px 16px;

  p {
    font-size: 14px;
    color: ${a.colors.black};
    font-weight: 400;
    padding-bottom: 3px;
    @media screen and (min-width: ${a.breakpoint.tablet}) {
      font-size: 16px;
    }
  }
  span {
    font-size: 14px;
    font-weight: 500;
    color: ${a.colors.blue};
    @media screen and (min-width: ${a.breakpoint.tablet}) {
      font-size: 16px;
    }
  }
  button {
    margin-top: 10px;
  }
`,Qn=()=>{const e={date:"04.04.2024",daily_limit:2e3,water_entries:[{time:"9:41",amount:250,date:"02.04.2024"},{time:"19:58",amount:250,date:"02.04.2024"}],owner:"660ab1bf135b46797793af4f",count:5,percent:80},t=(e.daily_limit/1e3).toFixed(1)+" L",[r,i]=w.useState(new Date),[c,d]=w.useState(null),[h,u]=w.useState({x:0,y:0}),x=w.useRef(null),b=l=>{i(y=>{const p=new Date(y);return p.setMonth(p.getMonth()+l),p})},k=()=>{const y=new Date(r.getFullYear(),r.getMonth()+1,0).getDate(),p=[];for(let g=1;g<=y;g++)p.push(g);return p},j=()=>new Intl.DateTimeFormat("en",{month:"long"}).format(r),$=()=>r.getFullYear(),S=(l,y)=>{const p=new Date(r.getFullYear(),r.getMonth(),l);p<=new Date?(d(p),u({x:y.clientX,y:y.clientY})):alert("This date has not yet arrived. Please select a previous day.")},f=l=>{x.current&&!x.current.contains(l.target)&&d(null)};return w.useEffect(()=>(document.addEventListener("mousedown",f),()=>{document.removeEventListener("mousedown",f)}),[]),o.jsxs("div",{children:[o.jsxs(Ln,{children:[o.jsxs(Hn,{children:[o.jsx("h3",{children:"Month"}),o.jsxs(An,{children:[o.jsx(oe,{onClick:()=>b(-1),children:o.jsx("use",{href:`${M}#icon-left`})}),o.jsxs("span",{children:[j(),", ",$()]}),o.jsx(oe,{onClick:()=>b(1),children:o.jsx("use",{href:`${M}#icon-right`})})]})]}),o.jsx(qn,{children:k().map(l=>{const y=new Date,p=new Date(r.getFullYear(),r.getMonth(),l),g=y.toDateString()===p.toDateString();return o.jsxs("div",{children:[o.jsx(Rn,{onClick:B=>S(l,B),className:g?"today":"",children:l}),o.jsxs(Xn,{children:[e.percent,"%"]})]},l)})})]}),c&&o.jsxs(In,{ref:x,style:{top:h.y,left:h.x},children:[o.jsx("p",{children:o.jsx("span",{children:q(c,"d, MMMM")})}),o.jsxs("p",{children:["Daily norma: ",o.jsx("span",{children:t})]}),o.jsxs("p",{children:["Fulfillment of the daily norm: ",o.jsxs("span",{children:[e.percent,"%"]})]}),o.jsxs("p",{children:["How many servings of water: ",o.jsx("span",{children:e.count})]})]})]})},Gn=s.div`
  display: flex;
  flex-direction: column;
  padding-top: 22px;
  margin: 0 auto;
  max-width: 704px;
  padding-bottom: 22px;

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    flex-direction: row;
    gap: 32px;
    max-width: 1176px;
  }
`,Vn=s.div`
  display: flex;
  flex-direction: column;
  background-color: ${a.colors.lightBlue};
  padding: 20px 24px;
  border-radius: 10px;
  max-width: 704px;
  box-shadow: ${a.boxShadowBtn.Btn};
  gap: 24px;

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    width: 590px;
  }
`,Jn=s.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    max-width: 50%;
  }
`,Un=s.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    padding-left: 132px;
    padding-right: 132px;
  }
`,Zn=()=>o.jsx(o.Fragment,{children:o.jsx(Un,{children:o.jsxs(Gn,{children:[o.jsxs(Jn,{children:[o.jsx(Ge,{}),o.jsx(Wn,{})]}),o.jsxs(Vn,{children:[o.jsx(Nn,{}),o.jsx(Qn,{})]})]})})});export{Zn as default};
