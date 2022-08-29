import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: null,
  playList: [],
};

export const playListSlice = createSlice({
  name: "playlist",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPlaylist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.playList = action.payload;
      })
      .addCase(getPlaylist.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getPlaylist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const getPlaylist = createAsyncThunk(
  "getPlaylist",
  async (spotifyApi, thunkAPI) => {
    try {
      const data = await spotifyApi.getUserPlaylists();
      return data.body.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export default playListSlice.reducer;
