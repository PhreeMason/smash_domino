import React, { Component } from 'react';
import { View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import { Image, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 40,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

const images = [{ text: 'Mexico', name: 'Spaniard', image: require('../assets/img/island.jpg') }]

const BattlePage = () => {
  return (
    <Grid>
    <LinearGradient colors={['#FFD3A5', '#FD6585']} locations={[0.1, 1]} style={{ width: Dimensions.get('window').width }}>
        <Row size={2}>

          <Col style={{}} size={1}></Col>
          <Col size={3}>
            <View>
              <DeckSwiper
                dataSource={images}
                renderItem={item =>
                  <Card style={{ elevation: 3 }}>
                    <CardItem>
                      <Thumbnail source={item.image} />
                      <Body>
                        <Text>{item.text}</Text>
                        <Text note>NativeBase</Text>
                      </Body>
                    </CardItem>
                    <CardItem cardBody>
                      <Image style={{ height: 300, flex: 1 }} source={item.image}/>
                    </CardItem>
                    <CardItem>
                      <Icon name="heart" style={{ color: '#ED4A6A' }} />
                      <Text>{item.name}</Text>
                    </CardItem>
                  </Card>
                }
              />
            </View>
          </Col>
          <Col style={{}} size={1}></Col>
        </Row>
        <Row size={1}>
          <Col size={1}></Col>
          <Col size={3} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <LinearGradient colors={['#e65c00', '#f9d423']} style={{
              height: 150,
              width: 250,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25
            }}>
              <Button transparent full style={{ height: 150 }}>
                <Text>
                  Play
            </Text>
              </Button>
            </LinearGradient>
          </Col>
          <Col size={1}></Col>
        </Row>
    </LinearGradient>
      </Grid>
  );
}

export default BattlePage