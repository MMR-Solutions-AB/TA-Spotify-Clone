import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: null,
  token: null,
  user: null,
};


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {}
})