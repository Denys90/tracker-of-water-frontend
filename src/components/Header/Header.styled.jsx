import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;

  @media (min-width: ${theme.breakpoint.tablet}) {
    padding-top: 16px;
  }

  @media (min-width: 1440px) {
    padding-top: 8px;
  }
`;

export const WrapHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: column;

  @media (min-width: ${theme.breakpoint.tablet}) {
    gap: 14px;
    flex-direction: row;
  }

  @media (min-width: ${theme.breakpoint.desktop}) {
    gap: 20px;
  }
`;

export const Containers = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 1440px;
    padding-left: 132px;
    padding-right: 132px;
  }
`;
