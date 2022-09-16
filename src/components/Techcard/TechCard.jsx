import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'

const TechCard = ({ data, setColor }) => {
	const defaultColor = '#0a7b7b59'

	return (
		<Box
			onMouseEnter={(event) => setColor(event, data.color)}
			onMouseLeave={(event) => setColor(event, defaultColor)}
			sx={cardStyle}
		>
			<img
				style={{
					objectFit: 'cover',
					width: '120px',
					borderRadius: '10px 0 0px 10px'
				}}
				src={data.img}
				alt={data.name}
			/>
			<Typography
				color="text.primary"
				sx={{ width: '100%', opacity: '.9', display: 'flex', alignItems: 'center', marginLeft: '10px' }}
				textAlign="start"
			>
				{data.name}
			</Typography>
		</Box>
	)
}

export default TechCard

const cardStyle = {
	height: '80px',
	display: 'flex',
	justifyContent: 'space-between',
	background: '#ffffff1e',
	borderRadius: '10px',
	cursor: 'pointer',
	transition: '0.45s',
	'&:hover': {
		background: '#ffffff39',
		boxShadow: 'rgba(17, 17, 17, 0.2) 0px 8px 24px'
	}
}
