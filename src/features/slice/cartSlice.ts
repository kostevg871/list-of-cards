import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getCart } from "../services/cartApi";
import { ISingleCart } from "../../interfaces/interface";
import { calcTotalPrice } from "../../utils/calcTotalPrice";

export interface IStateCart {
  cart: ISingleCart;
  isLoading: boolean;
  error: null;
  allProductsPrice: number;
}

const initialState: IStateCart = {
  cart: {
    id: 0,
    products: [],
    total: 1,
  },
  isLoading: true,
  error: null,
  allProductsPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    countPrice: (state) => {
      state.allProductsPrice = calcTotalPrice(state.cart.products);
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const findItem = state.cart.products.find(
        (obj) => obj.id === action.payload
      );

      if (findItem && findItem.quantity >= 1 && findItem.quantity < 10) {
        findItem.quantity++;
      }

      state.allProductsPrice = calcTotalPrice(state.cart.products);
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const findItem = state.cart.products.find(
        (obj) => obj.id === action.payload
      );

      if (findItem && findItem.quantity > 1) {
        findItem.quantity--;
      }

      state.allProductsPrice = calcTotalPrice(state.cart.products);
    },
    deleteCart: (state, action: PayloadAction<number>) => {
      state.cart.products = state.cart.products.filter(
        (obj) => obj.id !== action.payload
      );
    },
  },
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

export const { countPrice, incrementQuantity, decrementQuantity, deleteCart } =
  cartSlice.actions;

export default cartSlice.reducer;
