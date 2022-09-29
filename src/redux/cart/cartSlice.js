import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSize: "",
  cart: [],
  totalPrice: 0,
  totalCount: 0,
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
        let fIndex;
        for (const [index, product] of state.cart.entries()) {
          if (product.id === action.payload.id) {
            if (product.size === action.payload.size) {
              isFind = true;
              fIndex = index;
            }
          }
        }
        if (isFind) {
          state.cart[fIndex].quantity += 1;
          state.totalCount += 1;
          state.totalPrice += action.payload.price;
        } else {
          state.cart.push({
            id: action.payload.id,
            size: action.payload.size,
            quantity: 1,
            price: action.payload.price,
            name: action.payload.name,
            photo: action.payload.photo,
          });
          state.totalCount += 1;
          state.totalPrice += action.payload.price;
        }
      } else {
        state.cart.push({
          id: action.payload.id,
          size: action.payload.size,
          quantity: 1,
          price: action.payload.price,
          name: action.payload.name,
          photo: action.payload.photo,
        });
        state.totalCount += 1;
        state.totalPrice += action.payload.price;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      localStorage.setItem("totalCount", JSON.stringify(state.totalCount));
    },
    restoreCart: (state, action) => {
      if (action.payload.prevCart !== null) {
        const StarterCart = state.cart.concat(action.payload.prevCart);
        state.cart = StarterCart;
        state.totalPrice = action.payload.totalPrice;
        state.totalCount = action.payload.totalCount;
      }
    },
    decrease: (state, action) => {
      let fIndex;
      for (const [index, product] of state.cart.entries()) {
        if (product.id === action.payload.id) {
          if (product.size === action.payload.size) {
            fIndex = index;
          }
        }
      }
      state.cart[fIndex].quantity -= 1;
      state.totalCount -= 1;
      state.totalPrice -= action.payload.price;
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      localStorage.setItem("totalCount", JSON.stringify(state.totalCount));
    },
    remove: (state, action) => {
      let fIndex;
      for (const [index, product] of state.cart.entries()) {
        if (product.id === action.payload.id) {
          if (product.size === action.payload.size) {
            fIndex = index;
          }
        }
      }
      state.cart.splice(fIndex, 1);
      state.totalCount -= 1;
      state.totalPrice -= action.payload.price;
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      localStorage.setItem("totalCount", JSON.stringify(state.totalCount));
    },
  },
});

export const { selectSize, addToCart, restoreCart, decrease, remove } =
  cartSlice.actions;

export default cartSlice.reducer;
