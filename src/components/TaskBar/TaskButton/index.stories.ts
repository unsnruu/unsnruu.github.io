import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { TaskButton } from "./index";

export default {
  title: "TaskBar/TaskButton",
} as Meta;

export const Default: Story<TaskButton> = ({ name }) => {
  return html`
    <task-button .name=${name}></task-button>
  `;
};
Default.args = {
  name: "TASK A",
};
