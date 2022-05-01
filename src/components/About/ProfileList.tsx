import React, { useReducer } from "react";
import CollapseListItem from "./CollapseListItem";

import { ListItem, ListItemText, Divider, Grid } from "@mui/material";
import styled from "@emotion/styled";

interface AboutState {
  education: boolean;
  extracurriculum: boolean;
  certificate: boolean;
}
type AboutAction =
  | { type: "SET_TRUE"; payload: { name: keyof AboutState } }
  | { type: "SET_FALSE"; payload: { name: keyof AboutState } }
  | { type: "TOGGLE_STATE"; payload: { name: keyof AboutState } };
function aboutReducer(state: AboutState, { type, payload }: AboutAction) {
  switch (type) {
    case "SET_FALSE":
      return { ...state, [payload.name]: false };
    case "SET_TRUE":
      return { ...state, [payload.name]: true };
    case "TOGGLE_STATE":
      return { ...state, [payload.name]: !state[payload.name] };
    default:
      return state;
  }
}
const aboutInitState: AboutState = {
  certificate: false,
  education: false,
  extracurriculum: false,
};

const GridRoot = styled(Grid)`
  height: 25.875rem;
`;

export default function ProfileList() {
  const [aboutState, aboutDispatch] = useReducer(aboutReducer, aboutInitState);

  const handleClickToggle = (name: keyof AboutState) => () => {
    aboutDispatch({ type: "TOGGLE_STATE", payload: { name } });
  };

  return (
    <GridRoot container>
      <Grid container item xs={12}>
        <ListItem id="profile-list-header">
          <ListItemText
            primary="이력 사항"
            primaryTypographyProps={{ typography: "h4", fontWeight: "bold" }}
          />
        </ListItem>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={12} md={6}>
          <CollapseListItem
            title={"학력"}
            open={aboutState.education}
            handleClick={handleClickToggle("education")}
            subtitles={["대졸"]}
          />
          <Divider />
          <CollapseListItem
            title={"대외 활동"}
            open={aboutState.extracurriculum}
            handleClick={handleClickToggle("extracurriculum")}
            subtitles={["문화살롱"]}
          />
          <Divider />
        </Grid>
        <Grid item xs={12} md={6}>
          <CollapseListItem
            title="어학 인증"
            open={aboutState.certificate}
            handleClick={handleClickToggle("certificate")}
            subtitles={["TOEIC"]}
          />
          <Divider />
        </Grid>
      </Grid>
    </GridRoot>
  );
}
