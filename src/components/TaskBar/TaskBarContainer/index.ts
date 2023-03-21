/**
 *
 * flex-wrap 설정할 수 있게끔 수정하고
 * taskbutton 크기 고정시키기 k
 */
import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("task-bar")
export class TaskBar extends LitElement {
  static styles = css`
    :host {
      position: absolute;
      bottom: 0px;
      width: 100vw;
      height: 32px;
      background-color: var(--main-gray);
      border-top: 1px solid white;
      outline: 1px solid var(--main-gray);
      overflow: hidden;
    }
  `;

  render() {
    return html`
      <flex-box .justifyContent=${"flex-start"} .alignItems=${"flex-start"}>
        <flex-item>
          <start-button></start-button>
        </flex-item>
        <flex-item .flex=${1}>
          <flex-box .justifyContent=${"flex-start"}>
            <flex-item><task-button .name=${"abc"}></task-button></flex-item>
            <flex-item><task-button></task-button></flex-item>
            <flex-item><task-button></task-button></flex-item>
            <flex-item><task-button></task-button></flex-item>
            <flex-item><task-button></task-button></flex-item>
            <flex-item><task-button></task-button></flex-item>
          </flex-box>
        </flex-item>
      </flex-box>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "task-bar": TaskBar;
  }
}
