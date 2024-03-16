import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProductInfo, ISingleCart } from "../../interfaces/interface";

export const getProducts = createAsyncThunk(
  "cart/getCart",
  async (_, thunkAPI) => {
    try {
      const cart = await axios<ISingleCart>(`${BASE_URL}cart/1`);
      const productsInfo = await Promise.all(
        cart.data.products.map(async ({ id }) => {
          const productInfo = (
            await axios<IProductInfo>(`${BASE_URL}products/${id}`)
          ).data;
          return productInfo;
        })
      );
      const productsWithDescription = cart.data.products.map((product) => {
        const productInfo = productsInfo.find(({ id }) => product.id === id);
        return { ...product, description: productInfo?.description };
      });
      return productsWithDescription;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
