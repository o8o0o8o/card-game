import React from "react";
import PropTypes from "prop-types";

import { useStyles } from "./Rank.styles";

export const Rank = ({ rank }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={`${classes.upperRank} ${classes.general}`}>{rank}</div>
      <div className={`${classes.lowerRank} ${classes.general}`}>{rank}</div>
    </div>
  );
};

Rank.propTypes = {
  rank: PropTypes.string.isRequired,
};
