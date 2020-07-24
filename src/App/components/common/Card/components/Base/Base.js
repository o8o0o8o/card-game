import React from "react";
import PropTypes from "prop-types";

import { useStyles } from "./Base.styles";

export const Base = ({ suit, rank, back }) => {
  const classes = useStyles();

  return (
    <div className={classes.base}>
      {suit}
      {rank}
      {back}
    </div>
  );
};

Base.propTypes = {
  suit: PropTypes.element,
  rank: PropTypes.element,
  back: PropTypes.element,
};
