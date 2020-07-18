import React from "react";
import PropTypes from "prop-types";

import { useStyles } from "./Base.styles";

export const Base = ({ suit, rank }) => {
  const classes = useStyles();

  return (
    <div className={classes.base}>
      {suit}
      {rank}
    </div>
  );
};

Base.propTypes = {
  suit: PropTypes.element.isRequired,
  rank: PropTypes.element.isRequired,
};
