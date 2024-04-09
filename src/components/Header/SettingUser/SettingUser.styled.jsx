import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';
import { Field } from 'formik';
import { ReactComponent as SSVGOpen } from 'assets/images/icons/Vector.svg';
import { ReactComponent as SSVGClose } from 'assets/images/icons/Vector2.svg';

export const FormText = styled.h2`
  color: ${theme.colors.black};
  font-size: 18px;
  line-height: 20px;
`;
export const SSvgClose = styled(SSVGClose)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: 16px;
  height: auto;
  cursor: pointer;
`;
export const SSvgOpen = styled(SSVGOpen)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: 18px;
  height: auto;
  cursor: pointer;
`;

export const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 8px;
  color: ${theme.colors.black};
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;

export const DownloadWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

export const IconDownload = styled.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: ${theme.colors.paleBlue};
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export const IconButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
`;

export const PasswordInputWrap = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  width: 100%;
  margin-top: 8px;
`;

export const PasswordIcon = styled(IconDownload)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const DownloadButton = styled.label`
  display: flex;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`;

export const DownloadButtonText = styled.span`
  color: ${theme.colors.blue};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;

export const FormField = styled.div`
  margin-bottom: 24px;

  h2 {
    display: block;
    margin: 0;
    font-size: 18px;
    letter-spacing: 0%;
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

export const PasswordFormField = styled(FormField)`
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    margin-bottom: 28px;
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    margin-bottom: 12px;
  }
`;

export const GenderText = styled(FormText)`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
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

export const RadioButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const RadioButtonText = styled.span`
  color: ${theme.colors.black};
  font-size: 16px;
  line-height: 1.25; /* 125% */
`;

export const RadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const Input = styled(Field)`
  width: 100%;
  height: 44px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.paleBlue};
  font-size: 16px;
  line-height: 1.25;
  text-indent: 10px;
  color: ${theme.colors.blue};
  outline: ${theme.colors.paleBlue};
  background-color: ${theme.colors.white};

  &::placeholder {
    color: ${theme.colors.skyBlue};
    padding: 0px 10px;
  }
`;

export const StyledErrorMessage = styled.div`
  margin-top: 4px;
  color: ${theme.colors.brightRed};
  font-size: 14px;
  line-height: 18px; /* 128.571% */
`;

export const StyledErrorText = styled.p`
  margin-top: 4px;
  color: ${theme.colors.brightRed};
  font-size: 14px;
  line-height: 18px; /* 128.571% */
`;

export const ModalWrap = styled.div`
    margin: 0 auto;
    border-radius: 10px;
    background-color: ${theme.colors.white};

  @media screen and (min-width: ${theme.breakpoint.mobile}) {
      min-width: 280px;
    }
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    min-width: 704px;
    padding-left: 24px;
    padding-right: 24px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    min-width: 1008px;
  }
`;

export const PasswordText = styled(FormText)`
  margin-bottom: 12px;
`;

export const PasswordLabel = styled.p`
  display: block;
  margin: 0;
  color: ${theme.colors.black};
  font-size: 16px;
  line-height: 1.25; /* 125% */
  @media screen and (max-width: ${theme.breakpoint.mobile}) {
    font-size: 32px;
  }
`;

export const SaveButton = styled.button`
  min-width: 100%;
  padding: 8px 30px;
  border-style: none;
  border-radius: 10px;
  background: ${theme.colors.blue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25; /* 125% */

  &:is(:hover, :focus) {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    min-width: 160px;
    padding: 10px 30px;
    font-size: 18px;
    line-height: 24px; /* 133.333% */
  }
`;

export const DesktopFormWrap = styled.div`
  margin-bottom: 24px;

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    display: flex;
    align-items: flex-end;
    gap: 24px;
  }
`;

export const DesktopPasswordWrap = styled.div`
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 392px;
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
  }
`;

export const DesktopGenderWrap = styled.div`
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 392px;
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    margin-bottom: 0px;
  }
`;

export const LastPasswordFormField = styled.div`
  @media screen and (max-width: 767px) {
    height: 92px;
  }
`;

export const GenderFormField = styled.div`
  @media screen and (max-width: 1439px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    margin-bottom: 52px;
  }
`;

export const SaveButtonWrap = styled.ul`
  li {
    @media screen and (max-width: 767px) {
      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;


export const Header = styled.h1`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
`;

export const Title = styled.h2`
  display: flex;
  flex-direction: space-between;
  margin: 0;
  margin-bottom: 24px;
  font-family: 'Roboto-Bold', sans-serif;
  font-size: 26px;
  letter-spacing: 0%;
`;

export const EmailInput = styled.div``;
export const TitlePassword = styled.h2`
  font-family: 'Roboto-Medium', sans-serif;
  color: ${theme.colors.black};
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0%;
`;
export const TitleGender = styled.h2`
  font-family: 'Roboto-Medium', sans-serif;
  color: ${theme.colors.black};
  font-size: 18px;

  line-height: 20px;
  letter-spacing: 0%;
`;
