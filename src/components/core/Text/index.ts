import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators";
import { baseStyle } from "../Base/index.styles";

@customElement("core-button")
export class Text extends LitElement {
  @property() text = "";

  static styles = [baseStyle, css``];

  render() {
    return html`<div>${this.text}</div>`;
  }
}
