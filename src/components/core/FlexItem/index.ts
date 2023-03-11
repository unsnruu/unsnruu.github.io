import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators";
import { styleMap } from "lit/directives/style-map";

/**
 * FlexItem은 단순히 FlexBox의 slotted CSS 연산자를 이용하기 위한 컴포넌트입니다.
 * FlexItem을 사용하면 FlexBox와 사용했을 때 자동으로
 * flex 값이 1로 설정되어서 가득 찬 화면을 구성할 수 있습니다.
 */

@customElement("flex-item")
export class FlexItem extends LitElement {
  constructor() {
    super();
    this.setAttribute("slot", "flex-item");
  }
  @property() flex = "1";

  static styles = css`
    :host {
      display: flex;
      flex: 0;
      width: auto;
      height: auto;
      justify-content: center;
      align-items: center;
    }
    ::slotted(*) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;
  render() {
    html`<slot style=${styleMap({ flex: this.flex })}></slot>`;
  }
}
