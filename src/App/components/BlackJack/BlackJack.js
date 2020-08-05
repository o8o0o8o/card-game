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
  addBlackJackPlayerMoney,
  subtractBlackJackPlayerMoney,
} from "../../store/actions";
import { useStyles } from "./BlackJack.styles";
import { ChipHolder } from "../common/ChipHolder/ChipHolder";
import { DealerHand } from "./components/DealerHand/DealerHand";
import { Footer } from "../common/Footer/Footer";
import { addError, resetErrors } from "../common/errors/store/Errors.actions";
import { Errors } from "../common/errors/Errors";

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
          return el;
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
          return el;
        })
        .reduce((a, b) => a + b, 0);
      if (playerPoints === 21 || dealerPoints > 21) {
        dispatch(setBlackJackPlayerScore());
        dispatch(setBlackJackState(true));
        setIsItEndOfTheGame(true);
        dispatch(
          setBlackJackGameResult(
            `Player wins with ${playerPoints} points vs. ${dealerPoints} Dealer points`
          )
        );
        dispatch(
          addError(
            `Player wins with ${playerPoints} points vs. ${dealerPoints} Dealer points`
          )
        );
        setTimeout(() => dispatch(resetErrors()), 5000);
        //dispatch(setBlackJackPlayerBet(0));
        dispatch(setBlackJackGameMode(false));
        dispatch(addBlackJackPlayerMoney(playerBet));
      }
      if (dealerPoints === 21 || playerPoints > 21) {
        dispatch(setBlackJackDealerScore());
        dispatch(setBlackJackState(true));
        setIsItEndOfTheGame(true);
        dispatch(
          setBlackJackGameResult(
            `Dealer wins with ${dealerPoints} points vs. ${playerPoints} Player points`
          )
        );
        dispatch(
          addError(
            `Dealer wins with ${dealerPoints} points vs. ${playerPoints} Player points`
          )
        );
        setTimeout(() => dispatch(resetErrors()), 5000);
        //dispatch(setBlackJackPlayerBet(0));
        dispatch(setBlackJackGameMode(false));
      }
    }
  }, [dealerHand, dispatch, gameIsOn, isItEndOfTheGame, playerBet, playerHand]);

  const addCardToPlayerHand = useCallback(() => {
    if (!isItEndOfTheGame && gameIsOn) {
      const card = deck[Math.round(Math.random() * deck.length)];
      dispatch(addPlayerHand(card));
      dispatch(getACard(card));
    } else {
      dispatch(addError("Start a game"));
    }
  }, [deck, dispatch, gameIsOn, isItEndOfTheGame]);

  const dealerHelper = useCallback(() => {
    if (!isItEndOfTheGame && gameIsOn) {
      const card = deck[Math.round(Math.random() * deck.length)];
      dispatch(addDealerHand(card));
      dispatch(getACard(card));
    }
  }, [deck, dispatch, gameIsOn, isItEndOfTheGame]);

  const addCardToDealerHand = useCallback(() => {
    dealerHelper();
    if (!gameIsOn) {
      dispatch(addError("Start a game"));
    }
    setTimeout(() => dealerHelper(), 1000);
  }, [dealerHelper, dispatch, gameIsOn]);

  const startGame = useCallback(() => {
    if (playerBet && !gameIsOn) {
      dispatch(subtractBlackJackPlayerMoney(playerBet));
      dispatch(setBlackJackGameMode(true));
      dispatch(resetDeck());
      dispatch(resetDealerHand());
      dispatch(resetPlayerHand());
      setIsItEndOfTheGame(false);
      dispatch(setBlackJackState(false));
      dispatch(setBlackJackGameResult(null));
    }
    if (gameIsOn) {
      dispatch(addError("Game is on"));
    }
    if (!playerBet) {
      dispatch(addError("Make a bet"));
      setTimeout(() => dispatch(resetErrors()), 5000);
    }
  }, [dispatch, gameIsOn, playerBet]);

  return (
    <div className={classes.background}>
      <div className={classes.mainContainer}>
        <div className={classes.buttonsContainer}>
          <div className={classes.buttonsSplit}>
            {gameIsOn ? (
              <div className={classes.buttonsSplit}>
                <Button text="Hit" callback={addCardToPlayerHand} />
                <Button text="Stand" callback={addCardToDealerHand} />
              </div>
            ) : (
              <div className={classes.pulser}>
                <Button text="Deal" callback={startGame} />
              </div>
            )}
          </div>
        </div>
        <div className={classes.moneyContainer}>
          <div className={classes.chipHolder}>
            <ChipHolder />
          </div>
          <div>{`Player money ${playerMoney}`}</div>
          <div>{`Player bet ${playerBet}`}</div>
        </div>
      </div>
      <Errors />
      <div className={classes.cardsRow}>
        <div className={classes.player}>
          <div className={classes.playerHand}>
            <PlayerHand />
          </div>
          <div>{`Player score ${playerScore}`}</div>
        </div>
        <div className={classes.dealer}>
          <div className={classes.dealerHand}>
            <DealerHand />
          </div>
          <div>{`Dealer score ${dealerScore}`}</div>
        </div>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};
