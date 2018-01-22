import React, { Component } from 'react';
import { Footer, Button, Icon, Text, FooterTab, Badge } from 'native-base';

const MyFooter = () => {
  return (
    <Footer>
      <FooterTab>
        <Button vertical>
          <Icon name="apps" />
        </Button>
        <Button vertical>
          <Icon name="camera" />
        </Button>
        <Button active>
          <Icon active name="navigate" />
          <Text>Navigate</Text>
        </Button>
        <Button badge vertical>
          <Badge><Text>11</Text></Badge>
          <Icon active name="chatbubbles" />
        </Button>
        <Button vertical>
          <Icon name="people" />
        </Button>
      </FooterTab>
    </Footer>
  );
}


export default MyFooter