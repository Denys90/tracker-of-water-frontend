import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const ContainerPopUp = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 12px;
  gap: 24px;
  width: 232px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 544px;
    margin: 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h2 {
    color: ${theme.colors.black};
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
    margin: 0;
  }

  p {
    color: ${theme.colors.black};
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    margin: 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 24px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: flex-end;
    column-gap: 24px;
  }
`;

export const ButtonCancel = styled.button`
  width: 232px;
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 30px 8px 30px;
  flex: none;
  order: 1;
  flex-grow: 0;
  border-radius: 10px;
  background-color: ${theme.colors.paleBlue};
  border: none;
  height: 44px;
  padding: 10px 30px 10px 30px;

  color: ${theme.colors.blue};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;

  &:hover {
    box-shadow: ${theme.boxShadowBtn.Btn};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 160px;
  }
`;

export const ButtonDelete = styled.button`
  width: 232px;
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 30px 8px 30px;
  flex: none;
  order: 1;
  flex-grow: 0;
  border-radius: 10px;
  background-color: ${theme.colors.brightRed};
  border: none;
  height: 44px;
  padding: 10px 30px 10px 30px;

  color: ${theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;

  &:hover {
    box-shadow: ${theme.boxShadowBtn.Btn};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 160px;
  }
`;
