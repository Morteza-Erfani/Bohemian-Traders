import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  collection: "",
  products: [],
  orderedProducts: [],
};

export const productsPageSlice = createSlice({
  name: "productsPage",
  initialState,
  reducers: {
    showDetails: (state, action) => {
      state.category = action.payload.category;
      state.collection = action.payload.collection;
    },
  },
});

export const { showDetails } = productsPageSlice.actions;

export default productsPageSlice.reducer;
