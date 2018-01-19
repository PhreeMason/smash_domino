import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux'
import MainPage from './app/containers/MainPage'
import store from './app/redux/store'
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

const AppNavigator = StackNavigator(
  {
    MainPage: { screen: MainPage },
  },
  {
    initialRouteName: "MainPage",
    headerMode: "none"
  }
);

export default class App extends Component {
  render() {
    return (
      <Root>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </Root>
    );
  }
}
