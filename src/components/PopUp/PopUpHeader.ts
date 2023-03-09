import Base from "../core/Base";
import { createStyleProps } from "@/utils/createStyleProps";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";

const styleProps = createStyleProps({
  host: {
    boxSizing: "border-box",
    width: "100%",
    display: "block",
    backgroundColor: "var(--main-blue)",
    fontFamily: "'Press Start 2P', cursive",
    color: "white",
    padding: "0.5rem",
  },
  title: {
    display: "block",
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
    <flex-box justifyContent="flex-start" width="100%">
      <flex-item justifyContent="flex-start" flex=1>
        <div slot="children" id="title">
          ${this.title}
        </div>
      </flex-item>
      <flex-item justifyContent="flex-end">
        <flex-box slot="children" id="icon-container">
          <flex-item><core-button slot="children" src="/icon-minimize.png"/></flex-item>
          <flex-item><core-button slot="children" src="/icon-maximize.png"/></flex-item>
          <flex-item><core-button slot="children" src="/icon-cancel.png"/></flex-item>
        </flex-box>
      </flex-item>
    </flex-bot>
    `;
  }
  getStyle(): string {
    return `
    :host{${stringifyStyleProps(this, styleProps.host)}}
    #title{${stringifyStyleProps(null, styleProps.title)}}
    `;
  }
}
