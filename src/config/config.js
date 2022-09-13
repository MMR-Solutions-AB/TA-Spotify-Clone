export const authEndpoint = 'https://accounts.spotify.com/authorize'
export const clientId = process.env.REACT_APP_CLIENT_ID
export const liveURL = process.env.REACT_APP_LIVE_URL
export const devURL = 'http://localhost:3000/'
export const redirectURL = process.env.NODE_ENV === 'production' ? liveURL : devURL
export const scopes = [
	'playlist-read-collaborative',
	'playlist-modify-public',
	'playlist-read-private',
	'playlist-modify-private',
	'app-remote-control',
	'streaming',
	'user-read-email',
	'user-read-private',
	'user-library-modify',
	'user-library-read',
	'user-top-read',
	'user-read-playback-position',
	'ugc-image-upload',
	'user-modify-playback-state',
	'user-read-playback-state',
	'user-read-currently-playing',
	'user-follow-modify',
	'user-follow-read',
	'user-read-recently-played'
]

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scopes.join(
	'%20'
)}&response_type=token&show_dialog=true`
