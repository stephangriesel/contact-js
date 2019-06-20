import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Form style={{ width: '50%' }}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="name">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="name">Message:</Label>
          <Input
            type="textarea"
            name="message"
            onChange={this.handleChange}
          />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
}

export default App;
