import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const HomeRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.lightBlue};
  padding: 24px 8px;
  border-radius: 10px;
  max-width: 704px;
  box-shadow: ${theme.boxShadowBtn.Btn};

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    max-width: 592px;
  }
`;
