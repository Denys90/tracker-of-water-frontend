import{n as s,t as a,e as _e,f as re,g as _,r as w,h as Ye,i as ze,k as Ne,p as Ee,l as Ae,F as H,j as o,c as oe,d as He,M as ae,s as M,E as fe,o as C,q as Y,v as Le}from"./index-e682bf96.js";const qe="/runners_of_code__frontend/assets/bottle_home_mobile@1x-0d6054eb.png",Re="/runners_of_code__frontend/assets/bottle_home_mobile@2x-52eb5066.png",Xe="/runners_of_code__frontend/assets/bottle_home_tablet@1x-c4bedac4.png",Ie="/runners_of_code__frontend/assets/bottle_home_tablet@2x-867eb443.png",Qe="/runners_of_code__frontend/assets/bottle_home_desk-f67b46be.png",Ge="/runners_of_code__frontend/assets/bottle_home_deskx2-acd9b153.png",Ve=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;
`,Je=s.div`
  background-position: left bottom;
  background-image: -webkit-image-set(
    url(${qe}) 1x,
    url(${Re}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;
  z-index: -1;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${Xe}) 1x,
      url(${Ie}) 2x
    );
    height: 386px;
    margin-top: -114px;
    background-position: center top;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Qe}) 1x,
      url(${Ge}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,Ue=s.h3`
  font-size: 18px;
  line-height: 1.33;
  font-family: 'Roboto-Bold', sans-serif;
  margin-bottom: 12px;
  color: ${a.colors.black};
`,Ke=s.div`
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
`,Ze=s.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`,et=s.button`
  padding: 0;
  background-color: ${a.colors.white};
  color: ${a.colors.paleBlue};
  border: none;
  font-size: 16px;
  &:hover {
    color: ${a.colors.orange};
  }
`,ie=e=>e.waters.dailyNorm,tt=e=>e.waters.reps,be=e=>e.filter,nt=e=>e.waters.month,rt=e=>e.waters;_e([ie,be],(e,n)=>e.filter(t=>t.name.toLowerCase().includes(n.toLowerCase())));const E=()=>{const e=re(),n=_(ie),t=_(tt),r=_(be),i=w.useCallback(u=>e(Ye(u)),[e]),c=w.useCallback(u=>e(ze(u)),[e]),d=w.useCallback(u=>e(Ne(u)),[e]),p=w.useCallback(u=>e(Ee(u)),[e]),x=w.useCallback(u=>e(Ae(u)),[e]);return{dailyNorm:n,reps:t,filter:r,addDailyNorma:c,deleteReps:d,patchWater:p,addOneDrink:x,createWater:i}},ot=s.h2`
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 16px;
`,at=s.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    flex-direction: row;
    gap: 24px;
  }
`,se=s.p`
  font-size: 16px;
`,ce=s.span`
  font-size: 18px;
  color: ${a.colors.blue};
`,it=s.div`
  border: 1px solid ${a.colors.paleBlue};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  margin-bottom: 24px;
  width: auto;
`,st=s.p`
  color: ${a.colors.secondText};
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`,ct=s.span`
  color: ${a.colors.blue};
`,dt=s.div`
  margin-bottom: 24px;
`,lt=s.h3`
  margin-bottom: 16px;
  margin-top: 0;
`,ut=s.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
`,de=s.div`
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
`,Z=s.label``,ht=s.div`
  font-size: 18px;
  padding-bottom: 26px;
  span {
    padding-left: 5px;
    color: ${a.colors.blue};
    font-weight: bold;
  }
`,ee=s.label`
  display: block;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 8px;
  color: ${a.colors.black};
`,te=s(H)`
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
`,pt=s.button`
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
`,xt=s.div`
  width: 280px;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    min-width: 704px;
  }

  @media (min-width: ${a.breakpoint.desktop}) {
    min-width: 592px;
  }
