import React, { Component } from 'react';
import logo from './logo.jpg';
import {StyleRoot} from 'radium';
import './App.css';
import store from './store/index';
import {Provider} from 'react-redux';
import Routes from './Router';
require('./index.css');




class App extends Component {
  render() {
    return (
      <Provider store={store}>
     <StyleRoot >
        <Routes />
      </StyleRoot>
      </Provider>
    );
  }
}

export default App;
