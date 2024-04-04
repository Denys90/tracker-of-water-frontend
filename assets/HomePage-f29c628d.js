import{n,t,a as v,j as e,r,s as i}from"./index-01677202.js";const M="/runners_of_code__frontend/assets/bottle_home_mobile@1x-0d6054eb.png",_="/runners_of_code__frontend/assets/bottle_home_mobile@2x-52eb5066.png",B="/runners_of_code__frontend/assets/bottle_home_tablet@1x-c4bedac4.png",D="/runners_of_code__frontend/assets/bottle_home_tablet@2x-867eb443.png",L="/runners_of_code__frontend/assets/bottle_home_desk-f67b46be.png",C="/runners_of_code__frontend/assets/bottle_home_deskx2-acd9b153.png",E=n.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;
`,z=n.div`
  background-position: center;
  background-image: -webkit-image-set(
    url(${M}) 1x,
    url(${_}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${B}) 1x,
      url(${D}) 2x
    );
    height: 386px;
    margin-top: -114px;
    background-position: center top;
  }

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${L}) 1x,
      url(${C}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,S=n.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;

  margin-bottom: 16px;

  color: ${t.colors.black};
  text-align: center;
`,R=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 8px 20px;
  padding-top: 20px;
  align-items: center;
  width: 170px;

  border-radius: 10px;
  border: 1px solid ${t.colors.lightBlue};
  box-shadow: ${t.boxShadowBtn.Btn};

  p {
    font-size: 22px;
    font-weight: 700;
    line-height: 1;

    color: ${t.colors.blue};
    display: block;
  }
  a {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    margin-bottom: 0;
    padding-top: 2px;

    color: ${t.colors.skyBlue};
    cursor: pointer;
    background: transparent;

    &:hover,
    &:focus {
      text-decoration: underline;
      color: ${t.colors.orange};
    }
  }
`,P=n.div`
  display: flex;
  gap: 12px;
  margin: 0 auto;
`,A=n.div`
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
`,N=n.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 450px;
  height: 350px;
`,O=n.div`
  position: relative;
  padding: 20px;
  width: 450px;
  height: auto;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: ${t.colors.white};
  backdrop-filter: blur(5px);
  transform: translateY(-50px);
  transition:
    opacity 0.3s,
    transform 0.3s;
`,W=n.button`
  position: absolute;
  top: 12px;
  right: 12px;
  color: ${t.colors.blue};
  display: block;
  border: none;
  background-color: transparent;
  padding: 0px;
  cursor: pointer;
`,$=document.querySelector("#modalRoot"),k=({isOpen:o,toggleModal:l,children:s})=>o?null:$&&v.createPortal(e.jsx(A,{children:e.jsx(N,{children:e.jsxs(O,{children:[s,e.jsx(W,{onClick:l,children:"Х"})]})})}),$),I=()=>{const[o,l]=r.useState(!1),[s,a]=r.useState(!1),p=r.useRef(null),x=r.useCallback(c=>{c.key==="Escape"&&o&&(l(!1),a(!1))},[o]),d=r.useCallback(c=>{p.current&&!p.current.contains(c.target)&&o&&(l(!1),a(!1))},[o]);return r.useEffect(()=>(window.addEventListener("mousedown",d),window.addEventListener("keydown",x),()=>{window.removeEventListener("mousedown",d),window.removeEventListener("keydown",x)}),[d,x]),r.useEffect(()=>{s?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[s]),{isOpenModalNorma:o,popupRef:p,toggleModal:()=>{l(!o),a(!s)}}},F=()=>{const l=2 .toFixed(1)+" L",{isOpenModalNorma:s,toggleModal:a,popupRef:p}=I();return e.jsxs(E,{children:[e.jsxs(R,{children:[e.jsx(S,{children:"My daily norma"}),e.jsxs(P,{children:[e.jsx("p",{children:l}),e.jsx("a",{onClick:a,ref:p,children:"Edit"})]}),s&&e.jsx(k,{children:e.jsx("div",{children:"My daily norma"})})]}),e.jsx(z,{})]})},H=n.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 40px;

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 32px;
  }

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    gap: 23px;
  }
`,T=n.h3`
  font-size: 18px;
  font-weight: 400;
  color: ${t.colors.blue};
  text-align: left;
  line-height: 1;
  width: 100%;
`,Y=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,K=n.div`
  width: 256px;
  margin: 5px 14px;

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    width: 325px;
  }

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    width: 360px;
  }
`,X=n.div`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${t.colors.paleBlue};
`,q=n.span`
  /* width: 50%; */
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${t.colors.skyBlue};
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
    background: ${t.colors.white};
    border: solid 1px ${t.colors.blue};

    margin-top: -3px;
  }
`,G=n.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`,U=n.span`
  transform: translateX(-50%);
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${t.colors.blue};

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    color: ${t.colors.paleBlue};
  }
