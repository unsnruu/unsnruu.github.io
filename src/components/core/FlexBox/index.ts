import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { baseStyle } from "../Base/index.styles";
import type { Property } from "csstype";

@customElement("flex-box")
export class FlexBox extends LitElement {
  @property() gap?: number;
  @property() justifyContent?: Property.JustifyContent;
  @property() alignItems?: Property.AlignItems;
  @property() direction?: Property.FlexDirection;

  static styles = [
    baseStyle,
    css`
      :host {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
      }
    `,
  ];
  render() {
    const style = html`
      <style>
        :host {
          gap: ${this.gap || 0}px;
          justify-content: ${this.justifyContent || "center"};
          align-items: ${this.alignItems || "center"};
          flex-direction: ${this.direction || "row"};
        }
      </style>
    `;

    return html`
      ${style}
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "flex-box": FlexBox;
  }
}
