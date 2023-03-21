import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { TaskBar } from "./index";

export default {
  title: "TaskBar/TaskBar",
} as Meta;

export const Default: Story<TaskBar> = () => {
  return html`
    <task-bar></task-bar>
  `;
};
