import React from "react";
import LayoutWrapper from "./src/LayoutWrapper";

export const wrapPageElement = ({ element }) => (
  <LayoutWrapper>{element}</LayoutWrapper>
);
