import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Tooltip,
  Menu,
  Stack,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSession } from 'next-auth/client';
import MenuAvatar from './MenuAvatar';
import Avatar from '../Avatar';
import Link from '../../utility/Link';

const ButtonAvatar = () => {
  const [anchorUserMenu, setAnchorUserMenu] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorUserMenu(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorUserMenu(null);
  };

  const [session] = useSession();
  // console.log(session.user.image);

  return (
    <Box sx={{ pl: 1, flexGrow: 0 }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        color="inherit"
        variant="text"
        onClick={handleOpenUserMenu}
      >
        <Tooltip title="Abrir Configurações">
          {session ? (
            <IconButton variant="text" sx={{ p: 0 }}>
              <Avatar name={session.user.name} image={session.user.image} />
            </IconButton>
          ) : (
            <IconButton
              variant="text"
              component={Link}
              href="/auth/signin"
              sx={{ p: 0, textDecoration: 'none' }}
            >
              <AccountCircleIcon fontSize="large" sx={{ color: 'white' }} />
            </IconButton>
          )}
        </Tooltip>
        {session ? (
          <Typography
            variant="subtitle2"
            component="div"
            sx={{
              ml: 1,
              flexGrow: 1,
              color: 'white',
              textTransform: 'uppercase',
            }}
          >
            {session.user.name}
          </Typography>
        ) : (
          // color='inherit'
          <Typography
            variant="subtitle2"
            component={Link}
            href="/auth/signin"
            sx={{
              ml: 1,
              flexGrow: 1,
              color: 'white',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Login
          </Typography>
        )}
      </Stack>

      {session ? (
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
      ) : null}
    </Box>
  );
};

export default ButtonAvatar;
