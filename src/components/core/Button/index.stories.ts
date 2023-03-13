import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";

import "./index";
import { Button } from "./index";

export default {
  title: "Core/Button",
} as Meta;

export const Default: Story<Button> = ({ text, src }) => {
  return html`
    <core-button .text=${text} .src=${src}></core-button>
  `;
};

Default.args = {
  text: "Button",
  src: "/icon-cancel.png",
};
