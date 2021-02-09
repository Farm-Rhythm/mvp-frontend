import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import { ButtonBase, Link, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faUserCircle,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

import { withNamespaces } from "react-i18next";

const useStyles = makeStyles({
  root: {
    border: "2px solid white",
    padding: "0.1em",
    background:
      "linear-gradient(90deg, rgba(210, 191, 14, 0.9) 29.69%, rgba(210, 191, 14, 0.553333) 65.1%, rgba(210, 191, 14, 0.1) 100%)",
    "@media(max-width: 575.98px)": {
      padding: "0px",
    },
  },
});

const ProfileShortcut = ({ t }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth < 576.98) {
        setAnchorEl(null);
      }
    };
  });

  return (
    <span className="ml-3 d-block p-0">
      <ButtonBase
        className={`${classes.root} rounded-pill text-white d-none d-sm-inline-flex`}
        onClick={(event) => setAnchorEl(event.currentTarget)}
        aria-controls="profile-shorcut"
        aria-haspopup="true"
      >
        
        <img
          src="assets/images/defaultProfilePic.png"
          alt="defaultProfilePic"
          className="rounded-circle mx-2"
          style={{ border: "2px solid white", width: "2em" }}
        />
        <FontAwesomeIcon icon={faCaretDown} size="2x" className="mx-2" />
      </ButtonBase>

      <Menu
        id="profile-shorcut"
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        style={{ maxHeight: "600px" }}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem
          style={{ fontFamily: "Karla-Italic" }}
          className="border-bottom"
          component={RouterLink}
          to="/profile"
        >
          <FontAwesomeIcon icon={faUserCircle} size="lg" />
          <span className="d-flex flex-column ml-3">
            <span className="font-weight-bolder">ARMANDINE pepapig</span>
            <span className="mt-n1 text-secondary text-capitalize small">
              {t("common.farmer")}
            </span>
          </span>
        </MenuItem>

        <MenuItem
          style={{ fontFamily: "Karla-Italic", maxWidth: "280px" }}
          className="text-danger"
        >
          <FontAwesomeIcon icon={faPowerOff} size="lg" />
          <span className="ml-3 font-weight-bolder">
            {" "}
            {t("common.logOut")}{" "}
          </span>
        </MenuItem>
      </Menu>

      <Link
        className={`${classes.root} rounded-pill text-white d-inline-block d-sm-none`}
        component={RouterLink}
        to="/profile"
      >
        <img
          src="assets/images/defaultProfilePic.png"
          alt="defaultProfilePic"
          className="rounded-circle mx-2"
          style={{ border: "2px solid white", width: "1.9em" }}
        />
      </Link>
    </span>
  );
};

export default withNamespaces()(ProfileShortcut);
