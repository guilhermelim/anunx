import { createTheme, css } from '@mui/material/styles'

export const globalStyles = css`
  :root {
    body {
      background-color: #ffffff;
      color: #121212;
    }
  }
  [data-theme="dark"] {
    body {
      background-color: #121212;
      color: #ffffff;
    }
  }
`

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#9147FF',
    },
    secondary: {
      main: '#2a48f3',
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9147FF',
    },
    secondary: {
      main: '#2a48f3',
    },
  },
})
