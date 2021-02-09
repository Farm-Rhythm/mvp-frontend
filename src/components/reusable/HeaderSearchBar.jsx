import { Link as RouterLink } from "react-router-dom";
import { withNamespaces } from "react-i18next";

import { InputBase, Link, Avatar } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SEARCH = {
  bar: {
    borderRadius: "15px",
    border: "3px solid #D2BF0E",
    backgroundColor: "white",
    color: "#D2BF0E",
    display: "flex",
    alignItems: "center",
    height: "2em",
  },
  btn_sm: {
    borderRadius: "10px",
    border: "2px solid white",
    width: "2em",
    height: "1.3em",
    background:
      "linear-gradient(90deg, rgba(210, 191, 14, 0.9) 29.69%, rgba(210, 191, 14, 0.553333) 65.1%, rgba(210, 191, 14, 0.1) 100%)",
  },
};

const HeaderSearchBar = ({ t, onSearchPageLocationSmall }) => {

  return (
    <>
      <form
        style={SEARCH.bar}
        className="col col-md-7 col-lg-5 my-sm-2 mx-2 mx-lg-5"
        hidden={!onSearchPageLocationSmall}
      >
        <FontAwesomeIcon icon={faSearch} color="inherit" className="mx-2" />
        <InputBase
          placeholder={t("common.search")}
          fullWidth
          style={{
            color: "#D2BF0E",
            fontFamily: "Karla-Italic",
            fontSize: "1em",
          }}
        />
      </form>

      <Link
        to="/search"
        component={RouterLink}
        className={`${
          onSearchPageLocationSmall ? "d-none" : "d-inline"
        } d-sm-none`}
      >
        <Avatar style={SEARCH.btn_sm}>
          <FontAwesomeIcon icon={faSearch} color="inherit" size="xs" />
        </Avatar>
      </Link>
    </>
  );
};

HeaderSearchBar.defaultProps = {
  onSearchPageLocationSmall: true,
}

export default withNamespaces()(HeaderSearchBar);