`;function mt({toggleModal:e}){const{addDailyNorma:n}=E(),t=u=>{const{gender:m,weight:f,activityHours:$}=u;if(m&&f&&$){if(m==="man")return parseFloat(f)*.04+parseFloat($)*.6;if(m==="woman")return parseFloat(f)*.03+parseFloat($)*.4}return null},r={gender:"man",weight:"",activityHours:"",dailyNorma:""},i=new Date,c=String(i.getDate()).padStart(2,"0"),d=String(i.getMonth()+1).padStart(2,"0"),p=String(i.getFullYear()),x=`${c}.${d}.${p}`;return o.jsxs(xt,{children:[o.jsx(ot,{children:"My daily norma"}),o.jsx(oe,{initialValues:r,onSubmit:u=>{const f={daily_limit:u.dailyNorma*1e3,date:x};console.log("Form dailyNorma:",f),n(f),e()},children:({errors:u,touched:m,values:f,setFieldValue:$})=>o.jsxs(He,{children:[o.jsxs(at,{children:[o.jsxs(se,{children:["For girl:"," ",o.jsx(ce,{children:"V=(M*0,03) + (T*0,4)"})]}),o.jsxs(se,{children:["For man:"," ",o.jsx(ce,{children:"V=(M*0,04) + (T*0,6)"})]})]}),o.jsx(it,{children:o.jsxs(st,{children:[o.jsx(ct,{children:"* "}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),o.jsxs(dt,{children:[o.jsx(lt,{children:"Calculate your rate:"}),o.jsxs(ut,{children:[o.jsxs("label",{children:[o.jsx(H,{type:"radio",name:"gender",value:"man",onChange:()=>$("gender","man")}),"For man"]}),o.jsxs("label",{children:[o.jsx(H,{type:"radio",name:"gender",value:"woman",onChange:()=>$("gender","woman")}),"For woman"]})]}),u.gender&&m.gender&&o.jsx("div",{children:u.gender})]}),o.jsx(de,{children:o.jsxs(Z,{children:[o.jsx(ee,{children:"Your weight in kilograms:"}),o.jsx(te,{type:"number",name:"weight",placeholder:"0"}),u.weight&&m.weight&&o.jsx("div",{children:u.weight})]})}),o.jsxs(de,{children:[o.jsxs(ee,{children:[" ","The time of active participation in sports or other activities with a high physical. load in hours:"]}),o.jsxs(Z,{children:[o.jsx(te,{type:"number",name:"activityHours",placeholder:"0"}),u.activityHours&&m.activityHours&&o.jsx("div",{children:u.activityHours})]})]}),o.jsxs(ht,{children:["Your recommended water intake per day is:",o.jsxs("span",{children:[t(f)?parseFloat(t(f)).toFixed(2):0,"L"]})]}),o.jsx(ee,{children:"Write down how much water you will drink:s"}),o.jsx(Z,{children:o.jsx(te,{type:"number",name:"dailyNorma",placeholder:"0"})}),o.jsx(pt,{type:"submit",children:"Save"})]})})]})}const gt=()=>{const[e,n]=w.useState(!1),t=()=>{n(!e)},i=(_(ie)/1e3).toFixed(1)+" L";return o.jsxs(Ve,{children:[o.jsxs(Ke,{children:[o.jsx(Ue,{children:"My daily norma"}),o.jsxs(Ze,{children:[o.jsx("p",{children:i}),o.jsx(et,{type:"button",onClick:t,children:"Edit"})]})]}),o.jsx(Je,{}),e&&o.jsx(ae,{onClose:t,children:o.jsx(mt,{toggleModal:t})})]})},ft=s.div`
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
`,bt=s.h3`
  font-size: 18px;
  font-weight: 400;
  color: ${a.colors.blue};
  text-align: left;
  line-height: 1;
  width: 100%;
`,wt=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,yt=s.div`
  width: 256px;
  margin: 5px 14px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 325px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    width: 360px;
  }
`,kt=s.div`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${a.colors.paleBlue};
`,$t=s.span`
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
`,jt=s.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`,vt=s.span`
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
`,Mt=s.span`
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
`,Dt=s.span`
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
`,St=s.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 6px 76px 6px 76px;
  background-color: ${a.colors.blue};
  color: ${a.colors.white};
  border: none;

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
`,we=s.div`
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
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    min-width: 592px;
  }
`,L=s.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${a.colors.black};
  margin-bottom: 12px;
`,ye=s.div`
  margin-bottom: 24px;

  div {
    display: flex;
    align-items: center;
  }
`,ke=s.h2`
  margin-bottom: 24px;
  color: ${a.colors.black};
  font-size: 26px;
  line-height: 123%;
  font-weight: 600;
`,$e=s.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  margin-bottom: 16px;
`,je=s.p`
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
`,ve=s.div`
  background: ${a.colors.paleBlue};
  border-radius: 40px;
  padding: 6px 10px;
  width: 92px;
  height: 36px;
  margin-left: 10px;
  margin-right: 10px;
`,q=s.button`
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
`,R=s.svg`
  width: 24px;
  height: 24px;
  stroke: ${a.colors.blue};
  fill: ${a.colors.blue};
`,Me=s.div`
  margin-bottom: 24px;
