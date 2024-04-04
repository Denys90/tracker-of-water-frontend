import{n as c,t as i,r as v,R as re,j as a,s as f}from"./index-f24760cd.js";const ae="/runners_of_code__frontend/assets/bottle_home_mobile@1x-0d6054eb.png",oe="/runners_of_code__frontend/assets/bottle_home_mobile@2x-52eb5066.png",ie="/runners_of_code__frontend/assets/bottle_home_tablet@1x-c4bedac4.png",se="/runners_of_code__frontend/assets/bottle_home_tablet@2x-867eb443.png",ce="/runners_of_code__frontend/assets/bottle_home_desk-f67b46be.png",de="/runners_of_code__frontend/assets/bottle_home_deskx2-acd9b153.png",le=c.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;
`,ue=c.div`
  background-position: center;
  background-image: -webkit-image-set(
    url(${ae}) 1x,
    url(${oe}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;
  z-index: -1;

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${ie}) 1x,
      url(${se}) 2x
    );
    height: 386px;
    margin-top: -114px;
    background-position: center top;
  }

  @media screen and (min-width: ${i.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${ce}) 1x,
      url(${de}) 2x
    );
    width: 592px;
    height: 548px;
  }
`,he=c.h3`
  font-size: 18px;
  line-height: 1.33;
  font-family: 'Roboto-Bold', sans-serif;
  margin-bottom: 12px;
  color: ${i.colors.black};
`,fe=c.div`
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
`,me=c.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`,ge=c.button`
  padding: 0;
  background-color: ${i.colors.white};
  color: ${i.colors.blue};
  border: none;
  font-size: 16px;
  &:hover {
    color: ${i.colors.orange};
  }
`,xe=c.div`
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
`,pe=c.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`,be=c.div`
  position: relative;
  padding: 20px;
  width: 450px;
  height: auto;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: ${i.colors.white};
  backdrop-filter: blur(5px);
  transform: translateY(-50px);
  transition:
    opacity 0.3s,
    transform 0.3s;
`;c.button`
  position: absolute;
  top: 12px;
  right: 12px;
  color: ${i.colors.blue};
  display: block;
  border: none;
  background-color: transparent;
  padding: 0px;
  cursor: pointer;
`;const L=({onClose:e,children:n})=>{const t=document.getElementById("modal-root"),r=v.useRef(),o=d=>{d.target===r.current&&e(),document.body.style.overflow="",document.body.style.position="",d.stopPropagation()},s=d=>{d.key==="Escape"&&(document.body.style.overflow="",document.body.style.position="",e())};return v.useEffect(()=>{const d=u=>s(u);return document.addEventListener("keydown",d),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",d)}},[]),re.createPortal(a.jsx(xe,{onClick:o,ref:r,children:a.jsx(pe,{children:a.jsxs(be,{children:[a.jsx("button",{onClick:e,children:"X"}),n]})})}),t)},we=()=>{const[e,n]=v.useState(!1),t=()=>{n(!e)},o=(2e3/1e3).toFixed(1)+" L";return a.jsxs(le,{children:[a.jsxs(fe,{children:[a.jsx(he,{children:"My daily norma"}),a.jsxs(me,{children:[a.jsx("p",{children:o}),a.jsx(ge,{type:"button",onClick:t,children:"Edit"})]})]}),a.jsx(ue,{}),e&&a.jsx(L,{onClose:t,children:a.jsx("h2",{children:"My daily norma"})})]})},ye=c.div`
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
`,ke=c.h3`
  font-size: 18px;
  font-weight: 400;
  color: ${i.colors.blue};
  text-align: left;
  line-height: 1;
  width: 100%;
`,je=c.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,ve=c.div`
  width: 256px;
  margin: 5px 14px;

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    width: 325px;
  }

  @media screen and (min-width: ${i.breakpoint.desktop}) {
    width: 360px;
  }
