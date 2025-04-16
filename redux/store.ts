import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import cartSlice from "./features/cartSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart:cartSlice,
  },
});
 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
 
export default store;