import { Link } from "react-router-dom";

import ProfileShortcut from "./ProfileShortcut";
import NotificationShortcut from "./NotificationShortcut";
import Messaging from "./Messaging";
import HeaderSearchBar from "./HeaderSearchBar";

const GENERAL_CONTAINER = {
  root: {
    background:
      "linear-gradient(180deg, #FFB800 48.96%, rgba(255, 255, 255, 0) 48.97%), #0DA735",
    fontFamily: "Karla-Italic",
    paddingTop: "0.5em",
    paddingBottom: "0.5em",
  },
  bootstrap: "d-flex align-items-center px-md-5 px-3 col",
};

const DYNAMICS_CONTAINER = {
  bootstrap:
    "col px-3 px-md-0 d-flex flex-column justify-content-between flex-md-row align-items-center align-items-sm-end align-items-md-center",
};

const DYNAMICS_SUBCONTAINER = {
  bootstrap: "d-flex align-items-center col col-md-auto px-2 px-md-0",
};

const HeaderGreat = () => {
  return (
    <div style={GENERAL_CONTAINER.root} className={GENERAL_CONTAINER.bootstrap}>
      <Link to="/" className="mt-n1 d-inline">
        <img src="assets/images/logo.png" alt="logo" height="61em" />
      </Link>
      <div className={DYNAMICS_CONTAINER.bootstrap}>
        <HeaderSearchBar />

        <div className={DYNAMICS_SUBCONTAINER.bootstrap}>
          <NotificationShortcut />

          <Messaging />

          <ProfileShortcut />
        </div>
      </div>
    </div>
  );
};

export default HeaderGreat;
