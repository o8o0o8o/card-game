import { setBackOfCard, setSuitOfCard } from "./actions";

const DEFAULT_STATE = { backOfCard: "gradient" };

export const cardReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case setBackOfCard.type:
      return action.payload;
    case setSuitOfCard.type:
      return action.payload;
    default:
      return state;
  }
};
