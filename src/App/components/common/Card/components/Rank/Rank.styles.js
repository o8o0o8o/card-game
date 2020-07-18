import { createUseStyles } from "react-jss";

const CARD_HEIGHT = 180;
const CARD_WEIGHT = 120;
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
    top: CARD_HEIGHT - 1.5 * FONT_SIZE,
    left: CARD_WEIGHT - FONT_SIZE,
    transform: "rotate(180deg)",
  },
});
