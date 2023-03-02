import Component from "@/types/component";
import { createStyleProps } from "@/utils/createStyleProps";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";

const styleProps = createStyleProps({
  container: {
    lineHeight: "inherit",
    color: "inherit",
    display: "block",
    fontSize: "inherit",
    fontWeight: "inherit",
  },
});

export default class Text extends Component {
  constructor() {
    super();
  }
  static get observedAttributes(): string[] {
    return [];
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
    #container { 
      ${stringifyStyleProps(this, styleProps.container)}
    }
    ::slotted(*){
      ${stringifyStyleProps(this, styleProps.container)}
    }
    `;
  }
}
