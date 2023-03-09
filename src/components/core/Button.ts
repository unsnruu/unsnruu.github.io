import Base, { styleProps as baseStyleProps } from "../core/Base";
import { createStyleProps } from "@/utils/createStyleProps";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";

const styleProps = createStyleProps({
  host: {
    ...baseStyleProps.container,
    display: "block",
    width: "32px",
    height: "32px",
    border: "2px outset white",
    borderBottom: "2px solid black",
    borderRight: "2px solid black",
    background: "var(--main-gray)",
  },
  hostActive: {
    border: "2px inset white",
    borderTop: "2px solid black",
    borderLeft: "2px solid black",
  },
  contentWrapper: {
    width: "100%",
    height: "100%",
    padding: "4px",
    borderBottom: "2px solid  var(--main-darkgray)",
    borderRight: "2px solid var(--main-darkgray)",
  },
  text: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});

export default class Button extends Base {
  constructor() {
    super();
  }
  static get observedAttributes(): string[] {
    return [];
  }
  get text() {
    console.log(this.getAttribute("text"));
    return this.getAttribute("text") ?? "";
  }
  get src() {
    return this.getAttribute("src") ?? "";
  }
  isImageElement() {
    return this.src.length > 0;
  }
  getTemplate(): string {
    return `
    <flex-box width="100%" height="100%">
      <flex-item widht="100%" height="100%">
        <div slot="children" id="content-wrapper">
        ${
          this.isImageElement()
            ? `<img id="img" src="${this.src}">`
            : `<div id="text">${this.text}</div>`
        }
      </flex-item>
    </flex-box>
    `;
  }
  getStyle(): string {
    return `
    *{box-sizing:border-box}
    :host{${stringifyStyleProps(this, styleProps.host)}}
    :host(:active){${stringifyStyleProps(this, styleProps.hostActive)}}
    #content-wrapper{${stringifyStyleProps(null, styleProps.contentWrapper)}}
    #text{${stringifyStyleProps(null, styleProps.text)}}
    #img{${stringifyStyleProps(null, styleProps.img)}}
    `;
  }
}
