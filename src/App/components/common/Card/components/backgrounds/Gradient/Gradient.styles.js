import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  gradient: {
    position: "relative",
    top: "10px",
    left: "10px",
    height: "160px",
    width: "100px",
    borderRadius: "15%",
    background:
      "radial-gradient(ellipse at top, blue, transparent), radial-gradient(ellipse at bottom, crimson, transparent), radial-gradient(circle at left, green, yellow)",
  },
});
