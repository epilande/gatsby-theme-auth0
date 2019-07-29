import * as React from "react";
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

  if (isLoading) {
    return <P>Session loading...</P>;
  }

  return (
    <Layout>
      <Container textAlign="center">
        <GatsbyAuth0 width="520" style={{ margin: "7rem 0 5rem" }} />
        <h2>Custom Demo</h2>
        <Title>gatbsy-theme-auth0</Title>
        {profile && (
          <P fontWeight="600" position="relative">
            Hello {profile.name}
          </P>
        )}
        {isLoggedIn && <Button onClick={AuthService.logout}>Logout</Button>}
        {!isLoggedIn && <Button onClick={AuthService.login}>Login</Button>}
      </Container>
    </Layout>
  );
};

export default HomePage;
