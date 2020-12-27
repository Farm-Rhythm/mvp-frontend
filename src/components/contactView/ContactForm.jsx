import { TextField, Button } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Send } from "@material-ui/icons";

import { withNamespaces } from "react-i18next";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFB800",
    },
  },
  typography: {
    fontFamily: "inherit",
  },
});



const ContactForm = ({ t }) => {
  return (
    <ThemeProvider theme={theme}>
      <form className="py-4">
        <div className="h4 mb-4 font-weight-bold text-center text-dark">
          {t('contactPage.formTitle')}
        </div>
        <TextField
          label={`${t("contactPage.fullName")}`}
          required
          variant="outlined"
          fullWidth
          error={false}
          className="my-2 my-md-3"
        />
        <TextField
          label={`${t("contactPage.email")}`}
          required
          variant="outlined"
          fullWidth
          error={false}
          type="email"
          className="my-2 my-md-3"
        />
        <TextField
          label={`${t("contactPage.yourMessage")}`}
          required
          variant="outlined"
          fullWidth
          error={false}
          multiline
          rows={10}
          className="my-2 my-md-3"
        />
        <Button
          variant="contained"
          fullWidth
          style={{ backgroundColor: "#FFB800" }}
          type="submit"
          className="mt-3 text-white text-capitalize font-weight-bold"
          endIcon={<Send />}
        >
          {t('contactPage.send')}
        </Button>
      </form>
    </ThemeProvider>
  );
};

export default withNamespaces()(ContactForm);
