import styled from '@emotion/styled';

import { theme } from 'styles/theme';
import { Field } from 'formik';
import { ReactComponent as SSVGOpen } from 'assets/images/icons/Vector.svg';
import { ReactComponent as SSVGClose } from 'assets/images/icons/Vector2.svg';

export const FormText = styled.h2`
  color: ${theme.colors.black};
  font-size: 18px;
  line-height: 20px;
`;
export const SSvgOpen = styled(SSVGOpen)`
  color: ${({ error }) =>
    error ? `${theme.colors.brightRed}` : `${theme.colors.blue}`};
  position: absolute;
  right: 10px;
  width: 20px;
  top: 18px;
  height: auto;
  cursor: pointer;
`;

export const SSvgClose = styled(SSVGClose)`
  color: ${({ error }) =>
    error ? `${theme.colors.brightRed}` : `${theme.colors.blue}`};
  position: absolute;
  right: 10px;
  width: 20px;
  top: 16px;
  height: auto;
  cursor: pointer;
`;

export const ModalWrap = styled.div`
  margin: 0 auto;
  border-radius: 10px;
  background-color: ${theme.colors.white};
  min-width: 256px;
  padding-top: 8px;
  padding-bottom: 8px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    min-width: 704px;
    padding: 0;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    min-width: 1008px;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h2`
  display: flex;
  margin: 0;
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormField = styled.div`
  width: 222px;
  gap: 8px;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
  }

  .error-input {
    border: 1px solid ${theme.colors.brightRed};
    color: ${theme.colors.brightRed};

    &:focus {
      color: ${theme.colors.brightRed};
    }

    &::placeholder {
      color: ${theme.colors.brightRed};
    }
  }
`;

export const DownloadWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const DownloadButton = styled.label`
  display: flex;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`;

export const IconDownload = styled.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: ${theme.colors.paleBlue};
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export const DownloadButtonText = styled.span`
  color: ${theme.colors.blue};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const DesktopFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const DesktopGenderWrap = styled.div`
  width: 256px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 392px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    gap: 56px;
  }
`;

export const GenderFormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TitleGender = styled.h2`
  margin: 0;
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
`;

export const RadioButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const RadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const RadioButton = styled(Field)`
  opacity: 0;
  position: absolute;

  + span {
    display: inline-block;
    padding-left: 25px;
    position: relative;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 1px solid ${(props) => props.theme.colors.skyBlue};
      background-color: ${theme.colors.white};
    }

    &:after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${theme.colors.blue};
      top: 50%;
      left: 4px;
      transform: translate(0, -50%);
      opacity: 0;
    }
  }

  &:checked + span:after {
    opacity: 1;
  }
`;

export const RadioButtonText = styled.span`
  font-size: 16px;
  line-height: 20px;
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledLabel = styled.label`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;

export const Input = styled(Field)`
  width: 98%;
  height: 44px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.paleBlue};
  color: ${theme.colors.skyBlue};
  font-size: 16px;
  line-height: 1.25;
  text-indent: 10px;
  outline: ${theme.colors.paleBlue};
  background-color: ${theme.colors.white};

  &::placeholder {
    color: ${theme.colors.skyBlue};
    padding: 0px 10px;
  }

  ${(props) =>
    props.error &&
    `
    border-color: ${theme.colors.brightRed};
    color: ${theme.colors.brightRed};
  `}
`;

export const DesktopPasswordWrap = styled.div`
  width: 256px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 392px;
  }
`;

export const TitlePassword = styled.h2`
  margin: 0;
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
`;

export const PasswordFormField = styled(FormField)`
  width: 256px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 392px;
  }
`;

export const PasswordLabel = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 20px;
`;

export const PasswordInputWrap = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  width: 100%;

  ${({ error }) =>
    error &&
    `
    border-color: red; 
   
  `}
`;

export const IconButton = styled.button`
  border: none;
  background-color: transparent;
  padding-bottom: 14px;
  padding-left: 232px;
  position: absolute;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 518px;
  }
`;

export const LastPasswordFormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 256px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 392px;
  }
`;

export const ErrorMessages = styled.div`
  opacity: 0;
  cursor: none;
  color: ${theme.colors.brightRed};
`;

export const SaveButtonWrap = styled.ul`
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const SaveButton = styled.button`
  min-width: 100%;
  padding: 8px 30px;
  border-style: none;
  border-radius: 10px;
  background: ${theme.colors.blue};
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 15px;

  &:is(:hover, :focus) {
    box-shadow: ${theme.boxShadowBtn.hoverBtn};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    min-width: 160px;
    padding: 10px 30px;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 0;
  }
`;

export const DeleteAccButton = styled.button`
  min-width: 100%;
  padding: 8px 30px;
  border-style: none;
  border-radius: 10px;
  background: ${theme.colors.paleBlue};
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  &:is(:hover, :focus) {
    box-shadow: ${theme.boxShadowBtn.hoverBtn};
  background: ${theme.colors.brightRed};

  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    min-width: 160px;
    padding: 10px 30px;
    font-size: 18px;
    line-height: 24px;
   
`;
