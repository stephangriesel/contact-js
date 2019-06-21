import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../css/FormUserDetails.css';

class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <div class="formFields">
                    <TextField
                        hintText="Enter First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName} 
                    />
                    <TextField
                        hintText="Enter Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName} 
                    />
                    <TextField
                        hintText="Enter Email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email} 
                    />
                    <TextField
                        hintText="Enter Phone"
                        floatingLabelText="Phone"
                        onChange={handleChange('phone')}
                        defaultValue={values.phone} 
                    />
                    <TextField
                        hintText="Enter Message"
                        floatingLabelText="Message"
                        onChange={handleChange('message')}
                        defaultValue={values.message} 
                    />
                    <RaisedButton 
                        label="continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </div>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin:15,
        width:'20%'
    }
}

export default FormUserDetails;
