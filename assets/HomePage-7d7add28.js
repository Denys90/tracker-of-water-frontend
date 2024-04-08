import{n as s,t as a,e as Se,f as ue,g as T,r as y,h as Pe,i as We,k as Oe,p as he,l as Be,F as E,j as o,c as pe,d as Te,M as I,s as v,E as Ce}from"./index-4992c75c.js";const Fe="/runners_of_code__frontend/assets/bottle_home_mobile@1x-0d6054eb.png",_e="/runners_of_code__frontend/assets/bottle_home_mobile@2x-52eb5066.png",Ye="/runners_of_code__frontend/assets/bottle_home_tablet@1x-c4bedac4.png",ze="/runners_of_code__frontend/assets/bottle_home_tablet@2x-867eb443.png",Ee="/runners_of_code__frontend/assets/bottle_home_desk-f67b46be.png",Ne="/runners_of_code__frontend/assets/bottle_home_deskx2-acd9b153.png",Le=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;
`,Ae=s.div`
  background-position: left bottom;
  background-image: -webkit-image-set(
    url(${Fe}) 1x,
    url(${_e}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;
  z-index: -1;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${Ye}) 1x,
      url(${ze}) 2x
    );
    height: 386px;
    margin-top: -114px;
    background-position: center top;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Ee}) 1x,
      url(${Ne}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,He=s.h3`
  font-size: 18px;
  line-height: 1.33;
  font-family: 'Roboto-Bold', sans-serif;
  margin-bottom: 12px;
  color: ${a.colors.black};
`,qe=s.div`
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
`,Re=s.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`,Xe=s.button`
  padding: 0;
  background-color: ${a.colors.white};
  color: ${a.colors.paleBlue};
  border: none;
  font-size: 16px;
  &:hover {
    color: ${a.colors.orange};
  }
`,Q=e=>e.waters.dailyNorm,Ie=e=>e.waters.reps,xe=e=>e.filter,Qe=e=>e.waters;Se([Q,xe],(e,n)=>e.filter(t=>t.name.toLowerCase().includes(n.toLowerCase())));const N=()=>{const e=ue(),n=T(Q),t=T(Ie),r=T(xe),i=y.useCallback(d=>e(Pe(d)),[e]),c=y.useCallback(d=>e(We(d)),[e]),l=y.useCallback(d=>e(Oe(d)),[e]),p=y.useCallback(d=>e(he(d)),[e]),g=y.useCallback(d=>e(Be(d)),[e]);return{dailyNorm:n,reps:t,filter:r,addDailyNorma:c,deleteReps:l,patchWater:p,addOneDrink:g,createWater:i}},Ge=s.h2`
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 24px;
`,Ve=s.div`
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
`,Je=s.div`
  border: 1px solid ${a.colors.paleBlue};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  margin-bottom: 24px;
  width: auto;
`,Ue=s.p`
  color: ${a.colors.secondText};
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`,Ke=s.span`
  color: ${a.colors.blue};
`,Ze=s.div`
  margin-bottom: 24px;
`,et=s.h3`
  margin-bottom: 16px;
  margin-top: 0;
`,tt=s.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
`,J=s.div`
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
`,H=s.label``,nt=s.div`
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
`,rt=s.button`
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
`,ot=s.div`
  width: 280px;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    min-width: 704px;
  }

  @media (min-width: ${a.breakpoint.desktop}) {
    min-width: 592px;
  }
`;function at({toggleModal:e}){const{addDailyNorma:n}=N(),t=d=>{const{gender:x,weight:m,activityHours:k}=d;if(x&&m&&k){if(x==="man")return parseFloat(m)*.04+parseFloat(k)*.6;if(x==="woman")return parseFloat(m)*.03+parseFloat(k)*.4}return null},r={gender:"man",weight:"",activityHours:"",dailyNorma:""},i=new Date,c=String(i.getDate()).padStart(2,"0"),l=String(i.getMonth()+1).padStart(2,"0"),p=String(i.getFullYear()),g=`${c}.${l}.${p}`;return o.jsxs(ot,{children:[o.jsx(Ge,{children:"My daily norma"}),o.jsx(pe,{initialValues:r,onSubmit:d=>{const m={daily_limit:d.dailyNorma*1e3,date:g};console.log("Form dailyNorma:",m),n(m),e()},children:({errors:d,touched:x,values:m,setFieldValue:k})=>o.jsxs(Te,{children:[o.jsxs(Ve,{children:[o.jsxs(G,{children:["For girl:"," ",o.jsx(V,{children:"V=(M*0,03) + (T*0,4)"})]}),o.jsxs(G,{children:["For man:"," ",o.jsx(V,{children:"V=(M*0,04) + (T*0,6)"})]})]}),o.jsx(Je,{children:o.jsxs(Ue,{children:[o.jsx(Ke,{children:"* "}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),o.jsxs(Ze,{children:[o.jsx(et,{children:"Calculate your rate:"}),o.jsxs(tt,{children:[o.jsxs("label",{children:[o.jsx(E,{type:"radio",name:"gender",value:"man",onChange:()=>k("gender","man")}),"For man"]}),o.jsxs("label",{children:[o.jsx(E,{type:"radio",name:"gender",value:"woman",onChange:()=>k("gender","woman")}),"For woman"]})]}),d.gender&&x.gender&&o.jsx("div",{children:d.gender})]}),o.jsx(J,{children:o.jsxs(H,{children:[o.jsx(q,{children:"Your weight in kilograms:"}),o.jsx(R,{type:"number",name:"weight",placeholder:"0"}),d.weight&&x.weight&&o.jsx("div",{children:d.weight})]})}),o.jsxs(J,{children:[o.jsxs(q,{children:[" ","The time of active participation in sports or other activities with a high physical. load in hours:"]}),o.jsxs(H,{children:[o.jsx(R,{type:"number",name:"activityHours",placeholder:"0"}),d.activityHours&&x.activityHours&&o.jsx("div",{children:d.activityHours})]})]}),o.jsxs(nt,{children:["Your recommended water intake per day is:",o.jsxs("span",{children:[t(m)?parseFloat(t(m)).toFixed(2):0,"L"]})]}),o.jsx(q,{children:"Write down how much water you will drink:s"}),o.jsx(H,{children:o.jsx(R,{type:"number",name:"dailyNorma",placeholder:"0"})}),o.jsx(rt,{type:"submit",children:"Save"})]})})]})}const it=()=>{const[e,n]=y.useState(!1),t=()=>{n(!e)},i=(T(Q)/1e3).toFixed(1)+" L";return o.jsxs(Le,{children:[o.jsxs(qe,{children:[o.jsx(He,{children:"My daily norma"}),o.jsxs(Re,{children:[o.jsx("p",{children:i}),o.jsx(Xe,{type:"button",onClick:t,children:"Edit"})]})]}),o.jsx(Ae,{}),e&&o.jsx(I,{onClose:t,children:o.jsx(at,{toggleModal:t})})]})},st=s.div`
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
`,ct=s.h3`
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
`,dt=s.div`
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
`,ht=s.span`
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
`,pt=s.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`,xt=s.span`
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
`,mt=s.span`
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
`,gt=s.span`
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
`,ft=s.button`
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
`,bt=s.div`
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
`,wt=s.div`
  margin-bottom: 24px;

  div {
    display: flex;
    align-items: center;
  }
`,yt=s.h2`
  margin-bottom: 24px;
  color: ${a.colors.black};
  font-size: 26px;
  line-height: 123%;
  font-weight: 500;
`,kt=s.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  margin-bottom: 16px;
`,vt=s.p`
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
`,$t=s.div`
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
`,jt=s.div`
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
`,Mt=s(E)`
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
`,Dt=s.div`
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
`,St=s.button`
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
`,Pt=s.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`,ge=({toggleModal:e})=>{const[n,t]=y.useState(""),[r,i]=y.useState([]),{addOneDrink:c}=N(),[l,p]=y.useState(0);y.useEffect(()=>{const u=new Date,h=u.getHours(),w=u.getMinutes(),S=[];for(let Y=h;Y<24;Y++)for(let z=0;z<60;z+=5){if(Y===h&&z<w)continue;const je=String(Y).padStart(2,"0"),Me=String(z).padStart(2,"0"),De=`${je}:${Me}`;S.push(De)}const ke=String(h).padStart(2,"0"),ve=String(w).padStart(2,"0"),$e=`${ke}:${ve}`;t($e),i(S)},[]);const g=new Date,d=String(g.getDate()).padStart(2,"0"),x=String(g.getMonth()+1).padStart(2,"0"),m=String(g.getFullYear()),k=`${d}.${x}.${m}`,$=u=>{let h="";return u>5e3&&(h="The value cannot exceed 5000ml"),h},M=u=>{u.preventDefault();const h={time:n,amount:l,date:k};console.log(h),c(h),p(0),t(""),e()},D=()=>{p(u=>Math.max(u-50,0))},f=()=>{const u=l+50,h=5e3;p(u<=h?u:h)};return o.jsx(pe,{initialValues:{amount:0,time:n},onSubmit:M,children:()=>o.jsxs(bt,{children:[o.jsxs(wt,{children:[o.jsx(yt,{children:"Add Water"}),o.jsx(kt,{children:"Choose a value:"}),o.jsx(U,{children:"Amount of water:"}),o.jsxs("div",{children:[o.jsx(K,{type:"button",onClick:D,children:o.jsx(Z,{children:o.jsx("use",{href:`${v}#icon-minus`})})}),o.jsx($t,{children:o.jsxs(vt,{children:[l," ml"]})}),o.jsx(K,{type:"button",onClick:f,children:o.jsx(Z,{children:o.jsx("use",{href:`${v}#icon-plus`})})})]})]}),o.jsxs(jt,{children:[o.jsx(U,{children:"Recording time:"}),o.jsxs(me,{name:"time",style:{width:"100%"},onChange:u=>t(u.target.value),children:[o.jsx("option",{value:n,children:n},"current-time"),r.map(u=>o.jsx("option",{value:u,children:u},u))]})]}),o.jsxs("div",{children:[o.jsx("h3",{children:"Enter the value of the water used:"}),o.jsx(Mt,{type:"number",name:"amount",validate:$,max:5e3,value:l}),o.jsx(Ce,{name:"amount",component:"div"})]}),o.jsxs(Dt,{children:[o.jsxs("span",{children:[l,"ml"]}),o.jsxs(St,{type:"submit",onClick:M,children:["Save"," "]})]})]})})},Wt=()=>{const[e,n]=y.useState(!1),t=T(Qe),r=()=>{n(!e)},i=t.percent;return o.jsxs(st,{children:[o.jsxs(lt,{children:[o.jsx(ct,{children:"Today"}),o.jsxs(dt,{children:[o.jsx(ut,{children:o.jsx(ht,{style:{width:`${Math.min(i,100)}%`}})}),o.jsxs(pt,{children:[o.jsx(xt,{children:"0%"}),i<100&&i>0&&o.jsxs(gt,{left:`${i}%`,children:[i,"%"]}),o.jsx(mt,{children:"100%"})]})]})]}),o.jsxs(ft,{onClick:r,children:[o.jsx("svg",{children:o.jsx("use",{href:`${v}#icon-outline`})}),"Add water"]}),e&&o.jsx(I,{onClose:r,children:o.jsx(ge,{toggleModal:r})})]})},Ot=s.div`
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
`,Tt=s.div`
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
`,Ct=s.h3`
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
`,Ft=s.div`
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
`,_t=s.svg`
  width: 26px;
  height: 26px;
  fill: transparent;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,Yt=s.div`
  display: flex;
  gap: 18px;
  margin-right: 10px;
`,zt=s.svg`
  width: 16px;
  height: 16px;
  stroke: ${a.colors.skyBlue};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.skyBlue};
  }
`,Et=s.svg`
  width: 16px;
  height: 16px;
  stroke: ${a.colors.brightRed};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.brightRed};
  }
`,Nt=s.button`
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
`,Lt=s.div`
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
`,At=()=>o.jsx(Lt,{}),Ht=e=>e.root.isLoading,qt=s.div`
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
`,Rt=s.h2`
  color: ${a.colors.black};
  width: 200px;
  font-size: 26px;
  line-height: 123%;
  font-weight: 500;
  margin: 0;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 384px;
  }
`,Xt=s.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 544px;
  }
`,It=s.div`
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
`,Qt=s.svg`
  width: 36px;
  height: 36px;
  fill: transparent;
`,Gt=s.div`
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
`,Vt=s.div`
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
`,Jt=s.div`
  background: ${a.colors.paleBlue};
  border-radius: 40px;
  width: 92px;
  height: 36px;
`,Ut=s.p`
  color: ${a.colors.blue};
  align-items: center;
  justify-content: center;
  display: flex;
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  margin: 0 auto;
`,Kt=s.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Zt=s.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,en=s.div`
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
`,tn=s.button`
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
`,nn=s.input`
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
`,rn=({onClose:e,waterId:n,initialAmount:t,initialTime:r})=>{const[i,c]=y.useState(t||0),[l,p]=y.useState(r||""),g=ue(),{isLoading:d}=T(Ht),[x,m]=y.useState(""),k=f=>{let u=f.target.value;if(u>5e3){m("The value cannot exceed 5000ml");return}else m("");u.startsWith("0")&&u.length>1&&(u=parseFloat(u.substring(1))),c(u.toString())},$=()=>{g(he(n,{waterVolume:i,date:l})).then(u=>{u.error||e()})},M=()=>{c(f=>Math.max(f-50,0))},D=()=>{const f=i+50,u=5e3;c(f<=u?f:u)};return o.jsx(o.Fragment,{children:o.jsxs(qt,{onClose:e,children:[o.jsx(Rt,{children:"Edit the entered amount of water"}),o.jsxs(Xt,{children:[o.jsxs(It,{children:[o.jsx(Qt,{children:o.jsx("use",{href:`${v}#icon-glass`})}),o.jsxs("h4",{children:[i," ml"]}),o.jsxs("p",{children:[l,o.jsx("span",{children:" AM"})]})]}),o.jsxs(Gt,{children:[o.jsx(ee,{children:"Correct entered date:"}),o.jsx(te,{children:"Amount of water:"}),o.jsxs(Vt,{children:[o.jsx(ne,{onClick:M,children:o.jsx(re,{children:o.jsx("use",{href:`${v}#icon-minus`})})}),o.jsx(Jt,{children:o.jsxs(Ut,{children:[i," ml"]})}),o.jsx(ne,{onClick:D,children:o.jsx(re,{children:o.jsx("use",{href:`${v}#icon-plus`})})})]})]}),o.jsxs(Kt,{children:[o.jsx(te,{children:"Recording time:"}),o.jsx(me,{value:l,onChange:f=>p(f.target.value),style:{width:"100%"},children:o.jsx("option",{value:l,children:l},"current-time")})]}),o.jsxs(Zt,{children:[o.jsx(ee,{children:"Enter the value of the water used:"}),o.jsx(nn,{type:"number",value:i,onChange:k,onBlur:()=>c(f=>f||t||0),max:5e3}),x&&o.jsx(Pt,{children:x})]})]}),o.jsxs(en,{children:[o.jsxs("span",{children:[i,"ml"]}),o.jsxs(tn,{onClick:$,children:["Save ",d&&o.jsx(At,{})]})]})]})})},on=s.div`
  display: flex;
  flex-direction: column;
  margin: 8px 12px;
  row-gap: 24px;
  @media screen and (min-width: ${a.breakpoint.mobile}) and (max-width: ${a.breakpoint.tablet}) {
    width: 232px;
  }
`,an=s.div`
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
`,sn=s.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    flex-direction: row;
    margin-left: 200px;
    column-gap: 24px;
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
`,ln=s.button`
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
`,dn=()=>o.jsx(o.Fragment,{children:o.jsxs(on,{children:[o.jsxs(an,{children:[o.jsx("h2",{children:"Delete entry"}),o.jsx("p",{children:"Are you sure you want to delete the entry?"})]}),o.jsxs(sn,{children:[o.jsx(cn,{children:"Cancel"}),o.jsx(ln,{children:"Delete"})]})]})}),un=()=>{const[e,n]=y.useState(!1),[t,r]=y.useState(null),{createWater:i}=N(),c=Date.now(),p=new Date(c).toLocaleDateString(),{reps:g}=N();y.useEffect(()=>{i({date:p})},[i,p]);const d=()=>{n(!e)},x=m=>{r(m),n(!0)};return o.jsxs(o.Fragment,{children:[o.jsxs(Ot,{children:[o.jsx(Ct,{children:"Today"}),o.jsx(Bt,{children:g.map(m=>o.jsxs(Tt,{children:[o.jsxs(Ft,{children:[o.jsx(_t,{children:o.jsx("use",{href:`${v}#icon-glass`})}),o.jsxs("h4",{children:[m.amount," ml"]}),o.jsxs("p",{children:[m.time,o.jsx("span",{children:" AM"})]})]}),o.jsxs(Yt,{children:[o.jsx(zt,{onClick:()=>x(o.jsx(rn,{})),children:o.jsx("use",{href:`${v}#icon-note`})}),o.jsx(Et,{onClick:()=>x(o.jsx(dn,{})),children:o.jsx("use",{href:`${v}#icon-trash`})})]})]},m._id))}),o.jsxs(Nt,{onClick:()=>x(o.jsx(ge,{})),children:[o.jsx("svg",{children:o.jsx("use",{href:`${v}#icon-increment`})}),"Add water"]})]}),e&&o.jsx(I,{onClose:d,children:t})]})};const hn=s.div`
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
`,pn=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,xn=s.div`
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
`,mn=s.div`
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
`,gn=s.button`
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
`,fn=s.div`
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
`,bn=s.div`
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
`;function j(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}function O(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}const fe=6048e5,wn=864e5;let yn={};function A(){return yn}function _(e,n){var p,g,d,x;const t=A(),r=(n==null?void 0:n.weekStartsOn)??((g=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:g.weekStartsOn)??t.weekStartsOn??((x=(d=t.locale)==null?void 0:d.options)==null?void 0:x.weekStartsOn)??0,i=j(e),c=i.getDay(),l=(c<r?7:0)+c-r;return i.setDate(i.getDate()-l),i.setHours(0,0,0,0),i}function L(e){return _(e,{weekStartsOn:1})}function be(e){const n=j(e),t=n.getFullYear(),r=O(e,0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const i=L(r),c=O(e,0);c.setFullYear(t,0,4),c.setHours(0,0,0,0);const l=L(c);return n.getTime()>=i.getTime()?t+1:n.getTime()>=l.getTime()?t:t-1}function ae(e){const n=j(e);return n.setHours(0,0,0,0),n}function ie(e){const n=j(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function kn(e,n){const t=ae(e),r=ae(n),i=+t-ie(t),c=+r-ie(r);return Math.round((i-c)/wn)}function vn(e){const n=be(e),t=O(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),L(t)}function $n(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function jn(e){if(!$n(e)&&typeof e!="number")return!1;const n=j(e);return!isNaN(Number(n))}function Mn(e){const n=j(e),t=O(e,0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}const Dn={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Sn=(e,n,t)=>{let r;const i=Dn[e];return typeof i=="string"?r=i:n===1?r=i.one:r=i.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function X(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const Pn={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Wn={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},On={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Bn={date:X({formats:Pn,defaultWidth:"full"}),time:X({formats:Wn,defaultWidth:"full"}),dateTime:X({formats:On,defaultWidth:"full"})},Tn={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Cn=(e,n,t,r)=>Tn[e];function C(e){return(n,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let i;if(r==="formatting"&&e.formattingValues){const l=e.defaultFormattingWidth||e.defaultWidth,p=t!=null&&t.width?String(t.width):l;i=e.formattingValues[p]||e.formattingValues[l]}else{const l=e.defaultWidth,p=t!=null&&t.width?String(t.width):e.defaultWidth;i=e.values[p]||e.values[l]}const c=e.argumentCallback?e.argumentCallback(n):n;return i[c]}}const Fn={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},_n={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Yn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},zn={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},En={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Nn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ln=(e,n)=>{const t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},An={ordinalNumber:Ln,era:C({values:Fn,defaultWidth:"wide"}),quarter:C({values:_n,defaultWidth:"wide",argumentCallback:e=>e-1}),month:C({values:Yn,defaultWidth:"wide"}),day:C({values:zn,defaultWidth:"wide"}),dayPeriod:C({values:En,defaultWidth:"wide",formattingValues:Nn,defaultFormattingWidth:"wide"})};function F(e){return(n,t={})=>{const r=t.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],c=n.match(i);if(!c)return null;const l=c[0],p=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],g=Array.isArray(p)?qn(p,m=>m.test(l)):Hn(p,m=>m.test(l));let d;d=e.valueCallback?e.valueCallback(g):g,d=t.valueCallback?t.valueCallback(d):d;const x=n.slice(l.length);return{value:d,rest:x}}}function Hn(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function qn(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function Rn(e){return(n,t={})=>{const r=n.match(e.matchPattern);if(!r)return null;const i=r[0],c=n.match(e.parsePattern);if(!c)return null;let l=e.valueCallback?e.valueCallback(c[0]):c[0];l=t.valueCallback?t.valueCallback(l):l;const p=n.slice(i.length);return{value:l,rest:p}}}const Xn=/^(\d+)(th|st|nd|rd)?/i,In=/\d+/i,Qn={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Gn={any:[/^b/i,/^(a|c)/i]},Vn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Jn={any:[/1/i,/2/i,/3/i,/4/i]},Un={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Kn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Zn={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},er={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},tr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},nr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},rr={ordinalNumber:Rn({matchPattern:Xn,parsePattern:In,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:Qn,defaultMatchWidth:"wide",parsePatterns:Gn,defaultParseWidth:"any"}),quarter:F({matchPatterns:Vn,defaultMatchWidth:"wide",parsePatterns:Jn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:F({matchPatterns:Un,defaultMatchWidth:"wide",parsePatterns:Kn,defaultParseWidth:"any"}),day:F({matchPatterns:Zn,defaultMatchWidth:"wide",parsePatterns:er,defaultParseWidth:"any"}),dayPeriod:F({matchPatterns:tr,defaultMatchWidth:"any",parsePatterns:nr,defaultParseWidth:"any"})},or={code:"en-US",formatDistance:Sn,formatLong:Bn,formatRelative:Cn,localize:An,match:rr,options:{weekStartsOn:0,firstWeekContainsDate:1}};function ar(e){const n=j(e);return kn(n,Mn(n))+1}function ir(e){const n=j(e),t=+L(n)-+vn(n);return Math.round(t/fe)+1}function we(e,n){var x,m,k,$;const t=j(e),r=t.getFullYear(),i=A(),c=(n==null?void 0:n.firstWeekContainsDate)??((m=(x=n==null?void 0:n.locale)==null?void 0:x.options)==null?void 0:m.firstWeekContainsDate)??i.firstWeekContainsDate??(($=(k=i.locale)==null?void 0:k.options)==null?void 0:$.firstWeekContainsDate)??1,l=O(e,0);l.setFullYear(r+1,0,c),l.setHours(0,0,0,0);const p=_(l,n),g=O(e,0);g.setFullYear(r,0,c),g.setHours(0,0,0,0);const d=_(g,n);return t.getTime()>=p.getTime()?r+1:t.getTime()>=d.getTime()?r:r-1}function sr(e,n){var p,g,d,x;const t=A(),r=(n==null?void 0:n.firstWeekContainsDate)??((g=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:g.firstWeekContainsDate)??t.firstWeekContainsDate??((x=(d=t.locale)==null?void 0:d.options)==null?void 0:x.firstWeekContainsDate)??1,i=we(e,n),c=O(e,0);return c.setFullYear(i,0,r),c.setHours(0,0,0,0),_(c,n)}function cr(e,n){const t=j(e),r=+_(t,n)-+sr(t,n);return Math.round(r/fe)+1}function b(e,n){const t=e<0?"-":"",r=Math.abs(e).toString().padStart(n,"0");return t+r}const P={y(e,n){const t=e.getFullYear(),r=t>0?t:1-t;return b(n==="yy"?r%100:r,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):b(t+1,2)},d(e,n){return b(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return b(e.getHours()%12||12,n.length)},H(e,n){return b(e.getHours(),n.length)},m(e,n){return b(e.getMinutes(),n.length)},s(e,n){return b(e.getSeconds(),n.length)},S(e,n){const t=n.length,r=e.getMilliseconds(),i=Math.trunc(r*Math.pow(10,t-3));return b(i,n.length)}},B={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},se={G:function(e,n,t){const r=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const r=e.getFullYear(),i=r>0?r:1-r;return t.ordinalNumber(i,{unit:"year"})}return P.y(e,n)},Y:function(e,n,t,r){const i=we(e,r),c=i>0?i:1-i;if(n==="YY"){const l=c%100;return b(l,2)}return n==="Yo"?t.ordinalNumber(c,{unit:"year"}):b(c,n.length)},R:function(e,n){const t=be(e);return b(t,n.length)},u:function(e,n){const t=e.getFullYear();return b(t,n.length)},Q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return b(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return b(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,n,t){const r=e.getMonth();switch(n){case"M":case"MM":return P.M(e,n);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(e,n,t){const r=e.getMonth();switch(n){case"L":return String(r+1);case"LL":return b(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,t,r){const i=cr(e,r);return n==="wo"?t.ordinalNumber(i,{unit:"week"}):b(i,n.length)},I:function(e,n,t){const r=ir(e);return n==="Io"?t.ordinalNumber(r,{unit:"week"}):b(r,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):P.d(e,n)},D:function(e,n,t){const r=ar(e);return n==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):b(r,n.length)},E:function(e,n,t){const r=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(e,n,t,r){const i=e.getDay(),c=(i-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(c);case"ee":return b(c,2);case"eo":return t.ordinalNumber(c,{unit:"day"});case"eee":return t.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(i,{width:"short",context:"formatting"});case"eeee":default:return t.day(i,{width:"wide",context:"formatting"})}},c:function(e,n,t,r){const i=e.getDay(),c=(i-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(c);case"cc":return b(c,n.length);case"co":return t.ordinalNumber(c,{unit:"day"});case"ccc":return t.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(i,{width:"narrow",context:"standalone"});case"cccccc":return t.day(i,{width:"short",context:"standalone"});case"cccc":default:return t.day(i,{width:"wide",context:"standalone"})}},i:function(e,n,t){const r=e.getDay(),i=r===0?7:r;switch(n){case"i":return String(i);case"ii":return b(i,n.length);case"io":return t.ordinalNumber(i,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(e,n,t){const i=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,n,t){const r=e.getHours();let i;switch(r===12?i=B.noon:r===0?i=B.midnight:i=r/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,n,t){const r=e.getHours();let i;switch(r>=17?i=B.evening:r>=12?i=B.afternoon:r>=4?i=B.morning:i=B.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let r=e.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return P.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):P.H(e,n)},K:function(e,n,t){const r=e.getHours()%12;return n==="Ko"?t.ordinalNumber(r,{unit:"hour"}):b(r,n.length)},k:function(e,n,t){let r=e.getHours();return r===0&&(r=24),n==="ko"?t.ordinalNumber(r,{unit:"hour"}):b(r,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):P.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):P.s(e,n)},S:function(e,n){return P.S(e,n)},X:function(e,n,t){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(n){case"X":return le(r);case"XXXX":case"XX":return W(r);case"XXXXX":case"XXX":default:return W(r,":")}},x:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"x":return le(r);case"xxxx":case"xx":return W(r);case"xxxxx":case"xxx":default:return W(r,":")}},O:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+ce(r,":");case"OOOO":default:return"GMT"+W(r,":")}},z:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+ce(r,":");case"zzzz":default:return"GMT"+W(r,":")}},t:function(e,n,t){const r=Math.trunc(e.getTime()/1e3);return b(r,n.length)},T:function(e,n,t){const r=e.getTime();return b(r,n.length)}};function ce(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),i=Math.trunc(r/60),c=r%60;return c===0?t+String(i):t+String(i)+n+b(c,2)}function le(e,n){return e%60===0?(e>0?"-":"+")+b(Math.abs(e)/60,2):W(e,n)}function W(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),i=b(Math.trunc(r/60),2),c=b(r%60,2);return t+i+n+c}const de=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},ye=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},lr=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],r=t[1],i=t[2];if(!i)return de(e,n);let c;switch(r){case"P":c=n.dateTime({width:"short"});break;case"PP":c=n.dateTime({width:"medium"});break;case"PPP":c=n.dateTime({width:"long"});break;case"PPPP":default:c=n.dateTime({width:"full"});break}return c.replace("{{date}}",de(r,n)).replace("{{time}}",ye(i,n))},dr={p:ye,P:lr},ur=/^D+$/,hr=/^Y+$/,pr=["D","DD","YY","YYYY"];function xr(e){return ur.test(e)}function mr(e){return hr.test(e)}function gr(e,n,t){const r=fr(e,n,t);if(console.warn(r),pr.includes(e))throw new RangeError(r)}function fr(e,n,t){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const br=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,wr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,yr=/^'([^]*?)'?$/,kr=/''/g,vr=/[a-zA-Z]/;function $r(e,n,t){var x,m,k,$,M,D,f,u;const r=A(),i=(t==null?void 0:t.locale)??r.locale??or,c=(t==null?void 0:t.firstWeekContainsDate)??((m=(x=t==null?void 0:t.locale)==null?void 0:x.options)==null?void 0:m.firstWeekContainsDate)??r.firstWeekContainsDate??(($=(k=r.locale)==null?void 0:k.options)==null?void 0:$.firstWeekContainsDate)??1,l=(t==null?void 0:t.weekStartsOn)??((D=(M=t==null?void 0:t.locale)==null?void 0:M.options)==null?void 0:D.weekStartsOn)??r.weekStartsOn??((u=(f=r.locale)==null?void 0:f.options)==null?void 0:u.weekStartsOn)??0,p=j(e);if(!jn(p))throw new RangeError("Invalid time value");let g=n.match(wr).map(h=>{const w=h[0];if(w==="p"||w==="P"){const S=dr[w];return S(h,i.formatLong)}return h}).join("").match(br).map(h=>{if(h==="''")return{isToken:!1,value:"'"};const w=h[0];if(w==="'")return{isToken:!1,value:jr(h)};if(se[w])return{isToken:!0,value:h};if(w.match(vr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+w+"`");return{isToken:!1,value:h}});i.localize.preprocessor&&(g=i.localize.preprocessor(p,g));const d={firstWeekContainsDate:c,weekStartsOn:l,locale:i};return g.map(h=>{if(!h.isToken)return h.value;const w=h.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&mr(w)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&xr(w))&&gr(w,n,String(e));const S=se[w[0]];return S(p,w,i.localize,d)}).join("")}function jr(e){const n=e.match(yr);return n?n[1].replace(kr,"'"):e}const Mr=()=>{const e={date:"04.04.2024",daily_limit:2e3,water_entries:[{time:"9:41",amount:250,date:"02.04.2024"},{time:"19:58",amount:250,date:"02.04.2024"}],owner:"660ab1bf135b46797793af4f",count:5,percent:80},t=(e.daily_limit/1e3).toFixed(1)+" L",[r,i]=y.useState(new Date),[c,l]=y.useState(null),[p,g]=y.useState({x:0,y:0}),d=y.useRef(null),x=f=>{i(u=>{const h=new Date(u);return h.setMonth(h.getMonth()+f),h})},m=()=>{const u=new Date(r.getFullYear(),r.getMonth()+1,0).getDate(),h=[];for(let w=1;w<=u;w++)h.push(w);return h},k=()=>new Intl.DateTimeFormat("en",{month:"long"}).format(r),$=()=>r.getFullYear(),M=(f,u)=>{const h=new Date(r.getFullYear(),r.getMonth(),f);h<=new Date?(l(h),g({x:u.clientX,y:u.clientY})):alert("This date has not yet arrived. Please select a previous day.")},D=f=>{d.current&&!d.current.contains(f.target)&&l(null)};return y.useEffect(()=>(document.addEventListener("mousedown",D),()=>{document.removeEventListener("mousedown",D)}),[]),o.jsxs("div",{children:[o.jsxs(hn,{children:[o.jsxs(pn,{children:[o.jsx("h3",{children:"Month"}),o.jsxs(xn,{children:[o.jsx(oe,{onClick:()=>x(-1),children:o.jsx("use",{href:`${v}#icon-left`})}),o.jsxs("span",{children:[k(),", ",$()]}),o.jsx(oe,{onClick:()=>x(1),children:o.jsx("use",{href:`${v}#icon-right`})})]})]}),o.jsx(mn,{children:m().map(f=>{const u=new Date,h=new Date(r.getFullYear(),r.getMonth(),f),w=u.toDateString()===h.toDateString();return o.jsxs("div",{children:[o.jsx(gn,{onClick:S=>M(f,S),className:w?"today":"",children:f}),o.jsxs(fn,{children:[e.percent,"%"]})]},f)})})]}),c&&o.jsxs(bn,{ref:d,style:{top:p.y,left:p.x},children:[o.jsx("p",{children:o.jsx("span",{children:$r(c,"d, MMMM")})}),o.jsxs("p",{children:["Daily norma: ",o.jsx("span",{children:t})]}),o.jsxs("p",{children:["Fulfillment of the daily norm: ",o.jsxs("span",{children:[e.percent,"%"]})]}),o.jsxs("p",{children:["How many servings of water: ",o.jsx("span",{children:e.count})]})]})]})},Dr=s.div`
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
`,Sr=s.div`
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
`,Pr=s.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    max-width: 50%;
  }
`,Wr=s.div`
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
`,Br=()=>o.jsx(o.Fragment,{children:o.jsx(Wr,{children:o.jsxs(Dr,{children:[o.jsxs(Pr,{children:[o.jsx(it,{}),o.jsx(Wt,{})]}),o.jsxs(Sr,{children:[o.jsx(un,{}),o.jsx(Mr,{})]})]})})});export{Br as default};
