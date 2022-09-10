import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/utility/Link';

import TemplateDefault from '../src/templates/Default'
import SelectColorMode from '../src/components/theme/SelectColorMode'
import ToggleColorMode from '../src/components/theme/ToggleColorMode'

export default function Index() {

  return (
    <TemplateDefault>
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>

          <SelectColorMode />

          <ToggleColorMode />

          <Link href="/about">
            Go to the about page
          </Link>
        </Box>
      </Container>
    </TemplateDefault>
  )
}
