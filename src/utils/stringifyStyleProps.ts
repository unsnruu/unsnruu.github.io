import type { StyleKeys, StyleProps } from "@/types/styleProps";

const convertToCssKey = (name: string) => {
  const split = name.split("");
  const renamed = split.map((ch) => {
    if (
      "A".charCodeAt(0) <= ch.charCodeAt(0) &&
      "Z".charCodeAt(0) >= ch.charCodeAt(0)
    ) {
      return "-" + ch.toLowerCase();
    } else {
      return ch;
    }
  });
  return renamed.join("");
};

export const stringifyStyleProps = (
  element: Element,
  styleProps: StyleProps
) => {
  let string = ``;

  Object.keys(styleProps).forEach((_key) => {
    const key = _key as StyleKeys;
    string += `${convertToCssKey(key)}:${
      element.getAttribute(key) || styleProps[key]
    };`;
  });

  return string;
};
