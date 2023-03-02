import Base, { styleProps as baseStyleProps } from "./Base";
import { createStyleProps } from "@/utils/createStyleProps";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";

const styleProps = createStyleProps({
  container: {
    ...baseStyleProps.container,
  },
  slot: {
    lineHeight: "inherit",
    color: "inherit",
    display: "block",
    fontSize: "inherit",
    fontWeight: "inherit",
  },
});

export default class Text extends Base {
  constructor() {
    super();
  }
  static get observedAttributes(): string[] {
    return [];
  }
  getTemplate(): string {
    return `
      <div id="container">
        <slot name="children"></slot>
      </div>
    `;
  }
  getStyle(): string {
    const slot = this.querySelector('[slot="children"]');
    return `
    #container { 
      ${stringifyStyleProps(this, styleProps.container)}
    }
    ::slotted(*){
      ${stringifyStyleProps(slot, styleProps.container)}
    }
    `;
  }
}
