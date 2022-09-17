import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  IconButton,
} from '@mui/material'
import { DeleteForever } from '@mui/icons-material'
import { useDropzone } from 'react-dropzone'


const FileUpload = ({ files, error, touched, setFieldValue }) => {
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

      setFieldValue('files', [
        ...files,
        ...newFiles
      ])
    }
  })

  const handleRemoveFile = filePath => {
    const newFilesState = files.filter(file => file.path !== filePath)
    setFieldValue('files', newFilesState)
  }

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
  return (
    <Box>

      <Typography component="h6" variant="h6" color={error && touched ? 'error' : 'text.primary'} gutterBottom>
        Imagens
      </Typography>

      <Box className="DropZone">
        <Typography component="div" variant="body2" color={error && touched ? 'error' : 'text.primary'} gutterBottom>
          A primeira imagem é a foto principal do seu anúncio.
        </Typography>
        {
          error && touched
            ?
            <Typography component="div" variant="body2" color={error && touched ? 'error' : 'text.primary'} gutterBottom>
              {error}
            </Typography>
            : null
        }
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
          <input name="files" {...getInputProps()} />
          <Typography component="div" variant="body2" color={error && touched ? 'error' : 'text.secondary'}>
            Clique para adicionar as imagens ou as arraste para área demarcada.
          </Typography>
        </Box>

        {
          files.length !== 0
            ?
            <Typography component="div" variant="body2" color="text.primary" sx={{ py: 1 }} gutterBottom>
              Pré-visualização:
            </Typography>
            :
            null
        }


        <Container sx={{ py: 2 }} maxWidth="md">

          <Grid container spacing={4} className='listProductsImages'>
            {files.map((file, index) => (
              <Grid item xs={12} sm={4} md={4} key={index}>
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
                      backgroundImage: `url(${file.preview})`,
                    }}
                  >
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
                      <IconButton className='iconButtonDeleteForever' color="secondary" onClick={() => handleRemoveFile(file.path)}>
                        <DeleteForever fontSize='large' />
                      </IconButton>
                      {index === 0 ? <Label text='Principal' /> : null}
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

      </Box>

    </Box>
  )
}

export default FileUpload