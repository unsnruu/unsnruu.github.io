/**
 *
 * flex-wrap 설정할 수 있게끔 수정하고
 * taskbutton 크기 고정시키기 k
 */
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import { store } from "@/model/store";
import { focusById, openAppById } from "@/model/executionContextSlice";

import { TASK_BAR_HEIGHT } from "@/constants/Style";
import type { ApplicationState } from "@/types/ApplicationState";
import { openMenu } from "@/model/appMenuSlice";

@customElement("task-bar")
export class TaskBar extends LitElement {
  @property() apps: ApplicationState[] = [];

  static styles = css`
    :host {
      box-sizing: border-box;
      position: absolute;
      bottom: 0px;
      width: 100vw;
      height: ${TASK_BAR_HEIGHT}px;
      background-color: var(--main-gray);
      border-top: 1px solid white;
      outline: 1px solid var(--main-gray);
      overflow: visible;
      flex-wrap: wrap;
      z-index: 99;
    }
  `;
  createClickHandler({ id, minimize }: ApplicationState) {
    return () => {
      if (minimize) {
        store.dispatch(openAppById(id));
      }
      store.dispatch(focusById(id));
    };
  }
  taskButtonsTemplate() {
    return this.apps.map(
      (app) => html`
        <flex-item @click=${this.createClickHandler(app)}>
          <task-button
            .name=${app.appName}
            .isFocused=${app.isFocused}
          ></task-button>
        </flex-item>
      `
    );
  }
  _clickStartButton() {
    store.dispatch(openMenu());
  }

  render() {
    return html`
      <flex-box .justifyContent=${"flex-start"} .alignItems=${"flex-start"}>
        <flex-item>
          <start-button @click=${this._clickStartButton}></start-button>
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
