import React from 'react'
import { ListItem, ListItemButton, ListItemAvatar, Skeleton, Grid, Card, Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const PlaylistCard = ({ name, description, images, id, loading }) => {
	const navigate = useNavigate()

	if (loading) {
		return (
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemAvatar sx={{ marginRight: '16px' }}>
						<Skeleton variant="rectangular" width={60} height={60} />
					</ListItemAvatar>
					<Skeleton variant="text" width={150} height={20} />
				</ListItemButton>
			</ListItem>
		)
	}

	return (
		<Grid item xs={6} sm={4} md={3} lg={2}>
			<Card
				sx={{
					borderRadius: 2,
					padding: 2,
					cursor: 'pointer',
					transition: 'background-color 350ms',
					'&:hover': {
						bgcolor: '#222'
					}
				}}
				onClick={() => navigate(`/playlist/${id}`)}
			>
				<Box sx={{ width: '100%', marginBottom: 1, 'aspect-ratio': '1/1' }}>
					<img width="100%" height="100%" style={{ objectFit: 'cover' }} alt={name} src={images?.[0]?.url} />
				</Box>
				<Box sx={{}}>
					<Typography sx={{ color: 'text.primary', fontSize: 14 }} noWrap>
						{name}
					</Typography>
					<Typography
						sx={{
							color: 'text.secondary',
							fontSize: 12,
							overflow: 'hidden',
							// all kod nedan är till för att texten inte blir längre än 2 rader
							textOverflow: 'ellipsis',
							display: '-webkit-box',
							WebkitLineClamp: '2',
							WebkitBoxOrient: 'vertical'
						}}
					>
						{description}
					</Typography>
				</Box>
			</Card>
		</Grid>
	)
}

export default PlaylistCard
