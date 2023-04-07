import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-menu-body")
export class MenuBody extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      height: 100%;
      background-color: var(--main-gray);
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-menu-body": MenuBody;
  }
}
