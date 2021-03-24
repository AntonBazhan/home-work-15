import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import StudyForm from "./StudyForm";
import WorkForm from "./WorkForm";
import FullUserData from './FullUserData';

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstName: "",
      lastName: "",
      email: "",
      position: "",
      phoneNumber: "",
      schools: [{
        nameSchool: "",
        specialty: "",
        startDate: "",
        finishDate: "",
      }],
      companies: [{
        companyName: "",
        position: "",
        startDate: "",
        finishDate: "",
      }],

      firstNameValid: false,
      lastNameValid: false,
      emailValid: false,
      positionValid: false,
      phoneNumberValid: false,
      isContinueUserDetailsButtonDisabled: true
    };
  }


  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  addSchool = () => {
    this.setState((prevState) => {
      return {
        schools: [...prevState.schools, {
          nameSchool: "",
          specialty: "",
          startDate: "",
          finishDate: "",
        }
        ]
      };
    });
  };

  addCompany = () => {
    this.setState((prevState) => {
      return {
        companies: [...prevState.companies, {
          nameSchool: "",
          specialty: "",
          startDate: "",
          finishDate: "",
        }
        ]
      };
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  validateField = (input, value) => {
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let emailValid = this.state.emailValid;
    let positionValid = this.state.positionValid;
    let phoneNumberValid = this.state.phoneNumberValid;
    switch (input) {
      case 'firstName':
        firstNameValid = value.length > 0;
        break;
      case 'lastName':
        lastNameValid = value.length > 0;
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        break;
      case 'position':
        positionValid = value.length > 0;
        break;
      case 'phoneNumber':
        phoneNumberValid = value.match(/\+380+[0-9]{9}/i);
        break;
      default:
        break;
    }
    const result = {
      firstNameValid,
      lastNameValid,
      emailValid,
      positionValid,
      phoneNumberValid
    }
    this.setState({ ...result }, () => {
      const isContinueUserDetailsButtonDisabled = !Object.values(result).every(item => item);
      this.setState({ isContinueUserDetailsButtonDisabled });
    });
  }

  // Handle fields change
  handleChange = (input) => (e) => {
    const value = e.target.value;
    this.setState({ [input]: value }, () => this.validateField(input, value));
  };

  handleSchoolChange = (idx, input) => {
    return (e) => {
      const value = e.target.value;
      this.setState((prevState)=> {
        const school = prevState.schools[idx]
        school[input]=value;
        return { schools: [...prevState.schools.slice(0, idx), school, ...prevState.schools.slice(idx+1)] }
      })
    };
  }

  handleCompanyChange = (idx, input) => {
    return (e) => {
      const value = e.target.value;
      this.setState((prevState)=> {
        const company = prevState.companies[idx]
        company[input]=value;
        return { companies: [...prevState.companies.slice(0, idx), company, ...prevState.companies.slice(idx+1)] }
      })
    };
  }

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      position,
      phoneNumber,
      email,
      nameSchool,
      specialty,
      startDate,
      finishDate,
      companyName,
      firstNameValid,
      lastNameValid,
      emailValid,
      positionValid,
      phoneNumberValid,
      isContinueUserDetailsButtonDisabled,
      schools,
      companies
      
    } = this.state;
    const values = {
      firstName,
      lastName,
      position,
      phoneNumber,
      email,
      nameSchool,
      specialty,
      startDate,
      finishDate,
      companyName,
      firstNameValid,
      lastNameValid,
      emailValid,
      positionValid,
      phoneNumberValid,
      isContinueUserDetailsButtonDisabled,
      schools,
      companies
      
    };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <StudyForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleSchoolChange}
            addSchool={this.addSchool}
            values={values}
          />
        );
      case 3:
        return (
          <WorkForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleCompanyChange}
            addCompany={this.addCompany}
            values={values}
          />
        );
      case 4:
        return (
          <FullUserData
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      default:
        console.log("This is a multi-step form built with React.");
    }
  }
}

export default UserForm;
