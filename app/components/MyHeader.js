import React, { Component } from 'react';
import {
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';

const MyHeader = () => {
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name='person' />
        </Button>
      </Left>
      <Body>
        <Title>cowNerd47</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name='settings' />
        </Button>
      </Right>
    </Header>
  );
}


export default MyHeader