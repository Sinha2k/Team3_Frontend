import { combineReducers } from "@reduxjs/toolkit";

export function createReducer(injectedReducers = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error

  return combineReducers({
    ...injectedReducers,
  });
}
