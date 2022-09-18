import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import SideNav from '../SideNav/SideNav'
import { useDispatch } from 'react-redux'
import { getPlaylist } from '../../store/playlistSlice'
import { getAccessTokenFromStorage } from '../../utils/getAccessTokenFromStorage'
import Playlist from '../../pages/Playlist'
import Player from '../Player/Player'
import MobileNav from '../MobileNav/MobileNav'

const Dashboard = ({ spotifyApi }) => {
	const [token, setToken] = useState(null)
	const dispatch = useDispatch()

	useEffect(() => {
		const accessToken = getAccessTokenFromStorage()

		const onMount = async () => {
			await spotifyApi.setAccessToken(accessToken)
			dispatch(getPlaylist(spotifyApi))
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
				<SideNav />
				<Routes>
					<Route path="/playlist/:id" element={<Playlist spotifyApi={spotifyApi} />} />
					<Route path="/library" element={<div>Library</div>} />
					<Route path="/" element={<Home />} />
				</Routes>
			</Box>
			{token && <Player spotifyApi={spotifyApi} />}
			<MobileNav />
		</Box>
	)
}

export default Dashboard
