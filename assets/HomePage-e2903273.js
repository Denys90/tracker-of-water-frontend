import{n as s,t as a,e as me,f as pe,g as F,r as b,h as xe,i as fe,k as ge,p as be,l as we,F as Y,j as o,c as ae,d as ye,M as R,s as $,E as ke}from"./index-bb96a9e1.js";const ve="/runners_of_code__frontend/assets/bottle_home_mobile@1x-0d6054eb.png",je="/runners_of_code__frontend/assets/bottle_home_mobile@2x-52eb5066.png",$e="/runners_of_code__frontend/assets/bottle_home_tablet@1x-c4bedac4.png",Me="/runners_of_code__frontend/assets/bottle_home_tablet@2x-867eb443.png",De="/runners_of_code__frontend/assets/bottle_home_desk-f67b46be.png",Se="/runners_of_code__frontend/assets/bottle_home_deskx2-acd9b153.png",Pe=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;
`,Oe=s.div`
  background-position: left bottom;
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
      url(${Se}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,We=s.h3`
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
`,Be=s.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`,Ce=s.button`
  padding: 0;
  background-color: ${a.colors.white};
  color: ${a.colors.paleBlue};
  border: none;
  font-size: 16px;
  &:hover {
    color: ${a.colors.orange};
  }
`,X=e=>e.waters.dailyNorm,Fe=e=>e.waters.reps,ie=e=>e.filter,_e=e=>e.waters;me([X,ie],(e,n)=>e.filter(t=>t.name.toLowerCase().includes(n.toLowerCase())));const N=()=>{const e=pe(),n=F(X),t=F(Fe),r=F(ie),i=b.useCallback(d=>e(xe(d)),[e]),c=b.useCallback(d=>e(fe(d)),[e]),l=b.useCallback(d=>e(ge(d)),[e]),m=b.useCallback(d=>e(be(d)),[e]),f=b.useCallback(d=>e(we(d)),[e]);return{dailyNorm:n,reps:t,filter:r,addDailyNorma:c,deleteReps:l,patchWater:m,addOneDrink:f,createWater:i}},Ye=s.h2`
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 24px;
`,Ne=s.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  line-height: 1.2;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    flex-direction: row;
    gap: 24px;
  }
`,Q=s.p`
  font-size: 16px;
`,I=s.span`
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
`,Le=s.span`
  color: ${a.colors.blue};
`,He=s.div`
  margin-bottom: 24px;
`,qe=s.h3`
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
`,L=s.label``,Re=s.div`
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
`,q=s(Y)`
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
`,Xe=s.button`
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
`,Qe=s.div`
  width: 280px;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    min-width: 704px;
  }

  @media (min-width: ${a.breakpoint.desktop}) {
    min-width: 592px;
  }
`;function Ie({toggleModal:e}){const{addDailyNorma:n}=N(),t=d=>{const{gender:u,weight:h,activityHours:w}=d;if(u&&h&&w){if(u==="man")return parseFloat(h)*.04+parseFloat(w)*.6;if(u==="woman")return parseFloat(h)*.03+parseFloat(w)*.4}return null},r={gender:"man",weight:"",activityHours:"",dailyNorma:""},i=new Date,c=String(i.getDate()).padStart(2,"0"),l=String(i.getMonth()+1).padStart(2,"0"),m=String(i.getFullYear()),f=`${c}.${l}.${m}`;return o.jsxs(Qe,{children:[o.jsx(Ye,{children:"My daily norma"}),o.jsx(ae,{initialValues:r,onSubmit:d=>{const h={daily_limit:d.dailyNorma*1e3,date:f};console.log("Form dailyNorma:",h),n(h),e()},children:({errors:d,touched:u,values:h,setFieldValue:w})=>o.jsxs(ye,{children:[o.jsxs(Ne,{children:[o.jsxs(Q,{children:["For girl:"," ",o.jsx(I,{children:"V=(M*0,03) + (T*0,4)"})]}),o.jsxs(Q,{children:["For man:"," ",o.jsx(I,{children:"V=(M*0,04) + (T*0,6)"})]})]}),o.jsx(ze,{children:o.jsxs(Ee,{children:[o.jsx(Le,{children:"* "}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),o.jsxs(He,{children:[o.jsx(qe,{children:"Calculate your rate:"}),o.jsxs(Ae,{children:[o.jsxs("label",{children:[o.jsx(Y,{type:"radio",name:"gender",value:"man",onChange:()=>w("gender","man")}),"For man"]}),o.jsxs("label",{children:[o.jsx(Y,{type:"radio",name:"gender",value:"woman",onChange:()=>w("gender","woman")}),"For woman"]})]}),d.gender&&u.gender&&o.jsx("div",{children:d.gender})]}),o.jsx(G,{children:o.jsxs(L,{children:[o.jsx(H,{children:"Your weight in kilograms:"}),o.jsx(q,{type:"number",name:"weight",placeholder:"0"}),d.weight&&u.weight&&o.jsx("div",{children:d.weight})]})}),o.jsxs(G,{children:[o.jsxs(H,{children:[" ","The time of active participation in sports or other activities with a high physical. load in hours:"]}),o.jsxs(L,{children:[o.jsx(q,{type:"number",name:"activityHours",placeholder:"0"}),d.activityHours&&u.activityHours&&o.jsx("div",{children:d.activityHours})]})]}),o.jsxs(Re,{children:["Your recommended water intake per day is:",o.jsxs("span",{children:[t(h)?parseFloat(t(h)).toFixed(2):0,"L"]})]}),o.jsx(H,{children:"Write down how much water you will drink:s"}),o.jsx(L,{children:o.jsx(q,{type:"number",name:"dailyNorma",placeholder:"0"})}),o.jsx(Xe,{type:"submit",children:"Save"})]})})]})}const Ge=()=>{const[e,n]=b.useState(!1),t=()=>{n(!e)},i=(F(X)/1e3).toFixed(1)+" L";return o.jsxs(Pe,{children:[o.jsxs(Te,{children:[o.jsx(We,{children:"My daily norma"}),o.jsxs(Be,{children:[o.jsx("p",{children:i}),o.jsx(Ce,{type:"button",onClick:t,children:"Edit"})]})]}),o.jsx(Oe,{}),e&&o.jsx(R,{onClose:t,children:o.jsx(Ie,{toggleModal:t})})]})},Ve=s.div`
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
  position: absolute;
  margin: 50vw;
  margin-top: 30vh;
  transform: translate(-50%, -50%);
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
`,st=()=>o.jsx(it,{}),ct=s.div`
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
`,V=s.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${a.colors.black};
  margin-bottom: 12px;
`,dt=s.div`
  margin-bottom: 24px;

  div {
    display: flex;
    align-items: center;
  }
`,lt=s.h2`
  margin-bottom: 24px;
  color: ${a.colors.black};
  font-size: 26px;
  line-height: 123%;
  font-weight: 500;
`,ut=s.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  margin-bottom: 16px;
`,ht=s.p`
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
`,mt=s.div`
  background: ${a.colors.paleBlue};
  border-radius: 40px;
  padding: 6px 10px;
  width: 92px;
  height: 36px;
  margin-left: 10px;
  margin-right: 10px;
`,J=s.button`
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
`,U=s.svg`
  width: 24px;
  height: 24px;
  stroke: ${a.colors.blue};
  fill: ${a.colors.blue};
`,pt=s.div`
  margin-bottom: 24px;
`,xt=s.select`
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
`,ft=s(Y)`
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
`,gt=s.div`
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
`,bt=s.button`
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
`;s.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;const se=()=>{const[e,n]=b.useState(""),[t,r]=b.useState([]),{addWater:i}=N(),[c,l]=b.useState(0);b.useEffect(()=>{const u=new Date,h=u.getHours(),w=u.getMinutes(),j=[];for(let k=h;k<24;k++)for(let p=0;p<60;p+=5){if(k===h&&p<w)continue;const g=String(k).padStart(2,"0"),S=String(p).padStart(2,"0"),he=`${g}:${S}`;j.push(he)}const W=String(h).padStart(2,"0"),D=String(w).padStart(2,"0"),y=`${W}:${D}`;n(y),r(j)},[]);const m=u=>{let h="";return u>5e3&&(h="The value cannot exceed 5000ml"),h},f=()=>{l(u=>Math.max(u-50,0))},d=()=>{const u=c+50,h=5e3;l(u<=h?u:h)};return o.jsx(ae,{initialValues:{amount:0,time:e},onSubmit:u=>{const h={waterVolume:c,date:u.time};console.log(h),i(h),l(0),n("")},children:({isSubmitting:u})=>o.jsxs(ct,{children:[o.jsxs(dt,{children:[o.jsx(lt,{children:"Add Water"}),o.jsx(ut,{children:"Choose a value:"}),o.jsx(V,{children:"Amount of water:"}),o.jsxs("div",{children:[o.jsx(J,{type:"button",onClick:f,children:o.jsx(U,{children:o.jsx("use",{href:`${$}#icon-minus`})})}),o.jsx(mt,{children:o.jsxs(ht,{children:[c," ml"]})}),o.jsx(J,{type:"button",onClick:d,children:o.jsx(U,{children:o.jsx("use",{href:`${$}#icon-plus`})})})]})]}),o.jsxs(pt,{children:[o.jsx(V,{children:"Recording time:"}),o.jsxs(xt,{name:"time",style:{width:"100%"},children:[o.jsx("option",{value:e,children:e},"current-time"),t.map(h=>o.jsx("option",{value:h,children:h},h))]})]}),o.jsxs("div",{children:[o.jsx("h3",{children:"Enter the value of the water used:"}),o.jsx(ft,{type:"number",name:"amount",validate:m,max:5e3,value:c}),o.jsx(ke,{name:"amount",component:"div"})]}),o.jsxs(gt,{children:[o.jsxs("span",{children:[c,"ml"]}),o.jsxs(bt,{type:"submit",children:["Save ",u&&o.jsx(st,{})]})]})]})})},wt=()=>{const[e,n]=b.useState(!1),t=F(_e),r=()=>{n(!e)},i=t.percent;return o.jsxs(Ve,{children:[o.jsxs(Ue,{children:[o.jsx(Je,{children:"Today"}),o.jsxs(Ke,{children:[o.jsx(Ze,{children:o.jsx(et,{style:{width:`${Math.min(i,100)}%`}})}),o.jsxs(tt,{children:[o.jsx(nt,{children:"0%"}),i<100&&i>0&&o.jsxs(ot,{left:`${i}%`,children:[i,"%"]}),o.jsx(rt,{children:"100%"})]})]})]}),o.jsxs(at,{onClick:r,children:[o.jsx("svg",{children:o.jsx("use",{href:`${$}#icon-outline`})}),"Add water"]}),e&&o.jsx(R,{onClose:r,children:o.jsx(se,{})})]})},yt=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`,kt=s.div`
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
`,vt=s.div`
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
`,jt=s.h3`
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
`,$t=s.div`
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
`,Mt=s.svg`
  width: 26px;
  height: 26px;
  fill: transparent;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,Dt=s.div`
  display: flex;
  gap: 18px;
  margin-right: 10px;
`,St=s.svg`
  width: 16px;
  height: 16px;
  stroke: ${a.colors.skyBlue};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.skyBlue};
  }
`,Pt=s.svg`
  width: 16px;
  height: 16px;
  stroke: ${a.colors.brightRed};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.brightRed};
  }
`,Ot=s.button`
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
`,Wt=()=>{const{createWater:e}=N(),n=Date.now(),r=new Date(n).toLocaleDateString(),[i,c]=b.useState(!1),{reps:l}=N();b.useEffect(()=>{e({date:r})},[e,r]);const m=()=>{c(!i)};return o.jsxs(o.Fragment,{children:[o.jsxs(yt,{children:[o.jsx(jt,{children:"Today"}),o.jsx(kt,{children:l.map(f=>o.jsxs(vt,{children:[o.jsxs($t,{children:[o.jsx(Mt,{children:o.jsx("use",{href:`${$}#icon-glass`})}),o.jsxs("h4",{children:[f.amount," ml"]}),o.jsxs("p",{children:[f.time,o.jsx("span",{children:" AM"})]})]}),o.jsxs(Dt,{children:[o.jsx(St,{children:o.jsx("use",{href:`${$}#icon-note`})}),o.jsx(Pt,{children:o.jsx("use",{href:`${$}#icon-trash`})})]})]},f._id))}),o.jsxs(Ot,{onClick:m,children:[o.jsx("svg",{children:o.jsx("use",{href:`${$}#icon-increment`})}),"Add water"]})]}),i&&o.jsx(R,{onClose:m,children:o.jsx(se,{})})]})};const Tt=s.div`
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
`,Bt=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,Ct=s.div`
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
`,K=s.svg`
  width: 6px;
  height: 10px;
  background: transparent;
  fill: ${a.colors.blue};

  &:hover {
    fill: ${a.colors.orange};
  }
`,Ft=s.div`
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
`,_t=s.button`
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
`,Yt=s.div`
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
`,Nt=s.div`
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
`;function v(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}function O(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}const ce=6048e5,zt=864e5;let Et={};function E(){return Et}function _(e,n){var m,f,d,u;const t=E(),r=(n==null?void 0:n.weekStartsOn)??((f=(m=n==null?void 0:n.locale)==null?void 0:m.options)==null?void 0:f.weekStartsOn)??t.weekStartsOn??((u=(d=t.locale)==null?void 0:d.options)==null?void 0:u.weekStartsOn)??0,i=v(e),c=i.getDay(),l=(c<r?7:0)+c-r;return i.setDate(i.getDate()-l),i.setHours(0,0,0,0),i}function z(e){return _(e,{weekStartsOn:1})}function de(e){const n=v(e),t=n.getFullYear(),r=O(e,0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const i=z(r),c=O(e,0);c.setFullYear(t,0,4),c.setHours(0,0,0,0);const l=z(c);return n.getTime()>=i.getTime()?t+1:n.getTime()>=l.getTime()?t:t-1}function Z(e){const n=v(e);return n.setHours(0,0,0,0),n}function ee(e){const n=v(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function Lt(e,n){const t=Z(e),r=Z(n),i=+t-ee(t),c=+r-ee(r);return Math.round((i-c)/zt)}function Ht(e){const n=de(e),t=O(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),z(t)}function qt(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function At(e){if(!qt(e)&&typeof e!="number")return!1;const n=v(e);return!isNaN(Number(n))}function Rt(e){const n=v(e),t=O(e,0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}const Xt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Qt=(e,n,t)=>{let r;const i=Xt[e];return typeof i=="string"?r=i:n===1?r=i.one:r=i.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function A(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const It={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Gt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Vt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Jt={date:A({formats:It,defaultWidth:"full"}),time:A({formats:Gt,defaultWidth:"full"}),dateTime:A({formats:Vt,defaultWidth:"full"})},Ut={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Kt=(e,n,t,r)=>Ut[e];function B(e){return(n,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let i;if(r==="formatting"&&e.formattingValues){const l=e.defaultFormattingWidth||e.defaultWidth,m=t!=null&&t.width?String(t.width):l;i=e.formattingValues[m]||e.formattingValues[l]}else{const l=e.defaultWidth,m=t!=null&&t.width?String(t.width):e.defaultWidth;i=e.values[m]||e.values[l]}const c=e.argumentCallback?e.argumentCallback(n):n;return i[c]}}const Zt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},en={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},tn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},nn={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},rn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},on={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},an=(e,n)=>{const t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},sn={ordinalNumber:an,era:B({values:Zt,defaultWidth:"wide"}),quarter:B({values:en,defaultWidth:"wide",argumentCallback:e=>e-1}),month:B({values:tn,defaultWidth:"wide"}),day:B({values:nn,defaultWidth:"wide"}),dayPeriod:B({values:rn,defaultWidth:"wide",formattingValues:on,defaultFormattingWidth:"wide"})};function C(e){return(n,t={})=>{const r=t.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],c=n.match(i);if(!c)return null;const l=c[0],m=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],f=Array.isArray(m)?dn(m,h=>h.test(l)):cn(m,h=>h.test(l));let d;d=e.valueCallback?e.valueCallback(f):f,d=t.valueCallback?t.valueCallback(d):d;const u=n.slice(l.length);return{value:d,rest:u}}}function cn(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function dn(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function ln(e){return(n,t={})=>{const r=n.match(e.matchPattern);if(!r)return null;const i=r[0],c=n.match(e.parsePattern);if(!c)return null;let l=e.valueCallback?e.valueCallback(c[0]):c[0];l=t.valueCallback?t.valueCallback(l):l;const m=n.slice(i.length);return{value:l,rest:m}}}const un=/^(\d+)(th|st|nd|rd)?/i,hn=/\d+/i,mn={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},pn={any:[/^b/i,/^(a|c)/i]},xn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},fn={any:[/1/i,/2/i,/3/i,/4/i]},gn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},bn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},wn={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},yn={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},kn={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},vn={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},jn={ordinalNumber:ln({matchPattern:un,parsePattern:hn,valueCallback:e=>parseInt(e,10)}),era:C({matchPatterns:mn,defaultMatchWidth:"wide",parsePatterns:pn,defaultParseWidth:"any"}),quarter:C({matchPatterns:xn,defaultMatchWidth:"wide",parsePatterns:fn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:C({matchPatterns:gn,defaultMatchWidth:"wide",parsePatterns:bn,defaultParseWidth:"any"}),day:C({matchPatterns:wn,defaultMatchWidth:"wide",parsePatterns:yn,defaultParseWidth:"any"}),dayPeriod:C({matchPatterns:kn,defaultMatchWidth:"any",parsePatterns:vn,defaultParseWidth:"any"})},$n={code:"en-US",formatDistance:Qt,formatLong:Jt,formatRelative:Kt,localize:sn,match:jn,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Mn(e){const n=v(e);return Lt(n,Rt(n))+1}function Dn(e){const n=v(e),t=+z(n)-+Ht(n);return Math.round(t/ce)+1}function le(e,n){var u,h,w,j;const t=v(e),r=t.getFullYear(),i=E(),c=(n==null?void 0:n.firstWeekContainsDate)??((h=(u=n==null?void 0:n.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??i.firstWeekContainsDate??((j=(w=i.locale)==null?void 0:w.options)==null?void 0:j.firstWeekContainsDate)??1,l=O(e,0);l.setFullYear(r+1,0,c),l.setHours(0,0,0,0);const m=_(l,n),f=O(e,0);f.setFullYear(r,0,c),f.setHours(0,0,0,0);const d=_(f,n);return t.getTime()>=m.getTime()?r+1:t.getTime()>=d.getTime()?r:r-1}function Sn(e,n){var m,f,d,u;const t=E(),r=(n==null?void 0:n.firstWeekContainsDate)??((f=(m=n==null?void 0:n.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??t.firstWeekContainsDate??((u=(d=t.locale)==null?void 0:d.options)==null?void 0:u.firstWeekContainsDate)??1,i=le(e,n),c=O(e,0);return c.setFullYear(i,0,r),c.setHours(0,0,0,0),_(c,n)}function Pn(e,n){const t=v(e),r=+_(t,n)-+Sn(t,n);return Math.round(r/ce)+1}function x(e,n){const t=e<0?"-":"",r=Math.abs(e).toString().padStart(n,"0");return t+r}const M={y(e,n){const t=e.getFullYear(),r=t>0?t:1-t;return x(n==="yy"?r%100:r,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):x(t+1,2)},d(e,n){return x(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return x(e.getHours()%12||12,n.length)},H(e,n){return x(e.getHours(),n.length)},m(e,n){return x(e.getMinutes(),n.length)},s(e,n){return x(e.getSeconds(),n.length)},S(e,n){const t=n.length,r=e.getMilliseconds(),i=Math.trunc(r*Math.pow(10,t-3));return x(i,n.length)}},T={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},te={G:function(e,n,t){const r=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const r=e.getFullYear(),i=r>0?r:1-r;return t.ordinalNumber(i,{unit:"year"})}return M.y(e,n)},Y:function(e,n,t,r){const i=le(e,r),c=i>0?i:1-i;if(n==="YY"){const l=c%100;return x(l,2)}return n==="Yo"?t.ordinalNumber(c,{unit:"year"}):x(c,n.length)},R:function(e,n){const t=de(e);return x(t,n.length)},u:function(e,n){const t=e.getFullYear();return x(t,n.length)},Q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return x(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return x(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,n,t){const r=e.getMonth();switch(n){case"M":case"MM":return M.M(e,n);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(e,n,t){const r=e.getMonth();switch(n){case"L":return String(r+1);case"LL":return x(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,t,r){const i=Pn(e,r);return n==="wo"?t.ordinalNumber(i,{unit:"week"}):x(i,n.length)},I:function(e,n,t){const r=Dn(e);return n==="Io"?t.ordinalNumber(r,{unit:"week"}):x(r,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):M.d(e,n)},D:function(e,n,t){const r=Mn(e);return n==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):x(r,n.length)},E:function(e,n,t){const r=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(e,n,t,r){const i=e.getDay(),c=(i-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(c);case"ee":return x(c,2);case"eo":return t.ordinalNumber(c,{unit:"day"});case"eee":return t.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(i,{width:"short",context:"formatting"});case"eeee":default:return t.day(i,{width:"wide",context:"formatting"})}},c:function(e,n,t,r){const i=e.getDay(),c=(i-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(c);case"cc":return x(c,n.length);case"co":return t.ordinalNumber(c,{unit:"day"});case"ccc":return t.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(i,{width:"narrow",context:"standalone"});case"cccccc":return t.day(i,{width:"short",context:"standalone"});case"cccc":default:return t.day(i,{width:"wide",context:"standalone"})}},i:function(e,n,t){const r=e.getDay(),i=r===0?7:r;switch(n){case"i":return String(i);case"ii":return x(i,n.length);case"io":return t.ordinalNumber(i,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(e,n,t){const i=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,n,t){const r=e.getHours();let i;switch(r===12?i=T.noon:r===0?i=T.midnight:i=r/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,n,t){const r=e.getHours();let i;switch(r>=17?i=T.evening:r>=12?i=T.afternoon:r>=4?i=T.morning:i=T.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let r=e.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return M.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):M.H(e,n)},K:function(e,n,t){const r=e.getHours()%12;return n==="Ko"?t.ordinalNumber(r,{unit:"hour"}):x(r,n.length)},k:function(e,n,t){let r=e.getHours();return r===0&&(r=24),n==="ko"?t.ordinalNumber(r,{unit:"hour"}):x(r,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):M.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):M.s(e,n)},S:function(e,n){return M.S(e,n)},X:function(e,n,t){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(n){case"X":return re(r);case"XXXX":case"XX":return P(r);case"XXXXX":case"XXX":default:return P(r,":")}},x:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"x":return re(r);case"xxxx":case"xx":return P(r);case"xxxxx":case"xxx":default:return P(r,":")}},O:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+ne(r,":");case"OOOO":default:return"GMT"+P(r,":")}},z:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+ne(r,":");case"zzzz":default:return"GMT"+P(r,":")}},t:function(e,n,t){const r=Math.trunc(e.getTime()/1e3);return x(r,n.length)},T:function(e,n,t){const r=e.getTime();return x(r,n.length)}};function ne(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),i=Math.trunc(r/60),c=r%60;return c===0?t+String(i):t+String(i)+n+x(c,2)}function re(e,n){return e%60===0?(e>0?"-":"+")+x(Math.abs(e)/60,2):P(e,n)}function P(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),i=x(Math.trunc(r/60),2),c=x(r%60,2);return t+i+n+c}const oe=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},ue=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},On=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],r=t[1],i=t[2];if(!i)return oe(e,n);let c;switch(r){case"P":c=n.dateTime({width:"short"});break;case"PP":c=n.dateTime({width:"medium"});break;case"PPP":c=n.dateTime({width:"long"});break;case"PPPP":default:c=n.dateTime({width:"full"});break}return c.replace("{{date}}",oe(r,n)).replace("{{time}}",ue(i,n))},Wn={p:ue,P:On},Tn=/^D+$/,Bn=/^Y+$/,Cn=["D","DD","YY","YYYY"];function Fn(e){return Tn.test(e)}function _n(e){return Bn.test(e)}function Yn(e,n,t){const r=Nn(e,n,t);if(console.warn(r),Cn.includes(e))throw new RangeError(r)}function Nn(e,n,t){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const zn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,En=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ln=/^'([^]*?)'?$/,Hn=/''/g,qn=/[a-zA-Z]/;function An(e,n,t){var u,h,w,j,W,D,y,k;const r=E(),i=(t==null?void 0:t.locale)??r.locale??$n,c=(t==null?void 0:t.firstWeekContainsDate)??((h=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??r.firstWeekContainsDate??((j=(w=r.locale)==null?void 0:w.options)==null?void 0:j.firstWeekContainsDate)??1,l=(t==null?void 0:t.weekStartsOn)??((D=(W=t==null?void 0:t.locale)==null?void 0:W.options)==null?void 0:D.weekStartsOn)??r.weekStartsOn??((k=(y=r.locale)==null?void 0:y.options)==null?void 0:k.weekStartsOn)??0,m=v(e);if(!At(m))throw new RangeError("Invalid time value");let f=n.match(En).map(p=>{const g=p[0];if(g==="p"||g==="P"){const S=Wn[g];return S(p,i.formatLong)}return p}).join("").match(zn).map(p=>{if(p==="''")return{isToken:!1,value:"'"};const g=p[0];if(g==="'")return{isToken:!1,value:Rn(p)};if(te[g])return{isToken:!0,value:p};if(g.match(qn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+g+"`");return{isToken:!1,value:p}});i.localize.preprocessor&&(f=i.localize.preprocessor(m,f));const d={firstWeekContainsDate:c,weekStartsOn:l,locale:i};return f.map(p=>{if(!p.isToken)return p.value;const g=p.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&_n(g)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&Fn(g))&&Yn(g,n,String(e));const S=te[g[0]];return S(m,g,i.localize,d)}).join("")}function Rn(e){const n=e.match(Ln);return n?n[1].replace(Hn,"'"):e}const Xn=()=>{const e={date:"04.04.2024",daily_limit:2e3,water_entries:[{time:"9:41",amount:250,date:"02.04.2024"},{time:"19:58",amount:250,date:"02.04.2024"}],owner:"660ab1bf135b46797793af4f",count:5,percent:80},t=(e.daily_limit/1e3).toFixed(1)+" L",[r,i]=b.useState(new Date),[c,l]=b.useState(null),[m,f]=b.useState({x:0,y:0}),d=b.useRef(null),u=y=>{i(k=>{const p=new Date(k);return p.setMonth(p.getMonth()+y),p})},h=()=>{const k=new Date(r.getFullYear(),r.getMonth()+1,0).getDate(),p=[];for(let g=1;g<=k;g++)p.push(g);return p},w=()=>new Intl.DateTimeFormat("en",{month:"long"}).format(r),j=()=>r.getFullYear(),W=(y,k)=>{const p=new Date(r.getFullYear(),r.getMonth(),y);p<=new Date?(l(p),f({x:k.clientX,y:k.clientY})):alert("This date has not yet arrived. Please select a previous day.")},D=y=>{d.current&&!d.current.contains(y.target)&&l(null)};return b.useEffect(()=>(document.addEventListener("mousedown",D),()=>{document.removeEventListener("mousedown",D)}),[]),o.jsxs("div",{children:[o.jsxs(Tt,{children:[o.jsxs(Bt,{children:[o.jsx("h3",{children:"Month"}),o.jsxs(Ct,{children:[o.jsx(K,{onClick:()=>u(-1),children:o.jsx("use",{href:`${$}#icon-left`})}),o.jsxs("span",{children:[w(),", ",j()]}),o.jsx(K,{onClick:()=>u(1),children:o.jsx("use",{href:`${$}#icon-right`})})]})]}),o.jsx(Ft,{children:h().map(y=>{const k=new Date,p=new Date(r.getFullYear(),r.getMonth(),y),g=k.toDateString()===p.toDateString();return o.jsxs("div",{children:[o.jsx(_t,{onClick:S=>W(y,S),className:g?"today":"",children:y}),o.jsxs(Yt,{children:[e.percent,"%"]})]},y)})})]}),c&&o.jsxs(Nt,{ref:d,style:{top:m.y,left:m.x},children:[o.jsx("p",{children:o.jsx("span",{children:An(c,"d, MMMM")})}),o.jsxs("p",{children:["Daily norma: ",o.jsx("span",{children:t})]}),o.jsxs("p",{children:["Fulfillment of the daily norm: ",o.jsxs("span",{children:[e.percent,"%"]})]}),o.jsxs("p",{children:["How many servings of water: ",o.jsx("span",{children:e.count})]})]})]})},Qn=s.div`
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
`,In=s.div`
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
`,Gn=s.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    max-width: 50%;
  }
`,Vn=s.div`
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
`,Un=()=>o.jsx(o.Fragment,{children:o.jsx(Vn,{children:o.jsxs(Qn,{children:[o.jsxs(Gn,{children:[o.jsx(Ge,{}),o.jsx(wt,{})]}),o.jsxs(In,{children:[o.jsx(Wt,{}),o.jsx(Xn,{})]})]})})});export{Un as default};
