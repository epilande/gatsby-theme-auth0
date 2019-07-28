/** @jsx jsx */
import { jsx } from "@emotion/core";

export const P = props => {
  const { fontWeight, position, ...restProps } = props;
  return <p css={{ fontWeight, position }} {...restProps} />;
};
