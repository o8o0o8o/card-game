import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  playerHand: {
    width: "30vw",
    display: "flex",
    justifyContent: "space-around",
  },
  "@keyframes spin": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
  "@keyframes moveLeftToRight": {
    "0%": { left: "0" },
    "100%": { left: -200 },
  },
  chipAnimate: {
    animation: "$spin 1s linear 1, $moveLeftToRight 1s linear 1",
  },
});
