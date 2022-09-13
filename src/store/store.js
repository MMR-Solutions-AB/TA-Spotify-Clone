import { configureStore } from '@reduxjs/toolkit'
import playlistSliceReducer from './playlistSlice'
import playerSliceReducer from './playerSlice'

export const store = configureStore({
	reducer: {
		playlist: playlistSliceReducer,
		player: playerSliceReducer
	}
})