`,J=n.span`
  transform: translateX(50%);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${t.colors.blue};

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${t.colors.paleBlue};
  }
`,Q=n.span`
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
  color: ${t.colors.blue};
  left: ${o=>o.left};

  transition: all 0.5s ease-out;

  &::before {
    content: '|';
    justify-content: center;
    align-items: center;
    color: ${t.colors.paleBlue};
    font-size: 12px;
  }
`,V=n.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 6px 76px 6px 76px;
  background-color: ${t.colors.blue};
  color: ${t.colors.white};
  border: none;
  /* box-shadow: ${t.boxShadowBtn};  */
  box-shadow: ${t.boxShadowBtn.hoverBtn};
  width: 256px;
  margin-left: 14px;

  svg {
    width: 24px;
    height: 24px;
    fill: ${t.colors.blue};
    stroke: ${t.colors.white};
  }

  &:hover {
    box-shadow: ${t.boxShadowBtn.hoverBtn};
  }

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    max-width: 336px;
    height: 43px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    width: 178px;
    height: 44px;
    padding: 10px 30px 10px 30px;
  }
`,Z=()=>{const[o,l]=r.useState(!1),[s,a]=r.useState(!1),p=r.useRef(null),x=r.useCallback(c=>{c.key==="Escape"&&o&&(l(!1),a(!1))},[o]),d=r.useCallback(c=>{p.current&&!p.current.contains(c.target)&&o&&(l(!1),a(!1))},[o]);return r.useEffect(()=>(window.addEventListener("mousedown",d),window.addEventListener("keydown",x),()=>{window.removeEventListener("mousedown",d),window.removeEventListener("keydown",x)}),[d,x]),r.useEffect(()=>{s?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[s]),{isOpenModalBar:o,popupRef:p,toggleModal:()=>{l(!o),a(!s)}}},ee=()=>{const{isOpenModalBar:o,toggleModal:l,popupRef:s}=Z(),a=88;return e.jsxs(H,{children:[e.jsxs(Y,{children:[e.jsx(T,{children:"Today"}),e.jsxs(K,{children:[e.jsx(X,{children:e.jsx(q,{style:{width:`${Math.min(a,100)}%`}})}),e.jsxs(G,{children:[e.jsx(U,{children:"0%"}),e.jsxs(Q,{left:`${a}%`,children:[a,"%"]}),e.jsx(J,{children:"100%"})]})]})]}),e.jsxs(V,{onClick:l,ref:s,children:[e.jsx("svg",{children:e.jsx("use",{href:`${i}#icon-outline`})}),"Add water"]}),o&&e.jsx(k,{children:e.jsx("div",{children:"Add water"})})]})},te=n.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`,ne=n.div`
  height: 212px;
  overflow: auto;
  margin-bottom: 12px;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${t.colors.paleBlue};
    width: 2px;
    margin: 0 auto;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    width: 6px;
    height: 100px;
    border-radius: 3px;
    background-color: ${t.colors.skyBlue};
  }
`,g=n.div`
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
    background-color: ${t.colors.paleBlue};
  }
`,oe=n.h3`
  font-size: 24px;
  font-weight: 500;
  /* font-family: 'Roboto'; */
  color: ${t.colors.black};
  text-align: left;
  line-height: 1.25;
  margin-bottom: 15px;

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 1.23;
  }
