import React, { useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { useStyles } from "./DealerHand.styles";
import {
  dealerHandSelector,
  deckSelector,
  blackJackStateSelector,
  blackJackGameModeSelector,
} from "../../../../store/selectors";
import { Card } from "../../../common/Card/Card";
import { addDealerHand, getACard } from "../../../../store/actions";

export const DealerHand = ({ value, color }) => {
  const classes = useStyles();
  const dealerHand = useSelector(dealerHandSelector);
  const dispatch = useDispatch();
  const deck = useSelector(deckSelector);
  const isItEnd = useSelector(blackJackStateSelector);
  const gameIsOn = useSelector(blackJackGameModeSelector);

  useEffect(() => {
    if (gameIsOn) {
      let card = deck[Math.round(Math.random() * deck.length)];
      dispatch(addDealerHand(deck[Math.round(Math.random() * deck.length)]));
      dispatch(getACard(card));
      card = deck[Math.round(Math.random() * deck.length)];
      dispatch(addDealerHand(deck[Math.round(Math.random() * deck.length)]));
      dispatch(getACard(card));
    }
  }, [deck, dispatch, gameIsOn]);

  const newCard = useMemo(() => {
    if (isItEnd) {
      return dealerHand.map((el, i) => (
        <Card
          key={el.toString()}
          suit={el.match(/\w*(?=_)/)[0]}
          rank={el.match(/(?<=_).*/)[0]}
          back=""
          effect=""
        />
      ));
    }
    return dealerHand.map((el, i) => {
      if (i === dealerHand.length - 1) {
        return (
          <Card
            key={el.toString()}
            suit=""
            rank=""
            back="gradient"
            effect="faceDown"
          />
        );
      }
      return (
        <Card
          key={el.toString()}
          suit={el.match(/\w*(?=_)/)[0]}
          rank={el.match(/(?<=_).*/)[0]}
          back=""
          effect=""
        />
      );
    });
  }, [dealerHand, isItEnd]);

  return <div className={classes.dealerHand}>{newCard}</div>;
};

DealerHand.propTypes = {
  value: PropTypes.element.isRequired,
};
