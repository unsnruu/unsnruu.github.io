import Base from "../core/Base";
import { createStyleProps } from "@/utils/createStyleProps";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";

const styleProps = createStyleProps({
  container: {
    width: "100%",
    backgroundColor: "var(--main-blue)",
    fontFamily: "'Press Start 2P', cursive",
    color: "white",
  },
  slot: {
    display: "block",
    padding: "8px",
    paddingLeft: "1rem",
  },
});

export default class PopUpHeader extends Base {
  constructor() {
    super();
  }
  static get observedAttributes(): string[] {
    return [];
  }
  get title() {
    return this.getAttribute("title") ?? "";
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
    ::slotted(*){${stringifyStyleProps(this, styleProps.slot)}}
    `;
  }
}
