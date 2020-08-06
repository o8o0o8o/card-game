import React, { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useStyles } from "./PlayerHand.styles";
import {
  playerHandSelector,
  deckSelector,
  blackJackGameModeSelector,
} from "../../../../store/selectors";
import { Card } from "../../../common/Card/Card";
import { addPlayerHand, getACard } from "../../../../store/actions";

export const PlayerHand = () => {
  const classes = useStyles();
  const playerHand = useSelector(playerHandSelector);
  const deck = useSelector(deckSelector);
  const dispatch = useDispatch();
  const gameIsOn = useSelector(blackJackGameModeSelector);

  useEffect(() => {
    if (gameIsOn) {
      let card = deck[Math.round(Math.random() * deck.length)];
      dispatch(addPlayerHand(card));
      dispatch(getACard(card));
      card = deck[Math.round(Math.random() * deck.length)];
      dispatch(addPlayerHand(card));
      dispatch(getACard(card));
    }
  }, [deck, dispatch, gameIsOn]);

  const newCard = useMemo(
    () =>
      playerHand.map((el) => (
        <Card
          key={el.toString()}
          suit={el.match(/\w*(?=_)/)[0]}
          rank={el.match(/(?<=_).*/)[0]}
          back=""
          effect="fly"
        />
      )),
    [playerHand]
  );

  return <div className={classes.playerHand}>{newCard}</div>;
};
