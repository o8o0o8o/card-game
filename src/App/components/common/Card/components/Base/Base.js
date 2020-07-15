import React from "react";
import PropTypes from "prop-types";

import { useStyles } from "./Base.styles";

export const Base = ({ element }) => {
  const classes = useStyles();

  return <div className={classes.base}>{element}</div>;
};

Base.propTypes = {
  element: PropTypes.element.isRequired,
};
