import React, { useEffect, useState } from 'react'
import Link from '../../utility/Link'
import { Button, Divider, MenuItem, Typography } from '@mui/material'

import ToggleButtonGroupColorMode from '../theme/ToggleButtonGroupColorMode';
const MenuAvatar = ({ closeMenu }) => {
  return (
    <>
      <MenuItem onClick={closeMenu} component={Link} noLinkStyle href="/user/dashboard">
        <Typography textAlign="center">Meus anúncios</Typography>
      </MenuItem>

      <MenuItem onClick={closeMenu} component={Link} noLinkStyle href="/user/publish">
        <Typography textAlign="center">Publicar novo anúncio</Typography>
      </MenuItem>

      <Divider />

      <MenuItem onClick={closeMenu}>
        <ToggleButtonGroupColorMode />
      </MenuItem>

      <Divider />

      <MenuItem onClick={closeMenu}>
        <Typography textAlign="center">Sair</Typography>
      </MenuItem>
    </>
  )
}

export default MenuAvatar