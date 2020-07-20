import { createAction } from "./createAction";

export const getACard = createAction("[Card] Get a card");
export const addPlayerHand = createAction(
  "[PlayerHand] Add a card to PlayerHand"
);
export const resetDeck = createAction("[Card] Reset deck");
