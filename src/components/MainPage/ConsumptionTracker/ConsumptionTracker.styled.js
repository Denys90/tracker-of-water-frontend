import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
  color: ${theme.colors.black};
  line-height: 32px;
  margin-bottom: 16px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 36px;
    line-height: 42px;
  }
`;

export const Subtitle = styled.p`
  font-size: 24px;
  color: ${theme.colors.black};
  line-height: 30px;
  margin-bottom: 24px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 32px;
    br {
      display: none;
    }
  }
`;

export const Benefits = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
  color: ${theme.colors.black};
  line-height: 20px;
  margin-bottom: 24px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Item = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Tracker = styled.div`
  display: inline-block;
  max-width: 280px;
  margin: auto;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    max-width: 100%;
    margin: 0;
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    min-width: 439px;
  }
`;

export const Image = styled.svg`
  stroke: #407bff;
  fill: none;
  width: 32px;
  height: 32px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    width: 40px;
    height: 40px;
  }
`;

export const BenefitsTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  color: ${theme.colors.black};
  line-height: 20px;
  margin-bottom: 12px;
`;
