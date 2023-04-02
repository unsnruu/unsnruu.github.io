import { css } from "lit";

export const basicStyle = css`
  :host {
    width: 200px;
    height: 200px;
    position: absolute;
    background-color: var(--main-gray);
    border: 2px outset gray;
    transition: all 0.2s linear;
  }
  #container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0.25rem;
    border: 1px outset white;
  }
`;

export const minimizeStyle = css`
  :host(.minimize) {
    transform: translateY(100vh) scale(0);
    transition: 0.3s linear;
  }
`;

export const maximizeStyle = css`
  :host(.maximize) {
    width: 100%;
    height: 100%;
    transition: all 0.2s linear;
  }
`;
