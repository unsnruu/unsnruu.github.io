import type { StyleProp } from "@/types/styleProp";

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
  element: Element | null,
  styleProp: StyleProp
) => {
  let string = ``;
  Object.keys(styleProp).forEach((_key) => {
    const key = _key as keyof StyleProp;
    string += `${convertToCssKey(key)}:${
      element?.getAttribute(key) ?? styleProp[key]
    };`;
  });

  return string;
};
