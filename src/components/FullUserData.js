import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

export class FullUserData extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        firstName,
        lastName,
        position,
        phoneNumber,
        email,
        schools,
        companies,
      },
    } = this.props;
    return (
      <div>
        <>
          <Dialog open fullWidth maxWidth="sm">
            {console.log(schools)}
            {console.log(companies)}
            <AppBar title="User Data" />
            <List>
              <div className="wrapper">
                <h1>
                  {firstName} {lastName}
                </h1>
                <h3>{position}</h3>
                <p>
                  <b>Phone number:</b> {phoneNumber} <b>Email</b>: {email}
                </p>
              </div>

              <div className="educationContainer">
                <h3>Education</h3>
                {schools.map((school, idx) => {
                  return (
                    <div key={idx}>
                      <h4>School {idx + 1}</h4>
                      <ListItem>
                        <ListItemText
                          primary="Name of School"
                          secondary={school.nameSchool}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Specialty"
                          secondary={school.specialty}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Start Date"
                          secondary={school.startDate}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Finish Date"
                          secondary={school.finishDate}
                        />
                      </ListItem>
                    </div>
                  );
                })}
              </div>
              <div className="workContainer">
                <h3>Companies</h3>
                {companies.map((company, idx) => {
                  return (
                    <div key={idx}>
                      <h4>Company {idx + 1}</h4>
                      <ListItem>
                        <ListItemText
                          primary="Company name"
                          secondary={company.companyName}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Position"
                          secondary={company.position}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Start Date"
                          secondary={company.startDate}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Finish Date"
                          secondary={company.finishDate}
                        />
                      </ListItem>
                    </div>
                  );
                })}
              </div>
            </List>
            <br />

            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>
          </Dialog>
        </>
      </div>
    );
  }
}

export default FullUserData;
