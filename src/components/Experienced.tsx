import React from "react";
import { Grid, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import {
  CSSLogo,
  HTLMLogo,
  JSLogo,
  ReactLogo,
  RecoilLogo,
  ReduxLogo,
  VueLogo,
} from "./Logos";
import emotionLogoPath from "./../assets/logos/emotion-logo.png";
import styledComponentPath from "./../assets/logos/styled-component-logo.png";

const wiggling = keyframes`
 0%{transform: rotateX(0deg)}
 25%{transform: rotateX(20deg)}
 50%{transform: rotateX(-17deg)}
 75%{transform: rotateX(10deg)}
 100%{transform: rotateX(5deg)}
`;

const RootGrid = styled(Grid)`
  background: #ababee;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
const LogoGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  & svg,
  & img {
    animation: ${wiggling} 1.5s linear infinite;
    width: 120px;
    height: 120px;
    padding: 0.5rem;
  }
`;
//기술 스택
export default function Experienced() {
  const logos = [
    <HTLMLogo />,
    <CSSLogo />,
    <JSLogo />,
    <ReactLogo />,
    <ReduxLogo />,
    <RecoilLogo />,
    <VueLogo />,
  ];

  return (
    <RootGrid
      container
      justifyContent={"center"}
      spacing={0}
      id={"section-experienced"}
    >
      <Grid
        xs={9}
        item
        sx={{ marginBottom: "3rem", display: "flex", justifyContent: "center" }}
      >
        <Typography sx={{ typography: "h3", fontWeight: "bold" }}>
          경험한 기술들
        </Typography>
      </Grid>
      <Grid
        item
        xs={10}
        container
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ background: "white", borderRadius: "1rem" }}
      >
        {logos.map((logo, idx) => (
          <LogoGrid key={idx} item xs={6} md={4} lg={2}>
            {logo}
          </LogoGrid>
        ))}
        <LogoGrid item xs={6} md={4} lg={3}>
          <img
            src={styledComponentPath}
            alt=""
            style={{ width: "10rem", height: "10rem" }}
          />
        </LogoGrid>
        <LogoGrid item xs={6} md={4} lg={3}>
          <img
            src={emotionLogoPath}
            alt=""
            style={{ width: "10rem", height: "10rem" }}
          />
        </LogoGrid>
      </Grid>
    </RootGrid>
  );
}
