import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const CalenderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    color: ${theme.colors.black};
    margin-bottom: 6px;
  }
  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    margin-bottom: 24px;
    h3 {
      font-size: 26px;
      line-height: 32px;
    }
  }
`;
export const CalenderNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const DaysList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 50px);
  justify-content: space-between;
  gap: 16px;
  height: 446px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 50px);
    gap: 20px;
    height: 268px;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    color: ${theme.colors.blue};
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    padding-left: 6px;
    padding-right: 6px;
    width: 126px;
    text-align: center;
  }
`;
export const MonthButton = styled.svg`
  width: 6px;
  height: 10px;
  background: transparent;
  fill: ${theme.colors.blue};

  &:hover {
    fill: ${theme.colors.orange};
  }
`;
export const DaysPercentage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.secondaryLightBlue};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 12px;
  }
`;
