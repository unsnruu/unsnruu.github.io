import Base, { styleProps as baseStyleProps } from "./Base";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";
import { createStyleProps } from "@/utils/createStyleProps";

const flexboxStyleProps = createStyleProps({
  container: {
    ...baseStyleProps.container,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
  },
});

export default class Flexbox extends Base {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return Object.keys(flexboxStyleProps.container);
  }
  getTemplate(): string {
    return `
    <div id="container">
      <slot name="children"></slot>
    </div>
    `;
  }
  getStyle(): string {
    return `
      div#container = {
        ${stringifyStyleProps(this, flexboxStyleProps)}
      }
    `;
  }
}
