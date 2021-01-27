// skeleton, simple content, design of specific content, design of generic content
import { Link as RouterLink } from "react-router-dom";
import LanguageSwitch from "./LanguageSwitch";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Link } from "@material-ui/core";
import Contracts from "./Contracts";

import { withNamespaces } from "react-i18next";


const style = makeStyles({
  spanCopyright: {
    fontSize: "small",
    "@media (max-width: 767.98px)": {
      fontSize: "x-small",
    },
  },
});

const GENERAL_CONTAINER = {
  root: {
    backgroundColor: "#0DA735",
    fontFamily: "karla-Italic",
    color: "white",
  },
  bootstrap:
    "d-flex align-items-center justify-content-center justify-content-sm-between justify-content-md-around  flex-wrap text-nowrap",
};


const Footer = ({t}) => {
  const classes = style();

  return (
    <Container
      maxWidth={false}
      style={GENERAL_CONTAINER.root}
      className={GENERAL_CONTAINER.bootstrap}
    >
      
        <LanguageSwitch btnVariant="outlined" />
        <span className="px-2 px-md-3">
          <Contracts />
        </span>
        <span className="px-2 px-md-3">
          <Link
            className="text-reset text-capitalize"
            underline="always"
            component={RouterLink}
            to="/"
          >
            {t("common.home")}
          </Link>
          &nbsp; &nbsp; &nbsp;
          <Link
            className="text-reset text-capitalize"
            underline="always"
            component={RouterLink}
            to="/contact"
          >
            {t("common.contact")}
          </Link>
        </span>
        <span className={classes.spanCopyright}>
          Farm Rhythm © copyright 2020
        </span>
      
    </Container>
  );
};

export default withNamespaces()(Footer);
