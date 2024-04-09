import styled from '@emotion/styled';
import { Field } from 'formik';
import { theme } from 'styles/theme';

export const BoxAddModal = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 16px;
    color: ${theme.colors.black};
    font-size: 18px;
    font-weight: 700;
    line-height: 1.1;
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    min-width: 704px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    min-width: 592px;
  }
`;

export const AddParagraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${theme.colors.black};
  margin-bottom: 12px;
`;

export const AddWaterContainer = styled.div`
  margin-bottom: 24px;

  div {
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  color: ${theme.colors.black};
  font-size: 26px;
  line-height: 123%;
  font-weight: 500;
`;

export const Subtitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  margin-bottom: 16px;
`;

export const Water = styled.p`
  color: ${theme.colors.blue};
  align-items: center;
  justify-content: center;
  display: flex;
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  width: 92px;
  height: 36px;
  margin: 0 auto;
`;

export const Label = styled.div`
  background: ${theme.colors.paleBlue};
  border-radius: 40px;
  padding: 6px 10px;
  width: 92px;
  height: 36px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ButtonMl = styled.button`
  background-color: ${theme.colors.white};
  color: ${theme.colors.blue};
  border-radius: 30px;
  border: 1px solid ${theme.colors.skyBlue};
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 4px;

  &:hover {
    box-shadow: ${theme.boxShadowBtn.hoverBtn};
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${theme.colors.blue};
  fill: ${theme.colors.blue};
`;

export const AddTime = styled.div`
  margin-bottom: 24px;
`;

export const StyledSelect = styled.select`
  color: ${theme.colors.blue};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 95%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.paleBlue};
  background-color: ${theme.colors.white};

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 97%;
  }
  &:hover {
    border-color: ${theme.colors.blue};
  }
`;

export const Input = styled(Field)`
  color: ${theme.colors.blue};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 95%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.paleBlue};
  background-color: ${theme.colors.white};

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${theme.colors.skyBlue};
  }

  &:hover {
    color: ${theme.colors.blue};
    border: 1px solid ${theme.colors.blue};
  }

  &:focus {
    outline: none;
    border: 1px solid ${theme.colors.blue};
  }

  &:not(:placeholder-shown) {
    color: ${theme.colors.blue};
  }
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 97%;
  }
`;

export const FooterModal = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  span {
    color: ${theme.colors.blue};
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 24px;
    margin-top: 24px;
  }
`;

export const BtnSave = styled.button`
  box-sizing: border-box;
  display: inline-block;
  width: 280px;
  gap: 10px;
  padding: 8px 30px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  background-color: ${theme.colors.blue};
  box-shadow: ${theme.boxShadowBtn.Btn};
  color: ${theme.colors.white};
  cursor: pointer;

  &:hover {
    box-shadow: ${theme.boxShadowBtn.hoverBtn};
  }

  &:active {
    box-shadow: ${theme.boxShadowBtn.activeBtn};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    padding: 10px 30px;
    width: 160px;
    height: 44px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    padding: 10px 30px;
    width: 160px;
    height: 44px;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;
