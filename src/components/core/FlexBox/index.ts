import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { baseStyle } from "../Base/index.styles";

@customElement("flex-box")
export class FlexBox extends LitElement {
  static styles = [
    baseStyle,
    css`
      :host {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 0;
      }
    `,
  ];
  render() {
    return html`<slot name="flex-item"></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "flex-box": FlexBox;
  }
}
