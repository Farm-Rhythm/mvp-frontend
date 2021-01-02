import Header from "../components/reusable/Header";
import NotifsTemplates from "../components/reusable/NotifsTemplates";

import { withNamespaces } from "react-i18next";

import { useEffect } from "react";

import { ButtonBase } from "@material-ui/core";

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
    unread: false,
    data: {
      followName: "user Top",
      postCategory: 0,
    },
  },
];

const unreadNotifCount = notifs.filter(({ unread }) => unread).length;

const NotificationSmall = ({ history, t }) => {
  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth > 575.98) {
        history.goBack();
      }
    };
  });

  return (
    <>
      <Header />
      <div style={{ fontFamily: "Karla-Italic" }}>
        <div className="d-flex justify-content-between">
          <p className="m-3 h3 font-weight-bold">Notifications</p>
          <ButtonBase
            className="m-3 px-2 text-primary rounded-lg border border-primary small"
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
    </>
  );
};

export default withNamespaces()(NotificationSmall);
