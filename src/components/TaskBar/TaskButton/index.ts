import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("task-button")
export class TaskButton extends LitElement {
  @property() name: string = "Default";
  @property() isFocused: boolean = false;

  static styles = css`
    :host {
      height: 100%;
      cursor: pointer;
      user-select: none;
    }
  `;

  render() {
    return html`
      <core-button
        class=${this.isFocused ? "active" : ""}
        .text=${this.name}
      ></core-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "task-button": TaskButton;
  }
}
