import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import useSound from 'use-sound'
import { Button } from "@mui/material"
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ToggleColorMode = () => {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme, setTheme } = useTheme();

    const [playOn] = useSound('sounds/theme/switch-on.mp3', { volume: 0.25 })
    const [playOff] = useSound('sounds/theme/switch-off.mp3', { volume: 0.25 })

    const handleToggleButton = () => {
        // change theme
        setTheme(resolvedTheme === "light" ? "dark" : "light")
        // play sound
        resolvedTheme === "light" ? playOff() : playOn()
    }

    const handleChangeIcon = () => {
        return resolvedTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />
    }


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
            endIcon={handleChangeIcon()}
            onClick={handleToggleButton}
        >
            Toggle {resolvedTheme === "light" ? "dark" : "light"} mode
        </Button>
    )
}

export default ToggleColorMode