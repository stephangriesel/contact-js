import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import '../css/FormUserDetails.css';


class FormUserDetails extends Component {

    continue = e => {

        e.preventDefault();
        // Process Form
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values: { firstName, lastName, email, phone, message, location} } = this.props;
        return (
            <MuiThemeProvider>
                <div className="formFields">
                   <List>
                       <ListItem 
                        primaryText="First Name"
                        secondaryText={ firstName }
                       />
                   </List>
                   <List>
                       <ListItem 
                        primaryText="Last Name"
                        secondaryText={ lastName }
                       />
                   </List>
                   <List>
                       <ListItem 
                        primaryText="Email"
                        secondaryText={ email }
                       />
                   </List>
                   <List>
                       <ListItem 
                        primaryText="Phone"
                        secondaryText={ phone }
                       />
                   </List>
                   <List>
                       <ListItem 
                        primaryText="Message"
                        secondaryText={ message }
                       />
                   </List>
                   <List>
                       <ListItem 
                        primaryText="Location"
                        secondaryText={ location }
                       />
                   </List>
                   <div className="buttonPosition">
                    <RaisedButton 
                        label="confirm"
                        primary={true}
                        style={styles.button}
                        onSubmit={this.handleSubmit}
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

export default FormUserDetails;
