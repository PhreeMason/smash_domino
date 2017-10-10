import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux'
import Board from './app/Components/Board'
import store from './app/redux/store'


export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <Board />
      </Provider>
    );
  }
}