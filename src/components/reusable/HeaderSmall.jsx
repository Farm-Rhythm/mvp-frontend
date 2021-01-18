import { Link } from "react-router-dom";

import ProfileShortcut from "./ProfileShortcut";
import NotificationShortcut from "./NotificationShortcut";
import Messaging from "./Messaging";
import HeaderSearchBar from "./HeaderSearchBar";

const GENERAL_CONTAINER = {
  root: {
    fontFamily: "Karla-Italic",
  },
};

const DYNAMICS_SUBCONTAINER = {
  bootstrap: "col py-2 px-3 d-flex justify-content-between align-items-center",
};

const HeaderSmall = () => {

  const onSearchPageLocation = window.location.pathname === "/search";

  return (
    <div style={GENERAL_CONTAINER.root}>
      <div className="d-flex flex-column align-items-center">
        <div style={{ backgroundColor: "#FFB800" }} className="p-2 col d-flex">
          <span
            style={{ fontFamily: "Lemonada-Bold", color: "white" }}
            className="mx-3"
            hidden={onSearchPageLocation}
          >
            Farm Rhythm
          </span>

          <HeaderSearchBar onSearchPageLocationSmall={onSearchPageLocation} />
        </div>

        <div
          style={{ backgroundColor: "#0DA735" }}
          className={DYNAMICS_SUBCONTAINER.bootstrap}
        >
          <Link
            to="/"
            className="d-flex mr-3"
            style={{ position: "relative", width: "2.4em" }}
          >
            {/* Home link */}
            <img src="assets/images/home.png" alt="home" width="100%" />
          </Link>

          <NotificationShortcut />

          <Messaging />

          <ProfileShortcut />
        </div>
      </div>
    </div>
  );
};

export default HeaderSmall;
