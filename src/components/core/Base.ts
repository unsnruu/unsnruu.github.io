import Component from "@/types/component";

export default class Base extends Component {
  constructor() {
    super();
  }
  static get observedAttributes(): string[] {
    return [];
  }
  getTemplate(): HTMLTemplateElement {
    const template = document.createElement("template");
    template.innerHTML = ``;
    return template;
  }
  getStyle(): HTMLStyleElement {
    const style = document.createElement("style");
    style.innerHTML = ``;
    return style;
  }
}
