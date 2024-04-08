import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const UserLogoWrap = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  background-color: transparent;
  border: none;
`;
export const UserName = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.33em;
  color: ${theme.colors.blue};
  margin: 0;
  @media screen and (min-width: ${theme.breakpoint.mobile}) {
    font-size: 18px;
    line-height: 1.25em;
  }
`;
export const UserArrow = styled.svg`
  height: 16px;
  width: 16px;
  padding-top: 4px;
  fill: ${theme.colors.blue};

  &:hover,
  &:focus {
    fill: ${theme.colors.orange};
  }
`;

export const Avatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;
export const AuthPopover = styled.div`
  position: absolute;
  z-index: 20;
  top: 56px;
  right: 0px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${theme.colors.white};
  padding: 16px;
  border-radius: 10px;
  box-shadow: ${theme.boxShadowBtn.Btn};
  right: 20px;
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    right: 32px;
  }
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    right: 270px;
  }
`;
export const PopoverBtn = styled.button`
  background-color: ${theme.colors.white};
  text-decoration: none;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.33em;
  color: ${theme.colors.blue};
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    height: 16px;
    width: 16px;
    stroke: ${theme.colors.blue};
    fill: transparent;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.orange};
    svg {
      stroke: ${theme.colors.orange};
      fill: transparent;
    }
  }
`;
