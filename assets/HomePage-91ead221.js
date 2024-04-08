import{n as s,t as a,e as we,f as ye,g as B,r as y,h as ke,i as ve,k as je,p as $e,l as Me,F as E,j as o,c as se,d as De,M as Q,s as $,E as Se}from"./index-63df0ef7.js";const Pe="/runners_of_code__frontend/assets/bottle_home_mobile@1x-0d6054eb.png",Oe="/runners_of_code__frontend/assets/bottle_home_mobile@2x-52eb5066.png",We="/runners_of_code__frontend/assets/bottle_home_tablet@1x-c4bedac4.png",Te="/runners_of_code__frontend/assets/bottle_home_tablet@2x-867eb443.png",Ce="/runners_of_code__frontend/assets/bottle_home_desk-f67b46be.png",Fe="/runners_of_code__frontend/assets/bottle_home_deskx2-acd9b153.png",Be=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;
`,_e=s.div`
  background-position: left bottom;
  background-image: -webkit-image-set(
    url(${Pe}) 1x,
    url(${Oe}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;
  z-index: -1;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${We}) 1x,
      url(${Te}) 2x
    );
    height: 386px;
    margin-top: -114px;
    background-position: center top;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Ce}) 1x,
      url(${Fe}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,Ye=s.h3`
  font-size: 18px;
  line-height: 1.33;
  font-family: 'Roboto-Bold', sans-serif;
  margin-bottom: 12px;
  color: ${a.colors.black};
`,Ne=s.div`
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
`,Ee=s.div`
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
`,I=e=>e.waters.dailyNorm,He=e=>e.waters.reps,ce=e=>e.filter,Le=e=>e.waters;we([I,ce],(e,n)=>e.filter(t=>t.name.toLowerCase().includes(n.toLowerCase())));const z=()=>{const e=ye(),n=B(I),t=B(He),r=B(ce),i=y.useCallback(d=>e(ke(d)),[e]),c=y.useCallback(d=>e(ve(d)),[e]),l=y.useCallback(d=>e(je(d)),[e]),u=y.useCallback(d=>e($e(d)),[e]),p=y.useCallback(d=>e(Me(d)),[e]);return{dailyNorm:n,reps:t,filter:r,addDailyNorma:c,deleteReps:l,patchWater:u,addOneDrink:p,createWater:i}},qe=s.h2`
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
`,Re=s.div`
  border: 1px solid ${a.colors.paleBlue};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  margin-bottom: 24px;
  width: auto;
`,Xe=s.p`
  color: ${a.colors.secondText};
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`,Qe=s.span`
  color: ${a.colors.blue};
`,Ie=s.div`
  margin-bottom: 24px;
`,Ge=s.h3`
  margin-bottom: 16px;
  margin-top: 0;
`,Ve=s.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
`,J=s.div`
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
`,q=s.label``,Je=s.div`
  font-size: 18px;
  padding-bottom: 26px;
  span {
    padding-left: 5px;
    color: ${a.colors.blue};
    font-weight: bold;
  }
`,A=s.label`
  display: block;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 8px;
  color: ${a.colors.black};
`,R=s(E)`
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
`,Ue=s.button`
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
`,Ke=s.div`
  width: 280px;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    min-width: 704px;
  }

  @media (min-width: ${a.breakpoint.desktop}) {
    min-width: 592px;
  }
