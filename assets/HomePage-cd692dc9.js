import{n as s,t as a,r as b,R as me,j as o,s as M,c as xe,a as R,d as T,g as ae,e as fe,f as ge,p as be,h as we}from"./index-3a6d42cf.js";import{F as A,a as ye,b as ke}from"./formik.esm-29850a74.js";const ve="/runners_of_code__frontend/assets/bottle_home_mobile@1x-0d6054eb.png",je="/runners_of_code__frontend/assets/bottle_home_mobile@2x-52eb5066.png",$e="/runners_of_code__frontend/assets/bottle_home_tablet@1x-c4bedac4.png",Me="/runners_of_code__frontend/assets/bottle_home_tablet@2x-867eb443.png",De="/runners_of_code__frontend/assets/bottle_home_desk-f67b46be.png",Pe="/runners_of_code__frontend/assets/bottle_home_deskx2-acd9b153.png",We=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;
`,Oe=s.div`
  background-position: center;
  background-image: -webkit-image-set(
    url(${ve}) 1x,
    url(${je}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;
  z-index: -1;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${$e}) 1x,
      url(${Me}) 2x
    );
    height: 386px;
    margin-top: -114px;
    background-position: center top;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${De}) 1x,
      url(${Pe}) 2x
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
`,Te=s.div`
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
`,Ce=s.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`,Be=s.button`
  padding: 0;
  background-color: ${a.colors.white};
  color: ${a.colors.blue};
  border: none;
  font-size: 16px;
  &:hover {
    color: ${a.colors.orange};
  }
`,Fe=s.div`
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
`,Ye=s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`,_e=s.div`
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
`,Ee=s.button`
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
`,X=({onClose:e,children:n})=>{const t=document.getElementById("modal-root"),r=b.useRef(),i=d=>{d.target===r.current&&e(),document.body.style.overflow="",document.body.style.position="",d.stopPropagation()},c=d=>{d.key==="Escape"&&(document.body.style.overflow="",document.body.style.position="",e())};return b.useEffect(()=>{const d=l=>c(l);return document.addEventListener("keydown",d),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",d)}},[]),me.createPortal(o.jsx(Fe,{onClick:i,ref:r,children:o.jsx(Ye,{children:o.jsxs(_e,{children:[o.jsx(Ee,{onClick:e,children:o.jsx("svg",{children:o.jsx("use",{href:`${M}#closeModal`})})}),n]})})}),t)},ie=e=>e.waters.dailyNorm,se=e=>e.waters.reps,ce=e=>e.filter,ze=e=>e.waters;xe([ie,ce],(e,n)=>e.filter(t=>t.name.toLowerCase().includes(n.toLowerCase())));const Ne=()=>{const e=R(),n=T(ie),t=T(se),r=T(ce),i=b.useCallback(u=>e(ae(u)),[e]),c=b.useCallback(u=>e(fe(u)),[e]),d=b.useCallback(u=>e(ge(u)),[e]),l=b.useCallback(u=>e(be(u)),[e]);return{dailyNorm:n,reps:t,filter:r,getWaters:i,addDailyNorma:c,deleteReps:d,patchWater:l}},Le=s.h2`
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 24px;
`,He=s.div`
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
`,Ae=s.div`
  border: 1px solid ${a.colors.paleBlue};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  margin-bottom: 24px;
  width: auto;
`,qe=s.p`
  color: ${a.colors.secondText};
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`,Re=s.span`
  color: ${a.colors.blue};
`,Xe=s.div`
  margin-bottom: 24px;
`,Ie=s.h3`
  margin-bottom: 16px;
  margin-top: 0;
