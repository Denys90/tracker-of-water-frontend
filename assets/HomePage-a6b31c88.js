import{n as s,t as i,d as _e,e as ge,f as F,r as y,g as Ye,h as ze,i as Ee,p as Ne,k as He,F as A,j as r,b as re,c as Ae,M as oe,s as M,E as fe,l as Le}from"./index-05e69e44.js";import{i as Re,a as qe,b as Ie,c as Xe,d as Qe,e as Ve}from"./bubbleDesk@2x-afc6d3c1.js";const Ge="/runners_of_code__frontend/assets/bottle_home_mobile@1x-0d6054eb.png",Je="/runners_of_code__frontend/assets/bottle_home_mobile@2x-52eb5066.png",Ue="/runners_of_code__frontend/assets/bottle_home_tablet@1x-c4bedac4.png",Ke="/runners_of_code__frontend/assets/bottle_home_tablet@2x-867eb443.png",Ze="/runners_of_code__frontend/assets/bottle_home_desk-f67b46be.png",et="/runners_of_code__frontend/assets/bottle_home_deskx2-acd9b153.png",tt=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;
`,nt=s.div`
  background-position: left bottom;
  background-image: -webkit-image-set(
    url(${Ge}) 1x,
    url(${Je}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;
  z-index: -1;

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${Ue}) 1x,
      url(${Ke}) 2x
    );
    height: 386px;
    margin-top: -114px;
    background-position: center top;
  }

  @media screen and (min-width: ${i.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Ze}) 1x,
      url(${et}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,rt=s.h3`
  font-size: 18px;
  line-height: 1.33;
  font-family: 'Roboto-Bold', sans-serif;
  margin-bottom: 12px;
  color: ${i.colors.black};
`,ot=s.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 8px 20px;
  padding-top: 20px;
  width: 164px;

  border-radius: 10px;
  border: 1px solid ${i.colors.lightBlue};
  box-shadow: ${i.boxShadowBtn.Btn};

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    margin: 0;

    color: ${i.colors.blue};
  }
`,it=s.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`,at=s.button`
  padding: 0;
  background-color: ${i.colors.white};
  color: ${i.colors.paleBlue};
  border: none;
  font-size: 16px;
  &:hover {
    color: ${i.colors.orange};
  }
`,ie=e=>e.waters.dailyNorm,st=e=>e.waters.reps,be=e=>e.filter,ct=e=>e.waters.month,dt=e=>e.waters;_e([ie,be],(e,n)=>e.filter(t=>t.name.toLowerCase().includes(n.toLowerCase())));const H=()=>{const e=ge(),n=F(ie),t=F(st),o=F(be),a=y.useCallback(d=>e(Ye(d)),[e]),c=y.useCallback(d=>e(ze(d)),[e]),x=y.useCallback(d=>e(Ee(d)),[e]),u=y.useCallback(d=>e(Ne(d)),[e]),m=y.useCallback(d=>e(He(d)),[e]);return{dailyNorm:n,reps:t,filter:o,addDailyNorma:c,deleteReps:x,patchWater:u,addOneDrink:m,createWater:a}},lt=s.h2`
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 16px;
`,ut=s.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    flex-direction: row;
    gap: 24px;
  }
`,ae=s.p`
  font-size: 16px;
`,se=s.span`
  font-size: 18px;
  color: ${i.colors.blue};
`,ht=s.div`
  border: 1px solid ${i.colors.paleBlue};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  margin-bottom: 24px;
  width: auto;
`,pt=s.p`
  color: ${i.colors.secondText};
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`,xt=s.span`
  color: ${i.colors.blue};
`,mt=s.div`
  margin-bottom: 24px;
`,gt=s.h3`
  margin-bottom: 16px;
  margin-top: 0;
