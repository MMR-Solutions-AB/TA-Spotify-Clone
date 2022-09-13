import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography, Avatar } from '@mui/material'
import { getAccessTokenFromStorage } from '../../utils/getAccessTokenFromStorage'
import PlayerControls from '../PlayerControls/PlayerControls'
import PlayerVolume from '../PlayerVolume/PlayerVolume'
import PlayerOverlay from '../PlayerOverlay/PlayerOverlay'

const Player = ({ spotifyApi }) => {
	const track = {
		name: '',
		album: {
			images: [{ url: '' }]
		},
		artists: [{ name: '' }]
	}

	const [localPlayer, setPlayer] = useState(null)
	const [is_paused, setPaused] = useState(false)
	const [current_track, setTrack] = useState(track)
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
				name: 'Web Playback SDK',
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
		localPlayer.connect()
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

	console.log('track')
	console.log(current_track)

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
