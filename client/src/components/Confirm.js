import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import '../css/FormUserDetails.css';
import axios from 'axios';


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

    async handleSubmit(e) {
        e.preventDefault()
    
        const {
          name, email, message
        } = this.state
    
        const form = await axios.post('/api/form', {
          name,
          email,
          message
        })
      };


    render() {
        const { values: { firstName, lastName, email, phone, message, location} } = this.props;
        return (
            <MuiThemeProvider>
                <div class="formFields">
                   <List>
                       <ListItem 
                        primary="First Name"
                        secondaryText={ firstName }
                       />
                   </List>
                   <List>
                       <ListItem 
                        primary="Last Name"
                        secondaryText={ lastName }
                       />
                   </List>
                   <List>
                       <ListItem 
                        primary="Email"
                        secondaryText={ email }
                       />
                   </List>
                   <List>
                       <ListItem 
                        primary="Phone"
                        secondaryText={ phone }
                       />
                   </List>
                   <List>
                       <ListItem 
                        primary="Message"
                        secondaryText={ message }
                       />
                   </List>
                   <List>
                       <ListItem 
                        primary="Location"
                        secondaryText={ location }
                       />
                   </List>
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
