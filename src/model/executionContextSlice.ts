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
        if (app.id !== action.payload || app.minimize) {
          return { ...app, isFocused: false };
        }
        return { ...app, isFocused: true };
      });
    },
    stopFocusing: (state) => state.map((app) => ({ ...app, isFocused: false })),
    openAppById: (state, action: PayloadAction<NanoId>) => {
      return state.map((app) => {
        if (app.id !== action.payload) return app;
        return initialState.filter((app) => app.id === action.payload)[0];
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
        return { ...app, minimize: true, maximize: false };
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
  stopFocusing,
} = executionContextSlice.actions;
export const executionContextReducer = executionContextSlice.reducer;
