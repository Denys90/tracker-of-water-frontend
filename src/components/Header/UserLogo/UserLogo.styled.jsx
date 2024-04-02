import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const UserLogoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
`;

export const UserLogoTitle = styled.p`
  font-size: 18px;
  line-height: 1.33em;

  @media (min-width: ${theme.breakpoint.mobile}) {
    font-size: 16px;
    line-height: 1.25em;
  }
`;

export const UserLogoBtn = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4px;
  background-color: transparent;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33em;
  padding: 0;
`;

export const UserAvatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

export const UserDefaultAvatar = styled.span`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${theme.breakpoint.mobile}) {
    font-size: 14px;
    line-height: 1.25em;
  }
`;

export const UserModalIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${theme.colors.accent};
  stroke: ${theme.colors.accent};
  transition: transform 0.5s ease;

  &:hover,
  &:focus {
    stroke: ${theme.colors.secondaryYellow};
  }
`;
