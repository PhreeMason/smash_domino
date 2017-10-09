import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux'
import Viewport from './app/Components/Viewport'
import store from './app/redux/store'


export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <Viewport />
      </Provider>
    );
  }
}