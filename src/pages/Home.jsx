import React, { useState } from 'react'
import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import TechCard from '../components/Techcard/TechCard'
import profilePicture from '../assets/profile.jpeg'

const Home = () => {
	const initialState = '#0a7b7b59'
	const [gradientColor, setGradientColor] = useState(initialState)

	/* Function takes 2 arguments, the event has a property called "_reactName" witch describes the event. (try console.log(event)) */
	/* The event is being describe in the technology component as a attribute in the HTML. We listen to this event and set onHover the color the the props thats passed down */
	/* This is how we can change background color when hover over specific card. */
	const changeColorOnHover = (event, color) => {
		if (event._reactName === 'onMouseEnter') {
			setGradientColor(color)
			console.log(gradientColor)
		}
		if (event._reactName === 'onMouseLeave') {
			setGradientColor(initialState)
		}
	}

	const LinkBox = ({ data }) => {
		return (
			<a href="" style={linkStyle}>
				{data.name}
			</a>
		)
	}

	return (
		<Box
			sx={{
				background: `linear-gradient(${gradientColor},#121212, #121212)`,
				width: '100vw',
				padding: '70px'
			}}
		>
			<Box sx={{ ...basicBoxStyle, display: 'flex', flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
				<Box
					sx={{
						padding: '20px',
						width: { xs: '100%', md: 'auto' },
						textAlign: { xs: 'center', md: 'start' }
					}}
				>
					<img style={{ width: '340px', borderRadius: '50%' }} src={profilePicture} alt="" />
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						padding: { xs: '0', md: '0 20px' },
						textAlign: { xs: 'center', md: 'start' }
					}}
				>
					<Typography variant="h1" fontSize="3.5rem" fontWeight={400} color="text.primary">
						Hi! I'm Simona
					</Typography>
					<Typography fontSize="15px" color="text.secondary">
						{text1}
					</Typography>
					<Typography fontSize="15px" color="text.secondary">
						{text1}
					</Typography>
					<Box
						sx={{
							display: 'flex',
							gap: '10px',
							padding: '20px 0',
							justifyContent: { xs: 'center', md: 'start' }
						}}
					>
						{links.map((link, idx) => {
							return <LinkBox key={idx} data={link} />
						})}
					</Box>
				</Box>
			</Box>
			<Box sx={{ ...basicBoxStyle }}>
				<Divider />
				<Typography padding={'20px 20px'} variant="h4" marginTop={2} color="text.primary">
					Technologies
				</Typography>
			</Box>
			<Grid container sx={{ ...basicBoxStyle }}>
				{technologies.map((item, idx) => {
					return (
						<Grid key={idx} item padding={2} xs={12} md={6} lg={4}>
							<TechCard data={item} setColor={changeColorOnHover} />
						</Grid>
					)
				})}
			</Grid>
		</Box>
	)
}

export default Home
const basicBoxStyle = { maxWidth: '1300px', width: '100%', margin: '0 auto' }

const linkStyle = {
	width: '100px',
	padding: '10px',
	background: '#ffffff1e',
	textDecoration: 'none',
	color: '#ffffff',
	borderRadius: '5px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
}

const technologies = [
	{
		name: 'React',
		img: '#',
		color: '#60d9fb55'
	},
	{
		name: 'React - router',
		img: '#',
		color: '#f5415055'
	},
	{
		name: 'Redux - toolkit',
		img: '#',
		color: '#724aba55'
	},
	{
		name: 'Spotify Web API',
		img: '#',
		color: '#07da5a55'
	},
	{
		name: 'Spotify Web API',
		img: '#',
		color: '#07da5a55'
	},
	{
		name: 'Material UI',
		img: '#',
		color: '#0078f255'
	}
]
const links = [
	{
		name: 'Facebook',
		link: '#'
	},
	{
		name: 'LinkedIn',
		link: '#'
	},
	{
		name: 'Github',
		link: '#'
	}
]
const text1 =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eveniet dignissimos repellat voluptatibus modi, nisi facere assumenda at nihil doloribus!'
