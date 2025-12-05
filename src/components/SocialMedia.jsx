import React from "react";
import { ReactComponent as Pinterest } from "../images/pinterest.svg";
const style = {
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%",
  height: "3rem",
  marginBottom: "1rem",
};

export const SocialMedia = () => {
  return (
    <div style={style}>
      <Pinterest />
    </div>
  );
};
