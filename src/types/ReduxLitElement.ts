import { LitElement } from "lit";
import { store } from "@/model/store";
import type { Unsubscribe } from "@reduxjs/toolkit";
import type { RootState } from "@/model/store";

export default abstract class ReduxLitElement extends LitElement {
  _unsubscribe!: Unsubscribe;
  connectedCallback(): void {
    super.connectedCallback();
    this._unsubscribe = store.subscribe(() => this._setState(store.getState()));
    this._setState(store.getState());
  }
  disconnectedCallback(): void {
    this._unsubscribe();
    super.disconnectedCallback();
  }
  abstract _setState(_reduxState: RootState): void;
}
