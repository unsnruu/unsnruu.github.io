import React, { useState, useReducer } from "react";

import Introduction from "./Introduction";
import ProfileList from "./ProfileList";
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
      <ProfileList />
    </StyledBox>
  );
}
