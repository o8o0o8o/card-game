import { useSelector } from "react-redux";

import { deckSelector } from "./selectors";
import { addPlayerHand, getACard, addDealerHand } from "./actions";

export const initializeHand = (hand) => (dispatch) => {
  const deck = useSelector(deckSelector);
  console.log("useeffecr");
  switch (hand) {
    case "dealerHand":
      {
        let card = deck[Math.round(Math.random() * deck.length)];
        dispatch(addDealerHand(deck[Math.round(Math.random() * deck.length)]));
        dispatch(getACard(card));
        card = deck[Math.round(Math.random() * deck.length)];
        dispatch(addDealerHand(deck[Math.round(Math.random() * deck.length)]));
        dispatch(getACard(card));
      }
      break;
    default:
      {
        let card = deck[Math.round(Math.random() * deck.length)];
        dispatch(addPlayerHand(card));
        dispatch(getACard(card));
        card = deck[Math.round(Math.random() * deck.length)];
        dispatch(addPlayerHand(card));
        dispatch(getACard(card));
      }
      break;
  }
};
