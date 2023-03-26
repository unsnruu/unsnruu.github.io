import { LitElement } from "lit";
import type { Unsubscribe } from "@reduxjs/toolkit";
import { store } from "@/model/store";

export default abstract class ReduxLitElement extends LitElement {
  _unsubscribe!: Unsubscribe;
  connectedCallback(): void {
    super.connectedCallback();
    this._unsubscribe = store.subscribe(() => this._setState());
    this._setState();
  }
  disconnectedCallback(): void {
    this._unsubscribe();
    super.disconnectedCallback();
  }
  abstract _setState(): void;
}
