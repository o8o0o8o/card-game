import { createUseStyles } from "react-jss";

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
    transform: "scale(1)",
    margin: 10,
  },
  player: {},
  playerHand: {
    position: "relative",
    top: "2rem",
  },
  dealer: {
    position: "relative",
    left: "20%",
  },
  dealerHand: {
    position: "relative",
    top: "2rem",
  },
  mainContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "scale(1)",
  },
  buttonsContainer: {
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
    top: "100px",
    left: "-200px",
  },
  footer: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  "@media (max-width: 550px)": {
    background: {
      transform: "scale(1)",
    },
    mainContainer: {
      position: "relative",
      left: "120px",
      transform: "scale(0.7)",
    },
    cardsRow: {
      transform: "scale(0.7)",
    },
    buttonsContainer: {
      marginLeft: "0",
    },
  },
  "@keyframes pulse": {
    from: { transform: "scale(1)" },
    to: { transform: "scale(1.1)" },
  },
  pulser: {
    animation: "$pulse 1s infinite",
    "&:hover": {
      animation: "none",
    },
  },
  scorePlate: {
    fontWeight: 600,
    display: "inline-block",
    border: "3px solid black",
    backgroundColor: "lightgray",
    padding: 3,
  },
  money: {
    fontWeight: 600,
    fontSize: 24,
    textShadow: "2px 2px 2px white",
  },
});
