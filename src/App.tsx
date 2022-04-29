import React from "react";
import Router from "./pages/Router";
import { Global, css } from "@emotion/react";

const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <div>
      <Global styles={globalStyles} />
      <Router />
    </div>
  );
}

export default App;
