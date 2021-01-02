import { withNamespaces } from "react-i18next";
import {
  Avatar,
  MenuItem,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const postCategory = ["farmProgress", "video", "article", "photo"];
const activityCategory = ["post", "comment"];

const useStyle = makeStyles({
  notif: {
    maxWidth: styleProps => styleProps.noMaxWidth ? 'auto' : "350px",
    whiteSpace: "normal",
    fontFamily: "Karla-Italic",
    fontSize: "small",
    backgroundColor: styleProps =>
      styleProps.unread ? "rgba(196, 196, 196, 0.2)" : "white",
  },
});

const NotifsTemplates = ({ t, type, data, unread, noMaxWidth }) => {
  const templates = {
    followNewPost: (data) => (
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Louna" src="assets/images/defaultProfilePic.png" />
        </ListItemAvatar>
        <ListItemText disableTypography>
          {data.followName} published a news{" "}
          {t(postCategory[data.postCategory])}
        </ListItemText>
      </ListItem>
    ),

    followCommentedInterestingPost: (data) =>
      `${data.followName} commented on a post you liked`,
    followNewFarm: (data) =>
      `${data.followName} started a new farm ${data.newFarmName}`,

    sharedMyPost: (data) => `${data.followName} shared your post`,
    likedMyActivity: (data) =>
      `${data.followName} liked your ${t(
        activityCategory[data.activityCategory]
      )}`,
    commentedMyActivity: (data) =>
      `${data.followName} commented your ${t(
        activityCategory[data.activityCategory]
      )}`,

    respondedMe: (data) => `${data.followName} responded to your comment`,
    identifiedMe: (data) =>
      `${data.followName} identified you in a ${t(
        activityCategory[data.activityCategory]
      )}`,
    newFollower: (data) => `${data.followName} started following you`,
    newFarmFollower: (data) =>
      `${data.userName} is tracking the progress of your farm ${data.farmName}`,
    sharedMyFarm: (data) => `${data.userName} shared the progress of your farm`,
    starCounter: (data) =>
      `Your farm ${data.farmName} has reached ${data.nbStar}`,
    trackFarmInvitation: (data) =>
      `${data.userName} invite you to track progress of the farm ${data.farmName}`,
    trackedFarmProgress: (data) =>
      `The Farm ${data.farmName} you are tracking has made further progress`,
    trackedFarmEndedCycle: (data) =>
      `The Farm ${data.farmName} you are tracking has completed its production cycle`,
  };

  const styleProps = { unread, noMaxWidth };
  //console.log(styleProps);
  const classes = useStyle(styleProps);
  return (
    <MenuItem
      className={`${classes.notif} border-top p-0 text-reset text-decoration-none`}
    >
      {templates[type](data)}
    </MenuItem>
  );
};

export default withNamespaces()(NotifsTemplates);
