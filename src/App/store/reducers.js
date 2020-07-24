import {
  getACard,
  resetDeck,
  addPlayerHand,
  addDealerHand,
  subtractBlackJackPlayerMoney,
  addBlackJackPlayerMoney,
  setBlackJackPlayerBet,
  setBlackJackPlayerScore,
  setBlackJackDealerScore,
  resetPlayerHand,
  resetDealerHand,
  setBlackJackGameMode,
  setBlackJackState,
  setBlackJackGameResult,
} from "./actions";

function deckInit() {
  let deck = [];
  for (let i = 2; i <= 10; i++) {
    deck.push(`diamonds_${i}`);
    deck.push(`spades_${i}`);
    deck.push(`hearts_${i}`);
    deck.push(`clubs_${i}`);
  }
  let arr = ["A", "Q", "K", "J"];
  for (let i = 0; i < arr.length; i++) {
    deck.push(`diamonds_${arr[i]}`);
    deck.push(`spades_${arr[i]}`);
    deck.push(`hearts_${arr[i]}`);
    deck.push(`clubs_${arr[i]}`);
  }
  return deck;
}

export const cardReducer = (state = deckInit(), action) => {
  switch (action.type) {
    case getACard.type:
      state.splice(state.indexOf(action.payload), 1);
      return state;
    case resetDeck.type:
      return deckInit();
    default:
      return state;
  }
};

export const playerHandReducer = (state = [], action) => {
  switch (action.type) {
    case addPlayerHand.type:
      return [...state, action.payload];
    case resetPlayerHand.type:
      return [];
    default:
      return state;
  }
};

export const dealerHandReducer = (state = [], action) => {
  switch (action.type) {
    case addDealerHand.type:
      return [...state, action.payload];
    case resetDealerHand.type:
      return [];
    default:
      return state;
  }
};

export const blackJackStateReducer = (state = false, action) => {
  switch (action.type) {
    case setBlackJackState.type:
      return action.payload;
    default:
      return state;
  }
};

export const blackJackPlayerScoreReducer = (state = 0, action) => {
  switch (action.type) {
    case setBlackJackPlayerScore.type:
      return state + 1;
    default:
      return state;
  }
};

export const blackJackDealerScoreReducer = (state = 0, action) => {
  switch (action.type) {
    case setBlackJackDealerScore.type:
      return state + 1;
    default:
      return state;
  }
};

export const blackJackPlayerMoneyReducer = (state = 2500, action) => {
  switch (action.type) {
    case subtractBlackJackPlayerMoney.type:
      return state - action.payload;
    case addBlackJackPlayerMoney.type:
      return state + action.payload;
    default:
      return state;
  }
};

export const blackJackPlayerBetReducer = (state = 0, action) => {
  switch (action.type) {
    case setBlackJackPlayerBet.type:
      return action.payload;
    default:
      return state;
  }
};

export const blackJackGameModeReducer = (state = false, action) => {
  switch (action.type) {
    case setBlackJackGameMode.type:
      return action.payload;
    default:
      return state;
  }
};

export const blackJackGameResultReducer = (state = null, action) => {
  switch (action.type) {
    case setBlackJackGameResult.type:
      return action.payload;
    default:
      return state;
  }
};
