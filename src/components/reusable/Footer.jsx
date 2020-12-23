// skeleton, simple content, design of specific content, design of generic content
import { Link as RouterLink } from "react-router-dom";
import LanguageSwitch from "./LanguageSwitch";

import { styled, makeStyles } from "@material-ui/core/styles";
import { Button, Container, Link } from "@material-ui/core";

const ModalButton = styled(Button)({
  fontFamily: "karla-Italic",
  textTransform: "none",
});

const FooterContainer = styled(Container)({
  backgroundColor: "#0DA735",
  fontFamily: "karla-Italic",
  color: "white",
  fontSize: "15px",
});

const style = makeStyles({
  spanCopyright: {
    "@media (max-width: 767.98px)": {
      fontSize: "small",
      marginTop: "1.5em",
    },
  },
});

const GENERAL_CONTAINER = {
  bootstrap: "d-flex align-items-center justify-content-center justify-content-md-between flex-wrap px-5 py-2 text-nowrap"
}

const DYNAMICS_CONTAINER = {
  bootstrap: "d-flex flex-wrap justify-content-center align-items-center col-12 col-md pl-0 pr-0 pr-md-5",
}

const DYNAMICS_SUBCONTAINER = {
  bootstrap:
    "d-flex flex-wrap-reverse justify-content-center align-items-center offset-md-1 col p-0",
};

const Footer = () => {
  const classes = style()

  return (
    <FooterContainer
      maxWidth={false}
      className={GENERAL_CONTAINER.bootstrap}
    >
      <div className={DYNAMICS_CONTAINER.bootstrap}>
        <LanguageSwitch />
        <span className={DYNAMICS_SUBCONTAINER.bootstrap}>
          <span className="px-3">
            <ModalButton color="inherit">Term of Use</ModalButton>-
            <ModalButton color="inherit">Privacy Policy</ModalButton>
          </span>
          <span className="px-3 py-3">
            <Link
              className="text-reset"
              underline="always"
              component={RouterLink}
              to="/"
            >
              Home
            </Link>
            &nbsp; &nbsp; &nbsp;
            <Link
              className="text-reset"
              underline="always"
              component={RouterLink}
              to="/contact"
            >
              Contact-us
            </Link>
          </span>
        </span>
      </div>
      <span className={classes.spanCopyright}>
        Farm Rhythm © copyright 2020
      </span>
    </FooterContainer>
  );
};

export default Footer;
