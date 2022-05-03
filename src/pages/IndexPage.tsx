import React from "react";
import styled from "@emotion/styled";

import {
  About,
  Finish,
  Experienced,
  Footer,
  Header,
  Character,
  Project,
  Why,
  Promising,
} from "../components";

export default function IndexPage() {
  return (
    <div>
      <Header />
      <About />
      <Character />
      <Experienced />
      <Project />
      <Why />
      <Promising />
      <Finish />
      <Footer />
    </div>
  );
}
