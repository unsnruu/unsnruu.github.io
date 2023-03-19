import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

const START_ICON = "/icon-window.png";

@customElement("start-button")
export class StartButton extends LitElement {
  static styles = css`
    :host {
      font-family: "Press Start 2P", cursive;
      font-size: 0.5rem;
      letter-spacing: -1px;
      user-select: none;
    }
  `;

  render() {
    return html`
      <core-button .text=${"Start"} .src=${START_ICON}></core-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "start-button": StartButton;
  }
}
