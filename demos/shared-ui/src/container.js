/** @jsx jsx */
import { jsx } from "@emotion/core";

export const Container = props => {
  const { textAlign, ...restProps } = props;

  return (
    <div
      css={{
        margin: "0 auto",
        maxWidth: "73.125rem",
        padding: "0 1.25rem",
        textAlign,
      }}
      {...restProps}
    />
  );
};
