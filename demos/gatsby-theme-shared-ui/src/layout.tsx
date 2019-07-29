/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import GlobalStyles from "./global-styles";
import Header from "./header";

const Layout: React.FunctionComponent<{}> = ({ children }) => (
  <div>
    <GlobalStyles />
    <Header />
    {children}
  </div>
);

export default Layout;
