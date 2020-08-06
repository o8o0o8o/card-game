import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  "@keyframes spin": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
  "@keyframes moveLeftToRight": {
    "0%": { right: "100vw" },
    "100%": { right: 0 },
  },
  flyAnimate: {
    position: "absolute",
    animation: "$spin 1s linear 1, $moveLeftToRight 1s linear 1",
  },
});
