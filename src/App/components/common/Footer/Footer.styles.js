import { createUseStyles } from "react-jss";

const DIAMETER = 80;

export const useStyles = createUseStyles({
  mainContainer: {
    userSelect: "none",
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
});
