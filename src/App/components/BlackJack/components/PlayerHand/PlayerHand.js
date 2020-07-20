import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { useStyles } from "./PlayerHand.styles";
import { useSelector } from "react-redux";
import { playerHandSelector } from "../../../../store/selectors";
import { Card } from "../../../common/Card/Card";

export const PlayerHand = ({ value, color }) => {
  const classes = useStyles();
  const playerHand = useSelector(playerHandSelector);

  const getACard = useMemo(
    () =>
      playerHand.map((el) => (
        <Card
          key={el.toString()}
          suit={el.match(/\w*(?=_)/)[0]}
          rank={el.match(/(?<=_).*/)[0]}
          back=""
          effect=""
        />
      )),
    [playerHand]
  );

  return <div className={classes.playerHand}>{getACard}</div>;
};

PlayerHand.propTypes = {
  value: PropTypes.element.isRequired,
};
