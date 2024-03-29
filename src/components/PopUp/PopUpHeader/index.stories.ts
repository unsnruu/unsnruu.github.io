import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";

import { PopUpHeader } from "./index";

export default {
  title: "PopUp/PopUpHeader",
} as Meta;

export const Default: Story<PopUpHeader> = ({ header }) => {
  return html`
    <pop-up-header .header=${header}></pop-up-header>
  `;
};

Default.args = {
  header: "Sample Header",
};
