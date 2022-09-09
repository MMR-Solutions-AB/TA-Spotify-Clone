import React from 'react'
import { Box, Button } from '@mui/material'
import { accessUrl } from '../config/config'

const Login = () => {
	/* Using ref to access API login, with redirect URI declared in config */
	return (
		<Box
			sx={{
				bgcolor: 'background.paper',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column'
			}}
		>
			<img
				src="/Spotify_Logo.png"
				alt="Techover spotify"
				style={{ marginBottom: 300, width: '70%', maxWidth: 500 }}
			/>
			<Button href={accessUrl} color="primary" variant="contained" size="large">
				Login to Spotify
			</Button>
		</Box>
	)
}

export default Login
