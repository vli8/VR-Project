import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link, Switch} from 'react-router-dom'
import VRHomepage from './components/VR-presentaion'

class App extends React.Component {
  

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render () {
    return (
      <HashRouter>
        <Switch>
          <Route exact path = '/home' component = {VRHomepage}/>
        </Switch>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));