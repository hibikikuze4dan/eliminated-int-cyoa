import { makeStyles } from "@material-ui/core/styles";

const appStyles = makeStyles({
  div: {
    backgroundColor: "#ECD078",
    textAlign: "center",
    height: "fit-content",
    minHeight: window.innerHeight,
  },
});

const applicationBarStyles = makeStyles({
  appBar: {
    backgroundColor: "#D95B43",
  },
  breakdownButton: {
    color: "white",
    fontWeight: "bold",
  },
  iconButton: {
    padding: "16px 16px 16px 0",
    "&:hover": {
      backgroundColor: "unset",
    },
  },
});

const dialogStyles = makeStyles({
  dialog: {
    backgroundColor: "#ECD078",
  },
});

const gridWrapperStyles = makeStyles({
  grid: {
    padding: "16px",
    backgroundColor: "#ECD078",
    height: "min-heeight",
  },
});

const cardStyles = makeStyles({
  button: {
    textTransform: "none",
    alignItems: "baseline",
  },
  label: {
    height: "100%",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  description: {
    fontSize: "1rem",
  },
  paper: {
    alignItems: "baseline",
  },
});

const openerStyles = makeStyles({
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  description: {
    paddingBottom: "16px",
  },
});

const drawerStyles = makeStyles({
  drawer: {
    backgroundColor: "#ECD078",
  },
  selectedButton: {
    backgroundColor: "#D95B43",
  },
});

export default {
  applicationBarStyles,
  appStyles,
  dialogStyles,
  gridWrapperStyles,
  cardStyles,
  openerStyles,
  drawerStyles,
};
