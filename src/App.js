import React, { Component } from 'react';
import FeelForm from './FeelForm';
import FeelContainer from './FeelContainer';
import { Row, Col, PageHeader, ButtonGroup } from 'react-bootstrap';

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
      <PageHeader>
          {"Don't wanna re-write my proposal"}
      </PageHeader>
        <Row className="show-grid">
          <Col xs={6} md={4}>
          </Col>
          <Col xs={6} md={4}>
            <div className="goofy">
              <ButtonGroup>
                <button className="btn" onClick={this.toggleForm}>Add New Feel</button>
                <button className="btn" onClick={this.toggleContainer}>Show All Feels</button>
              </ButtonGroup>
              <br/>
              <br/>
              {this.state.showFeelForm && <FeelForm />}
              {this.state.showFeelContainer && <FeelContainer />}
            </div>
          </Col>
          <Col xs={6} md={4}>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
