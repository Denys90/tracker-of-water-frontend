export const theme = {
  colors: {
    white: '#ffffff',
    black: '#2F2F2F',
    blue: '#407BFF',
    lightBlue: '#ECF2FF',
    brightRed: '#EF5050',
    skyBlue: '#9EBBFF',
    orange: '#FF9D43',
    paleBlue: '#D7E3FF',
    secondText: '#8F8F8F',
  },

  boxShadowBtn: {
    Btn: '0 4px 8px rgba(64, 123, 255, 0.34)',
    hoverBtn: '0 4px 14px rgba(64, 123, 255, 0.54)',
    activeBtn: 'none',
  },

  breakpoint: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1440px',
  },

  spacing: (value) => `${value * 8}px`,
};

// Спосіб застосування!
// import { theme } from 'styles/theme';
// color:${theme.colors.black}

// Спосіб застосування theme.spacing
//  margin: ${({ theme }) => theme.spacing(2)}; цей вираз дорівнює margin: 16px:

// Спосіб застосування
//  @media screen and (min-width: ${theme.breakpoint.tablet})
