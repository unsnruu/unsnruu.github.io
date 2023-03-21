import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import { PopUpBody } from "./index";

export default {
  title: "PopUp/PopUpBody",
} as Meta<PopUpBody>;

export const Default: Story<PopUpBody> = () => {
  return html`
    <pop-up-body>
      <div>
        <h1>Hi</h1>
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
    </pop-up-body>
  `;
};
