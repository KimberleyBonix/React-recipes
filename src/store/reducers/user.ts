import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Credential as TCredentials, User as TUser } from '../../@types/user';

export const initialState: TUser = {
  logged: false,
  credentials: {
    email: 'bob@mail.io',
    password: 'bobo',
  },
  pseudo: 'Anonymous',
  token: null,
  loggedMessage: '',
};

export const login = createAsyncThunk(
  'user/login',
  async (credentials: TCredentials) => {
    const { data } = await axios.post<{ pseudo: string }>(
      'https://orecipes-api.onrender.com/api/login',
      credentials
    );
    return data;
  }
);

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.logged = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      state.pseudo = action.payload.pseudo;
      state.logged = true;
      state.loggedMessage = `Bienvenue ${state.pseudo}`;
    });
  },
});

export const { logout } = userReducer.actions;

export default userReducer.reducer;
