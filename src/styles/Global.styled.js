import { css } from '@emotion/react';

export const globalStyles = css`
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    width: 100%;
    height: 100vh;
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  img {
    display: block;
  }
  button {
    cursor: pointer;
  }
  @font-face {
    font-family: 'Roboto-Bold';
    src: url('assets/fonts/Roboto-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto-Regular';
    src: url('assets/fonts/Roboto-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Roboto-Medium';
    src: url('assets/fonts/Roboto-Medium.ttf') format('truetype');
  }
`;
