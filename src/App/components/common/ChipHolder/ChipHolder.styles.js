import { createUseStyles } from "react-jss";

const DIAMETER = 80;

export const useStyles = createUseStyles({
  chip1: {
    position: "absolute",
  },
  chip2: {
    position: "absolute",
    top: DIAMETER,
  },
  chip5: {
    position: "absolute",
    left: DIAMETER,
  },
  chip10: {
    position: "absolute",
    top: DIAMETER,
    left: DIAMETER,
  },
});
