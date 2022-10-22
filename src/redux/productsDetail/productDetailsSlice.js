import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  collection: "",
  id: "",
};

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    setProductInfo: (state, action) => {
      state.category = action.payload.category;
      state.collection = action.payload.collection;
      state.id = action.payload.id;
    },
  },
});

export const { setProductInfo } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
