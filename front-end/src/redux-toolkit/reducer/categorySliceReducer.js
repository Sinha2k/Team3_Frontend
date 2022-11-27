import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const categorySliceReducer = createSlice({
  name: "category",
  initialState: {
    categorytList: [],
    status: "idle",
  },
  extraReducers: (builder) => {
    builder

      //get category list
      .addCase(getAllCategory.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.categorytList = action.payload;
        state.status = "idle";
      });
  },
});

export const getAllCategory = createAsyncThunk("category/getAll", async () => {
  const res = await axios.get("/category/findAllCategory");
  return res.data.data;
});

export default categorySliceReducer;
