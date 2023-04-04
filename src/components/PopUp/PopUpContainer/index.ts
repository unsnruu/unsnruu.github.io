import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { baseStyle } from "@/components/core/Base/index.styles";
import { basicStyle, minimizeStyle, maximizeStyle } from "./index.styles";

import { store } from "@/model/store";
import { focusById, startDraggingById } from "@/model/executionContextSlice";

import type { NanoId } from "@/types/NanoId";

@customElement("pop-up")
export class PopUp extends LitElement {
  @property() header = "";
  @property() appId: NanoId | null = null;
  @property() isFocused: boolean = false;
  @property() isDragging: boolean = false;

  @state() posX = 0;
  @state() posY = 0;
  @state() shiftX = 0;
  @state() shiftY = 0;

  static styles = [baseStyle, basicStyle, minimizeStyle, maximizeStyle];

  _mousedown(e: MouseEvent) {
    if (!this.appId) return;
    store.dispatch(startDraggingById(this.appId));

    let shiftX = e.clientX - this.getBoundingClientRect().left;
    let shiftY = e.clientY - this.getBoundingClientRect().top;

    const moveAt = ({ pageX, pageY }: MouseEvent) => {
      let newX = pageX - shiftX;
      let newY = pageY - shiftY;

      if (newX < 0) newX = 0;
      if (newY < 0) newY = 0;

      this.posX = newX;
      this.posY = newY;
    };
    const onMouseMove = (event: MouseEvent) => {
      if (!this.isDragging) return;
      moveAt(event);
    };

    moveAt(e);
    document.addEventListener("mousemove", onMouseMove);

    this.onmouseup = function () {
      document.removeEventListener("mousemove", onMouseMove);
      this.onmouseup = null;
    };
  }

  _focus(e: MouseEvent) {
    if (!this.appId) return;
    if (e.target instanceof Element && e.target.matches("pop-up-header")) {
      return;
    }
    store.dispatch(focusById(this.appId));
  }

  render() {
    const hostStyle = html`
      <style>
        :host {
          z-index: ${this.isFocused ? 99 : 0};
          left: ${this.posX}px;
          top: ${this.posY}px;
          width: ${200}px;
          height: ${200}px;
        }
      </style>
    `;

    return html`
      ${hostStyle}
      <div id="container" @click=${this._focus} @mousedown=${() => {}}>
        <pop-up-header
          .header=${this.header}
          .appId=${this.appId}
          @mousedown=${this._mousedown}
        >
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

/**
 * https://ko.javascript.info/mouse-drag-and-drop
 * 드래그 이벤트의 경우 위의 사이트를 이용하여 작성했습니다.
 */
console.log(this);
