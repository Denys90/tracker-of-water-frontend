import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const MainPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    gap: 60px;
    align-items: stretch;
    padding-top: 32px;
    padding-bottom: 32px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    gap: 81px;
    padding-top: 195px;
    padding-bottom: 195px;
  }
`;