`,De=s.select`
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
`,Se=s(H)`
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
`,Oe=s.div`
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
`,We=s.button`
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
`;const Te=({toggleModal:e})=>{const[n,t]=w.useState(""),[r,i]=w.useState([]),{addOneDrink:c}=E(),[d,p]=w.useState(0);w.useEffect(()=>{const l=new Date,h=l.getHours(),y=l.getMinutes(),S=[];for(let O=h;O<24;O++)for(let W=0;W<60;W+=5){if(O===h&&W<y)continue;const J=String(O).padStart(2,"0"),U=String(W).padStart(2,"0"),K=`${J}:${U}`;S.push(K)}const Q=String(h).padStart(2,"0"),G=String(y).padStart(2,"0"),V=`${Q}:${G}`;t(V),i(S)},[]);const x=new Date,u=String(x.getDate()).padStart(2,"0"),m=String(x.getMonth()+1).padStart(2,"0"),f=String(x.getFullYear()),$=`${u}.${m}.${f}`,v=l=>{let h="";return l>5e3&&(h="The value cannot exceed 5000ml"),h},g=l=>{l.preventDefault();const h={time:n,amount:d,date:$};console.log(h),c(h),p(0),t(""),e()},j=()=>{p(l=>Math.max(l-50,0))},k=()=>{const l=d+50,h=5e3;p(l<=h?l:h)};return o.jsx(oe,{initialValues:{amount:0,time:n},onSubmit:g,children:()=>o.jsxs(we,{children:[o.jsxs(ye,{children:[o.jsx(ke,{children:"Add Water"}),o.jsx($e,{children:"Choose a value:"}),o.jsx(L,{children:"Amount of water:"}),o.jsxs("div",{children:[o.jsx(q,{type:"button",onClick:j,children:o.jsx(R,{children:o.jsx("use",{href:`${M}#icon-minus`})})}),o.jsx(ve,{children:o.jsxs(je,{children:[d," ml"]})}),o.jsx(q,{type:"button",onClick:k,children:o.jsx(R,{children:o.jsx("use",{href:`${M}#icon-plus`})})})]})]}),o.jsxs(Me,{children:[o.jsx(L,{children:"Recording time:"}),o.jsxs(De,{name:"time",style:{width:"100%"},onChange:l=>t(l.target.value),children:[o.jsx("option",{value:n,children:n},"current-time"),r.map(l=>o.jsx("option",{value:l,children:l},l))]})]}),o.jsxs("div",{children:[o.jsx("h3",{children:"Enter the value of the water used:"}),o.jsx(Se,{type:"number",name:"amount",validate:v,max:5e3,value:d}),o.jsx(fe,{name:"amount",component:"div"})]}),o.jsxs(Oe,{children:[o.jsxs("span",{children:[d,"ml"]}),o.jsxs(We,{type:"submit",onClick:g,children:["Save"," "]})]})]})})},Ot=()=>{const[e,n]=w.useState(!1),t=_(rt),r=()=>{n(!e)},i=t.percent;return o.jsxs(ft,{children:[o.jsxs(wt,{children:[o.jsx(bt,{children:"Today"}),o.jsxs(yt,{children:[o.jsx(kt,{children:o.jsx($t,{style:{width:`${Math.min(i,100)}%`}})}),o.jsxs(jt,{children:[o.jsx(vt,{children:"0%"}),i<100&&i>0&&o.jsxs(Dt,{left:`${i}%`,children:[i,"%"]}),o.jsx(Mt,{children:"100%"})]})]})]}),o.jsxs(St,{onClick:r,children:[o.jsx("svg",{children:o.jsx("use",{href:`${M}#icon-outline`})}),"Add water"]}),e&&o.jsx(ae,{onClose:r,children:o.jsx(Te,{toggleModal:r})})]})},Wt="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Tt=(e=21)=>{let n="",t=crypto.getRandomValues(new Uint8Array(e));for(;e--;)n+=Wt[t[e]&63];return n};const Pt=s.div`
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
`,Nt=s.svg`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${a.colors.skyBlue};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.skyBlue};
  }
`,Et=s.svg`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${a.colors.brightRed};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.brightRed};
  }
`,At=s.button`
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
`;s.div`
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
`;s.h2`
  color: ${a.colors.black};
  width: 200px;
  font-size: 26px;
  line-height: 123%;
  font-weight: 500;
  margin: 0;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 384px;
  }
`;s.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 544px;
  }
`;const Ht=s.div`
  display: flex;
  align-items: center;
  width: 208px;
  height: 52px;
  border-radius: 10px;
  padding: 8px 24px;
  gap: 12px;
  background-color: ${a.colors.lightBlue};
  margin-bottom: 24px;
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
  }
`,Lt=s.svg`
  width: 36px;
  height: 36px;
  fill: transparent;
`;s.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  div {
    display: flex;
    align-items: center;
  }
