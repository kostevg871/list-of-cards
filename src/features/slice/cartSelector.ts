import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { calcTotalPrice } from "../../utils/calcTotalPrice";

const getCartSlice = (state: RootState) => state;

export const cartSelect = createSelector(getCartSlice, (data) => {
  return data.cart;
});

export const cartCostSelect = createSelector(getCartSlice, (data) => {
  return calcTotalPrice(data.cart.products);
});
