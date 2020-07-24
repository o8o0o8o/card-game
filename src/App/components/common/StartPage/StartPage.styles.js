import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  btn: {
    width: "80px",
    height: "30px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    cursor: "pointer",
    textAlign: "center",
    border: "none",
    backgroundSize: "300% 100%",
    borderRadius: "50px",
    mozTransition: "all .4s ease-in-out",
    "-o-transition": "all .4s ease-in-out",
    "-webkit-transition": "all .4s ease-in-out",
    transition: "all .4s ease-in-out",
    backgroundImage:
      "linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376)",
    boxShadow: "0 4px 15px 0 rgba(45, 54, 65, 0.75)",
    "&:hover": {
      backgroundPosition: "100% 0",
      mozTransition: "all .4s ease-in-out",
      "-o-transition": "all .4s ease-in-out",
      "-webkit-transition": "all .4s ease-in-out",
      transition: "all .4s ease-in-out",
    },
    "&:focus": {
      outline: "none",
    },
  },
});
