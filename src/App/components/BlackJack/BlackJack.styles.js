import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  background: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "gray",
    zIndex: "-1",
    overflow: "hidden",
  },
  playerHand: {
    position: "relative",
    top: 100,
  },
  dealerHand: {
    position: "relative",
    top: 100,
    left: "50vw",
  },
  chipHolder: {
    position: "relative",
    top: 400,
  },
  buttonsContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsSplit: {
    width: "500px",
    display: "flex",
    justifyContent: "space-between",
  },
  footer: {
    position: "absolute",
    bottom: 10,
  },
});
