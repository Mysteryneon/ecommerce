import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(()=> ({
  mainContent: {
    marginTop: "2%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  alignTextCenter: {
    textAlign: "center"
  },
  formField: {
    marginTop: "10px",
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  }
}))