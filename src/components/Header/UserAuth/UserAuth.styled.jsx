import styled from '@emotion/styled';

import { theme } from 'styles/theme';

export const UserAuthBtn = styled.button`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33em;
  background-color: transparent;
  padding: 0px;
  border: none;
  color: ${theme.colors.blue};

  &:hover,
  &:focus {
    color: ${theme.colors.orange};
  }

  @media screen and (min-width: ${theme.breakpoint.mobile}) {
    font-size: 16px;
    line-height: 1.25em;
  }
`;

export const SignInIcon = styled.svg`
  margin-left: 8px;
  width: 28px;
  height: 28px;
  stroke: ${theme.colors.black};
  fill: transparent;
`;

