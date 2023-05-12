import { makeStyles } from "@material-ui/core/styles";
import { Autocomplete } from "@material-ui/lab";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    background: "linear-gradient(45deg, #D9D9D9 30%, #E6E6E6 90%)",
  },
  media: {
    height: 0,
    paddingTop: "100%",
    "&:hover": {
      backgroundColor: "#2a344a",
      boxShadow: "none",
    },
  },
  cardActions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    background: "#1C2331",
    color: "white",
    width: "100%",
    height: "50px",

    "&:hover": {
      backgroundColor: "#2a344a",
      boxShadow: "none",
    },
  },
}));
