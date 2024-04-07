import{n as s,t as a,e as ye,f as X,g as O,r as k,h as se,i as ke,k as ve,p as je,F as R,j as o,c as $e,d as Me,M as Q,s as $,l as De}from"./index-4352ac64.js";const Se="/runners_of_code__frontend/assets/bottle_home_mobile@1x-0d6054eb.png",Pe="/runners_of_code__frontend/assets/bottle_home_mobile@2x-52eb5066.png",Oe="/runners_of_code__frontend/assets/bottle_home_tablet@1x-c4bedac4.png",We="/runners_of_code__frontend/assets/bottle_home_tablet@2x-867eb443.png",Te="/runners_of_code__frontend/assets/bottle_home_desk-f67b46be.png",Be="/runners_of_code__frontend/assets/bottle_home_deskx2-acd9b153.png",Ce=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;
`,Fe=s.div`
  background-position: left bottom;
  background-image: -webkit-image-set(
    url(${Se}) 1x,
    url(${Pe}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;
  z-index: -1;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${Oe}) 1x,
      url(${We}) 2x
    );
    height: 386px;
    margin-top: -114px;
    background-position: center top;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Te}) 1x,
      url(${Be}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,_e=s.h3`
  font-size: 18px;
  line-height: 1.33;
  font-family: 'Roboto-Bold', sans-serif;
  margin-bottom: 12px;
  color: ${a.colors.black};
`,Ye=s.div`
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
`,Ne=s.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`,ze=s.button`
  padding: 0;
  background-color: ${a.colors.white};
  color: ${a.colors.paleBlue};
  border: none;
  font-size: 16px;
  &:hover {
    color: ${a.colors.orange};
  }
`,I=e=>e.waters.dailyNorm,ce=e=>e.waters.reps,de=e=>e.filter,Ee=e=>e.waters;ye([I,de],(e,n)=>e.filter(t=>t.name.toLowerCase().includes(n.toLowerCase())));const Le=()=>{const e=X(),n=O(I),t=O(ce),r=O(de),i=k.useCallback(l=>e(se(l)),[e]),c=k.useCallback(l=>e(ke(l)),[e]),d=k.useCallback(l=>e(ve(l)),[e]),h=k.useCallback(l=>e(je(l)),[e]);return{dailyNorm:n,reps:t,filter:r,getWaters:i,addDailyNorma:c,deleteReps:d,patchWater:h}},He=s.h2`
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 24px;
`,Ae=s.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  line-height: 1.2;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    flex-direction: row;
    gap: 24px;
  }
`,G=s.p`
  font-size: 16px;
`,V=s.span`
  font-size: 18px;
  color: ${a.colors.blue};
`,qe=s.div`
  border: 1px solid ${a.colors.paleBlue};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  margin-bottom: 24px;
  width: auto;
`,Re=s.p`
  color: ${a.colors.secondText};
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`,Xe=s.span`
  color: ${a.colors.blue};
`,Qe=s.div`
  margin-bottom: 24px;
`,Ie=s.h3`
  margin-bottom: 16px;
  margin-top: 0;
`,Ge=s.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
`,J=s.div`
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
`,L=s.label``,Ve=s.div`
  font-size: 18px;
  padding-bottom: 26px;
  span {
    padding-left: 5px;
    color: ${a.colors.blue};
    font-weight: bold;
  }
`,H=s.label`
  display: block;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 8px;
  color: ${a.colors.black};
`,A=s(R)`
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
`,Je=s.button`
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
`,Ue=s.div`
  width: 280px;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    min-width: 704px;
  }

  @media (min-width: ${a.breakpoint.desktop}) {
    min-width: 592px;
  }
