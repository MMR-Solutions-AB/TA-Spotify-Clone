import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography, Avatar } from '@mui/material'
import { getAccessTokenFromStorage } from '../../utils/getAccessTokenFromStorage'
import PlayerControls from '../PlayerControls/PlayerControls'
import PlayerVolume from '../PlayerVolume/PlayerVolume'
import PlayerOverlay from '../PlayerOverlay/PlayerOverlay'

const Player = ({ spotifyApi }) => {
	const [localPlayer, setPlayer] = useState(null)
	const [is_paused, setPaused] = useState(false)
	const [current_track, setTrack] = useState(null)
	const [device, setDevice] = useState(null)
	const [duration, setDuration] = useState(null)
	const [progress, setProgress] = useState(null)
	const [playerOverlayIsOpen, setPlayerOverlayIsOpen] = useState(false)

	useEffect(() => {
		const token = getAccessTokenFromStorage()
		const script = document.createElement('script')
		script.src = 'https://sdk.scdn.co/spotify-player.js'
		script.async = true
		document.body.appendChild(script)

		window.onSpotifyWebPlaybackSDKReady = () => {
			const player = new window.Spotify.Player({
				name: 'Techover player',
				getOAuthToken: (cb) => {
					cb(token)
				},
				volume: 0.5
			})

			player.addListener('ready', ({ device_id }) => {
				console.log('Ready with Device ID', { device_id, player })
				setDevice(device_id)
				setPlayer(player)
			})

			player.addListener('player_state_changed', (state) => {
				if (!state || !state.track_window?.current_track) {
					return
				}
				console.log(state)
				const duration_ms = state.track_window.current_track.duration_ms / 1000
				const position_ms = state.position / 1000
				setDuration(duration_ms)
				setProgress(position_ms)
				setTrack(state.track_window.current_track)
				setPaused(state.paused)
			})

			setPlayer(player)
			player.connect()
		}
	}, [])

	useEffect(() => {
		if (!localPlayer) return
		async function connect() {
			await localPlayer.connect()
		}

		connect()
		return () => {
			localPlayer.disconnect()
		}
	}, [localPlayer])

	useEffect(() => {
		const transferMyPlayback = async () => {
			if (device) {
				await spotifyApi.transferMyPlayback([device], true)
			}
		}
		const getDeviceFromApi = async () => {
			await spotifyApi.getMyDevices()
		}
		getDeviceFromApi()
		transferMyPlayback()
	}, [device, spotifyApi])

	if (!localPlayer || !current_track?.name)
		return (
			<Box
				sx={{
					position: 'absolute',
					inset: '0px',
					bgcolor: '#000000cc',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
				p={3}
			>
				<Box sx={{ bgcolor: 'background.paper', maxWidth: 450 }} p={5}>
					<Typography sx={{ color: 'text.primary', fontSize: 28, fontWeight: 'bold' }}>
						Hur du startar
					</Typography>
					<Typography sx={{ color: 'text.secondary', fontSize: 14, marginBottom: 2 }}>
						Navigera till din Spotify applikation på antigen din dator eller telefon. Tryck på "device"
						knappen där nere till höger och välj sedan "Techover player" som device. Precis som du ser på
						bilden nedan
					</Typography>
					<Avatar
						src={'/device-select.png'}
						alt={'device select'}
						variant="square"
						sx={{ width: 336, height: 330, objectFit: 'cover' }}
					/>
				</Box>
			</Box>
		)

	return (
		<Box>
			<Grid
				container
				px={3}
				onClick={() => {
					setPlayerOverlayIsOpen((c) => !c)
				}}
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
						src={current_track?.album.images[0].url}
						alt={'#'}
						variant="square"
						sx={{ width: 56, height: 56, marginRight: 2 }}
					/>
					<Box>
						<Typography sx={{ color: 'text.primary', fontSize: 14 }}>{current_track?.name}</Typography>
						<Typography sx={{ color: 'text.secondary', fontSize: 12 }}>
							{current_track?.artists[0].name}
						</Typography>
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
					<PlayerControls
						progress={progress}
						is_paused={is_paused}
						duration={duration}
						player={localPlayer}
					/>
				</Grid>
				<PlayerVolume player={localPlayer} />
			</Grid>
			<PlayerOverlay
				progress={progress}
				is_paused={is_paused}
				duration={duration}
				player={localPlayer}
				playerOverlayIsOpen={playerOverlayIsOpen}
				closeOverlay={() => setPlayerOverlayIsOpen(false)}
				current_track={current_track}
			/>
		</Box>
	)
}

export default Player