`,Qe=s.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
`,G=s.div`
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
`,z=s.label``,Ge=s.div`
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
  color: blue;
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
`,Ve=s.button`
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
`,Je=s.div`
  width: 280px;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    min-width: 704px;
  }

  @media (min-width: ${a.breakpoint.desktop}) {
    min-width: 592px;
  }
`;function Ue(){const{addDailyNorma:e}=Ne(),n=t=>{const{gender:r,weight:i,activityHours:c}=t;if(r&&i&&c){if(r==="man")return parseFloat(i)*.04+parseFloat(c)*.6;if(r==="woman")return parseFloat(i)*.03+parseFloat(c)*.4}return null};return o.jsxs(Je,{children:[o.jsx(Le,{children:"My daily norma"}),o.jsx(ye,{initialValues:{gender:"man",weight:"",activityHours:""},onSubmit:(t,{setSubmitting:r})=>{const i=n(t);e({waterIntake:i}),console.log("Form data:",{...t,waterIntake:i}),r(!1)},children:({isSubmitting:t,errors:r,touched:i,values:c,setFieldValue:d})=>o.jsxs(ke,{children:[o.jsxs(He,{children:[o.jsxs(I,{children:["For girl:"," ",o.jsx(Q,{children:"V=(M*0,03) + (T*0,4)"})]}),o.jsxs(I,{children:["For man:"," ",o.jsx(Q,{children:"V=(M*0,04) + (T*0,6)"})]})]}),o.jsx(Ae,{children:o.jsxs(qe,{children:[o.jsx(Re,{children:"* "}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),o.jsxs(Xe,{children:[o.jsx(Ie,{children:"Calculate your rate:"}),o.jsxs(Qe,{children:[o.jsxs("label",{children:[o.jsx(A,{type:"radio",name:"gender",value:"man",onChange:()=>d("gender","man")}),"For man"]}),o.jsxs("label",{children:[o.jsx(A,{type:"radio",name:"gender",value:"woman",onChange:()=>d("gender","woman")}),"For woman"]})]}),r.gender&&i.gender&&o.jsx("div",{children:r.gender})]}),o.jsx(G,{children:o.jsxs(z,{children:[o.jsx(N,{children:"Your weight in kilograms:"}),o.jsx(L,{type:"number",name:"weight",placeholder:"0"}),r.weight&&i.weight&&o.jsx("div",{children:r.weight})]})}),o.jsxs(G,{children:[o.jsxs(N,{children:[" ","The time of active participation in sports or other activities with a high physical. load in hours:"]}),o.jsxs(z,{children:[o.jsx(L,{type:"number",name:"activityHours",placeholder:"0"}),r.activityHours&&i.activityHours&&o.jsx("div",{children:r.activityHours})]})]}),o.jsxs(Ge,{children:["Your recommended water intake per day is:",o.jsxs("span",{children:[n(c)?parseFloat(n(c)).toFixed(2):0,"L"]})]}),o.jsx(N,{children:"Write down how much water you will drink:"}),o.jsx(z,{children:o.jsx(L,{type:"number",name:"Iwilldrunk",placeholder:"0"})}),o.jsx(Ve,{type:"submit",disabled:t,children:"Save"})]})})]})}const Ke=()=>{const[e,n]=b.useState(!1),t=()=>{n(!e)},i=(2e3/1e3).toFixed(1)+" L";return o.jsxs(We,{children:[o.jsxs(Te,{children:[o.jsx(Se,{children:"My daily norma"}),o.jsxs(Ce,{children:[o.jsx("p",{children:i}),o.jsx(Be,{type:"button",onClick:t,children:"Edit"})]})]}),o.jsx(Oe,{}),e&&o.jsx(X,{onClose:t,children:o.jsx(Ue,{})})]})},Ze=s.div`
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
`,et=s.h3`
  font-size: 18px;
  font-weight: 400;
  color: ${a.colors.blue};
  text-align: left;
  line-height: 1;
  width: 100%;
`,tt=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,nt=s.div`
  width: 256px;
  margin: 5px 14px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 325px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    width: 360px;
  }
`,rt=s.div`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${a.colors.paleBlue};
`,ot=s.span`
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
`,at=s.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`,it=s.span`
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
`,st=s.span`
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
`,ct=s.span`
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
`,dt=s.button`
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
`,lt=s.div`
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
`,ut=()=>o.jsx(lt,{});function $(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}function W(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}const de=6048e5,ht=864e5;let pt={};function _(){return pt}function F(e,n){var l,u,x,f;const t=_(),r=(n==null?void 0:n.weekStartsOn)??((u=(l=n==null?void 0:n.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??t.weekStartsOn??((f=(x=t.locale)==null?void 0:x.options)==null?void 0:f.weekStartsOn)??0,i=$(e),c=i.getDay(),d=(c<r?7:0)+c-r;return i.setDate(i.getDate()-d),i.setHours(0,0,0,0),i}function Y(e){return F(e,{weekStartsOn:1})}function le(e){const n=$(e),t=n.getFullYear(),r=W(e,0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const i=Y(r),c=W(e,0);c.setFullYear(t,0,4),c.setHours(0,0,0,0);const d=Y(c);return n.getTime()>=i.getTime()?t+1:n.getTime()>=d.getTime()?t:t-1}function V(e){const n=$(e);return n.setHours(0,0,0,0),n}function J(e){const n=$(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function mt(e,n){const t=V(e),r=V(n),i=+t-J(t),c=+r-J(r);return Math.round((i-c)/ht)}function xt(e){const n=le(e),t=W(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),Y(t)}function ft(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function gt(e){if(!ft(e)&&typeof e!="number")return!1;const n=$(e);return!isNaN(Number(n))}function bt(e){const n=$(e),t=W(e,0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}const wt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},yt=(e,n,t)=>{let r;const i=wt[e];return typeof i=="string"?r=i:n===1?r=i.one:r=i.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function H(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const kt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},vt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},jt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},$t={date:H({formats:kt,defaultWidth:"full"}),time:H({formats:vt,defaultWidth:"full"}),dateTime:H({formats:jt,defaultWidth:"full"})},Mt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Dt=(e,n,t,r)=>Mt[e];function C(e){return(n,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let i;if(r==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,l=t!=null&&t.width?String(t.width):d;i=e.formattingValues[l]||e.formattingValues[d]}else{const d=e.defaultWidth,l=t!=null&&t.width?String(t.width):e.defaultWidth;i=e.values[l]||e.values[d]}const c=e.argumentCallback?e.argumentCallback(n):n;return i[c]}}const Pt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Wt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ot={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},St={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Tt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ct={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Bt=(e,n)=>{const t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Ft={ordinalNumber:Bt,era:C({values:Pt,defaultWidth:"wide"}),quarter:C({values:Wt,defaultWidth:"wide",argumentCallback:e=>e-1}),month:C({values:Ot,defaultWidth:"wide"}),day:C({values:St,defaultWidth:"wide"}),dayPeriod:C({values:Tt,defaultWidth:"wide",formattingValues:Ct,defaultFormattingWidth:"wide"})};function B(e){return(n,t={})=>{const r=t.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],c=n.match(i);if(!c)return null;const d=c[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(l)?_t(l,k=>k.test(d)):Yt(l,k=>k.test(d));let x;x=e.valueCallback?e.valueCallback(u):u,x=t.valueCallback?t.valueCallback(x):x;const f=n.slice(d.length);return{value:x,rest:f}}}function Yt(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function _t(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function Et(e){return(n,t={})=>{const r=n.match(e.matchPattern);if(!r)return null;const i=r[0],c=n.match(e.parsePattern);if(!c)return null;let d=e.valueCallback?e.valueCallback(c[0]):c[0];d=t.valueCallback?t.valueCallback(d):d;const l=n.slice(i.length);return{value:d,rest:l}}}const zt=/^(\d+)(th|st|nd|rd)?/i,Nt=/\d+/i,Lt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ht={any:[/^b/i,/^(a|c)/i]},At={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},qt={any:[/1/i,/2/i,/3/i,/4/i]},Rt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Xt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},It={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Qt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Gt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Vt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Jt={ordinalNumber:Et({matchPattern:zt,parsePattern:Nt,valueCallback:e=>parseInt(e,10)}),era:B({matchPatterns:Lt,defaultMatchWidth:"wide",parsePatterns:Ht,defaultParseWidth:"any"}),quarter:B({matchPatterns:At,defaultMatchWidth:"wide",parsePatterns:qt,defaultParseWidth:"any",valueCallback:e=>e+1}),month:B({matchPatterns:Rt,defaultMatchWidth:"wide",parsePatterns:Xt,defaultParseWidth:"any"}),day:B({matchPatterns:It,defaultMatchWidth:"wide",parsePatterns:Qt,defaultParseWidth:"any"}),dayPeriod:B({matchPatterns:Gt,defaultMatchWidth:"any",parsePatterns:Vt,defaultParseWidth:"any"})},Ut={code:"en-US",formatDistance:yt,formatLong:$t,formatRelative:Dt,localize:Ft,match:Jt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Kt(e){const n=$(e);return mt(n,bt(n))+1}function Zt(e){const n=$(e),t=+Y(n)-+xt(n);return Math.round(t/de)+1}function ue(e,n){var f,k,g,w;const t=$(e),r=t.getFullYear(),i=_(),c=(n==null?void 0:n.firstWeekContainsDate)??((k=(f=n==null?void 0:n.locale)==null?void 0:f.options)==null?void 0:k.firstWeekContainsDate)??i.firstWeekContainsDate??((w=(g=i.locale)==null?void 0:g.options)==null?void 0:w.firstWeekContainsDate)??1,d=W(e,0);d.setFullYear(r+1,0,c),d.setHours(0,0,0,0);const l=F(d,n),u=W(e,0);u.setFullYear(r,0,c),u.setHours(0,0,0,0);const x=F(u,n);return t.getTime()>=l.getTime()?r+1:t.getTime()>=x.getTime()?r:r-1}function en(e,n){var l,u,x,f;const t=_(),r=(n==null?void 0:n.firstWeekContainsDate)??((u=(l=n==null?void 0:n.locale)==null?void 0:l.options)==null?void 0:u.firstWeekContainsDate)??t.firstWeekContainsDate??((f=(x=t.locale)==null?void 0:x.options)==null?void 0:f.firstWeekContainsDate)??1,i=ue(e,n),c=W(e,0);return c.setFullYear(i,0,r),c.setHours(0,0,0,0),F(c,n)}function tn(e,n){const t=$(e),r=+F(t,n)-+en(t,n);return Math.round(r/de)+1}function h(e,n){const t=e<0?"-":"",r=Math.abs(e).toString().padStart(n,"0");return t+r}const D={y(e,n){const t=e.getFullYear(),r=t>0?t:1-t;return h(n==="yy"?r%100:r,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):h(t+1,2)},d(e,n){return h(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return h(e.getHours()%12||12,n.length)},H(e,n){return h(e.getHours(),n.length)},m(e,n){return h(e.getMinutes(),n.length)},s(e,n){return h(e.getSeconds(),n.length)},S(e,n){const t=n.length,r=e.getMilliseconds(),i=Math.trunc(r*Math.pow(10,t-3));return h(i,n.length)}},S={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},U={G:function(e,n,t){const r=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const r=e.getFullYear(),i=r>0?r:1-r;return t.ordinalNumber(i,{unit:"year"})}return D.y(e,n)},Y:function(e,n,t,r){const i=ue(e,r),c=i>0?i:1-i;if(n==="YY"){const d=c%100;return h(d,2)}return n==="Yo"?t.ordinalNumber(c,{unit:"year"}):h(c,n.length)},R:function(e,n){const t=le(e);return h(t,n.length)},u:function(e,n){const t=e.getFullYear();return h(t,n.length)},Q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return h(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return h(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,n,t){const r=e.getMonth();switch(n){case"M":case"MM":return D.M(e,n);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(e,n,t){const r=e.getMonth();switch(n){case"L":return String(r+1);case"LL":return h(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,t,r){const i=tn(e,r);return n==="wo"?t.ordinalNumber(i,{unit:"week"}):h(i,n.length)},I:function(e,n,t){const r=Zt(e);return n==="Io"?t.ordinalNumber(r,{unit:"week"}):h(r,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):D.d(e,n)},D:function(e,n,t){const r=Kt(e);return n==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):h(r,n.length)},E:function(e,n,t){const r=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(e,n,t,r){const i=e.getDay(),c=(i-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(c);case"ee":return h(c,2);case"eo":return t.ordinalNumber(c,{unit:"day"});case"eee":return t.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(i,{width:"short",context:"formatting"});case"eeee":default:return t.day(i,{width:"wide",context:"formatting"})}},c:function(e,n,t,r){const i=e.getDay(),c=(i-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(c);case"cc":return h(c,n.length);case"co":return t.ordinalNumber(c,{unit:"day"});case"ccc":return t.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(i,{width:"narrow",context:"standalone"});case"cccccc":return t.day(i,{width:"short",context:"standalone"});case"cccc":default:return t.day(i,{width:"wide",context:"standalone"})}},i:function(e,n,t){const r=e.getDay(),i=r===0?7:r;switch(n){case"i":return String(i);case"ii":return h(i,n.length);case"io":return t.ordinalNumber(i,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(e,n,t){const i=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,n,t){const r=e.getHours();let i;switch(r===12?i=S.noon:r===0?i=S.midnight:i=r/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,n,t){const r=e.getHours();let i;switch(r>=17?i=S.evening:r>=12?i=S.afternoon:r>=4?i=S.morning:i=S.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let r=e.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return D.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):D.H(e,n)},K:function(e,n,t){const r=e.getHours()%12;return n==="Ko"?t.ordinalNumber(r,{unit:"hour"}):h(r,n.length)},k:function(e,n,t){let r=e.getHours();return r===0&&(r=24),n==="ko"?t.ordinalNumber(r,{unit:"hour"}):h(r,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):D.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):D.s(e,n)},S:function(e,n){return D.S(e,n)},X:function(e,n,t){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(n){case"X":return Z(r);case"XXXX":case"XX":return P(r);case"XXXXX":case"XXX":default:return P(r,":")}},x:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"x":return Z(r);case"xxxx":case"xx":return P(r);case"xxxxx":case"xxx":default:return P(r,":")}},O:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+K(r,":");case"OOOO":default:return"GMT"+P(r,":")}},z:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+K(r,":");case"zzzz":default:return"GMT"+P(r,":")}},t:function(e,n,t){const r=Math.trunc(e.getTime()/1e3);return h(r,n.length)},T:function(e,n,t){const r=e.getTime();return h(r,n.length)}};function K(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),i=Math.trunc(r/60),c=r%60;return c===0?t+String(i):t+String(i)+n+h(c,2)}function Z(e,n){return e%60===0?(e>0?"-":"+")+h(Math.abs(e)/60,2):P(e,n)}function P(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),i=h(Math.trunc(r/60),2),c=h(r%60,2);return t+i+n+c}const ee=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},he=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},nn=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],r=t[1],i=t[2];if(!i)return ee(e,n);let c;switch(r){case"P":c=n.dateTime({width:"short"});break;case"PP":c=n.dateTime({width:"medium"});break;case"PPP":c=n.dateTime({width:"long"});break;case"PPPP":default:c=n.dateTime({width:"full"});break}return c.replace("{{date}}",ee(r,n)).replace("{{time}}",he(i,n))},rn={p:he,P:nn},on=/^D+$/,an=/^Y+$/,sn=["D","DD","YY","YYYY"];function cn(e){return on.test(e)}function dn(e){return an.test(e)}function ln(e,n,t){const r=un(e,n,t);if(console.warn(r),sn.includes(e))throw new RangeError(r)}function un(e,n,t){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const hn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,pn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,mn=/^'([^]*?)'?$/,xn=/''/g,fn=/[a-zA-Z]/;function q(e,n,t){var f,k,g,w,j,p,m,O;const r=_(),i=(t==null?void 0:t.locale)??r.locale??Ut,c=(t==null?void 0:t.firstWeekContainsDate)??((k=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:k.firstWeekContainsDate)??r.firstWeekContainsDate??((w=(g=r.locale)==null?void 0:g.options)==null?void 0:w.firstWeekContainsDate)??1,d=(t==null?void 0:t.weekStartsOn)??((p=(j=t==null?void 0:t.locale)==null?void 0:j.options)==null?void 0:p.weekStartsOn)??r.weekStartsOn??((O=(m=r.locale)==null?void 0:m.options)==null?void 0:O.weekStartsOn)??0,l=$(e);if(!gt(l))throw new RangeError("Invalid time value");let u=n.match(pn).map(v=>{const y=v[0];if(y==="p"||y==="P"){const E=rn[y];return E(v,i.formatLong)}return v}).join("").match(hn).map(v=>{if(v==="''")return{isToken:!1,value:"'"};const y=v[0];if(y==="'")return{isToken:!1,value:gn(v)};if(U[y])return{isToken:!0,value:v};if(y.match(fn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return{isToken:!1,value:v}});i.localize.preprocessor&&(u=i.localize.preprocessor(l,u));const x={firstWeekContainsDate:c,weekStartsOn:d,locale:i};return u.map(v=>{if(!v.isToken)return v.value;const y=v.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&dn(y)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&cn(y))&&ln(y,n,String(e));const E=U[y[0]];return E(l,y,i.localize,x)}).join("")}function gn(e){const n=e.match(mn);return n?n[1].replace(xn,"'"):e}const bn=e=>e.root.isLoading,wn=s.div`
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
`,yn=s.div`
  margin-bottom: 24px;

  div {
    display: flex;
    align-items: center;
  }
`,kn=s.h2`
 margin-bottom: 24px;
    color: ${a.colors.black};
 font-size: 26px;
line-height: 123%;
    font-weight: 500;
   
`,vn=s.h3`
font-weight: 700;
font-size: 18px;
line-height: 111%;
 margin-bottom: 16px;
   
`,jn=s.p`
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
`,$n=s.div`
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
`,Mn=s.div`
  margin-bottom: 24px;
`,Dn=s.input`
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
`,Pn=s.input`
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

`,Wn=s.div`
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
`,On=s.button`
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
`,Sn=s.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`,pe=({onClose:e,initialTime:n})=>{const[r,i]=b.useState(0),[c,d]=b.useState("");b.useEffect(()=>{let p;if(n){const m=new Date(n),O=Math.round(m.getMinutes()/5)*5;m.setMinutes(O),p=q(m,"HH:mm")}else{const m=new Date,O=Math.round(m.getMinutes()/5)*5;m.setMinutes(O),p=q(m,"HH:mm")}d(p)},[n]);const l=R(),{isLoading:u}=T(bn),[x,f]=b.useState(""),k=p=>{let m=p.target.value;if(m>5e3){f("The value cannot exceed 5000ml");return}else f("");m.startsWith("0")&&m.length>1&&(m=parseFloat(m.substring(1))),i(m.toString())},g=()=>{l(we({waterVolume:r,date:c})).then(m=>{m.error||(e(),i(0))})},w=()=>{i(p=>Math.max(p-50,0))},j=()=>{const p=r+50,m=5e3;i(p<=m?p:m)};return o.jsx(o.Fragment,{children:o.jsxs(wn,{onClose:e,children:[o.jsxs(yn,{children:[o.jsx(kn,{children:"Add Water"}),o.jsx(vn,{children:"Choose a value:"}),o.jsx(te,{children:"Amount of water:"}),o.jsxs("div",{children:[o.jsx(ne,{onClick:w,children:o.jsx(re,{children:o.jsx("use",{href:`${M}#icon-minus`})})}),o.jsx($n,{children:o.jsxs(jn,{children:[r," ml"]})}),o.jsx(ne,{onClick:j,children:o.jsx(re,{children:o.jsx("use",{href:`${M}#icon-plus`})})})]})]}),o.jsxs(Mn,{children:[o.jsx(te,{children:"Recording time:"}),o.jsx(Dn,{type:"time",value:c,onChange:p=>d(p.target.value),step:300})]}),o.jsxs("div",{children:[o.jsx("h3",{children:"Enter the value of the water used:"}),o.jsx(Pn,{type:"number",value:r,onChange:k,onBlur:()=>i(p=>p||0||0),max:5e3}),x&&o.jsx(Sn,{children:x})]}),o.jsxs(Wn,{children:[o.jsxs("span",{children:[r,"ml"]}),o.jsxs(On,{onClick:g,children:["Save ",u&&o.jsx(ut,{})]})]})]})})},Tn=()=>{const[e,n]=b.useState(!1),t=T(ze),r=()=>{n(!e)},i=t.percent;return o.jsxs(Ze,{children:[o.jsxs(tt,{children:[o.jsx(et,{children:"Today"}),o.jsxs(nt,{children:[o.jsx(rt,{children:o.jsx(ot,{style:{width:`${Math.min(i,100)}%`}})}),o.jsxs(at,{children:[o.jsx(it,{children:"0%"}),i<100&&i>0&&o.jsxs(ct,{left:`${i}%`,children:[i,"%"]}),o.jsx(st,{children:"100%"})]})]})]}),o.jsxs(dt,{onClick:r,children:[o.jsx("svg",{children:o.jsx("use",{href:`${M}#icon-outline`})}),"Add water"]}),e&&o.jsx(X,{onClose:r,children:o.jsx(pe,{})})]})},Cn=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`,Bn=s.div`
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
`,Fn=s.div`
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
`,Yn=s.h3`
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
`,_n=s.div`
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
`,En=s.svg`
  width: 26px;
  height: 26px;
  fill: transparent;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,zn=s.div`
  display: flex;
  gap: 18px;
  margin-right: 10px;
`,Nn=s.svg`
  width: 16px;
  height: 16px;
  stroke: ${a.colors.skyBlue};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.skyBlue};
  }
`,Ln=s.svg`
  width: 16px;
  height: 16px;
  stroke: ${a.colors.brightRed};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.brightRed};
  }
`,Hn=s.button`
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
`,An=()=>{const e=Date.now(),t=new Date(e).toLocaleDateString(),[r,i]=b.useState(!1),c=R(),d=T(se);b.useEffect(()=>{c(ae({date:t}))},[c,t]);const l=()=>{i(!r)};return o.jsxs(o.Fragment,{children:[o.jsxs(Cn,{children:[o.jsx(Yn,{children:"Today"}),o.jsx(Bn,{children:d.map(u=>o.jsxs(Fn,{children:[o.jsxs(_n,{children:[o.jsx(En,{children:o.jsx("use",{href:`${M}#icon-glass`})}),o.jsxs("h4",{children:[u.amount," ml"]}),o.jsxs("p",{children:[u.time,o.jsx("span",{children:" AM"})]})]}),o.jsxs(zn,{children:[o.jsx(Nn,{children:o.jsx("use",{href:`${M}#icon-note`})}),o.jsx(Ln,{children:o.jsx("use",{href:`${M}#icon-trash`})})]})]},u._id))}),o.jsxs(Hn,{onClick:l,children:[o.jsx("svg",{children:o.jsx("use",{href:`${M}#icon-increment`})}),"Add water"]})]}),r&&o.jsx(X,{onClose:l,children:o.jsx(pe,{})})]})};const qn=s.div`
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
`,Rn=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,Xn=s.div`
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
`,In=s.div`
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
`,Qn=s.button`
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
`,Gn=s.div`
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
`,Vn=s.div`
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
`,Jn=()=>{const[e,n]=b.useState(new Date),[t,r]=b.useState(null),[i,c]=b.useState({x:0,y:0}),d=g=>{n(w=>{const j=new Date(w);return j.setMonth(j.getMonth()+g),j})},l=()=>{const w=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),j=[];for(let p=1;p<=w;p++)j.push(p);return j},u=()=>new Intl.DateTimeFormat("en",{month:"long"}).format(e),x=()=>e.getFullYear(),f=g=>{const w=new Date(e.getFullYear(),e.getMonth(),g);w<=new Date?(r(w),c({x:event.clientX,y:event.clientY})):alert("Выберите день не позже сегодняшней даты")},k=()=>{r(null)};return o.jsxs("div",{children:[o.jsxs(qn,{children:[o.jsxs(Rn,{children:[o.jsx("h3",{children:"Month"}),o.jsxs(Xn,{children:[o.jsx(oe,{onClick:()=>d(-1),children:o.jsx("use",{href:`${M}#icon-left`})}),o.jsxs("span",{children:[u(),", ",x()]}),o.jsx(oe,{onClick:()=>d(1),children:o.jsx("use",{href:`${M}#icon-right`})})]})]}),o.jsx(In,{children:l().map(g=>o.jsxs("div",{children:[o.jsx(Qn,{onClick:w=>f(g),children:g}),o.jsx(Gn,{children:"0%"})]},g))})]}),t&&o.jsxs(Vn,{style:{top:i.y,left:i.x},children:[o.jsxs("p",{children:["Selected day: ",q(t,"dd.MM.yyyy")]}),o.jsx("button",{onClick:k,children:"Close"})]})]})},Un=s.div`
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
`,Kn=s.div`
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
`,Zn=s.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    max-width: 50%;
  }
`,er=s.div`
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
`,rr=()=>o.jsx(o.Fragment,{children:o.jsx(er,{children:o.jsxs(Un,{children:[o.jsxs(Zn,{children:[o.jsx(Ke,{}),o.jsx(Tn,{})]}),o.jsxs(Kn,{children:[o.jsx(An,{}),o.jsx(Jn,{})]})]})})});export{rr as default};
