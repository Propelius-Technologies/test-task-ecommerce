import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface addToCartType {
  total: number;
  cart: Array<{ id: number; quantity: number }>;
}
const initialState: addToCartType = {
  total: 0,
  cart: [],
};
export const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<number>) => {
      const { payload } = action;
      state.total++;
      const found: number = state.cart?.findIndex(({ id }) => id === payload);
      found >= 0
        ? state.cart[found].quantity++
        : state.cart.push({
            id: payload,
            quantity: 1,
          });
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      const { payload } = action;
      state.total--;
      const found: number = state.cart?.findIndex(({ id }) => id === payload);
      if (found >= 0) {
        if (state.cart[found].quantity === 1) {
          state.cart = state.cart?.filter(({ id }) => id !== payload);
        } else {
          state.cart[found].quantity--;
        }
      }
    },
    deleteItemFromCart: (state, action: PayloadAction<number>) => {
      const { payload } = action;
      const found: number = state.cart?.findIndex(({ id }) => id === payload);
      if (found >= 0) {
        state.total -= state.cart[found].quantity;
        state.cart = state.cart?.filter(({ id }) => id !== payload);
      }
    },
    placeOrder: (state) => {
      state.cart = [];
      state.total = 0;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  placeOrder,
  deleteItemFromCart,
} = addToCartSlice.actions;

export default addToCartSlice.reducer;
