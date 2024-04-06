import{n as s,t as a,r as g,R as We,j as r,s as $,c as Se,a as V,d as B,g as ge,e as Oe,f as Be,p as Te,h as Fe,u as fe}from"./index-5bbd26d2.js";import{F as T,a as be,b as we}from"./formik.esm-c378e745.js";const Ce="/runners_of_code__frontend/assets/bottle_home_mobile@1x-0d6054eb.png",Ye="/runners_of_code__frontend/assets/bottle_home_mobile@2x-52eb5066.png",_e="/runners_of_code__frontend/assets/bottle_home_tablet@1x-c4bedac4.png",ze="/runners_of_code__frontend/assets/bottle_home_tablet@2x-867eb443.png",Ee="/runners_of_code__frontend/assets/bottle_home_desk-f67b46be.png",Le="/runners_of_code__frontend/assets/bottle_home_deskx2-acd9b153.png",Ne=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;
`,Re=s.div`
  background-position: center;
  background-image: -webkit-image-set(
    url(${Ce}) 1x,
    url(${Ye}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;
  z-index: -1;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${_e}) 1x,
      url(${ze}) 2x
    );
    height: 386px;
    margin-top: -114px;
    background-position: center top;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Ee}) 1x,
      url(${Le}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,Ae=s.h3`
  font-size: 18px;
  line-height: 1.33;
  font-family: 'Roboto-Bold', sans-serif;
  margin-bottom: 12px;
  color: ${a.colors.black};
`,He=s.div`
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
`,qe=s.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`,Ie=s.button`
  padding: 0;
  background-color: ${a.colors.white};
  color: ${a.colors.blue};
  border: none;
  font-size: 16px;
  &:hover {
    color: ${a.colors.orange};
  }
`,Xe=s.div`
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
`,Ge=s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`,Qe=s.div`
  position: relative;
  padding: 24px 12px;
  /* width: 450px; */
  height: auto;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: ${a.colors.white};
  backdrop-filter: blur(5px);
  transform: translateY(-50px);
  transition:
    opacity 0.3s,
    transform 0.3s;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    padding: 32px 24px;
  }
`,Ve=s.button`
  position: absolute;
  top: 42px;
  right: 30px;
  color: ${a.colors.blue};
  display: block;
  border: none;
  background-color: transparent;
  padding: 0px;
  cursor: pointer;
  & svg {
    stroke: ${a.colors.blue};
    width: 16px;
    height: 16px;

    padding-bottom: 2px;
    &:hover {
      stroke: ${a.colors.orange};
    }
  }
`,U=({onClose:e,children:n})=>{const t=document.getElementById("modal-root"),o=g.useRef(),i=c=>{c.target===o.current&&e(),document.body.style.overflow="",document.body.style.position="",c.stopPropagation()},d=c=>{c.key==="Escape"&&(document.body.style.overflow="",document.body.style.position="",e())};return g.useEffect(()=>{const c=u=>d(u);return document.addEventListener("keydown",c),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",c)}},[]),We.createPortal(r.jsx(Xe,{onClick:i,ref:o,children:r.jsx(Ge,{children:r.jsxs(Qe,{children:[r.jsx(Ve,{onClick:e,children:r.jsx("svg",{children:r.jsx("use",{href:`${$}#closeModal`})})}),n]})})}),t)},ye=e=>e.waters.dailyNorm,ke=e=>e.waters.reps,ve=e=>e.filter,Ue=e=>e.waters;Se([ye,ve],(e,n)=>e.filter(t=>t.name.toLowerCase().includes(n.toLowerCase())));const Je=()=>{const e=V(),n=B(ye),t=B(ke),o=B(ve),i=g.useCallback(l=>e(ge(l)),[e]),d=g.useCallback(l=>e(Oe(l)),[e]),c=g.useCallback(l=>e(Be(l)),[e]),u=g.useCallback(l=>e(Te(l)),[e]);return{dailyNorm:n,reps:t,filter:o,getWaters:i,addDailyNorma:d,deleteReps:c,patchWater:u}},Ke=s.h2`
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 24px;
`,Ze=s.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  line-height: 1.2;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    flex-direction: row;
    gap: 24px;
  }
`,K=s.p`
  font-size: 16px;
`,Z=s.span`
  font-size: 18px;
  color: ${a.colors.blue};
`,et=s.div`
  border: 1px solid ${a.colors.paleBlue};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  margin-bottom: 24px;
  width: auto;
`,tt=s.p`
  color: ${a.colors.secondText};
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`,nt=s.span`
  color: ${a.colors.blue};
`,ot=s.div`
  margin-bottom: 24px;
`,rt=s.h3`
  margin-bottom: 16px;
  margin-top: 0;
`,at=s.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
`,ee=s.div`
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
`,N=s.label``,it=s.div`
  font-size: 18px;
  padding-bottom: 26px;
  span {
    padding-left: 5px;
    color: ${a.colors.blue};
    font-weight: bold;
  }
`,R=s.label`
  display: block;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 8px;
  color: ${a.colors.black};
`,A=s(T)`
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
`,st=s.button`
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
`,dt=s.div`
  width: 280px;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    min-width: 704px;
  }

  @media (min-width: ${a.breakpoint.desktop}) {
    min-width: 592px;
  }
`,ct={gender:"man",weight:"",activityHours:""};function lt(){const{addDailyNorma:e}=Je(),n=t=>{const{gender:o,weight:i,activityHours:d}=t;if(o&&i&&d){if(o==="man")return parseFloat(i)*.04+parseFloat(d)*.6;if(o==="woman")return parseFloat(i)*.03+parseFloat(d)*.4}return null};return r.jsxs(dt,{children:[r.jsx(Ke,{children:"My daily norma"}),r.jsx(be,{initialValues:ct,onSubmit:(t,{setSubmitting:o})=>{const i=n(t);e({waterIntake:i}),console.log("Form data:",{...t,waterIntake:i}),o(!1)},children:({isSubmitting:t,errors:o,touched:i,values:d,setFieldValue:c})=>r.jsxs(we,{children:[r.jsxs(Ze,{children:[r.jsxs(K,{children:["For girl:"," ",r.jsx(Z,{children:"V=(M*0,03) + (T*0,4)"})]}),r.jsxs(K,{children:["For man:"," ",r.jsx(Z,{children:"V=(M*0,04) + (T*0,6)"})]})]}),r.jsx(et,{children:r.jsxs(tt,{children:[r.jsx(nt,{children:"* "}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),r.jsxs(ot,{children:[r.jsx(rt,{children:"Calculate your rate:"}),r.jsxs(at,{children:[r.jsxs("label",{children:[r.jsx(T,{type:"radio",name:"gender",value:"man",onChange:()=>c("gender","man")}),"For man"]}),r.jsxs("label",{children:[r.jsx(T,{type:"radio",name:"gender",value:"woman",onChange:()=>c("gender","woman")}),"For woman"]})]}),o.gender&&i.gender&&r.jsx("div",{children:o.gender})]}),r.jsx(ee,{children:r.jsxs(N,{children:[r.jsx(R,{children:"Your weight in kilograms:"}),r.jsx(A,{type:"number",name:"weight",placeholder:"0"}),o.weight&&i.weight&&r.jsx("div",{children:o.weight})]})}),r.jsxs(ee,{children:[r.jsxs(R,{children:[" ","The time of active participation in sports or other activities with a high physical. load in hours:"]}),r.jsxs(N,{children:[r.jsx(A,{type:"number",name:"activityHours",placeholder:"0"}),o.activityHours&&i.activityHours&&r.jsx("div",{children:o.activityHours})]})]}),r.jsxs(it,{children:["Your recommended water intake per day is:",r.jsxs("span",{children:[n(d)?parseFloat(n(d)).toFixed(2):0,"L"]})]}),r.jsx(R,{children:"Write down how much water you will drink:"}),r.jsx(N,{children:r.jsx(A,{type:"number",name:"Iwilldrunk",placeholder:"0"})}),r.jsx(st,{type:"submit",disabled:t,children:"Save"})]})})]})}const ut=()=>{const[e,n]=g.useState(!1),t=()=>{n(!e)},i=(2e3/1e3).toFixed(1)+" L";return r.jsxs(Ne,{children:[r.jsxs(He,{children:[r.jsx(Ae,{children:"My daily norma"}),r.jsxs(qe,{children:[r.jsx("p",{children:i}),r.jsx(Ie,{type:"button",onClick:t,children:"Edit"})]})]}),r.jsx(Re,{}),e&&r.jsx(U,{onClose:t,children:r.jsx(lt,{})})]})},ht=s.div`
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
`,pt=s.h3`
  font-size: 18px;
  font-weight: 400;
  color: ${a.colors.blue};
  text-align: left;
  line-height: 1;
  width: 100%;
`,xt=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,mt=s.div`
  width: 256px;
  margin: 5px 14px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 325px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    width: 360px;
  }
`,gt=s.div`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${a.colors.paleBlue};
`,ft=s.span`
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
`,bt=s.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`,wt=s.span`
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
`,yt=s.span`
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
`,kt=s.span`
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
`,vt=s.button`
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
`,jt=s.div`
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
`,$t=()=>r.jsx(jt,{});function M(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}function W(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}const je=6048e5,Mt=864e5;let Pt={};function E(){return Pt}function _(e,n){var u,l,p,f;const t=E(),o=(n==null?void 0:n.weekStartsOn)??((l=(u=n==null?void 0:n.locale)==null?void 0:u.options)==null?void 0:l.weekStartsOn)??t.weekStartsOn??((f=(p=t.locale)==null?void 0:p.options)==null?void 0:f.weekStartsOn)??0,i=M(e),d=i.getDay(),c=(d<o?7:0)+d-o;return i.setDate(i.getDate()-c),i.setHours(0,0,0,0),i}function z(e){return _(e,{weekStartsOn:1})}function $e(e){const n=M(e),t=n.getFullYear(),o=W(e,0);o.setFullYear(t+1,0,4),o.setHours(0,0,0,0);const i=z(o),d=W(e,0);d.setFullYear(t,0,4),d.setHours(0,0,0,0);const c=z(d);return n.getTime()>=i.getTime()?t+1:n.getTime()>=c.getTime()?t:t-1}function te(e){const n=M(e);return n.setHours(0,0,0,0),n}function ne(e){const n=M(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function Dt(e,n){const t=te(e),o=te(n),i=+t-ne(t),d=+o-ne(o);return Math.round((i-d)/Mt)}function Wt(e){const n=$e(e),t=W(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),z(t)}function St(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Ot(e){if(!St(e)&&typeof e!="number")return!1;const n=M(e);return!isNaN(Number(n))}function Bt(e){const n=M(e),t=W(e,0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}const Tt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ft=(e,n,t)=>{let o;const i=Tt[e];return typeof i=="string"?o=i:n===1?o=i.one:o=i.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+o:o+" ago":o};function H(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const Ct={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Yt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},_t={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},zt={date:H({formats:Ct,defaultWidth:"full"}),time:H({formats:Yt,defaultWidth:"full"}),dateTime:H({formats:_t,defaultWidth:"full"})},Et={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Lt=(e,n,t,o)=>Et[e];function F(e){return(n,t)=>{const o=t!=null&&t.context?String(t.context):"standalone";let i;if(o==="formatting"&&e.formattingValues){const c=e.defaultFormattingWidth||e.defaultWidth,u=t!=null&&t.width?String(t.width):c;i=e.formattingValues[u]||e.formattingValues[c]}else{const c=e.defaultWidth,u=t!=null&&t.width?String(t.width):e.defaultWidth;i=e.values[u]||e.values[c]}const d=e.argumentCallback?e.argumentCallback(n):n;return i[d]}}const Nt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Rt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},At={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ht={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},qt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},It={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Xt=(e,n)=>{const t=Number(e),o=t%100;if(o>20||o<10)switch(o%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Gt={ordinalNumber:Xt,era:F({values:Nt,defaultWidth:"wide"}),quarter:F({values:Rt,defaultWidth:"wide",argumentCallback:e=>e-1}),month:F({values:At,defaultWidth:"wide"}),day:F({values:Ht,defaultWidth:"wide"}),dayPeriod:F({values:qt,defaultWidth:"wide",formattingValues:It,defaultFormattingWidth:"wide"})};function C(e){return(n,t={})=>{const o=t.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],d=n.match(i);if(!d)return null;const c=d[0],u=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(u)?Vt(u,k=>k.test(c)):Qt(u,k=>k.test(c));let p;p=e.valueCallback?e.valueCallback(l):l,p=t.valueCallback?t.valueCallback(p):p;const f=n.slice(c.length);return{value:p,rest:f}}}function Qt(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function Vt(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function Ut(e){return(n,t={})=>{const o=n.match(e.matchPattern);if(!o)return null;const i=o[0],d=n.match(e.parsePattern);if(!d)return null;let c=e.valueCallback?e.valueCallback(d[0]):d[0];c=t.valueCallback?t.valueCallback(c):c;const u=n.slice(i.length);return{value:c,rest:u}}}const Jt=/^(\d+)(th|st|nd|rd)?/i,Kt=/\d+/i,Zt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},en={any:[/^b/i,/^(a|c)/i]},tn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},nn={any:[/1/i,/2/i,/3/i,/4/i]},on={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},rn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},an={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},sn={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},dn={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},cn={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ln={ordinalNumber:Ut({matchPattern:Jt,parsePattern:Kt,valueCallback:e=>parseInt(e,10)}),era:C({matchPatterns:Zt,defaultMatchWidth:"wide",parsePatterns:en,defaultParseWidth:"any"}),quarter:C({matchPatterns:tn,defaultMatchWidth:"wide",parsePatterns:nn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:C({matchPatterns:on,defaultMatchWidth:"wide",parsePatterns:rn,defaultParseWidth:"any"}),day:C({matchPatterns:an,defaultMatchWidth:"wide",parsePatterns:sn,defaultParseWidth:"any"}),dayPeriod:C({matchPatterns:dn,defaultMatchWidth:"any",parsePatterns:cn,defaultParseWidth:"any"})},un={code:"en-US",formatDistance:Ft,formatLong:zt,formatRelative:Lt,localize:Gt,match:ln,options:{weekStartsOn:0,firstWeekContainsDate:1}};function hn(e){const n=M(e);return Dt(n,Bt(n))+1}function pn(e){const n=M(e),t=+z(n)-+Wt(n);return Math.round(t/je)+1}function Me(e,n){var f,k,b,w;const t=M(e),o=t.getFullYear(),i=E(),d=(n==null?void 0:n.firstWeekContainsDate)??((k=(f=n==null?void 0:n.locale)==null?void 0:f.options)==null?void 0:k.firstWeekContainsDate)??i.firstWeekContainsDate??((w=(b=i.locale)==null?void 0:b.options)==null?void 0:w.firstWeekContainsDate)??1,c=W(e,0);c.setFullYear(o+1,0,d),c.setHours(0,0,0,0);const u=_(c,n),l=W(e,0);l.setFullYear(o,0,d),l.setHours(0,0,0,0);const p=_(l,n);return t.getTime()>=u.getTime()?o+1:t.getTime()>=p.getTime()?o:o-1}function xn(e,n){var u,l,p,f;const t=E(),o=(n==null?void 0:n.firstWeekContainsDate)??((l=(u=n==null?void 0:n.locale)==null?void 0:u.options)==null?void 0:l.firstWeekContainsDate)??t.firstWeekContainsDate??((f=(p=t.locale)==null?void 0:p.options)==null?void 0:f.firstWeekContainsDate)??1,i=Me(e,n),d=W(e,0);return d.setFullYear(i,0,o),d.setHours(0,0,0,0),_(d,n)}function mn(e,n){const t=M(e),o=+_(t,n)-+xn(t,n);return Math.round(o/je)+1}function h(e,n){const t=e<0?"-":"",o=Math.abs(e).toString().padStart(n,"0");return t+o}const P={y(e,n){const t=e.getFullYear(),o=t>0?t:1-t;return h(n==="yy"?o%100:o,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):h(t+1,2)},d(e,n){return h(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return h(e.getHours()%12||12,n.length)},H(e,n){return h(e.getHours(),n.length)},m(e,n){return h(e.getMinutes(),n.length)},s(e,n){return h(e.getSeconds(),n.length)},S(e,n){const t=n.length,o=e.getMilliseconds(),i=Math.trunc(o*Math.pow(10,t-3));return h(i,n.length)}},O={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},oe={G:function(e,n,t){const o=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(o,{width:"abbreviated"});case"GGGGG":return t.era(o,{width:"narrow"});case"GGGG":default:return t.era(o,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const o=e.getFullYear(),i=o>0?o:1-o;return t.ordinalNumber(i,{unit:"year"})}return P.y(e,n)},Y:function(e,n,t,o){const i=Me(e,o),d=i>0?i:1-i;if(n==="YY"){const c=d%100;return h(c,2)}return n==="Yo"?t.ordinalNumber(d,{unit:"year"}):h(d,n.length)},R:function(e,n){const t=$e(e);return h(t,n.length)},u:function(e,n){const t=e.getFullYear();return h(t,n.length)},Q:function(e,n,t){const o=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(o);case"QQ":return h(o,2);case"Qo":return t.ordinalNumber(o,{unit:"quarter"});case"QQQ":return t.quarter(o,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(o,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(o,{width:"wide",context:"formatting"})}},q:function(e,n,t){const o=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(o);case"qq":return h(o,2);case"qo":return t.ordinalNumber(o,{unit:"quarter"});case"qqq":return t.quarter(o,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(o,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(o,{width:"wide",context:"standalone"})}},M:function(e,n,t){const o=e.getMonth();switch(n){case"M":case"MM":return P.M(e,n);case"Mo":return t.ordinalNumber(o+1,{unit:"month"});case"MMM":return t.month(o,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(o,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(o,{width:"wide",context:"formatting"})}},L:function(e,n,t){const o=e.getMonth();switch(n){case"L":return String(o+1);case"LL":return h(o+1,2);case"Lo":return t.ordinalNumber(o+1,{unit:"month"});case"LLL":return t.month(o,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(o,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(o,{width:"wide",context:"standalone"})}},w:function(e,n,t,o){const i=mn(e,o);return n==="wo"?t.ordinalNumber(i,{unit:"week"}):h(i,n.length)},I:function(e,n,t){const o=pn(e);return n==="Io"?t.ordinalNumber(o,{unit:"week"}):h(o,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):P.d(e,n)},D:function(e,n,t){const o=hn(e);return n==="Do"?t.ordinalNumber(o,{unit:"dayOfYear"}):h(o,n.length)},E:function(e,n,t){const o=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(o,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(o,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(o,{width:"short",context:"formatting"});case"EEEE":default:return t.day(o,{width:"wide",context:"formatting"})}},e:function(e,n,t,o){const i=e.getDay(),d=(i-o.weekStartsOn+8)%7||7;switch(n){case"e":return String(d);case"ee":return h(d,2);case"eo":return t.ordinalNumber(d,{unit:"day"});case"eee":return t.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(i,{width:"short",context:"formatting"});case"eeee":default:return t.day(i,{width:"wide",context:"formatting"})}},c:function(e,n,t,o){const i=e.getDay(),d=(i-o.weekStartsOn+8)%7||7;switch(n){case"c":return String(d);case"cc":return h(d,n.length);case"co":return t.ordinalNumber(d,{unit:"day"});case"ccc":return t.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(i,{width:"narrow",context:"standalone"});case"cccccc":return t.day(i,{width:"short",context:"standalone"});case"cccc":default:return t.day(i,{width:"wide",context:"standalone"})}},i:function(e,n,t){const o=e.getDay(),i=o===0?7:o;switch(n){case"i":return String(i);case"ii":return h(i,n.length);case"io":return t.ordinalNumber(i,{unit:"day"});case"iii":return t.day(o,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(o,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(o,{width:"short",context:"formatting"});case"iiii":default:return t.day(o,{width:"wide",context:"formatting"})}},a:function(e,n,t){const i=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,n,t){const o=e.getHours();let i;switch(o===12?i=O.noon:o===0?i=O.midnight:i=o/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,n,t){const o=e.getHours();let i;switch(o>=17?i=O.evening:o>=12?i=O.afternoon:o>=4?i=O.morning:i=O.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let o=e.getHours()%12;return o===0&&(o=12),t.ordinalNumber(o,{unit:"hour"})}return P.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):P.H(e,n)},K:function(e,n,t){const o=e.getHours()%12;return n==="Ko"?t.ordinalNumber(o,{unit:"hour"}):h(o,n.length)},k:function(e,n,t){let o=e.getHours();return o===0&&(o=24),n==="ko"?t.ordinalNumber(o,{unit:"hour"}):h(o,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):P.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):P.s(e,n)},S:function(e,n){return P.S(e,n)},X:function(e,n,t){const o=e.getTimezoneOffset();if(o===0)return"Z";switch(n){case"X":return ae(o);case"XXXX":case"XX":return D(o);case"XXXXX":case"XXX":default:return D(o,":")}},x:function(e,n,t){const o=e.getTimezoneOffset();switch(n){case"x":return ae(o);case"xxxx":case"xx":return D(o);case"xxxxx":case"xxx":default:return D(o,":")}},O:function(e,n,t){const o=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+re(o,":");case"OOOO":default:return"GMT"+D(o,":")}},z:function(e,n,t){const o=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+re(o,":");case"zzzz":default:return"GMT"+D(o,":")}},t:function(e,n,t){const o=Math.trunc(e.getTime()/1e3);return h(o,n.length)},T:function(e,n,t){const o=e.getTime();return h(o,n.length)}};function re(e,n=""){const t=e>0?"-":"+",o=Math.abs(e),i=Math.trunc(o/60),d=o%60;return d===0?t+String(i):t+String(i)+n+h(d,2)}function ae(e,n){return e%60===0?(e>0?"-":"+")+h(Math.abs(e)/60,2):D(e,n)}function D(e,n=""){const t=e>0?"-":"+",o=Math.abs(e),i=h(Math.trunc(o/60),2),d=h(o%60,2);return t+i+n+d}const ie=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},Pe=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},gn=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],o=t[1],i=t[2];if(!i)return ie(e,n);let d;switch(o){case"P":d=n.dateTime({width:"short"});break;case"PP":d=n.dateTime({width:"medium"});break;case"PPP":d=n.dateTime({width:"long"});break;case"PPPP":default:d=n.dateTime({width:"full"});break}return d.replace("{{date}}",ie(o,n)).replace("{{time}}",Pe(i,n))},fn={p:Pe,P:gn},bn=/^D+$/,wn=/^Y+$/,yn=["D","DD","YY","YYYY"];function kn(e){return bn.test(e)}function vn(e){return wn.test(e)}function jn(e,n,t){const o=$n(e,n,t);if(console.warn(o),yn.includes(e))throw new RangeError(o)}function $n(e,n,t){const o=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${o} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Mn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Pn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Dn=/^'([^]*?)'?$/,Wn=/''/g,Sn=/[a-zA-Z]/;function G(e,n,t){var f,k,b,w,j,x,m,S;const o=E(),i=(t==null?void 0:t.locale)??o.locale??un,d=(t==null?void 0:t.firstWeekContainsDate)??((k=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:k.firstWeekContainsDate)??o.firstWeekContainsDate??((w=(b=o.locale)==null?void 0:b.options)==null?void 0:w.firstWeekContainsDate)??1,c=(t==null?void 0:t.weekStartsOn)??((x=(j=t==null?void 0:t.locale)==null?void 0:j.options)==null?void 0:x.weekStartsOn)??o.weekStartsOn??((S=(m=o.locale)==null?void 0:m.options)==null?void 0:S.weekStartsOn)??0,u=M(e);if(!Ot(u))throw new RangeError("Invalid time value");let l=n.match(Pn).map(v=>{const y=v[0];if(y==="p"||y==="P"){const L=fn[y];return L(v,i.formatLong)}return v}).join("").match(Mn).map(v=>{if(v==="''")return{isToken:!1,value:"'"};const y=v[0];if(y==="'")return{isToken:!1,value:On(v)};if(oe[y])return{isToken:!0,value:v};if(y.match(Sn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return{isToken:!1,value:v}});i.localize.preprocessor&&(l=i.localize.preprocessor(u,l));const p={firstWeekContainsDate:d,weekStartsOn:c,locale:i};return l.map(v=>{if(!v.isToken)return v.value;const y=v.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&vn(y)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&kn(y))&&jn(y,n,String(e));const L=oe[y[0]];return L(u,y,i.localize,p)}).join("")}function On(e){const n=e.match(Dn);return n?n[1].replace(Wn,"'"):e}const Bn=e=>e.root.isLoading,Tn=s.div`
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
`,se=s.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${a.colors.black};
  margin-bottom: 12px;
`,Fn=s.div`
  margin-bottom: 24px;

  div {
    display: flex;
    align-items: center;
  }
`,Cn=s.h2`
 margin-bottom: 24px;
    color: ${a.colors.black};
 font-size: 26px;
line-height: 123%;
    font-weight: 500;
   
`,Yn=s.h3`
font-weight: 700;
font-size: 18px;
line-height: 111%;
 margin-bottom: 16px;
   
`,_n=s.p`
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
`,zn=s.div`
  background: ${a.colors.paleBlue};
  border-radius: 40px;
padding: 6px 10px;
width: 92px;
height: 36px;
  margin-left: 10px;
  margin-right: 10px;
`,de=s.button`
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
`,ce=s.svg`
  width: 24px;
  height: 24px;
  stroke: ${a.colors.blue};
  fill: ${a.colors.blue};
`,En=s.div`
  margin-bottom: 24px;
`,Ln=s.input`
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
`,Nn=s.input`
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

`,Rn=s.div`
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
`,An=s.button`
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
`,Hn=s.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`,qn=({onClose:e,initialTime:n})=>{const[o,i]=g.useState(0),[d,c]=g.useState("");g.useEffect(()=>{let x;if(n){const m=new Date(n),S=Math.round(m.getMinutes()/5)*5;m.setMinutes(S),x=G(m,"HH:mm")}else{const m=new Date,S=Math.round(m.getMinutes()/5)*5;m.setMinutes(S),x=G(m,"HH:mm")}c(x)},[n]);const u=V(),{isLoading:l}=B(Bn),[p,f]=g.useState(""),k=x=>{let m=x.target.value;if(m>5e3){f("The value cannot exceed 5000ml");return}else f("");m.startsWith("0")&&m.length>1&&(m=parseFloat(m.substring(1))),i(m.toString())},b=()=>{u(Fe({waterVolume:o,date:d})).then(m=>{m.error||(e(),i(0))})},w=()=>{i(x=>Math.max(x-50,0))},j=()=>{const x=o+50,m=5e3;i(x<=m?x:m)};return r.jsx(r.Fragment,{children:r.jsxs(Tn,{onClose:e,children:[r.jsxs(Fn,{children:[r.jsx(Cn,{children:"Add Water"}),r.jsx(Yn,{children:"Choose a value:"}),r.jsx(se,{children:"Amount of water:"}),r.jsxs("div",{children:[r.jsx(de,{onClick:w,children:r.jsx(ce,{children:r.jsx("use",{href:`${$}#icon-minus`})})}),r.jsx(zn,{children:r.jsxs(_n,{children:[o," ml"]})}),r.jsx(de,{onClick:j,children:r.jsx(ce,{children:r.jsx("use",{href:`${$}#icon-plus`})})})]})]}),r.jsxs(En,{children:[r.jsx(se,{children:"Recording time:"}),r.jsx(Ln,{type:"time",value:d,onChange:x=>c(x.target.value),step:300})]}),r.jsxs("div",{children:[r.jsx("h3",{children:"Enter the value of the water used:"}),r.jsx(Nn,{type:"number",value:o,onChange:k,onBlur:()=>i(x=>x||0||0),max:5e3}),p&&r.jsx(Hn,{children:p})]}),r.jsxs(Rn,{children:[r.jsxs("span",{children:[o,"ml"]}),r.jsxs(An,{onClick:b,children:["Save ",l&&r.jsx($t,{})]})]})]})})},In=()=>{const[e,n]=g.useState(!1),t=B(Ue),o=()=>{n(!e)},i=t.percent;return r.jsxs(ht,{children:[r.jsxs(xt,{children:[r.jsx(pt,{children:"Today"}),r.jsxs(mt,{children:[r.jsx(gt,{children:r.jsx(ft,{style:{width:`${Math.min(i,100)}%`}})}),r.jsxs(bt,{children:[r.jsx(wt,{children:"0%"}),i<100&&i>0&&r.jsxs(kt,{left:`${i}%`,children:[i,"%"]}),r.jsx(yt,{children:"100%"})]})]})]}),r.jsxs(vt,{onClick:o,children:[r.jsx("svg",{children:r.jsx("use",{href:`${$}#icon-outline`})}),"Add water"]}),e&&r.jsx(U,{onClose:o,children:r.jsx(qn,{})})]})},Xn=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`,Gn=s.div`
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
`,Qn=s.div`
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
`,Vn=s.h3`
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
`,Un=s.div`
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
`,Jn=s.svg`
  width: 26px;
  height: 26px;
  fill: transparent;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,Kn=s.div`
  display: flex;
  gap: 18px;
  margin-right: 10px;
`,Zn=s.svg`
  width: 16px;
  height: 16px;
  stroke: ${a.colors.skyBlue};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.skyBlue};
  }
`,eo=s.svg`
  width: 16px;
  height: 16px;
  stroke: ${a.colors.brightRed};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.brightRed};
  }
`,to=s.button`
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
    &:hover {
      fill: ${a.colors.orange};
    }
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    font-size: 18px;
    line-height: 1.33;
  }

  & svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    color: ${a.colors.orange};
    fill: ${a.colors.orange};
  }
`,J=s.p`
  color: ${a.colors.black};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
`,le=s.label`
  display: inline-block;
  margin-bottom: 8px;
  color: ${a.colors.black};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
`,no=s.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`,De=s.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: ${a.colors.paleBlue};
  stroke-linecap: round;
  stroke-linejoin: round;
`,q=s.button`
  border: none;
  background-color: transparent;
  padding: 0;
`,I=s.div`
  display: flex;
  align-items: flex-end;
  width: 392px;
  margin-top: 8px;
`;s(De)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;const oo=s.label`
  display: flex;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`,ro=s.span`
  color: ${a.colors.blue};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`,Q=s.div`
  margin-bottom: 24px;

  .error-input {
    border: 1px solid ${a.colors.brightRed};
    color: ${a.colors.brightRed};

    &:focus {
      color: ${a.colors.brightRed};
    }

    &::placeholder {
      color: ${a.colors.brightRed};
    }
  }
`,ue=s(Q)`
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    margin-bottom: 28px;
  }
  @media screen and (min-width: ${a.breakpoint.desktop}) {
    margin-bottom: 12px;
  }
`,ao=s(J)`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
`,he=s(T)`
  opacity: 0;
  position: absolute;

  + span {
    display: inline-block;
    padding-left: 25px;
    position: relative;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 1px solid ${e=>e.theme.colors.skyBlue};
      background-color: ${a.colors.white};
    }

    &:after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${e=>e.theme.colors.orange};
      top: 50%;
      left: 4px;
      transform: translate(0, -50%);
      opacity: 0;
    }
  }

  &:checked + span:after {
    opacity: 1;
  }
`,io=s.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,pe=s.span`
  color: ${a.colors.black};
  font-size: 16px;
  line-height: 1.25; /* 125% */
`,xe=s.label`
  display: flex;
  align-items: center;
`,so=s.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`,Y=s(T)`
  width: 100%;
  height: 44px;
  border-radius: 6px;
  border: 1px solid ${a.colors.paleBlue};
  color: ${a.colors.blue};
  font-size: 16px;
  line-height: 1.25;
  outline: transparent; /* 125% */
  background-color: ${a.colors.white};

  &:focus {
    color: ${a.colors.black};
  }

  &::placeholder {
    color: ${a.colors.blue};
    padding: 0px 10px;
  }
`;s.div`
  margin-top: 4px;
  color: ${a.colors.brightRed};
  font-size: 14px;
  line-height: 18px; /* 128.571% */
`;s.p`
  margin-top: 4px;
  color: ${a.colors.brightRed};
  font-size: 14px;
  line-height: 18px; /* 128.571% */
`;const co=s.div`
  /* padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 32px;
    border-radius: 10px;
    border: 2px solid ${a.colors.black};
    background-color: ${a.colors.white}; */

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    min-width: 704px;
    padding-left: 24px;
    padding-right: 24px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    min-width: 1008px;
  }
`,lo=s(J)`
  margin-bottom: 12px;
`,X=s.label`
  color: ${a.colors.black};
  font-size: 16px;
  line-height: 1.25; /* 125% */
`,uo=s.button`
  min-width: 100%;
  padding: 8px 30px;
  border-radius: 10px;
  background: ${a.colors.blue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25; /* 125% */

  &:is(:hover, :focus) {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    min-width: 160px;
    padding: 10px 30px;
    font-size: 18px;
    line-height: 24px; /* 133.333% */
  }
`,ho=s.div`
  margin-bottom: 24px;

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    display: flex;
    align-items: flex-end;
    gap: 24px;
  }
`,po=s.div`
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 392px;
  }
  @media screen and (min-width: ${a.breakpoint.desktop}) {
  }
`,xo=s.div`
  @media screen and (min-width: ${a.breakpoint.desktop}) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 392px;
  }
  @media screen and (min-width: ${a.breakpoint.desktop}) {
    margin-bottom: 0px;
  }
`,mo=s.div`
  @media screen and (max-width: 767px) {
    height: 92px;
  }
`,go=s.div`
  @media screen and (max-width: 1439px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    margin-bottom: 52px;
  }
`,fo=s.ul`
  li {
    @media screen and (max-width: 767px) {
      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;s.button`
  border: none;
  background-color: transparent;
  padding: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${e=>e.theme.colors.LightBlue};

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    font-size: 16px;
  }

  &:is(:hover, :focus) {
  }
`;s.div`
  width: 1008px;
  height: 592px;
  padding: 32px 24px 32px 24px;
  border-radius: 10px 0px 0px 0px;
  border: 2px solid #2f2f2f;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
`;const bo=s.h1`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
`,wo=()=>{const[e,n]=g.useState(null),[t,o]=g.useState(""),{newUserAvatar:i,user:d}=fe(),c=l=>{const p=l.currentTarget.files[0];n(p),o(URL.createObjectURL(p))},u={avatar:d.avatarURL||"",gender:d.gender||"",name:d.name||"",email:d.email||""};return r.jsx(r.Fragment,{children:r.jsx(co,{children:r.jsx(be,{initialValues:u,onSubmit:l=>{i(e),console.log("SettingUser",l)},children:r.jsxs(we,{children:[r.jsx(bo,{children:"Setting"}),r.jsxs(Q,{children:[r.jsx(J,{children:"Your photo"}),r.jsxs(no,{children:[r.jsx(so,{src:t||d.avatar,alt:"user avatar",width:"80px",height:"80px"}),r.jsxs(oo,{children:[r.jsx(T,{type:"file",name:"avatar",hidden:!0,accept:"image/png, image/jpeg",onChange:c}),r.jsx(De,{children:r.jsx("use",{href:`${$}#icon-outline1`})}),r.jsx(ro,{children:"Upload a photo"})]})]})]}),r.jsxs(ho,{children:[r.jsxs(xo,{children:[r.jsxs(go,{children:[r.jsx(ao,{children:"Your gender identity"}),r.jsxs(io,{children:[r.jsxs(xe,{children:[r.jsx(he,{type:"radio",name:"gender",value:"female",checked:""}),r.jsx(pe,{children:"Girl"})]}),r.jsxs(xe,{children:[r.jsx(he,{type:"radio",name:"gender",value:"male",checked:""}),r.jsx(pe,{children:"Man"})]})]})]}),r.jsxs(Q,{children:[r.jsx(le,{htmlFor:"username",children:"Your name"}),r.jsx(Y,{type:"text",id:"username",name:"name",value:d.name})]}),r.jsxs("div",{children:[r.jsx(le,{htmlFor:"email",children:"E-mail"}),r.jsx(Y,{type:"email",id:"email",name:"email",value:d.email})]})]}),r.jsxs(po,{children:[r.jsx(lo,{children:"Password"}),r.jsxs(ue,{children:[r.jsx(X,{htmlFor:"oldPassword",children:"Outdated password:"}),r.jsxs(I,{children:[r.jsx(Y,{type:"password",id:"oldPassword",name:"outdatedPassword",placeholder:"Password"}),r.jsx(q,{type:"button"})]})]}),r.jsxs(ue,{children:[r.jsx(X,{htmlFor:"password",children:"New Password:"}),r.jsxs(I,{children:[r.jsx(Y,{type:"password",id:"password",name:"newPassword",placeholder:"Password"}),r.jsx(q,{type:"button"})]})]}),r.jsxs(mo,{children:[r.jsx(X,{htmlFor:"repeatedPassword",children:"Repeat new password:"}),r.jsxs(I,{children:[r.jsx(Y,{type:"password",id:"repeatedPassword",name:"repeatedPassword",placeholder:"Password"}),r.jsx(q,{type:"button"})]})]})]})]}),r.jsx(fo,{children:r.jsx("li",{children:r.jsx(uo,{type:"submit",children:"Save"})})})]})})})})},yo=()=>{const e=Date.now(),t=new Date(e).toLocaleDateString(),[o,i]=g.useState(!1),d=V(),c=B(ke),{userInfo:u}=fe();g.useEffect(()=>{d(ge({date:t}))},[d,t]);const l=()=>{i(!o),u()};return r.jsxs(r.Fragment,{children:[r.jsxs(Xn,{children:[r.jsx(Vn,{children:"Today"}),r.jsx(Gn,{children:c.map(p=>r.jsxs(Qn,{children:[r.jsxs(Un,{children:[r.jsx(Jn,{children:r.jsx("use",{href:`${$}#icon-glass`})}),r.jsxs("h4",{children:[p.amount," ml"]}),r.jsxs("p",{children:[p.time,r.jsx("span",{children:" AM"})]})]}),r.jsxs(Kn,{children:[r.jsx(Zn,{children:r.jsx("use",{href:`${$}#icon-note`})}),r.jsx(eo,{children:r.jsx("use",{href:`${$}#icon-trash`})})]})]},p._id))}),r.jsxs(to,{onClick:l,children:[r.jsx("svg",{children:r.jsx("use",{href:`${$}#icon-increment`})}),"Add water"]})]}),o&&r.jsx(U,{onClose:l,children:r.jsx(wo,{})})]})};const ko=s.div`
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
`,vo=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,jo=s.div`
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
`,me=s.svg`
  width: 6px;
  height: 10px;
  background: transparent;
  fill: ${a.colors.blue};

  &:hover {
    fill: ${a.colors.orange};
  }
`,$o=s.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 50px);
  justify-content: space-between;
  gap: 16px;
  height: 446px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 50px);
    gap: 20px;
    height: 268px;
  }
`,Mo=s.button`
  padding: 7px 6px;
  width: 35px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: ${a.colors.black};

  background-color: ${a.colors.white};
  border: 1px solid ${a.colors.blue};

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    font-size: 16px;
    padding: 7px;
  }

  &:hover {
    box-shadow: 0px 4px 8px ${a.colors.skyBlue};
    border: 1px solid ${a.colors.orange};
  }
`,Po=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.6;
  color: ${a.colors.skyBlue};

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    font-size: 12px;
  }
`,Do=s.div`
  top: ${e=>e.top}px;
  left: ${e=>e.left}px;
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 999;

  p {
    margin: 0;
  }

  button {
    margin-top: 10px;
  }
`,Wo=()=>{const[e,n]=g.useState(new Date),[t,o]=g.useState(null),[i,d]=g.useState({x:0,y:0}),c=b=>{n(w=>{const j=new Date(w);return j.setMonth(j.getMonth()+b),j})},u=()=>{const w=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),j=[];for(let x=1;x<=w;x++)j.push(x);return j},l=()=>new Intl.DateTimeFormat("en",{month:"long"}).format(e),p=()=>e.getFullYear(),f=b=>{const w=new Date(e.getFullYear(),e.getMonth(),b);w<=new Date?(o(w),d({x:event.clientX,y:event.clientY})):alert("Выберите день не позже сегодняшней даты")},k=()=>{o(null)};return r.jsxs("div",{children:[r.jsxs(ko,{children:[r.jsxs(vo,{children:[r.jsx("h3",{children:"Month"}),r.jsxs(jo,{children:[r.jsx(me,{onClick:()=>c(-1),children:r.jsx("use",{href:`${$}#icon-left`})}),r.jsxs("span",{children:[l(),", ",p()]}),r.jsx(me,{onClick:()=>c(1),children:r.jsx("use",{href:`${$}#icon-right`})})]})]}),r.jsx($o,{children:u().map(b=>r.jsxs("div",{children:[r.jsx(Mo,{onClick:w=>f(b),children:b}),r.jsx(Po,{children:"0%"})]},b))})]}),t&&r.jsxs(Do,{style:{top:i.y,left:i.x},children:[r.jsxs("p",{children:["Selected day: ",G(t,"dd.MM.yyyy")]}),r.jsx("button",{onClick:k,children:"Close"})]})]})},So=s.div`
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
`,Oo=s.div`
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
`,Bo=s.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    max-width: 50%;
  }
`,To=s.div`
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
`,Yo=()=>r.jsx(r.Fragment,{children:r.jsx(To,{children:r.jsxs(So,{children:[r.jsxs(Bo,{children:[r.jsx(ut,{}),r.jsx(In,{})]}),r.jsxs(Oo,{children:[r.jsx(yo,{}),r.jsx(Wo,{})]})]})})});export{Yo as default};
