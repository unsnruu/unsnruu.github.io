import Base, { baseStyleProps } from "./Base";
import { StyleKeys, StyleProps } from "@/types/component";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";

const flexboxStyleProps: StyleProps = {
  ...baseStyleProps,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
  flexDirection: "row",
};

export default class Flexbox extends Base {
  constructor() {
    super();
  }
  static get observedAttributes(): StyleKeys[] {
    return ["flexWrap", "justifyContent", "alignContent", "flexDirection"];
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
