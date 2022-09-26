import { CircularProgress, Container, Stack, Typography } from '@mui/material'
import TemplateDefault from '../../templates/Default'

const LoadingPage = () => {
  return (
    <TemplateDefault TemplateDefault >
      <Container maxWidth="sm">

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ minHeight: '30vh' }}
        >

          <CircularProgress />
          <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
            Carregando...
          </Typography>

        </Stack>

      </Container>
    </TemplateDefault>
  )
}

export default LoadingPage