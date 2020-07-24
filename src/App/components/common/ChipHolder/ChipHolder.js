import React, { useCallback } from "react";

import { useStyles } from "./ChipHolder.styles";
import { Chip } from "./components/Chip/Chip";
import { useDispatch, useSelector } from "react-redux";
import {
  subtractBlackJackPlayerMoney,
  setBlackJackPlayerBet,
} from "../../../store/actions";
import {
  blackJackGameModeSelector,
  blackJackPlayerBetSelector,
} from "../../../store/selectors";

export const ChipHolder = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const gameIsOn = useSelector(blackJackGameModeSelector);
  const playerBet = useSelector(blackJackPlayerBetSelector);

  const makeABet = useCallback(
    (val) => {
      if (!gameIsOn) {
        dispatch(subtractBlackJackPlayerMoney(val));
        dispatch(setBlackJackPlayerBet(val + playerBet));
      }
    },
    [dispatch, gameIsOn, playerBet]
  );

  return (
    <div className={classes.mainContainer}>
      <div className={classes.chip1} onClick={() => makeABet(1)}>
        <Chip value="1" color="red" />
      </div>
      <div className={classes.chip2} onClick={() => makeABet(2)}>
        <Chip value="2" color="green" />
      </div>
      <div className={classes.chip5} onClick={() => makeABet(5)}>
        <Chip value="5" color="blue" />
      </div>
      <div className={classes.chip10} onClick={() => makeABet(10)}>
        <Chip value="10" color="gray" />
      </div>
    </div>
  );
};
