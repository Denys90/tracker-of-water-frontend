import{n as r,t as e,F,E as C,b as z,m as E,S as k,a as $,r as s,u as R,j as i,c as B,d as A}from"./index-e682bf96.js";const I="/runners_of_code__frontend/assets/background_element_home_mobile@1x-0bf10f90.png",T="/runners_of_code__frontend/assets/background_element_home_mobile@2x-5c75a33c.png",Z="/runners_of_code__frontend/assets/background_element_home_mobile@1x-0bf10f90.png",V="/runners_of_code__frontend/assets/background_element_home_mobile@2x-5c75a33c.png",q=r.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  padding: 0px;
  width: 280px;
  margin: 0 auto;

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
`,U=r.h2`
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
`,l=r.div`
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
`,c=r.label`
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
`,L=r.button`
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
`,M=r.button`
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
`,m=r(F)`
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
`,h=r(C)`
  color: red;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`,O=r.div`
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 120%;
  background-image: url(${I}), url(${T});
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media screen and (min-width: ${e.breakpoint.tablet}) {
    background-image: url(${Z}), url(${V});
    /* min-height: 100vh; */
    height: 350px;
  }
  @media screen and (min-width: ${e.breakpoint.desktop}) {
    background-image: url(${z}), url(${E});
    /* min-height: 100vh; */
    height: 470px;
    background-size: cover;
  }

  @media screen and (min-width: ${e.breakpoint.tablet}) {
    flex-direction: row-reverse;
    margin: 0;
    margin-left: 260px;
  }
  @media screen and (max-width: ${e.breakpoint.desktop}) {
    flex-direction: row-reverse;
    margin: 0;
    margin-left: 260px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    margin: 0;
    margin-top: 40px;
  }
  @media screen and (min-width: ${e.breakpoint.desktop}) {
    flex-wrap: wrap-reverse;
    margin-top: 0;
    margin-left: 120px;
    margin-right: 220px;
    justify-content: space-between;
  }
`,D=r.img`
  height: 210px;
  @media screen and (min-width: ${e.breakpoint.tablet}) {
    display: block;
    height: 475px;
    position: relative;
    top: 100px;
  }
  @media screen and (max-width: ${e.breakpoint.desktop}) {
    height: 475px;
    position: relative;

    top: 100px;
  }

  /* @media screen and (min-width: ${e.breakpoint.mobile}) {
    height: 182px;
  }
  @media screen and (max-width: 767px) {
    height: 182px;
  } */
  @media screen and (min-width: ${e.breakpoint.desktop}) {
    height: 589px;
    position: relative;
    top: 150px;
    left: -370px;
  }
`,G=r(k)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${t=>t.error?"213px":"187px"};
  height: auto;
  cursor: pointer;
`,H=r(k)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${t=>t.error?"326px":"276px"};
  height: auto;
  cursor: pointer;
`,J=r($)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${t=>t.error?"213px":"187px"};
  height: auto;
  cursor: pointer;
`,K=r($)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${t=>t.error?"326px":"276px"};
  height: auto;
  cursor: pointer;
`,N="/runners_of_code__frontend/assets/bottle_for_sign_in_desc@2x-8ef67072.png",Q=()=>{const[t,_]=s.useState("signin"),[x,g]=s.useState(!1),[a,j]=s.useState(!1),[d,S]=s.useState(!1);console.log(x);const{signUp:y,signIn:P}=R(),v=n=>{_(n),g(!1)},w=()=>{j(!a)},b=()=>{S(!d)};return i.jsxs(O,{children:[i.jsx(D,{src:N}),i.jsxs(q,{children:[i.jsx(U,{signup:t==="signup",children:t==="signin"?"Sign In":"Sign Up"}),i.jsx(B,{initialValues:{email:"",password:"",repeatPassword:""},validate:n=>{const o={};return x&&(t==="signin"?(n.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(n.email)||(o.email="Some error message"):o.email="Email is required",n.password?n.password.length<8&&(o.password="Password must be at least 8 characters long"):o.password="Password is required"):t==="signup"&&(n.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(n.email)||(o.email="Some error message"):o.email="Email is required",n.password?n.password.length<8&&(o.password="Password must be at least 8 characters long"):o.password="Password is required",n.repeatPassword?n.password!==n.repeatPassword&&(o.repeatPassword="Passwords do not match"):o.repeatPassword="Please repeat your password")),o},onSubmit:(n,{setSubmitting:o,resetForm:p})=>{const{email:u,password:f}=n;t==="signin"?P({email:u,password:f}):y({email:u,password:f}),o(!1),o("values",n),p()},children:({isSubmitting:n,errors:o,resetForm:p})=>i.jsxs(A,{children:[i.jsxs(l,{children:[i.jsx(c,{htmlFor:"email",children:"Enter your email"}),i.jsx(m,{error:o.email,type:"email",id:"email",name:"email",placeholder:"E-mail"}),i.jsx(h,{name:"email",component:"div"})]}),i.jsxs(l,{children:[i.jsx(c,{htmlFor:"password",children:"Enter your password"}),i.jsx(m,{error:o.password,type:a?"text":"password",id:"password",name:"password",placeholder:"Password"}),a?i.jsx(i.Fragment,{children:i.jsx(J,{onClick:w,error:o.password})}):i.jsx(G,{onClick:w,error:o.password}),i.jsx(h,{name:"password",component:"div"})]}),t==="signup"&&i.jsxs(l,{children:[i.jsx(c,{htmlFor:"repeatPassword",children:"Repeat password"}),i.jsx(m,{error:o.repeatPassword,type:d?"text":"password",id:"repeatPassword",name:"repeatPassword",placeholder:"Repeat Password"}),d?i.jsx(i.Fragment,{children:i.jsx(K,{onClick:b,error:o.password})}):i.jsx(H,{onClick:b,error:o.password}),i.jsx(h,{name:"repeatPassword",component:"div"})]}),i.jsx(L,{type:"submit",disabled:n,onClick:()=>g(!0),children:t==="signin"?"Sign In":"Sign Up"}),i.jsx(M,{type:"button",onClick:()=>{p(),v(t==="signin"?"signup":"signin")},children:t==="signin"?"Sign up":"Sign in"})]})})]})]})},X=()=>i.jsx(i.Fragment,{children:i.jsx(Q,{})});export{X as default};
