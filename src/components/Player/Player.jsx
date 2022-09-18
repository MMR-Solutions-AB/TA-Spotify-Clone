import React from 'react'
import { Box, Grid, Typography, Avatar } from '@mui/material'

const Player = ({ spotifyApi }) => {
	return (
		<Box>
			<Grid
				container
				px={3}
				sx={{
					bgcolor: 'Background.paper',
					height: 100,
					cursor: { xs: 'pointer', md: 'auto' },
					width: '100%',
					borderTop: '1px solid #292929'
				}}
			>
				<Grid
					item
					xs={12}
					md={3}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start'
					}}
				>
					<Avatar
						src={
							'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYRbVygZrmKYrNyzTKfcv1UcsKBBvKbQWvIA&usqp=CAU'
						}
						alt={'#'}
						variant="square"
						sx={{ width: 56, height: 56, marginRight: 2 }}
					/>
					<Box>
						<Typography sx={{ color: 'text.primary', fontSize: 14 }}>Baby</Typography>
						<Typography sx={{ color: 'text.secondary', fontSize: 12 }}>Justin Bieber</Typography>
					</Box>
				</Grid>
				<Grid
					item
					sx={{
						display: { xs: 'none', md: 'flex' },
						flex: 1,
						justifyContent: { xs: 'flex-end', md: 'center' },
						alignItems: 'center'
					}}
				>
					Player controller
				</Grid>
			</Grid>
		</Box>
	)
}

export default Player
