import {
  AppBar,
  Tab,
  Tabs,
  ButtonBase,
  Button,
  TextField,
  RadioGroup,
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
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="sign forms">
          <Tab label="Sign In" {...a11yProps(0)} />
          <Tab label="Register" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <SignForm value={value} index={0}>
        {/* Sign In */}
        <form>
          <TextField
            label="email address"
            required
            variant="outlined"
            fullWidth
            error={false}
            className="my-2 my-md-3"
          />

          <TextField
            label="password"
            required
            variant="outlined"
            type="password"
            fullWidth
            error={false}
            className="my-2 my-md-3"
          />
          <div className="d-flex justify-content-between">
            <ButtonBase>Forgot your password</ButtonBase>
            <Button
              variant="contained"
              fullWidth
              style={{ backgroundColor: "#0DA735" }}
              type="submit"
              className="mt-3 text-white text-capitalize font-weight-bold"
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
              fullWidth
              error={false}
              className="my-2 my-md-3"
            />

            <TextField
              label="last name"
              required
              variant="outlined"
              fullWidth
              error={false}
              className="my-2 my-md-3"
            />
          </div>

          <TextField
            label="mobile number or email"
            required
            variant="outlined"
            fullWidth
            error={false}
            className="my-2 my-md-3"
          />

          <TextField
            label="password"
            required
            type="password"
            variant="outlined"
            fullWidth
            error={false}
            className="my-2 my-md-3"
          />

          <RadioGroup aria-label="gender" name="gender" value="female">
            <FormControlLabel
              value="female"
              label="Female"
              control={<Radio />}
            />
            <FormControlLabel value="male" label="Male" control={<Radio />} />
          </RadioGroup>

          <Button
            variant="contained"
            fullWidth
            style={{ backgroundColor: "#0DA735" }}
            type="submit"
            className="mt-3 text-white text-capitalize font-weight-bold"
          >
            Register
          </Button>
        </form>
      </SignForm>
    </div>
  );
};

export default SignForms;
