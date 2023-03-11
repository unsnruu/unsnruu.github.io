import Component from "@/types/component";

export default class TaskButton extends Component {
  constructor() {
    super();
  }
  getTemplate(): string {
    return `
      <core-button text="abcde"></core-button>
    `;
  }
  getStyle(): string {
    return ``;
  }
}
