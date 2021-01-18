import NotifsTemplates from "../reusable/NotifsTemplates";

import { withNamespaces } from "react-i18next";

// import { useEffect } from "react";

import { ButtonBase } from "@material-ui/core";

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

const NotificationContent = ({ t }) => {
  // useEffect(() => {
  //   window.onresize = () => {
  //     if (window.innerWidth > 575.98) {
  //       history.goBack();
  //     }
  //   };
  // });

  return (
    <div
      style={{ fontFamily: "Karla-Italic" }}
      className="border p-0 mx-auto my-5 rounded-lg col-8"
    >
      <div className="d-flex align-items-center justify-content-between border-bottom">
        <p className="m-3 h4 font-weight-bold">Notifications</p>
        <ButtonBase
          className="mx-3 p-0 text-primary d-inline"
          style={{ fontSize: "13px", height: "17px" }}
          component="div"
          hidden={unreadNotifCount === 0}
        >
          {t("common.markAsRead")}
        </ButtonBase>
      </div>

      <div>
        {notifs.length === 0 ? (
          <span className="mx-4 text-secondary">pas de notification</span>
        ) : (
          notifs.map(({ type, unread, data }, ind) => (
            <NotifsTemplates
              key={ind}
              unread={unread}
              type={type}
              data={data}
              noMaxWidth={true}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default withNamespaces()(NotificationContent);
