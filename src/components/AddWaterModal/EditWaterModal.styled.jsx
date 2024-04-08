import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const BoxEditModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  /* h3 {
    margin-bottom: 16px;
    color: ${theme.colors.black};
    font-size: 18px;
    font-weight: 700;
    line-height: 1.1;
  } */

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    min-width: 704px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 32px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    min-width: 592px;
  }
`;

export const Title = styled.h2`
  color: ${theme.colors.black};
  width: 200px;
  font-size: 26px;
  line-height: 123%;
  font-weight: 500;
  margin: 0;
`;

export const EditMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const WaterItem = styled.div`
  display: flex;
  align-items: center;
  width: 256px;
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
  svg {
    width: 36px;
    height: 36px;
  }
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
  width: 256px;
`;
