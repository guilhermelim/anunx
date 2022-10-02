import { Formik } from 'formik';
import { useRouter } from 'next/router';
import {
  Container,
  Box,
  Paper,
  Stack,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
  FormHelperText,
  Input,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';
import { getSession } from 'next-auth/client';

import TemplateDefault from '../../../src/templates/Default';
import {
  initialValues,
  validationSchema,
} from '../../../src/utility/form/valuesPublish';
import FileUpload from '../../../src/components/FileUpload';
import useToasty from '../../../src/contexts/Toasty';

const Publish = ({ userId, image }) => {
  const { setToasty } = useToasty();
  const router = useRouter();

  const formValues = {
    ...initialValues,
  };

  formValues.userId = userId;
  formValues.image = image;

  const handleSuccess = () => {
    setToasty({
      open: true,
      severity: 'success',
      text: 'Anúncio cadastrado com sucesso!',
    });
    // redirecionar o usuário para pagina de dashboard
    router.push('/user/dashboard');
  };

  const handleError = () => {
    setToasty({
      open: true,
      severity: 'error',
      text: 'Ops, ocorreu um erro tente novamente.',
    });
    // redirecionar o usuário para pagina de dashboard
    // router.push('/user/dashboard')
  };

  const handleFormSubmit = (values) => {
    const formData = new FormData();

    for (const field in values) {
      if (field === 'files') {
        values.files.forEach((file) => {
          formData.append('files', file);
        });
      } else {
        formData.append(field, values[field]);
      }
    }

    axios
      .post('/api/products/add', formData)
      .then(handleSuccess)
      .catch(handleError);

    // console.log('ok, enviou o form', values);
  };

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
            Publicar Anúncios
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Quanto mais detalhado melhor!
          </Typography>
        </Container>
      </Box>

      <Formik
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({
          touched,
          values,
          errors,
          handleChange,
          handleSubmit,
          setFieldValue,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Input type="hidden" name="userId" value={values.userId} />
            <Input type="hidden" name="image" value={values.image} />

            <Container maxWidth="md" className="AdTitle">
              <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
              >
                <Stack
                  sx={{ pt: 0 }}
                  direction="column"
                  spacing={4}
                  justifyContent="center"
                >
                  <FormControl
                    error={errors.title && touched.title}
                    variant="standard"
                    fullWidth
                  >
                    <InputLabel sx={{ fontWeight: 400, color: 'text.primary' }}>
                      Título do Anúncio
                    </InputLabel>
                    <Input
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      label="Título do Anúncio"
                    />
                    <FormHelperText>
                      {errors.title && touched.title ? errors.title : null}
                    </FormHelperText>
                  </FormControl>

                  <FormControl
                    error={errors.category && touched.category}
                    variant="standard"
                    fullWidth
                  >
                    <InputLabel sx={{ fontWeight: 400, color: 'text.primary' }}>
                      Categoria
                    </InputLabel>
                    <Select
                      name="category"
                      value={values.category}
                      onChange={handleChange}
                      label="Categoria"
                      fullWidth
                    >
                      <MenuItem value="Bebê e Criança">Bebê e Criança</MenuItem>
                      <MenuItem value="Agricultura">Agricultura</MenuItem>
                      <MenuItem value="Moda">Moda</MenuItem>
                      <MenuItem value="Carros, Motos e Barcos">
                        Carros, Motos e Barcos
                      </MenuItem>
                      <MenuItem value="Serviços">Serviços</MenuItem>
                      <MenuItem value="Lazer">Lazer</MenuItem>
                      <MenuItem value="Animais">Animais</MenuItem>
                      <MenuItem value="Moveis, Casa e Jardim">
                        Moveis, Casa e Jardim
                      </MenuItem>
                      <MenuItem value="Imóveis">Imóveis</MenuItem>
                      <MenuItem value="Equipamentos e Ferramentas">
                        Equipamentos e Ferramentas
                      </MenuItem>
                      <MenuItem value="Celulares e Tablets">
                        Celulares e Tablets
                      </MenuItem>
                      <MenuItem value="Esporte">Esporte</MenuItem>
                      <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                      <MenuItem value="Emprego">Emprego</MenuItem>
                      <MenuItem value="Outros">Outros</MenuItem>
                    </Select>
                    <FormHelperText>
                      {errors.category && touched.category
                        ? errors.category
                        : null}
                    </FormHelperText>
                  </FormControl>
                </Stack>
              </Paper>
            </Container>

            <Container maxWidth="md" className="AdImagens">
              <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
              >
                <Stack
                  sx={{ pt: 0 }}
                  direction="column"
                  spacing={4}
                  justifyContent="center"
                >
                  <FileUpload
                    files={values.files}
                    error={errors.files}
                    touched={touched.files}
                    setFieldValue={setFieldValue}
                  />
                </Stack>
              </Paper>
            </Container>

            <Container maxWidth="md" className="AdDescription">
              <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
              >
                <Stack
                  sx={{ pt: 0 }}
                  direction="column"
                  spacing={4}
                  justifyContent="center"
                >
                  <FormControl
                    error={errors.description && touched.description}
                    variant="standard"
                    fullWidth
                  >
                    <InputLabel sx={{ fontWeight: 400, color: 'text.primary' }}>
                      Descreva as informações e especificações do produto
                    </InputLabel>
                    <Input
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      label="Descreva as informações e especificações do produto"
                      multiline
                      rows={6}
                    />
                    <FormHelperText>
                      {errors.description && touched.description
                        ? errors.description
                        : null}
                    </FormHelperText>
                  </FormControl>
                </Stack>
              </Paper>
            </Container>

            <Container maxWidth="md" className="AddPrice">
              <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
              >
                <Stack
                  sx={{ pt: 0 }}
                  direction="column"
                  spacing={4}
                  justifyContent="center"
                >
                  <FormControl
                    error={errors.price && touched.price}
                    variant="standard"
                    fullWidth
                  >
                    <InputLabel sx={{ fontWeight: 400, color: 'text.primary' }}>
                      Preço do Produto
                    </InputLabel>
                    <Input
                      name="price"
                      value={values.price}
                      onChange={handleChange}
                      label="Preço do Produto"
                      startAdornment={
                        <InputAdornment position="start">R$</InputAdornment>
                      }
                    />
                    <FormHelperText>
                      {errors.price && touched.price ? errors.price : null}
                    </FormHelperText>
                  </FormControl>
                </Stack>
              </Paper>
            </Container>

            <Container maxWidth="md" className="AdContact">
              <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
              >
                <Stack
                  sx={{ pt: 0 }}
                  direction="column"
                  spacing={4}
                  justifyContent="center"
                >
                  <Box>
                    <Typography
                      component="h6"
                      variant="h6"
                      color="text.primary"
                      gutterBottom
                    >
                      Dados de contato
                    </Typography>

                    <FormControl
                      error={errors.name && touched.name}
                      variant="standard"
                      fullWidth
                    >
                      <InputLabel
                        sx={{ fontWeight: 400, color: 'text.primary' }}
                      >
                        Nome
                      </InputLabel>
                      <Input
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        label="Nome"
                        placeholder="Seu nome"
                      />
                      <FormHelperText>
                        {errors.name && touched.name ? errors.name : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl
                      error={errors.email && touched.email}
                      variant="standard"
                      fullWidth
                    >
                      <InputLabel
                        sx={{ fontWeight: 400, color: 'text.primary' }}
                      >
                        E-mail
                      </InputLabel>
                      <Input
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        label="E-mail"
                        placeholder="exemplo@email.com"
                      />
                      <FormHelperText>
                        {errors.email && touched.email ? errors.email : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl
                      error={errors.phone && touched.phone}
                      variant="standard"
                      fullWidth
                    >
                      <InputLabel
                        sx={{ fontWeight: 400, color: 'text.primary' }}
                      >
                        Telefone
                      </InputLabel>
                      <Input
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        label="Telefone"
                        placeholder="(11) 99090-9090"
                      />
                      <FormHelperText>
                        {errors.phone && touched.phone ? errors.phone : null}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Stack>
              </Paper>
            </Container>

            <Container maxWidth="md" className="AddSubmit">
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={2}
              >
                {isSubmitting ? (
                  <>
                    <CircularProgress />
                    <Typography component="h1" variant="body2">
                      Cadastrando...
                    </Typography>
                  </>
                ) : (
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    sx={{ textTransform: 'uppercase' }}
                  >
                    Publicar Anúncio
                  </Button>
                )}
              </Stack>
            </Container>
          </form>
        )}
      </Formik>
    </TemplateDefault>
  );
};

Publish.requireAuth = true;
export async function getServerSideProps({ req }) {
  const { user, userId } = await getSession({ req });

  return {
    props: {
      // eslint-disable-next-line object-shorthand
      userId: userId,
      image: user.image,
    },
  };
}
export default Publish;
