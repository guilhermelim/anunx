import {
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TemplateDefault from '../../src/templates/Default';
import Card from '../../src/components/Card';

const cards = [1, 2, 3];
const List = () => (
  <TemplateDefault>
    <Container maxWidth="lg">
      <Typography
        component="h1"
        variant="h3"
        align="center"
        color="text.primary"
        gutterBottom
      >
        O que deseja encontrar?
      </Typography>

      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'center',
          px: 2,
          py: 0.2,
        }}
      >
        <InputBase placeholder="Ex.: iPhone 12 com garantia" fullWidth />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>

    <Container maxWidth="lg">
      <Paper elevation={2} sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h6" variant="h6">
          Anúncios
        </Typography>

        <Typography
          component="span"
          variant="subtitle2"
          sx={{ textTransform: 'uppercase' }}
        >
          Encontrado 200 anúncios
        </Typography>

        <Grid container spacing={4} sx={{ pt: 5 }}>
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
      </Paper>
    </Container>
  </TemplateDefault>
);

export default List;
