import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../utils/axios';
import { Recipe } from '../../@types/recipe';

interface RecipesState {
  list: Recipe[];
  favorites: Recipe[];
  loading: boolean;
  error: null | string;
}
export const initialState: RecipesState = {
  list: [],
  favorites: [],
  loading: true,
  error: null,
};

export const getRecipes = createAsyncThunk('recipes/recipes', async () => {
  const { data } = await axiosInstance.get<Recipe[]>('/recipes');
  return data;
});

export const getFavoritesRecipes = createAsyncThunk(
  'recipes/favorites',
  async () => {
    const { data } = await axiosInstance.get<{ favorites: Recipe[] }>(
      '/favorites'
    );
    return data;
  }
);

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
        state.loading = false;
      })

      .addCase(getFavoritesRecipes.fulfilled, (state, action) => {
        state.favorites = action.payload.favorites;
      });
  },
});

export default recipesReducer.reducer;
