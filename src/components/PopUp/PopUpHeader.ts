import Base from "../core/Base";
import { createStyleProps } from "@/utils/createStyleProps";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";

const styleProps = createStyleProps({
  container: {
    width: "100%",
    backgroundColor: "#0200A1",
    fontFamily: "'Press Start 2P', cursive",
    color: "white",
  },
  title: {
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
      <div id="title">${this.title}</div>
    </div>
    `;
  }
  getStyle(): string {
    return `
    #container{${stringifyStyleProps(this, styleProps.container)}}
    #title{${stringifyStyleProps(this, styleProps.title)}}
    `;
  }
}
