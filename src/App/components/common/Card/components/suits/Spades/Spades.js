import React from "react";

import { useStyles } from "./Spades.styles";

export const Spades = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={`${classes.circleLeftInner} ${classes.circle}`}></div>
      <div className={`${classes.circleRightInner} ${classes.circle}`}></div>
      <div className={classes.triangleTop}></div>
      <div className={`${classes.circleLeftOuter} ${classes.circle}`}></div>
      <div className={`${classes.circleRightOuter} ${classes.circle}`}></div>
      <div className={classes.triangleBottom}></div>
    </div>
  );
};
