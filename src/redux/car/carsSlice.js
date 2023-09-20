import { createSlice } from '@reduxjs/toolkit';
import { fetchCars} from './carsOperations';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
      items: [],
      favorites: [],
      isLoading: false,
      error: null,
    },
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
      },
    
    deleteFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(favorite =>
        favorite.id !== action.payload.id
      );
    },
  },
    extraReducers: builder => {
      builder
        .addCase(fetchCars.pending, state => {
          state.isLoading = true;
        })
        .addCase(fetchCars.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        })
        .addCase(fetchCars.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
    },
  });
  
  export const { addToFavorites, deleteFromFavorites } = carsSlice.actions;
  export default  carsSlice.reducer;