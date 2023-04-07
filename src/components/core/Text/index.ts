import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import { baseStyle } from "../Base/index.styles";

@customElement("core-text")
export class Text extends LitElement {
  @property() text = "";
  @property() ellipsis = false;
  @property() fontSize?: number;
  @property() fontWeight?: "bold" | "normal";

  static styles = [
    baseStyle,
    css`
      :host {
        width: 100%;
        height: 100%;
      }
      .ellipsis {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    `,
  ];

  render() {
    const fontStyle = {
      fontSize: `${this.fontSize}px`,
      fontWeight: `${this.fontWeight}`,
    };

    return html`<div
      class=${classMap({ ellipsis: this.ellipsis })}
      style=${styleMap(fontStyle)}
    >
      ${this.text}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "core-text": Text;
  }
}
