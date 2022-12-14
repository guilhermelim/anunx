import { Formik } from 'formik';
import axios from 'axios';
import { useRouter } from 'next/router';
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Paper,
  Stack,
  Typography,
  CircularProgress,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TemplateDefault from '../../../src/templates/Default';
import {
  initialValues,
  validationSchema,
} from '../../../src/utility/form/valuesSignup';
import useToasty from '../../../src/contexts/Toasty';

const Signup = () => {
  const router = useRouter();
  const { setToasty } = useToasty();

  const handleFormSubmit = async (values) => {
    const response = await axios.post('/api/users', values);

    if (response.data.success) {
      console.log('Dados castrados com sucesso!');
      setToasty({
        open: true,
        severity: 'success',
        text: 'Cadastro realizado com sucesso!',
      });
      // redirecionar o usuário para pagina de login
      router.push('/auth/signin');
    }
  };

  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Crie sua conta
        </Typography>
        <Typography
          component="h5"
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          E anuncie para todo o Brasil
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
        >
          <Box align="center">
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Inscrever-se
            </Typography>
          </Box>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >
            {({
              touched,
              values,
              errors,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <Stack
                  sx={{ pt: 0 }}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <FormControl
                    error={errors.name && touched.name}
                    variant="standard"
                    fullWidth
                  >
                    <InputLabel sx={{ fontWeight: 400, color: 'text.primary' }}>
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
                    <InputLabel sx={{ fontWeight: 400, color: 'text.primary' }}>
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
                    error={errors.password && touched.password}
                    variant="standard"
                    fullWidth
                  >
                    <InputLabel sx={{ fontWeight: 400, color: 'text.primary' }}>
                      Senha
                    </InputLabel>
                    <Input
                      name="password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      label="Senha"
                    />
                    <FormHelperText>
                      {errors.password && touched.password
                        ? errors.password
                        : null}
                    </FormHelperText>
                  </FormControl>

                  <FormControl
                    error={errors.passwordConf && touched.passwordConf}
                    variant="standard"
                    fullWidth
                  >
                    <InputLabel sx={{ fontWeight: 400, color: 'text.primary' }}>
                      Confirmação de senha
                    </InputLabel>
                    <Input
                      name="passwordConf"
                      type="password"
                      value={values.passwordConf}
                      onChange={handleChange}
                      label="Confirmação de senha"
                    />
                    <FormHelperText>
                      {errors.passwordConf && touched.passwordConf
                        ? errors.passwordConf
                        : null}
                    </FormHelperText>
                  </FormControl>

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
                      fullWidth
                    >
                      Cadastrar
                    </Button>
                  )}
                </Stack>
              </form>
            )}
          </Formik>
        </Paper>
      </Container>
    </TemplateDefault>
  );
};

export default Signup;
