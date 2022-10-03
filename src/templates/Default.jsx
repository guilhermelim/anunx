import React from 'react';
import { Box } from '@mui/material';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Default = ({ children }) => (
  <>
    <Header />
    <Box component="main" sx={{ pt: 6, pb: 12 }}>
      {children}
    </Box>
    <Footer />
  </>
);

export default Default;
