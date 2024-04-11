import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const TryTracker = styled.button`
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
    width: 336px;
    padding: 10px 30px;
    font-size: 18px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 384px;
  }
`;

export const AddWater = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  line-height: 1.3;
  width: 280px;
  padding: 6px 76px;
  border-radius: 10px;
  border: none;
  background-color: ${theme.colors.blue};
  box-shadow: ${theme.boxShadowBtn.Btn};
  color: ${theme.colors.white};
  cursor: pointer;

  &:hover {
    box-shadow: ${theme.boxShadowBtn.activeBtn};
  }

  &:active {
    box-shadow: ${theme.boxShadowBtn.activeBtn};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 336px;
    padding: 10px 104px;
    font-size: 18px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 178px;
    padding: 10px 20px;
  }
`;
