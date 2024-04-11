import{n as s,t as e,F as C,E as z,S as f,a as k,r as n,u as E,j as i,b as R,c as _}from"./index-bbc8b985.js";import{i as B,a as T,b as A,c as I,d as H,e as Z}from"./bubbleDesk@2x-afc6d3c1.js";const V=s.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  padding: 0px;
  width: 280px;

  @media screen and (min-width: ${e.breakpoint.tablet}) {
    width: 336px;
    height: ${t=>t.signup?"404px":"312px"};
    margin-top: 40px;
  }
  @media screen and (min-width: ${e.breakpoint.desktop}) {
    margin-right: 50px;
    width: 384px;
    top: 550px;
    flex-direction: column;
  }
`,q=s.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 16px;
  width: 280px;

  @media screen and (min-width: ${e.breakpoint.tablet}) {
    width: 336px;
  }
  @media screen and (min-width: ${e.breakpoint.desktop}) {
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

  @media screen and (min-width: ${e.breakpoint.tablet}) {
    width: 336px;
  }

  @media screen and (min-width: ${e.breakpoint.desktop}) {
    width: 384px;
  }
`,c=s.label`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  width: 280px;

  @media screen and (min-width: ${e.breakpoint.tablet}) {
    width: 336px;
  }

  @media screen and (min-width: ${e.breakpoint.desktop}) {
    width: 384px;
  }
`,M=s.button`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: center;
  color: ${e.colors.white};
  padding: 10px 30px;
  border-radius: 10px;
  box-shadow: ${e.boxShadowBtn.hoverBtn};
  background-color: ${e.colors.blue};
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 8px 30px;
  width: 280px;

  transition: 0.4s;
  &:hover {
    box-shadow: ${e.boxShadowBtn.hoverBtn};
  }

  @media screen and (min-width: ${e.breakpoint.tablet}) {
    width: 336px;
  }

  @media screen and (min-width: ${e.breakpoint.desktop}) {
    width: 384px;
  }
`,U=s.button`
  margin-top: 16px;
  color: ${e.colors.blue};
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  transition: 0.4s;
  background-color: transparent;
  border: none;
  &:hover {
    color: ${e.colors.orange};
  }
`,m=s(C)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 10px;
  box-sizing: border-box;
  border: 1px solid ${e.colors.paleBlue};
  border-radius: 6px;
  background: ${e.colors.white};
  width: 280px;
  color: ${e.colors.blue};
  position: relative;
  &::placeholder {
    color: ${e.colors.skyBlue};
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
  &:focus {
    outline: none;
  }

  @media screen and (min-width: ${e.breakpoint.tablet}) {
    width: 336px;
  }

  @media screen and (min-width: ${e.breakpoint.desktop}) {
    width: 384px;
  }

  ${t=>t.error&&`
    border-color: ${e.colors.brightRed};
    color: ${e.colors.brightRed};
  `}

  ${t=>t.error&&`
    border-color: ${e.colors.brightRed};
    color: ${e.colors.brightRed};
  `}
`,x=s(z)`
  color: red;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`,L=s.div`
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 120%;
  background-image: url(${B}), url(${T});
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 0 auto; */

  @media screen and (min-width: ${e.breakpoint.tablet}) {
    background-image: url(${A}), url(${I});
    /* min-height: 100vh; */
    /* height: 350px; */
  }
  @media screen and (min-width: ${e.breakpoint.desktop}) {
    background-image: url(${H}), url(${Z});
    /* min-height: 100vh; */
    height: 470px;
    background-size: cover;
  }

  @media screen and (min-width: ${e.breakpoint.tablet}) {
    flex-direction: row-reverse;
    /* margin: 0; */
    /* margin-left: 260px; */
  }
  @media screen and (max-width: ${e.breakpoint.desktop}) {
    flex-direction: row-reverse;
    /* margin: 0; */
    /* margin-left: 260px; */
  }
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    /* margin: 0; */
    margin-top: 40px;
  }
  @media screen and (min-width: ${e.breakpoint.desktop}) {
    flex-wrap: wrap-reverse;
    margin-top: 0;
    margin-left: 120px;
    margin-right: 220px;
    justify-content: space-between;
  }
