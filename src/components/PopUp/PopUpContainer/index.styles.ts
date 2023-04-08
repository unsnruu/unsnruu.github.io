import { css } from "lit";
import { TASK_BAR_HEIGHT } from "@/constants/Style";

export const basicStyle = css`
  :host {
    position: absolute;
    background-color: var(--main-gray);
    transition: all 0.2s linear;
    overflow: hidden;
    touch-action: none;
  }
  #container {
    box-sizing: border-box;
    padding: 0.25rem;
    border: 1px outset white;
  }
`;

export const minimizeStyle = css`
  :host(.minimize) {
    transform: translateY(100vh) scale(0);
    transition: 0.2s linear;
  }
`;

export const maximizeStyle = css`
  :host(.maximize) {
    width: 100%;
    height: calc(100% - ${TASK_BAR_HEIGHT}px);
    transition: all 0.2s linear;
  }
`;

export const outlineStyle = css`
  .outline {
    position: absolute;
  }
  #top {
    left: 0;
    top: 0;
    width: 100%;
    height: 2px;
    background-color: white;
    cursor: ns-resize;
  }
  #right {
    right: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: black;
    cursor: ew-resize;
  }
  #bottom {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: black;
    cursor: ns-resize;
    z-index: 1;
  }
  #left {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: white;
    cursor: ew-resize;
  }
`;
