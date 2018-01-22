import React, { Component } from 'react';
import { Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';

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

const BattlePage = () => {
  return (
    <Grid>
      <Row size={2}>
        <Col style={{ backgroundColor: '#00CE9F' }} size={1}></Col>
        <Col style={{ backgroundColor: '#635DB7' }} size={3}>

        </Col>
        <Col style={{ backgroundColor: '#00CE9F' }} size={1}></Col>
      </Row>
      <Row size={1}>
        <Col size={1}></Col>
        <Col size={3}>
          <LinearGradient colors={['#e65c00', '#f9d423']} style={styles.linearGradient}>
            <Text style={styles.buttonText}>
              Play
            </Text>
          </LinearGradient>
        </Col>
        <Col size={1}></Col>
      </Row>
    </Grid>
  );
}


export default BattlePage