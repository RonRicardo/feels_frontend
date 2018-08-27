import React from 'react';
// import { FormGroup } from 'react-bootstrap';

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


    // getValidationState = () => {
    //   const length = this.state.value.length;
    //   if (length > 10) return 'success';
    //   else if (length > 5) return 'warning';
    //   else if (length > 0) return 'error';
    //   return null;
    // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Thought:
          <input
            name="thought"
            onChange={this.handleInputChange} />
        </label>
        <br />

        <label>
          Emotion:
          <input
            name="emotion"
            onChange={this.handleInputChange} />
        </label>
        <br />


        <label>
          Support:
          <input
            name="support"
            onChange={this.handleInputChange} />
        </label>
        <br />

        <label>
          Against:
          <input
            name="against"
            onChange={this.handleInputChange} />
        </label>
        <br />

        <label>
          Alternate Thought:
          <input
            name="alternate_thought"
            onChange={this.handleInputChange} />
        </label>
        <br />

        <label>
          Alternate Emotion:
          <input
            name="alternate_emotion"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <input className="btn" type="submit" value="Submit" />
      </form>
    );
  }
}
