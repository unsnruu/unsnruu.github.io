import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators";
import { baseStyle } from "../Base/index.styles";

@customElement("core-button")
export class Button extends LitElement {
  @property() src = "";
  @property() text = "";

  static styles = [
    baseStyle,
    css`
      host {
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
    html`
      <flex-box width="100%" height="100%">
        <flex-item widht="100%" height="100%">
          <flex-box slot="children" id="content-wrapper">
            <flex-item>
              <div slot="children" id="img-wrapper">
                <img id="img" src="${this.src}" />
              </div>
            </flex-item>
            <flex-item>
              <div id="text" slot="children">${this.text}</div>
            </flex-item>
          </flex-box>
        </flex-item>
      </flex-box>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "core-button": Button;
  }
}
