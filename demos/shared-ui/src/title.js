/** @jsx jsx */
import { jsx } from "@emotion/core";

export const Title = props => {
  const { children, margin, ...restProps } = props;
  return (
    <h1
      css={{ marginBottom: "2.5rem", margin, fontSize: "3rem" }}
      {...restProps}
    >
      {children}
    </h1>
  );
};
