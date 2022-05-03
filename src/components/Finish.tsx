import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";

const RootGrid = styled(Grid)`
  padding-top: 5rem;
  padding-bottom: 7rem;
`;

export default function Finish() {
  return (
    <RootGrid container justifyContent={"center"} id={"section-finish"}>
      <Grid item xs={9} sx={{ marginBottom: "3rem" }}>
        <Typography sx={{ typography: "h3" }}>마치면서</Typography>
      </Grid>
      <Grid item xs={10} md={8}>
        <Paper elevation={4} sx={{ padding: "3rem" }}>
          <Grid container justifyContent={"center"}>
            <Grid item xs={12}>
              <Typography
                sx={{
                  typography: "h6",
                  textDecoration: "#ababee wavy underline",
                }}
              >
                읽어주셔서 감사합니다.
              </Typography>
              <Typography
                sx={{
                  typography: "h6",
                  textDecoration: "#ababee wavy underline",
                  wordBreak: "keep-all",
                }}
              >
                아직 미숙한 점이 많지만 계속 노력하겠습니다.
              </Typography>
              <Typography
                sx={{
                  typography: "h6",
                  textDecoration: "#ababee wavy underline",
                  wordBreak: "keep-all",
                }}
              >
                부디 포트폴리오를 잘 보셨길 바라면서,
              </Typography>
              <Typography
                sx={{
                  typography: "h6",
                  textDecoration: "#ababee wavy underline",
                }}
              >
                이만 말 줄이겠습니다.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <br />
            </Grid>
            <Grid item xs={12}>
              <br />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Typography
                sx={{
                  typography: "h6",
                  textDecoration: "#ababee wavy underline",
                }}
              >
                류웅선 올림
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </RootGrid>
  );
}
