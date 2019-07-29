import * as React from "react";
import { Container, Title, P } from "gatsby-theme-shared-ui";

const NotFound = () => (
  <Container textAlign="center">
    <Title margin="5rem 0 2.5rem">Not Found</Title>
    <P fontWeight="600">You just hit a route that doesn&#39;t exist...</P>
  </Container>
);

export default NotFound;
