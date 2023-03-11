import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";

export default {
  title: "Core/Button",
} as Meta;

export const Default: Story = ({ text }) =>
  html`<core-button text="${text}"></core-button>`;
Default.args = {
  text: "button",
};
