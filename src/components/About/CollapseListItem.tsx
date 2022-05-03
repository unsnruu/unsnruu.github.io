import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Collapse,
} from "@mui/material";

type SubTitle = [string, string?];
interface CollpaseListItemProps {
  handleClick: () => void;
  open: boolean;
  title: string;
  subTitles: SubTitle[];
}

export default function CollapseListItem({
  open,
  handleClick,
  title,
  subTitles,
}: CollpaseListItemProps) {
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText
          primary={title}
          primaryTypographyProps={{
            typography: "h6",
          }}
        />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List sx={{ pl: 4 }}>
          {subTitles.map(([subTitle, text], idx) => (
            <ListItem key={idx}>
              <ListItemText primary={subTitle} primaryTypographyProps={{}} />
              {text && (
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{ textAlign: "end", pr: "1em" }}
                />
              )}
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}
