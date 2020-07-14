import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import { cardReducer } from "./reducers";

const rootReducer = combineReducers({ card: cardReducer });

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);
