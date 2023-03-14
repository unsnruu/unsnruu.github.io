import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import Icons from "@/constants/Icons";

@customElement("pop-up-header")
export class PopUpHeader extends LitElement {
  @property() header?: string;

  static styles = css`
    :host {
      box-sizing: border-box;
      width: 100%;
      display: block;
      background-color: var(--main-blue);
      font-family: "'Press Start 2P', cursive";
      color: white;
      padding: 0.5rem;
    }
  `;
  render() {
    return html`
      <flex-box>
        <flex-item .flex=${1}>
          <div>${this.header}</div>
        </flex-item>
        <flex-item .flex=${1}>
          <flex-box .justifyContent=${"flex-end"}>
            <flex-item><core-button .src=${Icons.MINIMIZE} /></flex-item>
            <flex-item><core-button .src=${Icons.MAXIMIZE} /></flex-item>
            <flex-item><core-button .src=${Icons.CANCEL} /></flex-item>
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
