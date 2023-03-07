import Base, { styleProps as baseStyleProps } from "../core/Base";
import { createStyleProps } from "@/utils/createStyleProps";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";

const styleProps = createStyleProps({
  container: {
    ...baseStyleProps.container,
    position: "absolute",
    top: "0px",
    left: "0px",
    backgroundColor: "#C1C1C1",
    padding: "0.25rem",
    border: "2px outset white",
    outline: "1px groove silver",
    borderRight: "2px solid black",
    borderBottom: "2px solid black",
  },
});

export default class PopUp extends Base {
  constructor() {
    super();
  }
  static get observedAttributes(): string[] {
    return [];
  }
  getTemplate(): string {
    return `
    <div id="container">
      <pop-up-header>
        <slot name="title" slot="children"/>
      </pop-up-header>
      <pop-up-body>
        <slot name="body" slot="children"/>
      </pop-up-body>
    </div>
    `;
  }
  getStyle(): string {
    return `
    #container{${stringifyStyleProps(this, styleProps.container)}}
    `;
  }
}
