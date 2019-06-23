import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import '../css/FormUserDetails.css';
import axios from 'axios';


class FormUserDetails extends Component {
    constructor() {
        super()
    
        this.state = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          location: ''
        }
    
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

      handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    async handleSubmit(e) {
        e.preventDefault()
    
        const {
          firstName, 
          lastName, 
          email, 
          phone, 
          message, 
          location
        } = this.state
    
        const form = await axios.post('/api/form', {
          firstName,
          lastName,
          email,
          phone,
          message,
          location
        })
      }

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
        const { values: { firstName, lastName, email, phone, message, location } } = this.props;
        return (
            <MuiThemeProvider>
                <div className="formFields">
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={firstName}
                        />
                    </List>
                    <List>
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                    </List>
                    <List>
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                        />
                    </List>
                    <List>
                        <ListItem
                            primaryText="Phone"
                            secondaryText={phone}
                        />
                    </List>
                    <List>
                        <ListItem
                            primaryText="Message"
                            secondaryText={message}
                        />
                    </List>
                    <List>
                        <ListItem
                            primaryText="Location"
                            secondaryText={location}
                        />
                    </List>
                    <div className="buttonPosition">
                        <RaisedButton
                            label="confirm"
                            primary={true}
                            style={styles.button}
                            onSubmit={(e) => this.handleSubmit(e)}
                            // onClick={this.continue}
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
        margin: 15,
        width: '20%'
    }
}

export default FormUserDetails;
