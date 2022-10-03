import React from 'react';
import { Container, Box, Divider, Typography, Grid } from '@mui/material';
import Copyright from '../Copyright';
import Link from '../../utility/Link';

const Footer = () => (
  <Container maxWidth="lg" component="footer" sx={{ pb: 6 }}>
    <Divider sx={{ mb: 4 }} />

    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={6} sm={3} md={2}>
        <Box align="center">
          <Typography
            color="inherit"
            component={Link}
            noLinkStyle
            href="/"
            variant="subtitle1"
            sx={{
              textDecoration: 'none',
              '&:hover': { opacity: [0.9, 0.8, 0.7] },
            }}
          >
            Ajuda e Contato
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <Box align="center">
          <Typography
            color="inherit"
            component={Link}
            noLinkStyle
            href="/"
            variant="subtitle1"
            sx={{
              textDecoration: 'none',
              '&:hover': { opacity: [0.9, 0.8, 0.7] },
            }}
          >
            Dicas de Segurança
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <Box align="center">
          <Typography
            color="inherit"
            component={Link}
            noLinkStyle
            href="/user/publish"
            variant="subtitle1"
            sx={{
              textDecoration: 'none',
              '&:hover': { opacity: [0.9, 0.8, 0.7] },
            }}
          >
            Anunciar e Vender
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <Box align="center">
          <Typography
            color="inherit"
            component={Link}
            noLinkStyle
            href="/about"
            variant="subtitle1"
            sx={{
              textDecoration: 'none',
              '&:hover': { opacity: [0.9, 0.8, 0.7] },
            }}
          >
            Sobre
          </Typography>
        </Box>
      </Grid>
    </Grid>

    <Box align="center" sx={{ mt: 3, mb: 1 }}>
      <Typography
        variant="h6"
        component={Link}
        noLinkStyle
        href="/"
        color="inherit"
        gutterBottom
        sx={{
          textDecoration: 'none',
          '&:hover': { opacity: [0.9, 0.8, 0.7] },
        }}
      >
        ANUNX
      </Typography>
    </Box>

    <Typography
      variant="subtitle1"
      align="center"
      color="text.secondary"
      component="p"
    >
      Feito com ❤️ por
      <Link
        color="inherit"
        rel="noopener noreferrer"
        href="https://github.com/guilhermelim"
        target="_blank"
        sx={{
          textDecoration: 'none',
          color: '#f98180',
          '&:hover': { opacity: [0.9, 0.8, 0.7] },
        }}
      >
        {' '}
        Guilherme Lima
      </Link>
      .
    </Typography>
    <Copyright />
  </Container>
);

export default Footer;
