import React, { useState, useReducer } from "react";

import Introduction from "./Introduction";
import ResumeList from "./ResumeList";
import { Box, Divider } from "@mui/material";
import styled from "@emotion/styled";

const StyledBox = styled(Box)`
  background-color: #fff;
`;

export default function AboutContainer() {
  return (
    <StyledBox>
      <Introduction />
      <Divider />
      <ResumeList />
    </StyledBox>
  );
}
