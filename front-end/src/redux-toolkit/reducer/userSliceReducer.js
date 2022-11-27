import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userSliceReducer = createSlice({
  name: "users",
  initialState: {
    user: {},
    token: "",
    status: "idle",
    isLogin: false,
    isAdmin: false,
  },
  extraReducers: (builder) => {
    builder

      .addCase(login.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "idle";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.id = action.payload.id;
        state.status = "idle";
      });
  },
});

export default userSliceReducer.reducer;

export const login = createAsyncThunk("users/login", async (user) => {
  try {
    const res = await axios.post("/users/login", {
      ...user,
    });
    // toast.success('Login successfully ^^')
    // window.location = "/furnituno";
    localStorage.setItem("firstLogin", true);
    localStorage.setItem("token", res.data.data.token);
    // localStorage.setItem('refreshtoken',res.data.refreshToken)
    return res.data.data;
  } catch (err) {
    console.log(err.response.data.msg);
  }
});

// export const getUser = createAsyncThunk("users/getUser", async ())
