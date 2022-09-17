import { Formik } from "formik";
import { Avatar, Box, Button, Container, FormControl, FormHelperText, Input, InputLabel, Paper, Stack, Typography } from '@mui/material'
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import TemplateDefault from '../../../src/templates/Default'
import { initialValues, validationSchema } from '../../../src/utility/form/valuesSignup'

const Signup = () => {

  return (
    <TemplateDefault>

      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          Crie sua conta
        </Typography>
        <Typography component="h5" variant="h5" align="center" color="text.secondary" paragraph>
          E anuncie para todo o Brasil
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}>

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
            onSubmit={(values) => {
              console.log('ok, enviou o form', values)
            }}
          >
            {
              ({
                touched,
                values,
                errors,
                handleChange,
                handleSubmit,
              }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <Stack
                      sx={{ pt: 0 }}
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}
                    >

                      <FormControl error={errors.name && touched.name} variant="standard" fullWidth>
                        <InputLabel sx={{ fontWeight: 400, color: 'text.primary' }}>Nome</InputLabel>
                        <Input
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          label="Nome"
                          placeholder='Seu nome'
                        />
                        <FormHelperText>
                          {errors.name && touched.name ? errors.name : null}
                        </FormHelperText>
                      </FormControl>

                      <FormControl error={errors.email && touched.email} variant="standard" fullWidth>
                        <InputLabel sx={{ fontWeight: 400, color: 'text.primary' }}>E-mail</InputLabel>
                        <Input
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          label="E-mail"
                          placeholder='exemplo@email.com'
                        />
                        <FormHelperText>
                          {errors.email && touched.email ? errors.email : null}
                        </FormHelperText>
                      </FormControl>

                      <FormControl error={errors.password && touched.password} variant="standard" fullWidth>
                        <InputLabel sx={{ fontWeight: 400, color: 'text.primary' }}>Senha</InputLabel>
                        <Input
                          name="password"
                          type="password"
                          value={values.password}
                          onChange={handleChange}
                          label="Senha"
                        />
                        <FormHelperText>
                          {errors.password && touched.password ? errors.password : null}
                        </FormHelperText>
                      </FormControl>

                      <FormControl error={errors.passwordConf && touched.passwordConf} variant="standard" fullWidth>
                        <InputLabel sx={{ fontWeight: 400, color: 'text.primary' }}>Confirmação de senha</InputLabel>
                        <Input
                          name="passwordConf"
                          type="password"
                          value={values.passwordConf}
                          onChange={handleChange}
                          label="Confirmação de senha"
                        />
                        <FormHelperText>
                          {errors.passwordConf && touched.passwordConf ? errors.passwordConf : null}
                        </FormHelperText>
                      </FormControl>

                      <Button
                        type="submit"
                        variant="contained"
                        // disabled={isSubmitting}
                        sx={{ textTransform: 'uppercase' }}
                        fullWidth
                      >
                        Cadastrar
                      </Button>

                    </Stack>
                  </form>
                )
              }
            }
          </Formik>

        </Paper>
      </Container>
    </TemplateDefault>
  )
}

export default Signup