`,Me=c.div`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${i.colors.paleBlue};
`,$e=c.span`
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
`,De=c.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`,Pe=c.span`
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
`,Oe=c.span`
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
`,We=c.span`
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
`,Se=c.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 6px 76px 6px 76px;
  background-color: ${i.colors.blue};
  color: ${i.colors.white};
  border: none;
  /* box-shadow: ${i.boxShadowBtn};  */
  box-shadow: ${i.boxShadowBtn.hoverBtn};
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
`,Te=()=>{const[e,n]=v.useState(!1),t=()=>{n(!e)},r=88;return a.jsxs(ye,{children:[a.jsxs(je,{children:[a.jsx(ke,{children:"Today"}),a.jsxs(ve,{children:[a.jsx(Me,{children:a.jsx($e,{style:{width:`${Math.min(r,100)}%`}})}),a.jsxs(De,{children:[a.jsx(Pe,{children:"0%"}),a.jsxs(We,{left:`${r}%`,children:[r,"%"]}),a.jsx(Oe,{children:"100%"})]})]})]}),a.jsxs(Se,{onClick:t,children:[a.jsx("svg",{children:a.jsx("use",{href:`${f}#icon-outline`})}),"Add water"]}),e&&a.jsx(L,{onClose:t,children:a.jsx("h2",{children:"ProgressBar"})})]})},Ye=c.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`,_e=c.div`
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
`,$=c.div`
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
`,Ce=c.h3`
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
`,D=c.div`
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
`,P=c.svg`
  width: 26px;
  height: 26px;
  fill: transparent;
  @media screen and (min-width: ${i.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`,O=c.div`
  display: flex;
  gap: 18px;
  margin-right: 10px;
`,W=c.svg`
  width: 16px;
  height: 16px;
  stroke: ${i.colors.skyBlue};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${i.colors.skyBlue};
  }
`,S=c.svg`
  width: 16px;
  height: 16px;
  stroke: ${i.colors.brightRed};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${i.colors.brightRed};
  }
`,Be=c.button`
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

  & svg {
    width: 16px;
    height: 16px;
    fill: ${i.colors.blue};
    stroke: transparent;
    padding-bottom: 2px;
    &:hover {
      fill: ${i.colors.orange};
    }
  }

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    font-size: 18px;
    line-height: 1.33;
  }

  & svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    color: ${i.colors.orange};
    fill: ${i.colors.orange};
  }
`,Ee=()=>{const[e,n]=v.useState(!1),t=()=>{n(!e)};return a.jsxs(a.Fragment,{children:[a.jsxs(Ye,{children:[a.jsx(Ce,{children:"Today"}),a.jsxs(_e,{children:[a.jsxs($,{children:[a.jsxs(D,{children:[a.jsx(P,{children:a.jsx("use",{href:`${f}#icon-glass`})}),a.jsx("h4",{children:"250ml"}),a.jsxs("p",{children:["7:00",a.jsx("span",{children:"AM"})]})]}),a.jsxs(O,{children:[a.jsx(W,{children:a.jsx("use",{href:`${f}#icon-note`})}),a.jsx(S,{children:a.jsx("use",{href:`${f}#icon-trash`})})]})]}),a.jsxs($,{children:[a.jsxs(D,{children:[a.jsx(P,{children:a.jsx("use",{href:`${f}#icon-glass`})}),a.jsx("h4",{children:"250ml"}),a.jsxs("p",{children:["7:00",a.jsx("span",{children:"AM"})]})]}),a.jsxs(O,{children:[a.jsx(W,{children:a.jsx("use",{href:`${f}#icon-note`})}),a.jsx(S,{children:a.jsx("use",{href:`${f}#icon-trash`})})]})]}),a.jsxs($,{children:[a.jsxs(D,{children:[a.jsx(P,{children:a.jsx("use",{href:`${f}#icon-glass`})}),a.jsx("h4",{children:"250ml"}),a.jsxs("p",{children:["7:00",a.jsx("span",{children:"AM"})]})]}),a.jsxs(O,{children:[a.jsx(W,{children:a.jsx("use",{href:`${f}#icon-note`})}),a.jsx(S,{children:a.jsx("use",{href:`${f}#icon-trash`})})]})]}),a.jsxs($,{children:[a.jsxs(D,{children:[a.jsx(P,{children:a.jsx("use",{href:`${f}#icon-glass`})}),a.jsx("h4",{children:"250ml"}),a.jsxs("p",{children:["7:00",a.jsx("span",{children:"AM"})]})]}),a.jsxs(O,{children:[a.jsx(W,{children:a.jsx("use",{href:`${f}#icon-note`})}),a.jsx(S,{children:a.jsx("use",{href:`${f}#icon-trash`})})]})]}),a.jsxs($,{children:[a.jsxs(D,{children:[a.jsx(P,{children:a.jsx("use",{href:`${f}#icon-glass`})}),a.jsx("h4",{children:"250ml"}),a.jsxs("p",{children:["7:00",a.jsx("span",{children:"AM"})]})]}),a.jsxs(O,{children:[a.jsx(W,{children:a.jsx("use",{href:`${f}#icon-note`})}),a.jsx(S,{children:a.jsx("use",{href:`${f}#icon-trash`})})]})]}),a.jsxs($,{children:[a.jsxs(D,{children:[a.jsx(P,{children:a.jsx("use",{href:`${f}#icon-glass`})}),a.jsx("h4",{children:"250ml"}),a.jsxs("p",{children:["7:00",a.jsx("span",{children:"AM"})]})]}),a.jsxs(O,{children:[a.jsx(W,{children:a.jsx("use",{href:`${f}#icon-note`})}),a.jsx(S,{children:a.jsx("use",{href:`${f}#icon-trash`})})]})]})]}),a.jsxs(Be,{onClick:t,children:[a.jsx("svg",{children:a.jsx("use",{href:`${f}#icon-increment`})}),"Add water"]})]}),e&&a.jsx(L,{onClose:t,children:a.jsx("h2",{children:"Drink list"})})]})};const Fe=c.div`
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
`,Ne=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,qe=c.div`
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
`,X=c.svg`
  width: 6px;
  height: 10px;
  background: transparent;
  fill: ${i.colors.blue};

  &:hover {
    fill: ${i.colors.orange};
  }
