import Base, { styleProps as baseStyleProps } from "../core/Base";
import { createStyleProps } from "@/utils/createStyleProps";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";

const styleProps = createStyleProps({
  host: {
    ...baseStyleProps.container,
    display: "block",
    width: "max-content",
    height: "100%",
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
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    borderBottom: "2px solid  var(--main-darkgray)",
    borderRight: "2px solid var(--main-darkgray)",
  },
  text: {
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    padding: "0px 4px",
  },
  imgWrapper: {
    width: "24px",
    height: "24px",
    padding: "4px",
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
        <flex-box slot="children" id="content-wrapper">
          ${
            this.isImageElement()
              ? `
              <flex-item>
                <div slot="children" id="img-wrapper">
                  <img id="img" src="${this.src}">
                </div>
              </flex-item>`
              : ``
          }
           <flex-item>
            <div id="text" slot="children">${this.text}</div>
          </flex-item>
        </flex-box>
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
    #img-wrapper{${stringifyStyleProps(null, styleProps.imgWrapper)}}
    #img{${stringifyStyleProps(null, styleProps.img)}}
    `;
  }
}
