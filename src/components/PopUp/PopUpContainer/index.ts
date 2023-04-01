import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { baseStyle } from "@/components/core/Base/index.styles";
import type { NanoId } from "@/types/NanoId";

@customElement("pop-up")
export class PopUp extends LitElement {
  @property() header = "";
  @property() appId: NanoId | null = null;
  @property() isFocused: boolean = false;
  @property() top?: number;
  @property() left?: number;

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
          z-index: ${this.isFocused ? 99 : 0};
        }
      </style>
    `;
    return html`
      ${style}
      <div id="container">
        <pop-up-header
          .header=${this.header}
          .appId=${this.appId}
        ></pop-up-header>
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
