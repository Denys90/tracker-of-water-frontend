import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Popup = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity 0.3s;
`;
export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`;
export const ModalContent = styled.div`
  position: relative;
  padding: 20px;
  width: 450px;
  height: auto;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: ${theme.colors.white};
  backdrop-filter: blur(5px);
  transform: translateY(-50px);
  transition:
    opacity 0.3s,
    transform 0.3s;
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  color: ${theme.colors.blue};
  display: block;
  border: none;
  background-color: transparent;
  padding: 0px;
  cursor: pointer;
`;
