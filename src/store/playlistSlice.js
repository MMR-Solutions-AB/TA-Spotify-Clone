import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  albumStatus: {
    isLoading: false,
    isError: null,
  },
  playlistStatus: {
    isLoading: false,
    isError: null,
  },
  albumList: [],
  playlist: [],
};

export const playListSlice = createSlice({
  name: "playlist",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPlaylist.fulfilled, (state, action) => {
        state.albumStatus.isLoading = false;
        state.albumStatus.isError = null;
        state.albumList = action.payload;
      })
      .addCase(getPlaylist.pending, (state) => {
        state.albumStatus.isLoading = true;
        state.albumStatus.isError = null;
      })
      .addCase(getPlaylist.rejected, (state, action) => {
        state.albumStatus.isLoading = false;
        state.albumStatus.isError = action.payload;
      })
      .addCase(getSpecifikPlaylist.fulfilled, (state, action) => {
        state.playlistStatus.isLoading = false;
        state.playlistStatus.isError = null;
        state.playlist = action.payload;
      })
      .addCase(getSpecifikPlaylist.pending, (state) => {
        state.playlistStatus.isLoading = true;
        state.playlistStatus.isError = null;
      })
      .addCase(getSpecifikPlaylist.rejected, (state, action) => {
        state.playlistStatus.isLoading = false;
        state.playlistStatus.isError = action.payload;
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

export const getSpecifikPlaylist = createAsyncThunk(
  "getSpecifikPlaylist",
  async (payload, thunkAPI) => {
    const { spotifyApi, id } = payload;
    try {
      const data = await spotifyApi.getPlaylist(id);
      console.log(data.body);
      return data.body;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export default playListSlice.reducer;
