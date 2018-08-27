import React from 'react';
import FeelCard from './FeelCard';
import { Card } from 'semantic-ui-react'

export default class FeelContainer extends React.Component {

  state = {
    feels: [],
  }

  componentDidMount(){
    fetch('http://localhost:3000/feels/')
      .then(resp => resp.json())
      .then(
        resp => this.setState({feels: resp})
      )
  }

  render() {
    console.log(this.state)
    return (
      <Card.Group>
      { this.state.feels.map(
          fetchedFeel =>
          <FeelCard feel={fetchedFeel}
           key={fetchedFeel.id} /> )
      }
      </Card.Group>
    );
  }
}
