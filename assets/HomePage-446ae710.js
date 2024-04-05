import{n as s,t as a,r as y,R as ge,j as r,s as p,c as be,u as le,a as _,g as we,d as ye,e as ke,p as je,f as ve,h as $e}from"./index-a3aa5b8c.js";import{F as R,a as Me,b as De}from"./formik.esm-4c7319d4.js";const Pe="/runners_of_code__frontend/assets/bottle_home_mobile@1x-0d6054eb.png",We="/runners_of_code__frontend/assets/bottle_home_mobile@2x-52eb5066.png",Oe="/runners_of_code__frontend/assets/bottle_home_tablet@1x-c4bedac4.png",Se="/runners_of_code__frontend/assets/bottle_home_tablet@2x-867eb443.png",Te="/runners_of_code__frontend/assets/bottle_home_desk-f67b46be.png",Be="/runners_of_code__frontend/assets/bottle_home_deskx2-acd9b153.png",Ce=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;
`,Fe=s.div`
  background-position: center;
  background-image: -webkit-image-set(
    url(${Pe}) 1x,
    url(${We}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;
  z-index: -1;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${Oe}) 1x,
      url(${Se}) 2x
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
`,Ye=s.h3`
  font-size: 18px;
  line-height: 1.33;
  font-family: 'Roboto-Bold', sans-serif;
  margin-bottom: 12px;
  color: ${a.colors.black};
`,_e=s.div`
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
  color: ${a.colors.blue};
  border: none;
  font-size: 16px;
  &:hover {
    color: ${a.colors.orange};
  }
`,Ne=s.div`
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
`,Le=s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`,Ae=s.div`
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
`,He=s.button`
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
      fill: ${a.colors.orange};
    }
  }
`,I=({onClose:e,children:n})=>{const t=document.getElementById("modal-root"),o=y.useRef(),i=d=>{d.target===o.current&&e(),document.body.style.overflow="",document.body.style.position="",d.stopPropagation()},c=d=>{d.key==="Escape"&&(document.body.style.overflow="",document.body.style.position="",e())};return y.useEffect(()=>{const d=l=>c(l);return document.addEventListener("keydown",d),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",d)}},[]),ge.createPortal(r.jsx(Ne,{onClick:i,ref:o,children:r.jsx(Le,{children:r.jsxs(Ae,{children:[r.jsx(He,{onClick:e,children:r.jsx("svg",{children:r.jsx("use",{href:`${p}#closeModal`})})}),n]})})}),t)},ue=e=>e.waters.dailyNorm,qe=e=>e.waters.reps,he=e=>e.filter;be([ue,he],(e,n)=>e.filter(t=>t.name.toLowerCase().includes(n.toLowerCase())));const Re=()=>{const e=le(),n=_(ue),t=_(qe),o=_(he),i=y.useCallback(h=>e(we(h)),[e]),c=y.useCallback(h=>e(ye(h)),[e]),d=y.useCallback(h=>e(ke(h)),[e]),l=y.useCallback(h=>e(je(h)),[e]);return{dailyNorm:n,reps:t,filter:o,getWaters:i,addDailyNorma:c,deleteReps:d,patchWater:l}},Ie=s.h2`
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 24px;
`,Xe=s.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  line-height: 1.2;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    flex-direction: row;
    gap: 24px;
  }
`,J=s.p`
  font-size: 16px;
`,U=s.span`
  font-size: 18px;
  color: ${a.colors.blue};
`,Qe=s.div`
  border: 1px solid ${a.colors.paleBlue};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  margin-bottom: 24px;
  width: auto;
`,Ge=s.p`
  color: ${a.colors.secondText};
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`,Ve=s.span`
  color: ${a.colors.blue};
`,Je=s.div`
  margin-bottom: 24px;
`,Ue=s.h3`
  margin-bottom: 16px;
  margin-top: 0;
`,Ke=s.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
`,K=s.div`
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
`,L=s.label``,Ze=s.div`
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
`,H=s(R)`
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

  &:focus {
    outline: none;
    border-color: ${a.colors.blue};
  }
`,et=s.button`
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
`,tt=s.div`
  width: 280px;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    min-width: 704px;
  }

  @media (min-width: ${a.breakpoint.desktop}) {
    min-width: 592px;
  }
`;function nt(){const{addDailyNorma:e}=Re(),n=o=>{const{gender:i,weight:c,activityHours:d}=o;if(i&&c&&d){if(i==="man")return parseFloat(c)*.04+parseFloat(d)*.6;if(i==="woman")return parseFloat(c)*.03+parseFloat(d)*.4}return null},{signUp:t}=ve();return y.useEffect(()=>{t({email:"DM5@mail.com",password:"qwe123qwe5"})},[t]),r.jsxs(tt,{children:[r.jsx(Ie,{children:"My daily norma"}),r.jsx(Me,{initialValues:{gender:"man",weight:"",activityHours:""},onSubmit:(o,{setSubmitting:i})=>{const c=n(o);e({waterIntake:c}),console.log("Form data:",{...o,waterIntake:c}),i(!1)},children:({isSubmitting:o,errors:i,touched:c,values:d,setFieldValue:l})=>r.jsxs(De,{children:[r.jsxs(Xe,{children:[r.jsxs(J,{children:["For girl:"," ",r.jsx(U,{children:"V=(M*0,03) + (T*0,4)"})]}),r.jsxs(J,{children:["For man:"," ",r.jsx(U,{children:"V=(M*0,04) + (T*0,6)"})]})]}),r.jsx(Qe,{children:r.jsxs(Ge,{children:[r.jsx(Ve,{children:"* "}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),r.jsxs(Je,{children:[r.jsx(Ue,{children:"Calculate your rate:"}),r.jsxs(Ke,{children:[r.jsxs("label",{children:[r.jsx(R,{type:"radio",name:"gender",value:"man",onChange:()=>l("gender","man")}),"For man"]}),r.jsxs("label",{children:[r.jsx(R,{type:"radio",name:"gender",value:"woman",onChange:()=>l("gender","woman")}),"For woman"]})]}),i.gender&&c.gender&&r.jsx("div",{children:i.gender})]}),r.jsx(K,{children:r.jsxs(L,{children:[r.jsx(A,{children:"Your weight in kilograms:"}),r.jsx(H,{type:"number",name:"weight",placeholder:"0"}),i.weight&&c.weight&&r.jsx("div",{children:i.weight})]})}),r.jsxs(K,{children:[r.jsxs(A,{children:[" ","The time of active participation in sports or other activities with a high physical. load in hours:"]}),r.jsxs(L,{children:[r.jsx(H,{type:"number",name:"activityHours",placeholder:"0"}),i.activityHours&&c.activityHours&&r.jsx("div",{children:i.activityHours})]})]}),r.jsxs(Ze,{children:["Your recommended water intake per day is:",r.jsxs("span",{children:[n(d)?parseFloat(n(d)).toFixed(2):0,"L"]})]}),r.jsx(A,{children:"Write down how much water you will drink:"}),r.jsx(L,{children:r.jsx(H,{type:"number",name:"Iwilldrunk",placeholder:"0"})}),r.jsx(et,{type:"submit",disabled:o,children:"Save"})]})})]})}const rt=()=>{const[e,n]=y.useState(!1),t=()=>{n(!e)},i=(2e3/1e3).toFixed(1)+" L";return r.jsxs(Ce,{children:[r.jsxs(_e,{children:[r.jsx(Ye,{children:"My daily norma"}),r.jsxs(Ee,{children:[r.jsx("p",{children:i}),r.jsx(ze,{type:"button",onClick:t,children:"Edit"})]})]}),r.jsx(Fe,{}),e&&r.jsx(I,{onClose:t,children:r.jsx(nt,{})})]})},ot=s.div`
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
`,at=s.h3`
  font-size: 18px;
  font-weight: 400;
  color: ${a.colors.blue};
  text-align: left;
  line-height: 1;
  width: 100%;
`,it=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,st=s.div`
  width: 256px;
  margin: 5px 14px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 325px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    width: 360px;
  }
`,ct=s.div`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${a.colors.paleBlue};
`,dt=s.span`
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
`,lt=s.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`,ut=s.span`
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
`,ht=s.span`
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
`,xt=s.span`
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
`,pt=s.button`
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
`,mt=s.div`
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
`,ft=()=>r.jsx(mt,{}),gt=e=>e.root.isLoading,bt=s.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 16px;
    color: ${a.colors.black};
    font-size: 18px;
    font-weight: 500;
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
`,Z=s.p`
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
font-weight: 500;
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
`,ee=s.button`
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
  box-shadow: ${a.boxShadowBtn.Btn};

  &:hover &:focus {
    box-shadow: ${a.boxShadowBtn.hoverBtn};
  }
`,te=s.svg`
  width: 24px;
  height: 24px;
  stroke: ${a.colors.blue};
  fill: ${a.colors.blue};
`,$t=s.div`
  margin-bottom: 24px;
`,Mt=s.input`
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
`,Dt=s.input`
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

`,Pt=s.div`
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
`,Wt=s.button`
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
`,Ot=({onClose:e})=>{const[t,o]=y.useState(0),[i,c]=y.useState(new Date().toISOString().slice(0,16)),d=le(),{isLoading:l}=_(gt),h=f=>{let b=f.target.value;b.startsWith("0")&&b.length>1&&(b=parseFloat(b.substring(1))),o(b.toString())},x=()=>{d($e({waterVolume:t,date:i})).then(b=>{b.error||(e(),o(0))})},m=()=>{o(f=>Math.max(f-50,0))},g=()=>{const f=t+50,b=5e3;o(f<=b?f:b)};return r.jsx(r.Fragment,{children:r.jsxs(bt,{onClose:e,children:[r.jsxs(wt,{children:[r.jsx(yt,{children:"Add Water"}),r.jsx(kt,{children:"Choose a value:"}),r.jsx(Z,{children:"Amount of water:"}),r.jsxs("div",{children:[r.jsx(ee,{onClick:m,children:r.jsx(te,{children:r.jsx("use",{href:`${p}#icon-minus`})})}),r.jsx(vt,{children:r.jsxs(jt,{children:[t," ml"]})}),r.jsx(ee,{onClick:g,children:r.jsx(te,{children:r.jsx("use",{href:`${p}#icon-plus`})})})]})]}),r.jsxs($t,{children:[r.jsx(Z,{children:"Recording time:"}),r.jsx(Mt,{value:i,onChange:f=>c(f.target.value),step:"300"})]}),r.jsxs("div",{children:[r.jsx("h3",{children:"Enter the value of the water used:"}),r.jsx(Dt,{type:"number",value:t,onChange:h,onBlur:()=>o(f=>f||0||0),max:5e3})]}),r.jsxs(Pt,{children:[r.jsxs("span",{children:[t,"ml"]}),r.jsxs(Wt,{onClick:x,children:["Save ",l&&r.jsx(ft,{})]})]})]})})},St=()=>{const[e,n]=y.useState(!1),t=()=>{n(!e)},o=88;return r.jsxs(ot,{children:[r.jsxs(it,{children:[r.jsx(at,{children:"Today"}),r.jsxs(st,{children:[r.jsx(ct,{children:r.jsx(dt,{style:{width:`${Math.min(o,100)}%`}})}),r.jsxs(lt,{children:[r.jsx(ut,{children:"0%"}),r.jsxs(xt,{left:`${o}%`,children:[o,"%"]}),r.jsx(ht,{children:"100%"})]})]})]}),r.jsxs(pt,{onClick:t,children:[r.jsx("svg",{children:r.jsx("use",{href:`${p}#icon-outline`})}),"Add water"]}),e&&r.jsx(I,{onClose:t,children:r.jsx(Ot,{})})]})},Tt=s.div`
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
`,D=s.div`
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
`,P=s.div`
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
`,W=s.svg`
  width: 26px;
  height: 26px;
  fill: transparent;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,O=s.div`
  display: flex;
  gap: 18px;
  margin-right: 10px;
`,S=s.svg`
  width: 16px;
  height: 16px;
  stroke: ${a.colors.skyBlue};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.skyBlue};
  }
`,T=s.svg`
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
`,Yt=()=>{const[e,n]=y.useState(!1),t=()=>{n(!e)};return r.jsxs(r.Fragment,{children:[r.jsxs(Tt,{children:[r.jsx(Ct,{children:"Today"}),r.jsxs(Bt,{children:[r.jsxs(D,{children:[r.jsxs(P,{children:[r.jsx(W,{children:r.jsx("use",{href:`${p}#icon-glass`})}),r.jsx("h4",{children:"250ml"}),r.jsxs("p",{children:["7:00",r.jsx("span",{children:"AM"})]})]}),r.jsxs(O,{children:[r.jsx(S,{children:r.jsx("use",{href:`${p}#icon-note`})}),r.jsx(T,{children:r.jsx("use",{href:`${p}#icon-trash`})})]})]}),r.jsxs(D,{children:[r.jsxs(P,{children:[r.jsx(W,{children:r.jsx("use",{href:`${p}#icon-glass`})}),r.jsx("h4",{children:"250ml"}),r.jsxs("p",{children:["7:00",r.jsx("span",{children:"AM"})]})]}),r.jsxs(O,{children:[r.jsx(S,{children:r.jsx("use",{href:`${p}#icon-note`})}),r.jsx(T,{children:r.jsx("use",{href:`${p}#icon-trash`})})]})]}),r.jsxs(D,{children:[r.jsxs(P,{children:[r.jsx(W,{children:r.jsx("use",{href:`${p}#icon-glass`})}),r.jsx("h4",{children:"250ml"}),r.jsxs("p",{children:["7:00",r.jsx("span",{children:"AM"})]})]}),r.jsxs(O,{children:[r.jsx(S,{children:r.jsx("use",{href:`${p}#icon-note`})}),r.jsx(T,{children:r.jsx("use",{href:`${p}#icon-trash`})})]})]}),r.jsxs(D,{children:[r.jsxs(P,{children:[r.jsx(W,{children:r.jsx("use",{href:`${p}#icon-glass`})}),r.jsx("h4",{children:"250ml"}),r.jsxs("p",{children:["7:00",r.jsx("span",{children:"AM"})]})]}),r.jsxs(O,{children:[r.jsx(S,{children:r.jsx("use",{href:`${p}#icon-note`})}),r.jsx(T,{children:r.jsx("use",{href:`${p}#icon-trash`})})]})]}),r.jsxs(D,{children:[r.jsxs(P,{children:[r.jsx(W,{children:r.jsx("use",{href:`${p}#icon-glass`})}),r.jsx("h4",{children:"250ml"}),r.jsxs("p",{children:["7:00",r.jsx("span",{children:"AM"})]})]}),r.jsxs(O,{children:[r.jsx(S,{children:r.jsx("use",{href:`${p}#icon-note`})}),r.jsx(T,{children:r.jsx("use",{href:`${p}#icon-trash`})})]})]}),r.jsxs(D,{children:[r.jsxs(P,{children:[r.jsx(W,{children:r.jsx("use",{href:`${p}#icon-glass`})}),r.jsx("h4",{children:"250ml"}),r.jsxs("p",{children:["7:00",r.jsx("span",{children:"AM"})]})]}),r.jsxs(O,{children:[r.jsx(S,{children:r.jsx("use",{href:`${p}#icon-note`})}),r.jsx(T,{children:r.jsx("use",{href:`${p}#icon-trash`})})]})]})]}),r.jsxs(Ft,{onClick:t,children:[r.jsx("svg",{children:r.jsx("use",{href:`${p}#icon-increment`})}),"Add water"]})]}),e&&r.jsx(I,{onClose:t,children:r.jsx("h2",{children:"Drink list"})})]})};const _t=s.div`
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
`,zt=s.div`
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
`,ne=s.svg`
  width: 6px;
  height: 10px;
  background: transparent;
  fill: ${a.colors.blue};

  &:hover {
    fill: ${a.colors.orange};
  }
`,Nt=s.div`
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
`,Lt=s.button`
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
`,At=s.div`
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
`;function j(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}function M(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}const xe=6048e5,Ht=864e5;let qt={};function z(){return qt}function Y(e,n){var l,h,x,m;const t=z(),o=(n==null?void 0:n.weekStartsOn)??((h=(l=n==null?void 0:n.locale)==null?void 0:l.options)==null?void 0:h.weekStartsOn)??t.weekStartsOn??((m=(x=t.locale)==null?void 0:x.options)==null?void 0:m.weekStartsOn)??0,i=j(e),c=i.getDay(),d=(c<o?7:0)+c-o;return i.setDate(i.getDate()-d),i.setHours(0,0,0,0),i}function E(e){return Y(e,{weekStartsOn:1})}function pe(e){const n=j(e),t=n.getFullYear(),o=M(e,0);o.setFullYear(t+1,0,4),o.setHours(0,0,0,0);const i=E(o),c=M(e,0);c.setFullYear(t,0,4),c.setHours(0,0,0,0);const d=E(c);return n.getTime()>=i.getTime()?t+1:n.getTime()>=d.getTime()?t:t-1}function re(e){const n=j(e);return n.setHours(0,0,0,0),n}function oe(e){const n=j(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function Rt(e,n){const t=re(e),o=re(n),i=+t-oe(t),c=+o-oe(o);return Math.round((i-c)/Ht)}function It(e){const n=pe(e),t=M(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),E(t)}function Xt(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Qt(e){if(!Xt(e)&&typeof e!="number")return!1;const n=j(e);return!isNaN(Number(n))}function Gt(e){const n=j(e),t=M(e,0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}const Vt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Jt=(e,n,t)=>{let o;const i=Vt[e];return typeof i=="string"?o=i:n===1?o=i.one:o=i.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+o:o+" ago":o};function q(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const Ut={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Kt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Zt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},en={date:q({formats:Ut,defaultWidth:"full"}),time:q({formats:Kt,defaultWidth:"full"}),dateTime:q({formats:Zt,defaultWidth:"full"})},tn={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},nn=(e,n,t,o)=>tn[e];function C(e){return(n,t)=>{const o=t!=null&&t.context?String(t.context):"standalone";let i;if(o==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,l=t!=null&&t.width?String(t.width):d;i=e.formattingValues[l]||e.formattingValues[d]}else{const d=e.defaultWidth,l=t!=null&&t.width?String(t.width):e.defaultWidth;i=e.values[l]||e.values[d]}const c=e.argumentCallback?e.argumentCallback(n):n;return i[c]}}const rn={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},on={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},an={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},sn={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},cn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},dn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ln=(e,n)=>{const t=Number(e),o=t%100;if(o>20||o<10)switch(o%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},un={ordinalNumber:ln,era:C({values:rn,defaultWidth:"wide"}),quarter:C({values:on,defaultWidth:"wide",argumentCallback:e=>e-1}),month:C({values:an,defaultWidth:"wide"}),day:C({values:sn,defaultWidth:"wide"}),dayPeriod:C({values:cn,defaultWidth:"wide",formattingValues:dn,defaultFormattingWidth:"wide"})};function F(e){return(n,t={})=>{const o=t.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],c=n.match(i);if(!c)return null;const d=c[0],l=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],h=Array.isArray(l)?xn(l,g=>g.test(d)):hn(l,g=>g.test(d));let x;x=e.valueCallback?e.valueCallback(h):h,x=t.valueCallback?t.valueCallback(x):x;const m=n.slice(d.length);return{value:x,rest:m}}}function hn(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function xn(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function pn(e){return(n,t={})=>{const o=n.match(e.matchPattern);if(!o)return null;const i=o[0],c=n.match(e.parsePattern);if(!c)return null;let d=e.valueCallback?e.valueCallback(c[0]):c[0];d=t.valueCallback?t.valueCallback(d):d;const l=n.slice(i.length);return{value:d,rest:l}}}const mn=/^(\d+)(th|st|nd|rd)?/i,fn=/\d+/i,gn={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},bn={any:[/^b/i,/^(a|c)/i]},wn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},yn={any:[/1/i,/2/i,/3/i,/4/i]},kn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},jn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},vn={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},$n={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Mn={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Dn={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Pn={ordinalNumber:pn({matchPattern:mn,parsePattern:fn,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:gn,defaultMatchWidth:"wide",parsePatterns:bn,defaultParseWidth:"any"}),quarter:F({matchPatterns:wn,defaultMatchWidth:"wide",parsePatterns:yn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:F({matchPatterns:kn,defaultMatchWidth:"wide",parsePatterns:jn,defaultParseWidth:"any"}),day:F({matchPatterns:vn,defaultMatchWidth:"wide",parsePatterns:$n,defaultParseWidth:"any"}),dayPeriod:F({matchPatterns:Mn,defaultMatchWidth:"any",parsePatterns:Dn,defaultParseWidth:"any"})},Wn={code:"en-US",formatDistance:Jt,formatLong:en,formatRelative:nn,localize:un,match:Pn,options:{weekStartsOn:0,firstWeekContainsDate:1}};function On(e){const n=j(e);return Rt(n,Gt(n))+1}function Sn(e){const n=j(e),t=+E(n)-+It(n);return Math.round(t/xe)+1}function me(e,n){var m,g,f,b;const t=j(e),o=t.getFullYear(),i=z(),c=(n==null?void 0:n.firstWeekContainsDate)??((g=(m=n==null?void 0:n.locale)==null?void 0:m.options)==null?void 0:g.firstWeekContainsDate)??i.firstWeekContainsDate??((b=(f=i.locale)==null?void 0:f.options)==null?void 0:b.firstWeekContainsDate)??1,d=M(e,0);d.setFullYear(o+1,0,c),d.setHours(0,0,0,0);const l=Y(d,n),h=M(e,0);h.setFullYear(o,0,c),h.setHours(0,0,0,0);const x=Y(h,n);return t.getTime()>=l.getTime()?o+1:t.getTime()>=x.getTime()?o:o-1}function Tn(e,n){var l,h,x,m;const t=z(),o=(n==null?void 0:n.firstWeekContainsDate)??((h=(l=n==null?void 0:n.locale)==null?void 0:l.options)==null?void 0:h.firstWeekContainsDate)??t.firstWeekContainsDate??((m=(x=t.locale)==null?void 0:x.options)==null?void 0:m.firstWeekContainsDate)??1,i=me(e,n),c=M(e,0);return c.setFullYear(i,0,o),c.setHours(0,0,0,0),Y(c,n)}function Bn(e,n){const t=j(e),o=+Y(t,n)-+Tn(t,n);return Math.round(o/xe)+1}function u(e,n){const t=e<0?"-":"",o=Math.abs(e).toString().padStart(n,"0");return t+o}const v={y(e,n){const t=e.getFullYear(),o=t>0?t:1-t;return u(n==="yy"?o%100:o,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):u(t+1,2)},d(e,n){return u(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return u(e.getHours()%12||12,n.length)},H(e,n){return u(e.getHours(),n.length)},m(e,n){return u(e.getMinutes(),n.length)},s(e,n){return u(e.getSeconds(),n.length)},S(e,n){const t=n.length,o=e.getMilliseconds(),i=Math.trunc(o*Math.pow(10,t-3));return u(i,n.length)}},B={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ae={G:function(e,n,t){const o=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(o,{width:"abbreviated"});case"GGGGG":return t.era(o,{width:"narrow"});case"GGGG":default:return t.era(o,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const o=e.getFullYear(),i=o>0?o:1-o;return t.ordinalNumber(i,{unit:"year"})}return v.y(e,n)},Y:function(e,n,t,o){const i=me(e,o),c=i>0?i:1-i;if(n==="YY"){const d=c%100;return u(d,2)}return n==="Yo"?t.ordinalNumber(c,{unit:"year"}):u(c,n.length)},R:function(e,n){const t=pe(e);return u(t,n.length)},u:function(e,n){const t=e.getFullYear();return u(t,n.length)},Q:function(e,n,t){const o=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(o);case"QQ":return u(o,2);case"Qo":return t.ordinalNumber(o,{unit:"quarter"});case"QQQ":return t.quarter(o,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(o,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(o,{width:"wide",context:"formatting"})}},q:function(e,n,t){const o=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(o);case"qq":return u(o,2);case"qo":return t.ordinalNumber(o,{unit:"quarter"});case"qqq":return t.quarter(o,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(o,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(o,{width:"wide",context:"standalone"})}},M:function(e,n,t){const o=e.getMonth();switch(n){case"M":case"MM":return v.M(e,n);case"Mo":return t.ordinalNumber(o+1,{unit:"month"});case"MMM":return t.month(o,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(o,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(o,{width:"wide",context:"formatting"})}},L:function(e,n,t){const o=e.getMonth();switch(n){case"L":return String(o+1);case"LL":return u(o+1,2);case"Lo":return t.ordinalNumber(o+1,{unit:"month"});case"LLL":return t.month(o,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(o,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(o,{width:"wide",context:"standalone"})}},w:function(e,n,t,o){const i=Bn(e,o);return n==="wo"?t.ordinalNumber(i,{unit:"week"}):u(i,n.length)},I:function(e,n,t){const o=Sn(e);return n==="Io"?t.ordinalNumber(o,{unit:"week"}):u(o,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):v.d(e,n)},D:function(e,n,t){const o=On(e);return n==="Do"?t.ordinalNumber(o,{unit:"dayOfYear"}):u(o,n.length)},E:function(e,n,t){const o=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(o,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(o,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(o,{width:"short",context:"formatting"});case"EEEE":default:return t.day(o,{width:"wide",context:"formatting"})}},e:function(e,n,t,o){const i=e.getDay(),c=(i-o.weekStartsOn+8)%7||7;switch(n){case"e":return String(c);case"ee":return u(c,2);case"eo":return t.ordinalNumber(c,{unit:"day"});case"eee":return t.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(i,{width:"short",context:"formatting"});case"eeee":default:return t.day(i,{width:"wide",context:"formatting"})}},c:function(e,n,t,o){const i=e.getDay(),c=(i-o.weekStartsOn+8)%7||7;switch(n){case"c":return String(c);case"cc":return u(c,n.length);case"co":return t.ordinalNumber(c,{unit:"day"});case"ccc":return t.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(i,{width:"narrow",context:"standalone"});case"cccccc":return t.day(i,{width:"short",context:"standalone"});case"cccc":default:return t.day(i,{width:"wide",context:"standalone"})}},i:function(e,n,t){const o=e.getDay(),i=o===0?7:o;switch(n){case"i":return String(i);case"ii":return u(i,n.length);case"io":return t.ordinalNumber(i,{unit:"day"});case"iii":return t.day(o,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(o,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(o,{width:"short",context:"formatting"});case"iiii":default:return t.day(o,{width:"wide",context:"formatting"})}},a:function(e,n,t){const i=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,n,t){const o=e.getHours();let i;switch(o===12?i=B.noon:o===0?i=B.midnight:i=o/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,n,t){const o=e.getHours();let i;switch(o>=17?i=B.evening:o>=12?i=B.afternoon:o>=4?i=B.morning:i=B.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let o=e.getHours()%12;return o===0&&(o=12),t.ordinalNumber(o,{unit:"hour"})}return v.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):v.H(e,n)},K:function(e,n,t){const o=e.getHours()%12;return n==="Ko"?t.ordinalNumber(o,{unit:"hour"}):u(o,n.length)},k:function(e,n,t){let o=e.getHours();return o===0&&(o=24),n==="ko"?t.ordinalNumber(o,{unit:"hour"}):u(o,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):v.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):v.s(e,n)},S:function(e,n){return v.S(e,n)},X:function(e,n,t){const o=e.getTimezoneOffset();if(o===0)return"Z";switch(n){case"X":return se(o);case"XXXX":case"XX":return $(o);case"XXXXX":case"XXX":default:return $(o,":")}},x:function(e,n,t){const o=e.getTimezoneOffset();switch(n){case"x":return se(o);case"xxxx":case"xx":return $(o);case"xxxxx":case"xxx":default:return $(o,":")}},O:function(e,n,t){const o=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+ie(o,":");case"OOOO":default:return"GMT"+$(o,":")}},z:function(e,n,t){const o=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+ie(o,":");case"zzzz":default:return"GMT"+$(o,":")}},t:function(e,n,t){const o=Math.trunc(e.getTime()/1e3);return u(o,n.length)},T:function(e,n,t){const o=e.getTime();return u(o,n.length)}};function ie(e,n=""){const t=e>0?"-":"+",o=Math.abs(e),i=Math.trunc(o/60),c=o%60;return c===0?t+String(i):t+String(i)+n+u(c,2)}function se(e,n){return e%60===0?(e>0?"-":"+")+u(Math.abs(e)/60,2):$(e,n)}function $(e,n=""){const t=e>0?"-":"+",o=Math.abs(e),i=u(Math.trunc(o/60),2),c=u(o%60,2);return t+i+n+c}const ce=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},fe=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},Cn=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],o=t[1],i=t[2];if(!i)return ce(e,n);let c;switch(o){case"P":c=n.dateTime({width:"short"});break;case"PP":c=n.dateTime({width:"medium"});break;case"PPP":c=n.dateTime({width:"long"});break;case"PPPP":default:c=n.dateTime({width:"full"});break}return c.replace("{{date}}",ce(o,n)).replace("{{time}}",fe(i,n))},Fn={p:fe,P:Cn},Yn=/^D+$/,_n=/^Y+$/,En=["D","DD","YY","YYYY"];function zn(e){return Yn.test(e)}function Nn(e){return _n.test(e)}function Ln(e,n,t){const o=An(e,n,t);if(console.warn(o),En.includes(e))throw new RangeError(o)}function An(e,n,t){const o=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${o} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Hn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,qn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Rn=/^'([^]*?)'?$/,In=/''/g,Xn=/[a-zA-Z]/;function de(e,n,t){var m,g,f,b,X,Q,G,V;const o=z(),i=(t==null?void 0:t.locale)??o.locale??Wn,c=(t==null?void 0:t.firstWeekContainsDate)??((g=(m=t==null?void 0:t.locale)==null?void 0:m.options)==null?void 0:g.firstWeekContainsDate)??o.firstWeekContainsDate??((b=(f=o.locale)==null?void 0:f.options)==null?void 0:b.firstWeekContainsDate)??1,d=(t==null?void 0:t.weekStartsOn)??((Q=(X=t==null?void 0:t.locale)==null?void 0:X.options)==null?void 0:Q.weekStartsOn)??o.weekStartsOn??((V=(G=o.locale)==null?void 0:G.options)==null?void 0:V.weekStartsOn)??0,l=j(e);if(!Qt(l))throw new RangeError("Invalid time value");let h=n.match(qn).map(k=>{const w=k[0];if(w==="p"||w==="P"){const N=Fn[w];return N(k,i.formatLong)}return k}).join("").match(Hn).map(k=>{if(k==="''")return{isToken:!1,value:"'"};const w=k[0];if(w==="'")return{isToken:!1,value:Qn(k)};if(ae[w])return{isToken:!0,value:k};if(w.match(Xn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+w+"`");return{isToken:!1,value:k}});i.localize.preprocessor&&(h=i.localize.preprocessor(l,h));const x={firstWeekContainsDate:c,weekStartsOn:d,locale:i};return h.map(k=>{if(!k.isToken)return k.value;const w=k.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&Nn(w)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&zn(w))&&Ln(w,n,String(e));const N=ae[w[0]];return N(l,w,i.localize,x)}).join("")}function Qn(e){const n=e.match(Rn);return n?n[1].replace(In,"'"):e}const Gn=()=>{const[e,n]=y.useState(new Date),[t,o]=y.useState(new Date),i=x=>{n(m=>{const g=new Date(m);return g.setMonth(g.getMonth()+x),g})},c=()=>{const m=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),g=[];for(let f=1;f<=m;f++)g.push(f);return g},d=()=>new Intl.DateTimeFormat("en",{month:"long"}).format(e),l=()=>e.getFullYear(),h=x=>{const m=new Date(e.getFullYear(),e.getMonth(),x);m<=new Date?(o(m),console.log(de(m,"dd.MM.yyyy"))):console.log("Выберите день не позже сегодняшней даты")};return r.jsxs("div",{children:[r.jsxs(_t,{children:[r.jsxs(Et,{children:[r.jsx("h3",{children:"Month"}),r.jsxs(zt,{children:[r.jsx(ne,{onClick:()=>i(-1),children:r.jsx("use",{href:`${p}#icon-left`})}),r.jsxs("span",{children:[d(),", ",l()]}),r.jsx(ne,{onClick:()=>i(1),children:r.jsx("use",{href:`${p}#icon-right`})})]})]}),r.jsx(Nt,{children:c().map(x=>r.jsxs("div",{children:[r.jsx(Lt,{onClick:()=>h(x),children:x}),r.jsx(At,{children:"0%"})]},x))})]}),t!==null&&r.jsxs("p",{children:["Selected day: ",de(t,"dd.MM.yyyy")]})]})},Vn=s.div`
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
`,Jn=s.div`
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
`,Un=s.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    max-width: 50%;
  }
`,Kn=s.div`
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
`,tr=()=>r.jsx(r.Fragment,{children:r.jsx(Kn,{children:r.jsxs(Vn,{children:[r.jsxs(Un,{children:[r.jsx(rt,{}),r.jsx(St,{})]}),r.jsxs(Jn,{children:[r.jsx(Yt,{}),r.jsx(Gn,{})]})]})})});export{tr as default};
