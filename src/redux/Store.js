import { configureStore } from "@reduxjs/toolkit";
import productsPageReducer from "../redux/productsPage/productsPageSlice";
import cartReducer from "../redux/cart/cartSlice";

export const store = configureStore({
  reducer: {
    productsPage: productsPageReducer,
    cart: cartReducer,
  },
});
