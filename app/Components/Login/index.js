import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image
  } from 'react-native';

export default class Login extends Component {
    render(){
        return(
          <View style={styles.container}>

            <View style={styles.logoContainer}>
              <Text> HI </Text>
            </View>

            <View style={styles.container}>
              <Text> HI </Text>
            </View>

          </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#3498db'
  }
})