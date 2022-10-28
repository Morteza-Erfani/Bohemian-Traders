import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  collection: "",
  test: undefined,
  title: "",
  products: [],
  filteredProducts: [],
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

let filteredProductsBeforeSort = [];
let productsBeforeSort = [];

export const productsPageSlice = createSlice({
  name: "productsPage",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
      productsBeforeSort = action.payload.products;
    },
    showDetails: (state, action) => {
      state.category = action.payload.category;
      state.collection = action.payload.collection;
      state.title = action.payload.title;
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
    runSizeFilter: (state) => {
      const sizeFiltered = [];
      if (state.filteredProducts.length === 0) {
        if (state.filters.sizes.length !== 0) {
          let filterIndex = new Set();
          state.filters.sizes.map((filterSize) => {
            for (let [index, product] of state.products.entries()) {
              product.sizes.map((size) => {
                if (filterSize.toUpperCase() === size.name) {
                  filterIndex.add(index);
                }
              });
            }
          });
          filterIndex.forEach((index) => {
            state.filteredProducts.push(state.products[index]);
            filteredProductsBeforeSort = state.filteredProducts;
          });
        } else {
          state.filteredProducts = [];
          filteredProductsBeforeSort = state.products;
        }
      } else {
        if (state.filters.sizes.length !== 0) {
          let filterIndex = new Set();
          state.filters.sizes.map((filterSize) => {
            for (let [index, product] of state.filteredProducts.entries()) {
              product.sizes.map((size) => {
                if (filterSize.toUpperCase() === size.name) {
                  filterIndex.add(index);
                }
              });
            }
          });
          filterIndex.forEach((index) => {
            sizeFiltered.push(state.filteredProducts[index]);
          });
          state.filteredProducts = sizeFiltered;
          filteredProductsBeforeSort = state.filteredProducts;
        } else {
          state.filteredProducts = [];
          filteredProductsBeforeSort = state.products;
        }
      }
    },
    runPriceFilter: (state) => {
      const priceFiltered = [];
      if (state.filteredProducts.length === 0) {
        state.products.map((product) => {
          if (
            product.price > state.filters.price.min &&
            product.price < state.filters.price.max
          ) {
            state.filteredProducts.push(product);
          }
          filteredProductsBeforeSort = state.filteredProducts;
        });
      } else {
        state.filteredProducts.map((product) => {
          if (
            product.price > state.filters.price.min &&
            product.price < state.filters.price.max
          ) {
            priceFiltered.push(product);
          }
        });
        state.filteredProducts = priceFiltered;
        filteredProductsBeforeSort = state.filteredProducts;
      }
    },
    sort: (state) => {
      if (state.sortOption === "") {
        state.products = productsBeforeSort;
        state.filteredProducts = filteredProductsBeforeSort;
      } else {
        if (state.sortOption === "PRICE: ASCENDING") {
          if (state.filteredProducts.length === 0) {
            state.filteredProducts = state.products.sort(
              (a, b) => a.price - b.price
            );
          } else {
            state.filteredProducts.sort((a, b) => a.price - b.price);
          }
        } else if (state.sortOption === "PRICE: DESCENDING") {
          if (state.filteredProducts.length === 0) {
            state.filteredProducts = state.products.sort(
              (a, b) => b.price - a.price
            );
          } else {
            state.filteredProducts.sort((a, b) => b.price - a.price);
          }
        }
      }
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
  runSizeFilter,
  setProducts,
  runPriceFilter,
  sort,
} = productsPageSlice.actions;

export default productsPageSlice.reducer;
