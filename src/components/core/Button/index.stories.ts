import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";

import { Button } from "./index";
import Icons from "@/constants/Icons";

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

export const ImageOnly: Story<Meta> = () => {
  return html`
    <core-button .src=${Icons.CANCEL}></core-button>
  `;
};
