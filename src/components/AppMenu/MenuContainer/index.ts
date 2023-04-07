import ReduxLitElement from "@/types/ReduxLitElement";
import { html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { TASK_BAR_HEIGHT } from "@/constants/Style";

import { RootState, store } from "@/model/store";
import { focusById, openAppById } from "@/model/executionContextSlice";
import type { ApplicationState } from "@/types/ApplicationState";
import type { NanoId } from "@/types/NanoId";
import { closeMenu } from "@/model/appMenuSlice";

@customElement("app-menu")
export class AppMenu extends ReduxLitElement {
  @property() isOpen = false;
  @state() apps: ApplicationState[] = [];

  static styles = css`
    #container {
      position: absolute;
      left: 0;
      bottom: ${TASK_BAR_HEIGHT}px;
      border-top: 2px white solid;
      border-left: 2px white solid;
      border-right: 2px black solid;
      border-bottom: 2px black solid;
      z-index: 100;
    }
  `;

  _setState(state: RootState) {
    this.apps = state.executionContext;
  }

  createClickHandler(appId: NanoId) {
    return () => {
      store.dispatch(openAppById(appId));
      store.dispatch(focusById(appId));
      store.dispatch(closeMenu());
    };
  }

  render() {
    if (!this.isOpen) console.log("isNotOpen");
    if (this.isOpen) console.log("isOpen");

    return html` <div id="container">
      <app-menu-body>
        ${this.apps.map(
          (app) =>
            html`<app-menu-item
              .name=${app.appName}
              @click=${this.createClickHandler(app.id)}
            ></app-menu-item>`
        )}
      </app-menu-body>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-menu": AppMenu;
  }
}
