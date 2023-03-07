import Base, { styleProps as baseStyleProps } from "./Base";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";
import { createStyleProps } from "@/utils/createStyleProps";

export const styleProps = createStyleProps({
  host: {
    ...baseStyleProps.container,
    display: "flex",
    width: "max-content",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    gap: "0",
  },
});

export default class Flexbox extends Base {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return [];
  }
  getTemplate(): string {
    return `
      <slot name="flex-item"></slot>
    `;
  }
  getStyle(): string {
    return `
    :host{${stringifyStyleProps(this, styleProps.host)}}
    `;
  }
}
