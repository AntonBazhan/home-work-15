import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Enter User Details" />
            {console.log(values)}
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              error={!values.firstNameValid}
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              error={!values.lastNameValid}
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your position"
              label="Position"
              error={!values.positionValid}
              onChange={handleChange("position")}
              defaultValue={values.position}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your phone number +380XXXXXXXXX"
              label="Phone number"
              error={!values.phoneNumberValid}
              onChange={handleChange("phoneNumber")}
              defaultValue={values.phoneNumber}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              error={!values.emailValid}
              onChange={handleChange("email")}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              disabled={values.isContinueUserDetailsButtonDisabled}
              color="primary"
              variant="contained"
              onClick={this.continue}
            >
              Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
