import React, { useEffect, useState } from 'react'
import { Box, Divider } from '@mui/material'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import NavItem from '../NavItem/NavItem'
import NavPlaylist from '../NavPlaylist/NavPlaylist'

const SideNav = ({ spotifyApi, token }) => {
	const [albumList, setAlbumList] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function getPlaylists() {
			if (!spotifyApi) return

			const data = await spotifyApi.getUserPlaylists()

			setLoading(false)
			setAlbumList(data.body.items)
		}
		getPlaylists()
	}, [spotifyApi, token])

	const renderPlaylist = () => {
		if (loading) {
			return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx) => {
				return <NavPlaylist key={idx} loading={loading} />
			})
		}
		return albumList.map((playlist, idx) => {
			return <NavPlaylist key={idx} id={playlist.id} loading={loading} name={playlist.name} />
		})
	}

	return (
		<Box
			sx={{
				bgcolor: 'background.default',
				width: 230,
				height: '100%',
				display: { xs: 'none', md: 'flex' },
				flexDirection: 'column'
			}}
		>
			<Box p={3}>
				<img src="/Spotify_Logo.png" width={'75%'} alt="Spotify" />
			</Box>
			<NavItem name="Home" Icon={HomeRoundedIcon} target="/" active />
			<Box px={3} py={1}>
				<Divider sx={{ backgroundColor: '#ffffff40' }} />
			</Box>
			<Box sx={{ overflowY: 'auto', flex: 1 }}>{renderPlaylist()}</Box>
		</Box>
	)
}

export default SideNav
