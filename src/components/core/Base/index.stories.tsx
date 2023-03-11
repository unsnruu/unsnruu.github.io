import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";

export default {
  title: "Core/Base",
} as Meta;

export const Default: Story<Partial<Base> = ({ width }: StoryProps) =>
  html`<core-base></core-base>`;
