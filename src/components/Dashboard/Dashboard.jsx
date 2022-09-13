import React from 'react'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'

const Dashboard = ({ spotifyApi }) => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<Box sx={{ flex: 1, overflowY: 'auto', display: 'flex' }}>
				<Routes>
					<Route path="/playlist/:id" element={<div>Playlist</div>} />
					<Route path="/library" element={<div>Library</div>} />
					<Route path="/" element={<Home />} />
				</Routes>
			</Box>
		</Box>
	)
}

export default Dashboard
