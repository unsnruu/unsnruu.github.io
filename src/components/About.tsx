import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

//todo 신상정보

//학력 -> 이건 숨기는 편이 나을 듯
const StyledBox = styled(Box)`
  display: flex;
  & div#about-left {
    background-color: silver;
  }
`;

export default function About() {
  return (
    <section id="index-section-about">
      <h1>소개드립니다</h1>
      <StyledBox id="about-name">
        <div id="about-name-left">
          <span>안녕하세요.</span>
          <span>프론트 엔드를 공부 중인</span>
        </div>
        <div id="about-name-right">
          <span>류웅선</span>입니다.
        </div>
      </StyledBox>
      <div id="about-univ"></div>
      <div id="about-hobby">
        {
          //todo: animation이 있고 이모티콘이 흘러가는 느낌으로
          // 책, 미술, 그림, 이야기?,
        }
      </div>
      <div></div>
    </section>
  );
}
