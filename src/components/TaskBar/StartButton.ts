import Component from "@/types/component";

export default class StartButton extends Component {
  constructor() {
    super();
  }
  getTemplate(): string {
    return `<core-button title="abc"/>`;
  }
  getStyle(): string {
    return ``;
  }
}
