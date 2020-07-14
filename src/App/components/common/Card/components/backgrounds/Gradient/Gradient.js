import React from "react";

import { useStyles } from "./Gradient.styles";

export const Gradient = () => {
  const classes = useStyles();

  return <div className={classes.gradient}></div>;
};
