import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("pop-up-body")
export class PopUpBody extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      height: 100%;
      overflow: hidden;
      font-family: "리디바탕", "ridi-batang";
    }
    #container {
      padding: 1rem;
    }
  `;

  render() {
    return html`<div id="container"><slot></slot></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pop-up-body": PopUpBody;
  }
}
