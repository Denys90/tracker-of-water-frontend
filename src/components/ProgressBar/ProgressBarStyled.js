import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const ProgressDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ProgressTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  /* font-family: 'Roboto'; */
  color: ${theme.colors.blue};
  text-align: left;
  line-height: 1;
`;

export const ProgressBox = styled.div`
  width: 300px;
  margin: 5px 14px;
`;
export const DrinkBar = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  display: block;
  background-color: ${theme.colors.paleBlue};
`;

export const DrinkPer = styled.span`
  width: 50%;
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
    right: 0;
    content: '';
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: ${theme.colors.white};
    border: solid 1px ${theme.colors.blue};

    margin-top: -3px;
  }
`;

export const BarLabel = styled.span`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: ${theme.colors.blue};
`;

export const MarksContainer = styled.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  gap: 4px;
  color: ${theme.colors.blue};

  &::before {
    content: '|';
    justify-content: center;
    align-items: center;
    color: ${theme.colors.paleBlue};
  }
`;
