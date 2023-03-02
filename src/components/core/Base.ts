import Component from "@/types/component";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";
import { createStyleProps } from "@/utils/createStyleProps";

const styleProps = createStyleProps({
  container: {
    margin: "0px",
    padding: "0px",
    boxShadow: "none",
    boxSizing: "border-box",
    backgroundColor: "inherit",
    width: "0px",
    height: "0px",
  },
});

export default class Base extends Component {
  constructor() {
    super();
  }

  static get observedAttributes(): string[] {
    return Object.keys(styleProps.container);
  }

  getTemplate(): string {
    return `
      <div id="container">
        <slot name="children"></slot>
      <div/>
    `;
  }

  getStyle(): string {
    return `
      div#container {
        ${stringifyStyleProps(this, styleProps.container)}
      } 
      `.trim();
  }
}
