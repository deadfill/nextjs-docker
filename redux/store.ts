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
  favoriteSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types in middleware serialization checks
          ignoredActions: [HYDRATE],
        },
      }),
    devTools: true,
  });

const store = makeStore();
const persistor = persistStore(store);
  


export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });



