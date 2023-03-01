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
    return [];
  }
  getTemplate(): HTMLElement {
    const template = document.createElement("template");
    template.innerHTML = `
    <div id="container">
      <slot name="children"></slot>
    </div>
    `;
    return template;
  }
  getStyle(): HTMLStyleElement {
    const style = document.createElement("style");
    style.innerHTML = `
      div#container = {
        ${stringifyStyleProps(this, flexboxStyleProps)}
      }
    `;
    return style;
  }
}
