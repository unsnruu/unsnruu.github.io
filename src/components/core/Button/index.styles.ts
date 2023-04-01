import { css } from "lit";

export const styles = css`
  :host {
    display: block;
    box-sizing: border-box;
    width: max-content;
    height: 100%;
    border: 2px outset white;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    background: var(--main-gray);
    padding: 0.5rem;
  }
  :host(:active),
  :host(.active) {
    border: 2px inset white;
    border-top: 2px solid black;
    border-left: 2px solid black;
  }
  #img-wrapper {
    box-sizing: border-box;
    width: 16px;
    padding-right: 0rem;
  }
  #img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
