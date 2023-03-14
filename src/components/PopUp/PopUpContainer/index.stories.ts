import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { PopUp } from "./index";

export default {
  title: "PopUp/PopUp",
} as Meta<PopUp>;

export const Default: Story<PopUp> = () => {
  return html`
    <pop-up .header=${"This is Sample"}>
      <div>
        <h2>This is sample pop-up</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          euismod maximus massa convallis placerat. Nunc placerat tempus sem, id
          rhoncus lacus porta id. Phasellus sit amet elit et lacus finibus
          suscipit nec a enim. Duis at lacinia sem. Quisque iaculis tortor sit
          amet neque rutrum commodo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Curabitur laoreet varius erat venenatis semper. Morbi
          auctor sodales purus id tincidunt. Morbi eu nisl non dui eleifend
          egestas eget et est. Cras mattis semper nibh. Praesent enim metus,
          elementum a purus vel, volutpat venenatis lorem.
        </p>
      </div>
    </pop-up>
  `;
};