`,D=s.img`
  height: 210px;
  @media screen and (min-width: ${e.breakpoint.tablet}) {
    display: block;
    height: 475px;
    position: relative;
    top: 100px;
  }

  @media screen and (max-width: ${e.breakpoint.desktop}) {
    height: 589px;
    position: relative;
    top: 150px;
    margin-right: 303px;
  }
`,O=s(f)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${t=>t.error?"213px":"187px"};
  height: auto;
  cursor: pointer;
`,G=s(f)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${t=>t.error?"326px":"276px"};
  height: auto;
  cursor: pointer;
`,J=s(k)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${t=>t.error?"213px":"187px"};
  height: auto;
  cursor: pointer;
`,K=s(k)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${t=>t.error?"326px":"276px"};
  height: auto;
  cursor: pointer;
`,N="/runners_of_code__frontend/assets/bottle_for_sign_in_desc@2x-7cd14c8c.png",Q=()=>{const[t,$]=n.useState("signin"),[j,h]=n.useState(!1),[a,S]=n.useState(!1),[d,y]=n.useState(!1),{signUp:P,signIn:v}=E(),F=r=>{$(r),h(!1)},g=()=>{S(!a)},w=()=>{y(!d)};return i.jsxs(L,{children:[i.jsx(D,{src:N}),i.jsxs(V,{children:[i.jsx(q,{signup:t==="signup",children:t==="signin"?"Sign In":"Sign Up"}),i.jsx(R,{initialValues:{email:"",password:"",repeatPassword:""},validate:r=>{const o={};return j&&(t==="signin"?(r.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(r.email)||(o.email="Some error message"):o.email="Email is required",r.password?r.password.length<8&&(o.password="Password must be at least 8 characters long"):o.password="Password is required"):t==="signup"&&(r.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(r.email)||(o.email="Some error message"):o.email="Email is required",r.password?r.password.length<8&&(o.password="Password must be at least 8 characters long"):o.password="Password is required",r.repeatPassword?r.password!==r.repeatPassword&&(o.repeatPassword="Passwords do not match"):o.repeatPassword="Please repeat your password")),o},onSubmit:(r,{setSubmitting:o,resetForm:p})=>{const{email:b,password:u}=r;t==="signin"?v({email:b,password:u}):P({email:b,password:u}),o(!1),o("values",r),p()},children:({isSubmitting:r,errors:o,resetForm:p})=>i.jsxs(_,{children:[i.jsxs(l,{children:[i.jsx(c,{htmlFor:"email",children:"Enter your email"}),i.jsx(m,{error:o.email,type:"email",id:"email",name:"email",placeholder:"E-mail"}),i.jsx(x,{name:"email",component:"div"})]}),i.jsxs(l,{children:[i.jsx(c,{htmlFor:"password",children:"Enter your password"}),i.jsx(m,{error:o.password,type:a?"text":"password",id:"password",name:"password",placeholder:"Password"}),a?i.jsx(i.Fragment,{children:i.jsx(J,{onClick:g,error:o.password})}):i.jsx(O,{onClick:g,error:o.password}),i.jsx(x,{name:"password",component:"div"})]}),t==="signup"&&i.jsxs(l,{children:[i.jsx(c,{htmlFor:"repeatPassword",children:"Repeat password"}),i.jsx(m,{error:o.repeatPassword,type:d?"text":"password",id:"repeatPassword",name:"repeatPassword",placeholder:"Repeat Password"}),d?i.jsx(i.Fragment,{children:i.jsx(K,{onClick:w,error:o.password})}):i.jsx(G,{onClick:w,error:o.password}),i.jsx(x,{name:"repeatPassword",component:"div"})]}),i.jsx(M,{type:"submit",disabled:r,onClick:()=>h(!0),children:t==="signin"?"Sign In":"Sign Up"}),i.jsx(U,{type:"button",onClick:()=>{p(),F(t==="signin"?"signup":"signin")},children:t==="signin"?"Sign up":"Sign in"})]})})]})]})},Y=()=>i.jsx(i.Fragment,{children:i.jsx(Q,{})});export{Y as default};
