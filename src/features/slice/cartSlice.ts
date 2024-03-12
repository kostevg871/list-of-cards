import { createSlice } from "@reduxjs/toolkit";
import { getCart } from "../services/cartApi";
import { ISingleCart } from "../../interfaces/interface";

export interface IStateCart {
  cart: ISingleCart;
  isLoading: boolean;
  error: null;
}

const initialState: IStateCart = {
  cart: {
    id: 0,
    products: [],
    total: 0,
  },
  isLoading: true,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCart.fulfilled, (state, { payload }) => {
      state.cart = payload;
      state.isLoading = false;
    });
    builder.addCase(getCart.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default cartSlice.reducer;
