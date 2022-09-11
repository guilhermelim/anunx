import React from 'react'
import { Box, Typography } from '@mui/material'

import Copyright from '../Copyright'


const Index = () => {
  return (
    <Box sx={{ p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Rodapé
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Algo aqui para dar um propósito ao rodapé!
      </Typography>
      <Copyright />
    </Box>
  )
}

export default Index