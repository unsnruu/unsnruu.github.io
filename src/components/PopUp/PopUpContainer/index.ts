import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { baseStyle } from "@/components/core/Base/index.styles";
import { basicStyle, minimizeStyle, maximizeStyle } from "./index.styles";

import { store } from "@/model/store";
import { focusById } from "@/model/executionContextSlice";

import type { NanoId } from "@/types/NanoId";

@customElement("pop-up")
export class PopUp extends LitElement {
  @property() header = "";
  @property() appId: NanoId | null = null;
  @property() isFocused: boolean = false;
  @property() top?: number;
  @property() left?: number;

  static styles = [baseStyle, basicStyle, minimizeStyle, maximizeStyle];

  _focus(e: MouseEvent) {
    if (!this.appId) return;
    if (e.target instanceof Element && e.target.matches("pop-up-header")) {
      return;
    }
    store.dispatch(focusById(this.appId));
  }
  render() {
    const style = html`
      <style>
        :host {
          top: ${this.top || 0}px;
          left: ${this.left || 0}px;
          z-index: ${this.isFocused ? 99 : 0};
        }
      </style>
    `;

    return html`
      ${style}
      <div id="container" @click=${this._focus}>
        <pop-up-header .header=${this.header} .appId=${this.appId}>
        </pop-up-header>
        <pop-up-body @click=${this._focus}>
          <slot></slot>
        </pop-up-body>
      </div>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "pop-up": PopUp;
  }
}
