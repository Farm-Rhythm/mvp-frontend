import { TextField, Button } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Send } from "@material-ui/icons";

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



const ContactForm = () => {
  return (
    <ThemeProvider theme={theme}>
      <form className="py-4">
        <div className="h4 mb-4 font-weight-bold text-center text-dark">
          Send us a message
        </div>
        <TextField
          label="Full name"
          required
          variant="outlined"
          fullWidth
          error={false}
          className="my-2 my-md-3"
        />
        <TextField
          label="Email address"
          required
          variant="outlined"
          fullWidth
          error={false}
          type="email"
          className="my-2 my-md-3"
        />
        <TextField
          label="Your message"
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
          color="primary"
          type="submit"
          className="mt-3 text-white text-capitalize font-weight-bold"
          endIcon={<Send />}
        >
          Send
        </Button>
      </form>
    </ThemeProvider>
  );
};

export default ContactForm;
