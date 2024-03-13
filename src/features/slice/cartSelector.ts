import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const getCartSlice = (state: RootState) => state;

export const cartSelect = createSelector(getCartSlice, (data) => {
  return data.cart;
});