`,ft=s.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
`,ce=s.div`
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
`,Z=s.label``,bt=s.div`
  font-size: 18px;
  padding-bottom: 26px;
  span {
    padding-left: 5px;
    color: ${i.colors.blue};
    font-weight: bold;
  }
`,ee=s.label`
  display: block;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 8px;
  color: ${i.colors.black};
`,te=s(A)`
  display: flex;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid ${i.colors.paleBlue};
  padding: 12px 10px;
  color: ${i.colors.blue};
  font-size: 16px;
  width: 100%;
  &::placeholder {
    color: ${i.colors.paleBlue};
  }
  &:hover,
  &:focus {
    outline: none;
    border-color: ${i.colors.blue};
  }
`,wt=s.button`
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

  @media screen and (min-width: ${i.breakpoint.tablet}) {
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

  @media (min-width: ${i.breakpoint.desktop}) {
    /* width: 384px; */
  }
`,yt=s.div`
  width: 280px;
  @media screen and (min-width: ${i.breakpoint.tablet}) {
    min-width: 704px;
  }

  @media (min-width: ${i.breakpoint.desktop}) {
    min-width: 592px;
  }
`;function kt({toggleModal:e}){const{addDailyNorma:n}=H(),t=d=>{const{gender:g,weight:f,activityHours:k}=d;if(g&&f&&k){if(g==="man")return parseFloat(f)*.04+parseFloat(k)*.6;if(g==="woman")return parseFloat(f)*.03+parseFloat(k)*.4}return null},o={gender:"man",weight:"",activityHours:"",dailyNorma:""},a=new Date,c=String(a.getDate()).padStart(2,"0"),x=String(a.getMonth()+1).padStart(2,"0"),u=String(a.getFullYear()),m=`${c}.${x}.${u}`;return r.jsxs(yt,{children:[r.jsx(lt,{children:"My daily norma"}),r.jsx(re,{initialValues:o,onSubmit:d=>{const f={daily_limit:d.dailyNorma*1e3,date:m};console.log("Form dailyNorma:",f),n(f),e()},children:({errors:d,touched:g,values:f,setFieldValue:k})=>r.jsxs(Ae,{children:[r.jsxs(ut,{children:[r.jsxs(ae,{children:["For girl:"," ",r.jsx(se,{children:"V=(M*0,03) + (T*0,4)"})]}),r.jsxs(ae,{children:["For man:"," ",r.jsx(se,{children:"V=(M*0,04) + (T*0,6)"})]})]}),r.jsx(ht,{children:r.jsxs(pt,{children:[r.jsx(xt,{children:"* "}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),r.jsxs(mt,{children:[r.jsx(gt,{children:"Calculate your rate:"}),r.jsxs(ft,{children:[r.jsxs("label",{children:[r.jsx(A,{type:"radio",name:"gender",value:"man",onChange:()=>k("gender","man")}),"For man"]}),r.jsxs("label",{children:[r.jsx(A,{type:"radio",name:"gender",value:"woman",onChange:()=>k("gender","woman")}),"For woman"]})]}),d.gender&&g.gender&&r.jsx("div",{children:g.gender})]}),r.jsx(ce,{children:r.jsxs(Z,{children:[r.jsx(ee,{children:"Your weight in kilograms:"}),r.jsx(te,{type:"number",name:"weight",placeholder:"0"}),d.weight&&g.weight&&r.jsx("div",{children:d.weight})]})}),r.jsxs(ce,{children:[r.jsxs(ee,{children:[" ","The time of active participation in sports or other activities with a high physical. load in hours:"]}),r.jsxs(Z,{children:[r.jsx(te,{type:"number",name:"activityHours",placeholder:"0"}),d.activityHours&&g.activityHours&&r.jsx("div",{children:d.activityHours})]})]}),r.jsxs(bt,{children:["Your recommended water intake per day is:",r.jsxs("span",{children:[t(f)?parseFloat(t(f)).toFixed(2):0,"L"]})]}),r.jsx(ee,{children:"Write down how much water you will drink:"}),r.jsx(Z,{children:r.jsx(te,{type:"number",name:"dailyNorma",placeholder:"0"})}),r.jsx(wt,{type:"submit",children:"Save"})]})})]})}const vt=()=>{const[e,n]=y.useState(!1),t=()=>{n(!e)},a=(F(ie)/1e3).toFixed(1)+" L";return r.jsxs(tt,{children:[r.jsxs(ot,{children:[r.jsx(rt,{children:"My daily norma"}),r.jsxs(it,{children:[r.jsx("p",{children:a}),r.jsx(at,{type:"button",onClick:t,children:"Edit"})]})]}),r.jsx(nt,{}),e&&r.jsx(oe,{onClose:t,children:r.jsx(kt,{toggleModal:t})})]})},$t=s.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 40px;

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 32px;
  }

  @media screen and (min-width: ${i.breakpoint.desktop}) {
    gap: 23px;
  }
`,jt=s.h3`
  font-size: 18px;
  font-weight: 400;
  color: ${i.colors.blue};
  text-align: left;
  line-height: 1;
  width: 100%;
`,Mt=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Dt=s.div`
  width: 256px;
  margin: 5px 14px;

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    width: 325px;
  }

  @media screen and (min-width: ${i.breakpoint.desktop}) {
    width: 360px;
  }
`,St=s.div`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${i.colors.paleBlue};
`,Ot=s.span`
  /* width: 50%; */
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${i.colors.skyBlue};
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
    background: ${i.colors.white};
    border: solid 1px ${i.colors.blue};

    margin-top: -3px;
  }
`,Pt=s.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`,Wt=s.span`
  transform: translateX(-50%);
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${i.colors.blue};

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    color: ${i.colors.paleBlue};
  }
`,Tt=s.span`
  transform: translateX(50%);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${i.colors.blue};

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${i.colors.paleBlue};
  }
`,Ct=s.span`
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
  color: ${i.colors.blue};
  left: ${e=>e.left};

  transition: all 0.5s ease-out;

  &::before {
    content: '|';
    justify-content: center;
    align-items: center;
    color: ${i.colors.paleBlue};
    font-size: 12px;
  }
`,Bt=s.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 6px 76px 6px 76px;
  background-color: ${i.colors.blue};
  color: ${i.colors.white};
  border: none;

  width: 256px;
  margin-left: 14px;

  svg {
    width: 24px;
    height: 24px;
    fill: ${i.colors.blue};
    stroke: ${i.colors.white};
  }

  &:hover {
    box-shadow: ${i.boxShadowBtn.hoverBtn};
  }

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    max-width: 336px;
    height: 43px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${i.breakpoint.desktop}) {
    width: 178px;
    height: 44px;
    padding: 10px 30px 10px 30px;
  }
`,we=s.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 16px;
    color: ${i.colors.black};
    font-size: 18px;
    font-weight: 700;
    line-height: 1.1;
  }

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    min-width: 704px;
  }

  @media screen and (min-width: ${i.breakpoint.desktop}) {
    min-width: 592px;
  }
`,L=s.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${i.colors.black};
  margin-bottom: 12px;
`,ye=s.div`
  margin-bottom: 24px;

  div {
    display: flex;
    align-items: center;
  }
`,ke=s.h2`
  margin-bottom: 24px;
  color: ${i.colors.black};
  font-size: 26px;
  line-height: 123%;
  font-weight: 600;
`,ve=s.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  margin-bottom: 16px;
`,$e=s.p`
  color: ${i.colors.blue};
  align-items: center;
  justify-content: center;
  display: flex;
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  width: 92px;
  height: 36px;
  margin: 0 auto;
`,je=s.div`
  background: ${i.colors.paleBlue};
  border-radius: 40px;
  padding: 6px 10px;
  width: 92px;
  height: 36px;
  margin-left: 10px;
  margin-right: 10px;
`,R=s.button`
  background-color: ${i.colors.white};
  color: ${i.colors.blue};
  border-radius: 30px;
  border: 1px solid ${i.colors.skyBlue};
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 4px;

  &:hover {
    box-shadow: ${i.boxShadowBtn.hoverBtn};
  }
`,q=s.svg`
  width: 24px;
  height: 24px;
  stroke: ${i.colors.blue};
  fill: ${i.colors.blue};
`,Me=s.div`
  margin-bottom: 24px;
`,De=s.select`
  color: ${i.colors.blue};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 95%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${i.colors.paleBlue};
  background-color: ${i.colors.white};

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    width: 97%;
  }
  &:hover {
    border-color: ${i.colors.blue};
  }
`,Se=s(A)`
  color: ${i.colors.blue};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 95%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${i.colors.paleBlue};
  background-color: ${i.colors.white};

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${i.colors.skyBlue};
  }

  &:hover {
    color: ${i.colors.blue};
    border: 1px solid ${i.colors.blue};
  }

  &:focus {
    outline: none;
    border: 1px solid ${i.colors.blue};
  }

  &:not(:placeholder-shown) {
    color: ${i.colors.blue};
  }
  @media screen and (min-width: ${i.breakpoint.tablet}) {
    width: 97%;
  }
`,Oe=s.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  span {
    color: ${i.colors.blue};
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 24px;
    margin-top: 24px;
  }
`,Pe=s.button`
  box-sizing: border-box;
  display: inline-block;
  width: 280px;
  gap: 10px;
  padding: 8px 30px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  background-color: ${i.colors.blue};
  box-shadow: ${i.boxShadowBtn.Btn};
  color: ${i.colors.white};
  cursor: pointer;

  &:hover {
    box-shadow: ${i.boxShadowBtn.hoverBtn};
  }

  &:active {
    box-shadow: ${i.boxShadowBtn.activeBtn};
  }

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    padding: 10px 30px;
    width: 160px;
    height: 44px;
  }

  @media screen and (min-width: ${i.breakpoint.desktop}) {
    padding: 10px 30px;
    width: 160px;
    height: 44px;
  }
