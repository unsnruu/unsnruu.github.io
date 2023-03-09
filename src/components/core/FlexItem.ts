import FlexBox from "./FlexBox";
import { createStyleProps } from "@/utils/createStyleProps";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";

/**
 * FlexItem은 단순히 FlexBox의 slotted CSS 연산자를 이용하기 위한 컴포넌트입니다.
 * FlexItem을 사용하면 FlexBox와 사용했을 때 자동으로
 * flex 값이 1로 설정되어서 가득 찬 화면을 구성할 수 있습니다.
 */

const styledProps = createStyleProps({
  host: {
    display: "flex",
    flex: 1,
    width: "auto",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  slot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default class FlexItem extends FlexBox {
  constructor() {
    super();
    this.setAttribute("slot", "flex-item");
  }
  getTemplate(): string {
    return `
      <slot name="children"></slot>
    `;
  }
  getStyle(): string {
    return `
    :host{${stringifyStyleProps(this, styledProps.host)}}
    ::slotted(*){${stringifyStyleProps(this, styledProps.slot)}}
    `;
  }
}
