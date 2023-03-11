import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { baseStyle } from "../Base/index.styles.js";

@customElement("core-button")
export class Button extends LitElement {
  @property() src = "";
  @property() text = "";

  static styles = [
    baseStyle,
    css`
      :host {
        display: block;
        width: max-content;
        height: 100%;
        border: 2px outset white;
        border-bottom: 2px solid black;
        border-right: 2px solid black;
        background: var(--main-gray);
      }
      :host(:active) {
        border: 2px inset white;
        border-top: 2px solid black;
        border-left: 2px solid black;
      }
    `,
  ];

  render() {
    return html`<div>${this.text}</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "core-button": Button;
  }
}