`;s.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;const We=({toggleModal:e})=>{const[n,t]=y.useState(""),[o,a]=y.useState([]),{addOneDrink:c,createWater:x}=H(),[u,m]=y.useState(0);y.useEffect(()=>{const l=new Date,h=l.getHours(),_=l.getMinutes(),Y=[];for(let O=h;O<24;O++)for(let P=0;P<60;P+=5){if(O===h&&P<_)continue;const J=String(O).padStart(2,"0"),U=String(P).padStart(2,"0"),K=`${J}:${U}`;Y.push(K)}const Q=String(h).padStart(2,"0"),V=String(_).padStart(2,"0"),G=`${Q}:${V}`;t(G),a(Y)},[]);const d=new Date,g=String(d.getDate()).padStart(2,"0"),f=String(d.getMonth()+1).padStart(2,"0"),k=String(d.getFullYear()),$=`${g}.${f}.${k}`,D=l=>{let h="";return l>5e3&&(h="The value cannot exceed 5000ml"),h},p=()=>{c({time:n,amount:u,date:$}),x({date:$}),m(0),t(""),e()},w=()=>{m(l=>Math.max(l-50,0))},j=()=>{const l=u+50,h=5e3;m(l<=h?l:h)},v=l=>{const h=parseInt(l.target.value);m(h)};return r.jsx(re,{initialValues:{amount:0,time:n},onSubmit:p,children:l=>r.jsxs(we,{children:[r.jsxs(ye,{children:[r.jsx(ke,{children:"Add Water"}),r.jsx(ve,{children:"Choose a value:"}),r.jsx(L,{children:"Amount of water:"}),r.jsxs("div",{children:[r.jsx(R,{type:"button",onClick:w,children:r.jsx(q,{children:r.jsx("use",{href:`${M}#icon-minus`})})}),r.jsx(je,{children:r.jsxs($e,{children:[u||0," ml"]})}),r.jsx(R,{type:"button",onClick:j,children:r.jsx(q,{children:r.jsx("use",{href:`${M}#icon-plus`})})})]})]}),r.jsxs(Me,{children:[r.jsx(L,{children:"Recording time:"}),r.jsxs(De,{name:"time",style:{width:"100%"},onChange:h=>t(h.target.value),children:[r.jsx("option",{value:n,children:n},"current-time"),o.map(h=>r.jsx("option",{value:h,children:h},h))]})]}),r.jsxs("div",{children:[r.jsx("h3",{children:"Enter the value of the water used:"}),r.jsx(Se,{type:"number",name:"amount",validate:D,max:5e3,value:l.amount||u,onChange:v}),r.jsx(fe,{name:"amount",component:"div"})]}),r.jsxs(Oe,{children:[r.jsxs("span",{children:[u||0,"ml"]}),r.jsxs(Pe,{type:"submit",onClick:p,children:["Save"," "]})]})]})})},Ft=()=>{const[e,n]=y.useState(!1),t=F(dt),o=()=>{n(!e)},a=Math.round(t.percent);return r.jsxs($t,{children:[r.jsxs(Mt,{children:[r.jsx(jt,{children:"Today"}),r.jsxs(Dt,{children:[r.jsx(St,{children:r.jsx(Ot,{style:{width:`${Math.min(a,100)}%`}})}),r.jsxs(Pt,{children:[r.jsx(Wt,{children:"0%"}),a<100&&a>0&&r.jsxs(Ct,{left:`${a}%`,children:[a,"%"]}),r.jsx(Tt,{children:"100%"})]})]})]}),r.jsxs(Bt,{onClick:o,children:[r.jsx("svg",{children:r.jsx("use",{href:`${M}#icon-outline`})}),"Add water"]}),e&&r.jsx(oe,{onClose:o,children:r.jsx(We,{toggleModal:o})})]})},_t="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Yt=(e=21)=>{let n="",t=crypto.getRandomValues(new Uint8Array(e));for(;e--;)n+=_t[t[e]&63];return n};const zt=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`,Et=s.div`
  height: 212px;
  overflow: auto;
  margin-bottom: 12px;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${i.colors.paleBlue};
    width: 2px;
    margin: 0 auto;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    width: 6px;
    height: 100px;
    border-radius: 3px;
    background-color: ${i.colors.skyBlue};
  }
`,Nt=s.div`
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
    background-color: ${i.colors.paleBlue};
  }
`,Ht=s.h3`
  font-size: 24px;
  font-weight: 500;
  /* font-family: 'Roboto'; */
  color: ${i.colors.black};
  text-align: left;
  line-height: 1.25;
  margin-bottom: 15px;

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 1.23;
  }
`,At=s.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  h4 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    color: ${i.colors.blue};
  }
  p {
    font-size: 12px;
    line-height: 24px;
    font-weight: 400;
    color: ${i.colors.black};
    span {
      text-transform: uppercase;
    }
    svg {
      width: 26px;
      height: 26px;
    }
  }
`,Lt=s.svg`
  width: 26px;
  height: 26px;
  fill: transparent;
  @media screen and (min-width: ${i.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,Rt=s.div`
  display: flex;
  gap: 18px;
  margin-right: 10px;
`,qt=s.svg`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${i.colors.skyBlue};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${i.colors.skyBlue};
  }
`,It=s.svg`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${i.colors.brightRed};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${i.colors.brightRed};
  }
`,Xt=s.button`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: transparent;
  color: ${i.colors.blue};
  border: none;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  stroke: ${i.colors.blue};
  max-width: 155px;

  & svg {
    width: 16px;
    height: 16px;
    fill: ${i.colors.blue};
    stroke: transparent;
    padding-bottom: 2px;
  }

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    font-size: 18px;
    line-height: 1.33;

    & svg {
      width: 24px;
      height: 24px;
    }

    &:hover {
      color: ${i.colors.orange};
      & svg {
        fill: ${i.colors.orange};
      }
    }
  }
`;s.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 256px;

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    width: 656px;
  }

  @media screen and (min-width: ${i.breakpoint.desktop}) {
    width: 544px;
  }
`;s.h2`
  color: ${i.colors.black};
  width: 200px;
  font-size: 26px;
  line-height: 123%;
  font-weight: 500;
  margin: 0;

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    width: 384px;
  }
`;s.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    width: 544px;
  }
