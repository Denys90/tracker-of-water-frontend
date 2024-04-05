import{n as s,t as a,r as g,R as le,j as o,s as j,c as ue,u as re,a as B,g as he,d as pe,e as me,p as xe,f as fe,h as ge}from"./index-e5a54594.js";import{F as L,a as be,b as we}from"./formik.esm-987bf00b.js";const ye="/runners_of_code__frontend/assets/bottle_home_mobile@1x-0d6054eb.png",ke="/runners_of_code__frontend/assets/bottle_home_mobile@2x-52eb5066.png",ve="/runners_of_code__frontend/assets/bottle_home_tablet@1x-c4bedac4.png",je="/runners_of_code__frontend/assets/bottle_home_tablet@2x-867eb443.png",$e="/runners_of_code__frontend/assets/bottle_home_desk-f67b46be.png",Me="/runners_of_code__frontend/assets/bottle_home_deskx2-acd9b153.png",De=s.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;
`,Pe=s.div`
  background-position: center;
  background-image: -webkit-image-set(
    url(${ye}) 1x,
    url(${ke}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;
  z-index: -1;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${ve}) 1x,
      url(${je}) 2x
    );
    height: 386px;
    margin-top: -114px;
    background-position: center top;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${$e}) 1x,
      url(${Me}) 2x
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
`,Oe=s.div`
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
`,Se=s.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`,Te=s.button`
  padding: 0;
  background-color: ${a.colors.white};
  color: ${a.colors.blue};
  border: none;
  font-size: 16px;
  &:hover {
    color: ${a.colors.orange};
  }
`,Be=s.div`
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
`,Ce=s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`,Fe=s.div`
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
`,Ye=s.button`
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
`,H=({onClose:e,children:n})=>{const t=document.getElementById("modal-root"),r=g.useRef(),i=d=>{d.target===r.current&&e(),document.body.style.overflow="",document.body.style.position="",d.stopPropagation()},c=d=>{d.key==="Escape"&&(document.body.style.overflow="",document.body.style.position="",e())};return g.useEffect(()=>{const d=l=>c(l);return document.addEventListener("keydown",d),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",d)}},[]),le.createPortal(o.jsx(Be,{onClick:i,ref:r,children:o.jsx(Ce,{children:o.jsxs(Fe,{children:[o.jsx(Ye,{onClick:e,children:o.jsx("svg",{children:o.jsx("use",{href:`${j}#closeModal`})})}),n]})})}),t)},oe=e=>e.waters.dailyNorm,_e=e=>e.waters.reps,ae=e=>e.filter;ue([oe,ae],(e,n)=>e.filter(t=>t.name.toLowerCase().includes(n.toLowerCase())));const Ee=()=>{const e=re(),n=B(oe),t=B(_e),r=B(ae),i=g.useCallback(h=>e(he(h)),[e]),c=g.useCallback(h=>e(pe(h)),[e]),d=g.useCallback(h=>e(me(h)),[e]),l=g.useCallback(h=>e(xe(h)),[e]);return{dailyNorm:n,reps:t,filter:r,getWaters:i,addDailyNorma:c,deleteReps:d,patchWater:l}},ze=s.h2`
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
`,R=s.p`
  font-size: 16px;
`,I=s.span`
  font-size: 18px;
  color: ${a.colors.blue};
`,Le=s.div`
  border: 1px solid ${a.colors.paleBlue};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  margin-bottom: 24px;
  width: auto;
`,He=s.p`
  color: ${a.colors.secondText};
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`,qe=s.span`
  color: ${a.colors.blue};
`,Ae=s.div`
  margin-bottom: 24px;
`,Re=s.h3`
  margin-bottom: 16px;
  margin-top: 0;
