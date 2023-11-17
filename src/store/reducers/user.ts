import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  Credential as TCredentials,
  User as TUser,
  UserData,
} from '../../@types/user';

export const initialState: TUser = {
  logged: false,
  loading: false,
  credentials: {
    email: 'bob@mail.io',
    password: 'bobo',
  },
};

export const login = createAsyncThunk(
  'user/login',
  async (credentials: TCredentials) => {
    const { data } = await axios.post<UserData>(
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
    changeCredentialsFields: (
      state,
      action: PayloadAction<{
        field: 'email' | 'password';
        value: string;
      }>
    ) => {
      const { field, value } = action.payload;
      state.credentials[field] = value;
    },
    logout(state) {
      state.logged = false;
      state.token = undefined;
      state.pseudo = undefined;
    },
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      state.pseudo = action.payload.pseudo;
      state.token = action.payload.token;
      state.logged = true; // ou action.payload.logged (si API mal fait)
      state.loggedMessage = `Bienvenue ${state.pseudo}`;
    });
  },
});

export const { logout, changeCredentialsFields } = userReducer.actions;

export default userReducer.reducer;
