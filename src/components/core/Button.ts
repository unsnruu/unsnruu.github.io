import Base, { styleProps as baseStyleProps } from "../core/Base";
import { createStyleProps } from "@/utils/createStyleProps";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";

const styleProps = createStyleProps({
  container: {
    ...baseStyleProps.container,
    width: "min-content",
    height: "min-content",
    border: "2px outset white",
    borderBottom: "2px solid black",
    borderRight: "2px solid black",
    background: "var(--main-gray)",
  },
  containerActive: {
    border: "2px inset white",
    borderTop: "2px solid black",
    borderLeft: "2px solid black",
  },
  slotText: {
    width: "100%",
    height: "100%",
    borderBottom: "1px solid  var(--main-darkgray)",
    borderRight: "1px solid var(--main-darkgray)",
    overflow: "hidden",
  },
  img: {
    padding: "0.25rem",
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
    <div id="container"> 
      <flex-box width="100%" height="100%">
        <flex-item widht="100%" height="100%">
          <div id="slot-text" slot="children">
          ${this.text}
          ${this.isImageElement() && `<img id="img" src=${this.src}>`}
        </flex-item>
      </flex-box>
    </div>
    `;
  }
  getStyle(): string {
    return `
    #container{${stringifyStyleProps(this, styleProps.container)}}
    #container:active{${stringifyStyleProps(this, styleProps.containerActive)}}
    #slot-text{${stringifyStyleProps(null, styleProps.slotText)}}
    #img{${stringifyStyleProps(null, styleProps.img)}}
    `;
  }
}
