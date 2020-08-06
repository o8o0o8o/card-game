import React from "react";
import PropTypes from "prop-types";

import { useStyles } from "./Fly.styles";

export const Fly = ({ base }) => {
  const classes = useStyles();

  return <div className={classes.flyAnimate}>{base}</div>;
};

Fly.propTypes = {
  base: PropTypes.element.isRequired,
};
