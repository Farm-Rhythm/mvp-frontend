import { withNamespaces } from "react-i18next";
import {
  Avatar,
  MenuItem,
  ListItem,
  Link,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const postCategory = ["farm progression", "video", "article", "photo"];
const activityCategory = ["post", "comment"];

const useStyle = makeStyles({
  notif: {
    maxWidth: (styleProps) => (styleProps.noMaxWidth ? "auto" : "350px"),
    whiteSpace: "normal",
    fontFamily: "Karla-Italic",
    fontSize: "small",
    backgroundColor: (styleProps) =>
      styleProps.unread ? "rgba(196, 196, 196, 0.2)" : "white",
  },
  farmName: {
    fontFamily: "Lemonada-Bold",
    color: "#FFB800",
  },
});

const NotifsTemplates = ({ t, type, data, unread, noMaxWidth }) => {
  const styleProps = { unread, noMaxWidth };
  const classes = useStyle(styleProps);

  const templates = {
    followNewPost: ({ followUser, postCategoryInd, accessLink }) => (
      /* give an accessLink */
      <Link className="text-reset text-decoration-none">
        <ListItem>
          <ListItemAvatar>
            <Avatar alt={followUser.name} src={followUser.imgUrl} />
          </ListItemAvatar>
          <ListItemText disableTypography>
            <strong>{followUser.name}</strong> {t("published a new")}{" "}
            {t(postCategory[postCategoryInd])}
          </ListItemText>
        </ListItem>
      </Link>
    ),

    followCommentedInterestingPost: ({ followUser, accessLink }) => (
      /* possibility of multiple user */
      /* give an accessLink */
      <Link className="text-reset text-decoration-none">
        <ListItem>
          <ListItemAvatar>
            <Avatar alt={followUser.name} src={followUser.imgUrl} />
          </ListItemAvatar>
          <ListItemText disableTypography>
            <strong>{followUser.name}</strong>{" "}
            {t("commented on a post that may interest you")}
          </ListItemText>
        </ListItem>
      </Link>
    ),

    followNewFarm: ({ followUser, accessLink }) => (
      /* give an accessLink */
      <Link className="text-reset text-decoration-none">
        <ListItem>
          <ListItemAvatar>
            <Avatar alt={followUser.name} src={followUser.imgUrl} />
          </ListItemAvatar>
          <ListItemText disableTypography>
            <strong>{followUser.name}</strong> {t("started a new farm")}{" "}
            <span className={classes.farmName}>{followUser.newFarmName}</span>
          </ListItemText>
        </ListItem>
      </Link>
    ),

    sharedMyPost: ({ user, accessLink }) => (
      /* possibility of multiple user */
      /* give an accessLink */
      <Link className="text-reset text-decoration-none">
        <ListItem>
          <ListItemAvatar>
            <Avatar alt={user.name} src={user.imgUrl} />
          </ListItemAvatar>
          <ListItemText disableTypography>
            <strong>{user.name}</strong> {t("shared your post")}
          </ListItemText>
        </ListItem>
      </Link>
    ),

    commentedMyPost: ({ user, accessLink }) => (
      /* possibility of multiple user */
      /* give an accessLink */
      <Link className="text-reset text-decoration-none">
        <ListItem>
          <ListItemAvatar>
            <Avatar alt={user.name} src={user.imgUrl} />
          </ListItemAvatar>
          <ListItemText disableTypography>
            <strong>{user.name}</strong> {t("commented your post")}
          </ListItemText>
        </ListItem>
      </Link>
    ),

    likedMyActivity: ({ user, activityCategoryInd, accessLink }) => (
      /* possibility of multiple user */
      /* give an accessLink */
      <Link className="text-reset text-decoration-none">
        <ListItem>
          <ListItemAvatar>
            <Avatar alt={user.name} src={user.imgUrl} />
          </ListItemAvatar>
          <ListItemText disableTypography>
            <strong>{user.name}</strong> {t("liked your")}{" "}
            {t(activityCategory[activityCategoryInd])}
          </ListItemText>
        </ListItem>
      </Link>
    ),

    respondedMe: ({ user, accessLink }) => (
      /* give an accessLink */
      <Link className="text-reset text-decoration-none">
        <ListItem>
          <ListItemAvatar>
            <Avatar alt={user.name} src={user.imgUrl} />
          </ListItemAvatar>
          <ListItemText disableTypography>
            <strong>{user.name}</strong> {t("responded to your comment")}
          </ListItemText>
        </ListItem>
      </Link>
    ),

    identifiedMe: ({ user, activityCategoryInd, accessLink }) => (
      /* give an accessLink */
      <Link className="text-reset text-decoration-none">
        <ListItem>
          <ListItemAvatar>
            <Avatar alt={user.name} src={user.imgUrl} />
          </ListItemAvatar>
          <ListItemText disableTypography>
            <strong>{user.name}</strong>{" "}
            {t(`identified you in a ${activityCategory[activityCategoryInd]}`)}
          </ListItemText>
        </ListItem>
      </Link>
    ),

    newFollower: ({ user }) => (
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={user.name} src={user.imgUrl} />
        </ListItemAvatar>
        <ListItemText disableTypography>
          <strong>{user.name}</strong> {t("started following you")}
        </ListItemText>
      </ListItem>
    ),

    newFarmFollower: ({ user, farmName }) => (
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={user.name} src={user.imgUrl} />
        </ListItemAvatar>
        <ListItemText disableTypography>
          <strong>{user.name}</strong>{" "}
          {t("started tracking the progress of your farm")}{" "}
          <span className={classes.farmName}>{farmName}</span>
        </ListItemText>
      </ListItem>
    ),

    sharedMyFarm: ({ user, farmName }) => (
      /* give an accessLink */
      <Link className="text-reset text-decoration-none">
        <ListItem>
          <ListItemAvatar>
            <Avatar alt={user.name} src={user.imgUrl} />
          </ListItemAvatar>
          <ListItemText disableTypography>
            <strong>{user.name}</strong> {t("shared the progress of your farm")}{" "}
            <span className={classes.farmName}>{farmName}</span>{" "}
            {t("in a post")}
          </ListItemText>
        </ListItem>
      </Link>
    ),

    starCounter: ({ farmName, numberStar }) => (
      /* possibility of a single star */
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Start" src="dasa.png" />
        </ListItemAvatar>
        <ListItemText disableTypography>
          {t("numberOfStar", { returnObjects: true })[0]}{" "}
          <span className={classes.farmName}>{farmName}</span>{" "}
          {t("numberOfStar", { returnObjects: true })[1]}{" "}
          <span>{numberStar}</span>{" "}
          {t("numberOfStar", { returnObjects: true })[2]}
        </ListItemText>
      </ListItem>
    ),

    trackFarmInvitation: ({ user, farmName, accessLink }) => (
      /* give an accessLink */
      <Link className="text-reset text-decoration-none">
        <ListItem>
          <ListItemAvatar>
            <Avatar alt={user.name} src={user.imgUrl} />
          </ListItemAvatar>
          <ListItemText disableTypography>
            <strong>{user.name}</strong>{" "}
            {t("invite you to track progress of the farm")}{" "}
            <span className={classes.farmName}>{farmName}</span>
          </ListItemText>
        </ListItem>
      </Link>
    ),

    trackedFarmProgress: ({ farmName, accessLink }) => (
      /* give an accessLink */
      <Link className="text-reset text-decoration-none">
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Farm" src="farm.png" />
          </ListItemAvatar>
          <ListItemText disableTypography>
            {t("the farm")} <span className={classes.farmName}>{farmName}</span>{" "}
            {t("you are tracking has made further progress")}
          </ListItemText>
        </ListItem>
      </Link>
    ),

    trackedFarmEndedCycle: ({ farmName, accessLink }) => (
      /* give an accessLink */
      <Link className="text-reset text-decoration-none">
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Farm" src="farm.png" />
          </ListItemAvatar>
          <ListItemText disableTypography>
            {t("the farm")} <span className={classes.farmName}>{farmName}</span>{" "}
            {t("you are tracking has completed its production cycle")}
          </ListItemText>
        </ListItem>
      </Link>
    ),
  };

  return (
    <MenuItem
      className={`${classes.notif} border-bottom p-0 text-reset text-decoration-none`}
    >
      {templates[type](data)}
    </MenuItem>
  );
};

export default withNamespaces()(NotifsTemplates);
