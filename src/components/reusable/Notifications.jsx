import { useState } from "react";

import { ButtonBase, Menu } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import NotifsTemplates from "./NotifsTemplates";

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

const notifs = [
  {
    type: "followNewPost",
    unread: true,
    data: {
      followName: "user Top",
      postCategory: 0,
    },
  },
  {
    type: "followNewPost",
    unread: false,
    data: {
      followName: "user Top",
      postCategory: 0,
    },
  },
  {
    type: "followNewPost",
    unread: true,
    data: {
      followName: "user Top",
      postCategory: 0,
    },
  },
];

const Notifications = () => {
  const classes = style();

  const [anchorEl, setAnchorEl] = useState(null);
  const unreadNotifCount = notifs.filter(({ unread }) => unread).length;

  return (
    <span>
      <ButtonBase
        style={{ position: "relative", width: "2.2em" }}
        className="mx-3"
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        {/* Notifications */}
        <img src="assets/images/bell.png" alt="bell" width="100%" />
        <div hidden={unreadNotifCount === 0} className={classes.unreadBadge}>
          <span>{unreadNotifCount <= 9 ? unreadNotifCount : "+9"}</span>
          {/* nombre de notifications non lues */}
        </div>
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
        <div
          style={{ fontFamily: "Karla-Regular" }}
          className="font-weight-bold pt-2 pb-1 h5 mx-3"
        >
          Notifications
        </div>
        {notifs.length === 0
          ? "pas de notification"
          : notifs.map(({ type, unread, data }, ind) => (
              <NotifsTemplates
                key={ind}
                unread={unread}
                type={type}
                data={data}
              />
            ))}
      </Menu>
    </span>
  );
};

export default Notifications;
