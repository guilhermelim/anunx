import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { useTheme } from 'next-themes'

import { lightTheme, darkTheme } from '../theme'


const PageProvider = ({ children }) => {
    console.log(lightTheme.palette.background.default)

    const { resolvedTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState(darkTheme);
    useEffect(() => {
        resolvedTheme === "light"
            ? setCurrentTheme(lightTheme)
            : setCurrentTheme(darkTheme);
    }, [resolvedTheme]);

    return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
}

export default PageProvider;