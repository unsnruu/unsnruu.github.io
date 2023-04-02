import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";
import { styleMap } from "lit/directives/style-map.js";
import { FlexItem } from "./index";

export default {
  title: "Core/FlexItem",
  component: "FlexItem",
} as Meta<FlexItem>;

export const Default: Story<FlexItem> = () => {
  return html`
    <flex-box>
      <flex-item .flex=${1}>
        <span>item1</span>
      </flex-item>
      <flex-item .flex=${2}>
        <span>item2</span>
      </flex-item>
      <flex-item .flex=${3}>
        <span>item3</span>
      </flex-item>
    </flex-box>
  `;
};

export const Shrink: Story<FlexItem> = () => {
  const style = {
    border: "1px solid black",
  };

  return html` <flex-box>
    <flex-item style=${styleMap(style)}>Item1</flex-item>
    <flex-item .flex=${2} style=${styleMap(style)}>Item2</flex-item>
    <flex-item .flex=${2} style=${styleMap(style)}>Item3</flex-item>
  </flex-box>`;
};
