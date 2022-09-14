import React from 'react'
import Link from '../../utility/Link'
import { Box, Container, AppBar, Toolbar, Typography, Button } from '@mui/material'

import ButtonAvatar from './ButtonAvatar'

const Header = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={3}>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography variant="h6" color='inherit' component={Link} href="/" sx={{ ml: 0, flexGrow: 1, textDecoration: 'none' }}>
              Anunx
            </Typography>

            <Button
              color="inherit"
              variant="outlined"
              component={Link}
              noLinkStyle
              href="/user/publish"
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              Anunciar e Vender
            </Button>

            <ButtonAvatar />

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header