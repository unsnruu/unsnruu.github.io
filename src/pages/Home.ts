import ReduxLitElement from "@/types/ReduxLitElement";

import { html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { RootState, store } from "@/model/store";

import {
  ExecutionContextState,
  stopDraggingAll,
  stopFocusing,
} from "@/model/executionContextSlice";
import { closeMenu } from "@/model/appMenuSlice";

@customElement("home-page")
export default class Home extends ReduxLitElement {
  @state() executionContext: ExecutionContextState = [];
  @state() isDragging = false;
  @state() isOpenMenu = false;

  static styles = css`
    :host {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    #background {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  `;

  _setState(reduxState: RootState) {
    this.executionContext = reduxState.executionContext;
    this.isOpenMenu = reduxState.appMenu.isOpen;
  }

  popupTemplate() {
    const openApps = this.executionContext.filter((app) => app.isOpen);
    return openApps.map(
      ({ appName, id, isFocused, minimize, maximize, isDragging, content }) =>
        html`
          <pop-up
            .header=${appName}
            .appId=${id}
            .maximize=${maximize}
            .isFocused=${isFocused}
            .isDragging=${isDragging}
            class=${classMap({ maximize, minimize })}
          >
            ${content}
          </pop-up>
        `
    );
  }

  _click(e: MouseEvent) {
    if (e.target instanceof Element && e.target.matches("#background")) {
      store.dispatch(stopFocusing());
      store.dispatch(closeMenu());
    }
    store.dispatch(stopDraggingAll());
  }

  appMenuTemplate() {
    if (this.isOpenMenu) {
      return html` <app-menu></app-menu>`;
    } else {
      return;
    }
  }

  render() {
    return html`
      <div id="background" @click=${this._click}>
        <div>${this.popupTemplate()}</div>
        ${this.appMenuTemplate()}
        <task-bar .apps=${this.executionContext}></task-bar>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "home-page": Home;
  }
}
