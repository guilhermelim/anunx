import React, { useState } from 'react';
import {
  Grid,
  Container,
  Box,
  Stack,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { getSession } from 'next-auth/client';
import axios from 'axios';
import Link from '../../src/utility/Link';
import dbConnect from '../../src/utility/dbConnect';
import ProductsModel from '../../src/models/Products';
import TemplateDefault from '../../src/templates/Default';
import Card from '../../src/components/Card';
import { formatCurrency } from '../../src/utility/currency';
import useToasty from '../../src/contexts/Toasty';

const AlertDialog = ({
  open,
  close,
  product,
  setRemovedProducts,
  removedProducts,
}) => {
  const { setToasty } = useToasty();

  const handleSuccess = () => {
    close();
    setRemovedProducts([...removedProducts, product._id]);
    setToasty({
      open: true,
      severity: 'success',
      text: 'Produto removido com sucesso!',
    });
  };

  const handleError = () => {
    close();
    setToasty({
      open: true,
      severity: 'error',
      text: 'Ops, ocorreu um erro!',
    });
  };

  const handleConfirmRemove = () => {
    console.log(`removido o anuncio ${product.title} ${product._id}`);

    axios
      .delete('/api/products/delete', {
        data: {
          id: product._id,
        },
      })
      .then(handleSuccess)
      .catch(handleError);
  };

  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Você tem certeza que deseja remover esse anúncio?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Ao clicar em <strong>ACEITO</strong> o seu anúncio{' '}
          <strong>{product.title}</strong> será permanentemente removido e não
          poderá ser recuperado. Você tem certeza que deseja realizar essa ação?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Discordo</Button>
        <Button onClick={handleConfirmRemove} autoFocus>
          Aceito
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const Dashboard = ({ products }) => {
  const [removedProducts, setRemovedProducts] = useState([]);
  const [productState, setProductState] = useState();
  const [openRemove, setOpenRemove] = useState(false);

  const handleClickOpenRemove = (product) => {
    setProductState(product);
    setOpenRemove(true);
  };

  const handleCloseRemove = () => {
    setOpenRemove(false);
  };

  // console.log(products);

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
            products.map((product) => {
              if (removedProducts.includes(product._id)) return null;
              return (
                <Grid item key={product._id} xs={12} sm={6} md={4}>
                  <Card
                    title={product.title}
                    subtitle={formatCurrency(product.price)}
                    image={`/uploads/${product.files[0].name}`}
                    actions={
                      <>
                        <Button size="small">Editar</Button>
                        <Button
                          size="small"
                          onClick={() => {
                            handleClickOpenRemove(product);
                          }}
                        >
                          Remover
                        </Button>
                        <AlertDialog
                          open={openRemove}
                          close={handleCloseRemove}
                          product={productState}
                          removedProducts={removedProducts}
                          setRemovedProducts={setRemovedProducts}
                        />
                      </>
                    }
                  />
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
