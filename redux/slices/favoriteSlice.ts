import { createSlice } from '@reduxjs/toolkit';

import { AppState } from '../store';

export interface CartItem {
  id: number,
  name: string,
  count: number
}

export interface CounterState {
  favorite: CartItem[]
}

const initialState: CounterState = {
  favorite: [],
};

export const favoriteSlice = createSlice({
  name: 'addFavorite',
  initialState,
  reducers: {
    addFav: (state, action) => {
      state.favorite.push(action.payload);
    },
    deleteProduct: (state, action) => {
     
    }
  },
});

export const { addFav, deleteProduct } = favoriteSlice.actions;

export const selectCount = (state: AppState) => state.rootReducer.menuSlice.opened;



export default favoriteSlice.reducer;