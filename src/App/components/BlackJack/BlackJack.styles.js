import { createUseStyles } from "react-jss";

const WIDTH_PLAYERS = "calc(100vw/2 - 100vw/10)";
const SCORE_PLATE_SIZE = "2em";

export const useStyles = createUseStyles({
  background: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "gray",
    zIndex: "-1",
  },
  cardsRow: {
    position: "relative",
    top: "-90%",
    display: "flex",
    justifyContent: "center",
  },
  player: {},
  playerHand: {
    position: "relative",
    top: "2rem",
    width: WIDTH_PLAYERS,
  },
  dealer: {
    position: "relative",
  },
  dealerHand: {
    position: "relative",
    top: "2rem",
    width: WIDTH_PLAYERS,
  },
  mainContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    position: "relative",
    top: 40,
    width: "300px",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "100px",
  },
  buttonsSplit: {
    width: "300px",
    display: "flex",
    justifyContent: "space-between",
  },
  chipHolder: {
    position: "relative",
    left: "-300px",
  },
  moneyContainer: {
    position: "relative",
    top: 100,
    display: "flex",
    justifyContent: "center",
  },
  footer: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  scorePlate: {
    position: "relative",
    top: 230,
    left: `calc((100vw/2 - 100vw/10) / 2 - ${SCORE_PLATE_SIZE})`,
    fontWeight: 600,
    display: "inline-block",
    border: "3px solid black",
    backgroundColor: "lightgray",
    padding: 3,
    borderRadius: "50%",
    width: SCORE_PLATE_SIZE,
    height: SCORE_PLATE_SIZE,
    textAlign: "center",
  },
  money: {
    fontWeight: 600,
    fontSize: 24,
    textShadow: "2px 2px 2px white",
  },
  "@media (max-width: 600px)": {
    cardsRow: {
      transform: "scale(0.8)",
      justifyContent: "space-around",
    },
    moneyContainer: {
      transform: "scale(0.8)",
      left: "-50px",
      justifyContent: "space-around",
    },
    buttonsContainer: {
      transform: "scale(0.8)",
    },
    chipHolder: {
      left: "-300px",
    },
  },
  "@media (max-width: 500px)": {
    cardsRow: {
      transform: "scale(0.6)",
      justifyContent: "space-around",
    },
    moneyContainer: {
      position: "relative",
      left: "-100px",
      transform: "scale(0.6)",
      justifyContent: "space-around",
    },
    buttonsContainer: {
      transform: "scale(0.6)",
    },
  },
});
