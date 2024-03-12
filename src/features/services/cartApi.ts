import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCart = createAsyncThunk("cart/getCart", async (_, thunkAPI) => {
  try {
    const res = await axios(`${BASE_URL}cart/1`);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});
