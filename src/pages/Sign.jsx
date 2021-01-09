import { makeStyles } from "@material-ui/core";
import { withNamespaces } from "react-i18next";

const useStyles = makeStyles({
  bgDesign: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(90deg, #FFB800 50%, rgba(255, 255, 255, 0) 50%), #0DA735",
    "&::before": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100vw",
      height: "100vh",
      background:
        "url('assets/images/farms-illustration-sign.png') no-repeat left center/ 100% auto",
    },
  },
  content: {
    width: "800px",
    height: "600px",
    backgroundColor: "white",
    borderRadius: "50px 200px 50px 50px",
    "@media (max-width: 700px)": {
      borderRadius: "50px",
    },
  },
});

const Sign = ({ t }) => {
  const classes = useStyles();

  return (
    <div className={classes.bgDesign}>
      <div className={classes.content}></div>
    </div>
  );
};

export default withNamespaces()(Sign);
