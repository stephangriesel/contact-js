import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';

class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    location: ''
  }

  // Go to next step

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  // Go to next previous step

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  // Handle change

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      email,
      phone,
      message,
      location
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      phone,
      message,
      location
    }
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        )
      case 4:
        return <h1>Success</h1>
    }
  }
}

export default UserForm;
