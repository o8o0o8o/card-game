import { createUseStyles } from "react-jss";

const COLOR = "blue";
const DIAMETER = 20;
const OFFSET_TOP = 65;
const OFFSET_SIDE = 40;

export const useStyles = createUseStyles({
  triangleTop: {
    position: "absolute",
    top: `${OFFSET_TOP}px`,
    left: `${OFFSET_SIDE}px`,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: `0 ${DIAMETER}px ${DIAMETER}px  ${DIAMETER}px`,
    borderColor: `transparent transparent ${COLOR} transparent`,
  },
  triangleBottom: {
    position: "absolute",
    top: `${OFFSET_TOP + DIAMETER}px`,
    left: `${OFFSET_SIDE}px`,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: `${DIAMETER}px  ${DIAMETER}px 0 ${DIAMETER}px `,
    borderColor: `${COLOR} transparent transparent transparent`,
  },
});