`;function Ke({toggleModal:e}){const{addDailyNorma:n}=Le(),t=m=>{const{gender:p,weight:w,activityHours:y}=m;if(p&&w&&y){if(p==="man")return parseFloat(w)*.04+parseFloat(y)*.6;if(p==="woman")return parseFloat(w)*.03+parseFloat(y)*.4}return null},r={gender:"man",weight:"",activityHours:"",dailyNorma:""},i=new Date,c=String(i.getDate()).padStart(2,"0"),d=String(i.getMonth()+1).padStart(2,"0"),h=String(i.getFullYear()),l=`${c}.${d}.${h}`;return o.jsxs(Ue,{children:[o.jsx(He,{children:"My daily norma"}),o.jsx($e,{initialValues:r,onSubmit:(m,{setSubmitting:p})=>{const y={daily_limit:m.dailyNorma*1e3,date:l};console.log("Form dailyNorma:",y),n(y),p(!1),e()},children:({errors:m,touched:p,values:w,setFieldValue:y})=>o.jsxs(Me,{children:[o.jsxs(Ae,{children:[o.jsxs(G,{children:["For girl:"," ",o.jsx(V,{children:"V=(M*0,03) + (T*0,4)"})]}),o.jsxs(G,{children:["For man:"," ",o.jsx(V,{children:"V=(M*0,04) + (T*0,6)"})]})]}),o.jsx(qe,{children:o.jsxs(Re,{children:[o.jsx(Xe,{children:"* "}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),o.jsxs(Qe,{children:[o.jsx(Ie,{children:"Calculate your rate:"}),o.jsxs(Ge,{children:[o.jsxs("label",{children:[o.jsx(R,{type:"radio",name:"gender",value:"man",onChange:()=>y("gender","man")}),"For man"]}),o.jsxs("label",{children:[o.jsx(R,{type:"radio",name:"gender",value:"woman",onChange:()=>y("gender","woman")}),"For woman"]})]}),m.gender&&p.gender&&o.jsx("div",{children:m.gender})]}),o.jsx(J,{children:o.jsxs(L,{children:[o.jsx(H,{children:"Your weight in kilograms:"}),o.jsx(A,{type:"number",name:"weight",placeholder:"0"}),m.weight&&p.weight&&o.jsx("div",{children:m.weight})]})}),o.jsxs(J,{children:[o.jsxs(H,{children:[" ","The time of active participation in sports or other activities with a high physical. load in hours:"]}),o.jsxs(L,{children:[o.jsx(A,{type:"number",name:"activityHours",placeholder:"0"}),m.activityHours&&p.activityHours&&o.jsx("div",{children:m.activityHours})]})]}),o.jsxs(Ve,{children:["Your recommended water intake per day is:",o.jsxs("span",{children:[t(w)?parseFloat(t(w)).toFixed(2):0,"L"]})]}),o.jsx(H,{children:"Write down how much water you will drink:s"}),o.jsx(L,{children:o.jsx(A,{type:"number",name:"dailyNorma",placeholder:"0"})}),o.jsx(Je,{type:"submit",children:"Save"})]})})]})}const Ze=()=>{const[e,n]=k.useState(!1),t=()=>{n(!e)},i=(O(I)/1e3).toFixed(1)+" L";return o.jsxs(Ce,{children:[o.jsxs(Ye,{children:[o.jsx(_e,{children:"My daily norma"}),o.jsxs(Ne,{children:[o.jsx("p",{children:i}),o.jsx(ze,{type:"button",onClick:t,children:"Edit"})]})]}),o.jsx(Fe,{}),e&&o.jsx(Q,{onClose:t,children:o.jsx(Ke,{toggleModal:t})})]})},et=s.div`
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
`,tt=s.h3`
  font-size: 18px;
  font-weight: 400;
  color: ${a.colors.blue};
  text-align: left;
  line-height: 1;
  width: 100%;
`,nt=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,rt=s.div`
  width: 256px;
  margin: 5px 14px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 325px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    width: 360px;
  }
`,ot=s.div`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${a.colors.paleBlue};
`,at=s.span`
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
`,it=s.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`,st=s.span`
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
`,ct=s.span`
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
`,dt=s.span`
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
`,lt=s.button`
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
`,ut=s.div`
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
`,ht=()=>o.jsx(ut,{}),mt=e=>e.root.isLoading,pt=s.div`
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
`,U=s.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${a.colors.black};
  margin-bottom: 12px;
