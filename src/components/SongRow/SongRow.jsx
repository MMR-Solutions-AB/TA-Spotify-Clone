import React from 'react'
import { Avatar, Box, Typography, Grid, Skeleton } from '@mui/material'
import { formatTime } from '../../utils/formatTime'
import { playSongFromList } from '../../store/playerSlice'
import { useDispatch } from 'react-redux'
import './SongRow.css'

const SongRow = ({
	images,
	title,
	artist,
	album,
	duration,
	i,
	isPlaying,
	loading,
	spotifyApi,
	contextUri,
	position
}) => {
	const image = images?.length > 0 ? images[0] : null
	const dispatch = useDispatch()
	const onRowClick = () => {
		const song = {
			context_uri: contextUri,
			offset: { position },
			position_ms: 0,
			title,
			image: image ? image : {},
			artist,
			duration,
			position
		}
		dispatch(playSongFromList({ spotifyApi, song }))
	}

	return (
		<Grid
			container
			px={2}
			py={1}
			sx={{
				width: '100%',
				color: 'text.secondary',
				fontSize: 14,
				cursor: 'pointer',
				'&:hover': { bgcolor: '#F0790030' }
			}}
			onClick={onRowClick}
		>
			<Grid item sx={{ width: 35, display: 'flex', alignItems: 'center', fontSize: 16 }}>
				{isPlaying ? (
					<Box
						sx={{
							width: 14,
							height: 16,
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'flex-end'
						}}
					>
						<Box
							sx={{ height: 16, backgroundColor: 'primary.main', width: 2 }}
							className="playing-bar"
							style={{ '--delay': 1 }}
						/>
						<Box
							sx={{ height: 16, backgroundColor: 'primary.main', width: 2 }}
							className="playing-bar"
							style={{ '--delay': 2 }}
						/>
						<Box
							sx={{ height: 16, backgroundColor: 'primary.main', width: 2 }}
							className="playing-bar"
							style={{ '--delay': 3 }}
						/>
						<Box
							sx={{ height: 16, backgroundColor: 'primary.main', width: 2 }}
							className="playing-bar"
							style={{ '--delay': 4 }}
						/>
						<Box
							sx={{ height: 16, backgroundColor: 'primary.main', width: 2 }}
							className="playing-bar"
							style={{ '--delay': 5 }}
						/>
					</Box>
				) : (
					i + 1
				)}
			</Grid>
			<Grid item sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
				{loading ? (
					<Skeleton variant="rectangular" width={40} height={40} />
				) : (
					<Avatar src={image?.url} alt={title} variant="square" />
				)}
				<Box ml={1}>
					<Typography sx={{ fontSize: 16, color: isPlaying ? 'primary.main' : 'text.primary' }}>
						{loading ? <Skeleton variant="text" width={130} height={24} /> : title}
					</Typography>
					<Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
						{loading ? <Skeleton variant="text" width={50} height={18} /> : artist}
					</Typography>
				</Box>
			</Grid>
			<Grid
				item
				xs={3}
				sx={{
					display: { xs: 'none', md: 'flex' },
					alignItems: 'center'
				}}
			>
				{loading ? <Skeleton variant="text" width={50} height={14} /> : album}
			</Grid>
			<Grid
				item
				xs={3}
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					alignItems: 'center'
				}}
			>
				{loading ? <Skeleton variant="text" width={50} height={14} /> : formatTime(duration)}
			</Grid>
		</Grid>
	)
}

export default SongRow
