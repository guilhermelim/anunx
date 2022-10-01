import React from 'react'
import Link from '../../utility/Link'
import { useSession } from 'next-auth/client'
import { Box, Container, AppBar, Toolbar, Typography, Button } from '@mui/material'

import ButtonAvatar from './ButtonAvatar'

const Header = () => {
  const [session] = useSession()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={3}>
        <Container maxWidth='lg'>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} >
              <Typography variant="h6" color='inherit' component={Link} href="/" sx={{ textDecoration: 'none' }}>
                Anunx
              </Typography>
            </Box>

            <Button
              color="inherit"
              variant="outlined"
              component={Link}
              noLinkStyle
              href={session ? '/user/publish' : '/auth/signin'}
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              Anunciar e Vender
            </Button>

            <ButtonAvatar />

          </Toolbar>
        </Container>
      </AppBar>
    </Box >
  )
}

export default Header