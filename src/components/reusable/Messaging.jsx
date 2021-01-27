import { ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles({
  unreadBadge: {
    color: "#D2BF0E",
    backgroundColor: "white",
    position: "absolute",
    fontFamily: "Lemonada-Bold",
    fontSize: "10px",
    right: "-25%",
    top: -5,
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Messaging = () => {
  const classes = style();

  return (
    <ButtonBase style={{ position: "relative", width: "2em" }} className="mx-3">
      {/* messageBox */}
      <img src="assets/images/messageBox.png" alt="messageBox" width="100%" />
      <div className={classes.unreadBadge}>
        <span>+9</span>
      </div>
    </ButtonBase>
  );
};

export default Messaging;
