import React, { ReactElement } from "react";
import { Grid } from "@mui/material";

interface GridWrapperProps {
  element?: ReactElement;
  children?: ReactElement;
  xs?: number;
  md?: number;
}
function GridItemWrapper({ children, element, xs, md }: GridWrapperProps) {
  return (
    <Grid item xs={xs} md={md}>
      {element || null}
      {children || null}
    </Grid>
  );
}

export { GridItemWrapper };
