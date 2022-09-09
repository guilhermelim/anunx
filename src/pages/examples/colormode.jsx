import { Container, Box, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2

import SelectColorMode from '../../components/theme/SelectColorMode'
import ToggleColorMode from '../../components/theme/ToggleColorMode'


const Home = () => {
	return (
		<Container maxWidth="lg" spacing={2}>
			<Box sx={{ my: 4, flexGrow: 1 }} spacing={2}>
				<Grid
					container
					spacing={2}
					display="flex"
					direction="column"
					justifyContent="center"
					alignItems="center"
				>
					<Grid xs={12}>
						<Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
							MUI v5 + Next.js with TypeScript example
						</Typography>
					</Grid>

					<Grid xs={4}>
						<SelectColorMode />
					</Grid>

					<Grid xs={4}>
						<ToggleColorMode />
					</Grid>
				</Grid>
			</Box>
		</Container>
	)
}

export default Home