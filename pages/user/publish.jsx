import React, { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useDropzone } from 'react-dropzone'
import {
  Container,
  Box,
  Card,
  Paper,
  Stack,
  Grid,
  Typography,
  Button,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
  FormHelperText,
  Input
} from '@mui/material'
import { DeleteForever } from '@mui/icons-material'

import TemplateDefault from '../../src/templates/Default'


let validationSchema = yup.object().shape({
  title: yup.string()
    .min(6, 'Escreva um título maior')
    .max(100, 'Título muito grande')
    .required('Campo obrigatório'),

  category: yup.string()
    .required('Campo obrigatório'),

  description: yup.string()
    .min(50, 'Escreva uma descrição com pelo menos 50 caracteres.')
    .required('Campo obrigatório'),

  price: yup.number()
    .typeError('O valor deve ser um número')
    .required('Campo obrigatório'),

  email: yup.string()
    .email('Digite um e-mail válido')
    .required('Campo obrigatório'),

  name: yup.string()
    .min(3, 'Escreva um nome maior')
    .required('Campo obrigatório'),

  phone: yup.number()
    .typeError('O valor deve ser um número')
    .required('Campo Obrigatório'),

  files: yup.array()
    .min(1, 'Envie ao menos uma foto do produto.')
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
          category: '',
          description: '',
          price: '',
          email: '',
          name: '',
          phone: '',
          files: [],
        }}
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
            setFieldValue
          }) => {

            const { getRootProps, getInputProps } = useDropzone({
              accept: {
                'image/*': [],
              },
              onDrop: (acceptedFile) => {
                const newFiles = acceptedFile.map(file => {
                  return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                  })
                })

                setFieldValue('files', [
                  ...values.files,
                  ...newFiles
                ])
              }
            })

            const handleRemoveFile = fileName => {
              const newFilesState = values.files.filter(file => file.name !== fileName)
              setFieldValue('files', newFilesState)
            }

            const Label = ({ text }) => {
              return (
                <Box
                  className='mainImage'
                  backgroundColor='primary.main'
                  sx={{
                    py: 0,
                    px: 2,
                    height: 0.24,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    borderRadius: 1,
                    borderTopLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <Typography component="div" variant="body2" color='background.default' sx={{ py: 1 }} gutterBottom>
                    {text}
                  </Typography>
                </Box>
              )
            }

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

                      <FormControl error={errors.title && touched.title} variant="standard" fullWidth>
                        <InputLabel sx={{ fontWeight: 400, color: 'text.primary' }}>Título do Anúncio</InputLabel>
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

                      <FormControl error={errors.category && touched.category} variant="standard" fullWidth>
                        <InputLabel sx={{ fontWeight: 400, color: 'text.primary' }}>Categoria</InputLabel>
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
                          {errors.category && touched.category ? errors.category : null}
                        </FormHelperText>
                      </FormControl>

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

                        <Typography component="h6" variant="h6" color={errors.files && touched.files ? 'error' : 'text.primary'} gutterBottom>
                          Imagens
                        </Typography>

                        <Box className="DropZone">
                          <Typography component="div" variant="body2" color={errors.files && touched.files ? 'error' : 'text.primary'} gutterBottom>
                            A primeira imagem é a foto principal do seu anúncio.
                          </Typography>
                          {
                            errors.files && touched.files
                              ?
                              <Typography component="div" variant="body2" color={errors.files && touched.files ? 'error' : 'text.primary'} gutterBottom>
                                {errors.files}
                              </Typography>
                              : null
                          }
                          <Box
                            {...getRootProps({ className: 'dropzone' })}
                            align="center"
                            sx={{
                              p: 5,
                              borderStyle: 'dotted',
                              borderRadius: 1,
                              bgcolor: 'background.default',
                              '&:hover': {
                                backgroundColor: 'background.default',
                                opacity: [0.9, 0.8, 0.7],
                              },
                            }}

                          >
                            <input name="files" {...getInputProps()} />
                            <Typography component="div" variant="body2" color={errors.files && touched.files ? 'error' : 'text.secondary'}>
                              Clique para adicionar as imagens ou as arraste para área demarcada.
                            </Typography>
                          </Box>

                          {
                            values.files.length !== 0
                              ?
                              <Typography component="div" variant="body2" color="text.primary" sx={{ py: 1 }} gutterBottom>
                                Pré-visualização:
                              </Typography>
                              :
                              null
                          }


                          <Container sx={{ py: 2 }} maxWidth="md">

                            <Grid container spacing={4} className='listProductsImages'>
                              {values.files.map((file, index) => (
                                <Grid item xs={12} sm={4} md={4} key={index}>
                                  <Card className='listProductImagens'
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                  >
                                    <Box
                                      sx={{
                                        position: 'relative',
                                        // width: 200,
                                        height: 150,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center center',
                                        backgroundImage: `url(${file.preview})`,
                                      }}
                                    >
                                      <Box sx={{
                                        display: 'flex',
                                        width: '100%',
                                        height: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        transition: 'color 350ms ease 0s, background 1000ms ease 0s',
                                        '&:hover': {
                                          backgroundColor: 'rgba(0, 0, 0, 0.87)',
                                        },
                                        '& .iconButtonDeleteForever': {
                                          display: "none"
                                        },
                                        '&:hover .iconButtonDeleteForever': {

                                          display: "block"
                                        }
                                      }}>
                                        <IconButton className='iconButtonDeleteForever' color="secondary" onClick={() => handleRemoveFile(file.name)}>
                                          <DeleteForever fontSize='large' />
                                        </IconButton>
                                        {index === 0 ? <Label text='Principal' /> : null}
                                      </Box>
                                    </Box>
                                  </Card>
                                </Grid>
                              ))}
                            </Grid>
                          </Container>

                        </Box>

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

                      <FormControl error={errors.description && touched.description} variant="standard" fullWidth>
                        <InputLabel sx={{ fontWeight: 400, color: 'text.primary' }}>Descreva as informações e especificações do produto</InputLabel>
                        <Input
                          name="description"
                          value={values.description}
                          onChange={handleChange}
                          label="Descreva as informações e especificações do produto"
                          multiline
                          rows={6}
                        />
                        <FormHelperText>
                          {errors.description && touched.description ? errors.description : null}
                        </FormHelperText>
                      </FormControl>

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

                      <FormControl error={errors.price && touched.price} variant="standard" fullWidth>
                        <InputLabel sx={{ fontWeight: 400, color: 'text.primary' }}>Preço do Produto</InputLabel>
                        <Input
                          name="price"
                          value={values.price}
                          onChange={handleChange}
                          label="Preço do Produto"
                          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                        />
                        <FormHelperText>
                          {errors.price && touched.price ? errors.price : null}
                        </FormHelperText>
                      </FormControl>

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

                        <Typography component="h6" variant="h6" color="text.primary" gutterBottom>
                          Dados de contato
                        </Typography>

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
                            value={values.email}
                            onChange={handleChange}
                            label="E-mail"
                            placeholder='exemplo@email.com'
                          />
                          <FormHelperText>
                            {errors.email && touched.email ? errors.email : null}
                          </FormHelperText>
                        </FormControl>

                        <FormControl error={errors.phone && touched.phone} variant="standard" fullWidth>
                          <InputLabel sx={{ fontWeight: 400, color: 'text.primary' }}>Telefone</InputLabel>
                          <Input
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            label="Telefone"
                            placeholder='(11) 99090-9090'
                          />
                          <FormHelperText>
                            {errors.phone && touched.phone ? errors.phone : null}
                          </FormHelperText>
                        </FormControl>

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