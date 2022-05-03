import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { HashLink } from "react-router-hash-link";
import { Grid, Typography } from "@mui/material";

import RemixIcon from "../RemixIcon";
import myLogo from "../../assets/my-logo.png";
import velogIcon from "../../assets/velog-icon.png";
import { MenuProps } from "./HeaderMenu";

const GridRoot = styled(Grid)`
  height: 3.75rem;
  background-color: lavender;
  padding: 1rem;
`;

const gitUrl = "https://github.com/unsnruu";
const velogUrl = "https://velog.io/@unsnruu";

export default function MenuFlat({ sections }: MenuProps) {
  const Icons = (
    <Grid item xs={2} container justifyContent={"flex-end"}>
      <Grid item sx={{ ml: "1rem" }}>
        <a
          href={`${gitUrl}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <RemixIcon iconName="github-fill" />
        </a>
      </Grid>
      <Grid item sx={{ ml: "1rem" }}>
        <a href={`${velogUrl}`}>
          <img
            src={velogIcon}
            alt="velog 아이콘"
            style={{ width: "1.75rem", height: "1.75rem", borderRadius: "50%" }}
          />
        </a>
      </Grid>
    </Grid>
  );

  return (
    <GridRoot container justifyContent={"space-between"} alignItems={"center"}>
      <Grid item xs={9} container alignItems={"center"}>
        <Link to={"/"} style={{ marginRight: "1rem" }}>
          <img
            src={myLogo}
            alt="Home Logo"
            style={{ width: "1.5rem", height: "1.5rem" }}
          ></img>
        </Link>
        {sections.map(({ id, text }) => (
          <HashLink
            to={`#${id}`}
            key={id}
            style={{
              paddingRight: "1rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            <Typography>{text}</Typography>
          </HashLink>
        ))}
      </Grid>
      {Icons}
    </GridRoot>
  );
}
