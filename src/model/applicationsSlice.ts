import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import type Application from "@/types/Application";

export type ApplicationsState = Application[];
type ApplicationContent = Pick<Application, "title" | "content">;

const generateNewApplication = ({
  title,
  content,
}: ApplicationContent): Application => ({
  id: nanoid(),
  title,
  content,
  isOpen: true,
  maximize: false,
  minimize: false,
});

const initialState: ApplicationsState = [
  generateNewApplication({
    title: "Introduction",
    content: "저를 소개합니다.",
  }),
  generateNewApplication({
    title: "Tech Stack",
    content: "기술 스택",
  }),
];

export const applicationSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    closeById: (state, action: PayloadAction<string>) =>
      state.filter((s) => s.id !== action.payload),
  },
});

export const { closeById } = applicationSlice.actions;
export default applicationSlice.reducer;
