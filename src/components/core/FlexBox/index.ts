import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { baseStyle } from "../Base/index.styles";

@customElement("flex-box")
export class FlexBox extends LitElement {
  @property() gap?: number;

  static styles = [
    baseStyle,
    css`
      :host {
        display: flex;
        width: 100%;
        height: 100%;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: row;
      }
    `,
  ];
  render() {
    const gapStyle = html`
      <style>
        :host {
          gap: ${this.gap ?? 0}px;
        }
      </style>
    `;

    return html`
      ${gapStyle}
      <slot name="flex-item"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "flex-box": FlexBox;
  }
}
