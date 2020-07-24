import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { PlayerHand } from "./components/PlayerHand/PlayerHand";
import { Button } from "../common/Button/Button";
import {
  deckSelector,
  playerHandSelector,
  dealerHandSelector,
  blackJackPlayerMoneySelector,
  blackJackPlayerBetSelector,
  blackJackPlayerScoreSelector,
  blackJackDealerScoreSelector,
  blackJackGameModeSelector,
  blackJackGameResultSelector,
} from "../../store/selectors";
import {
  addPlayerHand,
  getACard,
  addDealerHand,
  setBlackJackPlayerScore,
  setBlackJackDealerScore,
  resetDeck,
  setBlackJackGameMode,
  resetDealerHand,
  resetPlayerHand,
  setBlackJackState,
  setBlackJackGameResult,
  setBlackJackPlayerBet,
  addBlackJackPlayerMoney,
} from "../../store/actions";
import { useStyles } from "./BlackJack.styles";
import { ChipHolder } from "../common/ChipHolder/ChipHolder";
import { DealerHand } from "./components/DealerHand/DealerHand";

export const BlackJack = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const deck = useSelector(deckSelector);
  const playerHand = useSelector(playerHandSelector);
  const dealerHand = useSelector(dealerHandSelector);
  const gameIsOn = useSelector(blackJackGameModeSelector);
  const playerBet = useSelector(blackJackPlayerBetSelector);
  const playerScore = useSelector(blackJackPlayerScoreSelector);
  const dealerScore = useSelector(blackJackDealerScoreSelector);
  const playerMoney = useSelector(blackJackPlayerMoneySelector);
  const [isItEndOfTheGame, setIsItEndOfTheGame] = useState(false);
  const lastGameResult = useSelector(blackJackGameResultSelector);

  useEffect(() => {
    if (!isItEndOfTheGame && gameIsOn) {
      const playerPoints = playerHand
        .map((el) => {
          const val = el.match(/(?<=_).*/)[0];
          if (+val) {
            return +val;
          }
          if (["K", "J", "Q", "A"].includes(val)) {
            return 10;
          }
        })
        .reduce((a, b) => a + b, 0);
      const dealerPoints = dealerHand
        .map((el) => {
          const val = el.match(/(?<=_).*/)[0];
          if (+val) {
            return +val;
          }
          if (["K", "J", "Q", "A"].includes(val)) {
            return 10;
          }
        })
        .reduce((a, b) => a + b, 0);
      if (playerPoints === 21 || dealerPoints > 21) {
        dispatch(setBlackJackPlayerScore());
        dispatch(setBlackJackState(true));
        setIsItEndOfTheGame(true);
        dispatch(
          setBlackJackGameResult(
            `Player wins with ${playerPoints} points vs. ${dealerPoints} Dealer points `
          )
        );
        dispatch(setBlackJackPlayerBet(0));
        dispatch(setBlackJackGameMode(false));
        dispatch(addBlackJackPlayerMoney(playerBet));
      }
      if (dealerPoints === 21 || playerPoints > 21) {
        dispatch(setBlackJackDealerScore());
        dispatch(setBlackJackState(true));
        setIsItEndOfTheGame(true);
        dispatch(
          setBlackJackGameResult(
            `Dealer wins with ${dealerPoints} points vs. ${playerPoints} Player points `
          )
        );
        dispatch(setBlackJackPlayerBet(0));
        dispatch(setBlackJackGameMode(false));
      }
    }
  }, [dealerHand, dispatch, gameIsOn, isItEndOfTheGame, playerHand]);

  const addCardToPlayerHand = useCallback(() => {
    if (!isItEndOfTheGame) {
      const card = deck[Math.round(Math.random() * deck.length)];
      dispatch(addPlayerHand(card));
      dispatch(getACard(card));
    }
  }, [deck, dispatch, isItEndOfTheGame]);

  const addCardToDealerHand = useCallback(() => {
    if (!isItEndOfTheGame) {
      const card = deck[Math.round(Math.random() * deck.length)];
      dispatch(addDealerHand(card));
      dispatch(getACard(card));
    }
  }, [deck, dispatch, isItEndOfTheGame]);

  const startGame = useCallback(() => {
    if (playerBet && !gameIsOn) {
      dispatch(setBlackJackGameMode(true));
      dispatch(resetDeck());
      dispatch(resetDealerHand());
      dispatch(resetPlayerHand());
      setIsItEndOfTheGame(false);
      dispatch(setBlackJackState(false));
      dispatch(setBlackJackGameResult(null));
    }
  }, [dispatch, gameIsOn, playerBet]);

  return (
    <div className={classes.background}>
      <div className={classes.chipHolder}>
        <ChipHolder />
      </div>
      <div>{`Player score ${playerScore}`}</div>
      <div>{`Dealer score ${dealerScore}`}</div>
      <div>{lastGameResult}</div>
      <div className={classes.playerHand}>
        <PlayerHand />
      </div>
      <div className={classes.dealerHand}>
        <DealerHand />
      </div>

      <div>{`Player money ${playerMoney}`}</div>
      <div>{`Player bet ${playerBet}`}</div>
      <div className={classes.buttonsContainer}>
        <div className={classes.buttonsSplit}>
          <Button text="Start" callback={startGame} />
          <Button text="Hit" callback={addCardToPlayerHand} />
          <Button text="Stand" callback={addCardToDealerHand} />
        </div>
      </div>
    </div>
  );
};