`;s.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  margin: 0;
  color: ${a.colors.black};
`;s.p`
  font-size: 16px;
  line-height: 111%;
  color: ${a.colors.black};
  margin: 0;
`;s.div`
  gap: 7px;
  width: 194px;
  height: 44px;
`;s.button`
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
`;s.svg`
  width: 24px;
  height: 24px;
  stroke: ${a.colors.blue};
  fill: ${a.colors.blue};
`;s.div`
  background: ${a.colors.paleBlue};
  border-radius: 40px;
  width: 92px;
  height: 36px;
`;s.p`
  color: ${a.colors.blue};
  align-items: center;
  justify-content: center;
  display: flex;
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  margin: 0 auto;
`;s.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;s.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;s.div`
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
`;s.button`
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
`;s.input`
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
`;const qt=({toggleModal:e})=>{const[n,t]=w.useState(""),[r,i]=w.useState([]),{addOneDrink:c}=E(),[d,p]=w.useState(0);w.useEffect(()=>{const l=new Date,h=l.getHours(),y=l.getMinutes(),S=[];for(let O=h;O<24;O++)for(let W=0;W<60;W+=5){if(O===h&&W<y)continue;const J=String(O).padStart(2,"0"),U=String(W).padStart(2,"0"),K=`${J}:${U}`;S.push(K)}const Q=String(h).padStart(2,"0"),G=String(y).padStart(2,"0"),V=`${Q}:${G}`;t(V),i(S)},[]);const x=new Date,u=String(x.getDate()).padStart(2,"0"),m=String(x.getMonth()+1).padStart(2,"0"),f=String(x.getFullYear()),$=`${u}.${m}.${f}`,v=l=>{let h="";return l>5e3&&(h="The value cannot exceed 5000ml"),h},g=l=>{l.preventDefault();const h={time:n,amount:d,date:$};console.log(h),c(h),p(0),t(""),e()},j=()=>{p(l=>Math.max(l-50,0))},k=()=>{const l=d+50,h=5e3;p(l<=h?l:h)};return o.jsx(oe,{initialValues:{amount:0,time:n},onSubmit:g,children:()=>o.jsxs(we,{children:[o.jsxs(ye,{children:[o.jsx(ke,{children:"Edit the entered amount of water"}),o.jsxs(Ht,{children:[o.jsx(Lt,{children:o.jsx("use",{href:`${M}#icon-glass`})}),o.jsxs("h4",{children:[d," ml"]}),o.jsxs("p",{children:[n," AM"]})]}),o.jsx($e,{children:"Choose a value:"}),o.jsx(L,{children:"Amount of water:"}),o.jsxs("div",{children:[o.jsx(q,{type:"button",onClick:j,children:o.jsx(R,{children:o.jsx("use",{href:`${M}#icon-minus`})})}),o.jsx(ve,{children:o.jsxs(je,{children:[d," ml"]})}),o.jsx(q,{type:"button",onClick:k,children:o.jsx(R,{children:o.jsx("use",{href:`${M}#icon-plus`})})})]})]}),o.jsxs(Me,{children:[o.jsx(L,{children:"Recording time:"}),o.jsxs(De,{name:"time",style:{width:"100%"},onChange:l=>t(l.target.value),children:[o.jsx("option",{value:n,children:n},"current-time"),r.map(l=>o.jsx("option",{value:l,children:l},l))]})]}),o.jsxs("div",{children:[o.jsx("h3",{children:"Enter the value of the water used:"}),o.jsx(Se,{type:"number",name:"amount",validate:v,max:5e3,value:d}),o.jsx(fe,{name:"amount",component:"div"})]}),o.jsxs(Oe,{children:[o.jsxs("span",{children:[d,"ml"]}),o.jsxs(We,{type:"submit",onClick:g,children:["Save"," "]})]})]})})},Rt=s.div`
  display: flex;
  flex-direction: column;
  margin: 8px 12px;
  row-gap: 24px;
  @media screen and (min-width: ${a.breakpoint.mobile}) and (max-width: ${a.breakpoint.tablet}) {
    width: 232px;
  }
`,Xt=s.div`
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
`,It=s.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    flex-direction: row;
    margin-left: 200px;
    column-gap: 24px;
  }
