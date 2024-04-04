import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 22px;
  margin: 0 auto;
  max-width: 704px;
  padding-bottom: 22px;

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    flex-direction: row;
    gap: 32px;
    max-width: 1176px;
  }
`;

export const HomeRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.lightBlue};
  padding: 20px 24px;
  border-radius: 10px;
  max-width: 704px;
  box-shadow: ${theme.boxShadowBtn.Btn};
  gap: 24px;

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 590px;
  }
`;

export const HomeLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    max-width: 50%;
  }
`;

export const HomeContainer = styled.div`
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
