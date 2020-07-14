import React, { useRef } from "react";

import { useStyles } from "./PasswordField.styles";

export const PasswordField = ({ text }) => {
  const classes = useStyles();
  const input = useRef();

  return (
    <div>
      <input
        className={classes.wrapper}
        type="password"
        ref={input}
        name="name-field"
        placeholder="Enter your password"
      >
        {text}
      </input>
    </div>
  );
};
