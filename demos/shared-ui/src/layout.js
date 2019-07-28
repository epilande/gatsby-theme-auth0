/** @jsx jsx */
import { jsx } from "@emotion/core";
import { GlobalStyles } from "./global-styles";

export const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    {children}
  </div>
);
