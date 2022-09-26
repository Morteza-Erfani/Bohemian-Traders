import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  collection: "",
  products: [],
  filters: {
    sizes: [],
    price: {
      min: 0,
      max: Infinity,
    },
    other: {
      inStock: false,
    },
  },
  sortOption: "",
  view: "product",
};

export const productsPageSlice = createSlice({
  name: "productsPage",
  initialState,
  reducers: {
    showDetails: (state, action) => {
      state.category = action.payload.category;
      state.collection = action.payload.collection;
    },
    filterReset: (state) => {
      state.filters = initialState.filters;
    },
    addSize: (state, action) => {
      state.filters.sizes = state.filters.sizes.concat(action.payload.size);
    },
    removeSize: (state, action) => {
      const sizes = state.filters.sizes;
      const i = sizes.indexOf(action.payload.size);
      sizes.splice(i, 1);
      state.filters.sizes = sizes;
    },
    resetSize: (state) => {
      state.filters.sizes = initialState.filters.sizes;
    },
    setMinPrice: (state, action) => {
      state.filters.price.min = +action.payload.minPrice;
    },
    setMaxPrice: (state, action) => {
      state.filters.price.max = +action.payload.maxPrice;
    },
    justInStock: (state, action) => {
      state.filters.other.inStock = action.payload.inStock;
    },
    setSortOption: (state, action) => {
      state.sortOption = action.payload.sortOption;
    },
    viewType: (state, action) => {
      state.view = action.payload.view;
    },
  },
});

export const {
  showDetails,
  addSize,
  removeSize,
  filterReset,
  resetSize,
  setMinPrice,
  setMaxPrice,
  justInStock,
  setSortOption,
  viewType,
} = productsPageSlice.actions;

export default productsPageSlice.reducer;
