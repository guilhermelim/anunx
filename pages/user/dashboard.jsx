import Link from '../../src/utility/Link'
import { Container, Box, Stack, Typography, Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2

import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'


const cards = [1, 2, 3, 4, 5, 6]
const Dashboard = () => {
  return (
    <TemplateDefault TemplateDefault >

      <Box>
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
            <Button
              variant="contained"
              sx={{ textTransform: 'uppercase' }}
              component={Link}
              noLinkStyle
              href="/user/publish"
            >Publicar novo anúncio</Button>
          </Stack>
        </Container>
      </Box>

      <Container sx={{ pt: 5 }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                title="Produto X"
                subtitle="R$ 60,00"
                image="https://source.unsplash.com/1600x900/?products"
                actions={
                  <>
                    <Button size="small">Editar</Button>
                    <Button size="small">Remover</Button>
                  </>
                }
              />
            </Grid>
          ))}
        </Grid>
      </Container>

    </TemplateDefault >
  )
}

Dashboard.requireAuth = true
export default Dashboard