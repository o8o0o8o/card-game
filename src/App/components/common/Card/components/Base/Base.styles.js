import { createUseStyles } from "react-jss";

const WIDTH = 120;
const HEIGHT = 180;

export const useStyles = createUseStyles({
  base: {
    position: "absolute",
    top: 0,
    width: WIDTH,
    height: HEIGHT,
    borderRadius: "15%",
    background: "white",
    border: "1px solid black",
  },
});
