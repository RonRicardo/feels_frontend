import React, { Component } from 'react';
import FeelForm from './components/FeelForm';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUp';
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
        <Switch>
          <Route exact path='/login' component={LoginForm}/>
          <Route path='/home' component={Home}/>
          <Route path='/signup' component={SignUpForm}/>
          <Route path='/new_feeling' component={FeelForm}/>
          <Route path='/feelings' component={FeelContainer}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
