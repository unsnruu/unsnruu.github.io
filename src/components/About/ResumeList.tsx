import React, { useReducer, useState } from "react";
import { ListItem, ListItemText, Divider, Grid } from "@mui/material";
import styled from "@emotion/styled";

import CollapseListItem from "./CollapseListItem";
import AlertDialog from "../AlertDialog";

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
  background: linear-gradient(white, white, lavender);
`;

export default function ResumeList() {
  const [aboutState, aboutDispatch] = useReducer(aboutReducer, aboutInitState);
  const [alert, setAlert] = useState(false);
  const handleClickToggle = (name: keyof AboutState) => () => {
    aboutDispatch({ type: "TOGGLE_STATE", payload: { name } });
  };

  return (
    <GridRoot container id={"section-resume"}>
      <Grid container item xs={12}>
        <ListItem id="profile-list-header">
          <ListItemText
            primary="이력 사항"
            primaryTypographyProps={{ typography: "h3", fontWeight: "bold" }}
          />
        </ListItem>
      </Grid>
      <Grid item xs={12} container>
        <Grid item xs={12} md={6}>
          <CollapseListItem
            title={"학력"}
            open={aboutState.education}
            handleClick={() => {
              setAlert(true);
              handleClickToggle("education");
            }}
            subTitles={[
              ["2021.2", "인하대학교 한국어문학과 졸업(주)"],
              ["2021.2", "인하대학교 조형예술학과 졸업(복)"],
            ]}
          />
          <Divider />
        </Grid>
        <Grid item xs={12} md={6}>
          <CollapseListItem
            title={"대외 활동"}
            open={aboutState.extracurriculum}
            handleClick={handleClickToggle("extracurriculum")}
            subTitles={[
              ["2014.2 ~ 2017.12", "문화 살롱(비평 학회)"],
              ["2020.11", "조형예술학과 졸업 전시"],
            ]}
          />
          <Divider />
        </Grid>
        <Grid item xs={12} md={6}>
          <CollapseListItem
            title="어학 인증"
            open={aboutState.certificate}
            handleClick={handleClickToggle("certificate")}
            subTitles={[["TOEIC", "915 점"]]}
          />
          <Divider />
        </Grid>
      </Grid>
      <AlertDialog
        alert={aboutState.education ? false : alert}
        setAlert={setAlert}
        handleClickTrue={() =>
          aboutDispatch({
            type: "SET_TRUE",
            payload: { name: "education" },
          })
        }
      />
    </GridRoot>
  );
}
