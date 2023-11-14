import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Recipe } from '../../@types/recipe';
import data from '../../data';

interface RecipesState {
  list: Recipe[];
}
export const initialState: RecipesState = {
  list: data,
};

export const recipes = createAsyncThunk('recipes/recipes', async () => {
  const { data } = await axios.get(
    'https://orecipes-api.onrender.com/api/recipes'
  );
  return data;
});

const recipesReducer = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(recipes.pending, (state) => {
        console.log('pending');
      })
      .addCase(recipes.rejected, (state) => {
        console.log('error');
      })
      .addCase(recipes.fulfilled, (state, action) => {
        state.list = action.payload;
        console.log(action.payload);
      });
  },
});

export default recipesReducer.reducer;
