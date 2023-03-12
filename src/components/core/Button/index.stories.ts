import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";

import "./index";
import { Button } from "./index";

export default {
  title: "Core/Button",
} as Meta;

export const Default: Story<Button> = ({ text }) => {
  return html`<core-button .text=${text}></core-button>`;
};

Default.args = {
  text: "Button",
};