`;const Qt=s.div`
  display: flex;
  align-items: center;
  width: 208px;
  height: 52px;
  border-radius: 10px;
  padding: 8px 24px;
  gap: 12px;
  background-color: ${i.colors.lightBlue};
  margin-bottom: 24px;
  h4 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    margin: 0;
    color: ${i.colors.blue};
  }
  p {
    font-size: 12px;
    line-height: 24px;
    color: ${i.colors.black};
    margin: 0;
  }
`,Vt=s.svg`
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
  color: ${i.colors.black};
`;s.p`
  font-size: 16px;
  line-height: 111%;
  color: ${i.colors.black};
  margin: 0;
`;s.div`
  gap: 7px;
  width: 194px;
  height: 44px;
`;s.button`
  background-color: ${i.colors.white};
  color: ${i.colors.blue};
  border-radius: 30px;
  border: 1px solid ${i.colors.skyBlue};
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;

  &:hover {
    box-shadow: ${i.boxShadowBtn.hoverBtn};
  }
`;s.svg`
  width: 24px;
  height: 24px;
  stroke: ${i.colors.blue};
  fill: ${i.colors.blue};
`;s.div`
  background: ${i.colors.paleBlue};
  border-radius: 40px;
  width: 92px;
  height: 36px;
`;s.p`
  color: ${i.colors.blue};
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
    color: ${i.colors.blue};
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }

  @media screen and (min-width: ${i.breakpoint.tablet}) {
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
  background-color: ${i.colors.blue};
  box-shadow: ${i.boxShadowBtn.Btn};
  color: ${i.colors.white};
  cursor: pointer;

  &:hover {
    box-shadow: ${i.boxShadowBtn.hoverBtn};
  }

  &:active {
    box-shadow: ${i.boxShadowBtn.activeBtn};
  }

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    padding: 10px 30px;
    width: 160px;
    height: 44px;
  }

  @media screen and (min-width: ${i.breakpoint.desktop}) {
    padding: 10px 30px;
    width: 160px;
    height: 44px;
  }
`;s.input`
  color: ${i.colors.blue};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${i.colors.paleBlue};
  background-color: ${i.colors.white};

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${i.colors.skyBlue};
  }

  &:hover {
    color: ${i.colors.blue};
    border: 1px solid ${i.colors.blue};
  }

  &:focus {
    outline: none;
    border: 1px solid ${i.colors.blue};
  }

  &:not(:placeholder-shown) {
    color: ${i.colors.blue};
  }
  @media screen and (min-width: ${i.breakpoint.tablet}) {
    width: 97%;
  }
`;const Gt=({toggleModal:e})=>{const[n,t]=y.useState(""),[o,a]=y.useState([]),{patchWater:c,reps:x}=H(),[u,m]=y.useState(0);y.useEffect(()=>{const l=new Date,h=l.getHours(),_=l.getMinutes(),Y=[];for(let O=h;O<24;O++)for(let P=0;P<60;P+=5){if(O===h&&P<_)continue;const J=String(O).padStart(2,"0"),U=String(P).padStart(2,"0"),K=`${J}:${U}`;Y.push(K)}const Q=String(h).padStart(2,"0"),V=String(_).padStart(2,"0"),G=`${Q}:${V}`;t(G),a(Y)},[]);const d=new Date,g=String(d.getDate()).padStart(2,"0"),f=String(d.getMonth()+1).padStart(2,"0"),k=String(d.getFullYear()),$=`${g}.${f}.${k}`,D=l=>{let h="";return l>5e3&&(h="The value cannot exceed 5000ml"),h},p=()=>{const l={time:n,amount:u,date:$},h={id:x.id};c({waterData:l,id:h}),m(0),t(""),e()},w=()=>{m(l=>Math.max(l-50,0))},j=()=>{const l=u+50,h=5e3;m(l<=h?l:h)},v=l=>{const h=parseInt(l.target.value);m(h)};return r.jsx(re,{initialValues:{amount:0,time:n},onSubmit:p,children:l=>r.jsxs(we,{children:[r.jsxs(ye,{children:[r.jsx(ke,{children:"Edit the entered amount of water"}),r.jsxs(Qt,{children:[r.jsx(Vt,{children:r.jsx("use",{href:`${M}#icon-glass`})}),r.jsxs("h4",{children:[u," ml"]}),r.jsxs("p",{children:[n," AM"]})]}),r.jsx(ve,{children:"Choose a value:"}),r.jsx(L,{children:"Amount of water:"}),r.jsxs("div",{children:[r.jsx(R,{type:"button",onClick:w,children:r.jsx(q,{children:r.jsx("use",{href:`${M}#icon-minus`})})}),r.jsx(je,{children:r.jsxs($e,{children:[u," ml"]})}),r.jsx(R,{type:"button",onClick:j,children:r.jsx(q,{children:r.jsx("use",{href:`${M}#icon-plus`})})})]})]}),r.jsxs(Me,{children:[r.jsx(L,{children:"Recording time:"}),r.jsxs(De,{name:"time",style:{width:"100%"},onChange:h=>t(h.target.value),children:[r.jsx("option",{value:n,children:n},"current-time"),o.map(h=>r.jsx("option",{value:h,children:h},h))]})]}),r.jsxs("div",{children:[r.jsx("h3",{children:"Enter the value of the water used:"}),r.jsx(Se,{type:"number",name:"amount",validate:D,max:5e3,value:l.amount||u,onChange:v}),r.jsx(fe,{name:"amount",component:"div"})]}),r.jsxs(Oe,{children:[r.jsxs("span",{children:[u,"ml"]}),r.jsxs(Pe,{type:"submit",onClick:p,children:["Save"," "]})]})]})})},Jt=s.div`
  display: flex;
  flex-direction: column;
  margin: 8px 12px;
  row-gap: 24px;
  @media screen and (min-width: ${i.breakpoint.mobile}) and (max-width: ${i.breakpoint.tablet}) {
    width: 232px;
  }
`,Ut=s.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  h2 {
    color: ${i.colors.black};
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
    margin: 0;
  }

  p {
    color: ${i.colors.black};
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    margin: 0;
  }
`,Kt=s.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    flex-direction: row;
    margin-left: 200px;
    column-gap: 24px;
  }
`,Zt=s.button`
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
  background-color: ${i.colors.paleBlue};
  border: none;
  height: 44px;
  padding: 10px 30px 10px 30px;

  color: ${i.colors.blue};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;

  &:hover {
    box-shadow: ${i.boxShadowBtn.Btn};
  }

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    width: 160px;
  }
