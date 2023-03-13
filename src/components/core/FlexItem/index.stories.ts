import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";

import "../index";
import { FlexItem } from "./index";

export default {
  title: "Core/FlexItem",
} as Meta;

export const Default: Story<FlexItem> = () => {
  return html`<flex-item><span>Item</span></flex-item>`;
};

export const WithinFlexbox: Story<FlexItem> = () => {
  return html`
    <flex-box>
      <flex-item .flex=${1}>item1</flex-item>
      <flex-item .flex=${2}>item2</flex-item>
      <flex-item .flex=${3}>item3</flex-item>
    </flex-box>
  `;
};
