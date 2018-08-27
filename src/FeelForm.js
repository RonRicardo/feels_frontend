import React from 'react';
import { Button, Form } from 'semantic-ui-react';

export default class FeelForm extends React.Component {

    state = {
      thought: '',
      emotion: '',
      support: '',
      against: '',
      alternate_thought: '',
      alternate_emotion: '',
      user_id: 1
    }

    handleInputChange = (event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
    }

    handleSubmit = (event) => {
      event.preventDefault();
     fetch('http://localhost:3000/feels/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          feel: {...this.state}
        }),
      });

     };


  render() {
    return (
      <Form>
        <Form.Field>
          <label>Thought:</label>
            <input
            name="thought"
            onChange={this.handleInputChange} />
        </Form.Field>

        <Form.Field>
          <label>Emotion:</label>
            <input
            name="emotion"
            onChange={this.handleInputChange} />
        </Form.Field>

        <Form.Field>
          <label>Support:</label>
            <input
            name="support"
            onChange={this.handleInputChange} />
        </Form.Field>

        <Form.Field>
          <label>Against:</label>
            <input
            name="against"
            onChange={this.handleInputChange} />
        </Form.Field>

        <Form.Field>
          <label>Alternate Thought:</label>
            <input
            name="alternate_thought"
            onChange={this.handleInputChange} />
        </Form.Field>

        <Form.Field>
          <label>Alternate Emotion:</label>
            <input
            name="alternate_emotion"
            onChange={this.handleInputChange} />
        </Form.Field>
    <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
  </Form>
    );
  }
}
