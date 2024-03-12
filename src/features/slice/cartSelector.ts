import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const getCartSlice = (state: RootState) => state.cart;

export const cartSelect = createSelector(getCartSlice, (data) => {
  return data.cart.products;
});
