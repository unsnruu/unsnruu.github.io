export default abstract class Component extends HTMLElement {
  shadowRoot: ShadowRoot;

  static get observedAttributes(): string[] {
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
  attributeChangedCallback() {}
  addEvents() {}
  render() {
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
