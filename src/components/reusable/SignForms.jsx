import {
  AppBar,
  Tab,
  Tabs,
  Button,
  TextField,
  FormLabel,
  Radio,
  FormControlLabel,
} from "@material-ui/core";

import { useState } from "react";

function SignForm({ children, value, index, ...other }) {
  return (
    <div
      hidden={index !== value}
      id={`form-sign-${index}`}
      aria-labelledby={`tab-sign-${index}`}
      role="tabpanel"
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

const SignForms = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <div>
      <AppBar
        position="static"
        color="transparent"
        className="shadow-none border-bottom d-inline-flex mb-2"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant='fullWidth'
          aria-label="sign forms"
        >
          <Tab
            label="Sign In"
            {...a11yProps(0)}
            className="text-capitalize font-weight-bold"
          />
          <Tab
            label="Register"
            {...a11yProps(1)}
            className="text-capitalize font-weight-bold"
          />
        </Tabs>
      </AppBar>

      <SignForm value={value} index={0}>
        {/* Sign In */}
        <form>
          <div className="form-group">
            <TextField
              label="email address"
              required
              variant="outlined"
              fullWidth
              size="small"
            />
          </div>

          <div className="form-group">
            <TextField
              label="password"
              required
              variant="outlined"
              type="password"
              fullWidth
              size="small"
            />
          </div>
          <div className="d-flex">
            <span className="small text-nowrap mr-3">Forgot your password ?</span>
            <Button
              variant="contained"
              fullWidth
              style={{ backgroundColor: "#0DA735" }}
              type="submit"
              className="text-white text-capitalize font-weight-bold"
            >
              Sign in
            </Button>
          </div>
        </form>
      </SignForm>

      <SignForm value={value} index={1}>
        {/* Register */}
        <form>
          <div className="d-flex justify-content-between form-group">
            <TextField
              label="first name"
              required
              variant="outlined"
              size="small"
            />

            <TextField
              label="last name"
              required
              variant="outlined"
              size="small"
            />
          </div>

          <div className="form-group">
            <TextField
              label="mobile number or email"
              required
              variant="outlined"
              fullWidth
              size="small"
            />
          </div>

          <div className="form-group">
            <TextField
              label="password"
              required
              type="password"
              variant="outlined"
              fullWidth
              size="small"
            />
          </div>

          <div className="form-group d-flex align-items-center">
            <FormLabel className="mr-2">Gender :</FormLabel>
            <div>
              <FormControlLabel
                value="female"
                label="Female"
                control={<Radio size="small" />}
              />
              <FormControlLabel
                value="male"
                label="Male"
                control={<Radio size="small" />}
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
            Register
          </Button>
        </form>
      </SignForm>
    </div>
  );
};

export default SignForms;
