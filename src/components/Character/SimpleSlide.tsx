import React, { ReactElement, useState, useEffect, useRef } from "react";
import Slide from "@mui/material/Slide";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 300px;
  height: 500px;
`;

export default function SimpleSlide({ children }: { children: ReactElement }) {
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
    <Wrapper ref={ref}>
      <Slide in={checked} direction={"right"}>
        <div>{children}</div>
      </Slide>
    </Wrapper>
  );
}
