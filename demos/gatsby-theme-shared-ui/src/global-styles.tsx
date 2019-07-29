import React from "react";
import { Global, css } from "@emotion/core";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          height: 100vh;
          background: #000;
          color: #fff;
          font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
            "Helvetica Neue", "Arial", "Noto Sans", sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
            "Noto Color Emoji";
          letter-spacing: 0.1px;
          -webkit-font-smoothing: antialiased;
        }

        p {
          margin-bottom: 1.5rem;
        }

        a {
          font-weight: 500;
          border: 0;
          border-bottom: 0.125rem solid #fff;
          color: white;
          margin: auto;
          text-decoration: none;

          &:hover {
            border-image: linear-gradient(to right, #663399, #eb5424);
            border-image-slice: 1;
          }
        }
      `}
    />
  );
};

export default GlobalStyles;
