import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { withNamespaces } from "react-i18next";
import LanguageSwitch from "../components/reusable/LanguageSwitch";
import SignForms from "../components/reusable/SignForms";

const useStyles = makeStyles({
  bgDesign: {
    width: "100%",
    minHeight: "100vh",
    height: "100%",
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
      width: "100%",
      minHeight: "100vh",
      height: "100%",
      background:
        "url('assets/images/farms-illustration-sign.png') no-repeat left center/ 100% auto",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "800px",
    height: "600px",
    padding: "10px 50px",
    backgroundColor: "white",
    borderRadius: "50px 200px 50px 50px",
    "@media (max-width: 700px)": {
      borderRadius: "50px",
    },
    "& *": {
      zIndex: "3",
      fontFamily: "Karla-Regular",
    },
  },
  socialMedia: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    margin: "0 1em 1em",
  },
});

const Sign = ({ t }) => {
  const classes = useStyles();

  return (
    <div className={classes.bgDesign}>
      <div className={classes.content}>
        {/* 1st div */}

        <div className="text-secondary">
          <span className="border-bottom pb-1 mr-3">
            <LanguageSwitch />
          </span>
          <span>
            <FontAwesomeIcon icon={faMobileAlt} /> <span>App</span>
          </span>
        </div>

        {/* 2nd div */}
        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-center align-items-sm-start my-4 border-bottom">
            <img src="assets/images/logo.png" alt="logo" width="150px" />
            <span
              style={{ fontFamily: "Karla-Italic" }}
              className="text-secondary font-weight-bolder mt-3"
            >
              Welcome to the farm workplace
            </span>
          </div>
          <Divider
            orientation="vertical"
            flexItem
            className="mx-3 d-none d-sm-block"
          />

          <SignForms />
        </div>

        {/* 3rd div */}
        <div className="d-flex flex-column align-items-center">
          <span className="col-10 text-center small">
            By creating an account, you agree to the terms of use and Privacy
            Policy of Farm Rhythm.
          </span>
          <span className="h5 my-3">Quick access with</span>
          <div className="d-flex">
            <ButtonBase className={classes.socialMedia}>
              <img
                src="assets/images/google-icon.png"
                alt="google-icon"
                width="100%"
              />
            </ButtonBase>
            <ButtonBase className={classes.socialMedia}>
              <img
                src="assets/images/facebook-icon.png"
                alt="facebook-icon"
                width="100%"
              />
            </ButtonBase>
            <ButtonBase className={classes.socialMedia}>
              <img
                src="assets/images/linkedin-icon.png"
                alt="linkedin-icon"
                width="100%"
              />
            </ButtonBase>
            <ButtonBase className={classes.socialMedia}>
              <img
                src="assets/images/twitter-icon.png"
                alt="twitter-icon"
                width="100%"
              />
            </ButtonBase>
          </div>
          <small>Farm Rhythm © copyright 2020</small>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Sign);
