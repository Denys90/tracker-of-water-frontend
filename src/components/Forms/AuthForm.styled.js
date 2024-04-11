import styled from '@emotion/styled';
import { theme } from 'styles/theme';
import { Field, ErrorMessage } from 'formik';

import { ReactComponent as SVGOpen } from 'assets/images/icons/Vector.svg';
import { ReactComponent as SVGOpenTwo } from 'assets/images/icons/Vector.svg';
import { ReactComponent as SVGClose } from 'assets/images/icons/Vector2.svg';
import { ReactComponent as SVGCloseTwo } from 'assets/images/icons/Vector2.svg';

import main_mobile from 'assets/images/mobile/bubbleMob.png';
import main_mobile2 from 'assets/images/mobile/bubbleMob@2x.png';
import main_tablet from 'assets/images/tablet/bubbleTablet.png';
import main_tablet2 from 'assets/images/tablet/bubbleTablet@2x.png';
import main_desk from 'assets/images/desc/bubbleDesk.png';
import main_desk2 from 'assets/images/desc/bubbleDesk@2x.png';

import bottle_sign_in from 'assets/images/tablet/bottle_sign_in_tablet@1x.png';
import bottle_sign_in2 from 'assets/images/tablet/bottle_sign_in_tablet@2x.png';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  padding: 0px;
  width: 280px;
  margin: 0 auto;
  padding-top: 4px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    justify-content: flex-start;
    margin-left: 32px;
    width: 336px;
    height: ${(props) => (props.formType === 'signup' ? '396px' : '304px')};
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 384px;
    margin-top: 113px;
    flex-direction: column;
    height: 312px;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 16px;
  width: 280px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 336px;
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 384px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  margin-bottom: 16px;
  width: 280px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 336px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 384px;
  }
`;

export const LabelField = styled.label`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  width: 280px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 336px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 384px;
  }
`;

export const SubmitButton = styled.button`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: center;
  color: ${theme.colors.white};
  padding: 10px 30px;
  border-radius: 10px;
  box-shadow: ${theme.boxShadowBtn.hoverBtn};
  background-color: ${theme.colors.blue};
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 8px 30px;
  width: 280px;

  transition: 0.4s;
  &:hover {
    box-shadow: ${theme.boxShadowBtn.hoverBtn};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 336px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 384px;
  }
`;

export const LinkBtn = styled.button`
  margin-top: 16px;
  color: ${theme.colors.blue};
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  transition: 0.4s;
  background-color: transparent;
  border: none;
  &:hover {
    color: ${theme.colors.orange};
  }
`;

export const InputField = styled(Field)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 10px;
  box-sizing: border-box;
  border: 1px solid ${theme.colors.paleBlue};
  border-radius: 6px;
  background: ${theme.colors.white};
  width: 100%;
  color: ${theme.colors.blue};
  position: relative;
  &::placeholder {
    color: ${theme.colors.skyBlue};
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
  &:focus {
    outline: none;
  }

  @media screen and(min-width: ${theme.breakpoint.tablet}) {
    width: 336px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 384px;
  }

  ${(props) =>
    props.error &&
    `
    border-color: ${theme.colors.brightRed};
    color: ${theme.colors.brightRed};
  `}

  ${(props) =>
    props.error &&
    `
   border-color: ${theme.colors.brightRed};
    color: ${theme.colors.brightRed};
  `}
`;

export const ErrorMessages = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

export const Container = styled.div`
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 120%;

  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 24px;
  gap: 66px;
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
    flex-direction: row-reverse;
    gap: 0;
    align-items: flex-start;
    justify-content: start;
    padding: 40px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 1440px;
    padding-left: 132px;
    padding-right: 132px;
    flex-direction: row;
    margin: 0 auto;
    justify-content: flex-start;
  }
`;

export const ContainerBackground = styled.div`
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-image: url(${main_mobile}), url(${main_mobile2});
  height: 100vh;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    background-image: url(${main_tablet}), url(${main_tablet2}),
      url(${bottle_sign_in}), url(${bottle_sign_in2});
    background-position: 86%;
    height: 100vh;
    background-size: contain;
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    background-image: url(${main_desk}), url(${main_desk2});
    background-size: 100%;
  }
`;

export const Image = styled.img`
  height: 210px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    /* height: 540px;
    position: relative;
    left: -160px; */
    display: none;

    @media screen and (min-width: ${theme.breakpoint.desktop}) {
      /* height: 589px;
      left: 10px;
      margin-right: -350px;
      margin-left: 150px;
      display: flex; */
      height: 589px;
      display: block;
    }
  }
`;

export const SvgOpen = styled(SVGOpen)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${(props) => (props.errors ? '213px' : '187px')};
  height: auto;
  cursor: pointer;
`;

export const SvgOpenTwo = styled(SVGOpenTwo)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${(props) => (props.errors ? '326px' : '276px')};
  height: auto;
  cursor: pointer;
`;

export const SvgClose = styled(SVGClose)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${(props) => (props.errors ? '213px' : '187px')};
  height: auto;
  cursor: pointer;
`;

export const SvgCloseTwo = styled(SVGCloseTwo)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${(props) => (props.errors ? '326px' : '276px')};
  height: auto;
  cursor: pointer;
`;
