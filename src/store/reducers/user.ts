import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  Credential as TCredentials,
  User as TUser,
  UserData as TUserData,
} from '../../@types/user';

import { axiosInstance } from '../../utils/axios';
import { LocalStorage } from '../../utils/LocalStorage';

const userData = LocalStorage.getItem('user');
export const initialState: TUser = {
  logged: false,
  loading: false,
  credentials: {
    email: 'bob@mail.io',
    password: 'bobo',
  },
  ...userData,
};

export const login = createAsyncThunk(
  'user/login',
  async (credentials: TCredentials) => {
    const { data } = await axiosInstance.post<TUserData>('/login', credentials);

    LocalStorage.setItem('user', data);

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
      LocalStorage.removeItem('user');
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
    });
  },
});

export const { logout, changeCredentialsFields } = userReducer.actions;

export default userReducer.reducer;
