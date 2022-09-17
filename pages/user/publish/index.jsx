import { Formik } from 'formik'
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
  Input
} from '@mui/material'

import TemplateDefault from '../../../src/templates/Default'
import { initialValues, validationSchema } from '../../../src/utility/form/valuesPublish'
import FileUpload from '../../../src/components/FileUpload'


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
            setFieldValue
          }) => {



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
                      <FileUpload
                        files={values.files}
                        error={errors.files}
                        touched={touched.files}
                        setFieldValue={setFieldValue}
                      />
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