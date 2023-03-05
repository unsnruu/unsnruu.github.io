import Base, { styleProps as baseStyleProps } from "../core/Base";
import { createStyleProps } from "@/utils/createStyleProps";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";

const styleProps = createStyleProps({
  container: {
    ...baseStyleProps.container,
    outline: "none",
  },
});

export default class Button extends Base {
  constructor() {
    super();
  }
  static get observedAttributes(): string[] {
    return [];
  }
  getTemplate(): string {
    return `
    <div> id="container">
      <slot name="children"></slot>
    </div>
    `;
  }
  getStyle(): string {
    return `
    #container{
      ${stringifyStyleProps(this, styleProps.container)}
    }
    `;
  }
}
