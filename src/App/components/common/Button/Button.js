import React from "react";
import PropTypes from "prop-types";

import { useStyles } from "./Button.styles";

export const Button = ({ text, callback }) => {
  const classes = useStyles();

  return (
    <button className={classes.btn} onClick={callback}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
