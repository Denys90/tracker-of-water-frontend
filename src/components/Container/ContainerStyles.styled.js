import styled from 'styled-components';
import { theme } from 'styles/theme';

export const ContainerStyles = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    padding-left: 132px;
    padding-right: 132px;
  }
`;
