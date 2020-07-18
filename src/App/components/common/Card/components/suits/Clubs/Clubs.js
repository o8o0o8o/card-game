import React from "react";

import { useStyles } from "./Clubs.styles";

export const Clubs = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={`${classes.circleLeftInner} ${classes.circle}`}></div>
      <div className={`${classes.circleRightInner} ${classes.circle}`}></div>
      <div className={`${classes.circleTopInner} ${classes.circle}`}></div>
      <div className={classes.triangle}></div>
    </div>
  );
};
