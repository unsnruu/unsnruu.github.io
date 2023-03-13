import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";

import { PopUpHeader } from "./index";
import "@/components/index";

export default {
  title: "component/PopUp/PopUpHeader",
} as Meta;

export const Default: Story<PopUpHeader> = ({ header }) => {
  return html`
    <pop-up-header .header=${header}></pop-up-header>
  `;
};

Default.args = {
  header: "Sample Header",
};
