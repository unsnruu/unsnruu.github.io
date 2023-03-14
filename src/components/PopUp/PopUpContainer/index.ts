import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { baseStyle } from "@/components/core/Base/index.styles";

@customElement("pop-up")
export class PopUp extends LitElement {
  @property() top = 0;
  @property() left = 0;
  @property() header = "";

  static styles = [
    baseStyle,
    css`
      :host {
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: var(--main-gray);
        border: 2px outset gray;
      }
      #container {
        height: 100%;
        box-sizing: border-box;
        padding: 0.25rem;
        border: 1px outset white;
      }
    `,
  ];

  render() {
    return html`
      <div id="container">
        <pop-up-header></pop-up-header>
        <pop-up-body>
          <slot name="body"></slot>
        </pop-up-body>
      </div>
    `;
  }
}
