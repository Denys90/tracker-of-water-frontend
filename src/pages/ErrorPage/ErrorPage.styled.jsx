import styled from '@emotion/styled';
import { theme } from 'styles/theme';
import bubbles from '../../assets/images/desc/background_element_main_desc@1x.png';

export const Container = styled.div`
  position: relative;
  background-color: ${theme.colors.blue};
  background-image: url(${bubbles});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 111px;
  margin: 0;
  color: ${theme.colors.blue};

  text-shadow:
    0 0 5px ${theme.colors.white},
    0 0 10px ${theme.colors.white},
    0 0 20px ${theme.colors.white},
    0 0 40px ${theme.colors.white},
    0 0 80px ${theme.colors.white};
`;
export const Error = styled.h2`
  font-size: 42px;
  margin: 0;
  color: ${theme.colors.blue};
  text-shadow:
    0 0 5px ${theme.colors.white},
    0 0 10px ${theme.colors.white},
    0 0 20px ${theme.colors.white},
    0 0 40px ${theme.colors.white},
    0 0 80px ${theme.colors.white};
`;

export const Plit = styled.img`
  position: absolute;
  top: 249px;
  filter: drop-shadow(5px 5px 10px #ffffff);
`;
