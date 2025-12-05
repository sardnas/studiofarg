import React, { Fragment } from "react";
import { SocialMedia } from "./SocialMedia";

import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export const Welcome = () => {
  return (
    <Fragment>
      <Card>
        <CardContent>
          <SocialMedia />
          <Typography>
            Welcome to my little corner of the internet! This site is a work in
            progress...
          </Typography>
          <ButtonGroup variant="text" aria-label="Basic button group">
            <Button key={"1"}>Click</Button>
            <Button key={"1"}>Click</Button>
            <Button key={"1"}>Click</Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    </Fragment>
  );
};
