import React from "react";

import { useStyles } from "./Hearts.styles";

export const Hearts = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={`${classes.circleLeftInner} ${classes.circle}`}></div>
      <div className={`${classes.circleRightInner} ${classes.circle}`}></div>
      <div className={classes.triangle}></div>
      <div className={`${classes.circleLeftOuter} ${classes.circle}`}></div>
      <div className={`${classes.circleRightOuter} ${classes.circle}`}></div>
    </div>
  );
};
