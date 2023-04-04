import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import db from "@/db";

import type { ApplicationState } from "@/types/ApplicationState";
import type { NanoId } from "@/types/NanoId";

export type ExecutionContextState = ApplicationState[];
const initialState: ExecutionContextState = Object.values(db);

export const executionContextSlice = createSlice({
  name: "executionContext",
  initialState,
  reducers: {
    focusById: (state, action: PayloadAction<NanoId>) => {
      return state.map((app) => {
        if (app.id !== action.payload) return { ...app, isFocused: false };
        return { ...app, isFocused: true };
      });
    },
    openAppById: (state, action: PayloadAction<NanoId>) => {
      return state.map((app) => {
        if (app.id !== action.payload) return app;
        return { ...app, isOpen: true };
      });
    },
    closeAppById: (state, action: PayloadAction<NanoId>) => {
      return state.map((app) => {
        if (app.id !== action.payload) return app;
        return { ...app, isOpen: false };
      });
    },
    minimizeAppById: (state, action: PayloadAction<NanoId>) => {
      return state.map((app) => {
        if (app.id !== action.payload) return app;
        return { ...app, minimize: true, maximize: false, isFocused: false };
      });
    },
    togglieMaiximizeById: (state, action: PayloadAction<NanoId>) => {
      return state.map((app) => {
        if (app.id !== action.payload) return app;
        return { ...app, maximize: !app.maximize, minimize: false };
      });
    },
    startDraggingById: (state, action: PayloadAction<NanoId>) => {
      return state.map((app) => {
        if (app.id !== action.payload) return app;
        return { ...app, isDragging: true };
      });
    },
    stopDraggingAll: (state) => {
      return state.map((app) => {
        return { ...app, isDragging: false };
      });
    },
  },
});

export const {
  closeAppById,
  focusById,
  togglieMaiximizeById,
  minimizeAppById,
  openAppById,
  startDraggingById,
  stopDraggingAll,
} = executionContextSlice.actions;
export const executionContextReducer = executionContextSlice.reducer;
