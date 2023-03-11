import Component from "@/types/component";

export default class TaskButton extends Component {
  constructor() {
    super();
  }
  getTemplate(): string {
    return `
      <core-button text="abcde" height="32px"></core-button>
    `;
  }
  getStyle(): string {
    return ``;
  }
}
