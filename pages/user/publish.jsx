import React, { useState } from 'react'
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
  Input,
  InputAdornment,
  OutlinedInput
} from '@mui/material'
import TemplateDefault from '../../src/templates/Default'

import Dropzone from '../../src/components/Dropzone'


const Publish = () => {
  const [category, setCategory] = useState('')

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  }

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

      <Container maxWidth="md">
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
              <TextField required id="standard-required" variant="standard" fullWidth={true} label="Nome do Produto" />
            </Box>
            <Box>
              <Typography component="h6" variant="h6" color="text.primary" gutterBottom>
                Categoria
              </Typography>
              <Select
                value={category}
                onChange={handleChangeCategory}
                displayEmpty
                fullWidth
              >
                <MenuItem value=''>Selecione</MenuItem>
                <MenuItem value={1}>Bebê e Criança</MenuItem>
                <MenuItem value={2}>Agricultura</MenuItem>
                <MenuItem value={3}>Moda</MenuItem>
                <MenuItem value={4}>Carros, Motos e Barcos</MenuItem>
                <MenuItem value={5}>Serviços</MenuItem>
                <MenuItem value={6}>Lazer</MenuItem>
                <MenuItem value={7}>Animais</MenuItem>
                <MenuItem value={8}>Moveis, Casa e Jardim</MenuItem>
                <MenuItem value={9}>Imóveis</MenuItem>
                <MenuItem value={10}>Equipamentos e Ferramentas</MenuItem>
                <MenuItem value={11}>Celulares e Tablets</MenuItem>
                <MenuItem value={12}>Esporte</MenuItem>
                <MenuItem value={13}>Tecnologia</MenuItem>
                <MenuItem value={14}>Emprego</MenuItem>
                <MenuItem value={15}>Outros</MenuItem>
              </Select>
            </Box>
          </Stack>
        </Paper>
      </Container>

      <Container maxWidth="md">
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

      <Container maxWidth="md">
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

      <Container maxWidth="md">
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

      <Container maxWidth="md">
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

      <Container maxWidth="md">
        <Box textAlign='right'>
          <Button variant="contained" sx={{ textTransform: 'uppercase' }}>Publicar Anúncio</Button>
        </Box>
      </Container>

    </TemplateDefault >
  )
}

export default Publish