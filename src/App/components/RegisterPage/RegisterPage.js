import React from "react";

import { useStyles } from "./RegisterPage.styles";
import { Button } from "../common/Button/Button";
import { NameField } from "../common/NameField/NameField";
import { PasswordField } from "../common/PasswordField/PasswordField";

export const RegisterPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.form}>
        <header>Register Form</header>
        <NameField />
        <PasswordField />
        <PasswordField />
        <Button text="Register" />
      </div>
    </div>
  );
};
