import React from "react";
import { Layout, Container, Title, P } from "shared-ui";

const NotFound = () => (
  <Layout>
    <Container textAlign="center">
      <Title margin="5rem 0 2.5rem">Not Found</Title>
      <P fontWeight="600">You just hit a route that doesn&#39;t exist...</P>
    </Container>
  </Layout>
);

export default NotFound;
