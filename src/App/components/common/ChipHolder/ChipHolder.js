import React, { useCallback, useState } from "react";

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
  const [playerBetIs1, setPlayerBetIs1] = useState(false);
  const [playerBetIs2, setPlayerBetIs2] = useState(false);
  const [playerBetIs5, setPlayerBetIs5] = useState(false);
  const [playerBetIs10, setPlayerBetIs10] = useState(false);

  const makeABet = useCallback(
    (val) => {
      if (!gameIsOn) {
        dispatch(subtractBlackJackPlayerMoney(val));
        dispatch(setBlackJackPlayerBet(val + playerBet));
        switch (val) {
          case 1:
            setPlayerBetIs1(true);
            setTimeout(() => setPlayerBetIs1(false), 1000);
            break;
          case 2:
            setPlayerBetIs2(true);
            setTimeout(() => setPlayerBetIs2(false), 1000);
            break;
          case 5:
            setPlayerBetIs5(true);
            setTimeout(() => setPlayerBetIs5(false), 1000);
            break;
          default:
            setPlayerBetIs10(true);
            setTimeout(() => setPlayerBetIs10(false), 1000);
        }
      }
    },
    [dispatch, gameIsOn, playerBet]
  );

  return (
    <div className={classes.mainContainer}>
      <div
        className={
          playerBetIs1
            ? `${classes.chip1} ${classes.chipAnimate}`
            : `${classes.chip1} ${classes.chip}`
        }
        onClick={() => makeABet(1)}
      >
        <Chip value="1" color="red" />
      </div>
      <div
        className={
          playerBetIs2
            ? `${classes.chip2} ${classes.chipAnimate}`
            : `${classes.chip2} ${classes.chip}`
        }
        onClick={() => makeABet(2)}
      >
        <Chip value="2" color="green" />
      </div>
      <div
        className={
          playerBetIs5
            ? `${classes.chip5} ${classes.chipAnimate}`
            : `${classes.chip5} ${classes.chip}`
        }
        onClick={() => makeABet(5)}
      >
        <Chip value="5" color="blue" />
      </div>
      <div
        className={
          playerBetIs10
            ? `${classes.chip10} ${classes.chipAnimate}`
            : `${classes.chip10} ${classes.chip}`
        }
        onClick={() => makeABet(10)}
      >
        <Chip value="10" color="gray" />
      </div>
    </div>
  );
};
