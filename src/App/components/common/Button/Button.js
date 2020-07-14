import React from "react";
import PropTypes from "prop-types";

import { useStyles } from "./Button.styles";

export const Button = ({ text }) => {
  const classes = useStyles();

  return <button className={classes.btn}>{text}</button>;
};

Button.propTypes = { text: PropTypes.string.isRequired };
