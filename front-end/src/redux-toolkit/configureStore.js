import { configureStore } from "@reduxjs/toolkit";
import { createReducer } from "./redux";

export function configureAppStore() {
  const store = configureStore({
    reducer: createReducer(),
    devTools: process.env.NODE_ENV !== "production",
  });
  return store;
}
