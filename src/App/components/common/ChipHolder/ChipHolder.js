import React from "react";
import PropTypes from "prop-types";

import { useStyles } from "./ChipHolder.styles";
import { Chip } from "./components/Chip/Chip";

export const ChipHolder = ({ value }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.chip1}>
        <Chip value="1" color="red" />
      </div>
      <div className={classes.chip2}>
        <Chip value="2" color="green" />
      </div>
      <div className={classes.chip5}>
        <Chip value="5" color="blue" />
      </div>
      <div className={classes.chip10}>
        <Chip value="10" color="gray" />
      </div>
    </div>
  );
};

ChipHolder.propTypes = {
  value: PropTypes.element.isRequired,
};
