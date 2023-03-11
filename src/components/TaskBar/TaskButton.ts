import Component from "@/types/component";

export default class TaskButton extends Component {
  constructor() {
    super();
  }
  get title() {
    return this.getAttribute("title") ?? "";
  }
  getTemplate(): string {
    if (!this.title) return ``;

    return `
      <core-button text="${this.title}" hgeight="32px"></core-button>
    `;
  }
  getStyle(): string {
    return ``;
  }
}
