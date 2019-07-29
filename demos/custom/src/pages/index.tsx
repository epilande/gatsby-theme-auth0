/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "gatsby";
import { AuthService, useAuth } from "gatsby-theme-auth0";
import {
  Button,
  Container,
  GatsbyAuth0,
  Title,
  P,
} from "gatsby-theme-shared-ui";

const HomePage = () => {
  const { isLoggedIn, profile } = useAuth(session => {
    if (!session.userProfile) {
      return console.log("Not logged in.");
    }
    console.log(`Hello ${session.userProfile.name}!`);
  });

  return (
    <Container textAlign="center">
      <GatsbyAuth0 width="520" style={{ margin: "5rem 0 5rem" }} />
      <h2>Custom Demo</h2>
      <Title margin="0 0 2.5rem">gatbsy-theme-auth0</Title>

      {profile ? (
        <P fontWeight="600" position="relative">
          Hello {profile.name},{" "}
          <Link to="/awesome-callback">view custom callback</Link>
        </P>
      ) : (
        <P fontWeight="600" position="relative">
          <Link to="/awesome-callback">View custom callback</Link>
        </P>
      )}

      {isLoggedIn ? (
        <Button onClick={AuthService.logout}>Logout</Button>
      ) : (
        <Button onClick={AuthService.login}>Login</Button>
      )}
    </Container>
  );
};

export default HomePage;