`,en=s.button`
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
  background-color: ${i.colors.brightRed};
  border: none;
  height: 44px;
  padding: 10px 30px 10px 30px;

  color: ${i.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;

  &:hover {
    box-shadow: ${i.boxShadowBtn.Btn};
  }

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    width: 160px;
  }
`,tn=({id:e,date:n,toggleModal:t})=>{const{deleteReps:o,createWater:a}=H(),c=()=>{o({id:e,date:n}),a(n),t()};return r.jsx(r.Fragment,{children:r.jsxs(Jt,{children:[r.jsxs(Ut,{children:[r.jsx("h2",{children:"Delete entry"}),r.jsx("p",{children:"Are you sure you want to delete the entry?"})]}),r.jsxs(Kt,{children:[r.jsx(Zt,{type:"button",onClick:()=>t(),children:"Cancel"}),r.jsx(en,{type:"button",onClick:c,children:"Delete"})]})]})})},nn=()=>{const[e,n]=y.useState(!1);console.log("isOpen =====>>>>",e);const[t,o]=y.useState(null),{createWater:a,reps:c}=H(),x=Date.now(),m=new Date(x).toLocaleDateString();y.useEffect(()=>{a({date:m})},[m,a]);const d=()=>{n(!e)},g=f=>{o(f),n(!0)};return r.jsxs(r.Fragment,{children:[r.jsxs(zt,{children:[r.jsx(Ht,{children:"Today"}),r.jsx(Et,{children:c.map(f=>{const[k,$]=f.time.split(":").map(Number),D=k>=12?k-12:k,p=k>=12?"PM":"AM",w=D===0?12:D;return r.jsxs(Nt,{children:[r.jsxs(At,{children:[r.jsx(Lt,{children:r.jsx("use",{href:`${M}#icon-glass`})}),r.jsxs("h4",{children:[f.amount," ml"]}),r.jsxs("p",{children:[w,":",$<10?"0"+$:$," ",p]})]}),r.jsxs(Rt,{children:[r.jsx(qt,{onClick:()=>g(r.jsx(Gt,{toggleModal:d})),children:r.jsx("use",{href:`${M}#icon-note`})}),r.jsx(It,{onClick:()=>g(r.jsx(tn,{id:f._id,date:{date:m}})),toggleModal:d,children:r.jsx("use",{href:`${M}#icon-trash`})})]})]},Yt())})}),r.jsxs(Xt,{onClick:()=>g(r.jsx(We,{onClick:d})),children:[r.jsx("svg",{children:r.jsx("use",{href:`${M}#icon-increment`})}),"Add water"]})]}),e&&r.jsx(oe,{onClose:d,children:t})]})};const rn=s.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    color: ${i.colors.black};
    margin-bottom: 6px;
  }
  @media screen and (min-width: ${i.breakpoint.tablet}) {
    h3 {
      font-size: 26px;
      line-height: 32px;
    }
  }
`,on=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,an=s.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    color: ${i.colors.blue};
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    padding-left: 6px;
    padding-right: 6px;
    width: 126px;
    text-align: center;
  }
`,de=s.div`
  width: 15px;
  height: 15px;
  display: flex;
  flex-direction: center;
  align-items: center;

  svg {
    width: 6px;
    height: 10px;
    background: transparent;
    fill: ${i.colors.blue};
    cursor: pointer;

    &:hover {
      fill: ${i.colors.orange};
    }
  }
`,sn=s.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 50px);
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  height: 446px;

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 50px);
    gap: 20px;
    height: 268px;
  }
`,cn=s.button`
  padding: 7px 6px;
  width: 35px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: ${i.colors.black};

  background-color: ${i.colors.white};
  border: 1px solid ${i.colors.white};

  &.today {
    border: 1px solid ${i.colors.blue};
    color: ${i.colors.white};
    background-color: ${i.colors.blue};
  }

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    font-size: 16px;
    padding: 7px;
  }

  ${({percent:e})=>e>=100?`
      border: 1px solid  ${i.colors.blue};
        
      `:e>0?`
      border: 1px solid ${i.colors.orange};
        
      `:`
      border: 1px solid ${i.colors.white};
      `}

  &:hover {
    box-shadow: 0px 4px 8px ${i.colors.skyBlue};
    border: 1px solid ${i.colors.orange};
  }
