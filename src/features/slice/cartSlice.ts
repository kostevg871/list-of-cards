import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IProduct } from "../../interfaces/interface";
import { getProducts } from "../services/cartApi";

export interface IStateCart {
  products: IProduct[];
  isLoading: boolean;
  error: null;
}

const initialState: IStateCart = {
  products: [],
  isLoading: true,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQuantity: (state, { payload }: PayloadAction<number>) => {
      const product = state.products.find((obj) => obj.id === payload);

      if (product && product.quantity >= 1 && product.quantity < 10) {
        product.quantity++;
      }
    },
    decrementQuantity: (state, { payload }: PayloadAction<number>) => {
      const product = state.products.find((obj) => obj.id === payload);

      if (product && product.quantity > 1) {
        product.quantity--;
      }
    },
    deleteCart: (state, { payload }: PayloadAction<number>) => {
      state.products = state.products.filter((obj) => obj.id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getProducts.fulfilled,
      (state, { payload }: PayloadAction<IProduct[]>) => {
        state.products = payload;
        state.isLoading = false;
      }
    );
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { incrementQuantity, decrementQuantity, deleteCart } =
  cartSlice.actions;

export default cartSlice.reducer;
