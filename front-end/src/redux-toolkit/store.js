import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../redux-toolkit/reducer/userSliceReducer";
import cartSliceReducer from "./reducer/cartSliceReducer";
import categorySliceReducer from "./reducer/categorySliceReducer";
import productSliceReducer from "./reducer/productSliceReducer";

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    product: productSliceReducer.reducer,
    category: categorySliceReducer.reducer,
    cart: cartSliceReducer.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
