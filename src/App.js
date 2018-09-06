import React, { Component } from 'react';
import FeelForm from './components/FeelForm';
import FeelContainer from './components/FeelContainer';
import Nav from './components/NavBar'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router';
import Flexbox from 'flexbox-react';


class App extends Component {
  render() {
    console.log(this.state)
    return (
      <div className="App">
      <Nav/>
          {/* a cute picture or something on home idk */}
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/new_feeling' component={FeelForm}/>
        <Route path='/feelings' component={FeelContainer}/>
      </Switch>
      </div>
    );
  }
}

export default withRouter(App);
