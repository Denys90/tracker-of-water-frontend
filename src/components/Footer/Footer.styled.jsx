import styled from '@emotion/styled';

import { theme } from 'styles/theme';

export const FooterContainer = styled.footer`
  position: relative;
  background: ${theme.colors.waves};
  min-height: 50px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 999;

  p {
    color: ${theme.colors.white};
    margin: 15px 0 10px 0;
    font-size: 1rem;
    font-weight: 300;
  }
`;

export const Wave = styled.div`
  position: absolute;
  top: -70px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url('https://i.ibb.co/wQZVxxk/wave.png');
  background-size: 1000px 100px;

  &#wave1 {
    z-index: 1000;
    opacity: 1;
    bottom: 0;
    animation: animateWaves 4s linear infinite;
  }

  &#wave2 {
    z-index: 999;
    opacity: 0.5;
    bottom: 10px;
    animation: animate 4s linear infinite !important;
  }

  &#wave3 {
    z-index: 1000;
    opacity: 0.2;
    bottom: 15px;
    animation: animateWaves 3s linear infinite;
  }

  &#wave4 {
    z-index: 999;
    opacity: 0.7;
    bottom: 20px;
    animation: animate 3s linear infinite;
  }

  @keyframes animateWaves {
    0% {
      background-position-x: 1000px;
    }
    100% {
      background-position-x: 0px;
    }
  }

  @keyframes animate {
    0% {
      background-position-x: -1000px;
    }
    100% {
      background-position-x: 0px;
    }
  }
`;
