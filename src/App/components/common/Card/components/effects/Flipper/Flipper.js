import React from "react";
import PropTypes from "prop-types";

import { useStyles } from "./Flipper.styles";

export const Flipper = ({ front, back }) => {
  const classes = useStyles();

  return (
    <div className={classes.flipCard}>
      <div className={classes.flipCardInner}>
        <div className={classes.flipCardFront}>{front}</div>
        <div className={classes.flipCardBack}>{back}</div>
      </div>
    </div>
  );
};

Flipper.propTypes = {
  front: PropTypes.element.isRequired,
  back: PropTypes.element.isRequired,
};
