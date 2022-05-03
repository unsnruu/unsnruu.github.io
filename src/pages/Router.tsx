import React from "react";
import { Routes, Route } from "react-router-dom";

import NotFound from "./404";
import IndexPage from "./IndexPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
