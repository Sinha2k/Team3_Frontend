import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const productSliceReducer = createSlice({
  name: "products",
  initialState: {
    productList: [],
    token: "",
    status: "idle",
  },
  extraReducers: (builder) => {
    builder

      //get product list
      .addCase(getAllProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.productList = action.payload;
      });
  },
});

export const getAllProduct = createAsyncThunk("products/getAll", async () => {
  const res = await axios.get("/products/findAllProduct");
  return res.data.data;
});

export default productSliceReducer;