`;function Ze({toggleModal:e}){const{addDailyNorma:n}=z(),t=d=>{const{gender:f,weight:b,activityHours:k}=d;if(f&&b&&k){if(f==="man")return parseFloat(b)*.04+parseFloat(k)*.6;if(f==="woman")return parseFloat(b)*.03+parseFloat(k)*.4}return null},r={gender:"man",weight:"",activityHours:"",dailyNorma:""},i=new Date,c=String(i.getDate()).padStart(2,"0"),l=String(i.getMonth()+1).padStart(2,"0"),u=String(i.getFullYear()),p=`${c}.${l}.${u}`;return o.jsxs(Ke,{children:[o.jsx(qe,{children:"My daily norma"}),o.jsx(se,{initialValues:r,onSubmit:d=>{const b={daily_limit:d.dailyNorma*1e3,date:p};console.log("Form dailyNorma:",b),n(b),e()},children:({errors:d,touched:f,values:b,setFieldValue:k})=>o.jsxs(De,{children:[o.jsxs(Ae,{children:[o.jsxs(G,{children:["For girl:"," ",o.jsx(V,{children:"V=(M*0,03) + (T*0,4)"})]}),o.jsxs(G,{children:["For man:"," ",o.jsx(V,{children:"V=(M*0,04) + (T*0,6)"})]})]}),o.jsx(Re,{children:o.jsxs(Xe,{children:[o.jsx(Qe,{children:"* "}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),o.jsxs(Ie,{children:[o.jsx(Ge,{children:"Calculate your rate:"}),o.jsxs(Ve,{children:[o.jsxs("label",{children:[o.jsx(E,{type:"radio",name:"gender",value:"man",onChange:()=>k("gender","man")}),"For man"]}),o.jsxs("label",{children:[o.jsx(E,{type:"radio",name:"gender",value:"woman",onChange:()=>k("gender","woman")}),"For woman"]})]}),d.gender&&f.gender&&o.jsx("div",{children:d.gender})]}),o.jsx(J,{children:o.jsxs(q,{children:[o.jsx(A,{children:"Your weight in kilograms:"}),o.jsx(R,{type:"number",name:"weight",placeholder:"0"}),d.weight&&f.weight&&o.jsx("div",{children:d.weight})]})}),o.jsxs(J,{children:[o.jsxs(A,{children:[" ","The time of active participation in sports or other activities with a high physical. load in hours:"]}),o.jsxs(q,{children:[o.jsx(R,{type:"number",name:"activityHours",placeholder:"0"}),d.activityHours&&f.activityHours&&o.jsx("div",{children:d.activityHours})]})]}),o.jsxs(Je,{children:["Your recommended water intake per day is:",o.jsxs("span",{children:[t(b)?parseFloat(t(b)).toFixed(2):0,"L"]})]}),o.jsx(A,{children:"Write down how much water you will drink:s"}),o.jsx(q,{children:o.jsx(R,{type:"number",name:"dailyNorma",placeholder:"0"})}),o.jsx(Ue,{type:"submit",children:"Save"})]})})]})}const et=()=>{const[e,n]=y.useState(!1),t=()=>{n(!e)},i=(B(I)/1e3).toFixed(1)+" L";return o.jsxs(Be,{children:[o.jsxs(Ne,{children:[o.jsx(Ye,{children:"My daily norma"}),o.jsxs(Ee,{children:[o.jsx("p",{children:i}),o.jsx(ze,{type:"button",onClick:t,children:"Edit"})]})]}),o.jsx(_e,{}),e&&o.jsx(Q,{onClose:t,children:o.jsx(Ze,{toggleModal:t})})]})},tt=s.div`
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
`,nt=s.h3`
  font-size: 18px;
  font-weight: 400;
  color: ${a.colors.blue};
  text-align: left;
  line-height: 1;
  width: 100%;
`,rt=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,ot=s.div`
  width: 256px;
  margin: 5px 14px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 325px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    width: 360px;
  }
`,at=s.div`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${a.colors.paleBlue};
`,it=s.span`
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
`,st=s.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`,ct=s.span`
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
`,dt=s.span`
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
`,lt=s.span`
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
`,ut=s.button`
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
`,ht=s.div`
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
`,mt=s.div`
  margin-bottom: 24px;

  div {
    display: flex;
    align-items: center;
  }
`,pt=s.h2`
  margin-bottom: 24px;
  color: ${a.colors.black};
  font-size: 26px;
  line-height: 123%;
  font-weight: 500;
`,xt=s.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  margin-bottom: 16px;
`,ft=s.p`
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
`,gt=s.div`
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
`,bt=s.div`
  margin-bottom: 24px;
