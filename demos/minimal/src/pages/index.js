import React from "react";
import { AuthService, useAuth } from "gatsby-theme-auth0";
import {
  Button,
  Container,
  Layout,
  GatsbyAuth0,
  Title,
  P,
} from "gatsby-theme-shared-ui";

const HomePage = () => {
  const { isLoading, isLoggedIn, profile } = useAuth();

  return (
    <Layout>
      <Container textAlign="center">
        <GatsbyAuth0 width="520" style={{ margin: "5rem 0 5rem" }} />
        <h2>Minimal Demo</h2>
        <Title margin="0 0 2.5rem">gatbsy-theme-auth0</Title>

        {profile && (
          <P fontWeight="600" position="relative">
            Hello {profile.name}
          </P>
        )}

        {isLoading ? (
          <P>Session loading...</P>
        ) : isLoggedIn ? (
          <Button onClick={AuthService.logout}>Logout</Button>
        ) : (
          <Button onClick={AuthService.login}>Login</Button>
        )}
      </Container>
    </Layout>
  );
};

export default HomePage;
