import ReduxLitElement from "@/types/ReduxLitElement";
import { html } from "lit";
import { customElement, state } from "lit/decorators.js";

import { store } from "@/model/store";
import type { Unsubscribe } from "@reduxjs/toolkit";
import type { ApplicationsState } from "@/model/applicationsSlice";

@customElement("home-page")
export default class Home extends ReduxLitElement {
  unsubscribe!: Unsubscribe;
  @state() applications: ApplicationsState = [];

  _setState() {
    this.applications = store.getState().applications;
  }

  render() {
    return html`
      <div>
        <div></div>
        <task-bar .apps=${this.applications.map((app) => app.title)}></task-bar>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "home-page": Home;
  }
}
