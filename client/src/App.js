import React from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

function App() {
  return (
    <Form>
      <FormGroup>
        <Label for="name">Name:</Label>
        <Input 
          type="text"
          name="name"
          // onChange={this.handleChange} 
          />
      </FormGroup>

      <FormGroup>
        <Label for="name">Email:</Label>
        <Input 
          type="email"
          name="email"
          // onChange={this.handleChange} 
          />
      </FormGroup>

      <FormGroup>
        <Label for="name">Message:</Label>
        <Input 
          type="textarea"
          name="message"
          // onChange={this.handleChange} 
          />
      </FormGroup>

      <Button>Submit</Button>
    </Form>
  );
}

export default App;
