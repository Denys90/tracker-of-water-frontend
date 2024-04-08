import{n as r,t as o,F as v,E as C,b as R,m as E,S as k,a as _,r as n,u as z,j as e,c as A,d as M}from"./index-a1512723.js";const I="/runners_of_code__frontend/assets/background_element_home_mobile@1x-0bf10f90.png",T="/runners_of_code__frontend/assets/background_element_home_mobile@2x-5c75a33c.png",Z="/runners_of_code__frontend/assets/background_element_home_mobile@1x-0bf10f90.png",V="/runners_of_code__frontend/assets/background_element_home_mobile@2x-5c75a33c.png",q=r.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0px;
  width: 384px;
  margin-right: 200px;
  @media screen and (max-width: ${o.breakpoint.desktop}) {
    margin-right: 0;
    width: 336px;
  }
  @media screen and (max-width: ${o.breakpoint.tablet}) {
    width: 280px;
  }
`,U=r.h2`
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  width: 384px;
  @media screen and (max-width: ${o.breakpoint.desktop}) {
    width: 336px;
  }
  @media screen and (max-width: ${o.breakpoint.tablet}) {
    width: 280px;
  }
`,l=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  margin-bottom: 16px;
  width: 384px;
  @media screen and (max-width: ${o.breakpoint.desktop}) {
    width: 336px;
  }
  @media screen and (max-width: ${o.breakpoint.tablet}) {
    width: 280px;
  }
`,m=r.label`
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  width: 384px;
  @media screen and (max-width: ${o.breakpoint.desktop}) {
    width: 336px;
  }
  @media screen and (max-width: ${o.breakpoint.tablet}) {
    width: 280px;
  }
`,L=r.button`
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: center;
  color: white;
  padding: 10px 30px 10px 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  background: rgb(64, 123, 255);
  width: 384px;
  border: none;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  @media screen and (max-width: ${o.breakpoint.desktop}) {
    width: 336px;
  }
  @media screen and (max-width: ${o.breakpoint.tablet}) {
    width: 280px;
  }
`,B=r.button`
  margin-top: 16px;
  color: rgb(64, 123, 255);
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
  text-decoration: none;
  transition: 0.4s;
  background-color: transparent;
  border: none;
  &:hover {
    color: rgb(255, 157, 67);
  }
`,x=r(v)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 10px 12px 10px;
  box-sizing: border-box;
  border: 1px solid rgb(215, 227, 255);
  border-radius: 6px;
  background: rgb(255, 255, 255);
  width: 384px;
  color: rgb(64, 123, 255);
  position: relative;
  &::placeholder {
    color: rgb(158, 187, 255);
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
  &:focus {
    outline: none;
  }
  @media screen and (max-width: ${o.breakpoint.desktop}) {
    width: 336px;
  }
  @media screen and (max-width: ${o.breakpoint.tablet}) {
    width: 280px;
  }

  ${i=>i.error&&`
    border-color: rgb(239, 80, 80);
    color: rgb(239, 80, 80);
  `}

  ${i=>i.error&&`
    border-color: rgb(239, 80, 80);
    color: rgb(239, 80, 80);
  `}
`,c=r(C)`
  color: red;
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`,O=r.div`
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: url(${I}), url(${T});

  @media screen and (min-width: ${o.breakpoint.tablet}) {
    background-image: url(${Z}), url(${V});
    min-height: 100vh;
  }
  @media screen and (min-width: ${o.breakpoint.desktop}) {
    background-image: url(${R}), url(${E});
    min-height: 100vh;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  margin: 0 auto;

  @media screen and (min-width: ${o.breakpoint.tablet}) and (max-width: ${o.breakpoint.desktop}) {
    flex-direction: row-reverse;
    margin-left: 300px;
  }
    @media screen and (max-width:767px) {
    flex-direction: column-reverse;
    margin-top: 50px;
  }
`,D=r.img`
  height: 588.5px;
  @media screen and (min-width: ${o.breakpoint.tablet}) and (max-width: ${o.breakpoint.desktop}) {
    height: 474.26px;
    position: relative;
    left: -200px;
    top: 100px;
  }
  @media screen and (min-width: ${o.breakpoint.mobile}) and (max-width: 767px) {
    height: 181.74px;
  }
`,G=r(k)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${i=>i.error?"213px":"187px"};
  height: auto;
  cursor: pointer;
`,H=r(k)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${i=>i.error?"326px":"276px"};
  height: auto;
  cursor: pointer;
`,J=r(_)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${i=>i.error?"213px":"187px"};
  height: auto;
  cursor: pointer;
`,K=r(_)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${i=>i.error?"326px":"276px"};
  height: auto;
  cursor: pointer;
`,N=()=>{const[i,j]=n.useState("signin"),[h,g]=n.useState(!1),[a,$]=n.useState(!1),[d,y]=n.useState(!1);console.log(h);const{signUp:P,signIn:S}=z(),F=s=>{j(s),g(!1)},b=()=>{$(!a)},w=()=>{y(!d)};return e.jsxs(O,{children:[e.jsx(D,{src:"/src/assets/images/mobile/bottle_sign_in@2x.png"}),e.jsxs(q,{children:[e.jsx(U,{children:i==="signin"?"Sign In":"Sign Up"}),e.jsx(A,{initialValues:{email:"",password:"",repeatPassword:""},validate:s=>{const t={};return h&&(i==="signin"?(s.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(s.email)||(t.email="Some error message"):t.email="Email is required",s.password?s.password.length<8&&(t.password="Password must be at least 8 characters long"):t.password="Password is required"):i==="signup"&&(s.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(s.email)||(t.email="Some error message"):t.email="Email is required",s.password?s.password.length<8&&(t.password="Password must be at least 8 characters long"):t.password="Password is required",s.repeatPassword?s.password!==s.repeatPassword&&(t.repeatPassword="Passwords do not match"):t.repeatPassword="Please repeat your password")),t},onSubmit:(s,{setSubmitting:t,resetForm:p})=>{const{email:f,password:u}=s;i==="signin"?S({email:f,password:u}):P({email:f,password:u}),t(!1),t("values",s),p()},children:({isSubmitting:s,errors:t,resetForm:p})=>e.jsxs(M,{children:[e.jsxs(l,{children:[e.jsx(m,{htmlFor:"email",children:"Enter email"}),e.jsx(x,{error:t.email,type:"email",id:"email",name:"email",placeholder:"E-mail"}),e.jsx(c,{name:"email",component:"div"})]}),e.jsxs(l,{children:[e.jsx(m,{htmlFor:"password",children:"Enter password"}),e.jsx(x,{error:t.password,type:a?"text":"password",id:"password",name:"password",placeholder:"Password"}),a?e.jsx(e.Fragment,{children:e.jsx(J,{onClick:b,error:t.password})}):e.jsx(G,{onClick:b,error:t.password}),e.jsx(c,{name:"password",component:"div"})]}),i==="signup"&&e.jsxs(l,{children:[e.jsx(m,{htmlFor:"repeatPassword",children:"Repeat password"}),e.jsx(x,{error:t.repeatPassword,type:d?"text":"password",id:"repeatPassword",name:"repeatPassword",placeholder:"Repeat Password"}),d?e.jsx(e.Fragment,{children:e.jsx(K,{onClick:w,error:t.password})}):e.jsx(H,{onClick:w,error:t.password}),e.jsx(c,{name:"repeatPassword",component:"div"})]}),e.jsx(L,{type:"submit",disabled:s,onClick:()=>g(!0),children:i==="signin"?"Sign In":"Sign Up"}),e.jsx(B,{type:"button",onClick:()=>{p(),F(i==="signin"?"signup":"signin")},children:i==="signin"?"Sign up":"Sign in"})]})})]})]})},W=()=>e.jsx(e.Fragment,{children:e.jsx(N,{})});export{W as default};
