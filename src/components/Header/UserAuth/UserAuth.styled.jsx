import styled from '@emotion/styled';

export const UserAuthBtn = styled.button`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 48px;
  line-height: 1.33em;
  background-color: transparent;
  padding: 10px;
  border: none;
  color: #407BFF;

  &:hover,
  &:focus {
    color: #FF9D43;
  }

  @media screen and (min-width: 320px) {
    font-size: 26px;
    line-height: 1.25em;
  }
`;

export const SignInIcon = styled.svg`
  margin-left: 8px;
  width: 48px;
  height: 48px;
  stroke: #2F2F2F;
  fill: transparent;
`;