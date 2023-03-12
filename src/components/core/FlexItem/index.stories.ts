import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";

import "./index";
import { FlexItem } from "./index";

export default {
  title: "Core/FlexItem",
} as Meta;

export const Default: Story<FlexItem> = () =>
  html`<flex-item><span>abcde</span></flex-item>`;
