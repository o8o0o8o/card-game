import React, { useCallback, useState, useMemo } from "react";

import { useStyles } from "./ChipHolder.styles";
import { Chip } from "./components/Chip/Chip";
import { useDispatch, useSelector } from "react-redux";
import { setBlackJackPlayerBet } from "../../../store/actions";
import {
  blackJackGameModeSelector,
  blackJackPlayerBetSelector,
} from "../../../store/selectors";
import { CHIPS } from "./Chip.models";

export const ChipHolder = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const gameIsOn = useSelector(blackJackGameModeSelector);
  const playerBet = useSelector(blackJackPlayerBetSelector);
  const [playerBid, setPlayerBid] = useState(null);

  const makeABet = useCallback(
    (val) => {
      if (!gameIsOn) {
        //  dispatch(subtractBlackJackPlayerMoney(val));
        dispatch(setBlackJackPlayerBet(val + playerBet));
        setPlayerBid(val);
        setTimeout(() => {
          setPlayerBid(null);
        }, 1000);
      }
    },
    [dispatch, gameIsOn, playerBet]
  );

  const drawChipStack = useMemo(() => {
    return CHIPS.map((element, i) => (
      <div
        className={
          playerBid === element.val
            ? `${classes[`chip${playerBid}`]} ${classes.chipAnimate}`
            : `${classes[`chip${element.val}`]} ${classes.chip}`
        }
        onClick={() => makeABet(element.val)}
      >
        <Chip value={element.val} color={element.color} />
      </div>
    ));
  }, [classes, makeABet, playerBid]);

  const removeChip = useCallback(() => {
    const arrOfChipValues = CHIPS.map((el) =>
      el.val <= playerBet ? el.val : null
    );
    makeABet(-Math.max(...arrOfChipValues));
  }, [makeABet, playerBet]);

  return (
    <div className={classes.mainContainer}>
      {playerBet ? (
        <div
          className={
            playerBid < 0
              ? `${classes.playerBet} ${classes.playerBetAnimate}`
              : classes.playerBet
          }
          onClick={() => removeChip()}
        >
          <Chip value={playerBet} color="gold" />{" "}
        </div>
      ) : (
        ""
      )}
      {drawChipStack}
    </div>
  );
};
