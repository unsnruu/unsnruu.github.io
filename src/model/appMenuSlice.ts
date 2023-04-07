import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const startMenuSlice = createSlice({
  name: "appMenu",
  initialState,
  reducers: {
    openMenu: (state) => ({ ...state, isOpen: true }),
    closeMenu: (state) => ({ ...state, isOpen: false }),
  },
});

export const { openMenu, closeMenu } = startMenuSlice.actions;
export const appMenuReducer = startMenuSlice.reducer;
