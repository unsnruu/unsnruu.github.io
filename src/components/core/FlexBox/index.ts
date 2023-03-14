import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { baseStyle } from "../Base/index.styles";
import type { Property } from "csstype";

@customElement("flex-box")
export class FlexBox extends LitElement {
  @property() gap?: number;
  @property() justifyContent?: Property.JustifyContent;
  @property() alignItems?: Property.AlignItems;

  static styles = [
    baseStyle,
    css`
      :host {
        display: flex;
        width: 100%;
        height: 100%;
        flex-wrap: wrap;
        flex-direction: row;
      }
    `,
  ];
  render() {
    const style = html`
      <style>
        :host {
          gap: ${this.gap ?? 0}px;
          justify-content: ${this.justifyContent || "center"};
          align-items: ${this.alignItems || "center"};
        }
      </style>
    `;

    return html`
      ${style}
      <slot name="flex-item"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "flex-box": FlexBox;
  }
}
