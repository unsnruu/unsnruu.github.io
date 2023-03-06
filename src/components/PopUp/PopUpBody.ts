import Base from "../core/Base";

export default class PopUpBody extends Base {
  constructor() {
    super();
  }
  static get observedAttributes(): string[] {
    return [];
  }

  getTemplate(): string {
    return `
    <div id="container">
      <slot name="children"/>
    </div>
    `;
  }
}
