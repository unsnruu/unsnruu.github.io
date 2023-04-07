import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";

export default {
  title: "AppMenu/AppMenu",
} as Meta;

export const Default: Story = () => {
  return html` <app-menu></app-menu>
    <task-bar></task-bar>`;
};
