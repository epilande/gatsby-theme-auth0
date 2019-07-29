/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import GithubIcon from "./github";

const Header: React.FunctionComponent<{}> = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          source
        }
      }
    }
  `);

  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <h3>{siteMetadata.title}</h3>
      <div
        css={{
          display: "flex",
        }}
      >
        {siteMetadata.source && (
          <a
            href={siteMetadata.source}
            target="_blank"
            rel="noopener noreferrer"
            css={{
              display: "flex",
              alignItems: "center",
              margin: "0 0.5rem",
              fontSize: "0.875rem",
            }}
          >
            Source
          </a>
        )}
        <a
          href="https://github.com/epilande/gatsby-theme-auth0"
          target="_blank"
          rel="noopener noreferrer"
          css={{
            display: "block",
            margin: "0 0.5rem",
            border: 0,

            "&:hover": {
              svg: {
                fill: "#EB5424",
              },
            },
            svg: {
              width: "20px",
              fill: "#fff",
              transition: "fill 0.2s",
            },
          }}
        >
          <GithubIcon />
        </a>
      </div>
    </div>
  );
};

export default Header;
