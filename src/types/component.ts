import * as CSS from "csstype";
export type StyleProps = {
  [key in keyof CSS.Properties]: CSS.Properties<string, string>[key];
};
export type StyleKeys = keyof StyleProps;

export default class Component extends HTMLElement {
  shadowRoot: ShadowRoot;

  static get observedAttributes(): StyleKeys[] {
    return [];
  }
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    window.requestAnimationFrame(() => {
      this.render();
      this.addEvents();
    });
  }
  disconnectedCallback() {}
  adoptedCallback() {}
  attributeChangedCallback() {
    window.requestAnimationFrame(() => {
      this.render();
    });
  }
  addEvents() {}
  render() {
    this.shadowRoot.innerHTML = "";
    this.shadowRoot.appendChild(this.getStyle());
    this.shadowRoot.appendChild(this.getTemplate());
  }
  getTemplate(): HTMLElement {
    return document
      .createElement("template")
      .content.cloneNode(true) as HTMLElement;
  }
  getStyle(): HTMLStyleElement {
    return document.createElement("style");
  }
}
