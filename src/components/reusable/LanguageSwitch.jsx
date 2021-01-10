import { useState } from "react";

import { Button, Menu, MenuItem } from "@material-ui/core";
import { ArrowDropUp, Translate } from "@material-ui/icons";

import i18n from "../../i18n";

import { withNamespaces } from "react-i18next";

const LanguageSwitch = ({ t, btnVariant }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  function selectLang(lang) {
    if (lang !== i18n.language) {
      i18n
        .changeLanguage(lang)
        .then(() => console.log({ success: "changement de langue réussit" }))
        .catch((err) => console.log({ err }));
    }

    setAnchorEl(null);
  }

  //i18n.language

  return (
    <>
      
        <Button
          style={{ fontFamily: "karla-Italic", textTransform: "none" }}
          variant={btnVariant || "text"}
          color="inherit"
          startIcon={<Translate />}
          endIcon={<ArrowDropUp />}
          className="py-1"
          onClick={(event) => setAnchorEl(event.currentTarget)}
          aria-controls="language-selection"
          aria-haspopup="true"
        >
          {t("common.language")}
        </Button>
    

      <Menu
        id="language-selection"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem
          style={{ fontFamily: "karla-Italic", width: "12em" }}
          selected={i18n.language === "en"}
          onClick={() => selectLang("en")}
        >
          English
        </MenuItem>
        <MenuItem
          style={{ fontFamily: "karla-Italic", width: "12em" }}
          selected={i18n.language === "fr"}
          onClick={() => selectLang("fr")}
        >
          Français
        </MenuItem>
      </Menu>
    </>
  );
};

export default withNamespaces()(LanguageSwitch);