`,dn=s.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  text-align: center;
  padding-left: 10px;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.6;
  color: ${i.colors.skyBlue};

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    font-size: 12px;
  }
`,ln=s.div`
  margin: 0 auto;
  position: absolute;
  z-index: 20;
  top: 830px;
  background-color: ${i.colors.white};
  border-radius: 10px;
  max-width: 280px;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);
  border-radius: 10px;
  padding: 24px 16px;

  @media screen and (min-width: ${i.breakpoint.desktop}) {
    top: 280px;
  }

  p {
    font-size: 14px;
    color: ${i.colors.black};
    font-weight: 400;
    padding-bottom: 3px;
    @media screen and (min-width: ${i.breakpoint.tablet}) {
      font-size: 16px;
    }
  }
  span {
    font-size: 14px;
    font-weight: 500;
    color: ${i.colors.blue};
    @media screen and (min-width: ${i.breakpoint.tablet}) {
      font-size: 16px;
    }
  }
  button {
    margin-top: 10px;
  }
`;function S(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}function C(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}const Te=6048e5,un=864e5;let hn={};function X(){return hn}function N(e,n){var u,m,d,g;const t=X(),o=(n==null?void 0:n.weekStartsOn)??((m=(u=n==null?void 0:n.locale)==null?void 0:u.options)==null?void 0:m.weekStartsOn)??t.weekStartsOn??((g=(d=t.locale)==null?void 0:d.options)==null?void 0:g.weekStartsOn)??0,a=S(e),c=a.getDay(),x=(c<o?7:0)+c-o;return a.setDate(a.getDate()-x),a.setHours(0,0,0,0),a}function I(e){return N(e,{weekStartsOn:1})}function Ce(e){const n=S(e),t=n.getFullYear(),o=C(e,0);o.setFullYear(t+1,0,4),o.setHours(0,0,0,0);const a=I(o),c=C(e,0);c.setFullYear(t,0,4),c.setHours(0,0,0,0);const x=I(c);return n.getTime()>=a.getTime()?t+1:n.getTime()>=x.getTime()?t:t-1}function le(e){const n=S(e);return n.setHours(0,0,0,0),n}function ue(e){const n=S(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function pn(e,n){const t=le(e),o=le(n),a=+t-ue(t),c=+o-ue(o);return Math.round((a-c)/un)}function xn(e){const n=Ce(e),t=C(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),I(t)}function mn(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function gn(e){if(!mn(e)&&typeof e!="number")return!1;const n=S(e);return!isNaN(Number(n))}function fn(e){const n=S(e),t=C(e,0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}const bn={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},wn=(e,n,t)=>{let o;const a=bn[e];return typeof a=="string"?o=a:n===1?o=a.one:o=a.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+o:o+" ago":o};function ne(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const yn={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},kn={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},vn={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},$n={date:ne({formats:yn,defaultWidth:"full"}),time:ne({formats:kn,defaultWidth:"full"}),dateTime:ne({formats:vn,defaultWidth:"full"})},jn={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Mn=(e,n,t,o)=>jn[e];function z(e){return(n,t)=>{const o=t!=null&&t.context?String(t.context):"standalone";let a;if(o==="formatting"&&e.formattingValues){const x=e.defaultFormattingWidth||e.defaultWidth,u=t!=null&&t.width?String(t.width):x;a=e.formattingValues[u]||e.formattingValues[x]}else{const x=e.defaultWidth,u=t!=null&&t.width?String(t.width):e.defaultWidth;a=e.values[u]||e.values[x]}const c=e.argumentCallback?e.argumentCallback(n):n;return a[c]}}const Dn={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Sn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},On={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Pn={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Wn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Tn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Cn=(e,n)=>{const t=Number(e),o=t%100;if(o>20||o<10)switch(o%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Bn={ordinalNumber:Cn,era:z({values:Dn,defaultWidth:"wide"}),quarter:z({values:Sn,defaultWidth:"wide",argumentCallback:e=>e-1}),month:z({values:On,defaultWidth:"wide"}),day:z({values:Pn,defaultWidth:"wide"}),dayPeriod:z({values:Wn,defaultWidth:"wide",formattingValues:Tn,defaultFormattingWidth:"wide"})};function E(e){return(n,t={})=>{const o=t.width,a=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],c=n.match(a);if(!c)return null;const x=c[0],u=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],m=Array.isArray(u)?_n(u,f=>f.test(x)):Fn(u,f=>f.test(x));let d;d=e.valueCallback?e.valueCallback(m):m,d=t.valueCallback?t.valueCallback(d):d;const g=n.slice(x.length);return{value:d,rest:g}}}function Fn(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function _n(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function Yn(e){return(n,t={})=>{const o=n.match(e.matchPattern);if(!o)return null;const a=o[0],c=n.match(e.parsePattern);if(!c)return null;let x=e.valueCallback?e.valueCallback(c[0]):c[0];x=t.valueCallback?t.valueCallback(x):x;const u=n.slice(a.length);return{value:x,rest:u}}}const zn=/^(\d+)(th|st|nd|rd)?/i,En=/\d+/i,Nn={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Hn={any:[/^b/i,/^(a|c)/i]},An={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ln={any:[/1/i,/2/i,/3/i,/4/i]},Rn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},qn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},In={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Xn={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Qn={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Vn={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Gn={ordinalNumber:Yn({matchPattern:zn,parsePattern:En,valueCallback:e=>parseInt(e,10)}),era:E({matchPatterns:Nn,defaultMatchWidth:"wide",parsePatterns:Hn,defaultParseWidth:"any"}),quarter:E({matchPatterns:An,defaultMatchWidth:"wide",parsePatterns:Ln,defaultParseWidth:"any",valueCallback:e=>e+1}),month:E({matchPatterns:Rn,defaultMatchWidth:"wide",parsePatterns:qn,defaultParseWidth:"any"}),day:E({matchPatterns:In,defaultMatchWidth:"wide",parsePatterns:Xn,defaultParseWidth:"any"}),dayPeriod:E({matchPatterns:Qn,defaultMatchWidth:"any",parsePatterns:Vn,defaultParseWidth:"any"})},Jn={code:"en-US",formatDistance:wn,formatLong:$n,formatRelative:Mn,localize:Bn,match:Gn,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Un(e){const n=S(e);return pn(n,fn(n))+1}function Kn(e){const n=S(e),t=+I(n)-+xn(n);return Math.round(t/Te)+1}function Be(e,n){var g,f,k,$;const t=S(e),o=t.getFullYear(),a=X(),c=(n==null?void 0:n.firstWeekContainsDate)??((f=(g=n==null?void 0:n.locale)==null?void 0:g.options)==null?void 0:f.firstWeekContainsDate)??a.firstWeekContainsDate??(($=(k=a.locale)==null?void 0:k.options)==null?void 0:$.firstWeekContainsDate)??1,x=C(e,0);x.setFullYear(o+1,0,c),x.setHours(0,0,0,0);const u=N(x,n),m=C(e,0);m.setFullYear(o,0,c),m.setHours(0,0,0,0);const d=N(m,n);return t.getTime()>=u.getTime()?o+1:t.getTime()>=d.getTime()?o:o-1}function Zn(e,n){var u,m,d,g;const t=X(),o=(n==null?void 0:n.firstWeekContainsDate)??((m=(u=n==null?void 0:n.locale)==null?void 0:u.options)==null?void 0:m.firstWeekContainsDate)??t.firstWeekContainsDate??((g=(d=t.locale)==null?void 0:d.options)==null?void 0:g.firstWeekContainsDate)??1,a=Be(e,n),c=C(e,0);return c.setFullYear(a,0,o),c.setHours(0,0,0,0),N(c,n)}function er(e,n){const t=S(e),o=+N(t,n)-+Zn(t,n);return Math.round(o/Te)+1}function b(e,n){const t=e<0?"-":"",o=Math.abs(e).toString().padStart(n,"0");return t+o}const W={y(e,n){const t=e.getFullYear(),o=t>0?t:1-t;return b(n==="yy"?o%100:o,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):b(t+1,2)},d(e,n){return b(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return b(e.getHours()%12||12,n.length)},H(e,n){return b(e.getHours(),n.length)},m(e,n){return b(e.getMinutes(),n.length)},s(e,n){return b(e.getSeconds(),n.length)},S(e,n){const t=n.length,o=e.getMilliseconds(),a=Math.trunc(o*Math.pow(10,t-3));return b(a,n.length)}},B={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},he={G:function(e,n,t){const o=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(o,{width:"abbreviated"});case"GGGGG":return t.era(o,{width:"narrow"});case"GGGG":default:return t.era(o,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const o=e.getFullYear(),a=o>0?o:1-o;return t.ordinalNumber(a,{unit:"year"})}return W.y(e,n)},Y:function(e,n,t,o){const a=Be(e,o),c=a>0?a:1-a;if(n==="YY"){const x=c%100;return b(x,2)}return n==="Yo"?t.ordinalNumber(c,{unit:"year"}):b(c,n.length)},R:function(e,n){const t=Ce(e);return b(t,n.length)},u:function(e,n){const t=e.getFullYear();return b(t,n.length)},Q:function(e,n,t){const o=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(o);case"QQ":return b(o,2);case"Qo":return t.ordinalNumber(o,{unit:"quarter"});case"QQQ":return t.quarter(o,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(o,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(o,{width:"wide",context:"formatting"})}},q:function(e,n,t){const o=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(o);case"qq":return b(o,2);case"qo":return t.ordinalNumber(o,{unit:"quarter"});case"qqq":return t.quarter(o,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(o,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(o,{width:"wide",context:"standalone"})}},M:function(e,n,t){const o=e.getMonth();switch(n){case"M":case"MM":return W.M(e,n);case"Mo":return t.ordinalNumber(o+1,{unit:"month"});case"MMM":return t.month(o,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(o,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(o,{width:"wide",context:"formatting"})}},L:function(e,n,t){const o=e.getMonth();switch(n){case"L":return String(o+1);case"LL":return b(o+1,2);case"Lo":return t.ordinalNumber(o+1,{unit:"month"});case"LLL":return t.month(o,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(o,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(o,{width:"wide",context:"standalone"})}},w:function(e,n,t,o){const a=er(e,o);return n==="wo"?t.ordinalNumber(a,{unit:"week"}):b(a,n.length)},I:function(e,n,t){const o=Kn(e);return n==="Io"?t.ordinalNumber(o,{unit:"week"}):b(o,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):W.d(e,n)},D:function(e,n,t){const o=Un(e);return n==="Do"?t.ordinalNumber(o,{unit:"dayOfYear"}):b(o,n.length)},E:function(e,n,t){const o=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(o,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(o,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(o,{width:"short",context:"formatting"});case"EEEE":default:return t.day(o,{width:"wide",context:"formatting"})}},e:function(e,n,t,o){const a=e.getDay(),c=(a-o.weekStartsOn+8)%7||7;switch(n){case"e":return String(c);case"ee":return b(c,2);case"eo":return t.ordinalNumber(c,{unit:"day"});case"eee":return t.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(a,{width:"short",context:"formatting"});case"eeee":default:return t.day(a,{width:"wide",context:"formatting"})}},c:function(e,n,t,o){const a=e.getDay(),c=(a-o.weekStartsOn+8)%7||7;switch(n){case"c":return String(c);case"cc":return b(c,n.length);case"co":return t.ordinalNumber(c,{unit:"day"});case"ccc":return t.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(a,{width:"narrow",context:"standalone"});case"cccccc":return t.day(a,{width:"short",context:"standalone"});case"cccc":default:return t.day(a,{width:"wide",context:"standalone"})}},i:function(e,n,t){const o=e.getDay(),a=o===0?7:o;switch(n){case"i":return String(a);case"ii":return b(a,n.length);case"io":return t.ordinalNumber(a,{unit:"day"});case"iii":return t.day(o,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(o,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(o,{width:"short",context:"formatting"});case"iiii":default:return t.day(o,{width:"wide",context:"formatting"})}},a:function(e,n,t){const a=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,n,t){const o=e.getHours();let a;switch(o===12?a=B.noon:o===0?a=B.midnight:a=o/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,n,t){const o=e.getHours();let a;switch(o>=17?a=B.evening:o>=12?a=B.afternoon:o>=4?a=B.morning:a=B.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let o=e.getHours()%12;return o===0&&(o=12),t.ordinalNumber(o,{unit:"hour"})}return W.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):W.H(e,n)},K:function(e,n,t){const o=e.getHours()%12;return n==="Ko"?t.ordinalNumber(o,{unit:"hour"}):b(o,n.length)},k:function(e,n,t){let o=e.getHours();return o===0&&(o=24),n==="ko"?t.ordinalNumber(o,{unit:"hour"}):b(o,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):W.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):W.s(e,n)},S:function(e,n){return W.S(e,n)},X:function(e,n,t){const o=e.getTimezoneOffset();if(o===0)return"Z";switch(n){case"X":return xe(o);case"XXXX":case"XX":return T(o);case"XXXXX":case"XXX":default:return T(o,":")}},x:function(e,n,t){const o=e.getTimezoneOffset();switch(n){case"x":return xe(o);case"xxxx":case"xx":return T(o);case"xxxxx":case"xxx":default:return T(o,":")}},O:function(e,n,t){const o=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+pe(o,":");case"OOOO":default:return"GMT"+T(o,":")}},z:function(e,n,t){const o=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+pe(o,":");case"zzzz":default:return"GMT"+T(o,":")}},t:function(e,n,t){const o=Math.trunc(e.getTime()/1e3);return b(o,n.length)},T:function(e,n,t){const o=e.getTime();return b(o,n.length)}};function pe(e,n=""){const t=e>0?"-":"+",o=Math.abs(e),a=Math.trunc(o/60),c=o%60;return c===0?t+String(a):t+String(a)+n+b(c,2)}function xe(e,n){return e%60===0?(e>0?"-":"+")+b(Math.abs(e)/60,2):T(e,n)}function T(e,n=""){const t=e>0?"-":"+",o=Math.abs(e),a=b(Math.trunc(o/60),2),c=b(o%60,2);return t+a+n+c}const me=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},Fe=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},tr=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],o=t[1],a=t[2];if(!a)return me(e,n);let c;switch(o){case"P":c=n.dateTime({width:"short"});break;case"PP":c=n.dateTime({width:"medium"});break;case"PPP":c=n.dateTime({width:"long"});break;case"PPPP":default:c=n.dateTime({width:"full"});break}return c.replace("{{date}}",me(o,n)).replace("{{time}}",Fe(a,n))},nr={p:Fe,P:tr},rr=/^D+$/,or=/^Y+$/,ir=["D","DD","YY","YYYY"];function ar(e){return rr.test(e)}function sr(e){return or.test(e)}function cr(e,n,t){const o=dr(e,n,t);if(console.warn(o),ir.includes(e))throw new RangeError(o)}function dr(e,n,t){const o=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${o} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const lr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ur=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,hr=/^'([^]*?)'?$/,pr=/''/g,xr=/[a-zA-Z]/;function mr(e,n,t){var g,f,k,$,D,p,w,j;const o=X(),a=(t==null?void 0:t.locale)??o.locale??Jn,c=(t==null?void 0:t.firstWeekContainsDate)??((f=(g=t==null?void 0:t.locale)==null?void 0:g.options)==null?void 0:f.firstWeekContainsDate)??o.firstWeekContainsDate??(($=(k=o.locale)==null?void 0:k.options)==null?void 0:$.firstWeekContainsDate)??1,x=(t==null?void 0:t.weekStartsOn)??((p=(D=t==null?void 0:t.locale)==null?void 0:D.options)==null?void 0:p.weekStartsOn)??o.weekStartsOn??((j=(w=o.locale)==null?void 0:w.options)==null?void 0:j.weekStartsOn)??0,u=S(e);if(!gn(u))throw new RangeError("Invalid time value");let m=n.match(ur).map(v=>{const l=v[0];if(l==="p"||l==="P"){const h=nr[l];return h(v,a.formatLong)}return v}).join("").match(lr).map(v=>{if(v==="''")return{isToken:!1,value:"'"};const l=v[0];if(l==="'")return{isToken:!1,value:gr(v)};if(he[l])return{isToken:!0,value:v};if(l.match(xr))throw new RangeError("Format string contains an unescaped latin alphabet character `"+l+"`");return{isToken:!1,value:v}});a.localize.preprocessor&&(m=a.localize.preprocessor(u,m));const d={firstWeekContainsDate:c,weekStartsOn:x,locale:a};return m.map(v=>{if(!v.isToken)return v.value;const l=v.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&sr(l)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&ar(l))&&cr(l,n,String(e));const h=he[l[0]];return h(u,l,a.localize,d)}).join("")}function gr(e){const n=e.match(hr);return n?n[1].replace(pr,"'"):e}const fr=()=>{const e=ge(),n=F(ct),[t,o]=y.useState(new Date),[a,c]=y.useState(null),[x,u]=y.useState(!1),m=new Date,d=y.useRef(null);y.useEffect(()=>{const p=(t.getMonth()+1).toString().padStart(2,"0"),w=t.getFullYear().toString();e(Le({date:`${p}.${w}`}))},[e,t]);const g=p=>{o(w=>{const j=new Date(w);return j.setMonth(j.getMonth()+p),j})},f=()=>{const w=new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),j=[];for(let v=1;v<=w;v++)j.push(v);return j},k=p=>{c(parseInt(p)),u(!0)},$=p=>{d.current&&!d.current.contains(p.target)&&u(!1)};y.useEffect(()=>(document.addEventListener("mousedown",$),()=>{document.removeEventListener("mousedown",$)}),[]);const D=f().map(p=>{const w=n.find(j=>parseInt(j.date.split(".")[0],10)===p);return{day:p.toString(),daily_limit:w?w.daily_limit:2e3,count:w?w.count:0,percent:w?w.percent:0,id:w?w._id:""}});return r.jsxs("div",{children:[r.jsxs(rn,{children:[r.jsxs(on,{children:[r.jsx("h3",{children:"Month"}),r.jsxs(an,{children:[r.jsx(de,{onClick:()=>g(-1),children:r.jsx("svg",{children:r.jsx("use",{href:`${M}#icon-left`})})}),r.jsx("span",{children:t.toLocaleDateString("en",{month:"long",year:"numeric"})}),r.jsx(de,{onClick:()=>g(1),children:r.jsx("svg",{children:r.jsx("use",{href:`${M}#icon-right`})})})]})]}),r.jsx(sn,{children:D.map(p=>{const w=new Date(t.getFullYear(),t.getMonth(),parseInt(p.day)),j=m.toDateString()===w.toDateString();return r.jsxs("div",{children:[r.jsx(cn,{percent:p.percent,onClick:()=>k(p.day),className:a===parseInt(p.day)||j?"today":"",children:p.day}),r.jsx(dn,{children:`${p.percent}%`})]},p.day)})})]}),a&&x&&r.jsxs(ln,{ref:d,children:[r.jsx("p",{children:r.jsx("span",{children:mr(new Date(t.getFullYear(),t.getMonth(),a),"d, MMMM")})}),n.map(p=>parseInt(p.date.split(".")[0],10)===a?r.jsxs("div",{children:[r.jsxs("p",{children:["Daily limit: ",r.jsxs("span",{children:[p.daily_limit/1e3," L"]})]}),r.jsxs("p",{children:["Fulfillment of the daily limit:"," ",r.jsxs("span",{children:[p.percent,"%"]})]}),r.jsxs("p",{children:["Number of water servings: ",r.jsx("span",{children:p.count})]})]},p._id):null),!n.some(p=>parseInt(p.date.split(".")[0],10)===a&&p.percent>0)&&r.jsx("div",{children:r.jsx("p",{children:"You did not drink on this day."})}),new Date<new Date(t.getFullYear(),t.getMonth(),a)&&r.jsx("div",{children:r.jsx("p",{children:"This day has not yet arrived."})})]})]})},br=s.div`
  background-position: center center;
  padding-top: 24px;
  padding-bottom: 24px;
  background-image: -webkit-image-set(
    url(${Re}) 1x,
    url(${qe}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  @media screen and (min-width: ${i.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${Ie}) 1x,
      url(${Xe}) 2x
    );
  }
  @media screen and (min-width: ${i.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${Qe}) 1x,
      url(${Ve}) 2x
    );
  }
`,wr=s.div`
  display: flex;
  flex-direction: column;
  padding-top: 22px;
  margin: 0 auto;
  max-width: 704px;
  padding-bottom: 22px;

  @media screen and (min-width: ${i.breakpoint.desktop}) {
    flex-direction: row;
    gap: 32px;
    max-width: 1176px;
  }
`,yr=s.div`
  display: flex;
  flex-direction: column;
  background-color: ${i.colors.lightBlue};
  padding: 20px 24px;
  border-radius: 10px;
  max-width: 704px;
  box-shadow: ${i.boxShadowBtn.Btn};
  gap: 24px;

  @media screen and (min-width: ${i.breakpoint.desktop}) {
    width: 590px;
  }
`,kr=s.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${i.breakpoint.desktop}) {
    max-width: 50%;
  }
`,vr=s.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${i.breakpoint.desktop}) {
    padding-left: 132px;
    padding-right: 132px;
  }
`,Mr=()=>r.jsx(r.Fragment,{children:r.jsx(br,{children:r.jsx(vr,{children:r.jsxs(wr,{children:[r.jsxs(kr,{children:[r.jsx(vt,{}),r.jsx(Ft,{})]}),r.jsxs(yr,{children:[r.jsx(nn,{}),r.jsx(fr,{})]})]})})})});export{Mr as default};
