import { createSlice } from '@reduxjs/toolkit';

import { AppState } from '../store';

export interface CartItem {
  id: number,
  name: string,
  count: number
}

export interface CounterState {
  cart: CartItem[]
  counter: number
}

const initialState: CounterState = {
  cart: [],
  counter: 0,
};

export const cartSlice = createSlice({
  name: 'cartCounter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    addProduct: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if(!item) {
        state.cart.push(action.payload);
      } else {
        item.count++;
      }
    },
    deleteProduct: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if(item) {
        state.cart = state.cart.filter(item => item.id !== action.payload);
      }
    }
  },
});

export const { increment, decrement, addProduct, deleteProduct } = cartSlice.actions;

export const selectCount = (state: AppState) => state.menuSlice.opened;




export default cartSlice.reducer;