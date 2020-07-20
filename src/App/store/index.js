import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { cardReducer, playerHandReducer } from "./reducers";

const rootReducer = combineReducers({
  deck: cardReducer,
  playerHand: playerHandReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);
