import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

export class Company extends Component {

  render() {
    const { values, idx, handleChange } = this.props;
    return (
        <>
            <TextField
              placeholder="Enter Company name"
              label="Company name"
              onChange={handleChange(idx, "companyName")}
              defaultValue={values.companyName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Position"
              label="Position"
              onChange={handleChange(idx, "position")}
              defaultValue={values.position}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Start Date"
              label="Start Date"
              onChange={handleChange(idx, "startDate")}
              defaultValue={values.startDate}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Finish Date"
              label="Finish Date"
              onChange={handleChange(idx,"finishDate")}
              defaultValue={values.finishDate}
              margin="normal"
              fullWidth
            />
        </>
    );
  }
}

export default Company;
