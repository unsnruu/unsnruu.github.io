import Base, { styleProps as baseStyleProps } from "../core/Base";
import { createStyleProps } from "@/utils/createStyleProps";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";

const styleProps = createStyleProps({
  host: {
    ...baseStyleProps.container,
    position: "absolute",
    top: "0px",
    left: "0px",
    backgroundColor: "var(--main-gray)",
    border: "2px outset gray",
  },
  container: {
    height: "100%",
    boxSizing: "border-box",
    padding: "0.25rem",
    border: "1px outset white",
  },
});

export default class PopUp extends Base {
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
      <pop-up-header title="${this.title}">
      </pop-up-header>
      <pop-up-body>
        <slot name="body" slot="children"/>
      </pop-up-body>
    </div>
    `;
  }
  getStyle(): string {
    return `
    :host{${stringifyStyleProps(this, styleProps.host)}}
    #container{${stringifyStyleProps(null, styleProps.container)}}
    `;
  }
}
