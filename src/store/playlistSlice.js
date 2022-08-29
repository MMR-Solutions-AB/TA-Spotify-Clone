import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: null,
  playList: [],
};

const playListSlice = createSlice({
  name: "playlist",
  initialState,
});

export const getPlaylist = createAsyncThunk(
  "getPlaylist",
  async (spotifyApi, thunkAPI) => {
    try {
      const data = await spotifyApi.getUserPlaylists();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
