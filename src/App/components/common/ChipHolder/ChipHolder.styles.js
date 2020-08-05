import { createUseStyles } from "react-jss";

const DIAMETER = 80;

export const useStyles = createUseStyles({
  mainContainer: {
    userSelect: "none",
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
  chip: {
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  chip1: {
    position: "absolute",
  },
  chip2: {
    position: "absolute",
    top: 1.5 * DIAMETER,
  },
  chip5: {
    position: "absolute",
    left: 1.5 * DIAMETER,
  },
  chip10: {
    position: "absolute",
    top: 1.5 * DIAMETER,
    left: 1.5 * DIAMETER,
  },
  playerBet: {
    position: "relative",
    right: 200,
  },
  playerBetAnimate: {
    animation: "$spin 1s linear 1, $moveToStack 1s linear 1",
  },
  "@keyframes moveToStack": {
    "0%": { left: -200 },
    "100%": { left: 0 },
  },
});
