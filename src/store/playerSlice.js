import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoading: false,
	isError: null,
	playing: false,
	progress: null,
	duration: null,
	device_id: null,
	title: null,
	artist: null,
	image: null,
	playerOverlayOpen: false
}

export const playerSlice = createSlice({
	name: 'player',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(playSongFromList.fulfilled, (state, action) => {
				state = {
					...state,
					...action.payload,
					isLoading: false,
					isError: null
				}
			})
			.addCase(playSongFromList.pending, (state) => {
				state = { ...state, isLoading: true, isError: null }
			})
			.addCase(playSongFromList.rejected, (state, action) => {
				state = { ...state, isLoading: false, isError: action.payload }
			})
	}
})

export const playSongFromList = createAsyncThunk('playSongFromList', async (payload, thunkAPI) => {
	try {
		const { spotifyApi, song } = payload
		const { title, image, artist, duration, position } = song
		await spotifyApi.play(song)
		const data = {
			title,
			image,
			artist,
			duration,
			position,
			progress: 0
		}
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error)
	}
})

export default playerSlice.reducer

export const { addDevice } = playerSlice.actions
