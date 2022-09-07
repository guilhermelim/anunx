import React, { useEffect, useState } from 'react'
import { css, Paper, Container, Box, FormControl, Typography, Select, MenuItem, Button } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import { useTheme } from "next-themes"
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { textAlign } from '@mui/system';

const Home = () => {
	const { theme, resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return (
			<></>
		)
	}

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
						<Select
							labelId="demo-simple-select-helper-label"
							id="demo-simple-select-helper"
							value={theme}
							onChange={(a) => setTheme(a.target.value)}
							sx={{ minWidth: 'calc(100%)' }}
						>
							<MenuItem value="system">System</MenuItem>
							<MenuItem value="light">Light</MenuItem>
							<MenuItem value="dark">Dark</MenuItem>
						</Select>
					</Grid>

					<Grid xs={4}>
						<Button
							sx={{ minWidth: 'calc(100%)' }}
							style={{ background: 'linear-gradient(to top right, #2a48f3 0%, #c32cc2 100%)' }}
							variant="contained"
							endIcon={
								resolvedTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />
							}
							onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
						>
							Toggle {resolvedTheme === "light" ? "dark" : "light"} mode
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Container>
	)
}
export default Home