import styled from '@emotion/styled';
import { theme } from 'styles/theme';
import { Field, ErrorMessage } from 'formik';

import { ReactComponent as SVGOpen } from 'assets/images/icons/Vector.svg';
import { ReactComponent as SVGOpenTwo } from 'assets/images/icons/Vector.svg';
import { ReactComponent as SVGClose } from 'assets/images/icons/Vector2.svg';
import { ReactComponent as SVGCloseTwo } from 'assets/images/icons/Vector2.svg';

import main_mobile from 'assets/images/mobile/background_element_home_mobile@1x.png';
import main_mobile2 from 'assets/images/mobile/background_element_home_mobile@2x.png';
import main_tablet from 'assets/images/tablet/background_element_home_mobile@1x.png';
import main_tablet2 from 'assets/images/tablet/background_element_home_mobile@2x.png';
import main_desk from 'assets/images/desc/background_element_main_desc@1x.png';
import main_desk2 from 'assets/images/desc/background_element_main_desc@2x.png';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  padding: 0px;
  width: 280px;
  margin: 0 auto;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 336px;
    height: ${(props) => (props.signup ? '404px' : '312px')};
    margin-top: 40px;
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    margin-right: 50px;
    width: 384px;
    top: 550px;
    flex-direction: column;
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
  width: 280px;
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

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
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
  background-image: url(${main_mobile}), url(${main_mobile2});
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    background-image: url(${main_tablet}), url(${main_tablet2});
    /* min-height: 100vh; */
    height: 350px;
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    background-image: url(${main_desk}), url(${main_desk2});
    /* min-height: 100vh; */
    height: 470px;
    background-size: cover;
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    flex-direction: row-reverse;
    margin: 0;
    margin-left: 260px;
  }
  @media screen and (max-width: ${theme.breakpoint.desktop}) {
    flex-direction: row-reverse;
    margin: 0;
    margin-left: 260px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    margin: 0;
    margin-top: 40px;
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    flex-wrap: wrap-reverse;
    margin-top: 0;
    margin-left: 120px;
    margin-right: 220px;
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  height: 210px;
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    display: block;
    height: 475px;
    position: relative;
    top: 100px;
  }
  @media screen and (max-width: ${theme.breakpoint.desktop}) {
    height: 475px;
    position: relative;

    top: 100px;
  }

  /* @media screen and (min-width: ${theme.breakpoint.mobile}) {
    height: 182px;
  }
  @media screen and (max-width: 767px) {
    height: 182px;
  } */
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    height: 589px;
    position: relative;
    top: 150px;
    left: -370px;
  }
`;

export const SvgOpen = styled(SVGOpen)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${(props) => (props.error ? '213px' : '187px')};
  height: auto;
  cursor: pointer;
`;

export const SvgOpenTwo = styled(SVGOpenTwo)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${(props) => (props.error ? '326px' : '276px')};
  height: auto;
  cursor: pointer;
`;

export const SvgClose = styled(SVGClose)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${(props) => (props.error ? '213px' : '187px')};
  height: auto;
  cursor: pointer;
`;

export const SvgCloseTwo = styled(SVGCloseTwo)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${(props) => (props.error ? '326px' : '276px')};
  height: auto;
  cursor: pointer;
`;
