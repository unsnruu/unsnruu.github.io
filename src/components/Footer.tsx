import React from "react";
import { Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

const RootGrid = styled(Grid)`
  background: #e1e1e1;
  height: 10rem;
`;
const StyledA = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: black wavy underline;
  }
`;
export default function Footer() {
  return (
    <RootGrid container justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={9} sx={{ fontStyle: "italic" }}>
        <Typography sx={{ fontWeight: "bold" }}>Made by unsnruu</Typography>
        <Typography sx={{ typography: "subtitle1" }}>
          <StyledA href="mailto:unsnruu@gmail.com">
            email : unsnruu@gmail.com
          </StyledA>
        </Typography>
      </Grid>
    </RootGrid>
  );
}
