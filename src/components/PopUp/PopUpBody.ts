import Base from "../core/Base";
import { createStyleProps } from "@/utils/createStyleProps";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";

const styleProps = createStyleProps({
  container: {
    padding: "0.5rem",
  },
});

export default class PopUpBody extends Base {
  constructor() {
    super();
  }
  static get observedAttributes(): string[] {
    return [];
  }

  getTemplate(): string {
    return `
    <div id="container">
      <slot name="children"/>
    </div>
    `;
  }
  getStyle(): string {
    return `
    #container{${stringifyStyleProps(this, styleProps.container)}}
    `;
  }
}