`,wt=s.select`
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
`,yt=s(E)`
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
`,kt=s.div`
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
`,vt=s.button`
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
`;const de=()=>{const[e,n]=y.useState(""),[t,r]=y.useState([]),{addOneDrink:i}=z(),[c,l]=y.useState(0);y.useEffect(()=>{const h=new Date,w=h.getHours(),x=h.getMinutes(),g=[];for(let Y=w;Y<24;Y++)for(let N=0;N<60;N+=5){if(Y===w&&N<x)continue;const fe=String(Y).padStart(2,"0"),ge=String(N).padStart(2,"0"),be=`${fe}:${ge}`;g.push(be)}const S=String(w).padStart(2,"0"),pe=String(x).padStart(2,"0"),xe=`${S}:${pe}`;n(xe),r(g)},[]);const u=new Date,p=String(u.getDate()).padStart(2,"0"),d=String(u.getMonth()+1).padStart(2,"0"),f=String(u.getFullYear()),b=`${p}.${d}.${f}`,k=h=>{let w="";return h>5e3&&(w="The value cannot exceed 5000ml"),w},j=()=>{const h={time:e,amount:c,date:b};console.log(h),i(h),l(0),n("")},W=()=>{l(h=>Math.max(h-50,0))},D=()=>{const h=c+50,w=5e3;l(h<=w?h:w)};return o.jsx(se,{initialValues:{amount:0,time:e},onSubmit:j,children:()=>o.jsxs(ht,{children:[o.jsxs(mt,{children:[o.jsx(pt,{children:"Add Water"}),o.jsx(xt,{children:"Choose a value:"}),o.jsx(U,{children:"Amount of water:"}),o.jsxs("div",{children:[o.jsx(K,{type:"button",onClick:W,children:o.jsx(Z,{children:o.jsx("use",{href:`${$}#icon-minus`})})}),o.jsx(gt,{children:o.jsxs(ft,{children:[c," ml"]})}),o.jsx(K,{type:"button",onClick:D,children:o.jsx(Z,{children:o.jsx("use",{href:`${$}#icon-plus`})})})]})]}),o.jsxs(bt,{children:[o.jsx(U,{children:"Recording time:"}),o.jsxs(wt,{name:"time",style:{width:"100%"},onChange:h=>n(h.target.value),children:[o.jsx("option",{value:e,children:e},"current-time"),t.map(h=>o.jsx("option",{value:h,children:h},h))]})]}),o.jsxs("div",{children:[o.jsx("h3",{children:"Enter the value of the water used:"}),o.jsx(yt,{type:"number",name:"amount",validate:k,max:5e3,value:c}),o.jsx(Se,{name:"amount",component:"div"})]}),o.jsxs(kt,{children:[o.jsxs("span",{children:[c,"ml"]}),o.jsxs(vt,{type:"submit",onClick:j,children:["Save"," "]})]})]})})},jt=()=>{const[e,n]=y.useState(!1),t=B(Le),r=()=>{n(!e)},i=t.percent;return o.jsxs(tt,{children:[o.jsxs(rt,{children:[o.jsx(nt,{children:"Today"}),o.jsxs(ot,{children:[o.jsx(at,{children:o.jsx(it,{style:{width:`${Math.min(i,100)}%`}})}),o.jsxs(st,{children:[o.jsx(ct,{children:"0%"}),i<100&&i>0&&o.jsxs(lt,{left:`${i}%`,children:[i,"%"]}),o.jsx(dt,{children:"100%"})]})]})]}),o.jsxs(ut,{onClick:r,children:[o.jsx("svg",{children:o.jsx("use",{href:`${$}#icon-outline`})}),"Add water"]}),e&&o.jsx(Q,{onClose:r,children:o.jsx(de,{})})]})},$t=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`,Mt=s.div`
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
`,Dt=s.div`
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
`,St=s.h3`
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
`,Pt=s.div`
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
`,Ot=s.svg`
  width: 26px;
  height: 26px;
  fill: transparent;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,Wt=s.div`
  display: flex;
  gap: 18px;
  margin-right: 10px;
`,Tt=s.svg`
  width: 16px;
  height: 16px;
  stroke: ${a.colors.skyBlue};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.skyBlue};
  }
`,Ct=s.svg`
  width: 16px;
  height: 16px;
  stroke: ${a.colors.brightRed};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.brightRed};
  }
`,Ft=s.button`
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
`,Bt=()=>{const[e,n]=y.useState(!1),{createWater:t}=z(),r=Date.now(),c=new Date(r).toLocaleDateString(),{reps:l}=z();y.useEffect(()=>{t({date:c})},[t,c]);const u=()=>{n(!e)};return o.jsxs(o.Fragment,{children:[o.jsxs($t,{children:[o.jsx(St,{children:"Today"}),o.jsx(Mt,{children:l.map(p=>o.jsxs(Dt,{children:[o.jsxs(Pt,{children:[o.jsx(Ot,{children:o.jsx("use",{href:`${$}#icon-glass`})}),o.jsxs("h4",{children:[p.amount," ml"]}),o.jsxs("p",{children:[p.time,o.jsx("span",{children:" AM"})]})]}),o.jsxs(Wt,{children:[o.jsx(Tt,{onClick:u,children:o.jsx("use",{href:`${$}#icon-note`})}),o.jsx(Ct,{children:o.jsx("use",{href:`${$}#icon-trash`})})]})]},p._id))}),o.jsxs(Ft,{onClick:u,children:[o.jsx("svg",{children:o.jsx("use",{href:`${$}#icon-increment`})}),"Add water"]})]}),e&&o.jsx(Q,{onClose:u,children:o.jsx(de,{})})]})};const _t=s.div`
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
`,Yt=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,Nt=s.div`
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
`,Et=s.div`
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
`,zt=s.button`
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
`,Ht=s.div`
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
`,Lt=s.div`
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
`;function v(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}function O(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}const le=6048e5,qt=864e5;let At={};function L(){return At}function _(e,n){var u,p,d,f;const t=L(),r=(n==null?void 0:n.weekStartsOn)??((p=(u=n==null?void 0:n.locale)==null?void 0:u.options)==null?void 0:p.weekStartsOn)??t.weekStartsOn??((f=(d=t.locale)==null?void 0:d.options)==null?void 0:f.weekStartsOn)??0,i=v(e),c=i.getDay(),l=(c<r?7:0)+c-r;return i.setDate(i.getDate()-l),i.setHours(0,0,0,0),i}function H(e){return _(e,{weekStartsOn:1})}function ue(e){const n=v(e),t=n.getFullYear(),r=O(e,0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const i=H(r),c=O(e,0);c.setFullYear(t,0,4),c.setHours(0,0,0,0);const l=H(c);return n.getTime()>=i.getTime()?t+1:n.getTime()>=l.getTime()?t:t-1}function te(e){const n=v(e);return n.setHours(0,0,0,0),n}function ne(e){const n=v(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function Rt(e,n){const t=te(e),r=te(n),i=+t-ne(t),c=+r-ne(r);return Math.round((i-c)/qt)}function Xt(e){const n=ue(e),t=O(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),H(t)}function Qt(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function It(e){if(!Qt(e)&&typeof e!="number")return!1;const n=v(e);return!isNaN(Number(n))}function Gt(e){const n=v(e),t=O(e,0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}const Vt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Jt=(e,n,t)=>{let r;const i=Vt[e];return typeof i=="string"?r=i:n===1?r=i.one:r=i.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function X(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const Ut={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Kt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Zt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},en={date:X({formats:Ut,defaultWidth:"full"}),time:X({formats:Kt,defaultWidth:"full"}),dateTime:X({formats:Zt,defaultWidth:"full"})},tn={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},nn=(e,n,t,r)=>tn[e];function C(e){return(n,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let i;if(r==="formatting"&&e.formattingValues){const l=e.defaultFormattingWidth||e.defaultWidth,u=t!=null&&t.width?String(t.width):l;i=e.formattingValues[u]||e.formattingValues[l]}else{const l=e.defaultWidth,u=t!=null&&t.width?String(t.width):e.defaultWidth;i=e.values[u]||e.values[l]}const c=e.argumentCallback?e.argumentCallback(n):n;return i[c]}}const rn={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},on={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},an={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},sn={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},cn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},dn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ln=(e,n)=>{const t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},un={ordinalNumber:ln,era:C({values:rn,defaultWidth:"wide"}),quarter:C({values:on,defaultWidth:"wide",argumentCallback:e=>e-1}),month:C({values:an,defaultWidth:"wide"}),day:C({values:sn,defaultWidth:"wide"}),dayPeriod:C({values:cn,defaultWidth:"wide",formattingValues:dn,defaultFormattingWidth:"wide"})};function F(e){return(n,t={})=>{const r=t.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],c=n.match(i);if(!c)return null;const l=c[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],p=Array.isArray(u)?mn(u,b=>b.test(l)):hn(u,b=>b.test(l));let d;d=e.valueCallback?e.valueCallback(p):p,d=t.valueCallback?t.valueCallback(d):d;const f=n.slice(l.length);return{value:d,rest:f}}}function hn(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function mn(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function pn(e){return(n,t={})=>{const r=n.match(e.matchPattern);if(!r)return null;const i=r[0],c=n.match(e.parsePattern);if(!c)return null;let l=e.valueCallback?e.valueCallback(c[0]):c[0];l=t.valueCallback?t.valueCallback(l):l;const u=n.slice(i.length);return{value:l,rest:u}}}const xn=/^(\d+)(th|st|nd|rd)?/i,fn=/\d+/i,gn={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},bn={any:[/^b/i,/^(a|c)/i]},wn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},yn={any:[/1/i,/2/i,/3/i,/4/i]},kn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},vn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},jn={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},$n={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Mn={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Dn={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Sn={ordinalNumber:pn({matchPattern:xn,parsePattern:fn,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:gn,defaultMatchWidth:"wide",parsePatterns:bn,defaultParseWidth:"any"}),quarter:F({matchPatterns:wn,defaultMatchWidth:"wide",parsePatterns:yn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:F({matchPatterns:kn,defaultMatchWidth:"wide",parsePatterns:vn,defaultParseWidth:"any"}),day:F({matchPatterns:jn,defaultMatchWidth:"wide",parsePatterns:$n,defaultParseWidth:"any"}),dayPeriod:F({matchPatterns:Mn,defaultMatchWidth:"any",parsePatterns:Dn,defaultParseWidth:"any"})},Pn={code:"en-US",formatDistance:Jt,formatLong:en,formatRelative:nn,localize:un,match:Sn,options:{weekStartsOn:0,firstWeekContainsDate:1}};function On(e){const n=v(e);return Rt(n,Gt(n))+1}function Wn(e){const n=v(e),t=+H(n)-+Xt(n);return Math.round(t/le)+1}function he(e,n){var f,b,k,j;const t=v(e),r=t.getFullYear(),i=L(),c=(n==null?void 0:n.firstWeekContainsDate)??((b=(f=n==null?void 0:n.locale)==null?void 0:f.options)==null?void 0:b.firstWeekContainsDate)??i.firstWeekContainsDate??((j=(k=i.locale)==null?void 0:k.options)==null?void 0:j.firstWeekContainsDate)??1,l=O(e,0);l.setFullYear(r+1,0,c),l.setHours(0,0,0,0);const u=_(l,n),p=O(e,0);p.setFullYear(r,0,c),p.setHours(0,0,0,0);const d=_(p,n);return t.getTime()>=u.getTime()?r+1:t.getTime()>=d.getTime()?r:r-1}function Tn(e,n){var u,p,d,f;const t=L(),r=(n==null?void 0:n.firstWeekContainsDate)??((p=(u=n==null?void 0:n.locale)==null?void 0:u.options)==null?void 0:p.firstWeekContainsDate)??t.firstWeekContainsDate??((f=(d=t.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??1,i=he(e,n),c=O(e,0);return c.setFullYear(i,0,r),c.setHours(0,0,0,0),_(c,n)}function Cn(e,n){const t=v(e),r=+_(t,n)-+Tn(t,n);return Math.round(r/le)+1}function m(e,n){const t=e<0?"-":"",r=Math.abs(e).toString().padStart(n,"0");return t+r}const M={y(e,n){const t=e.getFullYear(),r=t>0?t:1-t;return m(n==="yy"?r%100:r,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):m(t+1,2)},d(e,n){return m(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return m(e.getHours()%12||12,n.length)},H(e,n){return m(e.getHours(),n.length)},m(e,n){return m(e.getMinutes(),n.length)},s(e,n){return m(e.getSeconds(),n.length)},S(e,n){const t=n.length,r=e.getMilliseconds(),i=Math.trunc(r*Math.pow(10,t-3));return m(i,n.length)}},T={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},re={G:function(e,n,t){const r=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const r=e.getFullYear(),i=r>0?r:1-r;return t.ordinalNumber(i,{unit:"year"})}return M.y(e,n)},Y:function(e,n,t,r){const i=he(e,r),c=i>0?i:1-i;if(n==="YY"){const l=c%100;return m(l,2)}return n==="Yo"?t.ordinalNumber(c,{unit:"year"}):m(c,n.length)},R:function(e,n){const t=ue(e);return m(t,n.length)},u:function(e,n){const t=e.getFullYear();return m(t,n.length)},Q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return m(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return m(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,n,t){const r=e.getMonth();switch(n){case"M":case"MM":return M.M(e,n);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(e,n,t){const r=e.getMonth();switch(n){case"L":return String(r+1);case"LL":return m(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,t,r){const i=Cn(e,r);return n==="wo"?t.ordinalNumber(i,{unit:"week"}):m(i,n.length)},I:function(e,n,t){const r=Wn(e);return n==="Io"?t.ordinalNumber(r,{unit:"week"}):m(r,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):M.d(e,n)},D:function(e,n,t){const r=On(e);return n==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):m(r,n.length)},E:function(e,n,t){const r=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(e,n,t,r){const i=e.getDay(),c=(i-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(c);case"ee":return m(c,2);case"eo":return t.ordinalNumber(c,{unit:"day"});case"eee":return t.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(i,{width:"short",context:"formatting"});case"eeee":default:return t.day(i,{width:"wide",context:"formatting"})}},c:function(e,n,t,r){const i=e.getDay(),c=(i-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(c);case"cc":return m(c,n.length);case"co":return t.ordinalNumber(c,{unit:"day"});case"ccc":return t.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(i,{width:"narrow",context:"standalone"});case"cccccc":return t.day(i,{width:"short",context:"standalone"});case"cccc":default:return t.day(i,{width:"wide",context:"standalone"})}},i:function(e,n,t){const r=e.getDay(),i=r===0?7:r;switch(n){case"i":return String(i);case"ii":return m(i,n.length);case"io":return t.ordinalNumber(i,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(e,n,t){const i=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,n,t){const r=e.getHours();let i;switch(r===12?i=T.noon:r===0?i=T.midnight:i=r/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,n,t){const r=e.getHours();let i;switch(r>=17?i=T.evening:r>=12?i=T.afternoon:r>=4?i=T.morning:i=T.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let r=e.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return M.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):M.H(e,n)},K:function(e,n,t){const r=e.getHours()%12;return n==="Ko"?t.ordinalNumber(r,{unit:"hour"}):m(r,n.length)},k:function(e,n,t){let r=e.getHours();return r===0&&(r=24),n==="ko"?t.ordinalNumber(r,{unit:"hour"}):m(r,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):M.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):M.s(e,n)},S:function(e,n){return M.S(e,n)},X:function(e,n,t){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(n){case"X":return ae(r);case"XXXX":case"XX":return P(r);case"XXXXX":case"XXX":default:return P(r,":")}},x:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"x":return ae(r);case"xxxx":case"xx":return P(r);case"xxxxx":case"xxx":default:return P(r,":")}},O:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+oe(r,":");case"OOOO":default:return"GMT"+P(r,":")}},z:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+oe(r,":");case"zzzz":default:return"GMT"+P(r,":")}},t:function(e,n,t){const r=Math.trunc(e.getTime()/1e3);return m(r,n.length)},T:function(e,n,t){const r=e.getTime();return m(r,n.length)}};function oe(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),i=Math.trunc(r/60),c=r%60;return c===0?t+String(i):t+String(i)+n+m(c,2)}function ae(e,n){return e%60===0?(e>0?"-":"+")+m(Math.abs(e)/60,2):P(e,n)}function P(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),i=m(Math.trunc(r/60),2),c=m(r%60,2);return t+i+n+c}const ie=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},me=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},Fn=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],r=t[1],i=t[2];if(!i)return ie(e,n);let c;switch(r){case"P":c=n.dateTime({width:"short"});break;case"PP":c=n.dateTime({width:"medium"});break;case"PPP":c=n.dateTime({width:"long"});break;case"PPPP":default:c=n.dateTime({width:"full"});break}return c.replace("{{date}}",ie(r,n)).replace("{{time}}",me(i,n))},Bn={p:me,P:Fn},_n=/^D+$/,Yn=/^Y+$/,Nn=["D","DD","YY","YYYY"];function En(e){return _n.test(e)}function zn(e){return Yn.test(e)}function Hn(e,n,t){const r=Ln(e,n,t);if(console.warn(r),Nn.includes(e))throw new RangeError(r)}function Ln(e,n,t){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const qn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,An=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Rn=/^'([^]*?)'?$/,Xn=/''/g,Qn=/[a-zA-Z]/;function In(e,n,t){var f,b,k,j,W,D,h,w;const r=L(),i=(t==null?void 0:t.locale)??r.locale??Pn,c=(t==null?void 0:t.firstWeekContainsDate)??((b=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:b.firstWeekContainsDate)??r.firstWeekContainsDate??((j=(k=r.locale)==null?void 0:k.options)==null?void 0:j.firstWeekContainsDate)??1,l=(t==null?void 0:t.weekStartsOn)??((D=(W=t==null?void 0:t.locale)==null?void 0:W.options)==null?void 0:D.weekStartsOn)??r.weekStartsOn??((w=(h=r.locale)==null?void 0:h.options)==null?void 0:w.weekStartsOn)??0,u=v(e);if(!It(u))throw new RangeError("Invalid time value");let p=n.match(An).map(x=>{const g=x[0];if(g==="p"||g==="P"){const S=Bn[g];return S(x,i.formatLong)}return x}).join("").match(qn).map(x=>{if(x==="''")return{isToken:!1,value:"'"};const g=x[0];if(g==="'")return{isToken:!1,value:Gn(x)};if(re[g])return{isToken:!0,value:x};if(g.match(Qn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+g+"`");return{isToken:!1,value:x}});i.localize.preprocessor&&(p=i.localize.preprocessor(u,p));const d={firstWeekContainsDate:c,weekStartsOn:l,locale:i};return p.map(x=>{if(!x.isToken)return x.value;const g=x.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&zn(g)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&En(g))&&Hn(g,n,String(e));const S=re[g[0]];return S(u,g,i.localize,d)}).join("")}function Gn(e){const n=e.match(Rn);return n?n[1].replace(Xn,"'"):e}const Vn=()=>{const e={date:"04.04.2024",daily_limit:2e3,water_entries:[{time:"9:41",amount:250,date:"02.04.2024"},{time:"19:58",amount:250,date:"02.04.2024"}],owner:"660ab1bf135b46797793af4f",count:5,percent:80},t=(e.daily_limit/1e3).toFixed(1)+" L",[r,i]=y.useState(new Date),[c,l]=y.useState(null),[u,p]=y.useState({x:0,y:0}),d=y.useRef(null),f=h=>{i(w=>{const x=new Date(w);return x.setMonth(x.getMonth()+h),x})},b=()=>{const w=new Date(r.getFullYear(),r.getMonth()+1,0).getDate(),x=[];for(let g=1;g<=w;g++)x.push(g);return x},k=()=>new Intl.DateTimeFormat("en",{month:"long"}).format(r),j=()=>r.getFullYear(),W=(h,w)=>{const x=new Date(r.getFullYear(),r.getMonth(),h);x<=new Date?(l(x),p({x:w.clientX,y:w.clientY})):alert("This date has not yet arrived. Please select a previous day.")},D=h=>{d.current&&!d.current.contains(h.target)&&l(null)};return y.useEffect(()=>(document.addEventListener("mousedown",D),()=>{document.removeEventListener("mousedown",D)}),[]),o.jsxs("div",{children:[o.jsxs(_t,{children:[o.jsxs(Yt,{children:[o.jsx("h3",{children:"Month"}),o.jsxs(Nt,{children:[o.jsx(ee,{onClick:()=>f(-1),children:o.jsx("use",{href:`${$}#icon-left`})}),o.jsxs("span",{children:[k(),", ",j()]}),o.jsx(ee,{onClick:()=>f(1),children:o.jsx("use",{href:`${$}#icon-right`})})]})]}),o.jsx(Et,{children:b().map(h=>{const w=new Date,x=new Date(r.getFullYear(),r.getMonth(),h),g=w.toDateString()===x.toDateString();return o.jsxs("div",{children:[o.jsx(zt,{onClick:S=>W(h,S),className:g?"today":"",children:h}),o.jsxs(Ht,{children:[e.percent,"%"]})]},h)})})]}),c&&o.jsxs(Lt,{ref:d,style:{top:u.y,left:u.x},children:[o.jsx("p",{children:o.jsx("span",{children:In(c,"d, MMMM")})}),o.jsxs("p",{children:["Daily norma: ",o.jsx("span",{children:t})]}),o.jsxs("p",{children:["Fulfillment of the daily norm: ",o.jsxs("span",{children:[e.percent,"%"]})]}),o.jsxs("p",{children:["How many servings of water: ",o.jsx("span",{children:e.count})]})]})]})},Jn=s.div`
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
`,Un=s.div`
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
`,Kn=s.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    max-width: 50%;
  }
`,Zn=s.div`
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
`,tr=()=>o.jsx(o.Fragment,{children:o.jsx(Zn,{children:o.jsxs(Jn,{children:[o.jsxs(Kn,{children:[o.jsx(et,{}),o.jsx(jt,{})]}),o.jsxs(Un,{children:[o.jsx(Bt,{}),o.jsx(Vn,{})]})]})})});export{tr as default};
