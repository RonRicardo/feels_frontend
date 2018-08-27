import React, { Component } from 'react';
import FeelForm from './components/FeelForm';
import FeelContainer from './components/FeelContainer';
import { BrowserRouter as Router, Route } from 'react-router';

class App extends Component {
  state = {
    showFeelForm: true,
    showFeelContainer: false,
  }

  toggleContainer = (prevState) => {
    this.setState((prevState) => {
      return {showFeelContainer: !prevState.showFeelContainer};
    })
  }

  toggleForm = (prevState) => {
    this.setState((prevState) => {
      return {showFeelForm: !prevState.showFeelForm};
    })
  }



  render() {
    console.log(this.state)
    return (
      <div className="App">
          {"Don't wanna re-write my proposal"}
                <button className="btn" onClick={this.toggleForm}>Add New Feel</button>
                <button className="btn" onClick={this.toggleContainer}>Show All Feels</button>
              <br/>
              <br/>
              {this.state.showFeelForm && <FeelForm />}
              {this.state.showFeelContainer && <FeelContainer />}
      </div>
    );
  }
}

export default App;
