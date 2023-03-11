import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators";

@customElement("core-base")
export class Base extends LitElement {
  static styless = css`
    :host {
      margin: 0px;
      padding: 0px;
      box-shadow: none;
      box-sizing: border-box;
      background: inherit;
      border: none;
      width: auto;
      height: auto;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "core-base": Base;
  }
}
