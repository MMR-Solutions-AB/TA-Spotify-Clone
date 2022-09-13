import { createTheme } from '@mui/material'

export const themeOptions = createTheme({
	palette: {
		primary: {
			main: '#F07900',
			light: '#F8A145',
			dark: '#3b5249',
			contrastText: '#ffffff'
		},
		background: {
			default: '#000000',
			paper: '#121212'
		},
		text: {
			primary: '#ffffff',
			secondary: '#b3b3b3'
		},
		divider: '#292929'
	}
})
