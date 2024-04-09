import{n,t as e,F,E as C,b as z,m as E,S as k,a as $,r as s,u as R,j as t,c as B,d as A}from"./index-9abd3a36.js";const I="/runners_of_code__frontend/assets/background_element_home_mobile@1x-0bf10f90.png",T="/runners_of_code__frontend/assets/background_element_home_mobile@2x-5c75a33c.png",Z="/runners_of_code__frontend/assets/background_element_home_mobile@1x-0bf10f90.png",V="/runners_of_code__frontend/assets/background_element_home_mobile@2x-5c75a33c.png",q=n.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  padding: 0px;
  width: 280px;

  @media screen and (min-width: ${e.breakpoint.tablet}) {
    width: 336px;
    height: ${i=>i.signup?"404px":"312px"};
    margin-top: 40px;
  }
  @media screen and (min-width: ${e.breakpoint.desktop}) {
    margin-right: 50px;
    width: 384px;
    top: 550px;
    flex-direction: column;
  }
`,U=n.h2`
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
`,l=n.div`
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
`,c=n.label`
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
`,L=n.button`
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
`,M=n.button`
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
`,m=n(F)`
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

  ${i=>i.error&&`
    border-color: ${e.colors.brightRed};
    color: ${e.colors.brightRed};
  `}

  ${i=>i.error&&`
    border-color: ${e.colors.brightRed};
    color: ${e.colors.brightRed};
  `}
`,h=n(C)`
  color: red;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`,O=n.div`
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 120%;
  background-image: url(${I}), url(${T});
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 0 auto; */

  @media screen and (min-width: ${e.breakpoint.tablet}) {
    background-image: url(${Z}), url(${V});
    /* min-height: 100vh; */
    /* height: 350px; */
  }
  @media screen and (min-width: ${e.breakpoint.desktop}) {
    background-image: url(${z}), url(${E});
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
`,D=n.img`
  height: 210px;
  @media screen and (min-width: ${e.breakpoint.tablet}) {
    display: block;
    height: 475px;
    position: relative;
    top: 100px;
  }
  /* @media screen and (max-width: ${e.breakpoint.desktop}) {
    height: 475px;
    position: relative;
    top: 100px;
  } */

  @media screen and (max-width: ${e.breakpoint.desktop}) {
    height: 589px;
    position: relative;
    top: 150px;
    margin-right: 303px;
    /* left: -370px; */
  }
`,G=n(k)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${i=>i.error?"213px":"187px"};
  height: auto;
  cursor: pointer;
`,H=n(k)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${i=>i.error?"326px":"276px"};
  height: auto;
  cursor: pointer;
`,J=n($)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${i=>i.error?"213px":"187px"};
  height: auto;
  cursor: pointer;
`,K=n($)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${i=>i.error?"326px":"276px"};
  height: auto;
  cursor: pointer;
`,N="/runners_of_code__frontend/assets/bottle_for_sign_in_desc@2x-7cd14c8c.png",Q=()=>{const[i,_]=s.useState("signin"),[x,g]=s.useState(!1),[a,j]=s.useState(!1),[d,S]=s.useState(!1);console.log(x);const{signUp:y,signIn:P}=R(),v=r=>{_(r),g(!1)},w=()=>{j(!a)},b=()=>{S(!d)};return t.jsxs(O,{children:[t.jsx(D,{src:N}),t.jsxs(q,{children:[t.jsx(U,{signup:i==="signup",children:i==="signin"?"Sign In":"Sign Up"}),t.jsx(B,{initialValues:{email:"",password:"",repeatPassword:""},validate:r=>{const o={};return x&&(i==="signin"?(r.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(r.email)||(o.email="Some error message"):o.email="Email is required",r.password?r.password.length<8&&(o.password="Password must be at least 8 characters long"):o.password="Password is required"):i==="signup"&&(r.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(r.email)||(o.email="Some error message"):o.email="Email is required",r.password?r.password.length<8&&(o.password="Password must be at least 8 characters long"):o.password="Password is required",r.repeatPassword?r.password!==r.repeatPassword&&(o.repeatPassword="Passwords do not match"):o.repeatPassword="Please repeat your password")),o},onSubmit:(r,{setSubmitting:o,resetForm:p})=>{const{email:u,password:f}=r;i==="signin"?P({email:u,password:f}):y({email:u,password:f}),o(!1),o("values",r),p()},children:({isSubmitting:r,errors:o,resetForm:p})=>t.jsxs(A,{children:[t.jsxs(l,{children:[t.jsx(c,{htmlFor:"email",children:"Enter your email"}),t.jsx(m,{error:o.email,type:"email",id:"email",name:"email",placeholder:"E-mail"}),t.jsx(h,{name:"email",component:"div"})]}),t.jsxs(l,{children:[t.jsx(c,{htmlFor:"password",children:"Enter your password"}),t.jsx(m,{error:o.password,type:a?"text":"password",id:"password",name:"password",placeholder:"Password"}),a?t.jsx(t.Fragment,{children:t.jsx(J,{onClick:w,error:o.password})}):t.jsx(G,{onClick:w,error:o.password}),t.jsx(h,{name:"password",component:"div"})]}),i==="signup"&&t.jsxs(l,{children:[t.jsx(c,{htmlFor:"repeatPassword",children:"Repeat password"}),t.jsx(m,{error:o.repeatPassword,type:d?"text":"password",id:"repeatPassword",name:"repeatPassword",placeholder:"Repeat Password"}),d?t.jsx(t.Fragment,{children:t.jsx(K,{onClick:b,error:o.password})}):t.jsx(H,{onClick:b,error:o.password}),t.jsx(h,{name:"repeatPassword",component:"div"})]}),t.jsx(L,{type:"submit",disabled:r,onClick:()=>g(!0),children:i==="signin"?"Sign In":"Sign Up"}),t.jsx(M,{type:"button",onClick:()=>{p(),v(i==="signin"?"signup":"signin")},children:i==="signin"?"Sign up":"Sign in"})]})})]})]})},X=()=>t.jsx(t.Fragment,{children:t.jsx(Q,{})});export{X as default};
