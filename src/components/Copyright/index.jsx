import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '../../utility/Link';
// import MuiLink from '@mui/material/Link';

const Copyright = (props) => (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <Link
      color="inherit"
      rel="noopener noreferrer"
      href="https://www.genap.ml"
      target="_blank"
    >
      Genap.ml
    </Link>{' '}
    {new Date().getFullYear()}.
  </Typography>
);

export default Copyright;
