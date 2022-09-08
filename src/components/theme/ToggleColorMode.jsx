import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes"
import { Button } from "@mui/material"
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ToggleColorMode = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])
    if (!mounted) return null


    return (
        <Button
            labelId="toggle-color-mode"
            id="toggle-color-mode"
            sx={{ minWidth: 'calc(100%)' }}
            style={{ background: 'linear-gradient(to top right, #2a48f3 0%, #c32cc2 100%)' }}
            variant="contained"
            endIcon={
                resolvedTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />
            }
            onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        >
            Toggle {resolvedTheme === "light" ? "dark" : "light"} mode
        </Button>
    )
}

export default ToggleColorMode