import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/core/styles";

import { withNamespaces } from "react-i18next";
import LanguageSwitch from "../components/reusable/LanguageSwitch";
import SignForms from "../components/reusable/SignForms";

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
    "& *": {
      zIndex: "3",
    },
  },
});

const Sign = ({ t }) => {
  const classes = useStyles();

  return (
    <div className={classes.bgDesign}>
      <div className={classes.content}>
        {/* 1st div */}

        <div>
          <LanguageSwitch />
          <span>
            <FontAwesomeIcon icon={faMobile} /> <span>App</span>
          </span>
        </div>

        {/* 2nd div */}
        <div>
          <div>
            <img src="assets/images/logo.png" alt="logo" width="60px" />
            <span>Welcome to the farm workplace</span>
          </div>
          <SignForms />
        </div>

        {/* 3rd div */}
        <div className="d-flex flex-column">
          <span>
            By creating an account, you agree to the terms of use and Privacy
            Policy of Farm Rhythm.
          </span>
          <span>Quick access with</span>
          <span>
            <i>LOGOS</i>
          </span>
          <span>Farm Rhythm © copyright 2020</span>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Sign);
