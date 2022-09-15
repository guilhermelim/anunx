import {
  Container,
  Grid,
  Typography,
  InputBase,
  IconButton,
  Paper
} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'

import TemplateDefault from '../src/templates/Default'
import Card from '../src/components/Card'


const cards = [1, 2, 3]
const Home = () => {
  return (
    <TemplateDefault>

      <Container maxWidth="sm">
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

      <Container sx={{ pt: 5 }} maxWidth="lg">
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
                title="Produto em Destaque"
                subtitle="R$ 60,00"
                image="https://source.unsplash.com/1600x900/?products"
              />
            </Grid>
          ))}
        </Grid>
      </Container>

    </TemplateDefault>
  )
}

export default Home