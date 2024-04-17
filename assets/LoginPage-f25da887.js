import{n as s,t,F as C,E as _,S as f,a as k,r as n,u as z,j as e,b as E,c as R}from"./index-f5a465f2.js";import{i as B,a as T,b as A,c as H,d as I,e as Z,h as V}from"./bottle_home_deskx2-6dad15ed.js";const q="/tracker-of-water-frontend/assets/bottle_sign_in_tablet@1x-bc683e21.png",M="/tracker-of-water-frontend/assets/bottle_sign_in_tablet@2x-2f35ac0a.png",U=s.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  padding: 0px;
  width: 280px;
  margin: 0 auto;
  padding-top: 4px;

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    justify-content: flex-start;
    margin-left: 32px;
    width: 336px;
    height: ${i=>i.formType==="signup"?"396px":"304px"};
  }
  @media screen and (min-width: ${t.breakpoint.desktop}) {
    width: 384px;
    margin-top: 113px;
    flex-direction: column;
    height: 312px;
  }
`,L=s.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 16px;
  width: 280px;

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    width: 336px;
  }
  @media screen and (min-width: ${t.breakpoint.desktop}) {
    width: 384px;
  }
`,l=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  margin-bottom: 16px;
  width: 280px;

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    width: 336px;
  }

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    width: 384px;
  }
`,c=s.label`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  width: 280px;

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    width: 336px;
  }

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    width: 384px;
  }
`,D=s.button`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: center;
  color: ${t.colors.white};
  padding: 10px 30px;
  border-radius: 10px;
  box-shadow: ${t.boxShadowBtn.hoverBtn};
  background-color: ${t.colors.blue};
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 8px 30px;
  width: 280px;

  transition: 0.4s;
  &:hover {
    box-shadow: ${t.boxShadowBtn.hoverBtn};
  }

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    width: 336px;
  }

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    width: 384px;
  }
`,O=s.button`
  margin-top: 16px;
  color: ${t.colors.blue};
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  transition: 0.4s;
  background-color: transparent;
  border: none;
  &:hover {
    color: ${t.colors.orange};
  }
`,x=s(C)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 10px;
  box-sizing: border-box;
  border: 1px solid ${t.colors.paleBlue};
  border-radius: 6px;
  background: ${t.colors.white};
  width: 100%;
  color: ${t.colors.blue};
  position: relative;
  &::placeholder {
    color: ${t.colors.skyBlue};
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
  &:focus {
    outline: none;
  }

  @media screen and(min-width: ${t.breakpoint.tablet}) {
    width: 336px;
  }

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    width: 384px;
  }

  ${i=>i.error&&`
    border-color: ${t.colors.brightRed};
    color: ${t.colors.brightRed};
  `}

  ${i=>i.error&&`
   border-color: ${t.colors.brightRed};
    color: ${t.colors.brightRed};
  `}
`,g=s(_)`
  color: red;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`,G=s.div`
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 120%;

  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 24px;
  gap: 66px;
  @media screen and (min-width: ${t.breakpoint.tablet}) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
    flex-direction: row-reverse;
    gap: 0;
    align-items: flex-start;
    justify-content: start;
    padding: 40px;
  }

  @media screen and (min-width: ${t.breakpoint.desktop}) {
    width: 1440px;
    padding-left: 132px;
    padding-right: 132px;
    flex-direction: row;
    margin: 0 auto;
    justify-content: flex-start;
  }
`,J=s.div`
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-image: url(${B}), url(${T});
  height: 100vh;

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    background-image: url(${A}), url(${H}),
      url(${q}), url(${M});
    background-position: 86%;
    height: 100vh;
    background-size: contain;
  }
  @media screen and (min-width: ${t.breakpoint.desktop}) {
    background-image: url(${I}), url(${Z});
    background-size: 100%;
  }
`,K=s.img`
  height: 210px;

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    /* height: 540px;
    position: relative;
    left: -160px; */
    display: none;

    @media screen and (min-width: ${t.breakpoint.desktop}) {
      /* height: 589px;
      left: 10px;
      margin-right: -350px;
      margin-left: 150px;
      display: flex; */
      height: 589px;
      display: block;
    }
  }
`,N=s(f)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${i=>i.errors?"213px":"187px"};
  height: auto;
  cursor: pointer;
