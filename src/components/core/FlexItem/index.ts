import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * FlexItem은 단순히 FlexBox의 slotted CSS 연산자를 이용하기 위한 컴포넌트입니다.
 * FlexItem을 사용하면 FlexBox와 사용했을 때 자동으로
 * flex 값이 1로 설정되어서 가득 찬 화면을 구성할 수 있습니다.
 */

@customElement("flex-item")
export class FlexItem extends LitElement {
  @property() flex = 0;
  @property() flexShrink = 0;
  @property() flexGrow = 0;

  static styles = css`
    :host {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      align-items: center;
      display: flex;
    }
  `;

  render() {
    const flexStyle = html`
      <style>
        :host {
          flex: ${this.flex};
          flex-grow: ${this.flexGrow || "none"};
          flex-shrink: ${this.flexShrink || "1"};
        }
      </style>
    `;

    return html`
      ${flexStyle}
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "flex-item": FlexItem;
  }
}
