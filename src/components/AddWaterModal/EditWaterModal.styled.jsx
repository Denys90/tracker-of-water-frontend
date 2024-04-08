import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const BoxEditModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 256px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 656px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 544px;
  }
`;

export const Title = styled.h2`
  color: ${theme.colors.black};
  width: 200px;
  font-size: 26px;
  line-height: 123%;
  font-weight: 500;
  margin: 0;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 384px;
  }
`;

export const EditMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 544px;
  }
`;

export const WaterItem = styled.div`
  display: flex;
  align-items: center;
  width: 208px;
  height: 52px;
  border-radius: 10px;
  padding: 8px 24px;
  gap: 12px;
  background-color: ${theme.colors.lightBlue};
  h4 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    margin: 0;
    color: ${theme.colors.blue};
  }
  p {
    font-size: 12px;
    line-height: 24px;
    color: ${theme.colors.black};
    margin: 0;
    span {
      text-transform: uppercase;
    }
  }
`;

export const DrinkGlass = styled.svg`
  width: 36px;
  height: 36px;
  fill: transparent;
`;

export const EditWater = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  div {
    display: flex;
    align-items: center;
  }
`;

export const Subtitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  margin: 0;
  color: ${theme.colors.black};
`;

export const AddParagraph = styled.p`
  font-size: 16px;
  line-height: 111%;
  color: ${theme.colors.black};
  margin: 0;
`;

export const AddDelWater = styled.div`
  gap: 7px;
  width: 194px;
  height: 44px;
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
  padding: 10px;

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

export const Label = styled.div`
  background: ${theme.colors.paleBlue};
  border-radius: 40px;
  width: 92px;
  height: 36px;
`;

export const Water = styled.p`
  color: ${theme.colors.blue};
  align-items: center;
  justify-content: center;
  display: flex;
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  margin: 0 auto;
`;

export const EditTime = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const EditItemWater = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FooterModal = styled.div`
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
  width: 256px;
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

export const Input = styled.input`
  color: ${theme.colors.blue};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
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
