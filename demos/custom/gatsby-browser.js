/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useAuth } from "gatsby-theme-auth0";
import Spinner from "gatsby-theme-auth0/src/components/spinner";
import { Layout } from "gatsby-theme-shared-ui";

const SessionCheck = ({ children }) => {
  const { isLoading } = useAuth();
  return (
    <Layout>
      {isLoading ? (
        <p css={{ textAlign: "center", margin: "2.5rem auto" }}>
          <Spinner />
        </p>
      ) : (
        children
      )}
    </Layout>
  );
};

export const wrapPageElement = ({ element }) => (
  <SessionCheck>{element}</SessionCheck>
);
