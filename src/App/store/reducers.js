import { getACard, resetDeck, addPlayerHand } from "./actions";

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

const DEFAULT_DECK_STATE = deckInit();

export const cardReducer = (state = DEFAULT_DECK_STATE, action) => {
  switch (action.type) {
    case getACard.type:
      state.splice(state.indexOf(action.payload), 1);
      return state;
    case resetDeck.type:
      return state;
    default:
      return state;
  }
};

export const playerHandReducer = (state = [], action) => {
  switch (action.type) {
    case addPlayerHand.type:
      return [...state, action.payload];
    default:
      return state;
  }
};
