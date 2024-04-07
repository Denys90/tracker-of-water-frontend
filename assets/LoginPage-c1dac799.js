import{n as r,t as s,F as C,E as R,b as E,m as z,S as k,a as _,r as n,u as A,j as e,c as I,d as M}from"./index-69345c2f.js";const T="/runners_of_code__frontend/assets/background_element_home_mobile@1x-0bf10f90.png",Z="/runners_of_code__frontend/assets/background_element_home_mobile@2x-5c75a33c.png",V="/runners_of_code__frontend/assets/background_element_home_mobile@1x-0bf10f90.png",q="/runners_of_code__frontend/assets/background_element_home_mobile@2x-5c75a33c.png",U=r.div`
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
`,x=r(C)`
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

  ${i=>i.error&&`
    border-color: rgb(239, 80, 80);
    color: rgb(239, 80, 80);
  `}

  ${i=>i.error&&`
    border-color: rgb(239, 80, 80);
    color: rgb(239, 80, 80);
  `}
`,c=r(R)`
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
  top: ${i=>i.error?"213px":"187px"};
  height: auto;
  cursor: pointer;
`,J=r(k)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${i=>i.error?"326px":"276px"};
  height: auto;
  cursor: pointer;
`,K=r(_)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${i=>i.error?"213px":"187px"};
  height: auto;
  cursor: pointer;
`,N=r(_)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${i=>i.error?"326px":"276px"};
  height: auto;
  cursor: pointer;
`,Q=()=>{const[i,j]=n.useState("signin"),[h,g]=n.useState(!1),[a,$]=n.useState(!1),[d,y]=n.useState(!1);console.log(h);const{signUp:P,signIn:S,userInfo:F}=A(),v=o=>{j(o),g(!1)},b=()=>{$(!a)},w=()=>{y(!d)};return e.jsxs(D,{children:[e.jsx(G,{src:"/src/assets/images/mobile/bottle_sign_in@2x.png"}),e.jsxs(U,{children:[e.jsx(L,{children:i==="signin"?"Sign In":"Sign Up"}),e.jsx(I,{initialValues:{email:"",password:"",repeatPassword:""},validate:o=>{const t={};return h&&(i==="signin"?(o.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(o.email)||(t.email="Some error message"):t.email="Email is required",o.password?o.password.length<8&&(t.password="Password must be at least 8 characters long"):t.password="Password is required"):i==="signup"&&(o.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(o.email)||(t.email="Some error message"):t.email="Email is required",o.password?o.password.length<8&&(t.password="Password must be at least 8 characters long"):t.password="Password is required",o.repeatPassword?o.password!==o.repeatPassword&&(t.repeatPassword="Passwords do not match"):t.repeatPassword="Please repeat your password")),t},onSubmit:(o,{setSubmitting:t,resetForm:p})=>{const{email:f,password:u}=o;i==="signin"?S({email:f,password:u}):P({email:f,password:u}),console.log("Form submitted:",o),t(!1),t("values",o),setTimeout(()=>{F()},1e3),p()},children:({isSubmitting:o,errors:t,resetForm:p})=>e.jsxs(M,{children:[e.jsxs(l,{children:[e.jsx(m,{htmlFor:"email",children:"Enter email"}),e.jsx(x,{error:t.email,type:"email",id:"email",name:"email",placeholder:"E-mail"}),e.jsx(c,{name:"email",component:"div"})]}),e.jsxs(l,{children:[e.jsx(m,{htmlFor:"password",children:"Enter password"}),e.jsx(x,{error:t.password,type:a?"text":"password",id:"password",name:"password",placeholder:"Password"}),a?e.jsx(e.Fragment,{children:e.jsx(K,{onClick:b,error:t.password})}):e.jsx(H,{onClick:b,error:t.password}),e.jsx(c,{name:"password",component:"div"})]}),i==="signup"&&e.jsxs(l,{children:[e.jsx(m,{htmlFor:"repeatPassword",children:"Repeat password"}),e.jsx(x,{error:t.repeatPassword,type:d?"text":"password",id:"repeatPassword",name:"repeatPassword",placeholder:"Repeat Password"}),d?e.jsx(e.Fragment,{children:e.jsx(N,{onClick:w,error:t.password})}):e.jsx(J,{onClick:w,error:t.password}),e.jsx(c,{name:"repeatPassword",component:"div"})]}),e.jsx(B,{type:"submit",disabled:o,onClick:()=>g(!0),children:i==="signin"?"Sign In":"Sign Up"}),e.jsx(O,{type:"button",onClick:()=>{p(),v(i==="signin"?"signup":"signin")},children:i==="signin"?"Sign up":"Sign in"})]})})]})]})},X=()=>e.jsx(e.Fragment,{children:e.jsx(Q,{})});export{X as default};
