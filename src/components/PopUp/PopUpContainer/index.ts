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
import {
  focusById,
  startDraggingById,
  togglieMaiximizeById,
} from "@/model/executionContextSlice";

import { MIN_HEIGHT, MIN_WIDTH } from "@/constants/Style";
import type { NanoId } from "@/types/NanoId";

@customElement("pop-up")
export class PopUp extends LitElement {
  @property() header = "";
  @property() maximize = false;
  @property() appId: NanoId | null = null;
  @property() isFocused = false;
  @property() isDragging = false;

  @state() posX = Math.random() * 50;
  @state() posY = Math.random() * 250;
  @state() shiftX = 0;
  @state() shiftY = 0;
  @state() width = Math.random() * 200 + MIN_WIDTH;
  @state() height = Math.random() * 200 + MIN_HEIGHT;

  static styles = [
    baseStyle,
    basicStyle,
    minimizeStyle,
    maximizeStyle,
    outlineStyle,
  ];

  _pointerDownHeader(e: PointerEvent) {
    if (!this.appId) return;
    if (this.maximize) return;

    store.dispatch(startDraggingById(this.appId));
    store.dispatch(focusById(this.appId));

    const shiftX = e.clientX - this.getBoundingClientRect().left;
    const shiftY = e.clientY - this.getBoundingClientRect().top;

    const moveAt = ({ pageX, pageY }: PointerEvent) => {
      let newX = pageX - shiftX;
      let newY = pageY - shiftY;

      if (newX < 0) newX = 0;
      if (newY < 0) newY = 0;

      this.posX = newX;
      this.posY = newY;
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!this.isDragging) return;
      moveAt(event);
    };

    moveAt(e);
    document.addEventListener("pointermove", onPointerMove);

    this.onpointerup = function () {
      document.removeEventListener("pointermove", onPointerMove);
      this.onpointerup = null;
    };
  }

  _pointerDownOutlines(e: PointerEvent) {
    if (!(e.target instanceof Element)) return;
    if (!e.target.matches(".outline")) return;

    const resize = ({ pageX, pageY }: PointerEvent) => {
      const newWidth = pageX - this.posX;
      const newHeight = pageY - this.posY;
      this.width = newWidth < MIN_WIDTH ? MIN_WIDTH : newWidth;
      this.height = newHeight < MIN_HEIGHT ? MIN_HEIGHT : newHeight;
    };
    const onPointerMove = (e: PointerEvent) => {
      resize(e);
    };
    resize(e);
    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("pointermove", onPointerMove);
    });
  }

  _focus() {
    if (!this.appId) return;
    store.dispatch(focusById(this.appId));
  }
  _dbClick() {
    if (!this.appId) return;
    store.dispatch(togglieMaiximizeById(this.appId));
  }

  render() {
    const hostStyle = html`
      <style>
        :host {
          z-index: ${this.isFocused ? 99 : 0};
          left: ${this.maximize ? 0 : this.posX}px;
          top: ${this.maximize ? 0 : this.posY}px;
        }
      </style>
    `;

    const containerStyle = {
      width: this.maximize ? "100%" : this.width + "px",
      height: this.maximize ? "100%" : this.height + "px",
    };

    return html`
      ${hostStyle}
      <div
        id="container"
        style=${styleMap(containerStyle)}
        @click=${this._focus}
        @pointerdown=${this._pointerDownOutlines}
      >
        <pop-up-header
          .header=${this.header}
          .appId=${this.appId}
          @pointerdown=${this._pointerDownHeader}
          @dblclick=${this._dbClick}
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
