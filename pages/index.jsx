import {
  Container,
  Grid,
  Typography,
  InputBase,
  IconButton,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import slugify from 'slugify';
import TemplateDefault from '../src/templates/Default';
import Card from '../src/components/Card';
import dbConnect from '../src/utility/dbConnect';
import ProductsModel from '../src/models/Products';
import { formatCurrency } from '../src/utility/currency';
import Link from '../src/utility/Link';

const Home = ({ products }) => (
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
        {products.length !== 0 ? (
          products.map((product) => {
            const category = slugify(product.category).toLocaleLowerCase();
            const title = slugify(product.title).toLocaleLowerCase();
            return (
              <Grid item key={product._id} xs={12} sm={6} md={4}>
                <Link
                  sx={{ textDecoration: 'none' }}
                  href={`/${category}/${title}/${product._id}`}
                >
                  <Card
                    title={product.title}
                    subtitle={formatCurrency(product.price)}
                    image={`/uploads/${product.files[0].name}`}
                  />
                </Link>
              </Grid>
            );
          })
        ) : (
          <Grid item xs={12}>
            <Typography
              variant="h7"
              align="center"
              color="text.secondary"
              paragraph
            >
              Ainda não possui nenhum anúncio cadastrado.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  </TemplateDefault>
);

export async function getServerSideProps() {
  await dbConnect();

  const products = await ProductsModel.aggregate([
    {
      $sample: { size: 6 },
    },
  ]);

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
export default Home;
