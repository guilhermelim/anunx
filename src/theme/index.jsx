import { css } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
  },
});

const transitionEffect = `color 350ms ease 0s, background 1000ms ease 0s`;
export const globalStyles = css`
  html,
  body {
    color: ${lightTheme.palette.text.primary};
    background: ${lightTheme.palette.background.default};
    transition: ${transitionEffect};
  }

  [data-theme='dark'],
  [data-theme='dark'] body {
    color: ${darkTheme.palette.text.primary};
    background: ${darkTheme.palette.background.default};
  }
`;
