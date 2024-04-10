import{n as e,t as o,K as r,j as t}from"./index-488c1d3e.js";const s=e.div`
  position: relative;
  background-color: ${o.colors.blue};
  background-image: url(${r});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`,i=e.h1`
  position: absolute;
  top: 320px;
  font-size: 111px;
  margin: 0;
  color: ${o.colors.blue};

  text-shadow:
    0 0 5px ${o.colors.white},
    0 0 10px ${o.colors.white},
    0 0 20px ${o.colors.white},
    0 0 40px ${o.colors.white},
    0 0 80px ${o.colors.white};
`,n=e.h2`
  font-size: 42px;
  margin: 0;
  color: ${o.colors.blue};
  text-shadow:
    0 0 5px ${o.colors.white},
    0 0 10px ${o.colors.white},
    0 0 20px ${o.colors.white},
    0 0 40px ${o.colors.white},
    0 0 80px ${o.colors.white};
`,l=e.img`
  position: absolute;
  top: 249px;
  filter: drop-shadow(5px 5px 10px #ffffff);
`,c="/runners_of_code__frontend/assets/water-87d9a5e7.png",x=()=>t.jsxs(s,{children:[t.jsx(l,{src:c,alt:"water",width:"100"}),t.jsx(i,{children:"404"}),t.jsx(n,{children:"Page not found"})]});export{x as default};
