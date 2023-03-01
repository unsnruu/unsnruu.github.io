import Component, { StyleKeys, StyleProps } from "@/types/component";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";

export const baseStyleProps: StyleProps = {
  margin: "0px",
  padding: "0px",
  boxShadow: "none",
  boxSizing: "border-box",
  backgroundColor: "inherit",
  width: "0px",
  height: "0px",
};

export default class Base extends Component {
  constructor() {
    super();
  }

  static get observedAttributes(): StyleKeys[] {
    return [
      "margin",
      "padding",
      "boxShadow",
      "width",
      "height",
      "backgroundColor",
    ];
  }

  getTemplate(): HTMLElement {
    const template = document.createElement("template");
    template.innerHTML = `
      <div id="container">
        <slot name="children"></slot>
      <div/>
    `;
    return template.content.cloneNode(true) as HTMLElement;
  }

  getStyle(): HTMLStyleElement {
    const style = document.createElement("style");
    style.innerHTML = `
      div#container {
        ${stringifyStyleProps(this, baseStyleProps)}
      } 
      `.trim();

    return style;
  }
}
