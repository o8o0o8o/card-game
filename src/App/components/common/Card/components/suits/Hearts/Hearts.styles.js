import { createUseStyles } from "react-jss";

const COLOR = "crimson";
const DIAMETER = 20;
const OFFSET_TOP = 60;
const OFFSET_SIDE = 40;
const BACKGROUND = "white";

export const useStyles = createUseStyles({
  circle: {
    position: "absolute",
    width: `${DIAMETER}px`,
    height: `${DIAMETER}px`,
    borderRadius: "50%",
  },
  circleLeftInner: {
    left: `${OFFSET_SIDE}px`,
    top: `${OFFSET_TOP}px`,
    background: `${COLOR}`,
  },
  circleRightInner: {
    top: `${OFFSET_TOP}px`,
    right: `${OFFSET_SIDE}px`,
    background: `${COLOR}`,
  },
  triangle: {
    position: "absolute",
    top: `${OFFSET_TOP + DIAMETER / 2}px`,
    left: `${OFFSET_SIDE}px`,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: `${DIAMETER}px  ${DIAMETER}px 0 ${DIAMETER}px `,
    borderColor: `${COLOR} transparent transparent transparent`,
  },
  circleLeftOuter: {
    left: `${OFFSET_SIDE}px`,
    top: `${OFFSET_TOP + DIAMETER}px`,
    background: BACKGROUND,
  },
  circleRightOuter: {
    right: `${OFFSET_SIDE}px`,
    top: `${OFFSET_TOP + DIAMETER}px`,
    background: BACKGROUND,
  },
});
