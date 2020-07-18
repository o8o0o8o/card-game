import React from "react";

import { useStyles } from "./Diamonds.styles";

export const Diamonds = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.triangleTop}></div>
      <div className={classes.triangleBottom}></div>
    </div>
  );
};
