import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../cart/redux/cartSlice";
import productsReducer from "../product/redux/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
