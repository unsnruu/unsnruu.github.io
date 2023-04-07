import { Story, Meta } from "@storybook/web-components";
import { html } from "lit-html";

import { Text } from "./index";

export default {
  title: "Core/Text",
  argTypes: {
    ellipsis: { type: "boolean" },
    fontWeight: { control: "radio", options: ["bold", "normal"] },
  },
} as Meta<Text>;

export const Default: Story<Text> = ({
  text,
  ellipsis,
  fontSize,
  fontWeight,
}) => {
  return html`
    <core-text
      .text=${text}
      .ellipsis=${ellipsis}
      .fontSize=${fontSize}
      .fontWeight=${fontWeight}
    ></core-text>
  `;
};

Default.args = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum tortor ut mauris tristique, ac congue magna mollis. Quisque ut leo nec enim mollis malesuada vel lobortis felis. Nullam est urna, mollis egestas nunc a, convallis consectetur orci. Mauris condimentum felis non felis varius, id semper augue elementum. In hac habitasse platea dictumst. Morbi auctor commodo lorem, nec laoreet lorem feugiat eu. Sed ut pretium lectus. Nunc luctus enim est, eget varius massa vulputate at. Integer at orci lorem. Sed auctor nulla id imperdiet sodales. Donec tincidunt ac quam nec volutpat. Nam vestibulum, nulla non accumsan tincidunt, leo enim viverra lacus, vel iaculis urna turpis eu odio. Maecenas congue, ante a tincidunt condimentum, nunc felis dignissim nulla, ac gravida dui felis eu purus. Maecenas vitae lectus eu nisl faucibus convallis. Ut efficitur dictum dictum. Sed vel nisi magna.",
  ellipsis: false,
  fontSize: 16,
  fontWeight: "bold",
};
