import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";

import { FlexItem } from "./index";

export default {
  title: "Core/FlexItem",
  component: "FlexItem",
  argTypes: {
    flex: { type: "number" },
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
  },
} as Meta<FlexItem>;

export const Default: Story<FlexItem> = ({ flex, justifyContent }) => {
  return html`
    <flex-item .flex=${flex} .justifyContent=${justifyContent}>
      <span>Item</span>
    </flex-item>
  `;
};
Default.args = {
  justifyContent: "flex-start",
};

export const WithinFlexbox: Story<FlexItem> = ({ justifyContent }) => {
  return html`
    <flex-box>
      <flex-item .flex=${1} .justifyContent=${justifyContent}>
        <span>item1</span>
      </flex-item>
      <flex-item .flex=${2} .justifyContent=${justifyContent}>
        <span>item2</span>
      </flex-item>
      <flex-item .flex=${3} .justifyContent=${justifyContent}>
        <span>item3</span>
      </flex-item>
    </flex-box>
  `;
};
