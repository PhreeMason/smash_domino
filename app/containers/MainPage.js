import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  View,
  Button,
  Left,
  Right,
  Badge,
  Body,
  Icon,
  Text,
  ActionSheet
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
const BUTTONS = [
  { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
  { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];

const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Grid>
            <Col style={{ backgroundColor: '#635DB7', height: 500 }}>
              <Button
                onPress={() =>
                  ActionSheet.show(
                    {
                      options: BUTTONS,
                      cancelButtonIndex: CANCEL_INDEX,
                      destructiveButtonIndex: DESTRUCTIVE_INDEX,
                      title: "Testing ActionSheet"
                    },
                    buttonIndex => {
                      this.setState({ clicked: BUTTONS[buttonIndex] });
                    }
                  )}
              >
                <Text>I am really cool</Text>
              </Button>
            </Col>
            <Col style={{ backgroundColor: '#00CE9F', height: 200 }}>
            </Col>
          </Grid>
        </Content>
        <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
          <Button iconLeft>
            <Icon name="arrow-back" />
            <Text>Swipe Left</Text>
          </Button>
          <Button iconRight>
            <Text>Swipe Right</Text>
            <Icon name="arrow-forward" />
          </Button>
        </View>
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
      </Container>
    );
  }
}