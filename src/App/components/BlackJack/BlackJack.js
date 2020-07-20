import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { PlayerHand } from "./components/PlayerHand/PlayerHand";
import { Button } from "../common/Button/Button";
import { playerHandSelector, deckSelector } from "../../store/selectors";
import { addPlayerHand, getACard } from "../../store/actions";
import { useStyles } from "./BlackJack.styles";
import { ChipHolder } from "../common/ChipHolder/ChipHolder";

export const BlackJack = () => {
  const classes = useStyles();
  const playerHand = useSelector(playerHandSelector);
  const dispatch = useDispatch();
  const deck = useSelector(deckSelector);

  const addCardToPlayerHand = useCallback(() => {
    const card = deck[Math.round(Math.random() * deck.length)];
    dispatch(addPlayerHand(card));
    dispatch(getACard(card));
  }, [deck, dispatch]);

  return (
    <div>
      <div className={classes.chipHolder}>
        <ChipHolder />
      </div>
      <div className={classes.playerHand}>
        <PlayerHand />
      </div>
      <div className={classes.button}>
        <Button text="Start" callback={addCardToPlayerHand} />
      </div>
    </div>
  );
};
