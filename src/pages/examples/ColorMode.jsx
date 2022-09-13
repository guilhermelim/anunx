import { Container, Box, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import Link from '../utility/Link';

import TemplateDefault from './Default'
import SelectColorMode from '../components/theme/SelectColorMode'
import ToggleColorMode from '../components/theme/ToggleColorMode'


const ColorMode = () => {
  return (
    <TemplateDefault>
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>

          <SelectColorMode />
          <br /><br />
          <ToggleColorMode />

          <Link href="/about">
            Go to the about page
          </Link>
        </Box>
      </Container>
    </TemplateDefault>
  )
}

export default ColorMode