import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import useSound from 'use-sound'
import { Box, Typography, ButtonGroup, Button, ToggleButtonGroup, ToggleButton, Select, MenuItem } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'

const ButtonGroupColorMode = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, systemTheme, setTheme } = useTheme();

  const [playOn] = useSound('sounds/theme/switch-on.mp3', { volume: 0.25 })
  const [playOff] = useSound('sounds/theme/switch-off.mp3', { volume: 0.25 })

  const handleSelectColorMode = (color) => {
    const value = color
    // change theme
    setTheme(value)
    // play sound
    const themeNow = value === 'system' ? systemTheme : value
    const themeBefore = resolvedTheme
    if (themeNow !== themeBefore) {
      themeBefore === "light" ? playOff() : playOn()
    }
  }

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <Box >
      <Typography textAlign="left">Modo</Typography>

      <ButtonGroup variant="outlined" color="inherit" size="large" aria-label="large button group">
        <Button startIcon={<LightModeIcon />} onClick={() => handleSelectColorMode('light')}>Claro</Button>
        <Button startIcon={<SettingsBrightnessIcon />} onClick={() => handleSelectColorMode('system')}>Sistema</Button>
        <Button startIcon={<DarkModeOutlinedIcon />} onClick={() => handleSelectColorMode('dark')}>Escuro</Button>
      </ButtonGroup>
    </Box>
  )
}

export default ButtonGroupColorMode