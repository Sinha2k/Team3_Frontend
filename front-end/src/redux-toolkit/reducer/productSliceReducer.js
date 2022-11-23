import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const productSliceReducer = createSlice({
  name: "products",
  initialState: {
    productList: [],
    product: {},
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
        state.status = "idle";
      })

      //get product by id
      .addCase(getProductById.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.product = action.payload;
        state.status = "idle";
      });
  },
});

export const getAllProduct = createAsyncThunk("products/getAll", async () => {
  const res = await axios.get("/products/findAllProduct");
  return res.data.data;
});

export const getProductById = createAsyncThunk(
  "products/getProduct",
  async (id) => {
    const res = await axios.get(
      "https://furniture2022.herokuapp.com/product/getproduct/" + id
    );
    return res.data;
  }
);

export default productSliceReducer;
