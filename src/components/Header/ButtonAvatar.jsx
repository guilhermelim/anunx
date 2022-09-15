import React from 'react'
import { Box, Typography, Button, IconButton, Tooltip, Menu, Card, CardMedia, CardContent } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import MenuAvatar from './MenuAvatar'
import Avatar from '../Avatar'
import { Stack } from '@mui/system'

const ButtonAvatar = () => {
  const [anchorUserMenu, setAnchorUserMenu] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorUserMenu(event.currentTarget);
  }

  const handleCloseUserMenu = () => {
    setAnchorUserMenu(null);
  }

  return (
    <Box sx={{ pl: 1, flexGrow: 0 }}>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        color="inherit" variant="text" onClick={handleOpenUserMenu}
      >
        <Tooltip title="Abrir Configurações">
          <IconButton variant="text" sx={{ p: 0 }}>
            {
              true === true
                ? <Avatar name="Guilherme Lima" image="https://avatars.githubusercontent.com/guilhermelim" />
                : <AccountCircleIcon fontSize="large" sx={{ color: 'white' }} />
            }
          </IconButton>
        </Tooltip>
        <Typography variant="subtitle2" component="div" sx={{ ml: 1, flexGrow: 1, color: 'white', textTransform: 'uppercase' }}>
          Guilherme Lima
        </Typography>
      </Stack>

      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorUserMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorUserMenu)}
        onClose={handleCloseUserMenu}
      >
        <MenuAvatar closeMenu={handleCloseUserMenu} />
      </Menu>
    </Box>
  )
}

export default ButtonAvatar