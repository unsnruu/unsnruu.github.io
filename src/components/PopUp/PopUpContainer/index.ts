import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { baseStyle } from "@/components/core/Base/index.styles";

@customElement("pop-up")
export class PopUp extends LitElement {
  @property() top?: number;
  @property() left?: number;
  @property() header = "";

  static styles = [
    baseStyle,
    css`
      :host {
        position: absolute;
        background-color: var(--main-gray);
        border: 2px outset gray;
      }
      #container {
        height: 100%;
        box-sizing: border-box;
        padding: 0.25rem;
        border: 1px outset white;
      }
    `,
  ];

  render() {
    const style = html`
      <style>
        :host {
          top: ${this.top || 0}px;
          left: ${this.left || 0}px;
        }
      </style>
    `;
    return html`
      ${style}
      <div id="container">
        <pop-up-header .header=${this.header}></pop-up-header>
        <pop-up-body>
          <slot></slot>
        </pop-up-body>
      </div>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "pop-up": PopUp;
  }
}
