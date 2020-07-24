import { createUseStyles } from "react-jss";

const COLOR = "green";
const DIAMETER = 20;
const OFFSET_TOP = 65;
const OFFSET_SIDE = 40;

export const useStyles = createUseStyles({
  circle: {
    position: "absolute",
    width: `${DIAMETER}px`,
    height: `${DIAMETER}px`,
    borderRadius: "50%",
  },
  circleLeftInner: {
    left: `${OFFSET_SIDE}px`,
    top: `${OFFSET_TOP + DIAMETER / 2}px`,
    background: `${COLOR}`,
  },
  circleRightInner: {
    top: `${OFFSET_TOP + DIAMETER / 2}px`,
    right: `${OFFSET_SIDE}px`,
    background: `${COLOR}`,
  },
  circleTopInner: {
    top: `${OFFSET_TOP}px`,
    right: `${OFFSET_SIDE + DIAMETER / 2}px`,
    background: `${COLOR}`,
  },
  triangle: {
    position: "absolute",
    top: `${OFFSET_TOP + DIAMETER}px`,
    left: `${OFFSET_SIDE + DIAMETER / 2}px`,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: `0 ${DIAMETER / 2}px ${DIAMETER}px  ${DIAMETER / 2}px`,
    borderColor: `transparent transparent ${COLOR} transparent`,
  },
});
