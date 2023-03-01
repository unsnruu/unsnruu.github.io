import * as CSS from "csstype";

export type StyleProp = {
  [Key in keyof CSS.Properties]: CSS.Properties<string, string>[Key];
};
