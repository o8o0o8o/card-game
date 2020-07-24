import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import {
  cardReducer,
  playerHandReducer,
  dealerHandReducer,
  blackJackStateReducer,
  blackJackPlayerScoreReducer,
  blackJackPlayerMoneyReducer,
  blackJackPlayerBetReducer,
  blackJackDealerScoreReducer,
  blackJackGameModeReducer,
  blackJackGameResultReducer,
} from "./reducers";
import { errorsReducer } from "../components/common/errors/store/Errors.reducer";

const rootReducer = combineReducers({
  deck: cardReducer,
  playerHand: playerHandReducer,
  dealerHand: dealerHandReducer,
  blackJack: combineReducers({
    state: blackJackStateReducer,
    playerScore: blackJackPlayerScoreReducer,
    dealerScore: blackJackDealerScoreReducer,
    playerMoney: blackJackPlayerMoneyReducer,
    playerBet: blackJackPlayerBetReducer,
    gameIsOn: blackJackGameModeReducer,
    lastGameResult: blackJackGameResultReducer,
  }),
  errors: errorsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);
