import { html } from "lit";
import { generateAppState } from "@/utils/generateAppState";

import type { ApplicationState } from "@/types/ApplicationState";
import type { Applications } from "@/types/Applications";

type Db = {
  [Key in Applications]: ApplicationState;
};
export default {
  introduction: generateAppState({ appName: "introduction", content: html`` }),
  techStack: generateAppState({ appName: "techStack", content: html`` }),
} as Db;
