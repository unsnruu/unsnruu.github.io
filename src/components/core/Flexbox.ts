import Base, { styleProps as baseStyleProps } from "./Base";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";
import { createStyleProps } from "@/utils/createStyleProps";

export const styleProps = createStyleProps({
  container: {
    ...baseStyleProps.container,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    flexDirection: "row",
    gap: "0",
  },
  slottedFlexItem: {
    flex: 1,
  },
});

export default class Flexbox extends Base {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return Object.keys(styleProps.container);
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
      div#container{
        ${stringifyStyleProps(this, styleProps.container)}
      }
    ::slotted(flex-item){
      ${stringifyStyleProps(this, styleProps.slottedFlexItem)}
    }
    `;
  }
}
