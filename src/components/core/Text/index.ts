import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { baseStyle } from "../Base/index.styles";

@customElement("core-text")
export class Text extends LitElement {
  @property() text = "";
  @property() ellipsis = false;

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
    return html`<div class=${classMap({ ellipsis: this.ellipsis })}>
      ${this.text}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "core-text": Text;
  }
}
