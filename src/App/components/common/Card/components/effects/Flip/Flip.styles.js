import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  flipCard: {
    backgroundColor: "transparent",
    width: "120px",
    height: "180px",
    perspective: "1000px",
    "&:hover": {
      "& $flipCardInner": {
        transform: "rotateY(180deg)",
      },
    },
  },
  flipCardInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    borderRadius: "15%",
    boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
  },
  "$flipCardFront, $flipCardBack": {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
  },

  flipCardFront: {
    color: "black",
  },
  flipCardBack: {
    transform: "rotateY(180deg)",
  },
});
