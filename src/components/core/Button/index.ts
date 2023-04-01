import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { baseStyle } from "../Base/index.styles.js";
import { styles } from "./index.styles";

@customElement("core-button")
export class Button extends LitElement {
  @property() src?: string;
  @property() text?: string;
  @property() isFocused?: boolean;

  static styles = [baseStyle, styles];

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
      <flex-item id="img-wrapper" .flex=${1}>
        <img id="img" src=${this.src} />
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