`,Q=s(f)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${i=>i.errors?"326px":"276px"};
  height: auto;
  cursor: pointer;
`,W=s(k)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${i=>i.errors?"213px":"187px"};
  height: auto;
  cursor: pointer;
`,X=s(k)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${i=>i.errors?"326px":"276px"};
  height: auto;
  cursor: pointer;
`,Y=()=>{const[i,$]=n.useState("signin"),[j,h]=n.useState(!1),[a,y]=n.useState(!1),[d,S]=n.useState(!1),{signUp:P,signIn:v}=z(),F=r=>{$(r),h(!1)},m=()=>{y(!a)},w=()=>{S(!d)};return e.jsx(J,{children:e.jsxs(G,{children:[e.jsx(K,{src:V}),e.jsxs(U,{children:[e.jsx(L,{signup:i==="signup",children:i==="signin"?"Sign In":"Sign Up"}),e.jsx(E,{initialValues:{email:"",password:"",repeatPassword:""},validate:r=>{const o={};return j&&(i==="signin"?(r.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(r.email)||(o.email="Some error message"):o.email="Email is required",r.password?r.password.length<8&&(o.password="Password must be at least 8 characters long"):o.password="Password is required"):i==="signup"&&(r.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(r.email)||(o.email="Some error message"):o.email="Email is required",r.password?r.password.length<8&&(o.password="Password must be at least 8 characters long"):o.password="Password is required",r.repeatPassword?r.password!==r.repeatPassword&&(o.repeatPassword="Passwords do not match"):o.repeatPassword="Please repeat your password")),o},onSubmit:(r,{setSubmitting:o,resetForm:p})=>{const{email:b,password:u}=r;i==="signin"?v({email:b,password:u}):P({email:b,password:u}),o(!1),o("values",r),p()},children:({isSubmitting:r,errors:o,resetForm:p})=>e.jsxs(R,{children:[e.jsxs(l,{children:[e.jsx(c,{htmlFor:"email",children:"Enter your email"}),e.jsx(x,{error:o.email,type:"email",id:"email",name:"email",placeholder:"E-mail"}),e.jsx(g,{name:"email",component:"div"})]}),e.jsxs(l,{children:[e.jsx(c,{htmlFor:"password",children:"Enter your password"}),e.jsx(x,{error:o.password,type:a?"text":"password",id:"password",name:"password",placeholder:"Password"}),a?e.jsx(e.Fragment,{children:e.jsx(W,{onClick:m,error:o.password})}):e.jsx(N,{onClick:m,error:o.password}),e.jsx(g,{name:"password",component:"div"})]}),i==="signup"&&e.jsxs(l,{children:[e.jsx(c,{htmlFor:"repeatPassword",children:"Repeat password"}),e.jsx(x,{error:o.repeatPassword,type:d?"text":"password",id:"repeatPassword",name:"repeatPassword",placeholder:"Repeat Password"}),d?e.jsx(e.Fragment,{children:e.jsx(X,{onClick:w,error:o.password})}):e.jsx(Q,{onClick:w,error:o.password}),e.jsx(g,{name:"repeatPassword",component:"div"})]}),e.jsx(D,{type:"submit",disabled:r,onClick:()=>h(!0),children:i==="signin"?"Sign In":"Sign Up"}),e.jsx(O,{type:"button",onClick:()=>{p(),F(i==="signin"?"signup":"signin")},children:i==="signin"?"Sign up":"Sign in"})]})})]})]})})},ie=()=>e.jsx(e.Fragment,{children:e.jsx(Y,{})});export{ie as default};
