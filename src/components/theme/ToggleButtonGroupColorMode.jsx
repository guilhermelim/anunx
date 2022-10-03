/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import useSound from 'use-sound';
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const ToggleButtonGroupColorMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, systemTheme, setTheme } = useTheme();

  const [playOn] = useSound('sounds/theme/switch-on.mp3', { volume: 0.25 });
  const [playOff] = useSound('sounds/theme/switch-off.mp3', { volume: 0.25 });

  const [mode, setMode] = React.useState(theme);
  const handleChange = (event, newMode) => {
    if (newMode !== null) {
      // change mode in ToggleButtonGroup
      setMode(newMode);
      // change theme
      setTheme(newMode);
      // play sound
      const themeNow = newMode === 'system' ? systemTheme : newMode;
      const themeBefore = resolvedTheme;
      if (themeNow !== themeBefore) {
        themeBefore === 'light' ? playOff() : playOn();
      }
    }
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Box>
      <Typography textAlign="left">Modo</Typography>

      <ToggleButtonGroup exclusive value={mode} onChange={handleChange}>
        <ToggleButton value="light">
          <LightModeIcon /> Claro
        </ToggleButton>
        <ToggleButton value="system">
          <SettingsBrightnessIcon /> Sistema
        </ToggleButton>
        <ToggleButton value="dark">
          <DarkModeOutlinedIcon /> Escuro
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default ToggleButtonGroupColorMode;
