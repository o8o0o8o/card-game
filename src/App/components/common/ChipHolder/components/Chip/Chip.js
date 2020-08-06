import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { useStyles } from "./Chip.styles";

export const Chip = ({ value, color }) => {
  const classes = useStyles();

  const drawOuterRing = useMemo(() => {
    return (
      <div
        className={classes.outerCircle}
        style={{ background: `${color}` }}
      ></div>
    );
  }, [classes.outerCircle, color]);

  return (
    <div>
      {drawOuterRing}
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
      <div className={classes.line4}></div>
      <div className={classes.innerCircle}></div>
      <div className={classes.value}>{value + "$"}</div>
    </div>
  );
};

Chip.propTypes = {
  value: PropTypes.number.isRequired,
};
