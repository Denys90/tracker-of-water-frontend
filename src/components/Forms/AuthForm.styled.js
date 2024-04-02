import styled from '@emotion/styled';

import { Field, ErrorMessage } from 'formik';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  width: 384px;
`;
export const Title = styled.h2`
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  width: 384px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  margin-bottom: 16px;
  width: 384px;
`;
export const LabelField = styled.label`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  width: 384px;
`;
export const SubmitButton = styled.button`
  font-family: Roboto;
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
`;
export const LinkBtn = styled.button`
  color: rgb(64, 123, 255);
  font-family: Roboto;
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
`;

export const InputField = styled(Field)`
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

  ${(props) =>
    props.error &&
    `
    border-color: rgb(239, 80, 80);
    color: rgb(239, 80, 80);
  `}

  ${(props) =>
    props.error &&
    `
    border-color: rgb(239, 80, 80);
    color: rgb(239, 80, 80);
  `}
`;

export const ErrorMessages = styled(ErrorMessage)`
  color: red;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;
