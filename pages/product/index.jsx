import { Card, CardHeader, CardMedia, Chip, Container, Grid, Paper, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

import TemplateDefault from '../../src/templates/Default'
import Avatar from '../../src/components/Avatar'


const Product = () => {
  return (
    <TemplateDefault>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={8}>

            <Paper elevation={2} sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}>
              <Typography component="h6" variant="h6" sx={{ pb: 2 }}>Carrossel</Typography>
              <Carousel
                autoPlay
                indicators
                swipe
                cycleNavigation
                navButtonsAlwaysVisible
                animation="fade"
                duration={3000}
              >
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    sx={{ pt: '56%' }}
                    image="https://source.unsplash.com/random"
                    title="Título da imagem"
                    alt="Título da imagem"
                  />
                </Card>

                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    sx={{ pt: '56%' }}
                    image="https://source.unsplash.com/random?a=2"
                    title="Título da imagem"
                    alt="Título da imagem"
                  />
                </Card>
              </Carousel>

            </Paper>

            <Paper elevation={2} sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}>
              <Typography component="span" variant="caption" sx={{ pb: 1 }}>Publicado 16 de Junho de 2021</Typography>
              <Typography component="h4" variant="h4" sx={{ mb: 1 }}>Jaguar XE 2.0 D R-Sport Aut.</Typography>
              <Typography component="h4" variant="h4" sx={{
                fontWeight: 'bold',
                mb: 2
              }}>R$ 50.000,00</Typography>
              <Chip label="Categoria" />
            </Paper>

            <Paper elevation={2} sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}>
              <Typography component="h6" variant="h6">Descrição</Typography>
              <Typography component="p" variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut amet tempore aliquam ducimus blanditiis repudiandae, cupiditate, quos ratione molestiae quidem reprehenderit atque vero, perferendis odio magnam cumque aspernatur voluptatem voluptas!
              </Typography>
            </Paper>

          </Grid>
          <Grid item xs={4}>

            <Paper elevation={2} sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}>
              <CardHeader
                avatar={
                  <Avatar name="Guilherme Lima" image="https://avatars.githubusercontent.com/guilhermelim" />
                }
                title="Guilherme Lima"
                subheader="guilhermem.lima@outlook.com"
              />
              <CardMedia
                image="https://avatars.githubusercontent.com/guilhermelim"
                src="https://avatars.githubusercontent.com/guilhermelim"
                title="Guilherme Lima"
                alt="Guilherme Lima"
              />
            </Paper>

            <Paper elevation={2} sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}>
              <Typography component="h6" variant="h6">Localização</Typography>
            </Paper>

          </Grid>
        </Grid>
      </Container>
    </TemplateDefault >
  )
}

export default Product