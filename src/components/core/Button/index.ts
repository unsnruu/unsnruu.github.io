import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { baseStyle } from "../Base/index.styles.js";
import { basicStyle, imgStyle } from "./index.styles";

@customElement("core-button")
export class Button extends LitElement {
  @property() src?: string;
  @property() text?: string;
  @property() isFocused?: boolean;

  static styles = [baseStyle, basicStyle, imgStyle];

  TextTemplate() {
    if (!this.text) return html``;
    return html`
      <flex-item .flex=${1}>
        <div>${this.text}</div>
      </flex-item>
    `;
  }
  ImgTemplate() {
    if (!this.src) return html``;

    return html`
      <flex-item .flex=${1}>
        <flex-box id="img-wrapper">
          <img id="img" src=${this.src} draggable="false" />
        </flex-box>
      </flex-item>
    `;
  }
  render() {
    return html`
      <flex-box .gap=${4}>${this.ImgTemplate()}${this.TextTemplate()}</flex-box>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "core-button": Button;
  }
}
