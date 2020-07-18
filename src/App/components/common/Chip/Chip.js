import React from "react";
import PropTypes from "prop-types";

import { useStyles } from "./Chip.styles";

export const Chip = ({ value }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.outerCircle}></div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
      <div className={classes.line4}></div>
      <div className={classes.innerCircle}></div>
      <div className={classes.value}>{value}</div>
    </div>
  );
};

Chip.propTypes = {
  value: PropTypes.element.isRequired,
};
