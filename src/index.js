import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom'
import VRHomepage from './components/VR-presentaion'
import {Provider} from 'react-redux'
import store from './store'
import Homepage from './components/Form'

class App extends React.Component {
  

  changeColor() {
    const colors=['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render () {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/home' component={VRHomepage}/>
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));