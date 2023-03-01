import * as CSS from "csstype";

export type StyleProp = {
  [key in keyof CSS.Properties]: CSS.Properties<string, string>[key];
};