`,f=n.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  h4 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    color: ${t.colors.blue};
  }
  p {
    font-size: 12px;
    line-height: 24px;
    font-weight: 400;
    color: ${t.colors.black};
    span {
      text-transform: uppercase;
    }
    svg {
      width: 26px;
      height: 26px;
    }
  }
`,u=n.svg`
  width: 26px;
  height: 26px;
  fill: transparent;
  @media screen and (min-width: ${t.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,m=n.div`
  display: flex;
  gap: 18px;
  margin-right: 10px;
`,b=n.svg`
  width: 16px;
  height: 16px;
  stroke: ${t.colors.skyBlue};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${t.colors.skyBlue};
  }
`,w=n.svg`
  width: 16px;
  height: 16px;
  stroke: ${t.colors.brightRed};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${t.colors.brightRed};
  }
`,se=n.button`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: transparent;
  color: ${t.colors.blue};
  border: none;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  stroke: ${t.colors.blue};

  & svg {
    width: 16px;
    height: 16px;
    fill: ${t.colors.blue};
    stroke: transparent;
    padding-bottom: 2px;
    &:hover {
      fill: ${t.colors.orange};
    }
  }

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    font-size: 18px;
    line-height: 1.33;
  }

  & svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    color: ${t.colors.orange};
    fill: ${t.colors.orange};
  }
`,ie=()=>{const[o,l]=r.useState(!1),[s,a]=r.useState(!1),p=r.useRef(null),x=r.useCallback(c=>{c.key==="Escape"&&o&&(l(!1),a(!1))},[o]),d=r.useCallback(c=>{p.current&&!p.current.contains(c.target)&&o&&(l(!1),a(!1))},[o]);return r.useEffect(()=>(window.addEventListener("mousedown",d),window.addEventListener("keydown",x),()=>{window.removeEventListener("mousedown",d),window.removeEventListener("keydown",x)}),[d,x]),r.useEffect(()=>{s?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[s]),{isOpenModalDrinkList:o,popupRef:p,toggleModal:()=>{l(!o),a(!s)}}},re=()=>{const{isOpenModalDrinkList:o,toggleModal:l,popupRef:s}=ie();return e.jsxs(e.Fragment,{children:[e.jsxs(te,{children:[e.jsx(oe,{children:"Today"}),e.jsxs(ne,{children:[e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx(u,{children:e.jsx("use",{href:`${i}#icon-glass`})}),e.jsx("h4",{children:"250ml"}),e.jsxs("p",{children:["7:00",e.jsx("span",{children:"AM"})]})]}),e.jsxs(m,{children:[e.jsx(b,{children:e.jsx("use",{href:`${i}#icon-note`})}),e.jsx(w,{children:e.jsx("use",{href:`${i}#icon-trash`})})]})]}),e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx(u,{children:e.jsx("use",{href:`${i}#icon-glass`})}),e.jsx("h4",{children:"250ml"}),e.jsxs("p",{children:["7:00",e.jsx("span",{children:"AM"})]})]}),e.jsxs(m,{children:[e.jsx(b,{children:e.jsx("use",{href:`${i}#icon-note`})}),e.jsx(w,{children:e.jsx("use",{href:`${i}#icon-trash`})})]})]}),e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx(u,{children:e.jsx("use",{href:`${i}#icon-glass`})}),e.jsx("h4",{children:"250ml"}),e.jsxs("p",{children:["7:00",e.jsx("span",{children:"AM"})]})]}),e.jsxs(m,{children:[e.jsx(b,{children:e.jsx("use",{href:`${i}#icon-note`})}),e.jsx(w,{children:e.jsx("use",{href:`${i}#icon-trash`})})]})]}),e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx(u,{children:e.jsx("use",{href:`${i}#icon-glass`})}),e.jsx("h4",{children:"250ml"}),e.jsxs("p",{children:["7:00",e.jsx("span",{children:"AM"})]})]}),e.jsxs(m,{children:[e.jsx(b,{children:e.jsx("use",{href:`${i}#icon-note`})}),e.jsx(w,{children:e.jsx("use",{href:`${i}#icon-trash`})})]})]}),e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx(u,{children:e.jsx("use",{href:`${i}#icon-glass`})}),e.jsx("h4",{children:"250ml"}),e.jsxs("p",{children:["7:00",e.jsx("span",{children:"AM"})]})]}),e.jsxs(m,{children:[e.jsx(b,{children:e.jsx("use",{href:`${i}#icon-note`})}),e.jsx(w,{children:e.jsx("use",{href:`${i}#icon-trash`})})]})]}),e.jsxs(g,{children:[e.jsxs(f,{children:[e.jsx(u,{children:e.jsx("use",{href:`${i}#icon-glass`})}),e.jsx("h4",{children:"250ml"}),e.jsxs("p",{children:["7:00",e.jsx("span",{children:"AM"})]})]}),e.jsxs(m,{children:[e.jsx(b,{children:e.jsx("use",{href:`${i}#icon-note`})}),e.jsx(w,{children:e.jsx("use",{href:`${i}#icon-trash`})})]})]})]}),e.jsxs(se,{onClick:l,ref:s,children:[e.jsx("svg",{children:e.jsx("use",{href:`${i}#icon-increment`})}),"Add water"]})]}),o&&e.jsx(k,{children:e.jsx("div",{children:"Add water of todo(children)"})})]})};const le=n.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    color: ${t.colors.black};
    margin-bottom: 6px;
  }
  @media screen and (min-width: ${t.breakpoint.tablet}) {
    margin-bottom: 24px;
    h3 {
      font-size: 26px;
      line-height: 32px;
    }
  }
