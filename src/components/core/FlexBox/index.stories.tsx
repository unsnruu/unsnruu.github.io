import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";

import "../index";
import { FlexBox } from "./index";

export default {
  title: "Core/FlexBox",
} as Meta;

export const Default: Story<FlexBox> = () => {
  return html` <flex-box>
    <flex-item><span>Item1</span></flex-item>
    <flex-item><span>Item2</span></flex-item>
    <flex-item><span>Item3</span></flex-item>
  </flex-box>`;
};
