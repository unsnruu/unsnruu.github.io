import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";

import "./index";
import { Base } from "./index";

export default {
  title: "Core/Base",
} as Meta;

export const Default: Story<Base> = () => html`<core-base>Sample</core-base>`;
