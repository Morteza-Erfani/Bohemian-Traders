import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSize: "",
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    selectSize: (state, action) => {
      state.selectedSize = action.payload.size;
    },
    addToCart: (state, action) => {
      if (state.cart.length !== 0) {
        let isFind = false;
        state.cart.map((product) => {
          if (product.id === action.payload.id) {
            if (product.size === action.payload.size) {
              isFind = true;
              product.quantity += 1;
            } else if (!isFind) {
              state.cart.push({
                id: action.payload.id,
                size: action.payload.size,
                quantity: 1,
              });
            }
          } else {
            state.cart.push({
              id: action.payload.id,
              size: action.payload.size,
              quantity: 1,
            });
          }
        });
      } else {
        state.cart.push({
          id: action.payload.id,
          size: action.payload.size,
          quantity: 1,
        });
      }
    },
  },
});

export const { selectSize, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
