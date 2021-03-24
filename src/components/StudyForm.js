import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import School from './School';


export class StudyForm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  addSchool = (e) => {
    e.preventDefault();
    this.props.addSchool();
  };


  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Enter Education experience" />
            {values.schools?.map((school,idx) => {
              return (
                <div className="school" key={'school'+idx} >
                  <h3>School {idx+1}</h3>
                  <School values={school} idx={idx} handleChange={handleChange}/>
                </div>
                )
            })}
            <br />
            <Button color="primary" variant="contained" onClick={this.addSchool}>
              Add school
            </Button>
            <br />
            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>

            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default StudyForm;
