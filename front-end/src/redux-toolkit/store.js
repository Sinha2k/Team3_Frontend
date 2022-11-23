import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../redux-toolkit/reducer/userSliceReducer";
import productSliceReducer from "./reducer/productSliceReducer";

const store = configureStore({
  reducer: {
    users: userSliceReducer.reducer,
    product: productSliceReducer.reducer,
  },
});

export default store;
