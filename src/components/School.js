import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

export class School extends Component {

  render() {
    const { values, idx, handleChange } = this.props;
    return (
          <>
            <TextField
              placeholder="Enter name of school"
              label="Name of school"
              onChange={handleChange(idx, "nameSchool")}
              defaultValue={values.nameSchool}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Specialty"
              label="Specialty"
              onChange={handleChange(idx, "specialty")}
              defaultValue={values.specialty}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Start Date"
              label="Start Date"
              onChange={handleChange(idx,"startDate")}
              defaultValue={values.startDate}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Finish Date"
              label="Finish Date"
              onChange={handleChange(idx, "finishDate")}
              defaultValue={values.finishDate}
              margin="normal"
              fullWidth
            />
            </>
    );
  }
}

export default School;
