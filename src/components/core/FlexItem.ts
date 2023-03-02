import FlexBox, { styleProps as flexStyleProps } from "./FlexBox";
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
  },
  container: {
    ...flexStyleProps.container,
  },
});

export default class FlexItem extends FlexBox {
  constructor() {
    super();
  }
  getTemplate(): string {
    return `
    <div id="container">
      <slot name="children"></slot>
    </div>
    `;
  }
  getStyle(): string {
    return `
    :host {${stringifyStyleProps(this, styledProps.host)}}
    div#container{
      ${stringifyStyleProps(this, styledProps.container)}
      flex:1;
    }
    `;
  }
}
