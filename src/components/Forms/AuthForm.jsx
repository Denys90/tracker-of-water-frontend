import { useState } from 'react';
import { Formik, Form } from 'formik';
import {
  FormContainer,
  InputContainer,
  InputField,
  LabelField,
  LinkBtn,
  SubmitButton,
  Title,
  ErrorMessages,
} from './AuthForm.styled';
// import {
//   FormContainer,
//   LabelField,
//   LinkBtn,
//   SubmitButton,
//   Title,
//   styles,
// } from './AuthForm.styled';

const AuthForm = () => {
  const [formType, setFormType] = useState('signin');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormTypeChange = (type) => {
    setFormType(type);
    setFormSubmitted(false);
  };

  return (
    <FormContainer>
      <Title>{formType === 'signin' ? 'Sign In' : 'Sign Up'}</Title>
      <Formik
        initialValues={{
          email: '',
          password: '',
          repeatPassword: '',
        }}
        validate={(values) => {
          const errors = {};
          if (formSubmitted) {
            if (formType === 'signin') {
              if (!values.email) {
                errors.email = 'Email is required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Some error message';
              }
              if (!values.password) {
                errors.password = 'Password is required';
              } else if (values.password.length < 8) {
                errors.password = 'Password must be at least 8 characters long';
              }
            } else if (formType === 'signup') {
              if (!values.email) {
                errors.email = 'Email is required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Some error message';
              }
              if (!values.password) {
                errors.password = 'Password is required';
              } else if (values.password.length < 8) {
                errors.password = 'Password must be at least 8 characters long';
              }
              if (!values.repeatPassword) {
                errors.repeatPassword = 'Please repeat your password';
              } else if (values.password !== values.repeatPassword) {
                errors.repeatPassword = 'Passwords do not match';
              }
            }
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log('Form submitted:', values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting, resetForm }) => (
          <Form>
            <InputContainer>
              <LabelField htmlFor="email">Enter email</LabelField>
              <InputField
                // css={[
                //   styles.input,
                //   formSubmitted && errors.email && styles.errorInput,
                // ]}
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
              />
              <ErrorMessages name="email" component="div" />
            </InputContainer>

            <InputContainer>
              <LabelField htmlFor="password">Enter password</LabelField>
              <InputField
                // css={[
                //   styles.input,
                //   formSubmitted && errors.password && styles.errorInput,
                // ]}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessages name="password" component="div" />
            </InputContainer>

            {formType === 'signup' && (
              <InputContainer>
                <LabelField htmlFor="repeatPassword">
                  Repeat password
                </LabelField>
                <InputField
                  // css={[
                  //   styles.input,
                  //   formSubmitted && errors.repeatPassword && styles.errorInput,
                  // ]}
                  type="password"
                  id="repeatPassword"
                  name="repeatPassword"
                  placeholder="Repeat Password"
                />
                <ErrorMessages name="repeatPassword" component="div" />
              </InputContainer>
            )}

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              onClick={() => setFormSubmitted(true)}
            >
              {formType === 'signin' ? 'Sign In' : 'Sign Up'}
            </SubmitButton>
            <LinkBtn
              type="button"
              onClick={() => {
                resetForm();
                handleFormTypeChange(
                  formType === 'signin' ? 'signup' : 'signin'
                );
              }}
            >
              {formType === 'signin' ? 'Sign up' : 'Sign in'}
            </LinkBtn>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default AuthForm;
