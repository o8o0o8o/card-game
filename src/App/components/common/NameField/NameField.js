import React, { useRef } from "react";

import { useStyles } from "./NameField.styles";

export const NameField = ({ text }) => {
  const classes = useStyles();
  const input = useRef();

  return (
    <div>
      <input
        className={classes.wrapper}
        type="text"
        ref={input}
        name="name-field"
        placeholder="Enter your name"
      >
        {text}
      </input>
    </div>
  );
};
