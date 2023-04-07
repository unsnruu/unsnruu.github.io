import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("app-menu-item")
export class MenuItem extends LitElement {
  @property() name = "";

  static styles = css`
    #container {
      width: 100%;
      height: 40px;
      background-color: var(--main-gray);
      padding: 0.5rem;
    }
    #container:hover {
      background-color: navy;
      color: white;
      cursor: pointer;
    }
  `;

  render() {
    return html` <flex-box id="container" .justifyContent=${"flex-start"}>
      ${this.name}
    </flex-box>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-menu-item": MenuItem;
  }
}
