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
  display: flex;
  align-items: center;
  padding: 0px;
  width: 384px;
  margin-right: 200px;
  @media screen and (max-width: ${theme.breakpoint.desktop}) {
    margin-right: 0;
    width: 336px;
  }
  @media screen and (max-width: ${theme.breakpoint.tablet}) {
    width: 280px;
  }
`;
export const Title = styled.h2`
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  width: 384px;
  @media screen and (max-width: ${theme.breakpoint.desktop}) {
    width: 336px;
  }
  @media screen and (max-width: ${theme.breakpoint.tablet}) {
    width: 280px;
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
  width: 384px;
  @media screen and (max-width: ${theme.breakpoint.desktop}) {
    width: 336px;
  }
  @media screen and (max-width: ${theme.breakpoint.tablet}) {
    width: 280px;
  }
`;
export const LabelField = styled.label`
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  width: 384px;
  @media screen and (max-width: ${theme.breakpoint.desktop}) {
    width: 336px;
  }
  @media screen and (max-width: ${theme.breakpoint.tablet}) {
    width: 280px;
  }
`;
export const SubmitButton = styled.button`
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
  @media screen and (max-width: ${theme.breakpoint.desktop}) {
    width: 336px;
  }
  @media screen and (max-width: ${theme.breakpoint.tablet}) {
    width: 280px;
  }
`;
export const LinkBtn = styled.button`
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
  @media screen and (max-width: ${theme.breakpoint.desktop}) {
    width: 336px;
  }
  @media screen and (max-width: ${theme.breakpoint.tablet}) {
    width: 280px;
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
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

export const Container = styled.div`
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: url(${main_mobile}), url(${main_mobile2});

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    background-image: url(${main_tablet}), url(${main_tablet2});
    min-height: 100vh;
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    background-image: url(${main_desk}), url(${main_desk2});
    min-height: 100vh;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  margin: 0 auto;

  @media screen and (min-width: ${theme.breakpoint.tablet}) and (max-width: ${theme.breakpoint.desktop}) {
    flex-direction: row-reverse;
    margin-left: 300px;
  }
    @media screen and (max-width:767px) {
    flex-direction: column-reverse;
    margin-top: 50px;
  }
`;

export const Image = styled.img`
  height: 588.5px;
  @media screen and (min-width: ${theme.breakpoint.tablet}) and (max-width: ${theme.breakpoint.desktop}) {
    height: 474.26px;
    position: relative;
    left: -200px;
    top: 100px;
  }
  @media screen and (min-width: ${theme.breakpoint.mobile}) and (max-width: 767px) {
    height: 181.74px;
  }
`

export const SvgOpen = styled(SVGOpen)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${props => props.error ? '213px' : '187px'};
  height: auto;
  cursor: pointer;
`;

export const SvgOpenTwo = styled(SVGOpenTwo)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${props => props.error ? '326px' : '276px'};
  height: auto;
  cursor: pointer;
`;

export const SvgClose = styled(SVGClose)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${props => props.error ? '213px' : '187px'};
  height: auto;
  cursor: pointer;
`;

export const SvgCloseTwo = styled(SVGCloseTwo)`
  position: absolute;
  right: 10px;
  width: 20px;
  top: ${props => props.error ? '326px' : '276px'};
  height: auto;
  cursor: pointer;
`;
