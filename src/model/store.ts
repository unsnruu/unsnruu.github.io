import { configureStore } from "@reduxjs/toolkit";
import { executionContextReducer } from "./executionContextSlice";

export const store = configureStore({
  reducer: {
    executionContext: executionContextReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
