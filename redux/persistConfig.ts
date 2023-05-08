import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import menuSlice from './slices/menuSlice';
import cartSlice from "./slices/cartSlice";
import favoriteSlice from "./slices/favoriteSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cartSlice", "favoriteSlice"],
  };


const rootReducer = combineReducers({
  menuSlice,
  cartSlice,
  favoriteSlice,
});

const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types in middleware serialization checks
          ignoredActions: [HYDRATE],
        },
      }),
  });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default persistedReducer;
