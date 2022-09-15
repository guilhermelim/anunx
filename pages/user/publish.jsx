import React, { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

import {
  Container,
  Box,
  Paper,
  Stack,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  FormHelperText
} from '@mui/material'

import TemplateDefault from '../../src/templates/Default'
import Dropzone from '../../src/components/Dropzone'



let validationSchema = yup.object().shape({
  title: yup.string()
    .min(6, 'Escreva um título maior')
    .max(100, 'Título muito grande')
    .required('Campo obrigatório'),

  category: yup.string()
    .min(6, 'Escreva um título maior')
    .required('Campo obrigatório'),
})

const Publish = () => {

  return (
    <TemplateDefault TemplateDefault >

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
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Quanto mais detalhado melhor!
          </Typography>
        </Container>
      </Box>

      <Formik
        initialValues={{
          title: '',
          // category: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('ok, enviou o form', values)
        }}
      >
        {
          ({
            values,
            errors,
            handleChange,
            handleSubmit,

          }) => {
            console.log(errors)
            return (
              <form onSubmit={handleSubmit}>
                <Container maxWidth="md" className='AdTitle'>
                  <Paper variant="outlined" sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}>
                    <Stack
                      sx={{ pt: 0 }}
                      direction='column'
                      spacing={4}
                      justifyContent='center'
                    >
                      <Box>
                        <Typography component="h6" variant="h6" color="text.primary" gutterBottom>
                          Título do Anúncio
                        </Typography>
                        <TextField
                          name="title"
                          value={values.title}
                          onChange={handleChange}

                          variant="standard"
                          fullWidth={true}
                          label="Nome do Produto"
                          error={errors.title}
                          helperText={errors.title}
                        />
                      </Box>
                      <Box>
                        <Typography component="h6" variant="h6" color="text.primary" gutterBottom>
                          Categoria
                        </Typography>

                        <FormControl error={errors.category} fullWidth >

                          <Select
                            name="category"
                            value={values.category}
                            fullWidth
                            onChange={handleChange}
                          >
                            <MenuItem value="Bebê e Criança">Bebê e Criança</MenuItem>
                            <MenuItem value="Agricultura">Agricultura</MenuItem>
                            <MenuItem value="Moda">Moda</MenuItem>
                            <MenuItem value="Carros, Motos e Barcos">Carros, Motos e Barcos</MenuItem>
                            <MenuItem value="Serviços">Serviços</MenuItem>
                            <MenuItem value="Lazer">Lazer</MenuItem>
                            <MenuItem value="Animais">Animais</MenuItem>
                            <MenuItem value="Moveis, Casa e Jardim">Moveis, Casa e Jardim</MenuItem>
                            <MenuItem value="Imóveis">Imóveis</MenuItem>
                            <MenuItem value="Equipamentos e Ferramentas">Equipamentos e Ferramentas</MenuItem>
                            <MenuItem value="Celulares e Tablets">Celulares e Tablets</MenuItem>
                            <MenuItem value="Esporte">Esporte</MenuItem>
                            <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                            <MenuItem value="Emprego">Emprego</MenuItem>
                            <MenuItem value="Outros">Outros</MenuItem>
                          </Select>

                          <FormHelperText>
                            {
                              errors.category
                            }
                          </FormHelperText>

                        </FormControl>


                      </Box>
                    </Stack>
                  </Paper>
                </Container>

                <Container maxWidth="md" className='AdImagens'>
                  <Paper variant="outlined" sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}>
                    <Stack
                      sx={{ pt: 0 }}
                      direction='column'
                      spacing={4}
                      justifyContent='center'
                    >
                      <Box>
                        <Typography component="h6" variant="h6" color="text.primary" gutterBottom>
                          Imagens
                        </Typography>

                        <Dropzone />

                      </Box>
                    </Stack>
                  </Paper>
                </Container >

                <Container maxWidth="md" className='AdDescription'>
                  <Paper variant="outlined" sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}>
                    <Stack
                      sx={{ pt: 0 }}
                      direction='column'
                      spacing={4}
                      justifyContent='center'
                    >
                      <Box>
                        <Typography component="h6" variant="h6" color="text.primary" gutterBottom>
                          Descrição
                        </Typography>
                        <Typography component="div" variant="body2" color="text.secondary" gutterBottom>
                          Descreva as informações e especificações do produto.
                        </Typography>
                        <TextField
                          fullWidth={true}
                          multiline
                          rows={6}
                          defaultValue="Informações do produto..."
                        />
                      </Box>
                    </Stack>
                  </Paper>
                </Container>

                <Container maxWidth="md" className='AddPrice'>
                  <Paper variant="outlined" sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}>
                    <Stack
                      sx={{ pt: 0 }}
                      direction='column'
                      spacing={4}
                      justifyContent='center'
                    >
                      <Box>
                        <Typography component="h6" variant="h6" color="text.primary" gutterBottom sx={{ pb: 1 }}>
                          Preço
                        </Typography>

                        <FormControl fullWidth>
                          <InputLabel>Valor</InputLabel>
                          <OutlinedInput
                            onChange={() => { }}
                            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                            label="Valor"
                          />
                        </FormControl>

                      </Box>
                    </Stack>
                  </Paper>
                </Container>

                <Container maxWidth="md" className='AdContact'>
                  <Paper variant="outlined" sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}>
                    <Stack
                      sx={{ pt: 0 }}
                      direction='column'
                      spacing={4}
                      justifyContent='center'
                    >
                      <Box>
                        <Typography component="h6" variant="h6" color="text.primary" gutterBottom sx={{ pb: 2 }}>
                          Dados de contato
                        </Typography>

                        <TextField
                          fullWidth
                          label='Nome'
                          variant='outlined'
                          size='small'
                          placeholder='Seu nome'
                          sx={{ pb: 2 }}
                        />

                        <TextField
                          fullWidth
                          label='E-mail'
                          variant='outlined'
                          size='small'
                          placeholder='email@exemple.com'
                          sx={{ pb: 2 }}
                        />

                        <TextField
                          fullWidth
                          label='Telefone'
                          variant='outlined'
                          size='small'
                          placeholder='85 99999-9999'
                        />
                      </Box>
                    </Stack>
                  </Paper>
                </Container>

                <Container maxWidth="md" className='AddSubmit'>
                  <Box textAlign='right'>
                    <Button type="submit" variant="contained" sx={{ textTransform: 'uppercase' }}>Publicar Anúncio</Button>
                  </Box>
                </Container>
              </form>
            )
          }
        }
      </Formik>

    </TemplateDefault >
  )
}

export default Publish