`,Ie=s.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
`,X=s.div`
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
`,_=s.label``,Xe=s.div`
  font-size: 18px;
  padding-bottom: 26px;
  span {
    padding-left: 5px;
    color: ${a.colors.blue};
    font-weight: bold;
  }
`,E=s.label`
  display: block;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 8px;
  color: ${a.colors.black};
`,z=s(L)`
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
`,Qe=s.button`
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
`,Ge=s.div`
  width: 280px;
  @media screen and (min-width: ${a.breakpoint.tablet}) {
    min-width: 704px;
  }

  @media (min-width: ${a.breakpoint.desktop}) {
    min-width: 592px;
  }
`;function Ve(){const{addDailyNorma:e}=Ee(),n=r=>{const{gender:i,weight:c,activityHours:d}=r;if(i&&c&&d){if(i==="man")return parseFloat(c)*.04+parseFloat(d)*.6;if(i==="woman")return parseFloat(c)*.03+parseFloat(d)*.4}return null},{signUp:t}=fe();return g.useEffect(()=>{t({email:"DM5@mail.com",password:"qwe123qwe5"})},[t]),o.jsxs(Ge,{children:[o.jsx(ze,{children:"My daily norma"}),o.jsx(be,{initialValues:{gender:"man",weight:"",activityHours:""},onSubmit:(r,{setSubmitting:i})=>{const c=n(r);e({waterIntake:c}),console.log("Form data:",{...r,waterIntake:c}),i(!1)},children:({isSubmitting:r,errors:i,touched:c,values:d,setFieldValue:l})=>o.jsxs(we,{children:[o.jsxs(Ne,{children:[o.jsxs(R,{children:["For girl:"," ",o.jsx(I,{children:"V=(M*0,03) + (T*0,4)"})]}),o.jsxs(R,{children:["For man:"," ",o.jsx(I,{children:"V=(M*0,04) + (T*0,6)"})]})]}),o.jsx(Le,{children:o.jsxs(He,{children:[o.jsx(qe,{children:"* "}),"V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]})}),o.jsxs(Ae,{children:[o.jsx(Re,{children:"Calculate your rate:"}),o.jsxs(Ie,{children:[o.jsxs("label",{children:[o.jsx(L,{type:"radio",name:"gender",value:"man",onChange:()=>l("gender","man")}),"For man"]}),o.jsxs("label",{children:[o.jsx(L,{type:"radio",name:"gender",value:"woman",onChange:()=>l("gender","woman")}),"For woman"]})]}),i.gender&&c.gender&&o.jsx("div",{children:i.gender})]}),o.jsx(X,{children:o.jsxs(_,{children:[o.jsx(E,{children:"Your weight in kilograms:"}),o.jsx(z,{type:"number",name:"weight",placeholder:"0"}),i.weight&&c.weight&&o.jsx("div",{children:i.weight})]})}),o.jsxs(X,{children:[o.jsxs(E,{children:[" ","The time of active participation in sports or other activities with a high physical. load in hours:"]}),o.jsxs(_,{children:[o.jsx(z,{type:"number",name:"activityHours",placeholder:"0"}),i.activityHours&&c.activityHours&&o.jsx("div",{children:i.activityHours})]})]}),o.jsxs(Xe,{children:["Your recommended water intake per day is:",o.jsxs("span",{children:[n(d)?parseFloat(n(d)).toFixed(2):0,"L"]})]}),o.jsx(E,{children:"Write down how much water you will drink:"}),o.jsx(_,{children:o.jsx(z,{type:"number",name:"Iwilldrunk",placeholder:"0"})}),o.jsx(Qe,{type:"submit",disabled:r,children:"Save"})]})})]})}const Je=()=>{const[e,n]=g.useState(!1),t=()=>{n(!e)},i=(2e3/1e3).toFixed(1)+" L";return o.jsxs(De,{children:[o.jsxs(Oe,{children:[o.jsx(We,{children:"My daily norma"}),o.jsxs(Se,{children:[o.jsx("p",{children:i}),o.jsx(Te,{type:"button",onClick:t,children:"Edit"})]})]}),o.jsx(Pe,{}),e&&o.jsx(H,{onClose:t,children:o.jsx(Ve,{})})]})},Ue=s.div`
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
`,Ke=s.h3`
  font-size: 18px;
  font-weight: 400;
  color: ${a.colors.blue};
  text-align: left;
  line-height: 1;
  width: 100%;
`,Ze=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,et=s.div`
  width: 256px;
  margin: 5px 14px;

  @media screen and (min-width: ${a.breakpoint.tablet}) {
    width: 325px;
  }

  @media screen and (min-width: ${a.breakpoint.desktop}) {
    width: 360px;
  }
`,tt=s.div`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${a.colors.paleBlue};
`,nt=s.span`
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
`,rt=s.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`,ot=s.span`
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
`,at=s.span`
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
`,it=s.span`
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
`,st=s.button`
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
`,ct=s.div`
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
`,dt=()=>o.jsx(ct,{}),lt=e=>e.root.isLoading,ut=s.div`
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
`,Q=s.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${a.colors.black};
  margin-bottom: 12px;
`,ht=s.div`
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
   
`,mt=s.h3`
font-weight: 500;
font-size: 18px;
line-height: 111%;
 margin-bottom: 16px;
   
`,xt=s.p`
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
`,ft=s.div`
  background: ${a.colors.paleBlue};
  border-radius: 40px;
padding: 6px 10px;
width: 92px;
height: 36px;
  margin-left: 10px;
  margin-right: 10px;
`,G=s.button`
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
`,V=s.svg`
  width: 24px;
  height: 24px;
  stroke: ${a.colors.blue};
  fill: ${a.colors.blue};
`,gt=s.div`
  margin-bottom: 24px;
`,bt=s.input`
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
`,wt=s.input`
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

`,yt=s.div`
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
`,kt=s.button`
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
`,vt=({onClose:e})=>{const[t,r]=g.useState(0),[i,c]=g.useState(new Date().toISOString().slice(0,16)),d=re(),{isLoading:l}=B(lt),h=p=>{let m=p.target.value;m.startsWith("0")&&m.length>1&&(m=parseFloat(m.substring(1))),r(m.toString())},x=()=>{d(ge({waterVolume:t,date:i})).then(m=>{m.error||(e(),r(0))})},f=()=>{r(p=>Math.max(p-50,0))},w=()=>{const p=t+50,m=5e3;r(p<=m?p:m)};return o.jsx(o.Fragment,{children:o.jsxs(ut,{onClose:e,children:[o.jsxs(ht,{children:[o.jsx(pt,{children:"Add Water"}),o.jsx(mt,{children:"Choose a value:"}),o.jsx(Q,{children:"Amount of water:"}),o.jsxs("div",{children:[o.jsx(G,{onClick:f,children:o.jsx(V,{children:o.jsx("use",{href:`${j}#icon-minus`})})}),o.jsx(ft,{children:o.jsxs(xt,{children:[t," ml"]})}),o.jsx(G,{onClick:w,children:o.jsx(V,{children:o.jsx("use",{href:`${j}#icon-plus`})})})]})]}),o.jsxs(gt,{children:[o.jsx(Q,{children:"Recording time:"}),o.jsx(bt,{value:i,onChange:p=>c(p.target.value),step:"300"})]}),o.jsxs("div",{children:[o.jsx("h3",{children:"Enter the value of the water used:"}),o.jsx(wt,{type:"number",value:t,onChange:h,onBlur:()=>r(p=>p||0||0),max:5e3})]}),o.jsxs(yt,{children:[o.jsxs("span",{children:[t,"ml"]}),o.jsxs(kt,{onClick:x,children:["Save ",l&&o.jsx(dt,{})]})]})]})})},jt=()=>{const[e,n]=g.useState(!1),t=()=>{n(!e)},r=88;return o.jsxs(Ue,{children:[o.jsxs(Ze,{children:[o.jsx(Ke,{children:"Today"}),o.jsxs(et,{children:[o.jsx(tt,{children:o.jsx(nt,{style:{width:`${Math.min(r,100)}%`}})}),o.jsxs(rt,{children:[o.jsx(ot,{children:"0%"}),o.jsxs(it,{left:`${r}%`,children:[r,"%"]}),o.jsx(at,{children:"100%"})]})]})]}),o.jsxs(st,{onClick:t,children:[o.jsx("svg",{children:o.jsx("use",{href:`${j}#icon-outline`})}),"Add water"]}),e&&o.jsx(H,{onClose:t,children:o.jsx(vt,{})})]})},$t=s.div`
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
`,Pt=s.h3`
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
`,Wt=s.div`
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
`,St=s.div`
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
`,Bt=s.svg`
  width: 16px;
  height: 16px;
  stroke: ${a.colors.brightRed};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${a.colors.brightRed};
  }
`,Ct=s.button`
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
`,Ft=()=>{const e=[{id:1,volume:250,time:"7:00"},{id:2,volume:500,time:"10:00"}],[n,t]=g.useState(!1),r=()=>{t(!n)};return o.jsxs(o.Fragment,{children:[o.jsxs($t,{children:[o.jsx(Pt,{children:"Today"}),o.jsx(Mt,{children:e.map(i=>o.jsxs(Dt,{children:[o.jsxs(Wt,{children:[o.jsx(Ot,{children:o.jsx("use",{href:`${j}#icon-glass`})}),o.jsxs("h4",{children:[i.volume," ml"]}),o.jsxs("p",{children:[i.time,o.jsx("span",{children:" AM"})]})]}),o.jsxs(St,{children:[o.jsx(Tt,{children:o.jsx("use",{href:`${j}#icon-note`})}),o.jsx(Bt,{children:o.jsx("use",{href:`${j}#icon-trash`})})]})]},i.id))}),o.jsxs(Ct,{onClick:r,children:[o.jsx("svg",{children:o.jsx("use",{href:`${j}#icon-increment`})}),"Add water"]})]}),n&&o.jsx(H,{onClose:r,children:o.jsx("h2",{children:"Drink list"})})]})};const Yt=s.div`
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
`,_t=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,Et=s.div`
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
`,J=s.svg`
  width: 6px;
  height: 10px;
  background: transparent;
  fill: ${a.colors.blue};

  &:hover {
    fill: ${a.colors.orange};
  }
`,zt=s.div`
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
`,Nt=s.button`
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
`,Lt=s.div`
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
`,Ht=s.div`
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
`;function k(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}function D(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}const ie=6048e5,qt=864e5;let At={};function F(){return At}function T(e,n){var l,h,x,f;const t=F(),r=(n==null?void 0:n.weekStartsOn)??((h=(l=n==null?void 0:n.locale)==null?void 0:l.options)==null?void 0:h.weekStartsOn)??t.weekStartsOn??((f=(x=t.locale)==null?void 0:x.options)==null?void 0:f.weekStartsOn)??0,i=k(e),c=i.getDay(),d=(c<r?7:0)+c-r;return i.setDate(i.getDate()-d),i.setHours(0,0,0,0),i}function C(e){return T(e,{weekStartsOn:1})}function se(e){const n=k(e),t=n.getFullYear(),r=D(e,0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const i=C(r),c=D(e,0);c.setFullYear(t,0,4),c.setHours(0,0,0,0);const d=C(c);return n.getTime()>=i.getTime()?t+1:n.getTime()>=d.getTime()?t:t-1}function U(e){const n=k(e);return n.setHours(0,0,0,0),n}function K(e){const n=k(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function Rt(e,n){const t=U(e),r=U(n),i=+t-K(t),c=+r-K(r);return Math.round((i-c)/qt)}function It(e){const n=se(e),t=D(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),C(t)}function Xt(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Qt(e){if(!Xt(e)&&typeof e!="number")return!1;const n=k(e);return!isNaN(Number(n))}function Gt(e){const n=k(e),t=D(e,0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}const Vt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Jt=(e,n,t)=>{let r;const i=Vt[e];return typeof i=="string"?r=i:n===1?r=i.one:r=i.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function N(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const Ut={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Kt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Zt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},en={date:N({formats:Ut,defaultWidth:"full"}),time:N({formats:Kt,defaultWidth:"full"}),dateTime:N({formats:Zt,defaultWidth:"full"})},tn={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},nn=(e,n,t,r)=>tn[e];function O(e){return(n,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let i;if(r==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,l=t!=null&&t.width?String(t.width):d;i=e.formattingValues[l]||e.formattingValues[d]}else{const d=e.defaultWidth,l=t!=null&&t.width?String(t.width):e.defaultWidth;i=e.values[l]||e.values[d]}const c=e.argumentCallback?e.argumentCallback(n):n;return i[c]}}const rn={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},on={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},an={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},sn={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},cn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},dn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ln=(e,n)=>{const t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},un={ordinalNumber:ln,era:O({values:rn,defaultWidth:"wide"}),quarter:O({values:on,defaultWidth:"wide",argumentCallback:e=>e-1}),month:O({values:an,defaultWidth:"wide"}),day:O({values:sn,defaultWidth:"wide"}),dayPeriod:O({values:cn,defaultWidth:"wide",formattingValues:dn,defaultFormattingWidth:"wide"})};function S(e){return(n,t={})=>{const r=t.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],c=n.match(i);if(!c)return null;const d=c[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],h=Array.isArray(l)?pn(l,w=>w.test(d)):hn(l,w=>w.test(d));let x;x=e.valueCallback?e.valueCallback(h):h,x=t.valueCallback?t.valueCallback(x):x;const f=n.slice(d.length);return{value:x,rest:f}}}function hn(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function pn(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function mn(e){return(n,t={})=>{const r=n.match(e.matchPattern);if(!r)return null;const i=r[0],c=n.match(e.parsePattern);if(!c)return null;let d=e.valueCallback?e.valueCallback(c[0]):c[0];d=t.valueCallback?t.valueCallback(d):d;const l=n.slice(i.length);return{value:d,rest:l}}}const xn=/^(\d+)(th|st|nd|rd)?/i,fn=/\d+/i,gn={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},bn={any:[/^b/i,/^(a|c)/i]},wn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},yn={any:[/1/i,/2/i,/3/i,/4/i]},kn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},vn={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},jn={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},$n={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Mn={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Dn={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Pn={ordinalNumber:mn({matchPattern:xn,parsePattern:fn,valueCallback:e=>parseInt(e,10)}),era:S({matchPatterns:gn,defaultMatchWidth:"wide",parsePatterns:bn,defaultParseWidth:"any"}),quarter:S({matchPatterns:wn,defaultMatchWidth:"wide",parsePatterns:yn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:S({matchPatterns:kn,defaultMatchWidth:"wide",parsePatterns:vn,defaultParseWidth:"any"}),day:S({matchPatterns:jn,defaultMatchWidth:"wide",parsePatterns:$n,defaultParseWidth:"any"}),dayPeriod:S({matchPatterns:Mn,defaultMatchWidth:"any",parsePatterns:Dn,defaultParseWidth:"any"})},Wn={code:"en-US",formatDistance:Jt,formatLong:en,formatRelative:nn,localize:un,match:Pn,options:{weekStartsOn:0,firstWeekContainsDate:1}};function On(e){const n=k(e);return Rt(n,Gt(n))+1}function Sn(e){const n=k(e),t=+C(n)-+It(n);return Math.round(t/ie)+1}function ce(e,n){var f,w,p,m;const t=k(e),r=t.getFullYear(),i=F(),c=(n==null?void 0:n.firstWeekContainsDate)??((w=(f=n==null?void 0:n.locale)==null?void 0:f.options)==null?void 0:w.firstWeekContainsDate)??i.firstWeekContainsDate??((m=(p=i.locale)==null?void 0:p.options)==null?void 0:m.firstWeekContainsDate)??1,d=D(e,0);d.setFullYear(r+1,0,c),d.setHours(0,0,0,0);const l=T(d,n),h=D(e,0);h.setFullYear(r,0,c),h.setHours(0,0,0,0);const x=T(h,n);return t.getTime()>=l.getTime()?r+1:t.getTime()>=x.getTime()?r:r-1}function Tn(e,n){var l,h,x,f;const t=F(),r=(n==null?void 0:n.firstWeekContainsDate)??((h=(l=n==null?void 0:n.locale)==null?void 0:l.options)==null?void 0:h.firstWeekContainsDate)??t.firstWeekContainsDate??((f=(x=t.locale)==null?void 0:x.options)==null?void 0:f.firstWeekContainsDate)??1,i=ce(e,n),c=D(e,0);return c.setFullYear(i,0,r),c.setHours(0,0,0,0),T(c,n)}function Bn(e,n){const t=k(e),r=+T(t,n)-+Tn(t,n);return Math.round(r/ie)+1}function u(e,n){const t=e<0?"-":"",r=Math.abs(e).toString().padStart(n,"0");return t+r}const $={y(e,n){const t=e.getFullYear(),r=t>0?t:1-t;return u(n==="yy"?r%100:r,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):u(t+1,2)},d(e,n){return u(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return u(e.getHours()%12||12,n.length)},H(e,n){return u(e.getHours(),n.length)},m(e,n){return u(e.getMinutes(),n.length)},s(e,n){return u(e.getSeconds(),n.length)},S(e,n){const t=n.length,r=e.getMilliseconds(),i=Math.trunc(r*Math.pow(10,t-3));return u(i,n.length)}},W={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Z={G:function(e,n,t){const r=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const r=e.getFullYear(),i=r>0?r:1-r;return t.ordinalNumber(i,{unit:"year"})}return $.y(e,n)},Y:function(e,n,t,r){const i=ce(e,r),c=i>0?i:1-i;if(n==="YY"){const d=c%100;return u(d,2)}return n==="Yo"?t.ordinalNumber(c,{unit:"year"}):u(c,n.length)},R:function(e,n){const t=se(e);return u(t,n.length)},u:function(e,n){const t=e.getFullYear();return u(t,n.length)},Q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return u(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return u(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,n,t){const r=e.getMonth();switch(n){case"M":case"MM":return $.M(e,n);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(e,n,t){const r=e.getMonth();switch(n){case"L":return String(r+1);case"LL":return u(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,t,r){const i=Bn(e,r);return n==="wo"?t.ordinalNumber(i,{unit:"week"}):u(i,n.length)},I:function(e,n,t){const r=Sn(e);return n==="Io"?t.ordinalNumber(r,{unit:"week"}):u(r,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):$.d(e,n)},D:function(e,n,t){const r=On(e);return n==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):u(r,n.length)},E:function(e,n,t){const r=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(e,n,t,r){const i=e.getDay(),c=(i-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(c);case"ee":return u(c,2);case"eo":return t.ordinalNumber(c,{unit:"day"});case"eee":return t.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(i,{width:"short",context:"formatting"});case"eeee":default:return t.day(i,{width:"wide",context:"formatting"})}},c:function(e,n,t,r){const i=e.getDay(),c=(i-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(c);case"cc":return u(c,n.length);case"co":return t.ordinalNumber(c,{unit:"day"});case"ccc":return t.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(i,{width:"narrow",context:"standalone"});case"cccccc":return t.day(i,{width:"short",context:"standalone"});case"cccc":default:return t.day(i,{width:"wide",context:"standalone"})}},i:function(e,n,t){const r=e.getDay(),i=r===0?7:r;switch(n){case"i":return String(i);case"ii":return u(i,n.length);case"io":return t.ordinalNumber(i,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(e,n,t){const i=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,n,t){const r=e.getHours();let i;switch(r===12?i=W.noon:r===0?i=W.midnight:i=r/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,n,t){const r=e.getHours();let i;switch(r>=17?i=W.evening:r>=12?i=W.afternoon:r>=4?i=W.morning:i=W.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let r=e.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return $.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):$.H(e,n)},K:function(e,n,t){const r=e.getHours()%12;return n==="Ko"?t.ordinalNumber(r,{unit:"hour"}):u(r,n.length)},k:function(e,n,t){let r=e.getHours();return r===0&&(r=24),n==="ko"?t.ordinalNumber(r,{unit:"hour"}):u(r,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):$.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):$.s(e,n)},S:function(e,n){return $.S(e,n)},X:function(e,n,t){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(n){case"X":return te(r);case"XXXX":case"XX":return M(r);case"XXXXX":case"XXX":default:return M(r,":")}},x:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"x":return te(r);case"xxxx":case"xx":return M(r);case"xxxxx":case"xxx":default:return M(r,":")}},O:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+ee(r,":");case"OOOO":default:return"GMT"+M(r,":")}},z:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+ee(r,":");case"zzzz":default:return"GMT"+M(r,":")}},t:function(e,n,t){const r=Math.trunc(e.getTime()/1e3);return u(r,n.length)},T:function(e,n,t){const r=e.getTime();return u(r,n.length)}};function ee(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),i=Math.trunc(r/60),c=r%60;return c===0?t+String(i):t+String(i)+n+u(c,2)}function te(e,n){return e%60===0?(e>0?"-":"+")+u(Math.abs(e)/60,2):M(e,n)}function M(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),i=u(Math.trunc(r/60),2),c=u(r%60,2);return t+i+n+c}const ne=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},de=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},Cn=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],r=t[1],i=t[2];if(!i)return ne(e,n);let c;switch(r){case"P":c=n.dateTime({width:"short"});break;case"PP":c=n.dateTime({width:"medium"});break;case"PPP":c=n.dateTime({width:"long"});break;case"PPPP":default:c=n.dateTime({width:"full"});break}return c.replace("{{date}}",ne(r,n)).replace("{{time}}",de(i,n))},Fn={p:de,P:Cn},Yn=/^D+$/,_n=/^Y+$/,En=["D","DD","YY","YYYY"];function zn(e){return Yn.test(e)}function Nn(e){return _n.test(e)}function Ln(e,n,t){const r=Hn(e,n,t);if(console.warn(r),En.includes(e))throw new RangeError(r)}function Hn(e,n,t){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const qn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,An=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Rn=/^'([^]*?)'?$/,In=/''/g,Xn=/[a-zA-Z]/;function Qn(e,n,t){var f,w,p,m,v,P,q,A;const r=F(),i=(t==null?void 0:t.locale)??r.locale??Wn,c=(t==null?void 0:t.firstWeekContainsDate)??((w=(f=t==null?void 0:t.locale)==null?void 0:f.options)==null?void 0:w.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(p=r.locale)==null?void 0:p.options)==null?void 0:m.firstWeekContainsDate)??1,d=(t==null?void 0:t.weekStartsOn)??((P=(v=t==null?void 0:t.locale)==null?void 0:v.options)==null?void 0:P.weekStartsOn)??r.weekStartsOn??((A=(q=r.locale)==null?void 0:q.options)==null?void 0:A.weekStartsOn)??0,l=k(e);if(!Qt(l))throw new RangeError("Invalid time value");let h=n.match(An).map(y=>{const b=y[0];if(b==="p"||b==="P"){const Y=Fn[b];return Y(y,i.formatLong)}return y}).join("").match(qn).map(y=>{if(y==="''")return{isToken:!1,value:"'"};const b=y[0];if(b==="'")return{isToken:!1,value:Gn(y)};if(Z[b])return{isToken:!0,value:y};if(b.match(Xn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");return{isToken:!1,value:y}});i.localize.preprocessor&&(h=i.localize.preprocessor(l,h));const x={firstWeekContainsDate:c,weekStartsOn:d,locale:i};return h.map(y=>{if(!y.isToken)return y.value;const b=y.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&Nn(b)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&zn(b))&&Ln(b,n,String(e));const Y=Z[b[0]];return Y(l,b,i.localize,x)}).join("")}function Gn(e){const n=e.match(Rn);return n?n[1].replace(In,"'"):e}const Vn=()=>{const[e,n]=g.useState(new Date),[t,r]=g.useState(null),[i,c]=g.useState({x:0,y:0}),d=p=>{n(m=>{const v=new Date(m);return v.setMonth(v.getMonth()+p),v})},l=()=>{const m=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),v=[];for(let P=1;P<=m;P++)v.push(P);return v},h=()=>new Intl.DateTimeFormat("en",{month:"long"}).format(e),x=()=>e.getFullYear(),f=p=>{const m=new Date(e.getFullYear(),e.getMonth(),p);m<=new Date?(r(m),c({x:event.clientX,y:event.clientY})):alert("Выберите день не позже сегодняшней даты")},w=()=>{r(null)};return o.jsxs("div",{children:[o.jsxs(Yt,{children:[o.jsxs(_t,{children:[o.jsx("h3",{children:"Month"}),o.jsxs(Et,{children:[o.jsx(J,{onClick:()=>d(-1),children:o.jsx("use",{href:`${j}#icon-left`})}),o.jsxs("span",{children:[h(),", ",x()]}),o.jsx(J,{onClick:()=>d(1),children:o.jsx("use",{href:`${j}#icon-right`})})]})]}),o.jsx(zt,{children:l().map(p=>o.jsxs("div",{children:[o.jsx(Nt,{onClick:m=>f(p),children:p}),o.jsx(Lt,{children:"0%"})]},p))})]}),t&&o.jsxs(Ht,{style:{top:i.y,left:i.x},children:[o.jsxs("p",{children:["Selected day: ",Qn(t,"dd.MM.yyyy")]}),o.jsx("button",{onClick:w,children:"Close"})]})]})},Jn=s.div`
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
`,nr=()=>o.jsx(o.Fragment,{children:o.jsx(Zn,{children:o.jsxs(Jn,{children:[o.jsxs(Kn,{children:[o.jsx(Je,{}),o.jsx(jt,{})]}),o.jsxs(Un,{children:[o.jsx(Ft,{}),o.jsx(Vn,{})]})]})})});export{nr as default};
