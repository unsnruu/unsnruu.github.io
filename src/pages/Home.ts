import Component from "@/types/component";
import { createStyleProps } from "@/utils/createStyleProps";
import { stringifyStyleProps } from "@/utils/stringifyStyleProps";

const styleProps = createStyleProps({
  container: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "var(--main-bg-color)",
  },
});

interface Content {
  title: string;
  body: string;
}
type Contents = Content[];

const initState: Contents = [
  {
    title: "sample1",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsumquisquam voluptates. Dicta perferendis voluptates quidem maxime eligendiinventore ea sunt eum animi reprehenderit obcaecati corporis, commodi magniminima ab",
  },
  {
    title: "sample2",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsumquisquam voluptates. Dicta perferendis voluptates quidem maxime eligendiinventore ea sunt eum animi reprehenderit obcaecati corporis, commodi magniminima ab",
  },
  {
    title: "sample3",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsumquisquam voluptates. Dicta perferendis voluptates quidem maxime eligendiinventore ea sunt eum animi reprehenderit obcaecati corporis, commodi magniminima ab",
  },
];

export default class Home extends Component {
  state: Contents;
  constructor() {
    super();
    this.state = initState;
  }
  generateRandomSize() {
    const width = Math.round(Math.random() * 400) + 300;
    const height = Math.round(Math.random() * 400) + 300;
    return { width, height };
  }
  generateRandomPostion(width: number, height: number) {
    const { innerHeight, innerWidth } = window;
    const x = Math.round(Math.random() * (innerWidth - width));
    const y = Math.round(Math.random() * (innerHeight - height));
    return { x, y };
  }
  generatePopUp() {
    const popups = this.state.map((content) => {
      const { width, height } = this.generateRandomSize();
      const { x, y } = this.generateRandomPostion(width, height);
      return `
      <pop-up width="${width}px" height="${height}px" top="${y}px" left="${x}px" title=${content.title}>
        <div slot="body">${content.body}</div>
      </pop-up>
      `;
    });
    return popups;
  }
  getTemplate(): string {
    return `
    <div id="container">
      ${this.generatePopUp().join("")}
    </div>
    `;
  }
  getStyle(): string {
    return `
    #container{${stringifyStyleProps(this, styleProps.container)}}
    `;
  }
  addEvents(): void {}
}
