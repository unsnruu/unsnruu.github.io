import { LitElement, html } from "lit";
import { customElement } from "lit/decorators";
import { baseStyle } from "./index.styles";

@customElement("core-base")
export class Base extends LitElement {
  static styles = baseStyle;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "core-base": Base;
  }
}
