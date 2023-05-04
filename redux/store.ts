import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import menuSlice from './slices/menuSlice';
import cartSlice from "./slices/cartSlice";


const rootReducer = combineReducers({
  menuSlice,
  cartSlice
});

const makeStore = () =>
  configureStore({
    reducer: {
      rootReducer,
    },
    devTools: true,
  });

const store = makeStore();



export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);