`,ae=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,de=n.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 50px);
  justify-content: space-between;
  gap: 16px;
  height: 446px;

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 50px);
    gap: 20px;
    height: 268px;
  }
`,ce=n.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    color: ${t.colors.blue};
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    padding-left: 6px;
    padding-right: 6px;
    width: 126px;
    text-align: center;
  }
`,y=n.svg`
  width: 6px;
  height: 10px;
  background: transparent;
  fill: ${t.colors.blue};

  &:hover {
    fill: ${t.colors.orange};
  }
`;n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.6;
  color: ${({theme:o})=>o.color.secondaryLightBlue};

  @media screen and (min-width: ${({theme:o})=>o.breakpoint.tablet}) {
    font-size: 12px;
  }
`;const pe=()=>{const[o,l]=r.useState(new Date),s=d=>{l(h=>{const c=new Date(h);return c.setMonth(c.getMonth()+d),c})},a=()=>{const h=new Date(o.getFullYear(),o.getMonth()+1,0).getDate(),c=[];for(let j=1;j<=h;j++)c.push(j);return c},p=()=>new Intl.DateTimeFormat("en",{month:"long"}).format(o),x=()=>o.getFullYear();return e.jsx("div",{children:e.jsxs(le,{children:[e.jsxs(ae,{children:[e.jsx("h3",{children:"Month"}),e.jsxs(ce,{children:[e.jsx(y,{onClick:()=>s(-1),children:e.jsx("use",{href:`${i}#icon-left`})}),e.jsxs("span",{children:[p(),", ",x()]}),e.jsx(y,{onClick:()=>s(1),children:e.jsx("use",{href:`${i}#icon-right`})})]})]}),e.jsx(de,{children:a().map(d=>e.jsx("div",{children:d},d))})]})})},xe=n.div`
  display: flex;
  flex-direction: column;
  padding-top: 22px;

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    flex-direction: row;
    gap: 32px;
  }
`,he=n.div`
  display: flex;
  flex-direction: column;
  background-color: ${t.colors.lightBlue};
  padding: 20px 24px;
  border-radius: 10px;
  max-width: 704px;
  box-shadow: ${t.boxShadowBtn.Btn};
  gap: 24px;

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    width: 590px;
  }
`,ge=n.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    max-width: 50%;
  }
`,fe=n.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    padding-left: 132px;
    padding-right: 132px;
  }
`,me=()=>e.jsx(e.Fragment,{children:e.jsx(fe,{children:e.jsxs(xe,{children:[e.jsxs(ge,{children:[e.jsx(F,{}),e.jsx(ee,{})]}),e.jsxs(he,{children:[e.jsx(re,{}),e.jsx(pe,{})]})]})})});export{me as default};
