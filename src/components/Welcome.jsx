import React, { Fragment } from "react";
import { SocialMedia } from "./SocialMedia";

import { Typography } from "@mui/material";

export const Welcome = () => {
  return (
    <Fragment>
      <SocialMedia />
      <Typography>Welcome to my little corner of the internet!</Typography>
    </Fragment>
  );
};