`,Le=c.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 50px);
  justify-content: space-between;
  gap: 16px;
  height: 446px;

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 50px);
    gap: 20px;
    height: 268px;
  }
`,He=c.button`
  padding: 7px 6px;
  width: 35px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: ${i.colors.black};

  background-color: ${i.colors.white};
  border: 1px solid ${i.colors.blue};

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    font-size: 16px;
    padding: 7px;
  }

  &:hover {
    box-shadow: 0px 4px 8px ${i.colors.skyBlue};
    border: 1px solid ${i.colors.orange};
  }
`,Re=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.6;
  color: ${i.colors.skyBlue};

  @media screen and (min-width: ${i.breakpoint.tablet}) {
    font-size: 12px;
  }
`;function w(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}function M(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}const Z=6048e5,Ae=864e5;let ze={};function F(){return ze}function B(e,n){var u,g,h,m;const t=F(),r=(n==null?void 0:n.weekStartsOn)??((g=(u=n==null?void 0:n.locale)==null?void 0:u.options)==null?void 0:g.weekStartsOn)??t.weekStartsOn??((m=(h=t.locale)==null?void 0:h.options)==null?void 0:m.weekStartsOn)??0,o=w(e),s=o.getDay(),d=(s<r?7:0)+s-r;return o.setDate(o.getDate()-d),o.setHours(0,0,0,0),o}function E(e){return B(e,{weekStartsOn:1})}function ee(e){const n=w(e),t=n.getFullYear(),r=M(e,0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const o=E(r),s=M(e,0);s.setFullYear(t,0,4),s.setHours(0,0,0,0);const d=E(s);return n.getTime()>=o.getTime()?t+1:n.getTime()>=d.getTime()?t:t-1}function Q(e){const n=w(e);return n.setHours(0,0,0,0),n}function G(e){const n=w(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function Xe(e,n){const t=Q(e),r=Q(n),o=+t-G(t),s=+r-G(r);return Math.round((o-s)/Ae)}function Qe(e){const n=ee(e),t=M(e,0);return t.setFullYear(n,0,4),t.setHours(0,0,0,0),E(t)}function Ge(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Ie(e){if(!Ge(e)&&typeof e!="number")return!1;const n=w(e);return!isNaN(Number(n))}function Ve(e){const n=w(e),t=M(e,0);return t.setFullYear(n.getFullYear(),0,1),t.setHours(0,0,0,0),t}const Je={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ue=(e,n,t)=>{let r;const o=Je[e];return typeof o=="string"?r=o:n===1?r=o.one:r=o.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function q(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const Ke={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ze={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},et={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},tt={date:q({formats:Ke,defaultWidth:"full"}),time:q({formats:Ze,defaultWidth:"full"}),dateTime:q({formats:et,defaultWidth:"full"})},nt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},rt=(e,n,t,r)=>nt[e];function _(e){return(n,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,u=t!=null&&t.width?String(t.width):d;o=e.formattingValues[u]||e.formattingValues[d]}else{const d=e.defaultWidth,u=t!=null&&t.width?String(t.width):e.defaultWidth;o=e.values[u]||e.values[d]}const s=e.argumentCallback?e.argumentCallback(n):n;return o[s]}}const at={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ot={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},it={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},st={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ct={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},dt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},lt=(e,n)=>{const t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},ut={ordinalNumber:lt,era:_({values:at,defaultWidth:"wide"}),quarter:_({values:ot,defaultWidth:"wide",argumentCallback:e=>e-1}),month:_({values:it,defaultWidth:"wide"}),day:_({values:st,defaultWidth:"wide"}),dayPeriod:_({values:ct,defaultWidth:"wide",formattingValues:dt,defaultFormattingWidth:"wide"})};function C(e){return(n,t={})=>{const r=t.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=n.match(o);if(!s)return null;const d=s[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],g=Array.isArray(u)?ft(u,x=>x.test(d)):ht(u,x=>x.test(d));let h;h=e.valueCallback?e.valueCallback(g):g,h=t.valueCallback?t.valueCallback(h):h;const m=n.slice(d.length);return{value:h,rest:m}}}function ht(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function ft(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function mt(e){return(n,t={})=>{const r=n.match(e.matchPattern);if(!r)return null;const o=r[0],s=n.match(e.parsePattern);if(!s)return null;let d=e.valueCallback?e.valueCallback(s[0]):s[0];d=t.valueCallback?t.valueCallback(d):d;const u=n.slice(o.length);return{value:d,rest:u}}}const gt=/^(\d+)(th|st|nd|rd)?/i,xt=/\d+/i,pt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},bt={any:[/^b/i,/^(a|c)/i]},wt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},yt={any:[/1/i,/2/i,/3/i,/4/i]},kt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},jt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},vt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Mt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},$t={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Dt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Pt={ordinalNumber:mt({matchPattern:gt,parsePattern:xt,valueCallback:e=>parseInt(e,10)}),era:C({matchPatterns:pt,defaultMatchWidth:"wide",parsePatterns:bt,defaultParseWidth:"any"}),quarter:C({matchPatterns:wt,defaultMatchWidth:"wide",parsePatterns:yt,defaultParseWidth:"any",valueCallback:e=>e+1}),month:C({matchPatterns:kt,defaultMatchWidth:"wide",parsePatterns:jt,defaultParseWidth:"any"}),day:C({matchPatterns:vt,defaultMatchWidth:"wide",parsePatterns:Mt,defaultParseWidth:"any"}),dayPeriod:C({matchPatterns:$t,defaultMatchWidth:"any",parsePatterns:Dt,defaultParseWidth:"any"})},Ot={code:"en-US",formatDistance:Ue,formatLong:tt,formatRelative:rt,localize:ut,match:Pt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Wt(e){const n=w(e);return Xe(n,Ve(n))+1}function St(e){const n=w(e),t=+E(n)-+Qe(n);return Math.round(t/Z)+1}function te(e,n){var m,x,y,Y;const t=w(e),r=t.getFullYear(),o=F(),s=(n==null?void 0:n.firstWeekContainsDate)??((x=(m=n==null?void 0:n.locale)==null?void 0:m.options)==null?void 0:x.firstWeekContainsDate)??o.firstWeekContainsDate??((Y=(y=o.locale)==null?void 0:y.options)==null?void 0:Y.firstWeekContainsDate)??1,d=M(e,0);d.setFullYear(r+1,0,s),d.setHours(0,0,0,0);const u=B(d,n),g=M(e,0);g.setFullYear(r,0,s),g.setHours(0,0,0,0);const h=B(g,n);return t.getTime()>=u.getTime()?r+1:t.getTime()>=h.getTime()?r:r-1}function Tt(e,n){var u,g,h,m;const t=F(),r=(n==null?void 0:n.firstWeekContainsDate)??((g=(u=n==null?void 0:n.locale)==null?void 0:u.options)==null?void 0:g.firstWeekContainsDate)??t.firstWeekContainsDate??((m=(h=t.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??1,o=te(e,n),s=M(e,0);return s.setFullYear(o,0,r),s.setHours(0,0,0,0),B(s,n)}function Yt(e,n){const t=w(e),r=+B(t,n)-+Tt(t,n);return Math.round(r/Z)+1}function l(e,n){const t=e<0?"-":"",r=Math.abs(e).toString().padStart(n,"0");return t+r}const k={y(e,n){const t=e.getFullYear(),r=t>0?t:1-t;return l(n==="yy"?r%100:r,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):l(t+1,2)},d(e,n){return l(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return l(e.getHours()%12||12,n.length)},H(e,n){return l(e.getHours(),n.length)},m(e,n){return l(e.getMinutes(),n.length)},s(e,n){return l(e.getSeconds(),n.length)},S(e,n){const t=n.length,r=e.getMilliseconds(),o=Math.trunc(r*Math.pow(10,t-3));return l(o,n.length)}},T={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},I={G:function(e,n,t){const r=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const r=e.getFullYear(),o=r>0?r:1-r;return t.ordinalNumber(o,{unit:"year"})}return k.y(e,n)},Y:function(e,n,t,r){const o=te(e,r),s=o>0?o:1-o;if(n==="YY"){const d=s%100;return l(d,2)}return n==="Yo"?t.ordinalNumber(s,{unit:"year"}):l(s,n.length)},R:function(e,n){const t=ee(e);return l(t,n.length)},u:function(e,n){const t=e.getFullYear();return l(t,n.length)},Q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return l(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return l(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,n,t){const r=e.getMonth();switch(n){case"M":case"MM":return k.M(e,n);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(e,n,t){const r=e.getMonth();switch(n){case"L":return String(r+1);case"LL":return l(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,t,r){const o=Yt(e,r);return n==="wo"?t.ordinalNumber(o,{unit:"week"}):l(o,n.length)},I:function(e,n,t){const r=St(e);return n==="Io"?t.ordinalNumber(r,{unit:"week"}):l(r,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):k.d(e,n)},D:function(e,n,t){const r=Wt(e);return n==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):l(r,n.length)},E:function(e,n,t){const r=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(e,n,t,r){const o=e.getDay(),s=(o-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(s);case"ee":return l(s,2);case"eo":return t.ordinalNumber(s,{unit:"day"});case"eee":return t.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(o,{width:"short",context:"formatting"});case"eeee":default:return t.day(o,{width:"wide",context:"formatting"})}},c:function(e,n,t,r){const o=e.getDay(),s=(o-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(s);case"cc":return l(s,n.length);case"co":return t.ordinalNumber(s,{unit:"day"});case"ccc":return t.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(o,{width:"narrow",context:"standalone"});case"cccccc":return t.day(o,{width:"short",context:"standalone"});case"cccc":default:return t.day(o,{width:"wide",context:"standalone"})}},i:function(e,n,t){const r=e.getDay(),o=r===0?7:r;switch(n){case"i":return String(o);case"ii":return l(o,n.length);case"io":return t.ordinalNumber(o,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(e,n,t){const o=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,n,t){const r=e.getHours();let o;switch(r===12?o=T.noon:r===0?o=T.midnight:o=r/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,n,t){const r=e.getHours();let o;switch(r>=17?o=T.evening:r>=12?o=T.afternoon:r>=4?o=T.morning:o=T.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let r=e.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return k.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):k.H(e,n)},K:function(e,n,t){const r=e.getHours()%12;return n==="Ko"?t.ordinalNumber(r,{unit:"hour"}):l(r,n.length)},k:function(e,n,t){let r=e.getHours();return r===0&&(r=24),n==="ko"?t.ordinalNumber(r,{unit:"hour"}):l(r,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):k.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):k.s(e,n)},S:function(e,n){return k.S(e,n)},X:function(e,n,t){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(n){case"X":return J(r);case"XXXX":case"XX":return j(r);case"XXXXX":case"XXX":default:return j(r,":")}},x:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"x":return J(r);case"xxxx":case"xx":return j(r);case"xxxxx":case"xxx":default:return j(r,":")}},O:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+V(r,":");case"OOOO":default:return"GMT"+j(r,":")}},z:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+V(r,":");case"zzzz":default:return"GMT"+j(r,":")}},t:function(e,n,t){const r=Math.trunc(e.getTime()/1e3);return l(r,n.length)},T:function(e,n,t){const r=e.getTime();return l(r,n.length)}};function V(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),o=Math.trunc(r/60),s=r%60;return s===0?t+String(o):t+String(o)+n+l(s,2)}function J(e,n){return e%60===0?(e>0?"-":"+")+l(Math.abs(e)/60,2):j(e,n)}function j(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),o=l(Math.trunc(r/60),2),s=l(r%60,2);return t+o+n+s}const U=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},ne=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},_t=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],r=t[1],o=t[2];if(!o)return U(e,n);let s;switch(r){case"P":s=n.dateTime({width:"short"});break;case"PP":s=n.dateTime({width:"medium"});break;case"PPP":s=n.dateTime({width:"long"});break;case"PPPP":default:s=n.dateTime({width:"full"});break}return s.replace("{{date}}",U(r,n)).replace("{{time}}",ne(o,n))},Ct={p:ne,P:_t},Bt=/^D+$/,Et=/^Y+$/,Ft=["D","DD","YY","YYYY"];function Nt(e){return Bt.test(e)}function qt(e){return Et.test(e)}function Lt(e,n,t){const r=Ht(e,n,t);if(console.warn(r),Ft.includes(e))throw new RangeError(r)}function Ht(e,n,t){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Rt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,At=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,zt=/^'([^]*?)'?$/,Xt=/''/g,Qt=/[a-zA-Z]/;function K(e,n,t){var m,x,y,Y,H,R,A,z;const r=F(),o=(t==null?void 0:t.locale)??r.locale??Ot,s=(t==null?void 0:t.firstWeekContainsDate)??((x=(m=t==null?void 0:t.locale)==null?void 0:m.options)==null?void 0:x.firstWeekContainsDate)??r.firstWeekContainsDate??((Y=(y=r.locale)==null?void 0:y.options)==null?void 0:Y.firstWeekContainsDate)??1,d=(t==null?void 0:t.weekStartsOn)??((R=(H=t==null?void 0:t.locale)==null?void 0:H.options)==null?void 0:R.weekStartsOn)??r.weekStartsOn??((z=(A=r.locale)==null?void 0:A.options)==null?void 0:z.weekStartsOn)??0,u=w(e);if(!Ie(u))throw new RangeError("Invalid time value");let g=n.match(At).map(b=>{const p=b[0];if(p==="p"||p==="P"){const N=Ct[p];return N(b,o.formatLong)}return b}).join("").match(Rt).map(b=>{if(b==="''")return{isToken:!1,value:"'"};const p=b[0];if(p==="'")return{isToken:!1,value:Gt(b)};if(I[p])return{isToken:!0,value:b};if(p.match(Qt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+p+"`");return{isToken:!1,value:b}});o.localize.preprocessor&&(g=o.localize.preprocessor(u,g));const h={firstWeekContainsDate:s,weekStartsOn:d,locale:o};return g.map(b=>{if(!b.isToken)return b.value;const p=b.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&qt(p)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&Nt(p))&&Lt(p,n,String(e));const N=I[p[0]];return N(u,p,o.localize,h)}).join("")}function Gt(e){const n=e.match(zt);return n?n[1].replace(Xt,"'"):e}const It=()=>{const[e,n]=v.useState(new Date),[t,r]=v.useState(new Date),o=h=>{n(m=>{const x=new Date(m);return x.setMonth(x.getMonth()+h),x})},s=()=>{const m=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),x=[];for(let y=1;y<=m;y++)x.push(y);return x},d=()=>new Intl.DateTimeFormat("en",{month:"long"}).format(e),u=()=>e.getFullYear(),g=h=>{const m=new Date(e.getFullYear(),e.getMonth(),h);m<=new Date?(r(m),console.log(K(m,"dd.MM.yyyy"))):console.log("Выберите день не позже сегодняшней даты")};return a.jsxs("div",{children:[a.jsxs(Fe,{children:[a.jsxs(Ne,{children:[a.jsx("h3",{children:"Month"}),a.jsxs(qe,{children:[a.jsx(X,{onClick:()=>o(-1),children:a.jsx("use",{href:`${f}#icon-left`})}),a.jsxs("span",{children:[d(),", ",u()]}),a.jsx(X,{onClick:()=>o(1),children:a.jsx("use",{href:`${f}#icon-right`})})]})]}),a.jsx(Le,{children:s().map(h=>a.jsxs("div",{children:[a.jsx(He,{onClick:()=>g(h),children:h}),a.jsx(Re,{children:"0%"})]},h))})]}),t!==null&&a.jsxs("p",{children:["Selected day: ",K(t,"dd.MM.yyyy")]})]})},Vt=c.div`
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
`,Jt=c.div`
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
`,Ut=c.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${i.breakpoint.desktop}) {
    max-width: 50%;
  }
`,Kt=c.div`
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
`,en=()=>a.jsx(a.Fragment,{children:a.jsx(Kt,{children:a.jsxs(Vt,{children:[a.jsxs(Ut,{children:[a.jsx(we,{}),a.jsx(Te,{})]}),a.jsxs(Jt,{children:[a.jsx(Ee,{}),a.jsx(It,{})]})]})})});export{en as default};
