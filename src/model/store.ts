import { configureStore } from "@reduxjs/toolkit";
import applicationsReducer from "./applicationsSlice";

export const store = configureStore({
  reducer: {
    applications: applicationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
