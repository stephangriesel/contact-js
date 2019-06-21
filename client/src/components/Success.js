import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import '../css/FormUserDetails.css';


class Success extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="formFields">
                   <h1>Thank you for your message</h1>
                   <p>We will get back to you as soon as possible.</p>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Success;
