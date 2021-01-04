import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import { ButtonBase, Menu, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import NotifsTemplates from "./NotifsTemplates";

import { withNamespaces } from "react-i18next";

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
      followUser: {
        name: "user Top",
        imgUrl: "assets/images/defaultProfilePic.png",
      },
      postCategoryInd: 0,
      accessLink: "",
    },
  },
  {
    type: "followCommentedInterestingPost",
    unread: false,
    data: {
      followUser: {
        name: "user Top",
        imgUrl: "assets/images/defaultProfilePic.png",
      },
      accessLink: "",
    },
  },
  {
    type: "followNewFarm",
    unread: true,
    data: {
      followUser: {
        name: "user Top",
        imgUrl: "assets/images/defaultProfilePic.png",
        newFarmName: "Farm new 2",
      },
      accessLink: "",
    },
  },
  {
    type: "sharedMyPost",
    unread: true,
    data: {
      user: {
        name: "user Top",
        imgUrl: "assets/images/defaultProfilePic.png",
      },
      accessLink: "",
    },
  },
  {
    type: "commentedMyPost",
    unread: true,
    data: {
      user: {
        name: "user Top",
        imgUrl: "assets/images/defaultProfilePic.png",
      },
      accessLink: "",
    },
  },
  {
    type: "likedMyActivity",
    unread: true,
    data: {
      user: {
        name: "user Top",
        imgUrl: "assets/images/defaultProfilePic.png",
      },
      activityCategoryInd: 1,
      accessLink: "",
    },
  },
  {
    type: "respondedMe",
    unread: true,
    data: {
      user: {
        name: "user Top",
        imgUrl: "assets/images/defaultProfilePic.png",
      },
      accessLink: "",
    },
  },
  {
    type: "identifiedMe",
    unread: true,
    data: {
      user: {
        name: "user Top",
        imgUrl: "assets/images/defaultProfilePic.png",
      },
      activityCategoryInd: 1,
      accessLink: "",
    },
  },
  {
    type: "newFollower",
    unread: false,
    data: {
      user: {
        name: "user Top",
        imgUrl: "assets/images/defaultProfilePic.png",
      },
    },
  },
  {
    type: "newFarmFollower",
    unread: false,
    data: {
      user: {
        name: "user Top",
        imgUrl: "assets/images/defaultProfilePic.png",
      },
      farmName: "Farm Num 8",
    },
  },
  {
    type: "sharedMyFarm",
    unread: true,
    data: {
      user: {
        name: "user Top",
        imgUrl: "assets/images/defaultProfilePic.png",
      },
      farmName: "Farm Num 8",
      accessLink: "",
    },
  },
  {
    type: "starCounter",
    unread: false,
    data: {
      farmName: "Farm Num 8",
      numberStar: 23,
    },
  },
  {
    type: "trackFarmInvitation",
    unread: true,
    data: {
      user: {
        name: "user Top",
        imgUrl: "assets/images/defaultProfilePic.png",
      },
      farmName: "Farm Num 34",
      accessLink: "",
    },
  },
  {
    type: "trackedFarmProgress",
    unread: true,
    data: {
      farmName: "Farm Num 34",
      accessLink: "",
    },
  },
  {
    type: "trackedFarmEndedCycle",
    unread: true,
    data: {
      farmName: "Farm Num 33",
      accessLink: "",
    },
  },
];

const unreadNotifCount = notifs.filter(({ unread }) => unread).length;

const Notifications = ({ t }) => {
  const classes = style();
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth < 576.98) {
        setAnchorEl(null);
      }
    };
  });

  return (
    <span>
      <ButtonBase
        style={{ position: "relative", width: "2.2em" }}
        className="mx-3 d-none d-sm-inline"
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        {/* Notifications greater than mobile */}
        <img src="assets/images/bell.png" alt="bell" width="100%" />
        <div hidden={unreadNotifCount === 0} className={classes.unreadBadge}>
          <span>{unreadNotifCount <= 9 ? unreadNotifCount : "+9"}</span>
          {/* nombre de notifications non lues */}
        </div>
      </ButtonBase>

      <Link
        style={{ position: "relative", width: "2.1em" }}
        className="d-inline-block d-sm-none"
        component={RouterLink}
        to="/notification"
      >
        {/* Notifications lower than mobile */}
        <img src="assets/images/bell.png" alt="bell" width="100%" />
        <div hidden={unreadNotifCount === 0} className={classes.unreadBadge}>
          <span>{unreadNotifCount <= 9 ? unreadNotifCount : "+9"}</span>
          {/* nombre de notifications non lues */}
        </div>
      </Link>

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
        <div>
          <div className="d-flex align-items-center justify-content-between border-bottom">
            <p className="m-3 h4 font-weight-bold">Notifications</p>
            <ButtonBase
              className="mx-3 p-0 text-primary d-inline"
              style={{ fontSize: "10px", height: "15px" }}
              component="div"
              hidden={unreadNotifCount === 0}
            >
              {t("common.markAsRead")}
            </ButtonBase>
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
        </div>
      </Menu>
    </span>
  );
};

export default withNamespaces()(Notifications);
