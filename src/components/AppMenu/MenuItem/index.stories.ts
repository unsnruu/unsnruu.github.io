import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { MenuItem } from "./index";

export default {
  title: "AppMenu/AppMenuItem",
} as Meta<MenuItem>;

export const Default: Story<MenuItem> = ({ name }) => {
  return html` <app-menu-item .name=${name}></app-menu-item>`;
};
Default.args = {
  name: "app name",
};
