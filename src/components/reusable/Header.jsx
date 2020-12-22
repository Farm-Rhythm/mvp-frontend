import { Link } from "react-router-dom";

import { ButtonBase, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const style = makeStyles({
  badge: {
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

const Header = () => {
  const classes = style();
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #FFB800 48.96%, rgba(255, 255, 255, 0) 48.97%), #0DA735",
        fontFamily: "Karla-Italic",
      }}
      className="d-flex align-items-center py-3 px-md-5 px-3 sticky-top border-bottom"
    >
      <Link to="/" className="mt-n2 d-none d-sm-inline">
        <img src="assets/images/logo.png" alt="logo" height="85em" />
      </Link>
      <div className="col px-0 px-sm-3 px-md-0 d-flex flex-column flex-md-row align-items-center align-items-sm-end align-items-md-center">
        <span
          style={{ fontFamily: "Lemonada-Bold", color: "white" }}
          className="col d-sm-none"
        >
          Farm Rhythm
        </span>
        <form
          style={{
            borderRadius: "15px",
            border: "3px solid #D2BF0E",
            backgroundColor: "white",
            color: "#D2BF0E",
            display: "flex",
            alignItems: "center",
          }}
          className="col my-2 mx-2 mx-lg-5"
        >
          <FontAwesomeIcon icon={faSearch} color="inherit" className="mx-2" />
          <InputBase
            placeholder="search..."
            fullWidth
            style={{ color: "#D2BF0E" }}
          />
        </form>

        <div className="col col-md-auto text-right px-0 px-sm-2 px-md-0 d-flex d-sm-block justify-content-between align-items-end">
          <Link
            to="/"
            className="d-flex d-sm-none mr-3"
            style={{ position: "relative", width: "35px" }}
          >
            <img src="assets/images/home.png" alt="home" width="100%" />
          </Link>

          <ButtonBase
            style={{ position: "relative", width: "35px" }}
            className="mx-3"
          >
            {/* Notifications */}
            <img src="assets/images/bell.png" alt="bell" width="100%" />
            <div hidden className={classes.badge}>
              <span>8</span>
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
            <div className={classes.badge}>
              <span>+9</span>
            </div>
          </ButtonBase>

          <ButtonBase
            className="ml-3 p-sm-1 rounded-pill text-white"
            style={{
              border: "2px solid white",
              background:
                "linear-gradient(90deg, rgba(210, 191, 14, 0.9) 29.69%, rgba(210, 191, 14, 0.553333) 65.1%, rgba(210, 191, 14, 0.1) 100%)",
            }}
          >
            {/* profileShortcut */}
            <img
              src="assets/images/defaultProfilePic.png"
              alt="defaultProfilePic"
              className="rounded-circle mx-2"
              width="35px"
              style={{ border: "2px solid white" }}
            />
            <FontAwesomeIcon
              icon={faCaretDown}
              size="2x"
              className="mx-2 d-none d-sm-inline"
            />
          </ButtonBase>
        </div>
      </div>
    </div>
  );
};

export default Header;
