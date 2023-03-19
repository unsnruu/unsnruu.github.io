import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { StartButton } from "./index";

export default {
  title: "TaskBar/StartButton",
} as Meta;

export const Default: Story<StartButton> = () => {
  return html`
    <start-button></start-button>
  `;
};
