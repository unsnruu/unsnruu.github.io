import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { baseStyle } from "@/components/core/Base/index.styles";
import {
  basicStyle,
  minimizeStyle,
  maximizeStyle,
  outlineStyle,
} from "./index.styles";
import { styleMap } from "lit/directives/style-map.js";

import { store } from "@/model/store";
import { focusById, startDraggingById } from "@/model/executionContextSlice";

import type { NanoId } from "@/types/NanoId";

//todo :  최소한의  width값과 height 값을 constant로 정해서 두기

@customElement("pop-up")
export class PopUp extends LitElement {
  @property() header = "";
  @property() appId: NanoId | null = null;
  @property() isFocused: boolean = false;
  @property() isDragging: boolean = false;

  @state() posX = Math.random() * 100 + 100;
  @state() posY = Math.random() * 100 + 100;
  @state() shiftX = 0;
  @state() shiftY = 0;

  @state() width = Math.random() * 300 + 200;
  @state() height = Math.random() * 300 + 200;

  static styles = [
    baseStyle,
    basicStyle,
    minimizeStyle,
    maximizeStyle,
    outlineStyle,
  ];

  _mousedownHeader(e: MouseEvent) {
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

  _mouseDownOutline(e: MouseEvent) {
    if (!(e.target instanceof Element)) return;
    if (!e.target.matches(".outline")) return;

    const resize = ({ clientX, clientY }: MouseEvent) => {
      this.width = clientX;
      this.height = clientY;
    };
    const mousemove = (e: MouseEvent) => {
      resize(e);
    };
    resize(e);
    document.addEventListener("mousemove", mousemove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", mousemove);
    });
  }

  _focus(e: MouseEvent) {
    if (!this.appId) return;
    store.dispatch(focusById(this.appId));
  }

  render() {
    const hostStyle = html`
      <style>
        :host {
          z-index: ${this.isFocused ? 99 : 0};
          left: ${this.posX}px;
          top: ${this.posY}px;
        }
      </style>
    `;

    const containerStyle = {
      width: this.width + "px",
      height: this.height + "px",
    };

    return html`
      ${hostStyle}
      <div
        id="container"
        style=${styleMap(containerStyle)}
        @click=${this._focus}
        @mousedown=${this._mouseDownOutline}
      >
        <pop-up-header
          .header=${this.header}
          .appId=${this.appId}
          @mousedown=${this._mousedownHeader}
        >
        </pop-up-header>
        <pop-up-body @click=${this._focus}>
          <slot></slot>
        </pop-up-body>

        <div id="top" class="outline"></div>
        <div id="right" class="outline"></div>
        <div id="bottom" class="outline"></div>
        <div id="left" class="outline"></div>
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
