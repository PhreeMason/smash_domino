import React, { Component } from 'react';
import { Container } from 'native-base';

import MyHeader from '../components/MyHeader';
import MyFooter from '../components/MyFooter';
import BattlePage from '../components/BattlePage';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <MyHeader />
        <BattlePage />
        <MyFooter />
      </Container>
    );
  }
}