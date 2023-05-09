import { createSlice } from '@reduxjs/toolkit';

import { AppState } from '../store';

export interface CounterState {
  opened: boolean
  menuLevel: number
}

const initialState: CounterState = {
  opened: false,
  menuLevel: 1
};

export const menuSlice = createSlice({
  name: 'menuOpened',
  initialState,
  reducers: {
    setOpen: (state) => {
      state.opened = true;
    },
    setClose: (state) => {
      state.opened = false;
    },
    setMenuLevel: (state, action) => {
      state.menuLevel = action.payload;
    }
  },

});

export const { setOpen, setClose, setMenuLevel } = menuSlice.actions;

export const selectCount = (state: AppState) => state.rootReducer.menuSlice.opened;



export default menuSlice.reducer;