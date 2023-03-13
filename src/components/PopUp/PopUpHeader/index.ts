import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators";

@customElement("pop-up-header")
export class PopUpHeader extends LitElement {
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
      <flex-box justifyContent="flex-start" width="100%">
        <flex-item justifyContent="flex-start" flex="1">
          <div slot="children" id="title">${this.title}</div>
        </flex-item>
        <flex-item justifyContent="flex-end">
          <flex-box slot="children" id="icon-container">
            <flex-item
              ><core-button slot="children" src="/icon-minimize.png"
            /></flex-item>
            <flex-item
              ><core-button slot="children" src="/icon-maximize.png"
            /></flex-item>
            <flex-item
              ><core-button slot="children" src="/icon-cancel.png"
            /></flex-item>
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
