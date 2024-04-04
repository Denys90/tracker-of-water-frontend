import{n,t,r as u,R as y,j as e,s as i}from"./index-a976a252.js";const v="/runners_of_code__frontend/assets/bottle_home_mobile@1x-0d6054eb.png",_="/runners_of_code__frontend/assets/bottle_home_mobile@2x-52eb5066.png",B="/runners_of_code__frontend/assets/bottle_home_tablet@1x-c4bedac4.png",M="/runners_of_code__frontend/assets/bottle_home_tablet@2x-867eb443.png",D="/runners_of_code__frontend/assets/bottle_home_desk-f67b46be.png",z="/runners_of_code__frontend/assets/bottle_home_deskx2-acd9b153.png",C=n.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;
`,P=n.div`
  background-position: center;
  background-image: -webkit-image-set(
    url(${v}) 1x,
    url(${_}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${B}) 1x,
      url(${M}) 2x
    );
    height: 386px;
    margin-top: -114px;
    background-position: center top;
  }

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${D}) 1x,
      url(${z}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,L=n.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;

  margin-bottom: 16px;

  color: ${t.colors.black};
  text-align: center;
`,A=n.div`
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
`,W=n.div`
  display: flex;
  gap: 12px;
  margin: 0 auto;
`,O=n.div`
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
`,R=n.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`,S=n.div`
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
`;n.button`
  position: absolute;
  top: 12px;
  right: 12px;
  color: ${t.colors.blue};
  display: block;
  border: none;
  background-color: transparent;
  padding: 0px;
  cursor: pointer;
`;const k=({onClose:o,children:l})=>{const s=document.getElementById("modal-root"),a=u.useRef(),f=r=>{r.target===a.current&&o(),document.body.style.overflow="",document.body.style.position="",r.stopPropagation()},j=r=>{r.key==="Escape"&&(document.body.style.overflow="",document.body.style.position="",o())};return u.useEffect(()=>{const r=b=>j(b);return document.addEventListener("keydown",r),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",r)}},[]),y.createPortal(e.jsx(O,{onClick:f,ref:a,children:e.jsx(R,{children:e.jsxs(S,{children:[e.jsx("button",{onClick:o,children:"X"}),l]})})}),s)},E=()=>{const[o,l]=u.useState(!1),s=()=>{l(!o)},f=(2e3/1e3).toFixed(1)+" L";return e.jsxs(C,{children:[e.jsxs(A,{children:[e.jsx(L,{children:"My daily norma"}),e.jsxs(W,{children:[e.jsx("p",{children:f}),e.jsx("button",{type:"button",onClick:s,children:"Edit"})]})]}),e.jsx(P,{}),o&&e.jsx(k,{onClose:s,children:e.jsx("h2",{children:"My daily norma"})})]})},F=n.div`
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
`,H=n.h3`
  font-size: 18px;
  font-weight: 400;
  color: ${t.colors.blue};
  text-align: left;
  line-height: 1;
  width: 100%;
`,I=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,N=n.div`
  width: 256px;
  margin: 5px 14px;

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    width: 325px;
  }

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    width: 360px;
  }
`,T=n.div`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${t.colors.paleBlue};
`,X=n.span`
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
`,Y=n.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`,G=n.span`
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
`,K=n.span`
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
`,U=n.span`
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
`,q=n.button`
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
`,J=()=>{const[o,l]=u.useState(!1),s=()=>{l(!o)},a=88;return e.jsxs(F,{children:[e.jsxs(I,{children:[e.jsx(H,{children:"Today"}),e.jsxs(N,{children:[e.jsx(T,{children:e.jsx(X,{style:{width:`${Math.min(a,100)}%`}})}),e.jsxs(Y,{children:[e.jsx(G,{children:"0%"}),e.jsxs(U,{left:`${a}%`,children:[a,"%"]}),e.jsx(K,{children:"100%"})]})]})]}),e.jsxs(q,{onClick:s,children:[e.jsx("svg",{children:e.jsx("use",{href:`${i}#icon-outline`})}),"Add water"]}),o&&e.jsx(k,{onClose:s,children:e.jsx("h2",{children:"ProgressBar"})})]})},Q=n.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`,V=n.div`
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
`,c=n.div`
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
`,Z=n.h3`
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
`,p=n.div`
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
`,x=n.svg`
  width: 26px;
  height: 26px;
  fill: transparent;
  @media screen and (min-width: ${t.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,h=n.div`
  display: flex;
  gap: 18px;
  margin-right: 10px;
`,g=n.svg`
  width: 16px;
  height: 16px;
  stroke: ${t.colors.skyBlue};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${t.colors.skyBlue};
  }
`,m=n.svg`
  width: 16px;
  height: 16px;
  stroke: ${t.colors.brightRed};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${t.colors.brightRed};
  }
`,ee=n.button`
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
`,te=()=>{const[o,l]=u.useState(!1),s=()=>{l(!o)};return e.jsxs(e.Fragment,{children:[e.jsxs(Q,{children:[e.jsx(Z,{children:"Today"}),e.jsxs(V,{children:[e.jsxs(c,{children:[e.jsxs(p,{children:[e.jsx(x,{children:e.jsx("use",{href:`${i}#icon-glass`})}),e.jsx("h4",{children:"250ml"}),e.jsxs("p",{children:["7:00",e.jsx("span",{children:"AM"})]})]}),e.jsxs(h,{children:[e.jsx(g,{children:e.jsx("use",{href:`${i}#icon-note`})}),e.jsx(m,{children:e.jsx("use",{href:`${i}#icon-trash`})})]})]}),e.jsxs(c,{children:[e.jsxs(p,{children:[e.jsx(x,{children:e.jsx("use",{href:`${i}#icon-glass`})}),e.jsx("h4",{children:"250ml"}),e.jsxs("p",{children:["7:00",e.jsx("span",{children:"AM"})]})]}),e.jsxs(h,{children:[e.jsx(g,{children:e.jsx("use",{href:`${i}#icon-note`})}),e.jsx(m,{children:e.jsx("use",{href:`${i}#icon-trash`})})]})]}),e.jsxs(c,{children:[e.jsxs(p,{children:[e.jsx(x,{children:e.jsx("use",{href:`${i}#icon-glass`})}),e.jsx("h4",{children:"250ml"}),e.jsxs("p",{children:["7:00",e.jsx("span",{children:"AM"})]})]}),e.jsxs(h,{children:[e.jsx(g,{children:e.jsx("use",{href:`${i}#icon-note`})}),e.jsx(m,{children:e.jsx("use",{href:`${i}#icon-trash`})})]})]}),e.jsxs(c,{children:[e.jsxs(p,{children:[e.jsx(x,{children:e.jsx("use",{href:`${i}#icon-glass`})}),e.jsx("h4",{children:"250ml"}),e.jsxs("p",{children:["7:00",e.jsx("span",{children:"AM"})]})]}),e.jsxs(h,{children:[e.jsx(g,{children:e.jsx("use",{href:`${i}#icon-note`})}),e.jsx(m,{children:e.jsx("use",{href:`${i}#icon-trash`})})]})]}),e.jsxs(c,{children:[e.jsxs(p,{children:[e.jsx(x,{children:e.jsx("use",{href:`${i}#icon-glass`})}),e.jsx("h4",{children:"250ml"}),e.jsxs("p",{children:["7:00",e.jsx("span",{children:"AM"})]})]}),e.jsxs(h,{children:[e.jsx(g,{children:e.jsx("use",{href:`${i}#icon-note`})}),e.jsx(m,{children:e.jsx("use",{href:`${i}#icon-trash`})})]})]}),e.jsxs(c,{children:[e.jsxs(p,{children:[e.jsx(x,{children:e.jsx("use",{href:`${i}#icon-glass`})}),e.jsx("h4",{children:"250ml"}),e.jsxs("p",{children:["7:00",e.jsx("span",{children:"AM"})]})]}),e.jsxs(h,{children:[e.jsx(g,{children:e.jsx("use",{href:`${i}#icon-note`})}),e.jsx(m,{children:e.jsx("use",{href:`${i}#icon-trash`})})]})]})]}),e.jsxs(ee,{onClick:s,children:[e.jsx("svg",{children:e.jsx("use",{href:`${i}#icon-increment`})}),"Add water"]})]}),o&&e.jsx(k,{onClose:s,children:e.jsx("h2",{children:"Drink list"})})]})};const ne=n.div`
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
`,oe=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,ie=n.div`
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
`,re=n.div`
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
`,$=n.svg`
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
`;const se=()=>{const[o,l]=u.useState(new Date),s=r=>{l(b=>{const d=new Date(b);return d.setMonth(d.getMonth()+r),d})},a=()=>{const b=new Date(o.getFullYear(),o.getMonth()+1,0).getDate(),d=[];for(let w=1;w<=b;w++)d.push(w);return d},f=()=>new Intl.DateTimeFormat("en",{month:"long"}).format(o),j=()=>o.getFullYear();return e.jsx("div",{children:e.jsxs(ne,{children:[e.jsxs(oe,{children:[e.jsx("h3",{children:"Month"}),e.jsxs(re,{children:[e.jsx($,{onClick:()=>s(-1),children:e.jsx("use",{href:`${i}#icon-left`})}),e.jsxs("span",{children:[f(),", ",j()]}),e.jsx($,{onClick:()=>s(1),children:e.jsx("use",{href:`${i}#icon-right`})})]})]}),e.jsx(ie,{children:a().map(r=>e.jsx("div",{children:r},r))})]})})},le=n.div`
  display: flex;
  flex-direction: column;
  padding-top: 22px;

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    flex-direction: row;
    gap: 32px;
  }
`,ae=n.div`
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
`,de=n.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    max-width: 50%;
  }
`,ce=n.div`
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
`,xe=()=>e.jsx(e.Fragment,{children:e.jsx(ce,{children:e.jsxs(le,{children:[e.jsxs(de,{children:[e.jsx(E,{}),e.jsx(J,{})]}),e.jsxs(ae,{children:[e.jsx(te,{}),e.jsx(se,{})]})]})})});export{xe as default};
