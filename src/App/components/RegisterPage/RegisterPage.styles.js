import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  wrapper: {
    position: "absolute",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "600px",
    height: "400px",
    background: "linear-gradient(90deg, #fffff5 0%, #fafae6 100%)",
    padding: "10px",
    borderRadius: "15px",
    boxShadow: "1px 1px 5px gold",
  },
});
