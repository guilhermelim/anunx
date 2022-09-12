import React, { useState } from 'react'
import {
  Container,
  Box,
  Typography,
  Card,
  IconButton
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import { DeleteForever } from '@mui/icons-material'
import { useDropzone } from 'react-dropzone';


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

const MaskHover = ({ children }) => {
  return (
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
      <IconButton className='iconButtonDeleteForever' color="secondary">
        <DeleteForever fontSize='large' />
      </IconButton>
      {children}
    </Box>
  )
}

const ProductItem = ({ image, label }) => {
  return (
    <Grid item xs={12} sm={4} md={4}>
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
            backgroundImage: `url(${image})`,
          }}
        >
          <MaskHover>
            {label !== null ? <Label text={label} /> : null}
          </MaskHover>
        </Box>
      </Card>
    </Grid>
  )
}


const Dropzone = ({ cards }) => {
  const [files, setFiles] = useState([])
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

      setFiles([
        ...files,
        ...newFiles
      ])
    }
  });

  return (
    <>
      <Typography component="div" variant="body2" color="text.secondary" gutterBottom>
        A primeira imagem é a foto principal do seu anúncio.
      </Typography>

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
        <input {...getInputProps()} />
        <Typography component="div" variant="body2" color="text.secondary">
          Clique para adicionar as imagens ou as arraste para área demarcada.
        </Typography>
      </Box>

      <Typography component="div" variant="body2" color="text.primary" sx={{ py: 1 }} gutterBottom>
        Pré-visualização:
      </Typography>

      <Container sx={{ py: 2 }} maxWidth="md">

        <Grid container spacing={4} className='listProductsImages'>
          {files.map((file, index) => (
            <ProductItem
              key={index}
              image={file.preview}
              label={index === 0 ? 'Principal' : null}
            />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Dropzone