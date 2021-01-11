import { Button, TextField, Link } from "@material-ui/core";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { withNamespaces } from "react-i18next";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFB800",
    },
  },
});

const SignInForm = ({ t }) => {
  return (
    <ThemeProvider theme={theme}>
      <form>
        <div className="form-group">
          <TextField
            label={t("mobile or email")}
            required
            variant="outlined"
            fullWidth
            size="small"
          />
        </div>

        <div className="form-group">
          <TextField
            label={t("common.password")}
            required
            variant="outlined"
            fullWidth
            type="password"
            size="small"
          />
        </div>
        <div className="d-flex">
          <span className="text-nowrap mr-4" style={{ fontSize: "x-small" }}>
            <Link role="button" color="textPrimary">
              {t("Forgot your password")} ?
            </Link>
          </span>
          <Button
            variant="contained"
            fullWidth
            style={{ backgroundColor: "#0DA735" }}
            type="submit"
            className="text-white text-capitalize font-weight-bold"
          >
            {t("common.signIn")}
          </Button>
        </div>
      </form>
    </ThemeProvider>
  );
};

export default withNamespaces()(SignInForm);
