import { Container, Box, Stack, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { getSession } from 'next-auth/client';
import Link from '../../src/utility/Link';

import dbConnect from '../../src/utility/dbConnect';
import ProductsModel from '../../src/models/Products';
import TemplateDefault from '../../src/templates/Default';
import Card from '../../src/components/Card';

const Dashboard = ({ products }) => {
  console.log(products);

  return (
    <TemplateDefault TemplateDefault>
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
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
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
            >
              Publicar novo anúncio
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container sx={{ pt: 5 }} maxWidth="md">
        <Grid container spacing={4}>
          {products.length !== 0 ? (
            products.map((product) => (
              <Grid item key={product._id} xs={12} sm={6} md={4}>
                <Card
                  title={product.title}
                  subtitle={`R$ ${product.price},00`}
                  image={`/uploads/${product.files[0].name}`}
                  actions={
                    <>
                      <Button size="small">Editar</Button>
                      <Button size="small">Remover</Button>
                    </>
                  }
                />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography
                variant="h7"
                align="center"
                color="text.secondary"
                paragraph
              >
                Você ainda não possui nenhum anúncio cadastrado.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </TemplateDefault>
  );
};

Dashboard.requireAuth = true;
export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  await dbConnect();

  const products = await ProductsModel.find({ 'user.id': session.userId });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
export default Dashboard;
