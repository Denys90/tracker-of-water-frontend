import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const DrinkListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;
export const DrinkListUl = styled.div`
  height: 212px;
  overflow: auto;
  margin-bottom: 12px;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${theme.colors.paleBlue};
    width: 2px;
    margin: 0 auto;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    width: 6px;
    height: 100px;
    border-radius: 3px;
    background-color: ${theme.colors.skyBlue};
  }
`;
export const DrinkListRow = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-top: 12px;
  ::after {
    content: '';
    height: 1px;
    width: 98%;
    position: absolute;
    bottom: 5px;
    left: 0;
    display: block;
    background-color: ${theme.colors.paleBlue};
  }
`;
export const DrinkListTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  /* font-family: 'Roboto'; */
  color: ${theme.colors.black};
  text-align: left;
  line-height: 1.25;
  margin-bottom: 15px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 1.23;
  }
`;
export const DrinkListItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  h4 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    color: ${theme.colors.blue};
  }
  p {
    font-size: 12px;
    line-height: 24px;
    font-weight: 400;
    color: ${theme.colors.black};
    span {
      text-transform: uppercase;
    }
    svg {
      width: 26px;
      height: 26px;
    }
  }
`;
export const DrinkGlass = styled.svg`
  width: 26px;
  height: 26px;
  fill: transparent;
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`;
export const DrinkButtons = styled.div`
  display: flex;
  gap: 18px;
  margin-right: 10px;
`;
export const DrinkButtonPlus = styled.svg`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${theme.colors.skyBlue};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${theme.colors.skyBlue};
  }
`;
export const DrinkButtonMinus = styled.svg`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${theme.colors.brightRed};
  fill: transparent;
  &:hover {
    border-bottom: 1px solid ${theme.colors.brightRed};
  }
`;
export const DrinkListAddWater = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: transparent;
  color: ${theme.colors.blue};
  border: none;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  stroke: ${theme.colors.blue};
  max-width: 155px;

  & svg {
    width: 16px;
    height: 16px;
    fill: ${theme.colors.blue};
    stroke: transparent;
    padding-bottom: 2px;
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 18px;
    line-height: 1.33;

    & svg {
      width: 24px;
      height: 24px;
    }

    &:hover {
      color: ${theme.colors.orange};
      & svg {
        fill: ${theme.colors.orange};
      }
    }
  }
`;
