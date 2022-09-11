import { Container, Box, Stack, Typography, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2

import TemplateDefault from '../../src/templates/Default'

const cards = [1, 2, 3, 4, 5, 6];

export default function Index() {

  return (
    <TemplateDefault TemplateDefault >

      <Box
        sx={{
          // bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Meus Anúncios
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Você pode anunciar os seus produtos aqui!
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained" sx={{ textTransform: 'uppercase' }}>Publicar novo anúncio</Button>
          </Stack>
        </Container>


      </Box>

      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
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
                <CardActions>
                  <Button size="small">Editar</Button>
                  <Button size="small">Remover</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    </TemplateDefault >
  )
}
