import {
  Button,
  TextField,
  FormLabel,
  Radio,
  FormControlLabel,
} from "@material-ui/core";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { withNamespaces } from "react-i18next";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFB800",
    },
  },
});

const RegisterForm = ({ t }) => {
  return (
    <ThemeProvider theme={theme}>
      <form>
        <div className="d-flex justify-content-between form-group">
          <TextField
            label={t("common.firstName")}
            required
            variant="outlined"
            size="small"
          />

          <TextField
            label={t("common.lastName")}
            required
            variant="outlined"
            size="small"
          />
        </div>

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
            type="password"
            variant="outlined"
            fullWidth
            size="small"
          />
        </div>

        <div className="d-flex align-items-center">
          <FormLabel className="mr-2">{t("common.Gender")} :</FormLabel>
          <div>
            <FormControlLabel
              value="female"
              label={t("common.Female")}
              control={<Radio size="small" color="primary" />}
            />
            <FormControlLabel
              value="male"
              label={t("common.Male")}
              control={<Radio size="small" color="primary" />}
            />
          </div>
        </div>

        <Button
          variant="contained"
          size="small"
          fullWidth
          style={{ backgroundColor: "#0DA735" }}
          type="submit"
          className="text-white text-capitalize font-weight-bold"
        >
          {t("common.register")}
        </Button>
      </form>
    </ThemeProvider>
  );
};

export default withNamespaces()(RegisterForm);
