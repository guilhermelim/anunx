import React, { useState } from 'react';
import {
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import slugify from 'slugify';
import { useRouter } from 'next/router';
import TemplateDefault from '../../src/templates/Default';
import Card from '../../src/components/Card';
import ProductsModel from '../../src/models/Products';
import { formatCurrency } from '../../src/utility/currency';
import Link from '../../src/utility/Link';

const Search = ({ products, search }) => {
  const router = useRouter();
  const [searchInput, setsearchInput] = useState(search);

  const handleSubmitSearch = () => {
    // redirecionar o usuário para pagina de login
    router.push(`/search/${searchInput}`);
  };

  return (
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
          <InputBase
            onChange={(e) => setsearchInput(e.target.value)}
            placeholder="Ex.: iPhone 12 com garantia"
            fullWidth
          />
          <IconButton onClick={handleSubmitSearch}>
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
            Foi encontrado {products.length} ANÚNCIO
            {products.length > 1 ? 'S' : null} PARA O TERMO: {search}
          </Typography>

          <Grid container spacing={4} sx={{ pt: 5 }}>
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
        </Paper>
      </Container>
    </TemplateDefault>
  );
};

export async function getServerSideProps({ query }) {
  const { q } = query;

  const products = await ProductsModel.find({
    $or: [
      {
        title: {
          $regex: q,
          $options: 'i',
        },
      },
      {
        description: {
          $regex: q,
          $options: 'i',
        },
      },
    ],
  });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      search: q,
    },
  };
}
export default Search;
