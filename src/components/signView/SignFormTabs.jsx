import { AppBar, Tab, Tabs } from "@material-ui/core";

import { useState } from "react";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import RegisterForm from "./RegisterForm";
import SignInForm from "./SignInForm";

import { withNamespaces } from "react-i18next";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFB800",
    },
  },
});

function SignForm({ t, children, value, index, ...other }) {
  return (
    <div
      hidden={index !== value}
      id={`form-sign-${index}`}
      aria-labelledby={`tab-sign-${index}`}
      role="tabpanel"
      style={{ minWidth: "280px" }}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `tab-sign-${index}`,
    "aria-controls": `form-sign-${index}`,
  };
}

const SignFormTabs = ({ t }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar
          position="static"
          color="transparent"
          className="shadow-none border-bottom d-inline-flex mb-2"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            variant="fullWidth"
            aria-label="sign forms"
          >
            <Tab
              label={`${t("common.signIn")}`}
              {...a11yProps(0)}
              className="text-capitalize font-weight-bold"
            />
            <Tab
              label={`${t("common.register")}`}
              {...a11yProps(1)}
              className="text-capitalize font-weight-bold"
            />
          </Tabs>
        </AppBar>

        <SignForm value={value} index={0}>
          {/* Sign In */}
          <SignInForm />
        </SignForm>

        <SignForm value={value} index={1}>
          {/* Register */}
          <RegisterForm />
        </SignForm>
      </div>
    </ThemeProvider>
  );
};

export default withNamespaces()(SignFormTabs);
