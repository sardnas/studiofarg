import React, { Fragment } from "react";
import { Typography, ButtonGroup, Button } from "@mui/material";

export const Content = ({ content, links, title }) => {
  return (
    <Fragment>
      <Typography variant="h1">{title}</Typography>
      <ButtonGroup variant="text" aria-label="Basic button group">
        {Object.keys(links).map((key) => {
          return <Button key={key}>{links[key]}</Button>;
        })}
      </ButtonGroup>
      <Typography>{content}</Typography>
    </Fragment>
  );
};
