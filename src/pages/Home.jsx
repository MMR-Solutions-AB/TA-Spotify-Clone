import React, { useState } from 'react'
import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import TechCard from '../components/Techcard/TechCard'
import profilePicture from '../assets/profile.jpeg'
import reactlogo from '../assets/react.png'
import reduxlogo from '../assets/redux.png'
import routerlogo from '../assets/routerlogo.png'
import spotifylogo from '../assets/spotifylogo.png'
import materialui from '../assets/mui.png'
import netlify from '../assets/netlify.jpeg'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
const Home = () => {
	const initialState = '#0a7b7b59'
	const [gradientColor, setGradientColor] = useState(initialState)

	/* Function takes 2 arguments, the event has a property called "_reactName" witch describes the event. (try console.log(event)) */
	/* The event is being describe in the technology component as a attribute in the HTML. We listen to this event and set the color onHover event */
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
				<img src={data.img} style={{ width: '20px' }} />
				{data.name}
			</a>
		)
	}

	return (
		<Box
			sx={{
				background: `linear-gradient(${gradientColor},#121212, #121212)`,
				width: '100vw',
				padding: '150px 30px',
				boxSizing: 'border-box'
			}}
		>
			<Box sx={{ ...basicBoxStyle, display: 'flex', flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
				<Box sx={imageBox}>
					<img
						style={{ maxWidth: '340px', width: '100%', minWidth: '280px', borderRadius: '50%' }}
						src={profilePicture}
						alt=""
					/>
				</Box>
				<Box sx={textLinkBox}>
					<Typography variant="h1" fontSize="3.1em" fontWeight={400} color="text.primary">
						Hi! I'm Simona
					</Typography>
					<Typography width={{ xs: '100%', md: '80%' }} fontSize="15px" color="text.secondary">
						{loremText}
					</Typography>
					<Box sx={linkBox}>
						{links.map((link, idx) => {
							return <LinkBox key={idx} data={link} />
						})}
					</Box>
				</Box>
			</Box>
			<Box sx={{ ...basicBoxStyle, marginTop: '20px' }}>
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

const imageBox = {
	padding: '20px',
	width: { xs: '100%', md: 'auto' },
	textAlign: { xs: 'center', md: 'start' }
}

const textLinkBox = {
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'column',
	padding: { xs: '0', md: '0 20px' },
	textAlign: { xs: 'center', md: 'start' },
	gap: '10px'
}

const linkStyle = {
	padding: '10px',
	background: '#ffffff1e',
	textDecoration: 'none',
	color: '#ffffff',
	borderRadius: '5px',
	display: 'flex',
	justifyContent: 'space-around',
	alignItems: 'center',
	gap: '10px',
}

const linkBox = {
	display: 'flex',
	gap: '10px',
	padding: '20px 0',
	justifyContent: { xs: 'center', md: 'start' },
	flexWrap: 'wrap'
}

const technologies = [
	{
		name: 'React',
		img: reactlogo,
		color: '#00deff55'
	},
	{
		name: 'React - router',
		img: routerlogo,
		color: '#f4425055'
	},
	{
		name: 'Redux - toolkit',
		img: reduxlogo,
		color: '#7f44c555'
	},
	{
		name: 'Spotify Web API',
		img: spotifylogo,
		color: '#07da5a55'
	},
	{
		name: 'Netlify',
		img: netlify,
		color: '#12487c55'
	},
	{
		name: 'Material UI',
		img: materialui,
		color: '#3e7ff755'
	}
]
const links = [
	{
		name: 'Facebook',
		link: '#',
		img: facebook
	},
	{
		name: 'LinkedIn',
		link: '#',
		img: linkedin
	},
	{
		name: 'Github',
		link: '#',
		img: github
	}
]

const loremText =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.  Ex eveniet dignissimos repellat voluptatibus modi, nisi facere assumenda at nihil doloribus!'
