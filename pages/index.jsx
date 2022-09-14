import React from 'react'
import Link from '../src/utility/Link';
import { Stack, Container, Box, Grid, Card, CardMedia, Typography, CardContent, Button, TextField, InputBase, IconButton, FormControl, InputLabel, FilledInput, InputAdornment, Paper } from "@mui/material"

import TemplateDefault from '../src/templates/Default'
import SearchIcon from '@mui/icons-material/Search'
import SearchOutlined from '@mui/icons-material/SearchOutlined'

const cards = [1, 2, 3]
const Home = () => {

  return (
    <TemplateDefault>

      <Container maxWidth="sm" sx={{ pt: 8, pb: 2, }}>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          O que deseja encontrar?
        </Typography>

        <Paper sx={{
          display: 'flex',
          justifyContent: 'center',
          px: 2,
          py: 0.2,
        }}
        >
          <InputBase
            placeholder='Ex.: iPhone 12 com garantia'
            fullWidth
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Paper>
      </Container>

      <Container sx={{ py: 5 }} maxWidth="lg">
        <Typography
          component="h2"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Destaques
        </Typography>

        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  height='151'
                  // sx={{ // 16:9 pt: '56.25%',}}
                  image='https://source.unsplash.com/1600x900/?products'
                  alt='random'
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Produto X
                  </Typography>
                  <Typography>
                    R$ 60,00
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    </TemplateDefault>
  )
}

export default Home