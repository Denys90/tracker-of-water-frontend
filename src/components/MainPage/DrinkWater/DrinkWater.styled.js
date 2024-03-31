import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Title = styled.h2`
  font-weight: 500;
  font-size: 18px;
  color: ${theme.colors.black};
  margin-bottom: 12px;
`;

export const Item = styled.li`
  font-size: 16px;
  color: ${theme.colors.black};
  line-height: 20px;

  margin-bottom: 16px;
  position: relative;
  padding-left: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: ${theme.colors.blue};
    border-radius: 50%;
  }

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    list-style-position: inside;
  }
`;
export const Wrapper = styled.div`
  display: inline-block;
  margin: 0;
`;

export const Container = styled.div`
  display: inline-block;

  width: 280px;

  padding: 24px 16px;
  background-color: ${theme.colors.lightBlue};
  box-shadow: 0 4px 14px rgba(64, 123, 255, 0.3);
  border-radius: 10px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    padding: 32px 24px;
    width: auto;
    list-style-position: inside;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;
