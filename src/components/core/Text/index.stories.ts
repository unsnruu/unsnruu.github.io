import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";

import "./index";
import { Text } from "./index";

export default { title: "Core/Text" } as Meta;

export const Default: Story<Text> = ({ text }) => {
  return html`<core-text .text=${text}></core-text>`;
};

Default.args = {
  text: "Sample Text",
};
