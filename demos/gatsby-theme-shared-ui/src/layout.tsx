/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import GlobalStyles from "./global-styles";

const Layout: React.FunctionComponent<{}> = ({ children }) => (
  <div>
    <GlobalStyles />
    {children}
  </div>
);

export default Layout;