`,xt=s.div`
  margin-bottom: 24px;

  div {
    display: flex;
    align-items: center;
  }
`,ft=s.h2`
 margin-bottom: 24px;
    color: ${a.colors.black};
 font-size: 26px;
line-height: 123%;
    font-weight: 500;
   
`,gt=s.h3`
font-weight: 700;
font-size: 18px;
line-height: 111%;
 margin-bottom: 16px;
   
`,bt=s.p`
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
`,wt=s.div`
  background: ${a.colors.paleBlue};
  border-radius: 40px;
padding: 6px 10px;
width: 92px;
height: 36px;
  margin-left: 10px;
  margin-right: 10px;
`,K=s.button`
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
`,Z=s.svg`
  width: 24px;
  height: 24px;
  stroke: ${a.colors.blue};
  fill: ${a.colors.blue};
`,yt=s.div`
  margin-bottom: 24px;
`,kt=s.select`
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

   @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 97%;
  }
`,vt=s.input`
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

`,jt=s.div`
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
`,$t=s.button`
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
`,Mt=s.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`,le=({onClose:e})=>{const[t,r]=k.useState(0),[i,c]=k.useState(""),[d,h]=k.useState([]);k.useEffect(()=>{const u=new Date,g=u.getHours(),f=u.getMinutes(),b=[];for(let Y=g;Y<24;Y++)for(let N=0;N<60;N+=5){if(Y===g&&N<f)continue;const ge=String(Y).padStart(2,"0"),be=String(N).padStart(2,"0"),we=`${ge}:${be}`;b.push(we)}const S=String(g).padStart(2,"0"),xe=String(f).padStart(2,"0"),fe=`${S}:${xe}`;c(fe),h(b)},[]);const l=X(),{isLoading:m}=O(mt),[p,w]=k.useState(""),y=u=>{let g=u.target.value;if(g>5e3){w("The value cannot exceed 5000ml");return}else w("");g.startsWith("0")&&g.length>1&&(g=parseFloat(g.substring(1))),r(g.toString())},j=()=>{l(De({waterVolume:t,date:i})).then(g=>{g.error||(e(),r(0))})},T=()=>{r(u=>Math.max(u-50,0))},D=()=>{const u=t+50,g=5e3;r(u<=g?u:g)};return o.jsx(o.Fragment,{children:o.jsxs(pt,{onClose:e,children:[o.jsxs(xt,{children:[o.jsx(ft,{children:"Add Water"}),o.jsx(gt,{children:"Choose a value:"}),o.jsx(U,{children:"Amount of water:"}),o.jsxs("div",{children:[o.jsx(K,{onClick:T,children:o.jsx(Z,{children:o.jsx("use",{href:`${$}#icon-minus`})})}),o.jsx(wt,{children:o.jsxs(bt,{children:[t," ml"]})}),o.jsx(K,{onClick:D,children:o.jsx(Z,{children:o.jsx("use",{href:`${$}#icon-plus`})})})]})]}),o.jsxs(yt,{children:[o.jsx(U,{children:"Recording time:"}),o.jsxs(kt,{value:i,onChange:u=>c(u.target.value),style:{width:"100%"},children:[o.jsx("option",{value:i,children:i},"current-time"),d.map(u=>o.jsx("option",{value:u,children:u},u))]})]}),o.jsxs("div",{children:[o.jsx("h3",{children:"Enter the value of the water used:"}),o.jsx(vt,{type:"number",value:t,onChange:y,onBlur:()=>r(u=>u||0||0),max:5e3}),p&&o.jsx(Mt,{children:p})]}),o.jsxs(jt,{children:[o.jsxs("span",{children:[t,"ml"]}),o.jsxs($t,{onClick:j,children:["Save ",m&&o.jsx(ht,{})]})]})]})})},Dt=()=>{const[e,n]=k.useState(!1),t=O(Ee),r=()=>{n(!e)},i=t.percent;return o.jsxs(et,{children:[o.jsxs(nt,{children:[o.jsx(tt,{children:"Today"}),o.jsxs(rt,{children:[o.jsx(ot,{children:o.jsx(at,{style:{width:`${Math.min(i,100)}%`}})}),o.jsxs(it,{children:[o.jsx(st,{children:"0%"}),i<100&&i>0&&o.jsxs(dt,{left:`${i}%`,children:[i,"%"]}),o.jsx(ct,{children:"100%"})]})]})]}),o.jsxs(lt,{onClick:r,children:[o.jsx("svg",{children:o.jsx("use",{href:`${$}#icon-outline`})}),"Add water"]}),e&&o.jsx(Q,{onClose:r,children:o.jsx(le,{})})]})},St=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`,Pt=s.div`
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
`,Ot=s.div`
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
`,Wt=s.h3`
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
`,Tt=s.div`
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
`,Bt=s.svg`
  width: 26px;
  height: 26px;
  fill: transparent;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,Ct=s.div`
  display: flex;
  gap: 18px;
  margin-right: 10px;
`,Ft=s.svg`
  width: 16px;
  height: 16px;
  stroke: ${a.colors.skyBlue};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.skyBlue};
  }
`,_t=s.svg`
  width: 16px;
  height: 16px;
  stroke: ${a.colors.brightRed};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.brightRed};
  }
`,Yt=s.button`
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
  max-width: 155px;

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
`,Nt=()=>{const e=Date.now(),t=new Date(e).toLocaleDateString(),[r,i]=k.useState(!1),c=X(),d=O(ce);k.useEffect(()=>{c(se({date:t}))},[c,t]);const h=()=>{i(!r)};return o.jsxs(o.Fragment,{children:[o.jsxs(St,{children:[o.jsx(Wt,{children:"Today"}),o.jsx(Pt,{children:d.map(l=>o.jsxs(Ot,{children:[o.jsxs(Tt,{children:[o.jsx(Bt,{children:o.jsx("use",{href:`${$}#icon-glass`})}),o.jsxs("h4",{children:[l.amount," ml"]}),o.jsxs("p",{children:[l.time,o.jsx("span",{children:" AM"})]})]}),o.jsxs(Ct,{children:[o.jsx(Ft,{children:o.jsx("use",{href:`${$}#icon-note`})}),o.jsx(_t,{children:o.jsx("use",{href:`${$}#icon-trash`})})]})]},l._id))}),o.jsxs(Yt,{onClick:h,children:[o.jsx("svg",{children:o.jsx("use",{href:`${$}#icon-increment`})}),"Add water"]})]}),r&&o.jsx(Q,{onClose:h,children:o.jsx(le,{})})]})};const zt=s.div`
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
`,Et=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,Lt=s.div`
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
`,ee=s.svg`
  width: 6px;
  height: 10px;
  background: transparent;
  fill: ${a.colors.blue};

  &:hover {
    fill: ${a.colors.orange};
  }
`,Ht=s.div`
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
`,At=s.button`
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
`,qt=s.div`
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
`,Rt=s.div`
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
`;function v(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}function W(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}const ue=6048e5,Xt=864e5;let Qt={};function E(){return Qt}function _(e,n){var h,l,m,p;const t=E(),r=(n==null?void 0:n.weekStartsOn)??((l=(h=n==null?void 0:n.locale)==null?void 0:h.options)==null?void 0:l.weekStartsOn)??t.weekStartsOn??((p=(m=t.locale)==null?void 0:m.options)==null?void 0:p.weekStartsOn)??0,i=v(e),c=i.getDay(),d=(c<r?7:0)+c-r;return i.setDate(i.getDate()-d),i.setHours(0,0,0,0),i}function z(e){return _(e,{weekStartsOn:1})}function he(e){const n=v(e),t=n.getFullYear(),r=W(e,0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const i=z(r),c=W(e,0);c.setFullYear(t,0,4),c.setHours(0,0,0,0);const d=z(c);return n.getTime()>=i.getTime()?t+1:n.getTime()>=d.getTime()?t:t-1}function te(e){const n=v(e);return n.setHours(0,0,0,0),n}function ne(e){const n=v(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function It(e,n){const t=te(e),r=te(n),i=+t-ne(t),c=+r-ne(r);return Math.round((i-c)/Xt)}function Gt(e){const n=he(e),t=W(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),z(t)}function Vt(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Jt(e){if(!Vt(e)&&typeof e!="number")return!1;const n=v(e);return!isNaN(Number(n))}function Ut(e){const n=v(e),t=W(e,0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}const Kt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Zt=(e,n,t)=>{let r;const i=Kt[e];return typeof i=="string"?r=i:n===1?r=i.one:r=i.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function q(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const en={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},tn={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},nn={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},rn={date:q({formats:en,defaultWidth:"full"}),time:q({formats:tn,defaultWidth:"full"}),dateTime:q({formats:nn,defaultWidth:"full"})},on={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},an=(e,n,t,r)=>on[e];function C(e){return(n,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let i;if(r==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,h=t!=null&&t.width?String(t.width):d;i=e.formattingValues[h]||e.formattingValues[d]}else{const d=e.defaultWidth,h=t!=null&&t.width?String(t.width):e.defaultWidth;i=e.values[h]||e.values[d]}const c=e.argumentCallback?e.argumentCallback(n):n;return i[c]}}const sn={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},cn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},dn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ln={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},un={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},hn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},mn=(e,n)=>{const t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},pn={ordinalNumber:mn,era:C({values:sn,defaultWidth:"wide"}),quarter:C({values:cn,defaultWidth:"wide",argumentCallback:e=>e-1}),month:C({values:dn,defaultWidth:"wide"}),day:C({values:ln,defaultWidth:"wide"}),dayPeriod:C({values:un,defaultWidth:"wide",formattingValues:hn,defaultFormattingWidth:"wide"})};function F(e){return(n,t={})=>{const r=t.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],c=n.match(i);if(!c)return null;const d=c[0],h=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(h)?fn(h,w=>w.test(d)):xn(h,w=>w.test(d));let m;m=e.valueCallback?e.valueCallback(l):l,m=t.valueCallback?t.valueCallback(m):m;const p=n.slice(d.length);return{value:m,rest:p}}}function xn(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function fn(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function gn(e){return(n,t={})=>{const r=n.match(e.matchPattern);if(!r)return null;const i=r[0],c=n.match(e.parsePattern);if(!c)return null;let d=e.valueCallback?e.valueCallback(c[0]):c[0];d=t.valueCallback?t.valueCallback(d):d;const h=n.slice(i.length);return{value:d,rest:h}}}const bn=/^(\d+)(th|st|nd|rd)?/i,wn=/\d+/i,yn={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},kn={any:[/^b/i,/^(a|c)/i]},vn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},jn={any:[/1/i,/2/i,/3/i,/4/i]},$n={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Mn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Dn={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Sn={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Pn={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},On={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Wn={ordinalNumber:gn({matchPattern:bn,parsePattern:wn,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:yn,defaultMatchWidth:"wide",parsePatterns:kn,defaultParseWidth:"any"}),quarter:F({matchPatterns:vn,defaultMatchWidth:"wide",parsePatterns:jn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:F({matchPatterns:$n,defaultMatchWidth:"wide",parsePatterns:Mn,defaultParseWidth:"any"}),day:F({matchPatterns:Dn,defaultMatchWidth:"wide",parsePatterns:Sn,defaultParseWidth:"any"}),dayPeriod:F({matchPatterns:Pn,defaultMatchWidth:"any",parsePatterns:On,defaultParseWidth:"any"})},Tn={code:"en-US",formatDistance:Zt,formatLong:rn,formatRelative:an,localize:pn,match:Wn,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Bn(e){const n=v(e);return It(n,Ut(n))+1}function Cn(e){const n=v(e),t=+z(n)-+Gt(n);return Math.round(t/ue)+1}function me(e,n){var p,w,y,j;const t=v(e),r=t.getFullYear(),i=E(),c=(n==null?void 0:n.firstWeekContainsDate)??((w=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:w.firstWeekContainsDate)??i.firstWeekContainsDate??((j=(y=i.locale)==null?void 0:y.options)==null?void 0:j.firstWeekContainsDate)??1,d=W(e,0);d.setFullYear(r+1,0,c),d.setHours(0,0,0,0);const h=_(d,n),l=W(e,0);l.setFullYear(r,0,c),l.setHours(0,0,0,0);const m=_(l,n);return t.getTime()>=h.getTime()?r+1:t.getTime()>=m.getTime()?r:r-1}function Fn(e,n){var h,l,m,p;const t=E(),r=(n==null?void 0:n.firstWeekContainsDate)??((l=(h=n==null?void 0:n.locale)==null?void 0:h.options)==null?void 0:l.firstWeekContainsDate)??t.firstWeekContainsDate??((p=(m=t.locale)==null?void 0:m.options)==null?void 0:p.firstWeekContainsDate)??1,i=me(e,n),c=W(e,0);return c.setFullYear(i,0,r),c.setHours(0,0,0,0),_(c,n)}function _n(e,n){const t=v(e),r=+_(t,n)-+Fn(t,n);return Math.round(r/ue)+1}function x(e,n){const t=e<0?"-":"",r=Math.abs(e).toString().padStart(n,"0");return t+r}const M={y(e,n){const t=e.getFullYear(),r=t>0?t:1-t;return x(n==="yy"?r%100:r,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):x(t+1,2)},d(e,n){return x(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return x(e.getHours()%12||12,n.length)},H(e,n){return x(e.getHours(),n.length)},m(e,n){return x(e.getMinutes(),n.length)},s(e,n){return x(e.getSeconds(),n.length)},S(e,n){const t=n.length,r=e.getMilliseconds(),i=Math.trunc(r*Math.pow(10,t-3));return x(i,n.length)}},B={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},re={G:function(e,n,t){const r=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const r=e.getFullYear(),i=r>0?r:1-r;return t.ordinalNumber(i,{unit:"year"})}return M.y(e,n)},Y:function(e,n,t,r){const i=me(e,r),c=i>0?i:1-i;if(n==="YY"){const d=c%100;return x(d,2)}return n==="Yo"?t.ordinalNumber(c,{unit:"year"}):x(c,n.length)},R:function(e,n){const t=he(e);return x(t,n.length)},u:function(e,n){const t=e.getFullYear();return x(t,n.length)},Q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return x(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return x(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,n,t){const r=e.getMonth();switch(n){case"M":case"MM":return M.M(e,n);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(e,n,t){const r=e.getMonth();switch(n){case"L":return String(r+1);case"LL":return x(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,t,r){const i=_n(e,r);return n==="wo"?t.ordinalNumber(i,{unit:"week"}):x(i,n.length)},I:function(e,n,t){const r=Cn(e);return n==="Io"?t.ordinalNumber(r,{unit:"week"}):x(r,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):M.d(e,n)},D:function(e,n,t){const r=Bn(e);return n==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):x(r,n.length)},E:function(e,n,t){const r=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(e,n,t,r){const i=e.getDay(),c=(i-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(c);case"ee":return x(c,2);case"eo":return t.ordinalNumber(c,{unit:"day"});case"eee":return t.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(i,{width:"short",context:"formatting"});case"eeee":default:return t.day(i,{width:"wide",context:"formatting"})}},c:function(e,n,t,r){const i=e.getDay(),c=(i-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(c);case"cc":return x(c,n.length);case"co":return t.ordinalNumber(c,{unit:"day"});case"ccc":return t.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(i,{width:"narrow",context:"standalone"});case"cccccc":return t.day(i,{width:"short",context:"standalone"});case"cccc":default:return t.day(i,{width:"wide",context:"standalone"})}},i:function(e,n,t){const r=e.getDay(),i=r===0?7:r;switch(n){case"i":return String(i);case"ii":return x(i,n.length);case"io":return t.ordinalNumber(i,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(e,n,t){const i=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,n,t){const r=e.getHours();let i;switch(r===12?i=B.noon:r===0?i=B.midnight:i=r/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,n,t){const r=e.getHours();let i;switch(r>=17?i=B.evening:r>=12?i=B.afternoon:r>=4?i=B.morning:i=B.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let r=e.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return M.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):M.H(e,n)},K:function(e,n,t){const r=e.getHours()%12;return n==="Ko"?t.ordinalNumber(r,{unit:"hour"}):x(r,n.length)},k:function(e,n,t){let r=e.getHours();return r===0&&(r=24),n==="ko"?t.ordinalNumber(r,{unit:"hour"}):x(r,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):M.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):M.s(e,n)},S:function(e,n){return M.S(e,n)},X:function(e,n,t){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(n){case"X":return ae(r);case"XXXX":case"XX":return P(r);case"XXXXX":case"XXX":default:return P(r,":")}},x:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"x":return ae(r);case"xxxx":case"xx":return P(r);case"xxxxx":case"xxx":default:return P(r,":")}},O:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+oe(r,":");case"OOOO":default:return"GMT"+P(r,":")}},z:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+oe(r,":");case"zzzz":default:return"GMT"+P(r,":")}},t:function(e,n,t){const r=Math.trunc(e.getTime()/1e3);return x(r,n.length)},T:function(e,n,t){const r=e.getTime();return x(r,n.length)}};function oe(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),i=Math.trunc(r/60),c=r%60;return c===0?t+String(i):t+String(i)+n+x(c,2)}function ae(e,n){return e%60===0?(e>0?"-":"+")+x(Math.abs(e)/60,2):P(e,n)}function P(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),i=x(Math.trunc(r/60),2),c=x(r%60,2);return t+i+n+c}const ie=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},pe=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},Yn=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],r=t[1],i=t[2];if(!i)return ie(e,n);let c;switch(r){case"P":c=n.dateTime({width:"short"});break;case"PP":c=n.dateTime({width:"medium"});break;case"PPP":c=n.dateTime({width:"long"});break;case"PPPP":default:c=n.dateTime({width:"full"});break}return c.replace("{{date}}",ie(r,n)).replace("{{time}}",pe(i,n))},Nn={p:pe,P:Yn},zn=/^D+$/,En=/^Y+$/,Ln=["D","DD","YY","YYYY"];function Hn(e){return zn.test(e)}function An(e){return En.test(e)}function qn(e,n,t){const r=Rn(e,n,t);if(console.warn(r),Ln.includes(e))throw new RangeError(r)}function Rn(e,n,t){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Xn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Qn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,In=/^'([^]*?)'?$/,Gn=/''/g,Vn=/[a-zA-Z]/;function Jn(e,n,t){var p,w,y,j,T,D,u,g;const r=E(),i=(t==null?void 0:t.locale)??r.locale??Tn,c=(t==null?void 0:t.firstWeekContainsDate)??((w=(p=t==null?void 0:t.locale)==null?void 0:p.options)==null?void 0:w.firstWeekContainsDate)??r.firstWeekContainsDate??((j=(y=r.locale)==null?void 0:y.options)==null?void 0:j.firstWeekContainsDate)??1,d=(t==null?void 0:t.weekStartsOn)??((D=(T=t==null?void 0:t.locale)==null?void 0:T.options)==null?void 0:D.weekStartsOn)??r.weekStartsOn??((g=(u=r.locale)==null?void 0:u.options)==null?void 0:g.weekStartsOn)??0,h=v(e);if(!Jt(h))throw new RangeError("Invalid time value");let l=n.match(Qn).map(f=>{const b=f[0];if(b==="p"||b==="P"){const S=Nn[b];return S(f,i.formatLong)}return f}).join("").match(Xn).map(f=>{if(f==="''")return{isToken:!1,value:"'"};const b=f[0];if(b==="'")return{isToken:!1,value:Un(f)};if(re[b])return{isToken:!0,value:f};if(b.match(Vn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");return{isToken:!1,value:f}});i.localize.preprocessor&&(l=i.localize.preprocessor(h,l));const m={firstWeekContainsDate:c,weekStartsOn:d,locale:i};return l.map(f=>{if(!f.isToken)return f.value;const b=f.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&An(b)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&Hn(b))&&qn(b,n,String(e));const S=re[b[0]];return S(h,b,i.localize,m)}).join("")}function Un(e){const n=e.match(In);return n?n[1].replace(Gn,"'"):e}const Kn=()=>{const e={date:"04.04.2024",daily_limit:2e3,water_entries:[{time:"9:41",amount:250,date:"02.04.2024"},{time:"19:58",amount:250,date:"02.04.2024"}],owner:"660ab1bf135b46797793af4f",count:5,percent:80},t=(e.daily_limit/1e3).toFixed(1)+" L",[r,i]=k.useState(new Date),[c,d]=k.useState(null),[h,l]=k.useState({x:0,y:0}),m=k.useRef(null),p=u=>{i(g=>{const f=new Date(g);return f.setMonth(f.getMonth()+u),f})},w=()=>{const g=new Date(r.getFullYear(),r.getMonth()+1,0).getDate(),f=[];for(let b=1;b<=g;b++)f.push(b);return f},y=()=>new Intl.DateTimeFormat("en",{month:"long"}).format(r),j=()=>r.getFullYear(),T=(u,g)=>{const f=new Date(r.getFullYear(),r.getMonth(),u);f<=new Date?(d(f),l({x:g.clientX,y:g.clientY})):alert("This date has not yet arrived. Please select a previous day.")},D=u=>{m.current&&!m.current.contains(u.target)&&d(null)};return k.useEffect(()=>(document.addEventListener("mousedown",D),()=>{document.removeEventListener("mousedown",D)}),[]),o.jsxs("div",{children:[o.jsxs(zt,{children:[o.jsxs(Et,{children:[o.jsx("h3",{children:"Month"}),o.jsxs(Lt,{children:[o.jsx(ee,{onClick:()=>p(-1),children:o.jsx("use",{href:`${$}#icon-left`})}),o.jsxs("span",{children:[y(),", ",j()]}),o.jsx(ee,{onClick:()=>p(1),children:o.jsx("use",{href:`${$}#icon-right`})})]})]}),o.jsx(Ht,{children:w().map(u=>{const g=new Date,f=new Date(r.getFullYear(),r.getMonth(),u),b=g.toDateString()===f.toDateString();return o.jsxs("div",{children:[o.jsx(At,{onClick:S=>T(u,S),className:b?"today":"",children:u}),o.jsxs(qt,{children:[e.percent,"%"]})]},u)})})]}),c&&o.jsxs(Rt,{ref:m,style:{top:h.y,left:h.x},children:[o.jsx("p",{children:o.jsx("span",{children:Jn(c,"d, MMMM")})}),o.jsxs("p",{children:["Daily norma: ",o.jsx("span",{children:t})]}),o.jsxs("p",{children:["Fulfillment of the daily norm: ",o.jsxs("span",{children:[e.percent,"%"]})]}),o.jsxs("p",{children:["How many servings of water: ",o.jsx("span",{children:e.count})]})]})]})},Zn=s.div`
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
`,er=s.div`
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
`,tr=s.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    max-width: 50%;
  }
`,nr=s.div`
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
`,or=()=>o.jsx(o.Fragment,{children:o.jsx(nr,{children:o.jsxs(Zn,{children:[o.jsxs(tr,{children:[o.jsx(Ze,{}),o.jsx(Dt,{})]}),o.jsxs(er,{children:[o.jsx(Nt,{}),o.jsx(Kn,{})]})]})})});export{or as default};
