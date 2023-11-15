import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Recipe } from '../../@types/recipe';
// import data from '../../data';

interface RecipesState {
  list: Recipe[];
  loading: boolean;
  error: null | string;
}
export const initialState: RecipesState = {
  list: [],
  loading: false,
  error: null,
};

export const getRecipes = createAsyncThunk('recipes/recipes', async () => {
  const { data } = await axios.get(
    'https://orecipes-api.onrender.com/api/recipes'
  );
  return data as Recipe[];
});

const recipesReducer = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRecipes.rejected, (state) => {
        state.loading = false;
        state.error = 'Erreur serveur';
      })
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.list = action.payload;
      });
  },
});

export default recipesReducer.reducer;
