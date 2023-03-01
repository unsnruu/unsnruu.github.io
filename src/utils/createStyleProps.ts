import { StyleProp } from "@/types/styleProp";

type StyleProps<T> = {
  [K in keyof T]: StyleProp;
};

export const createStyleProps = <T>(styleProps: StyleProps<T>) => styleProps;
