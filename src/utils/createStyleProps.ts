import { StyleProp } from "@/types/styleProp";

export const createStyleProps = <T>(styleProps: {
  [K in keyof T]: StyleProp;
}) => styleProps;
