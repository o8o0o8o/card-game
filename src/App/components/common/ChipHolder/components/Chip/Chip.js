import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { useStyles } from "./Chip.styles";

export const Chip = ({ value, color }) => {
  const classes = useStyles();

  const drawOuterRing = useMemo(() => {
    switch (color) {
      case "red":
        return <div className={`${classes.outerCircle} ${classes.red}`}></div>;
      case "green":
        return (
          <div className={`${classes.outerCircle} ${classes.green}`}></div>
        );
      case "blue":
        return <div className={`${classes.outerCircle} ${classes.blue}`}></div>;
      case "gray":
        return <div className={`${classes.outerCircle} ${classes.gray}`}></div>;
      default:
        return <div className={`${classes.outerCircle} ${classes.red}`}></div>;
    }
  }, [
    classes.blue,
    classes.gray,
    classes.green,
    classes.outerCircle,
    classes.red,
    color,
  ]);

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
  value: PropTypes.element.isRequired,
};