`,Qt=s.button`
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
`,Gt=s.button`
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
`;C.defaults.baseURL="https://project-deep-water-server.onrender.com/api";Y("water/postWater",async(e,{rejectWithValue:n,getState:t})=>{try{const i=t().users.token;if(!i){console.error("No token found.");return}const c={Authorization:`Bearer ${i}`};return(await C.post("/waters/created",e,{headers:c})).data}catch(r){return console.log("Error createWaterThunk",r.message),n(r.message)}});Y("water/getMonth",async(e,{rejectWithValue:n,getState:t})=>{try{const i=t().users.token;if(!i){console.error("No token found.");return}const c={Authorization:`Bearer ${i}`};return(await C.post("/waters/month",e,{headers:c})).data}catch(r){return console.log("Error getMonthThunk",r.message),n(r.message)}});Y("water/addDrink",async(e,{rejectWithValue:n,getState:t})=>{try{const i=t().users.token;if(!i){console.error("No token found.");return}const c={Authorization:`Bearer ${i}`};return await C.post("/waters/drink",e,{headers:c})}catch(r){return n(r.message)}});Y("waters/patchDailyLimit",async(e,{rejectWithValue:n,getState:t})=>{try{const i=t().users.token;if(!i){console.error("No token found.");return}const c={Authorization:`Bearer ${i}`};return(await C.patch("/waters/daily_limit",e,{headers:c})).data}catch(r){return console.log("Error addDailyNormaThunk",r.message),n(r.message)}});Y("water/patchWater",async({waterId:e,water:n},{rejectWithValue:t,getState:r})=>{try{const c=r().users.token;if(!c){console.error("No token found.");return}if(!n){console.error("No body found.");return}const d={Authorization:`Bearer ${c}`};return(await C.put(`/waters/${e}`,n,{headers:d})).data}catch(i){return t(i.message)}});const Vt=Y("water/deleteWater",async({date:e,id:n},{rejectWithValue:t,getState:r})=>{try{const c=r().users.token;if(!c){console.error("No token found.");return}const d={Authorization:`Bearer ${c}`};return(await C.delete(`/waters/drink/${n}?date=${e.date}`,{headers:d})).data}catch(i){return console.log("Error deleteContactThunk",i.message),t(i.message)}}),Jt=({id:e,date:n,toggleModal:t})=>{const r=re(),i=()=>{r(Vt({id:e,date:n})),t()};return o.jsx(o.Fragment,{children:o.jsxs(Rt,{children:[o.jsxs(Xt,{children:[o.jsx("h2",{children:"Delete entry"}),o.jsx("p",{children:"Are you sure you want to delete the entry?"})]}),o.jsxs(It,{children:[o.jsx(Qt,{type:"button",onClick:t,children:"Cancel"}),o.jsx(Gt,{type:"button",onClick:i,children:"Delete"})]})]})})},Ut=()=>{const[e,n]=w.useState(!1),[t,r]=w.useState(null),{createWater:i}=E(),c=Date.now(),p=new Date(c).toLocaleDateString(),{reps:x}=E();w.useEffect(()=>{i({date:p})},[p,i]);const u=()=>{n(!e)},m=f=>{r(f),n(!0)};return o.jsxs(o.Fragment,{children:[o.jsxs(Pt,{children:[o.jsx(Ft,{children:"Today"}),o.jsx(Bt,{children:x.map(f=>o.jsxs(Ct,{children:[o.jsxs(_t,{children:[o.jsx(Yt,{children:o.jsx("use",{href:`${M}#icon-glass`})}),o.jsxs("h4",{children:[f.amount," ml"]}),o.jsxs("p",{children:[f.time,o.jsx("span",{children:" AM"})]})]}),o.jsxs(zt,{children:[o.jsx(Nt,{onClick:()=>m(o.jsx(qt,{toggleModal:u})),children:o.jsx("use",{href:`${M}#icon-note`})}),o.jsx(Et,{onClick:()=>m(o.jsx(Jt,{id:f._id,date:{date:p},toggleModal:u})),children:o.jsx("use",{href:`${M}#icon-trash`})})]})]},Tt()))}),o.jsxs(At,{onClick:()=>m(o.jsx(Te,{})),children:[o.jsx("svg",{children:o.jsx("use",{href:`${M}#icon-increment`})}),"Add water"]})]}),e&&o.jsx(ae,{onClose:u,children:t})]})};const Kt=s.div`
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
`,Zt=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,en=s.div`
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
`,le=s.svg`
  width: 6px;
  height: 10px;
  background: transparent;
  fill: ${a.colors.blue};

  &:hover {
    fill: ${a.colors.orange};
  }
`,tn=s.div`
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
`,nn=s.button`
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
    color: ${a.colors.white};
    background-color: ${a.colors.blue};
  }

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    font-size: 16px;
    padding: 7px;
  }

  ${({percent:e})=>e>=100?`
      border: 1px solid  ${a.colors.blue};
        
      `:e>0?`
      border: 1px solid ${a.colors.orange};
        
      `:`
        background-color: ${a.colors.white};
      `}

  &:hover {
    box-shadow: 0px 4px 8px ${a.colors.skyBlue};
    border: 1px solid ${a.colors.orange};
  }
