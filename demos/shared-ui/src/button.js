/** @jsx jsx */
import { jsx } from "@emotion/core";

export const Button = props => {
  return (
    <button
      css={{
        fontWeight: 600,
        fontSize: "1rem",
        padding: "1rem 2rem",
        color: "#fff",
        border: 0,
        borderRadius: "4px",
        cursor: "pointer",
        letterSpacing: "1px",
        backgroundImage:
          "linear-gradient(to right,#7060ff,#663399,#e8a148,#eb5424)",
        backgroundSize: "300% 100%",
        textTransform: "uppercase",
        transition: "all .4s ease-in-out",
        boxShadow: "0 0 4rem 0 #663399",

        "&:hover": {
          backgroundPosition: "100% 0",
          boxShadow: "0 0 4rem 0 rgb(235, 84, 36, 0.7)",
        },
      }}
      {...props}
    />
  );
};
