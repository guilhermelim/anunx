import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import useSound from 'use-sound'
import { Select, MenuItem } from '@mui/material'


const SelectColorMode = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, systemTheme, setTheme } = useTheme();

  const [playOn] = useSound('sounds/theme/switch-on.mp3', { volume: 0.25 })
  const [playOff] = useSound('sounds/theme/switch-off.mp3', { volume: 0.25 })

  const handleSelectChange = (e) => {
    const { value } = e.target
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
    <Select
      labelId="select-color-mode"
      id="select-color-mode"
      value={theme}
      onChange={handleSelectChange}
      sx={{ minWidth: 'calc(100%)' }}
    >
      <MenuItem value="system">System</MenuItem>
      <MenuItem value="light">Light</MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
    </Select>
  )
}

export default SelectColorMode