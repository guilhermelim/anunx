import { Container, Box, Typography, Button } from '@mui/material';
import { textTransform } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2

// import Link from '../src/utility/Link';

import TemplateDefault from '../../src/templates/Default'

export default function Index() {

    return (
        <TemplateDefault TemplateDefault >
            <Container
                className='add-ads'
                maxWidth="md"
                sx={{ pt: 8, pb: 8 }}
            >
                <Grid container spacing={2} display="flex" direction="column" justifyContent="center" alignItems="center">
                    <Typography component="h1" variant="h2" align='center' gutterBottom >
                        Meus Anúncios
                    </Typography>

                    <Button variant='contained' sx={{ textTransform: 'uppercase' }}>Publicar novo anúncio</Button>
                </Grid>
            </Container>

            <Container
                className='list-ads'
                maxWidth="md"
                sx={{ pb: 8 }}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    rowSpacing={1}
                    columnSpacing={{ xs: 4, sm: 8, md: 12 }}
                >
                    <Grid xs={2} sm={4} md={4}>
                        1
                    </Grid>
                    <Grid xs={2} sm={4} md={4}>
                        2
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        3
                    </Grid>
                    <Grid xs={2} sm={4} md={4}>
                        4
                    </Grid>
                    <Grid xs={2} sm={4} md={4}>
                        5
                    </Grid>
                    <Grid xs={2} sm={4} md={4}>
                        6
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault >
    )
}
