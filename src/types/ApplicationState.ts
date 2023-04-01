import { NanoId } from "./NanoId";
import { html } from "lit";
import { Applications } from "./Applications";

export interface ApplicationState {
  id: NanoId;
  isOpen: boolean;
  minimize: boolean;
  maximize: boolean;
  appName: Applications;
  content: ReturnType<typeof html>;
  isFocused: boolean;
}
