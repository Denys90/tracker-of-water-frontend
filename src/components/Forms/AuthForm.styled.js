import styled from '@emotion/styled';
import { theme } from 'styles/theme';
import { Field, ErrorMessage } from 'formik';

import { ReactComponent as SVGOpen } from 'assets/images/icons/Vector.svg';
import { ReactComponent as SVGOpenTwo } from 'assets/images/icons/Vector.svg';
import { ReactComponent as SVGClose } from 'assets/images/icons/Vector2.svg';
import { ReactComponent as SVGCloseTwo } from 'assets/images/icons/Vector2.svg';

// import main_mobile from 'assets/images/mobile/background_element_home_mobile@1x.png';
// import main_mobile2 from 'assets/images/mobile/background_element_home_mobile@2x.png';
// import main_tablet from 'assets/images/tablet/background_element_home_mobile@1x.png';
// import main_tablet2 from 'assets/images/tablet/background_element_home_mobile@2x.png';
// import main_desk from 'assets/images/desc/background_element_main_desc@1x.png';
// import main_desk2 from 'assets/images/desc/background_element_main_desc@2x.png';

import main from 'assets/images/desc/x1.png';
import main2 from 'assets/images/desc/x2.png';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  padding: 0px;
  width: 280px;
`;
export const Title = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 16px;
  width: 280px;
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
`;
export const LabelField = styled.label`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  width: 280px;
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

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    display: flex;
  }
  @media screen and (max-width: ${theme.breakpoint.desktop}) {
  }
`;

export const Image = styled.img`
  height: 181px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    background-image: url(${main}), url(${main2});
    display: block;
    height: 474px;

    top: 100px;
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    background-image: url(${main}), url(${main2});
    height: 588px;
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
