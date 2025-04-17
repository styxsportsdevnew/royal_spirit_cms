import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import cartSlice from "./features/cartSlice";
import authReducer from "./features/loginSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartSlice,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

 
export default store;