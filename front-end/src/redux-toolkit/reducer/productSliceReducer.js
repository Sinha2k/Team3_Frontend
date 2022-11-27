import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const productSliceReducer = createSlice({
  name: "products",
  initialState: {
    productList: [],
    productListSearch: [],
    product: {},
    status: "idle",
    statusSearch: "idle",
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
      })

      //search product list
      .addCase(searchProduct.pending, (state, action) => {
        state.statusSearch = "loading";
      })
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.productListSearch = action.payload;
        state.statusSearch = "idle";
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

export const searchProduct = createAsyncThunk(
  "products/search",
  async (keyword) => {
    const res = await axios.get("/products/search/" + keyword);
    return res.data.data;
  }
);

export default productSliceReducer;
