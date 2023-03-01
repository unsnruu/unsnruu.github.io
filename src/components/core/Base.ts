import Component from "@/types/component";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";
import { createStyleProps } from "@/utils/createStyleProps";

export const styleProps = createStyleProps({
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

class Base extends Component {
  constructor() {
    super();
  }

  static get observedAttributes(): string[] {
    return Object.keys(styleProps.container);
  }

  getTemplate(): HTMLTemplateElement {
    const template = document.createElement("template");
    template.innerHTML = `
      <div id="container">
        <slot name="children"></slot>
      <div/>
    `.trim();
    return template;
  }

  getStyle(): HTMLStyleElement {
    const style = document.createElement("style");
    style.innerHTML = `
      div#container {
        ${stringifyStyleProps(this, styleProps.container)}
      } 
      `.trim();

    return style;
  }
}

export default { name: "core-base", component: Base };
