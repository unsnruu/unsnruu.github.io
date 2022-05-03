import React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const StyledImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

export default function TechItem({ svg }: { svg: React.ReactElement }) {
  return <StyledImg>{svg}</StyledImg>;
}
