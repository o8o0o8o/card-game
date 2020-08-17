import { createUseStyles } from "react-jss";

const WIDTH = 120;
const HEIGHT = 180;
const FONT_SIZE = 20;

export const useStyles = createUseStyles({
  general: {
    position: "absolute",
    fontSize: FONT_SIZE,
  },
  upperRank: {
    top: 0,
    left: 10,
  },
  lowerRank: {
    top: HEIGHT - 1.5 * FONT_SIZE,
    left: WIDTH - FONT_SIZE,
    transform: "rotate(180deg)",
  },
});
