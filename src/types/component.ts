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
      this._render();
      this.addEvents();
    });
  }
  disconnectedCallback() {}
  adoptedCallback() {}
  attributeChangedCallback() {
    window.requestAnimationFrame(() => {
      this._render();
    });
  }
  addEvents() {}
  _render() {
    this.shadowRoot.innerHTML = "";
    this.shadowRoot.appendChild(this._createStyle());
    this.shadowRoot.appendChild(this._createTemplate().content.cloneNode(true));
  }
  _createTemplate(): HTMLTemplateElement {
    const template = document.createElement("template");
    template.innerHTML = this.getTemplate();
    return template;
  }
  _createStyle(): HTMLStyleElement {
    const style = document.createElement("style");
    style.innerHTML = this.getStyle();
    return style;
  }
  getTemplate(): string {
    return ``;
  }
  getStyle(): string {
    return ``;
  }
}
