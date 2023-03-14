import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";

import { FlexBox } from "./index";

export default {
  title: "Core/FlexBox",
  argTypes: {
    justifyContent: {
      control: "select",
      options: [
        "-moz-initial",
        "inherit",
        "initial",
        "revert",
        "revert-layer",
        "unset",
        "space-around",
        "space-between",
        "space-evenly",
        "stretch",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "start",
        "left",
        "normal",
        "right",
      ],
    },
    alignItems: {
      control: "select",
      options: [
        "-moz-initial",
        "inherit",
        "initial",
        "revert",
        "revert-layer",
        "unset",
        "stretch",
        "center",
        "end",
        "flex-end",
        "flex-start",
        "start",
        "normal",
        "self-end",
        "self-start",
        "baseline",
      ],
    },
  },
} as Meta<FlexBox>;

export const Default: Story<FlexBox> = ({ justifyContent, alignItems }) => {
  return html`
    <flex-box .justifyContent=${justifyContent} .alignItems=${alignItems}>
      <flex-item><span>Item1</span></flex-item>
      <flex-item><span>Item2</span></flex-item>
      <flex-item><span>Item3</span></flex-item>
    </flex-box>
  `;
};
