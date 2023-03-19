import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("task-button")
export class TaskButton extends LitElement {
  @property() name: string;
  constructor() {
    super();
    this.name = "Default Task";
  }

  static styles = css``;

  render() {
    return html`
      <core-button .text=${this.name}></core-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "task-button": TaskButton;
  }
}
