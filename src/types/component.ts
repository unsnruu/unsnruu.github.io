export default class Component extends HTMLElement {
  shadowRoot: ShadowRoot;

  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: "open" });
  }
  static get observedAttributes(): string[] {
    return [];
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
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  getTemplate(): HTMLTemplateElement {
    return document.createElement("template");
  }
  getStyle(): HTMLStyleElement {
    return document.createElement("style");
  }
}
