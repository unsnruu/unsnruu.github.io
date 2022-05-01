import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import styled from "@emotion/styled";

const StyledGrid = styled(Grid)`
  width: 100vw;
  height: 25.875rem;
`;

export default function Introduction() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledGrid container justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8} container justifyContent={"center"} spacing={4}>
        <Grid item>
          <Typography sx={{ typography: "h4" }}>안녕하세요.</Typography>
          <Typography sx={{ typography: "h4" }}>
            <span style={{ fontWeight: "bold" }}>류웅선</span>입니다.
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ typography: matches ? "h5" : "h4" }}>
            <span style={{ fontWeight: "bold" }}>프론트 엔드 개발자</span>를
          </Typography>
          <Typography sx={{ typography: matches ? "h5" : "h4" }}>
            꿈꾸며 공부 중입니다.
          </Typography>
        </Grid>
        <Typography></Typography>
      </Grid>
      <Grid item xs={2}></Grid>
    </StyledGrid>
  );
}
