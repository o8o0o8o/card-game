import React from "react";
import PropTypes from "prop-types";

import { useStyles } from "./BaseOfCard.styles";

export const BaseOfCard = ({ element }) => {
  const classes = useStyles();

  return <div className={classes.base}>{element}</div>;
};

BaseOfCard.propTypes = {
  element: PropTypes.element.isRequired,
};
