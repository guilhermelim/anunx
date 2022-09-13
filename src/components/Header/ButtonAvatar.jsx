import React from 'react'
import { Box, Typography, Button, IconButton, Tooltip, Avatar, Menu } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import MenuAvatar from './MenuAvatar'


const ButtonAvatar = () => {
  const [anchorUserMenu, setAnchorUserMenu] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorUserMenu(event.currentTarget);
  }

  const handleCloseUserMenu = () => {
    setAnchorUserMenu(null);
  }

  const getInitialsFromName = (nameString) => {
    const fullName = nameString.split(' ');
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    return initials.toUpperCase();
  }
  return (
    <Box sx={{ pl: 1, flexGrow: 0 }}>
      <Button color="inherit" variant="text" onClick={handleOpenUserMenu}>
        <Tooltip title="Abrir Configurações">
          <IconButton variant="text" sx={{ p: 0 }}>
            {
              true === true
                ?
                <>
                  <Avatar
                    alt="Guilherme Lima"
                    src="https://avatars.githubusercontent.com/guilhermelim"
                  >
                    {getInitialsFromName('Guilherme Lima')}
                  </Avatar>
                </>
                : <AccountCircleIcon fontSize="large" sx={{ color: 'white' }} />
            }

          </IconButton>
        </Tooltip>
        <Typography variant="subtitle2" component="div" sx={{ ml: 1, flexGrow: 1, color: 'white' }}>
          Guilherme Lima
        </Typography>
      </Button>

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