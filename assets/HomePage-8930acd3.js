import{n as s,t as a,e as Se,f as he,g as B,r as y,h as Pe,i as We,k as Oe,p as ue,l as Te,F as E,j as o,c as pe,d as Be,M as I,s as $,E as Ce,L as Fe}from"./index-2995b571.js";const _e="/runners_of_code__frontend/assets/bottle_home_mobile@1x-0d6054eb.png",Ye="/runners_of_code__frontend/assets/bottle_home_mobile@2x-52eb5066.png",ze="/runners_of_code__frontend/assets/bottle_home_tablet@1x-c4bedac4.png",Ee="/runners_of_code__frontend/assets/bottle_home_tablet@2x-867eb443.png",Ne="/runners_of_code__frontend/assets/bottle_home_desk-f67b46be.png",Le="/runners_of_code__frontend/assets/bottle_home_deskx2-acd9b153.png",Ae=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;
`,He=s.div`
  background-position: left bottom;
  background-image: -webkit-image-set(
    url(${_e}) 1x,
    url(${Ye}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;
  z-index: -1;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${ze}) 1x,
      url(${Ee}) 2x
    );
    height: 386px;
    margin-top: -114px;
    background-position: center top;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Ne}) 1x,
      url(${Le}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,qe=s.h3`
  font-size: 18px;
  line-height: 1.33;
  font-family: 'Roboto-Bold', sans-serif;
  margin-bottom: 12px;
  color: ${a.colors.black};
`,Re=s.div`
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
`,Xe=s.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`,Ie=s.button`
  padding: 0;
  background-color: ${a.colors.white};
  color: ${a.colors.paleBlue};
  border: none;
  font-size: 16px;
  &:hover {
    color: ${a.colors.orange};
  }
`,Q=e=>e.waters.dailyNorm,Qe=e=>e.waters.reps,xe=e=>e.filter,Ge=e=>e.waters;Se([Q,xe],(e,n)=>e.filter(t=>t.name.toLowerCase().includes(n.toLowerCase())));const N=()=>{const e=he(),n=B(Q),t=B(Qe),r=B(xe),i=y.useCallback(l=>e(Pe(l)),[e]),c=y.useCallback(l=>e(We(l)),[e]),d=y.useCallback(l=>e(Oe(l)),[e]),p=y.useCallback(l=>e(ue(l)),[e]),g=y.useCallback(l=>e(Te(l)),[e]);return{dailyNorm:n,reps:t,filter:r,addDailyNorma:c,deleteReps:d,patchWater:p,addOneDrink:g,createWater:i}},Ve=s.h2`
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 24px;
`,Je=s.div`
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
`,Ue=s.div`
  border: 1px solid ${a.colors.paleBlue};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  margin-bottom: 24px;
  width: auto;
`,Ke=s.p`
  color: ${a.colors.secondText};
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`,Ze=s.span`
  color: ${a.colors.blue};
`,et=s.div`
  margin-bottom: 24px;
`,tt=s.h3`
  margin-bottom: 16px;
  margin-top: 0;
`,nt=s.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
`,J=s.div`
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
`,H=s.label``,rt=s.div`
  font-size: 18px;
  padding-bottom: 26px;
  span {
    padding-left: 5px;
    color: ${a.colors.blue};
    font-weight: bold;
  }
`,q=s.label`
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
`,ot=s.button`
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
`,at=s.div`
  width: 280px;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    min-width: 704px;
  }

  @media (min-width: ${a.breakpoint.desktop}) {
    min-width: 592px;
  }
`;function it({toggleModal:e}){const{addDailyNorma:n}=N(),t=l=>{const{gender:x,weight:m,activityHours:k}=l;if(x&&m&&k){if(x==="man")return parseFloat(m)*.04+parseFloat(k)*.6;if(x==="woman")return parseFloat(m)*.03+parseFloat(k)*.4}return null},r={gender:"man",weight:"",activityHours:"",dailyNorma:""},i=new Date,c=String(i.getDate()).padStart(2,"0"),d=String(i.getMonth()+1).padStart(2,"0"),p=String(i.getFullYear()),g=`${c}.${d}.${p}`;return o.jsxs(at,{children:[o.jsx(Ve,{children:"My daily norma"}),o.jsx(pe,{initialValues:r,onSubmit:l=>{const m={daily_limit:l.dailyNorma*1e3,date:g};console.log("Form dailyNorma:",m),n(m),e()},children:({errors:l,touched:x,values:m,setFieldValue:k})=>o.jsxs(Be,{children:[o.jsxs(Je,{children:[o.jsxs(G,{children:["For girl:"," ",o.jsx(V,{children:"V=(M*0,03) + (T*0,4)"})]}),o.jsxs(G,{children:["For man:"," ",o.jsx(V,{children:"V=(M*0,04) + (T*0,6)"})]})]}),o.jsx(Ue,{children:o.jsxs(Ke,{children:[o.jsx(Ze,{children:"* "}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),o.jsxs(et,{children:[o.jsx(tt,{children:"Calculate your rate:"}),o.jsxs(nt,{children:[o.jsxs("label",{children:[o.jsx(E,{type:"radio",name:"gender",value:"man",onChange:()=>k("gender","man")}),"For man"]}),o.jsxs("label",{children:[o.jsx(E,{type:"radio",name:"gender",value:"woman",onChange:()=>k("gender","woman")}),"For woman"]})]}),l.gender&&x.gender&&o.jsx("div",{children:l.gender})]}),o.jsx(J,{children:o.jsxs(H,{children:[o.jsx(q,{children:"Your weight in kilograms:"}),o.jsx(R,{type:"number",name:"weight",placeholder:"0"}),l.weight&&x.weight&&o.jsx("div",{children:l.weight})]})}),o.jsxs(J,{children:[o.jsxs(q,{children:[" ","The time of active participation in sports or other activities with a high physical. load in hours:"]}),o.jsxs(H,{children:[o.jsx(R,{type:"number",name:"activityHours",placeholder:"0"}),l.activityHours&&x.activityHours&&o.jsx("div",{children:l.activityHours})]})]}),o.jsxs(rt,{children:["Your recommended water intake per day is:",o.jsxs("span",{children:[t(m)?parseFloat(t(m)).toFixed(2):0,"L"]})]}),o.jsx(q,{children:"Write down how much water you will drink:s"}),o.jsx(H,{children:o.jsx(R,{type:"number",name:"dailyNorma",placeholder:"0"})}),o.jsx(ot,{type:"submit",children:"Save"})]})})]})}const st=()=>{const[e,n]=y.useState(!1),t=()=>{n(!e)},i=(B(Q)/1e3).toFixed(1)+" L";return o.jsxs(Ae,{children:[o.jsxs(Re,{children:[o.jsx(qe,{children:"My daily norma"}),o.jsxs(Xe,{children:[o.jsx("p",{children:i}),o.jsx(Ie,{type:"button",onClick:t,children:"Edit"})]})]}),o.jsx(He,{}),e&&o.jsx(I,{onClose:t,children:o.jsx(it,{toggleModal:t})})]})},ct=s.div`
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
`,dt=s.h3`
  font-size: 18px;
  font-weight: 400;
  color: ${a.colors.blue};
  text-align: left;
  line-height: 1;
  width: 100%;
`,lt=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,ht=s.div`
  width: 256px;
  margin: 5px 14px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 325px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    width: 360px;
  }
`,ut=s.div`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${a.colors.paleBlue};
`,pt=s.span`
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
`,xt=s.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`,mt=s.span`
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
`,gt=s.span`
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
`,ft=s.span`
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
`,bt=s.button`
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
`,wt=s.div`
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
`,yt=s.div`
  margin-bottom: 24px;

  div {
    display: flex;
    align-items: center;
  }
`,kt=s.h2`
  margin-bottom: 24px;
  color: ${a.colors.black};
  font-size: 26px;
  line-height: 123%;
  font-weight: 500;
`,$t=s.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  margin-bottom: 16px;
`,jt=s.p`
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
`,vt=s.div`
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
`,Mt=s.div`
  margin-bottom: 24px;
`,me=s.select`
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
  &:hover {
    border-color: ${a.colors.blue};
  }
`,Dt=s(E)`
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
`,St=s.div`
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
`,Pt=s.button`
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
`,Wt=s.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`,ge=({toggleModal:e})=>{const[n,t]=y.useState(""),[r,i]=y.useState([]),{addOneDrink:c}=N(),[d,p]=y.useState(0);y.useEffect(()=>{const h=new Date,u=h.getHours(),w=h.getMinutes(),S=[];for(let Y=u;Y<24;Y++)for(let z=0;z<60;z+=5){if(Y===u&&z<w)continue;const ve=String(Y).padStart(2,"0"),Me=String(z).padStart(2,"0"),De=`${ve}:${Me}`;S.push(De)}const ke=String(u).padStart(2,"0"),$e=String(w).padStart(2,"0"),je=`${ke}:${$e}`;t(je),i(S)},[]);const g=new Date,l=String(g.getDate()).padStart(2,"0"),x=String(g.getMonth()+1).padStart(2,"0"),m=String(g.getFullYear()),k=`${l}.${x}.${m}`,j=h=>{let u="";return h>5e3&&(u="The value cannot exceed 5000ml"),u},M=h=>{h.preventDefault();const u={time:n,amount:d,date:k};console.log(u),c(u),p(0),t(""),e()},D=()=>{p(h=>Math.max(h-50,0))},f=()=>{const h=d+50,u=5e3;p(h<=u?h:u)};return o.jsx(pe,{initialValues:{amount:0,time:n},onSubmit:M,children:()=>o.jsxs(wt,{children:[o.jsxs(yt,{children:[o.jsx(kt,{children:"Add Water"}),o.jsx($t,{children:"Choose a value:"}),o.jsx(U,{children:"Amount of water:"}),o.jsxs("div",{children:[o.jsx(K,{type:"button",onClick:D,children:o.jsx(Z,{children:o.jsx("use",{href:`${$}#icon-minus`})})}),o.jsx(vt,{children:o.jsxs(jt,{children:[d," ml"]})}),o.jsx(K,{type:"button",onClick:f,children:o.jsx(Z,{children:o.jsx("use",{href:`${$}#icon-plus`})})})]})]}),o.jsxs(Mt,{children:[o.jsx(U,{children:"Recording time:"}),o.jsxs(me,{name:"time",style:{width:"100%"},onChange:h=>t(h.target.value),children:[o.jsx("option",{value:n,children:n},"current-time"),r.map(h=>o.jsx("option",{value:h,children:h},h))]})]}),o.jsxs("div",{children:[o.jsx("h3",{children:"Enter the value of the water used:"}),o.jsx(Dt,{type:"number",name:"amount",validate:j,max:5e3,value:d}),o.jsx(Ce,{name:"amount",component:"div"})]}),o.jsxs(St,{children:[o.jsxs("span",{children:[d,"ml"]}),o.jsxs(Pt,{type:"submit",onClick:M,children:["Save"," "]})]})]})})},Ot=()=>{const[e,n]=y.useState(!1),t=B(Ge),r=()=>{n(!e)},i=t.percent;return o.jsxs(ct,{children:[o.jsxs(lt,{children:[o.jsx(dt,{children:"Today"}),o.jsxs(ht,{children:[o.jsx(ut,{children:o.jsx(pt,{style:{width:`${Math.min(i,100)}%`}})}),o.jsxs(xt,{children:[o.jsx(mt,{children:"0%"}),i<100&&i>0&&o.jsxs(ft,{left:`${i}%`,children:[i,"%"]}),o.jsx(gt,{children:"100%"})]})]})]}),o.jsxs(bt,{onClick:r,children:[o.jsx("svg",{children:o.jsx("use",{href:`${$}#icon-outline`})}),"Add water"]}),e&&o.jsx(I,{onClose:r,children:o.jsx(ge,{toggleModal:r})})]})},Tt=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`,Bt=s.div`
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
`,Ct=s.div`
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
`,Ft=s.h3`
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
`,_t=s.div`
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
`,Yt=s.svg`
  width: 26px;
  height: 26px;
  fill: transparent;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,zt=s.div`
  display: flex;
  gap: 18px;
  margin-right: 10px;
`,Et=s.svg`
  width: 16px;
  height: 16px;
  stroke: ${a.colors.skyBlue};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.skyBlue};
  }
`,Nt=s.svg`
  width: 16px;
  height: 16px;
  stroke: ${a.colors.brightRed};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.brightRed};
  }
`,Lt=s.button`
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
`,At=e=>e.root.isLoading,Ht=s.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 256px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 656px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    width: 544px;
  }
`,qt=s.h2`
  color: ${a.colors.black};
  width: 200px;
  font-size: 26px;
  line-height: 123%;
  font-weight: 500;
  margin: 0;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 384px;
  }
`,Rt=s.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 544px;
  }
`,Xt=s.div`
  display: flex;
  align-items: center;
  width: 208px;
  height: 52px;
  border-radius: 10px;
  padding: 8px 24px;
  gap: 12px;
  background-color: ${a.colors.lightBlue};
  h4 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    margin: 0;
    color: ${a.colors.blue};
  }
  p {
    font-size: 12px;
    line-height: 24px;
    color: ${a.colors.black};
    margin: 0;
    span {
      text-transform: uppercase;
    }
  }
`,It=s.svg`
  width: 36px;
  height: 36px;
  fill: transparent;
`,Qt=s.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  div {
    display: flex;
    align-items: center;
  }
`,ee=s.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  margin: 0;
  color: ${a.colors.black};
`,te=s.p`
  font-size: 16px;
  line-height: 111%;
  color: ${a.colors.black};
  margin: 0;
`,Gt=s.div`
  gap: 7px;
  width: 194px;
  height: 44px;
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
  padding: 10px;

  &:hover {
    box-shadow: ${a.boxShadowBtn.hoverBtn};
  }
`,re=s.svg`
  width: 24px;
  height: 24px;
  stroke: ${a.colors.blue};
  fill: ${a.colors.blue};
`,Vt=s.div`
  background: ${a.colors.paleBlue};
  border-radius: 40px;
  width: 92px;
  height: 36px;
`,Jt=s.p`
  color: ${a.colors.blue};
  align-items: center;
  justify-content: center;
  display: flex;
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  margin: 0 auto;
`,Ut=s.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Kt=s.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Zt=s.div`
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
`,en=s.button`
  box-sizing: border-box;
  display: inline-block;
  width: 256px;
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
`,tn=s.input`
  color: ${a.colors.blue};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
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
`,nn=({onClose:e,waterId:n,initialAmount:t,initialTime:r})=>{const[i,c]=y.useState(t||0),[d,p]=y.useState(r||""),g=he(),{isLoading:l}=B(At),[x,m]=y.useState(""),k=f=>{let h=f.target.value;if(h>5e3){m("The value cannot exceed 5000ml");return}else m("");h.startsWith("0")&&h.length>1&&(h=parseFloat(h.substring(1))),c(h.toString())},j=()=>{g(ue(n,{waterVolume:i,date:d})).then(h=>{h.error||e()})},M=()=>{c(f=>Math.max(f-50,0))},D=()=>{const f=i+50,h=5e3;c(f<=h?f:h)};return o.jsx(o.Fragment,{children:o.jsxs(Ht,{onClose:e,children:[o.jsx(qt,{children:"Edit the entered amount of water"}),o.jsxs(Rt,{children:[o.jsxs(Xt,{children:[o.jsx(It,{children:o.jsx("use",{href:`${$}#icon-glass`})}),o.jsxs("h4",{children:[i," ml"]}),o.jsxs("p",{children:[d,o.jsx("span",{children:" AM"})]})]}),o.jsxs(Qt,{children:[o.jsx(ee,{children:"Correct entered date:"}),o.jsx(te,{children:"Amount of water:"}),o.jsxs(Gt,{children:[o.jsx(ne,{onClick:M,children:o.jsx(re,{children:o.jsx("use",{href:`${$}#icon-minus`})})}),o.jsx(Vt,{children:o.jsxs(Jt,{children:[i," ml"]})}),o.jsx(ne,{onClick:D,children:o.jsx(re,{children:o.jsx("use",{href:`${$}#icon-plus`})})})]})]}),o.jsxs(Ut,{children:[o.jsx(te,{children:"Recording time:"}),o.jsx(me,{value:d,onChange:f=>p(f.target.value),style:{width:"100%"},children:o.jsx("option",{value:d,children:d},"current-time")})]}),o.jsxs(Kt,{children:[o.jsx(ee,{children:"Enter the value of the water used:"}),o.jsx(tn,{type:"number",value:i,onChange:k,onBlur:()=>c(f=>f||t||0),max:5e3}),x&&o.jsx(Wt,{children:x})]})]}),o.jsxs(Zt,{children:[o.jsxs("span",{children:[i,"ml"]}),o.jsxs(en,{onClick:j,children:["Save ",l&&o.jsx(Fe,{})]})]})]})})},rn=s.div`
  display: flex;
  flex-direction: column;
  margin: 8px 12px;
  row-gap: 24px;
  @media screen and (min-width: ${a.breakpoint.mobile}) and (max-width: ${a.breakpoint.tablet}) {
    width: 232px;
  }
`,on=s.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  h2 {
    color: ${a.colors.black};
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
    margin: 0;
  }

  p {
    color: ${a.colors.black};
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    margin: 0;
  }
`,an=s.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    flex-direction: row;
    margin-left: 200px;
    column-gap: 24px;
  }
`,sn=s.button`
  width: 232px;
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 30px 8px 30px;
  flex: none;
  order: 1;
  flex-grow: 0;
  border-radius: 10px;
  background-color: ${a.colors.paleBlue};
  border: none;
  height: 44px;
  padding: 10px 30px 10px 30px;

  color: ${a.colors.blue};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;

  &:hover {
    box-shadow: ${a.boxShadowBtn.Btn};
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 160px;
  }
`,cn=s.button`
  width: 232px;
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 30px 8px 30px;
  flex: none;
  order: 1;
  flex-grow: 0;
  border-radius: 10px;
  background-color: ${a.colors.brightRed};
  border: none;
  height: 44px;
  padding: 10px 30px 10px 30px;

  color: ${a.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;

  &:hover {
    box-shadow: ${a.boxShadowBtn.Btn};
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 160px;
  }
`,dn=()=>o.jsx(o.Fragment,{children:o.jsxs(rn,{children:[o.jsxs(on,{children:[o.jsx("h2",{children:"Delete entry"}),o.jsx("p",{children:"Are you sure you want to delete the entry?"})]}),o.jsxs(an,{children:[o.jsx(sn,{children:"Cancel"}),o.jsx(cn,{children:"Delete"})]})]})}),ln=()=>{const[e,n]=y.useState(!1),[t,r]=y.useState(null),{createWater:i}=N(),c=Date.now(),p=new Date(c).toLocaleDateString(),{reps:g}=N();y.useEffect(()=>{i({date:p})},[i,p]);const l=()=>{n(!e)},x=m=>{r(m),n(!0)};return o.jsxs(o.Fragment,{children:[o.jsxs(Tt,{children:[o.jsx(Ft,{children:"Today"}),o.jsx(Bt,{children:g.map(m=>o.jsxs(Ct,{children:[o.jsxs(_t,{children:[o.jsx(Yt,{children:o.jsx("use",{href:`${$}#icon-glass`})}),o.jsxs("h4",{children:[m.amount," ml"]}),o.jsxs("p",{children:[m.time,o.jsx("span",{children:" AM"})]})]}),o.jsxs(zt,{children:[o.jsx(Et,{onClick:()=>x(o.jsx(nn,{})),children:o.jsx("use",{href:`${$}#icon-note`})}),o.jsx(Nt,{onClick:()=>x(o.jsx(dn,{})),children:o.jsx("use",{href:`${$}#icon-trash`})})]})]},m._id))}),o.jsxs(Lt,{onClick:()=>x(o.jsx(ge,{})),children:[o.jsx("svg",{children:o.jsx("use",{href:`${$}#icon-increment`})}),"Add water"]})]}),e&&o.jsx(I,{onClose:l,children:t})]})};const hn=s.div`
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
`,un=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,pn=s.div`
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
`,xn=s.div`
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
`,mn=s.button`
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
`,gn=s.div`
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
`,fn=s.div`
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
`;function v(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}function O(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}const fe=6048e5,bn=864e5;let wn={};function A(){return wn}function _(e,n){var p,g,l,x;const t=A(),r=(n==null?void 0:n.weekStartsOn)??((g=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:g.weekStartsOn)??t.weekStartsOn??((x=(l=t.locale)==null?void 0:l.options)==null?void 0:x.weekStartsOn)??0,i=v(e),c=i.getDay(),d=(c<r?7:0)+c-r;return i.setDate(i.getDate()-d),i.setHours(0,0,0,0),i}function L(e){return _(e,{weekStartsOn:1})}function be(e){const n=v(e),t=n.getFullYear(),r=O(e,0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const i=L(r),c=O(e,0);c.setFullYear(t,0,4),c.setHours(0,0,0,0);const d=L(c);return n.getTime()>=i.getTime()?t+1:n.getTime()>=d.getTime()?t:t-1}function ae(e){const n=v(e);return n.setHours(0,0,0,0),n}function ie(e){const n=v(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function yn(e,n){const t=ae(e),r=ae(n),i=+t-ie(t),c=+r-ie(r);return Math.round((i-c)/bn)}function kn(e){const n=be(e),t=O(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),L(t)}function $n(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function jn(e){if(!$n(e)&&typeof e!="number")return!1;const n=v(e);return!isNaN(Number(n))}function vn(e){const n=v(e),t=O(e,0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}const Mn={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Dn=(e,n,t)=>{let r;const i=Mn[e];return typeof i=="string"?r=i:n===1?r=i.one:r=i.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function X(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const Sn={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Pn={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Wn={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},On={date:X({formats:Sn,defaultWidth:"full"}),time:X({formats:Pn,defaultWidth:"full"}),dateTime:X({formats:Wn,defaultWidth:"full"})},Tn={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Bn=(e,n,t,r)=>Tn[e];function C(e){return(n,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let i;if(r==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,p=t!=null&&t.width?String(t.width):d;i=e.formattingValues[p]||e.formattingValues[d]}else{const d=e.defaultWidth,p=t!=null&&t.width?String(t.width):e.defaultWidth;i=e.values[p]||e.values[d]}const c=e.argumentCallback?e.argumentCallback(n):n;return i[c]}}const Cn={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Fn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},_n={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Yn={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},zn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},En={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Nn=(e,n)=>{const t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Ln={ordinalNumber:Nn,era:C({values:Cn,defaultWidth:"wide"}),quarter:C({values:Fn,defaultWidth:"wide",argumentCallback:e=>e-1}),month:C({values:_n,defaultWidth:"wide"}),day:C({values:Yn,defaultWidth:"wide"}),dayPeriod:C({values:zn,defaultWidth:"wide",formattingValues:En,defaultFormattingWidth:"wide"})};function F(e){return(n,t={})=>{const r=t.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],c=n.match(i);if(!c)return null;const d=c[0],p=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],g=Array.isArray(p)?Hn(p,m=>m.test(d)):An(p,m=>m.test(d));let l;l=e.valueCallback?e.valueCallback(g):g,l=t.valueCallback?t.valueCallback(l):l;const x=n.slice(d.length);return{value:l,rest:x}}}function An(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function Hn(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function qn(e){return(n,t={})=>{const r=n.match(e.matchPattern);if(!r)return null;const i=r[0],c=n.match(e.parsePattern);if(!c)return null;let d=e.valueCallback?e.valueCallback(c[0]):c[0];d=t.valueCallback?t.valueCallback(d):d;const p=n.slice(i.length);return{value:d,rest:p}}}const Rn=/^(\d+)(th|st|nd|rd)?/i,Xn=/\d+/i,In={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Qn={any:[/^b/i,/^(a|c)/i]},Gn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Vn={any:[/1/i,/2/i,/3/i,/4/i]},Jn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Un={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Kn={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Zn={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},er={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},tr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},nr={ordinalNumber:qn({matchPattern:Rn,parsePattern:Xn,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:In,defaultMatchWidth:"wide",parsePatterns:Qn,defaultParseWidth:"any"}),quarter:F({matchPatterns:Gn,defaultMatchWidth:"wide",parsePatterns:Vn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:F({matchPatterns:Jn,defaultMatchWidth:"wide",parsePatterns:Un,defaultParseWidth:"any"}),day:F({matchPatterns:Kn,defaultMatchWidth:"wide",parsePatterns:Zn,defaultParseWidth:"any"}),dayPeriod:F({matchPatterns:er,defaultMatchWidth:"any",parsePatterns:tr,defaultParseWidth:"any"})},rr={code:"en-US",formatDistance:Dn,formatLong:On,formatRelative:Bn,localize:Ln,match:nr,options:{weekStartsOn:0,firstWeekContainsDate:1}};function or(e){const n=v(e);return yn(n,vn(n))+1}function ar(e){const n=v(e),t=+L(n)-+kn(n);return Math.round(t/fe)+1}function we(e,n){var x,m,k,j;const t=v(e),r=t.getFullYear(),i=A(),c=(n==null?void 0:n.firstWeekContainsDate)??((m=(x=n==null?void 0:n.locale)==null?void 0:x.options)==null?void 0:m.firstWeekContainsDate)??i.firstWeekContainsDate??((j=(k=i.locale)==null?void 0:k.options)==null?void 0:j.firstWeekContainsDate)??1,d=O(e,0);d.setFullYear(r+1,0,c),d.setHours(0,0,0,0);const p=_(d,n),g=O(e,0);g.setFullYear(r,0,c),g.setHours(0,0,0,0);const l=_(g,n);return t.getTime()>=p.getTime()?r+1:t.getTime()>=l.getTime()?r:r-1}function ir(e,n){var p,g,l,x;const t=A(),r=(n==null?void 0:n.firstWeekContainsDate)??((g=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:g.firstWeekContainsDate)??t.firstWeekContainsDate??((x=(l=t.locale)==null?void 0:l.options)==null?void 0:x.firstWeekContainsDate)??1,i=we(e,n),c=O(e,0);return c.setFullYear(i,0,r),c.setHours(0,0,0,0),_(c,n)}function sr(e,n){const t=v(e),r=+_(t,n)-+ir(t,n);return Math.round(r/fe)+1}function b(e,n){const t=e<0?"-":"",r=Math.abs(e).toString().padStart(n,"0");return t+r}const P={y(e,n){const t=e.getFullYear(),r=t>0?t:1-t;return b(n==="yy"?r%100:r,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):b(t+1,2)},d(e,n){return b(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return b(e.getHours()%12||12,n.length)},H(e,n){return b(e.getHours(),n.length)},m(e,n){return b(e.getMinutes(),n.length)},s(e,n){return b(e.getSeconds(),n.length)},S(e,n){const t=n.length,r=e.getMilliseconds(),i=Math.trunc(r*Math.pow(10,t-3));return b(i,n.length)}},T={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},se={G:function(e,n,t){const r=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const r=e.getFullYear(),i=r>0?r:1-r;return t.ordinalNumber(i,{unit:"year"})}return P.y(e,n)},Y:function(e,n,t,r){const i=we(e,r),c=i>0?i:1-i;if(n==="YY"){const d=c%100;return b(d,2)}return n==="Yo"?t.ordinalNumber(c,{unit:"year"}):b(c,n.length)},R:function(e,n){const t=be(e);return b(t,n.length)},u:function(e,n){const t=e.getFullYear();return b(t,n.length)},Q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return b(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return b(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,n,t){const r=e.getMonth();switch(n){case"M":case"MM":return P.M(e,n);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(e,n,t){const r=e.getMonth();switch(n){case"L":return String(r+1);case"LL":return b(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,t,r){const i=sr(e,r);return n==="wo"?t.ordinalNumber(i,{unit:"week"}):b(i,n.length)},I:function(e,n,t){const r=ar(e);return n==="Io"?t.ordinalNumber(r,{unit:"week"}):b(r,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):P.d(e,n)},D:function(e,n,t){const r=or(e);return n==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):b(r,n.length)},E:function(e,n,t){const r=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(e,n,t,r){const i=e.getDay(),c=(i-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(c);case"ee":return b(c,2);case"eo":return t.ordinalNumber(c,{unit:"day"});case"eee":return t.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(i,{width:"short",context:"formatting"});case"eeee":default:return t.day(i,{width:"wide",context:"formatting"})}},c:function(e,n,t,r){const i=e.getDay(),c=(i-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(c);case"cc":return b(c,n.length);case"co":return t.ordinalNumber(c,{unit:"day"});case"ccc":return t.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(i,{width:"narrow",context:"standalone"});case"cccccc":return t.day(i,{width:"short",context:"standalone"});case"cccc":default:return t.day(i,{width:"wide",context:"standalone"})}},i:function(e,n,t){const r=e.getDay(),i=r===0?7:r;switch(n){case"i":return String(i);case"ii":return b(i,n.length);case"io":return t.ordinalNumber(i,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(e,n,t){const i=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,n,t){const r=e.getHours();let i;switch(r===12?i=T.noon:r===0?i=T.midnight:i=r/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,n,t){const r=e.getHours();let i;switch(r>=17?i=T.evening:r>=12?i=T.afternoon:r>=4?i=T.morning:i=T.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let r=e.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return P.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):P.H(e,n)},K:function(e,n,t){const r=e.getHours()%12;return n==="Ko"?t.ordinalNumber(r,{unit:"hour"}):b(r,n.length)},k:function(e,n,t){let r=e.getHours();return r===0&&(r=24),n==="ko"?t.ordinalNumber(r,{unit:"hour"}):b(r,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):P.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):P.s(e,n)},S:function(e,n){return P.S(e,n)},X:function(e,n,t){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(n){case"X":return de(r);case"XXXX":case"XX":return W(r);case"XXXXX":case"XXX":default:return W(r,":")}},x:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"x":return de(r);case"xxxx":case"xx":return W(r);case"xxxxx":case"xxx":default:return W(r,":")}},O:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+ce(r,":");case"OOOO":default:return"GMT"+W(r,":")}},z:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+ce(r,":");case"zzzz":default:return"GMT"+W(r,":")}},t:function(e,n,t){const r=Math.trunc(e.getTime()/1e3);return b(r,n.length)},T:function(e,n,t){const r=e.getTime();return b(r,n.length)}};function ce(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),i=Math.trunc(r/60),c=r%60;return c===0?t+String(i):t+String(i)+n+b(c,2)}function de(e,n){return e%60===0?(e>0?"-":"+")+b(Math.abs(e)/60,2):W(e,n)}function W(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),i=b(Math.trunc(r/60),2),c=b(r%60,2);return t+i+n+c}const le=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},ye=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},cr=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],r=t[1],i=t[2];if(!i)return le(e,n);let c;switch(r){case"P":c=n.dateTime({width:"short"});break;case"PP":c=n.dateTime({width:"medium"});break;case"PPP":c=n.dateTime({width:"long"});break;case"PPPP":default:c=n.dateTime({width:"full"});break}return c.replace("{{date}}",le(r,n)).replace("{{time}}",ye(i,n))},dr={p:ye,P:cr},lr=/^D+$/,hr=/^Y+$/,ur=["D","DD","YY","YYYY"];function pr(e){return lr.test(e)}function xr(e){return hr.test(e)}function mr(e,n,t){const r=gr(e,n,t);if(console.warn(r),ur.includes(e))throw new RangeError(r)}function gr(e,n,t){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const fr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,br=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,wr=/^'([^]*?)'?$/,yr=/''/g,kr=/[a-zA-Z]/;function $r(e,n,t){var x,m,k,j,M,D,f,h;const r=A(),i=(t==null?void 0:t.locale)??r.locale??rr,c=(t==null?void 0:t.firstWeekContainsDate)??((m=(x=t==null?void 0:t.locale)==null?void 0:x.options)==null?void 0:m.firstWeekContainsDate)??r.firstWeekContainsDate??((j=(k=r.locale)==null?void 0:k.options)==null?void 0:j.firstWeekContainsDate)??1,d=(t==null?void 0:t.weekStartsOn)??((D=(M=t==null?void 0:t.locale)==null?void 0:M.options)==null?void 0:D.weekStartsOn)??r.weekStartsOn??((h=(f=r.locale)==null?void 0:f.options)==null?void 0:h.weekStartsOn)??0,p=v(e);if(!jn(p))throw new RangeError("Invalid time value");let g=n.match(br).map(u=>{const w=u[0];if(w==="p"||w==="P"){const S=dr[w];return S(u,i.formatLong)}return u}).join("").match(fr).map(u=>{if(u==="''")return{isToken:!1,value:"'"};const w=u[0];if(w==="'")return{isToken:!1,value:jr(u)};if(se[w])return{isToken:!0,value:u};if(w.match(kr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+w+"`");return{isToken:!1,value:u}});i.localize.preprocessor&&(g=i.localize.preprocessor(p,g));const l={firstWeekContainsDate:c,weekStartsOn:d,locale:i};return g.map(u=>{if(!u.isToken)return u.value;const w=u.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&xr(w)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&pr(w))&&mr(w,n,String(e));const S=se[w[0]];return S(p,w,i.localize,l)}).join("")}function jr(e){const n=e.match(wr);return n?n[1].replace(yr,"'"):e}const vr=()=>{const e={date:"04.04.2024",daily_limit:2e3,water_entries:[{time:"9:41",amount:250,date:"02.04.2024"},{time:"19:58",amount:250,date:"02.04.2024"}],owner:"660ab1bf135b46797793af4f",count:5,percent:80},t=(e.daily_limit/1e3).toFixed(1)+" L",[r,i]=y.useState(new Date),[c,d]=y.useState(null),[p,g]=y.useState({x:0,y:0}),l=y.useRef(null),x=f=>{i(h=>{const u=new Date(h);return u.setMonth(u.getMonth()+f),u})},m=()=>{const h=new Date(r.getFullYear(),r.getMonth()+1,0).getDate(),u=[];for(let w=1;w<=h;w++)u.push(w);return u},k=()=>new Intl.DateTimeFormat("en",{month:"long"}).format(r),j=()=>r.getFullYear(),M=(f,h)=>{const u=new Date(r.getFullYear(),r.getMonth(),f);u<=new Date?(d(u),g({x:h.clientX,y:h.clientY})):alert("This date has not yet arrived. Please select a previous day.")},D=f=>{l.current&&!l.current.contains(f.target)&&d(null)};return y.useEffect(()=>(document.addEventListener("mousedown",D),()=>{document.removeEventListener("mousedown",D)}),[]),o.jsxs("div",{children:[o.jsxs(hn,{children:[o.jsxs(un,{children:[o.jsx("h3",{children:"Month"}),o.jsxs(pn,{children:[o.jsx(oe,{onClick:()=>x(-1),children:o.jsx("use",{href:`${$}#icon-left`})}),o.jsxs("span",{children:[k(),", ",j()]}),o.jsx(oe,{onClick:()=>x(1),children:o.jsx("use",{href:`${$}#icon-right`})})]})]}),o.jsx(xn,{children:m().map(f=>{const h=new Date,u=new Date(r.getFullYear(),r.getMonth(),f),w=h.toDateString()===u.toDateString();return o.jsxs("div",{children:[o.jsx(mn,{onClick:S=>M(f,S),className:w?"today":"",children:f}),o.jsxs(gn,{children:[e.percent,"%"]})]},f)})})]}),c&&o.jsxs(fn,{ref:l,style:{top:p.y,left:p.x},children:[o.jsx("p",{children:o.jsx("span",{children:$r(c,"d, MMMM")})}),o.jsxs("p",{children:["Daily norma: ",o.jsx("span",{children:t})]}),o.jsxs("p",{children:["Fulfillment of the daily norm: ",o.jsxs("span",{children:[e.percent,"%"]})]}),o.jsxs("p",{children:["How many servings of water: ",o.jsx("span",{children:e.count})]})]})]})},Mr=s.div`
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
`,Dr=s.div`
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
`,Sr=s.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    max-width: 50%;
  }
`,Pr=s.div`
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
`,Or=()=>o.jsx(o.Fragment,{children:o.jsx(Pr,{children:o.jsxs(Mr,{children:[o.jsxs(Sr,{children:[o.jsx(st,{}),o.jsx(Ot,{})]}),o.jsxs(Dr,{children:[o.jsx(ln,{}),o.jsx(vr,{})]})]})})});export{Or as default};
