import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const NormaDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NormaTitle = styled.h3`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  font-family: 'Roboto-Medium';
  color: ${theme.colors.black};
`;

export const NormaWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.black};
  p {
    font-size: 22px;
    line-height: 22px;
    font-weight: 600;
    font-family: 'Roboto-Bold';
    color: ${theme.colors.blue};
  }
`;
