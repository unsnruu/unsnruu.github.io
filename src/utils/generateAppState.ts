import { nanoid } from "nanoid";
import type { ApplicationState } from "@/types/ApplicationState";

type ApplicationContent = Pick<ApplicationState, "appName" | "content">;

export const generateAppState = ({
  appName,
  content,
}: ApplicationContent): ApplicationState => ({
  id: nanoid(),
  appName,
  content,
  isOpen: true,
  maximize: false,
  minimize: false,
  isFocused: false,
  isDragging: false,
});
