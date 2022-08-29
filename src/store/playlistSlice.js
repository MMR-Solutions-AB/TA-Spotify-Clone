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



