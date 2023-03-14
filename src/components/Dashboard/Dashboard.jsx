import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import SideNav from '../SideNav/SideNav'

import { getAccessTokenFromStorage } from '../../utils/getAccessTokenFromStorage'
import Playlist from '../../pages/Playlist'
import Player from '../Player/Player'
import MobileNav from '../MobileNav/MobileNav'
import Library from '../../pages/Library'

const Dashboard = ({ spotifyApi }) => {
	const [token, setToken] = useState(null)

	useEffect(() => {
		const accessToken = getAccessTokenFromStorage()

		const onMount = async () => {
			await spotifyApi.setAccessToken(accessToken)
		}

		if (accessToken) {
			setToken(accessToken)
			onMount()
		}
	}, [])

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
				<SideNav spotifyApi={spotifyApi} />
				<Routes>
					<Route path="/playlist/:id" element={<Playlist spotifyApi={spotifyApi} />} />
					<Route path="/library" element={<Library />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</Box>
			{token && <Player spotifyApi={spotifyApi} />}
			<MobileNav />
		</Box>
	)
}

export default Dashboard
