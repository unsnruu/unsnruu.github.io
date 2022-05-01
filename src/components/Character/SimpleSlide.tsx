import React, { ReactElement, useState, useEffect, useRef } from "react";
import Slide from "@mui/material/Slide";
import styled from "@emotion/styled";

const EmojiWrapper = styled.div`
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function SimpleSlide({ emoji }: { emoji?: string }) {
  const [checked, setChecked] = useState(false);
  // const [node, setNode] = useState<Element>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function watchElem() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setChecked(true);
            }
          });
        },
        { root: null, rootMargin: "0px", threshold: 1 }
      );
      if (ref.current !== null) observer.observe(ref.current);
    }
    watchElem();
    return () => {};
  }, []);

  return (
    <div ref={ref} className="">
      <Slide in={checked} direction={"right"}>
        <EmojiWrapper>{emoji}</EmojiWrapper>
      </Slide>
    </div>
  );
}
