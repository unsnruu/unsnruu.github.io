import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators";

@customElement("pop-up-body")
export class PopUpBody extends LitElement {
  static styles = css`
    :host {
      padding: 0.5rem;
    }
  `;

  render() {
    return html` <slot></slot> `;
  }
}
