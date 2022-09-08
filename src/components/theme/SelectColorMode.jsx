import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes"
import { Select, MenuItem } from "@mui/material"

const SelectColorMode = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])
  if (!mounted) return null


  return (
    <Select
      labelId="select-color-mode"
      id="select-color-mode"
      value={theme}
      onChange={(a) => setTheme(a.target.value)}
      sx={{ minWidth: 'calc(100%)' }}
    >
      <MenuItem value="system">System</MenuItem>
      <MenuItem value="light">Light</MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
    </Select>
  )
}

export default SelectColorMode