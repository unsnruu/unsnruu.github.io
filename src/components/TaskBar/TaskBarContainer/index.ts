/**
 *
 * flex-wrap 설정할 수 있게끔 수정하고
 * taskbutton 크기 고정시키기 k
 */
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import { store } from "@/model/store";
import { focusById } from "@/model/executionContextSlice";

import type { ApplicationState } from "@/types/ApplicationState";
import type { NanoId } from "@/types/NanoId";

type TaskBarAppState = Pick<ApplicationState, "isFocused" | "appName" | "id">;

@customElement("task-bar")
export class TaskBar extends LitElement {
  @property() apps: TaskBarAppState[] = [];

  static styles = css`
    :host {
      position: absolute;
      bottom: 0px;
      width: 100vw;
      height: 32px;
      background-color: var(--main-gray);
      border-top: 1px solid white;
      outline: 1px solid var(--main-gray);
      overflow: visible;
      flex-wrap: wrap;
      z-index: 99;
    }
  `;
  createFocusHandler(appId: NanoId) {
    return () => store.dispatch(focusById(appId));
  }
  taskButtonsTemplate() {
    return this.apps.map(
      ({ appName, isFocused, id }) => html`
        <flex-item @click=${this.createFocusHandler(id)}>
          <task-button .name=${appName} .isFocused=${isFocused}></task-button>
        </flex-item>
      `
    );
  }
  render() {
    return html`
      <flex-box .justifyContent=${"flex-start"} .alignItems=${"flex-start"}>
        <flex-item>
          <start-button></start-button>
        </flex-item>
        <flex-item .flex=${1}>
          <flex-box .justifyContent=${"flex-start"}>
            ${this.taskButtonsTemplate()}
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
