import { configureStore } from "@reduxjs/toolkit";
import { executionContextReducer } from "./executionContextSlice";
import { appMenuReducer } from "./appMenuSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    executionContext: executionContextReducer,
    appMenu: appMenuReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
