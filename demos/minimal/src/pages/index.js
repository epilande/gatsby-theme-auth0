import React from "react";
import { useAuth } from "gatsby-theme-auth0";
import {
  Button,
  Container,
  Layout,
  GatsbyAuth0,
  Title,
  P,
} from "gatsby-theme-shared-ui";

const HomePage = () => {
  const session = useAuth();
  const { isLoading, user, logout, login } = session;

  return (
    <Layout>
      <Container textAlign="center">
        <GatsbyAuth0 width="520" style={{ margin: "5rem 0 5rem" }} />
        <h2>Minimal Demo</h2>
        <Title margin="0 0 2.5rem">gatbsy-theme-auth0</Title>

        {user.isLoggedIn && (
          <P fontWeight="600" position="relative">
            Hello {user.userProfile.name}
          </P>
        )}

        {isLoading ? (
          <P>Session loading...</P>
        ) : user.isLoggedIn ? (
          <Button onClick={logout}>Logout</Button>
        ) : (
          <Button onClick={login}>Login</Button>
        )}
      </Container>
    </Layout>
  );
};

export default HomePage;
