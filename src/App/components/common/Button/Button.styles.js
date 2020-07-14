import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  btn: {
    width: "200px",
    height: "50px",
    borderRadius: "5px",
    border: "none",
    outline: 0,
    background: "linear-gradient(90deg, #fcff9e 0%, #c67700 100%)",
    "&:hover": {
      boxShadow: "2px 2px 4px gold",
    },
  },
});