`,rn=s.div`
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
`,on=s.div`
  margin: 0 auto;
  position: absolute;
  z-index: 20;
  top: 300px;
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
`;function D(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}function B(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}const Pe=6048e5,an=864e5;let sn={};function I(){return sn}function A(e,n){var p,x,u,m;const t=I(),r=(n==null?void 0:n.weekStartsOn)??((x=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:x.weekStartsOn)??t.weekStartsOn??((m=(u=t.locale)==null?void 0:u.options)==null?void 0:m.weekStartsOn)??0,i=D(e),c=i.getDay(),d=(c<r?7:0)+c-r;return i.setDate(i.getDate()-d),i.setHours(0,0,0,0),i}function X(e){return A(e,{weekStartsOn:1})}function Be(e){const n=D(e),t=n.getFullYear(),r=B(e,0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const i=X(r),c=B(e,0);c.setFullYear(t,0,4),c.setHours(0,0,0,0);const d=X(c);return n.getTime()>=i.getTime()?t+1:n.getTime()>=d.getTime()?t:t-1}function ue(e){const n=D(e);return n.setHours(0,0,0,0),n}function he(e){const n=D(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function cn(e,n){const t=ue(e),r=ue(n),i=+t-he(t),c=+r-he(r);return Math.round((i-c)/an)}function dn(e){const n=Be(e),t=B(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),X(t)}function ln(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function un(e){if(!ln(e)&&typeof e!="number")return!1;const n=D(e);return!isNaN(Number(n))}function hn(e){const n=D(e),t=B(e,0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}const pn={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},xn=(e,n,t)=>{let r;const i=pn[e];return typeof i=="string"?r=i:n===1?r=i.one:r=i.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function ne(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const mn={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},gn={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},fn={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},bn={date:ne({formats:mn,defaultWidth:"full"}),time:ne({formats:gn,defaultWidth:"full"}),dateTime:ne({formats:fn,defaultWidth:"full"})},wn={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},yn=(e,n,t,r)=>wn[e];function z(e){return(n,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let i;if(r==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,p=t!=null&&t.width?String(t.width):d;i=e.formattingValues[p]||e.formattingValues[d]}else{const d=e.defaultWidth,p=t!=null&&t.width?String(t.width):e.defaultWidth;i=e.values[p]||e.values[d]}const c=e.argumentCallback?e.argumentCallback(n):n;return i[c]}}const kn={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},$n={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},jn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},vn={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Mn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Dn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Sn=(e,n)=>{const t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},On={ordinalNumber:Sn,era:z({values:kn,defaultWidth:"wide"}),quarter:z({values:$n,defaultWidth:"wide",argumentCallback:e=>e-1}),month:z({values:jn,defaultWidth:"wide"}),day:z({values:vn,defaultWidth:"wide"}),dayPeriod:z({values:Mn,defaultWidth:"wide",formattingValues:Dn,defaultFormattingWidth:"wide"})};function N(e){return(n,t={})=>{const r=t.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],c=n.match(i);if(!c)return null;const d=c[0],p=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],x=Array.isArray(p)?Tn(p,f=>f.test(d)):Wn(p,f=>f.test(d));let u;u=e.valueCallback?e.valueCallback(x):x,u=t.valueCallback?t.valueCallback(u):u;const m=n.slice(d.length);return{value:u,rest:m}}}function Wn(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function Tn(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function Pn(e){return(n,t={})=>{const r=n.match(e.matchPattern);if(!r)return null;const i=r[0],c=n.match(e.parsePattern);if(!c)return null;let d=e.valueCallback?e.valueCallback(c[0]):c[0];d=t.valueCallback?t.valueCallback(d):d;const p=n.slice(i.length);return{value:d,rest:p}}}const Bn=/^(\d+)(th|st|nd|rd)?/i,Cn=/\d+/i,Fn={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},_n={any:[/^b/i,/^(a|c)/i]},Yn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},zn={any:[/1/i,/2/i,/3/i,/4/i]},Nn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},En={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},An={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Hn={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ln={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},qn={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Rn={ordinalNumber:Pn({matchPattern:Bn,parsePattern:Cn,valueCallback:e=>parseInt(e,10)}),era:N({matchPatterns:Fn,defaultMatchWidth:"wide",parsePatterns:_n,defaultParseWidth:"any"}),quarter:N({matchPatterns:Yn,defaultMatchWidth:"wide",parsePatterns:zn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:N({matchPatterns:Nn,defaultMatchWidth:"wide",parsePatterns:En,defaultParseWidth:"any"}),day:N({matchPatterns:An,defaultMatchWidth:"wide",parsePatterns:Hn,defaultParseWidth:"any"}),dayPeriod:N({matchPatterns:Ln,defaultMatchWidth:"any",parsePatterns:qn,defaultParseWidth:"any"})},Xn={code:"en-US",formatDistance:xn,formatLong:bn,formatRelative:yn,localize:On,match:Rn,options:{weekStartsOn:0,firstWeekContainsDate:1}};function In(e){const n=D(e);return cn(n,hn(n))+1}function Qn(e){const n=D(e),t=+X(n)-+dn(n);return Math.round(t/Pe)+1}function Ce(e,n){var m,f,$,v;const t=D(e),r=t.getFullYear(),i=I(),c=(n==null?void 0:n.firstWeekContainsDate)??((f=(m=n==null?void 0:n.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??i.firstWeekContainsDate??((v=($=i.locale)==null?void 0:$.options)==null?void 0:v.firstWeekContainsDate)??1,d=B(e,0);d.setFullYear(r+1,0,c),d.setHours(0,0,0,0);const p=A(d,n),x=B(e,0);x.setFullYear(r,0,c),x.setHours(0,0,0,0);const u=A(x,n);return t.getTime()>=p.getTime()?r+1:t.getTime()>=u.getTime()?r:r-1}function Gn(e,n){var p,x,u,m;const t=I(),r=(n==null?void 0:n.firstWeekContainsDate)??((x=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:x.firstWeekContainsDate)??t.firstWeekContainsDate??((m=(u=t.locale)==null?void 0:u.options)==null?void 0:m.firstWeekContainsDate)??1,i=Ce(e,n),c=B(e,0);return c.setFullYear(i,0,r),c.setHours(0,0,0,0),A(c,n)}function Vn(e,n){const t=D(e),r=+A(t,n)-+Gn(t,n);return Math.round(r/Pe)+1}function b(e,n){const t=e<0?"-":"",r=Math.abs(e).toString().padStart(n,"0");return t+r}const T={y(e,n){const t=e.getFullYear(),r=t>0?t:1-t;return b(n==="yy"?r%100:r,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):b(t+1,2)},d(e,n){return b(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return b(e.getHours()%12||12,n.length)},H(e,n){return b(e.getHours(),n.length)},m(e,n){return b(e.getMinutes(),n.length)},s(e,n){return b(e.getSeconds(),n.length)},S(e,n){const t=n.length,r=e.getMilliseconds(),i=Math.trunc(r*Math.pow(10,t-3));return b(i,n.length)}},F={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},pe={G:function(e,n,t){const r=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const r=e.getFullYear(),i=r>0?r:1-r;return t.ordinalNumber(i,{unit:"year"})}return T.y(e,n)},Y:function(e,n,t,r){const i=Ce(e,r),c=i>0?i:1-i;if(n==="YY"){const d=c%100;return b(d,2)}return n==="Yo"?t.ordinalNumber(c,{unit:"year"}):b(c,n.length)},R:function(e,n){const t=Be(e);return b(t,n.length)},u:function(e,n){const t=e.getFullYear();return b(t,n.length)},Q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return b(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return b(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,n,t){const r=e.getMonth();switch(n){case"M":case"MM":return T.M(e,n);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(e,n,t){const r=e.getMonth();switch(n){case"L":return String(r+1);case"LL":return b(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,t,r){const i=Vn(e,r);return n==="wo"?t.ordinalNumber(i,{unit:"week"}):b(i,n.length)},I:function(e,n,t){const r=Qn(e);return n==="Io"?t.ordinalNumber(r,{unit:"week"}):b(r,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):T.d(e,n)},D:function(e,n,t){const r=In(e);return n==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):b(r,n.length)},E:function(e,n,t){const r=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(e,n,t,r){const i=e.getDay(),c=(i-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(c);case"ee":return b(c,2);case"eo":return t.ordinalNumber(c,{unit:"day"});case"eee":return t.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(i,{width:"short",context:"formatting"});case"eeee":default:return t.day(i,{width:"wide",context:"formatting"})}},c:function(e,n,t,r){const i=e.getDay(),c=(i-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(c);case"cc":return b(c,n.length);case"co":return t.ordinalNumber(c,{unit:"day"});case"ccc":return t.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(i,{width:"narrow",context:"standalone"});case"cccccc":return t.day(i,{width:"short",context:"standalone"});case"cccc":default:return t.day(i,{width:"wide",context:"standalone"})}},i:function(e,n,t){const r=e.getDay(),i=r===0?7:r;switch(n){case"i":return String(i);case"ii":return b(i,n.length);case"io":return t.ordinalNumber(i,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(e,n,t){const i=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,n,t){const r=e.getHours();let i;switch(r===12?i=F.noon:r===0?i=F.midnight:i=r/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,n,t){const r=e.getHours();let i;switch(r>=17?i=F.evening:r>=12?i=F.afternoon:r>=4?i=F.morning:i=F.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let r=e.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return T.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):T.H(e,n)},K:function(e,n,t){const r=e.getHours()%12;return n==="Ko"?t.ordinalNumber(r,{unit:"hour"}):b(r,n.length)},k:function(e,n,t){let r=e.getHours();return r===0&&(r=24),n==="ko"?t.ordinalNumber(r,{unit:"hour"}):b(r,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):T.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):T.s(e,n)},S:function(e,n){return T.S(e,n)},X:function(e,n,t){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(n){case"X":return me(r);case"XXXX":case"XX":return P(r);case"XXXXX":case"XXX":default:return P(r,":")}},x:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"x":return me(r);case"xxxx":case"xx":return P(r);case"xxxxx":case"xxx":default:return P(r,":")}},O:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+xe(r,":");case"OOOO":default:return"GMT"+P(r,":")}},z:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+xe(r,":");case"zzzz":default:return"GMT"+P(r,":")}},t:function(e,n,t){const r=Math.trunc(e.getTime()/1e3);return b(r,n.length)},T:function(e,n,t){const r=e.getTime();return b(r,n.length)}};function xe(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),i=Math.trunc(r/60),c=r%60;return c===0?t+String(i):t+String(i)+n+b(c,2)}function me(e,n){return e%60===0?(e>0?"-":"+")+b(Math.abs(e)/60,2):P(e,n)}function P(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),i=b(Math.trunc(r/60),2),c=b(r%60,2);return t+i+n+c}const ge=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},Fe=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},Jn=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],r=t[1],i=t[2];if(!i)return ge(e,n);let c;switch(r){case"P":c=n.dateTime({width:"short"});break;case"PP":c=n.dateTime({width:"medium"});break;case"PPP":c=n.dateTime({width:"long"});break;case"PPPP":default:c=n.dateTime({width:"full"});break}return c.replace("{{date}}",ge(r,n)).replace("{{time}}",Fe(i,n))},Un={p:Fe,P:Jn},Kn=/^D+$/,Zn=/^Y+$/,er=["D","DD","YY","YYYY"];function tr(e){return Kn.test(e)}function nr(e){return Zn.test(e)}function rr(e,n,t){const r=or(e,n,t);if(console.warn(r),er.includes(e))throw new RangeError(r)}function or(e,n,t){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ar=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ir=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,sr=/^'([^]*?)'?$/,cr=/''/g,dr=/[a-zA-Z]/;function lr(e,n,t){var m,f,$,v,g,j,k,l;const r=I(),i=(t==null?void 0:t.locale)??r.locale??Xn,c=(t==null?void 0:t.firstWeekContainsDate)??((f=(m=t==null?void 0:t.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??r.firstWeekContainsDate??((v=($=r.locale)==null?void 0:$.options)==null?void 0:v.firstWeekContainsDate)??1,d=(t==null?void 0:t.weekStartsOn)??((j=(g=t==null?void 0:t.locale)==null?void 0:g.options)==null?void 0:j.weekStartsOn)??r.weekStartsOn??((l=(k=r.locale)==null?void 0:k.options)==null?void 0:l.weekStartsOn)??0,p=D(e);if(!un(p))throw new RangeError("Invalid time value");let x=n.match(ir).map(h=>{const y=h[0];if(y==="p"||y==="P"){const S=Un[y];return S(h,i.formatLong)}return h}).join("").match(ar).map(h=>{if(h==="''")return{isToken:!1,value:"'"};const y=h[0];if(y==="'")return{isToken:!1,value:ur(h)};if(pe[y])return{isToken:!0,value:h};if(y.match(dr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return{isToken:!1,value:h}});i.localize.preprocessor&&(x=i.localize.preprocessor(p,x));const u={firstWeekContainsDate:c,weekStartsOn:d,locale:i};return x.map(h=>{if(!h.isToken)return h.value;const y=h.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&nr(y)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&tr(y))&&rr(y,n,String(e));const S=pe[y[0]];return S(p,y,i.localize,u)}).join("")}function ur(e){const n=e.match(sr);return n?n[1].replace(cr,"'"):e}const hr=()=>{const e=re(),n=_(nt),[t,r]=w.useState(new Date),[i,c]=w.useState(null),d=new Date,p=(d.getMonth()+1).toString().padStart(2,"0"),x=d.getFullYear().toString();w.useEffect(()=>{e(Le({date:`${p}.${x}`}))},[e,p,x]);const u=g=>{r(j=>{const k=new Date(j);return k.setMonth(k.getMonth()+g),k})},m=()=>{const j=new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),k=[];for(let l=1;l<=j;l++)k.push(l);return k},f=g=>{c(g)},$=m().length;let v=[];for(let g=0;g<=$;g+=1){let j={day:g.toString(),daily_limit:2e3,count:0,percent:0,id:""};for(let k=0;k<n.length;k++){const l=n[k];g.toString()===l.date[1]&&(j={day:l.date[1],daily_limit:l.daily_limit,count:l.count,percent:l.percent,id:l._id})}v.push(j)}return o.jsxs("div",{children:[o.jsxs(Kt,{children:[o.jsxs(Zt,{children:[o.jsx("h3",{children:"Month"}),o.jsxs(en,{children:[o.jsx(le,{onClick:()=>u(-1),children:o.jsx("use",{href:`${M}#icon-left`})}),o.jsx("span",{children:t.toLocaleDateString("en",{month:"long",year:"numeric"})}),o.jsx(le,{onClick:()=>u(1),children:o.jsx("use",{href:`${M}#icon-right`})})]})]}),o.jsx(tn,{children:m().map(g=>{const j=new Date,k=new Date(t.getFullYear(),t.getMonth(),g),l=j.toDateString()===k.toDateString(),h=v[g];return o.jsxs("div",{children:[o.jsx(nn,{percent:h.percent?h.percent:0,onClick:()=>f(g),className:l?"today":"",children:g}),o.jsx(rn,{children:`${h.percent}%`})]},g-1)})})]}),i&&o.jsxs(on,{day:i,children:[o.jsx("p",{children:o.jsx("span",{children:lr(new Date(t.getFullYear(),t.getMonth(),i),"d, MMMM")})}),n.map(g=>parseInt(g.date.split(".")[0],10)===i?o.jsxs("div",{children:[o.jsxs("p",{children:["Daily limit: ",o.jsxs("span",{children:[g.daily_limit/1e3," L"]})]}),o.jsxs("p",{children:["Fulfillment of the daily limit:"," ",o.jsxs("span",{children:[g.percent,"%"]})]}),o.jsxs("p",{children:["Number of water servings: ",o.jsx("span",{children:g.count})]})]},g._id):null),!n.some(g=>parseInt(g.date.split(".")[0],10)===i&&g.percent===0)&&o.jsx("div",{children:o.jsx("p",{children:"You did not drink on this day."})}),new Date<new Date(t.getFullYear(),t.getMonth(),i)&&o.jsx("div",{children:o.jsx("p",{children:"This day has not yet arrived."})})]})]})},pr=s.div`
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
`,xr=s.div`
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
`,mr=s.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    max-width: 50%;
  }
`,gr=s.div`
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
`,br=()=>o.jsx(o.Fragment,{children:o.jsx(gr,{children:o.jsxs(pr,{children:[o.jsxs(mr,{children:[o.jsx(gt,{}),o.jsx(Ot,{})]}),o.jsxs(xr,{children:[o.jsx(Ut,{}),o.jsx(hr,{})]})]})})});export{br as default};
