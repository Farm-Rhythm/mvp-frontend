import { Link } from "react-router-dom";

import { ButtonBase, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { withNamespaces } from "react-i18next";
import ProfileShortcut from "./ProfileShortcut";


const style = makeStyles({
  unreadBadge: {
    color: "#D2BF0E",
    backgroundColor: "white",
    position: "absolute",
    fontFamily: "Lemonada-Bold",
    fontSize: "11px",
    right: "-25%",
    top: -5,
    width: "22px",
    height: "22px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const GENERAL_CONTAINER = {
  root: {
    background:
      "linear-gradient(180deg, #FFB800 48.96%, rgba(255, 255, 255, 0) 48.97%), #0DA735",
    fontFamily: "Karla-Italic"
  },
  bootstrap: "d-flex align-items-center py-3 px-md-5 px-3 sticky-top border-bottom"
};

const DYNAMICS_CONTAINER = {
  bootstrap:
    "col px-0 px-sm-3 px-md-0 d-flex flex-column flex-md-row align-items-center align-items-sm-end align-items-md-center",
};

const SEARCHBAR = {
  root: {
    borderRadius: "15px",
    border: "3px solid #D2BF0E",
    backgroundColor: "white",
    color: "#D2BF0E",
    display: "flex",
    alignItems: "center",
  },
};

const DYNAMICS_SUBCONTAINER = {
  bootstrap:
    "col col-md-auto text-right px-0 px-sm-2 px-md-0 d-flex d-sm-block justify-content-between align-items-end",
};


const Header = ({t}) => {
  const classes = style();
  return (
    <div style={GENERAL_CONTAINER.root} className={GENERAL_CONTAINER.bootstrap}>
      <Link to="/" className="mt-n2 d-none d-sm-inline">
        <img src="assets/images/logo.png" alt="logo" height="85em" />
      </Link>
      <div className={DYNAMICS_CONTAINER.bootstrap}>
        <span
          style={{ fontFamily: "Lemonada-Bold", color: "white" }}
          className="col d-sm-none"
        >
          Farm Rhythm
        </span>
        <form style={SEARCHBAR.root} className="col my-2 mx-2 mx-lg-5">
          <FontAwesomeIcon icon={faSearch} color="inherit" className="mx-2" />
          <InputBase
            placeholder={`${t("common.search")}...`}
            fullWidth
            style={{ color: "#D2BF0E" }}
          />
        </form>

        <div className={DYNAMICS_SUBCONTAINER.bootstrap}>
          <Link
            to="/"
            className="d-flex d-sm-none mr-3"
            style={{ position: "relative", width: "35px" }}
          >
            {/* Home link */}
            <img src="assets/images/home.png" alt="home" width="100%" />
          </Link>

          <ButtonBase
            style={{ position: "relative", width: "35px" }}
            className="mx-3"
          >
            {/* Notifications */}
            <img src="assets/images/bell.png" alt="bell" width="100%" />
            <div className={classes.unreadBadge}>
              <span>1</span>
            </div>
          </ButtonBase>

          <ButtonBase
            style={{ position: "relative", width: "35px" }}
            className="mx-3"
          >
            {/* messageBox */}
            <img
              src="assets/images/messageBox.png"
              alt="messageBox"
              width="100%"
            />
            <div className={classes.unreadBadge}>
              <span>+9</span>
            </div>
          </ButtonBase>

          <ProfileShortcut />
          
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Header);
