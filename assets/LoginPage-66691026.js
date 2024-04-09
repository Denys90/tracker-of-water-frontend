import{n as i,t,F as E,E as R,S,a as y,r as n,u as z,j as e,b as B,c as A}from"./index-d474fc6c.js";const j="/runners_of_code__frontend/assets/x1-0f2630b3.png",$="/runners_of_code__frontend/assets/x2-85638a2d.png",I=i.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  padding: 0px;
  width: 280px;
`,T=i.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 16px;
  width: 280px;
`,l=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  margin-bottom: 16px;
  width: 280px;
`,c=i.label`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  width: 280px;
`,Z=i.button`
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
`,V=i.button`
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
`,x=i(E)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 10px;
  box-sizing: border-box;
  border: 1px solid ${t.colors.paleBlue};
  border-radius: 6px;
  background: ${t.colors.white};
  width: 280px;
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

  ${s=>s.error&&`
    border-color: ${t.colors.brightRed};
    color: ${t.colors.brightRed};
  `}

  ${s=>s.error&&`
    border-color: ${t.colors.brightRed};
    color: ${t.colors.brightRed};
  `}
`,g=i(R)`
  color: red;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`,q=i.div`
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    display: flex;
  }
  @media screen and (max-width: ${t.breakpoint.desktop}) {
  }
`,U=i.img`
  height: 181px;

  @media screen and (min-width: ${t.breakpoint.tablet}) {
    background-image: url(${j}), url(${$});
    display: block;
    height: 474px;

    top: 100px;
  }
  @media screen and (min-width: ${t.breakpoint.desktop}) {
    background-image: url(${j}), url(${$});
    height: 588px;
  }
`,L=i(S)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${s=>s.error?"213px":"187px"};
  height: auto;
  cursor: pointer;
`,M=i(S)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${s=>s.error?"326px":"276px"};
  height: auto;
  cursor: pointer;
`,O=i(y)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${s=>s.error?"213px":"187px"};
  height: auto;
  cursor: pointer;
`,D=i(y)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${s=>s.error?"326px":"276px"};
  height: auto;
  cursor: pointer;
`,G="/runners_of_code__frontend/assets/bottle_for_sign_in_desc@2x-7cd14c8c.png",H=()=>{const[s,P]=n.useState("signin"),[h,m]=n.useState(!1),[a,k]=n.useState(!1),[d,_]=n.useState(!1);console.log(h);const{signUp:F,signIn:C}=z(),v=r=>{P(r),m(!1)},w=()=>{k(!a)},u=()=>{_(!d)};return e.jsxs(q,{children:[e.jsx(U,{src:G}),e.jsxs(I,{children:[e.jsx(T,{signup:s==="signup",children:s==="signin"?"Sign In":"Sign Up"}),e.jsx(B,{initialValues:{email:"",password:"",repeatPassword:""},validate:r=>{const o={};return h&&(s==="signin"?(r.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(r.email)||(o.email="Some error message"):o.email="Email is required",r.password?r.password.length<8&&(o.password="Password must be at least 8 characters long"):o.password="Password is required"):s==="signup"&&(r.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(r.email)||(o.email="Some error message"):o.email="Email is required",r.password?r.password.length<8&&(o.password="Password must be at least 8 characters long"):o.password="Password is required",r.repeatPassword?r.password!==r.repeatPassword&&(o.repeatPassword="Passwords do not match"):o.repeatPassword="Please repeat your password")),o},onSubmit:(r,{setSubmitting:o,resetForm:p})=>{const{email:b,password:f}=r;s==="signin"?C({email:b,password:f}):F({email:b,password:f}),o(!1),o("values",r),p()},children:({isSubmitting:r,errors:o,resetForm:p})=>e.jsxs(A,{children:[e.jsxs(l,{children:[e.jsx(c,{htmlFor:"email",children:"Enter your email"}),e.jsx(x,{error:o.email,type:"email",id:"email",name:"email",placeholder:"E-mail"}),e.jsx(g,{name:"email",component:"div"})]}),e.jsxs(l,{children:[e.jsx(c,{htmlFor:"password",children:"Enter your password"}),e.jsx(x,{error:o.password,type:a?"text":"password",id:"password",name:"password",placeholder:"Password"}),a?e.jsx(e.Fragment,{children:e.jsx(O,{onClick:w,error:o.password})}):e.jsx(L,{onClick:w,error:o.password}),e.jsx(g,{name:"password",component:"div"})]}),s==="signup"&&e.jsxs(l,{children:[e.jsx(c,{htmlFor:"repeatPassword",children:"Repeat password"}),e.jsx(x,{error:o.repeatPassword,type:d?"text":"password",id:"repeatPassword",name:"repeatPassword",placeholder:"Repeat Password"}),d?e.jsx(e.Fragment,{children:e.jsx(D,{onClick:u,error:o.password})}):e.jsx(M,{onClick:u,error:o.password}),e.jsx(g,{name:"repeatPassword",component:"div"})]}),e.jsx(Z,{type:"submit",disabled:r,onClick:()=>m(!0),children:s==="signin"?"Sign In":"Sign Up"}),e.jsx(V,{type:"button",onClick:()=>{p(),v(s==="signin"?"signup":"signin")},children:s==="signin"?"Sign up":"Sign in"})]})})]})]})},K=()=>e.jsx(e.Fragment,{children:e.jsx(H,{})});export{K as default};
