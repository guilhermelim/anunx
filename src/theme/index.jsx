import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#ffffff',
        },
        background: {
            default: 'rgb(242, 244, 245)',
            paper: '#fff',
        },
    },
})

export default theme