import { Container, Box, Typography } from '@mui/material';
import Link from '../../utility/Link';

import TemplateDefault from '../../templates/Default';
import SelectColorMode from '../../components/theme/SelectColorMode';
import ToggleColorMode from '../../components/theme/ToggleColorMode';

const ColorMode = () => (
  <TemplateDefault>
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>

        <SelectColorMode />
        <br />
        <br />
        <ToggleColorMode />

        <Link href="/about">Go to the about page</Link>
      </Box>
    </Container>
  </TemplateDefault>
);

export default ColorMode;
