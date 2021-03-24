import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Company from './Company';

export class WorkForm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  addCompany = (e) => {
    e.preventDefault();
    this.props.addCompany();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Enter Work experience" />
            {values.companies?.map((company,idx) => {
              return (
                <div className="company" key={'company'+idx}>
                  <h3>Company {idx+1}</h3>
                  <Company  values={company} idx={idx} handleChange={handleChange}/>
                </div>
              )
            })}
            <br />
            <Button color="primary" variant="contained" onClick={this.addCompany}>
              Add company
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

export default WorkForm;
