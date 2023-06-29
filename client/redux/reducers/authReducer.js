import { createSlice } from '@reduxjs/toolkit';
import { login, signup, logout, getUser } from '../actions/authActions';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.loading = false;
      })
      .addCase(signup.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.loading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.token = action.payload.token;
          state.user = action.payload.user;
        } else {
          state.token = null;
          state.user = null;
        }
      });
  },
});

export const userSelector = (state) => state.auth.user;
export const tokenSelector = (state) => state.auth.token;
export const loadingSelector = (state) => state.auth.loading;

export default authSlice.reducer;
