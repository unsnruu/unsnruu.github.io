import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import styled from "@emotion/styled";

import ProjectPanel from "./ProjectPanel";

import needogLogoPath from "../../assets/logos/needog-logo-v2.png";

interface ProjectItem {
  imgPath: string;
  title: string;
  text: string;
  url: string;
}

const RootGrid = styled(Grid)`
  padding-top: 10rem;
  padding-bottom: 10rem;
`;

export default function ProjectContainer() {
  const projects: ProjectItem[] = [
    {
      imgPath: needogLogoPath,
      title: "Needog",
      text: "sample",
      url: "https://github.com/unsnruu/needog",
    },
  ];

  return (
    <>
      <RootGrid container justifyContent={"center"} id={"section-project"}>
        <Grid item xs={10} sx={{ marginBottom: "3rem" }}>
          <Typography sx={{ typography: "h3", fontWeight: "bold" }}>
            프로젝트
          </Typography>
        </Grid>
        <Grid item xs={10} container justifyContent={"center"}>
          {projects.map(({ imgPath, text, title, url }, idx) => {
            return (
              <ProjectPanel
                key={idx}
                imgPath={imgPath}
                text={text}
                title={title}
                url={url}
              />
            );
          })}
        </Grid>
      </RootGrid>
      <Divider />
    </>
  );
}
