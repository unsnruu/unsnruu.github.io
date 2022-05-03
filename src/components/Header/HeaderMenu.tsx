import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import MenuDrawer from "./MenuDrawer";
import MenuFlat from "./MenuFlat";

export interface SectionType {
  id: string;
  text: string;
}
export interface MenuProps {
  sections: SectionType[];
}

export default function HeaderMenu() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const sections: SectionType[] = [
    { id: "section-about", text: "저에 대해서" },
    { id: "section-resume", text: "이력사항" },
    { id: "section-character", text: "자기소개" },
    { id: "section-experienced", text: "기술 스택" },
    { id: "section-project", text: "프로젝트" },
    { id: "section-why", text: "Q&A" },
    { id: "section-promising", text: "미래 계획" },
    { id: "section-finish", text: "마치면서" },
  ];

  if (matches) {
    return <MenuFlat sections={sections} />;
  } else {
    return <MenuDrawer sections={sections} />;
  }
}

// "#A5F"
