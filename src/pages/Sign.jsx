import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { withNamespaces } from "react-i18next";
import Contracts from "../components/reusable/Contracts";
import LanguageSwitch from "../components/reusable/LanguageSwitch";
import SignFormTabs from "../components/signView/SignFormTabs";

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
      minHeight: "600px",
      height: "auto",
      width: "100%",
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
  brandMessage: {
    fontFamily: "Karla-Italic",
    fontSize: "14px",
    maxWidth: "230px",
    fontWeight: "600",
    "@media (max-width: 575.98px)": {
      textAlign: 'center',
      maxWidth: '100%',
    }
  },
});

const Sign = ({ t }) => {
  const classes = useStyles();

  return (
    <div className={classes.bgDesign}>
      <div className={`${classes.content} border`}>
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
            <span className={`${classes.brandMessage} text-secondary mt-3`}>
              {t("Welcome to the farmers' workspace")}
            </span>
          </div>
          <Divider
            orientation="vertical"
            flexItem
            className="mx-3 d-none d-sm-block"
          />

          <SignFormTabs />
        </div>

        {/* 3rd div */}
        <div className="d-flex flex-column align-items-center">
          <span className="col-sm-10 text-center small mt-4 mt-sm-0">
            <Contracts onSentence />
          </span>
          <span className="h5 my-3">{t("Quick access with")}</span>
          <div className="d-flex flex-wrap flex-sm-nowrap justify-content-center">
            <Link className={classes.socialMedia} role="button">
              <img
                src="assets/images/google-icon.png"
                alt="google-icon"
                width="100%"
              />
            </Link>
            <Link className={classes.socialMedia} role="button">
              <img
                src="assets/images/facebook-icon.png"
                alt="facebook-icon"
                width="100%"
              />
            </Link>
            <Link className={classes.socialMedia} role="button">
              <img
                src="assets/images/linkedin-icon.png"
                alt="linkedin-icon"
                width="100%"
              />
            </Link>
            <Link className={classes.socialMedia} role="button">
              <img
                src="assets/images/twitter-icon.png"
                alt="twitter-icon"
                width="100%"
              />
            </Link>
          </div>
          <small>Farm Rhythm © copyright 2020</small>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Sign);
