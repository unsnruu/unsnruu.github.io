import styled from "@emotion/styled";
import React from "react";
import { HashLink } from "react-router-hash-link";

// todo: 깃허브와 블로그 추가하기
// todo: 헤더 인터렉티브 추가, 스크롤 다운시 숨기고 스크롤 업-> 다시 보이게 끔
const StyledHeader = styled.header`
  background-color: palevioletred;
  display: flex;
  justify-content: space-between;
  height: 2rem;
`;
const StyledNav = styled.nav`
  & a {
    margin-right: 10px;
  }
`;

export default function Header() {
  const sections = ["about", "character", "why", "experienced", "contact"];
  return (
    <StyledHeader>
      <StyledNav id="menu-bar">
        {sections.map((section, idx) => (
          <HashLink to={`/#index-section-${section}`} key={idx}>
            {section}
          </HashLink>
        ))}
      </StyledNav>
      <address style={{ display: "flex" }}>
        <span>github</span>
        {" | "}
        <span>vlog</span>
        {" | "}
        <span>email</span>
      </address>
    </StyledHeader>
  );
}

// {/* <HashLink to={"/#hi"}>하이루로 가기</HashLink>; */}
