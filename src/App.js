import { useEffect, useState } from 'react'
import Login from './pages/Login'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import { getAccessToken } from './utils/getAccessToken'
import { getAccessTokenFromStorage } from './utils/getAccessTokenFromStorage'
import Dashboard from './components/Dashboard/Dashboard'

function App({ spotifyApi }) {
	const [token, setToken] = useState(getAccessTokenFromStorage)

	useEffect(() => {
		// setting the accessToken to token from session storage or from the url
		let accessToken = getAccessTokenFromStorage() || getAccessToken()

		if (accessToken) {
			setToken(accessToken)
			sessionStorage.setItem('spotifyToken', accessToken)
			window.location.hash = ''
		}
	}, [])

	return (
		<Box className="App">
			{token ? (
				<Dashboard spotifyApi={spotifyApi} />
			) : (
				<Routes>
					<Route path="*" element={<Login />} />
				</Routes>
			)}
		</Box>
	)
}

export default App
