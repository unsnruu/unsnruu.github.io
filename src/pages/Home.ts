import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("home-page")
export default class Home extends LitElement {
  static styles = css``;
  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "home-page": Home;
  }
}
