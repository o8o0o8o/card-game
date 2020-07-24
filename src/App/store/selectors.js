export const deckSelector = ({ deck }) => deck;
export const playerHandSelector = ({ playerHand }) => playerHand;
export const dealerHandSelector = ({ dealerHand }) => dealerHand;
export const blackJackStateSelector = ({ blackJack: { state } }) => state;
export const blackJackPlayerScoreSelector = ({ blackJack: { playerScore } }) =>
  playerScore;
export const blackJackDealerScoreSelector = ({ blackJack: { dealerScore } }) =>
  dealerScore;
export const blackJackPlayerMoneySelector = ({ blackJack: { playerMoney } }) =>
  playerMoney;
export const blackJackPlayerBetSelector = ({ blackJack: { playerBet } }) =>
  playerBet;
export const backOfCardSelector = ({ card: { backOfCard } }) => backOfCard;
export const suitOfCardSelector = ({ card: { suitOfCard } }) => suitOfCard;
export const blackJackGameModeSelector = ({ blackJack: { gameIsOn } }) =>
  gameIsOn;
export const blackJackGameResultSelector = ({
  blackJack: { lastGameResult },
}) => lastGameResult;
