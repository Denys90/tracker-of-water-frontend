import{n as r,t as s,F as v,E as R,b as E,m as z,S as k,a as _,r as n,u as A,j as e,c as I,d as M}from"./index-0972ce9a.js";const T="/runners_of_code__frontend/assets/background_element_home_mobile@1x-0bf10f90.png",Z="/runners_of_code__frontend/assets/background_element_home_mobile@2x-5c75a33c.png",V="/runners_of_code__frontend/assets/background_element_home_mobile@1x-0bf10f90.png",q="/runners_of_code__frontend/assets/background_element_home_mobile@2x-5c75a33c.png",U=r.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0px;
  width: 384px;
  margin-right: 200px;
  @media screen and (max-width: ${s.breakpoint.desktop}) {
    margin-right: 0;
    width: 336px;
  }
  @media screen and (max-width: ${s.breakpoint.tablet}) {
    width: 280px;
  }
`,L=r.h2`
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  width: 384px;
  @media screen and (max-width: ${s.breakpoint.desktop}) {
    width: 336px;
  }
  @media screen and (max-width: ${s.breakpoint.tablet}) {
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
  @media screen and (max-width: ${s.breakpoint.desktop}) {
    width: 336px;
  }
  @media screen and (max-width: ${s.breakpoint.tablet}) {
    width: 280px;
  }
`,m=r.label`
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  width: 384px;
  @media screen and (max-width: ${s.breakpoint.desktop}) {
    width: 336px;
  }
  @media screen and (max-width: ${s.breakpoint.tablet}) {
    width: 280px;
  }
`,B=r.button`
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
  @media screen and (max-width: ${s.breakpoint.desktop}) {
    width: 336px;
  }
  @media screen and (max-width: ${s.breakpoint.tablet}) {
    width: 280px;
  }
`,O=r.button`
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
`,c=r(v)`
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
  @media screen and (max-width: ${s.breakpoint.desktop}) {
    width: 336px;
  }
  @media screen and (max-width: ${s.breakpoint.tablet}) {
    width: 280px;
  }

  ${o=>o.error&&`
    border-color: rgb(239, 80, 80);
    color: rgb(239, 80, 80);
  `}

  ${o=>o.error&&`
    border-color: rgb(239, 80, 80);
    color: rgb(239, 80, 80);
  `}
`,x=r(R)`
  color: red;
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`,D=r.div`
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: url(${T}), url(${Z});

  @media screen and (min-width: ${s.breakpoint.tablet}) {
    background-image: url(${V}), url(${q});
    min-height: 100vh;
  }
  @media screen and (min-width: ${s.breakpoint.desktop}) {
    background-image: url(${E}), url(${z});
    min-height: 100vh;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  margin: 0 auto;

  @media screen and (min-width: ${s.breakpoint.tablet}) and (max-width: ${s.breakpoint.desktop}) {
    flex-direction: row-reverse;
    margin-left: 300px;
  }
    @media screen and (max-width:767px) {
    flex-direction: column-reverse;
    margin-top: 50px;
  }
`,G=r.img`
  height: 588.5px;
  @media screen and (min-width: ${s.breakpoint.tablet}) and (max-width: ${s.breakpoint.desktop}) {
    height: 474.26px;
    position: relative;
    left: -200px;
    top: 100px;
  }
  @media screen and (min-width: ${s.breakpoint.mobile}) and (max-width: 767px) {
    height: 181.74px;
  }
`,H=r(k)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${o=>o.error?"213px":"187px"};
  height: auto;
  cursor: pointer;
`,J=r(k)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${o=>o.error?"326px":"276px"};
  height: auto;
  cursor: pointer;
`,K=r(_)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${o=>o.error?"213px":"187px"};
  height: auto;
  cursor: pointer;
`,N=r(_)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${o=>o.error?"326px":"276px"};
  height: auto;
  cursor: pointer;
`,Q=()=>{const[o,j]=n.useState("signin"),[h,g]=n.useState(!1),[a,$]=n.useState(!1),[d,y]=n.useState(!1);console.log(h);const{signUp:P,signIn:S,userInfo:F}=A(),C=i=>{j(i),g(!1)},w=()=>{$(!a)},b=()=>{y(!d)};return e.jsxs(D,{children:[e.jsx(G,{src:"/src/assets/images/mobile/bottle_sign_in@2x.png"}),e.jsxs(U,{children:[e.jsx(L,{children:o==="signin"?"Sign In":"Sign Up"}),e.jsx(I,{initialValues:{email:"",password:"",repeatPassword:""},validate:i=>{const t={};return h&&(o==="signin"?(i.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(i.email)||(t.email="Some error message"):t.email="Email is required",i.password?i.password.length<8&&(t.password="Password must be at least 8 characters long"):t.password="Password is required"):o==="signup"&&(i.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(i.email)||(t.email="Some error message"):t.email="Email is required",i.password?i.password.length<8&&(t.password="Password must be at least 8 characters long"):t.password="Password is required",i.repeatPassword?i.password!==i.repeatPassword&&(t.repeatPassword="Passwords do not match"):t.repeatPassword="Please repeat your password")),t},onSubmit:(i,{setSubmitting:t,resetForm:p})=>{const{email:u,password:f}=i;o==="signin"?S({email:u,password:f}):P({email:u,password:f}),console.log("Form submitted:",i),t(!1),t("values",i),F(),p()},children:({isSubmitting:i,errors:t,resetForm:p})=>e.jsxs(M,{children:[e.jsxs(l,{children:[e.jsx(m,{htmlFor:"email",children:"Enter email"}),e.jsx(c,{error:t.email,type:"email",id:"email",name:"email",placeholder:"E-mail",autoComplete:"current-password"}),e.jsx(x,{name:"email",component:"div"})]}),e.jsxs(l,{children:[e.jsx(m,{htmlFor:"password",children:"Enter password"}),e.jsx(c,{error:t.password,type:a?"text":"password",id:"password",name:"password",placeholder:"Password",autoComplete:"current-password"}),a?e.jsx(e.Fragment,{children:e.jsx(K,{onClick:w,error:t.password})}):e.jsx(H,{onClick:w,error:t.password}),e.jsx(x,{name:"password",component:"div"})]}),o==="signup"&&e.jsxs(l,{children:[e.jsx(m,{htmlFor:"repeatPassword",children:"Repeat password"}),e.jsx(c,{error:t.repeatPassword,type:d?"text":"password",id:"repeatPassword",name:"repeatPassword",placeholder:"Repeat Password",autoComplete:"current-password"}),d?e.jsx(e.Fragment,{children:e.jsx(N,{onClick:b,error:t.password})}):e.jsx(J,{onClick:b,error:t.password}),e.jsx(x,{name:"repeatPassword",component:"div"})]}),e.jsx(B,{type:"submit",disabled:i,onClick:()=>g(!0),children:o==="signin"?"Sign In":"Sign Up"}),e.jsx(O,{type:"button",onClick:()=>{p(),C(o==="signin"?"signup":"signin")},children:o==="signin"?"Sign up":"Sign in"})]})})]})]})},X=()=>e.jsx(e.Fragment,{children:e.jsx(Q,{})});export{X as default};
