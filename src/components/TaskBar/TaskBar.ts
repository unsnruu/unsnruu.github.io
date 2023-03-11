import Component from "@/types/component";
import { createStyleProps } from "@/utils/createStyleProps";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";

const styleProps = createStyleProps({
  host: {
    position: "absolute",
    bottom: "0",
    display: "block",
    width: "100vw",
    height: "32px",
    backgroundColor: "var(--main-gray)",
    borderTop: "1px solid white",
    outline: "1px solid var(--main-gary)",
  },
});

export default class TaskBar extends Component {
  constructor() {
    super();
  }
  getTemplate(): string {
    return `
    <flex-box>
      <flex-item>
        <start-button slot="children"/>
      </flex-item>
      <flex-item>
       <task-button slot="children"> 
      </flex-item>
    </flex-box>
    `;
  }
  getStyle(): string {
    return `
    :host{${stringifyStyleProps(this, styleProps.host)}}`;
  }
}
