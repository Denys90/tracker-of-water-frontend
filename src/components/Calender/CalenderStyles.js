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
export const DaysList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 50px);
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  height: 446px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 50px);
    gap: 20px;
    height: 268px;
  }
`;
export const DayButton = styled.button`
  padding: 7px 6px;
  width: 35px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: ${theme.colors.black};

  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.white};

  &.today {
    border: 1px solid ${theme.colors.blue};
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 16px;
    padding: 7px;
  }

  ${({ percent }) => {
    if (percent >= 100) {
      return `
      border: 1px solid  ${theme.colors.blue};
        
      `;
    } else if (percent > 0) {
      return `
      border: 1px solid ${theme.colors.orange};
        
      `;
    } else {
      return `
      border: 1px solid ${theme.colors.white};
      `;
    }
  }}

  &:hover {
    box-shadow: 0px 4px 8px ${theme.colors.skyBlue};
    border: 1px solid ${theme.colors.orange};
  }
`;

export const DayPercent = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  text-align: center;
  padding-left: 10px;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.6;
  color: ${theme.colors.skyBlue};

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 12px;
  }
`;

export const Popover = styled.div`
  margin: 0 auto;
  position: absolute;
  z-index: 20;
  top: 300px;
  background-color: ${theme.colors.white};
  border-radius: 10px;
  max-width: 280px;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);
  border-radius: 10px;
  padding: 24px 16px;

  p {
    font-size: 14px;
    color: ${theme.colors.black};
    font-weight: 400;
    padding-bottom: 3px;
    @media screen and (min-width: ${theme.breakpoint.tablet}) {
      font-size: 16px;
    }
  }
  span {
    font-size: 14px;
    font-weight: 500;
    color: ${theme.colors.blue};
    @media screen and (min-width: ${theme.breakpoint.tablet}) {
      font-size: 16px;
    }
  }
  button {
    margin-top: 10px;
  }
`;
