import Image from 'next/image';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/client';

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
  Alert,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import GoogleIcon from '@mui/icons-material/Google'

import TemplateDefault from '../../../src/templates/Default';
import {
  initialValues,
  validationSchema,
} from '../../../src/utility/form/valuesSignin';

const Signin = () => {
  const router = useRouter();

  const handleFormSubmit = (values) => {
    signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: `/user/dashboard`,
    });
  };

  const handleGoogleLogin = () => {
    signIn('google', {
      callbackUrl: `/user/dashboard`,
    });
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
          Entre na sua conta
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
              Entrar na Conta
            </Typography>

            <Button
              onClick={handleGoogleLogin}
              variant="contained"
              sx={{ mt: 2 }}
              startIcon={
                // <GoogleIcon />
                <Image
                  src="/images/logo_google.svg"
                  width={20}
                  height={20}
                  alt="Login com Google"
                />
              }
            >
              Entrar com o Google
            </Button>
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
                {router.query.i === '1' ? (
                  <Alert variant="filled" severity="error" sx={{ my: 2 }}>
                    Usuário ou senha inválidos
                  </Alert>
                ) : null}

                <Stack
                  sx={{ pt: 0 }}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
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
                      Entrar
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

export default Signin;
