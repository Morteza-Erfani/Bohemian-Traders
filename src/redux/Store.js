import { configureStore } from "@reduxjs/toolkit";
import productsPageReducer from "../redux/productsPage/productsPageSlice";

export const store = configureStore({
  reducer: {
    productsPage: productsPageReducer,
  },
});
