import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const ProgressDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    gap: 23px;
  }
`;
export const ProgressTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  color: ${theme.colors.blue};
  text-align: left;
  line-height: 1;
  width: 100%;
`;
export const ProgressDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ProgressBox = styled.div`
  width: 256px;
  margin: 5px 14px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 325px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    width: 360px;
  }
`;
export const DrinkBar = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${theme.colors.paleBlue};
`;
export const DrinkPer = styled.span`
  /* width: 50%; */
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${theme.colors.skyBlue};
  transition: width 0.5s ease-out;
  position: relative;

  ::before {
    position: absolute;
    display: block;
    top: 0;
    right: -7px;
    content: '';
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: ${theme.colors.white};
    border: solid 1px ${theme.colors.blue};

    margin-top: -3px;
  }
`;
export const MarksContainer = styled.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;
export const LeftMark = styled.span`
  transform: translateX(-50%);
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${theme.colors.blue};

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    color: ${theme.colors.paleBlue};
  }
`;
export const RightMark = styled.span`
  transform: translateX(50%);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${theme.colors.blue};

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.paleBlue};
  }
`;
export const Mark = styled.span`
  position: absolute;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  margin-bottom: 4px;

  color: ${theme.colors.blue};
  left: ${(props) => props.left};

  transition: all 0.5s ease-out;

  &::before {
    content: '|';
    justify-content: center;
    align-items: center;
    color: ${theme.colors.paleBlue};
    font-size: 12px;
  }
`;
