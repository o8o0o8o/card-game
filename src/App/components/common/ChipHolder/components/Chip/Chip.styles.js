import { createUseStyles } from "react-jss";

const DIAMETER = 80;
const OFFSET = 10;
const INNER = "white";

export const useStyles = createUseStyles({
  outerCircle: {
    position: "absolute",
    height: DIAMETER,
    width: DIAMETER,
    borderRadius: "50%",
    border: "1px solid black",
  },
  innerCircle: {
    position: "absolute",
    top: OFFSET,
    left: OFFSET,
    height: `${DIAMETER - 2 * OFFSET}px`,
    width: `${DIAMETER - 2 * OFFSET}px`,
    borderRadius: "50%",
    border: "1px solid black",
    background: INNER,
  },
  line1: {
    position: "absolute",
    top: DIAMETER / 2,
    width: DIAMETER,
    height: 1,
    background: INNER,
    border: "1px solid black",
  },
  line2: {
    position: "absolute",
    top: 0,
    left: DIAMETER / 2,
    width: 1,
    height: DIAMETER,
    background: INNER,
    border: "1px solid black",
  },
  line3: {
    position: "absolute",
    top: 0,
    left: DIAMETER / 2,
    width: 1,
    height: DIAMETER,
    background: INNER,
    transform: "rotate(45deg)",
    border: "1px solid black",
  },
  line4: {
    position: "absolute",
    top: DIAMETER / 2,
    width: DIAMETER,
    height: 1,
    background: INNER,
    border: "1px solid black",
    transform: "rotate(45deg)",
  },
  value: {
    display: "flex",
    fontSize: 20,
    position: "absolute",
    top: OFFSET,
    left: OFFSET,
    width: DIAMETER - 2 * OFFSET,
    height: DIAMETER - 2 * OFFSET,
    justifyContent: "center",
    alignItems: "center",
  },
  red: {
    background: "red",
  },
  green: {
    background: "green",
  },
  blue: {
    background: "blue",
  },
  gray: {
    background: "gray",
  },
});
