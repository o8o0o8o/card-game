import { createAction } from "./createAction";

export const resetDeck = createAction("[Card] Reset deck");
export const getACard = createAction("[Card] Get a card");
export const addPlayerHand = createAction(
  "[PlayerHand] Add a card to PlayerHand"
);
export const resetPlayerHand = createAction(
  "[PlayerHand] Reset a card to PlayerHand"
);
export const addDealerHand = createAction(
  "[DealerHand] Add a card to DealerHand"
);
export const resetDealerHand = createAction(
  "[DealerHand] Reset a card to DealerHand"
);
export const setBlackJackState = createAction("[BlackJack] Set game state");
export const setBlackJackPlayerScore = createAction(
  "[BlackJack] Set blackJack player score"
);
export const setBlackJackDealerScore = createAction(
  "[BlackJack] Set blackJack dealer score"
);
export const addBlackJackPlayerMoney = createAction(
  "[BlackJack] Add blackJack player money"
);
export const subtractBlackJackPlayerMoney = createAction(
  "[BlackJack] Subtract blackJack player money"
);
export const setBlackJackPlayerBet = createAction(
  "[BlackJack] Set blackJack player bet"
);
export const setBlackJackGameMode = createAction(
  "[BlackJack] Set blackJack game mode"
);
export const setBlackJackGameResult = createAction(
  "[BlackJack] Set blackJack game result"
);
