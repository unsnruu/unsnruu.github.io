import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import Icons from "@/constants/Icons";
import { store } from "@/model/store";
import {
  minimizeAppById,
  closeAppById,
  togglieMaiximizeById,
  focusById,
} from "@/model/executionContextSlice";

import type { NanoId } from "@/types/NanoId";

@customElement("pop-up-header")
export class PopUpHeader extends LitElement {
  @property() header: string = "";
  @property() appId: NanoId | null = null;

  static styles = css`
    :host {
      box-sizing: border-box;
      width: 100%;
      display: block;
      background-color: var(--main-blue);
      font-family: "Press Start 2P", cursive;
      color: white;
      padding: 0.5rem;
    }
    #header {
      overflow: hidden;
    }
  `;

  _focus() {
    if (!this.appId) return;
    store.dispatch(focusById(this.appId));
  }
  _close() {
    if (!this.appId) return;
    store.dispatch(closeAppById(this.appId));
  }
  _minimize() {
    if (!this.appId) return;
    store.dispatch(minimizeAppById(this.appId));
  }
  _maximize() {
    if (!this.appId) return;
    store.dispatch(togglieMaiximizeById(this.appId));
  }

  render() {
    return html`
      <flex-box>
        <flex-item id="header" @click=${this._focus} .flex=${1}>
          <core-text .ellipsis=${true} .text=${this.header}></core-text>
        </flex-item>
        <flex-item .flex=${1}>
          <flex-box .justifyContent=${"flex-end"}>
            <flex-item @click=${this._minimize}>
              <core-button .src=${Icons.MINIMIZE}></core-button>
            </flex-item>
            <flex-item @click=${this._maximize}>
              <core-button .src=${Icons.MAXIMIZE}></core-button>
            </flex-item>
            <flex-item @click=${this._close}>
              <core-button .src=${Icons.CANCEL}></core-button>
            </flex-item>
          </flex-box>
        </flex-item>
      </flex-box>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "pop-up-header": PopUpHeader;
  }
}
