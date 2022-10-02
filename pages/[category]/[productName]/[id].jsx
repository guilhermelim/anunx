import {
  Card,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import dbConnect from '../../../src/utility/dbConnect';
import ProductsModel from '../../../src/models/Products';
import TemplateDefault from '../../../src/templates/Default';
import Avatar from '../../../src/components/Avatar';
import { formatCurrency } from '../../../src/utility/currency';

const Product = ({ product }) => (
  <TemplateDefault>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Paper
            elevation={2}
            sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h6" variant="h6" sx={{ pb: 2 }}>
              Carrossel
            </Typography>

            <Carousel
              autoPlay
              indicators
              swipe
              cycleNavigation
              navButtonsAlwaysVisible
              animation="fade"
              duration={3000}
            >
              {product.files.map((file) => (
                <Card key={file.name} sx={{ height: '100%' }}>
                  <CardMedia
                    sx={{ pt: '56%' }}
                    image={`/uploads/${file.name}`}
                    title={product.title}
                    alt={product.title}
                  />
                </Card>
              ))}
            </Carousel>
          </Paper>

          <Paper
            elevation={2}
            sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="span" variant="caption" sx={{ pb: 1 }}>
              Publicado 16 de Junho de 2021
            </Typography>
            <Typography component="h4" variant="h4" sx={{ mb: 1 }}>
              {product.title}
            </Typography>
            <Typography
              component="h4"
              variant="h4"
              sx={{
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              {formatCurrency(product.price)}
            </Typography>
            <Chip label={product.category} />
          </Paper>

          <Paper
            elevation={2}
            sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h6" variant="h6">
              Descrição
            </Typography>
            <Typography component="p" variant="body2">
              {product.description}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            elevation={2}
            sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
          >
            <CardHeader
              avatar={
                <Avatar name={product.user.name} image={product.user.image} />
              }
              title={product.user.name}
              subheader={product.user.email}
            />
            <CardMedia
              image={product.user.image}
              src={product.user.image}
              title={product.user.name}
              alt={product.user.name}
            />
          </Paper>

          <Paper
            elevation={2}
            sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h6" variant="h6">
              Localização
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </TemplateDefault>
);

export async function getServerSideProps({ query }) {
  const { id } = query;

  await dbConnect();

  const product = await ProductsModel.findOne({ _id: id });

  return {
    props: {
      product: product ? JSON.parse(JSON.stringify(product)) : null,
    },
  };
}
export default Product;
