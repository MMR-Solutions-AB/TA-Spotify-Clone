import React from 'react'
import { Box, Grid, List, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import PlaylistItem from '../components/PlaylistItem/PlaylistItem'
import PlaylistCard from '../components/PlaylistCard/PlaylistCard'

const Library = () => {
	const { status, albumList } = useSelector((state) => state.playlist)

	const renderPlaylistItems = () => {
		if (status.isLoading) {
			return [1, 2, 3, 4, 5, 6, 7].map((_, i) => <PlaylistItem key={i} loading={status.isLoading} />)
		}

		return albumList.map((playlist, i) => <PlaylistItem key={i} {...playlist} loading={status.isLoading} />)
	}

	const renderPlaylistCards = () => {
		if (status.isLoading) {
			return [1, 2, 3, 4, 5, 6, 7].map((_, i) => <PlaylistCard key={i} loading={status.isLoading} />)
		}

		return albumList.map((playlist, i) => <PlaylistCard key={i} {...playlist} loading={status.isLoading} />)
	}

	return (
		<Box
			id="Library"
			px={3}
			sx={{
				display: { xs: 'flex', md: 'flex' },
				bgcolor: 'background.default',
				flex: 1,
				flexDirection: 'column',
				overflowY: 'auto'
			}}
		>
			<Typography py={3} variant="h2" fontWeight="bold" sx={{ color: 'text.primary', fontSize: 30 }}>
				Ditt bibliotek
			</Typography>
			<List sx={{ display: { sm: 'none' } }}>{renderPlaylistItems()}</List>
			<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
				<Grid container spacing={{ xs: 2, md: 3 }}>
					{renderPlaylistCards()}
				</Grid>
			</Box>
		</Box>
	)
}

export default Library
