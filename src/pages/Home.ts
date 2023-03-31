import ReduxLitElement from "@/types/ReduxLitElement";

import { html } from "lit";
import { customElement, state } from "lit/decorators.js";

import { RootState } from "@/model/store";

import type { ExecutionContextState } from "@/model/executionContextSlice";

@customElement("home-page")
export default class Home extends ReduxLitElement {
  @state() executionContext: ExecutionContextState = [];

  _setState(reduxState: RootState) {
    this.executionContext = reduxState.executionContext;
  }

  render() {
    return html`
      <div></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "home-page": Home;
  }
}
