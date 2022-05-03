import React from "react";
import Router from "./pages/Router";
import { Global, css } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
  }
`;

const globalTheme = createTheme({});

function App() {
  return (
    <div>
      <Global styles={globalStyles} />
      <ThemeProvider theme={globalTheme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
