import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const domain = "https://furniture2022.herokuapp.com/";

const cartSliceReducer = createSlice({
  name: "cart",
  initialState: {
    numOfProduct: 0,
    cart: [],
    totalCart: 0,
    status: "idle",
    statusCheckout: "idle",
  },
  extraReducers: (builder) => {
    builder

      //get cart
      .addCase(getAllCart.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllCart.fulfilled, (state, action) => {
        state.cart = action.payload.obj;
        state.numOfProduct = action.payload.numOfProduct;
        state.totalCart = action.payload.totalCart;
        state.status = "idle";
      })

      //add to cart
      .addCase(addToCart.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.numOfProduct = action.payload.numOfProduct;
        state.status = "success";
      })

      //remove cart
      .addCase(removeFromCart.pending, (state, action) => {
        state.status = "loading";
      })
      // .addCase(removeFromCart.rejected, (state, action) => {
      //   state.status = "error";
      // })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.cart = action.payload.obj;
        state.numOfProduct = action.payload.numOfProduct;
        state.totalCart = action.payload.totalCart;
        state.status = "success";
      })

      //update cart
      .addCase(updateCart.pending, (state, action) => {
        // state.status = "loading";
      })
      // .addCase(updateCart.rejected, (state, action) => {
      //   state.status = "error";
      // })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.cart = action.payload.obj;
        state.totalCart = action.payload.totalCart;
        state.status = "success";
      })

      //checkout
      .addCase(checkout.pending, (state, action) => {
        state.statusCheckout = "loading";
      })
      .addCase(checkout.rejected, (state, action) => {
        state.statusCheckout = "error";
      })
      .addCase(checkout.fulfilled, (state, action) => {
        state.cart = [];
        state.numOfProduct = 0;
        state.totalCart = 0;
        state.statusCheckout = "success";
      });
  },
});

export const getAllCart = createAsyncThunk("cart/getAll", async () => {
  const token = localStorage.getItem("token");
  const res = await axios.get(domain + "cart/getCart", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
});

export const addToCart = createAsyncThunk(
  "cart/add",
  async (product_variation_id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        domain + "cart/addToCart",
        {
          quantity: 1,
          product_variation_id: product_variation_id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return res.data;
    } catch (err) {
      console.log(err.response);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/remove",
  async (product_variation_id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(
        domain + "cart/removeFromCart/" + product_variation_id,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return res.data;
    } catch (err) {
      console.log(err.response);
    }
  }
);

export const updateCart = createAsyncThunk("cart/update", async (update) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.put(
      domain + "cart/updateCart",
      {
        quantity: update.quantity,
        product_variation_id: update.product_variation_id,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err.response);
  }
});

export const checkout = createAsyncThunk("cart/checkout", async (data) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(
      domain + "order/createOrder",
      {
        ...data,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err.response);
  }
});

export default cartSliceReducer;
