import ReduxLitElement from "@/types/ReduxLitElement";

import { html } from "lit";
import { customElement, state } from "lit/decorators.js";

import { RootState, store } from "@/model/store";
import { focusById } from "@/model/executionContextSlice";

import type { ExecutionContextState } from "@/model/executionContextSlice";
import type { NanoId } from "@/types/NanoId";

@customElement("home-page")
export default class Home extends ReduxLitElement {
  @state() executionContext: ExecutionContextState = [];

  _setState(reduxState: RootState) {
    this.executionContext = reduxState.executionContext;
  }

  createFocusHandler(appId: NanoId) {
    return () => store.dispatch(focusById(appId));
  }
  popupTemplate() {
    const openApps = this.executionContext.filter((app) => app.isOpen);
    return openApps.map(
      ({ appName, id, isFocused }) =>
        html`
          <pop-up
            .header=${appName}
            .appId=${id}
            .isFocused=${isFocused}
            @click=${this.createFocusHandler(id)}
          ></pop-up>
        `
    );
  }

  render() {
    const taskbarApps = this.executionContext
      .filter((app) => app.isOpen)
      .map(({ appName, isFocused, id }) => ({
        appName,
        isFocused,
        id,
      }));

    return html`
      <div>
        <div>${this.popupTemplate()}</div>
        <task-bar .apps=${taskbarApps}></task-bar>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "home-page": Home;
  }
}
