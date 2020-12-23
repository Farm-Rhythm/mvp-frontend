import ContactForm from "./ContactForm";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Email, Phone } from "@material-ui/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const style = makeStyles({
  root: {
    fontFamily: "Karla-Regular",
    "& .content": { maxWidth: 1100, margin: "auto" },
    "& .header": {
      backgroundColor: "rgba(196, 196, 196, 0.2)",
      "& .title": {
        color: "#FFB800",
        fontFamily: "Lemonada-Bold",
      },
      "& .subtitle": {
        fontFamily: "Karla-Italic",
        fontSize: "small",
      },
    },
  },
  socialMedia: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    margin: "0 1em 1em",
  },
  treeDecoration: {
    backgroundImage: "url('assets/images/tree.png')",
    margin: "0 2em",
    width: 100,
    height: 100,
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
});

const MEDIA_BLOCK = {
  bootstrap:
    "py-4 px-0 col col-lg-10 d-flex justify-content-start justify-content-sm-center justify-content-md-start flex-wrap",
};

const ContactContent = () => {
  const classes = style();

  return (
    <div className={classes.root}>
      <div className="header px-2 px-lg-5 py-5 col-12 d-flex justify-content-around align-items-center">
        <div className={classes.treeDecoration}></div>
        <div className="text-center">
          <div className="title h2">Contact Us</div>
          <div className="subtitle text-secondary">
            Ask us anything and we’d love to hear from you
          </div>
        </div>
        <div className={classes.treeDecoration}></div>
      </div>

      <div className="content px-2 px-sm-5 py-2 py-md-5 d-flex flex-wrap flex-column flex-md-row">
        <div className="col">
          <ContactForm />
        </div>
        <div className="col px-1 py-4 d-sm-flex d-md-block align-items-center justify-content-between flex-wrap flex-md-column">
          <div className="col col-sm-8 col-md px-0">
            <img
              src="assets/images/illustration_contact.png"
              alt="contact_illustration"
              className="col"
            />
            <div className="text-dark flex-wrap-reverse d-flex col">
              <div className="m-3">
                <div className="h5 font-weight-bold">ONLINE SERVICE</div>
                <div className="small mt-3">
                  <Email color="inherit" /> farmrhythm@gmail.com
                </div>
              </div>
              <div className="m-3">
                <div className="h5 font-weight-bold">PHONE</div>
                <div className="small mt-3">
                  <Phone color="inherit" /> +XXXXXXXXXX
                </div>
              </div>
            </div>
          </div>
          <div style={{ color: "#FFB800" }} className={MEDIA_BLOCK.bootstrap}>
            <Button
              color="inherit"
              variant="outlined"
              className={`${classes.socialMedia}`}
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              className={classes.socialMedia}
            >
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              className={classes.socialMedia}
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              className={classes.socialMedia}
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
