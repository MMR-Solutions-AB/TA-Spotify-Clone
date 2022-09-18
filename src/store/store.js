import { configureStore } from '@reduxjs/toolkit'
import playlistSliceReducer from './playlistSlice'

export const store = configureStore({
	reducer: {
		playlist: playlistSliceReducer
	}
})
