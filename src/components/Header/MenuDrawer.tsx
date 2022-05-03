import React, { useState } from "react";
import RemixIcon from "../RemixIcon";

import {
  Grid,
  Drawer,
  List,
  ListItem,
  Button,
  Typography,
} from "@mui/material";

import { HashLink } from "react-router-hash-link";
import { MenuProps, SectionType } from "./HeaderMenu";
import styled from "@emotion/styled";

import myLogo from "../../assets/my-logo.png";
import velogIcon from "../../assets/velog-icon.png";

const StyledHashLink = styled(HashLink)`
  text-decoration: none;
  color: inherit;
`;

const gitUrl = "https://github.com/unsnruu";
const velogUrl = "https://velog.io/@unsnruu";

export default function MenuDrawer({ sections }: MenuProps) {
  const [clicked, setClicked] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setClicked(open);
    };

  return (
    <nav>
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ background: "lavender", height: "3.75rem" }}
      >
        <Grid item sx={{ paddingLeft: "1rem" }}>
          <a href="https://unsnruu.github.io">
            <img
              src={myLogo}
              alt="home logo"
              style={{ width: "2rem", height: "2rem" }}
            />
          </a>
        </Grid>
        <Grid item>
          <Button
            onClick={toggleDrawer(true)}
            sx={{ color: "black", fontSize: "1.5rem" }}
          >
            <RemixIcon iconName="menu-line"></RemixIcon>
          </Button>
          <Drawer anchor="right" open={clicked} onClose={toggleDrawer(false)}>
            <SideMenu toggleDrawer={toggleDrawer} sections={sections} />
          </Drawer>
        </Grid>
      </Grid>
    </nav>
  );
}

interface SideMenuProps {
  sections: SectionType[];
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const SideMenuRootGrid = styled(Grid)`
  padding: 2rem;
`;

function SideMenu({ toggleDrawer, sections }: SideMenuProps) {
  const GitIconGrid = (
    <Grid item xs={6} sm={3}>
      <a
        href={`${gitUrl}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <RemixIcon iconName="github-fill" style={{ fontSize: "2.5rem" }} />
      </a>
    </Grid>
  );
  const VelogIconGrid = (
    <Grid item xs={6} sm={3}>
      <a href={`${velogUrl}`}>
        <img
          src={velogIcon}
          alt="velog 아이콘"
          style={{
            width: "2.2rem",
            height: "2.2rem",
            borderRadius: "50%",
          }}
        />
      </a>
    </Grid>
  );

  return (
    <SideMenuRootGrid
      sx={{ width: "70vw" }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
      onClick={toggleDrawer(false)}
      container
    >
      <Grid
        item
        xs={12}
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ marginBottom: "3rem" }}
      >
        <Grid item xs={8}>
          <Typography sx={{ typography: "h3" }}>메뉴</Typography>
        </Grid>
        <Grid
          item
          xs={4}
          container
          justifyContent={"flex-end"}
          alignItems={"center"}
          spacing={4}
        >
          {GitIconGrid}
          {VelogIconGrid}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <List>
          {sections.map(({ id, text }) => (
            <ListItem button key={id}>
              <StyledHashLink to={`#${id}`}>
                <Typography sx={{ typography: "h5" }}>{text}</Typography>
              </StyledHashLink>
            </ListItem>
          ))}
        </List>
      </Grid>
    </SideMenuRootGrid>
  );
}
