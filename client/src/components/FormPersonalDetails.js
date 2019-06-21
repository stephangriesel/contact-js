import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../css/FormUserDetails.css';

class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <div class="formFields">
                    <TextField
                        hintText="Enter location"
                        floatingLabelText="Location"
                        onChange={handleChange('location')}
                        defaultValue={values.location} 
                    />
                    <div className="buttonPosition">
                    <RaisedButton 
                        label="continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton 
                        label="back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    </div>
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

export default FormPersonalDetails;
