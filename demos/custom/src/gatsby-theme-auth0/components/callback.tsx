/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "gatsby";
import { Container } from "gatsby-theme-shared-ui";
import Spinner from "gatsby-theme-auth0/src/components/spinner";

const Callback = () => {
  return (
    <Container textAlign="center">
      <h1
        css={{
          margin: "2.5rem auto",
        }}
      >
        Awesome Callback
      </h1>
      <Spinner />
      <div css={{ margin: "2.5rem" }}>
        <Link to="/">Back</Link>
      </div>
    </Container>
  );
};

export default Callback;
