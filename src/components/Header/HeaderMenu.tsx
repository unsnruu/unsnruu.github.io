import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { HashLink } from "react-router-hash-link";
import styled from "@emotion/styled";
import RemixIcon from "../RemixIcon";
import { Link } from "react-router-dom";
import {
  Grid,
  useMediaQuery,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Typography,
} from "@mui/material";

import logo from "../../assets/my-logo.png";
import velogIcon from "../../assets/velog-icon.png";

const GridRoot = styled(Grid)`
  height: 3.75rem;
  background-color: lavender;
  padding: 1rem;
`;

export default function HeaderMenu() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  console.log(matches);
  if (matches) {
    return <MenuFlat />;
  } else {
    return <MenuDrawer />;
  }
}

function MenuFlat() {
  const sections = [
    "저에 대해서",
    "이력 사항",
    "캐릭터",
    "왜",
    "기술 스택",
    "연락처",
  ];

  return (
    <GridRoot container justifyContent={"space-between"} alignItems={"center"}>
      <Grid item xs={9} container alignItems={"center"}>
        <Link to={"/"} style={{ marginRight: "1rem" }}>
          <img
            src={logo}
            alt="Home Logo"
            style={{ width: "1.5rem", height: "1.5rem" }}
          ></img>
        </Link>
        {sections.map((section, idx) => (
          <HashLink
            to={"#"}
            key={idx}
            style={{
              paddingRight: "1rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            <Typography>{section}</Typography>
          </HashLink>
        ))}
      </Grid>
      <Grid item xs={2} container justifyContent={"flex-end"}>
        <Grid item sx={{ ml: "1rem" }}>
          <RemixIcon iconName="github-fill" />
        </Grid>
        <Grid item sx={{ ml: "1rem" }}>
          <img
            src={velogIcon}
            alt="velog 아이콘"
            style={{ width: "1.75rem", height: "1.75rem", borderRadius: "50%" }}
          />
        </Grid>
      </Grid>
    </GridRoot>
  );
}

function MenuDrawer() {
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
  const list = (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <nav>
      <Grid
        container
        justifyContent={"flex-end"}
        alignItems={"center"}
        sx={{ marginRight: "1rem", background: "lavender", height: "3.75rem" }}
      >
        <Grid item>
          <Button
            onClick={toggleDrawer(true)}
            sx={{ color: "purple", fontSize: "1.5rem" }}
          >
            <RemixIcon iconName="menu-line"></RemixIcon>
          </Button>
          <Drawer anchor="right" open={clicked} onClose={toggleDrawer(false)}>
            {list}
          </Drawer>
        </Grid>
      </Grid>
    </nav>
  );
}
