import React from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

interface ProjectPanleProps {
  imgPath: string;
  title: string;
  text: string;
  url: string;
}

const PanelGrid = styled(Grid)`
  /* border-right: 1px solid lavender; */
  /* border-bottom: 2px solid lavender; */
  box-shadow: -0.25rem -0.25rem 0rem white, 0.125rem 0.125rem 1rem lavender;
  padding: 1rem;
  border-radius: 1rem;
`;
const ImgGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ProjectPanel({
  imgPath,
  text,
  title,
  url,
}: ProjectPanleProps) {
  return (
    <PanelGrid item container justifyContent={"center"}>
      <ImgGrid item xs={10} md={6}>
        <img
          src={imgPath}
          alt={title}
          style={{ width: "80%", height: "80%", objectFit: "contain" }}
        />
      </ImgGrid>
      <Grid item xs={12} md={6} container spacing={2}>
        <Grid item xs={12}>
          <Typography sx={{ typography: "h6", fontWeight: "bold" }}>
            프로젝트명: <span style={{ fontWeight: "normal" }}>{title}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ typography: "body" }}>{text}</Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <a href={`${url}`} style={{ textDecoration: "none" }}>
            <Button>
              <Typography sx={{ color: "#ababee" }}>바로가기</Typography>
            </Button>
          </a>
        </Grid>
      </Grid>
    </PanelGrid>
  );
}
