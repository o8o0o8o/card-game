import React from "react";
import PropTypes from "prop-types";

import { useStyles } from "./StartPage.styles";

export const StartPage = ({ text, callback }) => {
  const classes = useStyles();

  return (
    <button className={classes.btn} onClick={callback}>
      {text}
    </button>
  );
};

StartPage.propTypes = {
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
